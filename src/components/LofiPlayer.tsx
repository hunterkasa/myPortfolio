"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  SkipForward, 
  Volume2, 
  Volume1, 
  VolumeX, 
  Radio, 
  CloudRain,
  Disc3 
} from "lucide-react";

export interface LofiTrack {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export const LOFI_PLAYLIST: LofiTrack[] = [
  {
    id: "tape-01",
    title: "Tape 01: Midnight Coding Session",
    subtitle: "Faded Keys & Terminal Cursor",
    url: "/audio/tape-01.mp3",
  },
  {
    id: "tape-02",
    title: "Tape 02: Late Night at AIUB Campus",
    subtitle: "Soft Chords & Coffee Cup",
    url: "/audio/tape-02.mp3",
  },
  {
    id: "tape-03",
    title: "Tape 03: Rainy Rickshaw Ride",
    subtitle: "Chillhop Beat & Windowpane Drops",
    url: "/audio/tape-03.mp3",
  },
];

export default function LofiPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.65);
  const [rainActive, setRainActive] = useState(false);
  const [isSwappingTape, setIsSwappingTape] = useState(false);

  // Audio references for dual layer
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rainAudioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const currentTrack = LOFI_PLAYLIST[currentTrackIndex];

  // Helper format mm:ss
  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "00:00";
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Initialize both audio elements on mount
  useEffect(() => {
    // 1. Primary Music Track Player
    const audio = new Audio();
    audio.preload = "metadata";
    audio.src = LOFI_PLAYLIST[0].url;
    audio.volume = volume;
    audioRef.current = audio;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsBuffering(false);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const onWaiting = () => {
      setIsBuffering(true);
    };

    const onPlaying = () => {
      setIsBuffering(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      handleNextTrack();
    };

    const onError = (e: Event) => {
      console.warn("Track audio playback notice:", e);
      setIsBuffering(false);
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);

    // 2. Ambient Rain Audio Player Layer
    const rainAudio = new Audio();
    rainAudio.preload = "auto";
    rainAudio.src = "/audio/rain.mp3";
    rainAudio.loop = true;
    rainAudio.volume = isMuted ? 0 : volume * 0.75;
    rainAudioRef.current = rainAudio;

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
      audio.src = "";

      rainAudio.pause();
      rainAudio.src = "";
    };
  }, []);

  // Toggle Rain FX Layer
  const toggleRainLayer = () => {
    if (!rainAudioRef.current) return;

    if (rainActive) {
      rainAudioRef.current.pause();
      setRainActive(false);
    } else {
      const targetGain = isMuted ? 0 : volume * 0.75;
      rainAudioRef.current.volume = targetGain;
      rainAudioRef.current
        .play()
        .then(() => {
          setRainActive(true);
        })
        .catch((err) => {
          console.warn("Rain audio play notice:", err);
        });
    }
  };

  // Toggle Music Track Playback
  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      setIsBuffering(true);
      audioRef.current
        .play()
        .then(() => {
          setIsBuffering(false);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay interaction notice:", err);
          setIsBuffering(false);
          setIsPlaying(false);
        });
    }
  };

  // Next Track with Mechanical Tape Swap Animation
  const handleNextTrack = () => {
    setIsSwappingTape(true);
    setTimeout(() => setIsSwappingTape(false), 380);

    const nextIndex = (currentTrackIndex + 1) % LOFI_PLAYLIST.length;
    setCurrentTrackIndex(nextIndex);

    if (audioRef.current) {
      const nextTrack = LOFI_PLAYLIST[nextIndex];
      audioRef.current.src = nextTrack.url;
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsBuffering(true);

      audioRef.current
        .play()
        .then(() => {
          setIsBuffering(false);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Next track playback notice:", err);
          setIsBuffering(false);
        });
    }
  };

  // Seek on center tape window progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newSeekTime = seekPercentage * duration;

    audioRef.current.currentTime = newSeekTime;
    setCurrentTime(newSeekTime);
  };

  // Volume slider adjustments (controls both track and rain layers)
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    const muted = newVol === 0;
    setIsMuted(muted);

    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }

    if (rainAudioRef.current) {
      rainAudioRef.current.volume = muted ? 0 : newVol * 0.75;
    }
  };

  // Mute / Unmute Toggle
  const toggleMute = () => {
    if (isMuted) {
      const restoreVol = previousVolume > 0 ? previousVolume : 0.65;
      setVolume(restoreVol);
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = restoreVol;
      if (rainAudioRef.current) rainAudioRef.current.volume = restoreVol * 0.75;
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
      if (rainAudioRef.current) rainAudioRef.current.volume = 0;
    }
  };

  // Calculate current progress percentage
  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  return (
    <div className="w-full bg-[#17102e] border border-[#322358] rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden group">
      {/* Tape Deck Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2a1d47] text-xs font-mono">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
          <span className="text-[#e9d5ff] font-bold tracking-wide">LOFI CASSETTE DECK // STEREO</span>
        </div>

        {/* Dynamic Status Badge */}
        <div className="flex items-center gap-2">
          {rainActive && (
            <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-[#1b1235] text-[#c084fc] border border-[#5b3f9c] flex items-center gap-1 animate-pulse">
              <CloudRain className="w-2.5 h-2.5" aria-hidden="true" />
              <span>+ RAIN</span>
            </span>
          )}

          <span
            className={`text-[11px] px-2.5 py-0.5 rounded font-mono font-semibold transition-all duration-300 flex items-center gap-1.5 ${
              isBuffering
                ? "bg-[#251b42] text-[#fcd34d] border border-[#fcd34d]/50 animate-pulse"
                : isPlaying
                ? "bg-[#20173e] text-[#f8f4ff] border border-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.3)]"
                : "bg-[#140e26] text-[#9f8ec2] border border-[#322358]"
            }`}
          >
            {isBuffering ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fcd34d] animate-ping" />
                <span>BUFFERING...</span>
              </>
            ) : isPlaying ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
                <span>PLAYING // STEREO</span>
              </>
            ) : (
              <span>DECK IDLE</span>
            )}
          </span>
        </div>
      </div>

      {/* Cassette Graphic View */}
      <div className="bg-[#120c24] border border-[#322358] rounded-xl p-3.5 mb-4 relative overflow-hidden">
        {/* Cassette Label Tape with Transition Animation */}
        <div
          className={`bg-[#20173e] border border-[#5b3f9c]/50 rounded-md p-2.5 mb-3 flex items-center justify-between transition-all duration-300 ${
            isSwappingTape ? "opacity-50 scale-[0.99] translate-y-0.5" : "opacity-100 scale-100"
          }`}
        >
          <div className="truncate pr-2">
            <div className="text-xs font-mono font-bold text-[#f8f4ff] truncate flex items-center gap-1.5">
              <span>{currentTrack.title}</span>
            </div>
            <div className="text-[10px] font-mono text-[#d8c8f2] truncate">
              {currentTrack.subtitle}
            </div>
          </div>

          {/* Live Timer Display (Current Time / Duration) */}
          <div className="font-mono text-xs font-bold text-[#f8f4ff] bg-[#120c24] px-2.5 py-1 rounded border border-[#3e2c6c] whitespace-nowrap shadow-inner flex items-center gap-1">
            <span className="text-[#c084fc]">{formatTime(currentTime)}</span>
            {duration > 0 && (
              <>
                <span className="text-[#9f8ec2]/60">/</span>
                <span className="text-[#d8c8f2]">{formatTime(duration)}</span>
              </>
            )}
          </div>
        </div>

        {/* Cassette Mechanical Wheels & Central Seekable Tape Window */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 py-2">
          {/* Left Reel (L-REEL) */}
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="w-12 h-12 rounded-full border-2 border-[#c084fc]/70 bg-[#1b1235] flex items-center justify-center transition-transform shadow-inner"
              style={{
                animation: "spin-slow 4s linear infinite",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
              aria-hidden="true"
            >
              {/* Center Spindle */}
              <div className="w-4 h-4 rounded-full border border-[#e9d5ff] bg-[#0c0817] z-10" />
              {/* Spoke Teeth */}
              <div className="absolute w-8 h-1 bg-[#c084fc]/60" />
              <div className="absolute w-1 h-8 bg-[#c084fc]/60" />
              <div className="absolute w-6 h-6 border border-[#c084fc]/30 rounded-full" />
            </div>
            <span className="text-[9px] font-mono text-[#c084fc] font-semibold mt-1">L-REEL</span>
          </div>

          {/* Central Magnetic Tape Window with Interactive Seek / Progress Bar */}
          <div className="flex-1 max-w-[170px] sm:max-w-[210px] flex flex-col items-center">
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              role="slider"
              aria-label="Seek tape position"
              aria-valuemin={0}
              aria-valuemax={Math.floor(duration)}
              aria-valuenow={Math.floor(currentTime)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (!audioRef.current || !duration) return;
                if (e.key === "ArrowRight") {
                  audioRef.current.currentTime = Math.min(duration, currentTime + 5);
                } else if (e.key === "ArrowLeft") {
                  audioRef.current.currentTime = Math.max(0, currentTime - 5);
                }
              }}
              className="w-full h-5 bg-[#0e091a] border border-[#5b3f9c]/60 rounded-md relative overflow-hidden flex items-center cursor-pointer shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] group/seek focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
              title="Click or drag to seek"
            >
              {/* Vintage Magnetic Tape Substrate */}
              <div className="absolute inset-y-1.5 left-0 right-0 bg-[#291b4a] opacity-80" />

              {/* Glowing Tape Progress Bar */}
              <div
                className="absolute inset-y-1 left-0 bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#c084fc] rounded-sm transition-all duration-150 shadow-[0_0_8px_rgba(192,132,252,0.6)]"
                style={{ width: `${progressPercent}%` }}
              />

              {/* Magnetic Read Head Mark in the Center */}
              <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-[#f8f4ff]/50 pointer-events-none z-10" />

              {/* Hover Cursor Scrub Notch */}
              <div
                className="absolute w-1.5 h-3.5 bg-white rounded-full shadow-md pointer-events-none -translate-x-1/2 z-20 opacity-0 group-hover/seek:opacity-100 transition-opacity"
                style={{ left: `${progressPercent}%` }}
              />
            </div>

            <div className="w-full flex justify-between text-[8px] font-mono text-[#9f8ec2] mt-1 px-1">
              <span>00:00</span>
              <span className="text-[#c084fc] uppercase tracking-wider font-semibold">TAPE WINDOW</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right Reel (R-REEL) */}
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="w-12 h-12 rounded-full border-2 border-[#c084fc]/70 bg-[#1b1235] flex items-center justify-center transition-transform shadow-inner"
              style={{
                animation: "spin-slow 4s linear infinite",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
              aria-hidden="true"
            >
              {/* Center Spindle */}
              <div className="w-4 h-4 rounded-full border border-[#e9d5ff] bg-[#0c0817] z-10" />
              {/* Spoke Teeth */}
              <div className="absolute w-8 h-1 bg-[#c084fc]/60" />
              <div className="absolute w-1 h-8 bg-[#c084fc]/60" />
              <div className="absolute w-6 h-6 border border-[#c084fc]/30 rounded-full" />
            </div>
            <span className="text-[9px] font-mono text-[#c084fc] font-semibold mt-1">R-REEL</span>
          </div>
        </div>
      </div>

      {/* Control Buttons & Audio Sliders */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Primary Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlayback}
            className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold rounded-lg transition-all active:scale-[0.98] shadow-md focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none min-h-[40px] ${
              isPlaying
                ? "bg-[#291b4a] text-[#f8f4ff] border border-[#c084fc] hover:bg-[#34225e] shadow-[0_0_12px_rgba(192,132,252,0.3)]"
                : "bg-[#c084fc] text-[#0c0817] hover:bg-[#d8b4fe]"
            }`}
            aria-label={isPlaying ? "Pause current lofi tape" : "Play lofi tape"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>PAUSE TAPE</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                <span>PLAY TAPE</span>
              </>
            )}
          </button>

          {/* Next Tape Button */}
          <button
            type="button"
            onClick={handleNextTrack}
            className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono font-semibold text-[#f8f4ff] bg-[#20173e] hover:bg-[#291e4e] border border-[#3e2c6c] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] min-h-[40px]"
            title="Cycle to next tape in playlist"
            aria-label="Next Tape"
          >
            <SkipForward className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
            <span>NEXT TAPE</span>
          </button>

          {/* Toggleable Ambient Rain Layer */}
          <button
            type="button"
            onClick={toggleRainLayer}
            className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-mono font-medium rounded-lg transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none min-h-[40px] ${
              rainActive
                ? "bg-[#291b4a] text-[#c084fc] border border-[#c084fc] shadow-[0_0_10px_rgba(192,132,252,0.35)] font-semibold"
                : "bg-[#140e26] text-[#d8c8f2] border border-[#322358] hover:border-[#5b3f9c] hover:text-[#f8f4ff]"
            }`}
            title="Layer ambient soothing rain audio over lofi beats"
            aria-label={rainActive ? "Disable ambient rain layer" : "Enable ambient rain layer"}
          >
            <CloudRain className={`w-3.5 h-3.5 ${rainActive ? "text-[#c084fc] animate-pulse" : "text-[#9f8ec2]"}`} aria-hidden="true" />
            <span>{rainActive ? "RAIN FX: ON" : "RAIN FX: OFF"}</span>
          </button>
        </div>

        {/* Volume Slider & Speaker Mute Toggle */}
        <div className="flex items-center gap-2 bg-[#120c24] px-3 py-1.5 rounded-lg border border-[#322358]">
          <button
            type="button"
            onClick={toggleMute}
            className="cursor-pointer text-[#c084fc] hover:text-[#f8f4ff] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded p-1 transition-colors min-w-[28px] min-h-[28px] flex items-center justify-center"
            title={isMuted ? "Unmute audio" : "Mute audio"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-[#f472b6]" aria-hidden="true" />
            ) : volume < 0.5 ? (
              <Volume1 className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-18 sm:w-24 accent-[#c084fc] cursor-pointer"
            aria-label="Master volume control"
          />
        </div>
      </div>
    </div>
  );
}
