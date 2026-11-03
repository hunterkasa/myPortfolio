"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, CodeforcesIcon } from "@/components/Icons";
import { 
  Copy, 
  Check, 
  Terminal, 
  Clock, 
  ArrowUp,
  FileText,
  Send,
  Disc3,
  ArrowUpRight
} from "lucide-react";

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
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
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#0c0817] border-t border-[#322358] lofi-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Module */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#322358]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
                <span>TRACK 06</span>
                <span>•</span>
                <span>MIDNIGHT TELEGRAPH & CHANNELS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]">
                Get in Touch & Connect
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm font-mono text-[#d8c8f2] max-w-md">
              Whether you want to discuss backend software roles, algorithms, contest prep, or collaborate on a project, reach out anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Dispatch Card (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#17102e] border border-[#322358] rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2a1d47] text-xs font-mono">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
                    <span className="font-bold text-[#f8f4ff]">DIRECT INBOX // DHAKA, BANGLADESH</span>
                  </span>
                  <span className="text-[#c084fc] flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" />
                    OPEN
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-mono text-[#9f8ec2] uppercase font-semibold mb-1">Direct Email Address</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#f8f4ff] tracking-tight break-all">
                    {portfolioData.contact.email}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#d8c8f2] font-mono leading-relaxed mb-6 font-normal">
                  Based in Dhaka, Bangladesh (UTC+6). Active for engineering roles, technical challenges, hackathons, and algorithmic collaboration.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#2a1d47]">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-[#0c0817] bg-[#c084fc] hover:bg-[#d8b4fe] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] shadow-sm min-h-[40px]"
                  aria-label="Send email to Kazi Shoiab Ahmed Saad"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>SEND EMAIL</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#f8f4ff] bg-[#20173e] border border-[#3e2c6c] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] font-semibold min-h-[40px]"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                      <span className="text-[#c084fc] font-bold">EMAIL COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#f8f4ff] bg-[#20173e] border border-[#3e2c6c] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg transition-all active:scale-[0.98] font-semibold min-h-[40px] group"
                  aria-label="View official resume PDF in a new tab"
                >
                  <FileText className="w-3.5 h-3.5 text-[#c084fc] group-hover:text-[#e9d5ff]" aria-hidden="true" />
                  <span>VIEW RESUME (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#9f8ec2] group-hover:text-[#c084fc]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right: Verified Profile Hub (5 cols) */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {/* Profile Links */}
              <div className="p-6 sm:p-7 bg-[#17102e] border border-[#322358] rounded-2xl space-y-3 shadow-lg">
                <div className="text-xs font-mono uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span className="text-[#c084fc] font-bold flex items-center gap-1.5">
                    <Disc3 className="w-3.5 h-3.5 text-[#c084fc] animate-tape-spin" />
                    <span>Public Channels</span>
                  </span>
                  <span className="text-[#d8c8f2] font-semibold">VERIFIED</span>
                </div>

                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-xl transition-colors group min-h-[44px]"
                  aria-label="Visit GitHub Profile @hunterkasa"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#f8f4ff] group-hover:text-[#c084fc]">GitHub</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#d8c8f2] font-semibold">@hunterkasa</span>
                </a>

                <a
                  href={portfolioData.contact.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-xl transition-colors group min-h-[44px]"
                  aria-label="Visit Codeforces Profile hunterkasa_"
                >
                  <div className="flex items-center gap-2.5">
                    <CodeforcesIcon className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#f8f4ff] group-hover:text-[#c084fc]">Codeforces</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#c084fc] font-semibold">hunterkasa_ (1618 Expert)</span>
                </a>

                <a
                  href={portfolioData.contact.atcoder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-xl transition-colors group min-h-[44px]"
                  aria-label="Visit AtCoder Profile Hunterkasa"
                >
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#f8f4ff] group-hover:text-[#c084fc]">AtCoder</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#d8c8f2] font-semibold">Hunterkasa (300+)</span>
                </a>

                <a
                  href={portfolioData.contact.lightoj}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-xl transition-colors group min-h-[44px]"
                  aria-label="Visit LightOJ Profile hunterkasa"
                >
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#f8f4ff] group-hover:text-[#c084fc]">LightOJ</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#d8c8f2] font-semibold">hunterkasa (236)</span>
                </a>

                <a
                  href={portfolioData.contact.cses}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-between p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-xl transition-colors group min-h-[44px]"
                  aria-label="Visit CSES Profile User 60812"
                >
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                    <span className="text-xs font-mono font-bold text-[#f8f4ff] group-hover:text-[#c084fc]">CSES Problem Set</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#d8c8f2] font-semibold">User #60812 (130+)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 border-t border-[#2a1d47] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#d8c8f2]">© 2026 {portfolioData.personal.name}</span>
            <span className="text-[#5b3f9c]">•</span>
            <span className="text-[#c084fc] flex items-center gap-1.5 font-bold">
              <Clock className="w-3.5 h-3.5 text-[#c084fc]" />
              <span>{currentTime || "07:00:00 PM (UTC+6)"}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#c084fc] hover:underline font-semibold flex items-center gap-1"
            >
              <span>RESUME.PDF</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[#5b3f9c]">•</span>
            <span className="text-[11px] text-[#9f8ec2] font-medium">
              NEXT.JS • TYPESCRIPT • TAILWIND CSS
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="cursor-pointer p-2.5 bg-[#17102e] hover:bg-[#20173e] border border-[#322358] hover:border-[#c084fc] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg text-[#c084fc] hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              title="Return to top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
