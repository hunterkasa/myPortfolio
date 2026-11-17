"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Tv, 
  Disc3, 
  Clock, 
  Volume2, 
  Award, 
  GraduationCap, 
  Code2, 
  Radio 
} from "lucide-react";

export default function VideoIntro() {
  if (!portfolioData.showVideoIntro) {
    return null;
  }

  const { videoIntro } = portfolioData;

  return (
    <section 
      id="intro" 
      className="py-16 md:py-24 border-b border-[#322358] bg-[#0c0817] lofi-grid-bg relative overflow-hidden scroll-mt-20"
      aria-labelledby="video-intro-heading"
    >
      {/* Background Soft Purple Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-purple-600/[0.07] blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#322358] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c084fc]" />
              </span>
              <span>TAPE 00</span>
              <span>•</span>
              <span>VIDEO LOG // CANDIDATE INTRODUCTION</span>
            </div>
            <h2 
              id="video-intro-heading" 
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]"
            >
              Video Introduction
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs sm:text-sm font-mono text-[#d8c8f2] max-w-lg leading-relaxed">
              Recorded personal introduction covering academic foundation at AIUB, algorithmic problem solving milestones, and software engineering philosophy.
            </p>
          </div>
        </div>

        {/* Video Player Console Card */}
        <div className="bg-[#17102e] border border-[#322358] hover:border-[#5b3f9c]/80 rounded-2xl p-3.5 sm:p-6 shadow-2xl relative transition-all duration-300 group">
          {/* Deck Top Bezel Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-4 border-b border-[#2a1d47] text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#120c24] border border-[#3e2c6c] text-[#e9d5ff]">
                <Tv className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                <span className="font-bold text-[#f8f4ff]">{videoIntro.label}</span>
              </span>
              <span className="hidden sm:inline text-[#9f8ec2] text-[11px]">
                {videoIntro.codec}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 text-[#d8c8f2] bg-[#120c24] px-2.5 py-1 rounded border border-[#2a1d47]">
                <Volume2 className="w-3 h-3 text-[#c084fc]" aria-hidden="true" />
                <span>STEREO</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[#c084fc] font-bold bg-[#20173e] border border-[#5b3f9c] px-2.5 py-1 rounded">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span>{videoIntro.duration} RUNTIME</span>
              </span>
            </div>
          </div>

          {/* Video Viewport Container */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-black/95 border border-[#3e2c6c] shadow-[0_0_35px_rgba(0,0,0,0.6)] flex items-center justify-center">
            <video
              controls
              playsInline
              preload="metadata"
              poster={videoIntro.poster}
              className="w-full aspect-video sm:aspect-[4/3] max-h-[580px] object-contain rounded-xl bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]"
              aria-label="Video introduction by Kazi Shoiab Ahmed Saad"
            >
              <source src={videoIntro.src} type="video/mp4" />
              Your browser does not support HTML5 video playback. You can download or view the video directly at{" "}
              <a href={videoIntro.src} className="text-[#c084fc] underline">
                intro.mp4
              </a>
              .
            </video>
          </div>

          {/* Console Lower Metadata Strip: Academic & Engineering Benchmarks */}
          <div className="mt-5 pt-4 border-t border-[#2a1d47] grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
              <div className="flex items-center gap-1.5 text-[10px] text-[#9f8ec2] uppercase tracking-wider mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                <span className="font-semibold">Academic Foundation</span>
              </div>
              <div className="text-sm font-bold text-[#f8f4ff]">AIUB CSE (CGPA 3.60)</div>
              <div className="text-[11px] text-[#d8c8f2] mt-0.5">Trainee ACM Coach & Peer Mentor</div>
            </div>

            <div className="p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
              <div className="flex items-center gap-1.5 text-[10px] text-[#9f8ec2] uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                <span className="font-semibold">Algorithmic Benchmarks</span>
              </div>
              <div className="text-sm font-bold text-[#c084fc]">CF 1618 Expert // 4,300+ Solves</div>
              <div className="text-[11px] text-[#d8c8f2] mt-0.5">35th at ICPC Regional Preliminary</div>
            </div>

            <div className="p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
              <div className="flex items-center gap-1.5 text-[10px] text-[#9f8ec2] uppercase tracking-wider mb-1">
                <Code2 className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                <span className="font-semibold">Technical Specialization</span>
              </div>
              <div className="text-sm font-bold text-[#f8f4ff]">C++, .NET Core & Systems</div>
              <div className="text-[11px] text-[#d8c8f2] mt-0.5">Algorithms, Memory Control & High-Scale APIs</div>
            </div>
          </div>

          {/* Analog Tape Spool Footer Accent */}
          <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#9f8ec2] px-1">
            <span className="flex items-center gap-1.5 text-[#d8c8f2]">
              <Disc3 className="w-3.5 h-3.5 text-[#c084fc] animate-tape-spin" aria-hidden="true" />
              <span>LOFI VIDEO DECK // CHANNEL_00</span>
            </span>
            <span className="text-[10px] text-[#9f8ec2]">
              AIUB FACULTY EVALUATION COPY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
