"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import LofiPlayer from "@/components/LofiPlayer";
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  ChevronRight, 
  FileText, 
  Terminal, 
  MapPin, 
  Clock, 
  Headphones
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: portfolioData.personal.location.timezone,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(`${timeStr} (UTC+6)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#322358] lofi-grid-bg lofi-vignette">
      {/* Background Soft Purple Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/[0.08] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Lofi Desk Timestamp & Station Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-mono bg-[#17102e] border border-[#322358] rounded-full text-[#e9d5ff] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c084fc]" />
            </span>
            <Clock className="w-3.5 h-3.5 text-[#c084fc] ml-0.5" aria-hidden="true" />
            <span className="text-[#f8f4ff] font-bold tracking-wide">
              {currentTime || "07:00:00 PM (UTC+6)"}
            </span>
            <span className="text-[#c084fc]/50">•</span>
            <span className="text-[#d8c8f2] font-medium">DHAKA, BANGLADESH</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#d8c8f2] bg-[#17102e] px-3 py-1.5 rounded-full border border-[#322358]">
            <Headphones className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
            <span>LOFI DESK STATION // 4,300+ PROBLEMS SOLVED</span>
          </div>
        </div>

        {/* Hero Main Grid: Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 cols): Identity, Editorial Copy, Actions & Lofi Player */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* University Tag */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold">
              <span className="text-[#c084fc]">{portfolioData.personal.institution}</span>
              <span className="text-[#c084fc]/40">/</span>
              <span className="text-[#e9d5ff]">CSE & ACM COACHING</span>
            </div>

            {/* Name / Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f8f4ff] mb-2 leading-[1.08]">
                {portfolioData.personal.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <a
                  href={portfolioData.contact.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#f8f4ff] font-bold bg-[#291b4a] hover:bg-[#34225e] border border-[#5b3f9c] hover:border-[#c084fc] px-2.5 py-1 rounded shadow-sm transition-colors flex items-center gap-1 group/cf"
                  aria-label="Visit Codeforces profile for hunterkasa_ (opens in new tab)"
                  title="Visit Codeforces profile (hunterkasa_)"
                >
                  <span className="group-hover/cf:text-[#c084fc] transition-colors">@{portfolioData.personal.handle}_</span>
                  <ArrowUpRight className="w-3 h-3 text-[#c084fc] opacity-70 group-hover/cf:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
                <span className="text-xs font-mono text-[#d8c8f2] font-medium">
                  {portfolioData.personal.title}
                </span>
              </div>
            </div>

            {/* Personal Narrative */}
            <p className="text-base sm:text-lg text-[#f8f4ff] font-normal leading-relaxed max-w-2xl">
              {portfolioData.personal.tagline}{" "}
              <span className="text-[#d8c8f2]">
                Undergraduate engineer at AIUB and Trainee ACM Coach specializing in C++, .NET Core, systems programming, and competitive problem solving.
              </span>
            </p>

            {/* CP Benchmark Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 bg-[#17102e] border border-[#322358] rounded-xl shadow-sm">
              <div className="p-2.5 bg-[#120c24] border border-[#2a1d47] rounded">
                <div className="text-[10px] font-mono text-[#d8c8f2] uppercase font-semibold">Codeforces</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-[#f8f4ff]">
                    {portfolioData.metrics.cfMaxRating}
                  </span>
                  <span className="text-[10px] font-mono text-[#c084fc] font-bold">Expert</span>
                </div>
                <div className="text-[10px] font-mono text-[#9f8ec2] mt-0.5">3,500+ Solves</div>
              </div>

              <div className="p-2.5 bg-[#120c24] border border-[#2a1d47] rounded">
                <div className="text-[10px] font-mono text-[#d8c8f2] uppercase font-semibold">ICPC Regional</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-[#e9d5ff]">
                    35th
                  </span>
                  <span className="text-[10px] font-mono text-[#d8c8f2]">Prelim 2025</span>
                </div>
                <div className="text-[10px] font-mono text-[#9f8ec2] mt-0.5">Asia Dhaka</div>
              </div>

              <div className="p-2.5 bg-[#120c24] border border-[#2a1d47] rounded">
                <div className="text-[10px] font-mono text-[#d8c8f2] uppercase font-semibold">Total Solved</div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg sm:text-xl font-bold font-mono text-[#f8f4ff]">
                    4,300+
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#9f8ec2] mt-0.5">Multi-judge</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 text-sm font-mono font-bold text-[#0c0817] bg-[#c084fc] hover:bg-[#d8b4fe] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg shadow-md transition-all active:scale-[0.98] group"
                aria-label="Scroll to featured engineering projects"
              >
                <span>EXPLORE PROJECTS</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 text-sm font-mono text-[#f8f4ff] bg-[#20173e] border border-[#3e2c6c] hover:border-[#c084fc] hover:text-[#e9d5ff] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] group shadow-sm"
                title="View and download official Resume (PDF)"
                aria-label="View official resume PDF in a new tab"
              >
                <FileText className="w-4 h-4 text-[#c084fc] group-hover:text-[#e9d5ff] transition-colors" aria-hidden="true" />
                <span className="font-semibold">RESUME (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9f8ec2] group-hover:text-[#c084fc] transition-colors" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 text-sm font-mono text-[#f8f4ff] bg-[#20173e] border border-[#3e2c6c] hover:border-[#c084fc] hover:text-[#e9d5ff] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] group"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
                    <span className="text-[#e9d5ff] font-semibold">COPIED: hunterkasa@gmail.com</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#c084fc] group-hover:text-[#e9d5ff] transition-colors" aria-hidden="true" />
                    <span className="font-semibold">COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Embedded Interactive Lofi Tape Deck */}
            <div className="pt-2">
              <LofiPlayer />
            </div>
          </div>

          {/* Right Column (5 cols): Cassette Album Sleeve Featuring User Portrait & ICPC Banner */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[480px] bg-[#17102e] p-4 border border-[#322358] rounded-2xl relative shadow-2xl overflow-hidden group">
              {/* Sleeve Vintage Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2a1d47] text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-[#f8f4ff] font-medium">
                  <Terminal className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                  <span>ICPC_REGIONAL // CASSETTE_SLEEVE</span>
                </span>
                <span className="flex items-center gap-1 text-[#d8c8f2] font-semibold">
                  <MapPin className="w-3 h-3 text-[#c084fc]" aria-hidden="true" />
                  <span>DHAKA_BD</span>
                </span>
              </div>

              {/* Landscape/Wide Portrait Framed with Analog Album Sleeve Border */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#3e2c6c] bg-[#0c0817]">
                <Image
                  src={portfolioData.personal.profileImage}
                  alt={`Portrait of ${portfolioData.personal.name} at ICPC Asia Dhaka Regional Contest`}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                  className="object-cover object-center filter contrast-[1.05] group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Subtle bottom vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0817]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Cassette Sleeve Spine Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#f8f4ff] bg-[#120c24]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#3e2c6c]">
                  <a
                    href={portfolioData.contact.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c084fc] font-bold hover:text-white transition-colors flex items-center gap-1 group/badge"
                    aria-label="Visit Codeforces profile (opens in new tab)"
                  >
                    <span>@hunterkasa_</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70 group-hover/badge:opacity-100" aria-hidden="true" />
                  </a>
                  <span className="text-[#e9d5ff] font-medium">ICPC REGIONALIST</span>
                </div>
              </div>

              {/* Cassette Sleeve Metadata */}
              <div className="mt-4 pt-3 border-t border-[#2a1d47] grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 bg-[#120c24] border border-[#2a1d47] rounded">
                  <div className="text-[10px] text-[#d8c8f2] uppercase font-semibold">Competitive Event</div>
                  <div className="text-[#f8f4ff] font-bold mt-0.5">ICPC Asia Dhaka</div>
                </div>
                <div className="p-2.5 bg-[#120c24] border border-[#2a1d47] rounded">
                  <div className="text-[10px] text-[#d8c8f2] uppercase font-semibold">Competitive Peak</div>
                  <div className="text-[#c084fc] font-bold mt-0.5">CF 1618 Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
