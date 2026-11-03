import React from "react";
import { portfolioData } from "@/data/portfolio";
import { 
  Trophy, 
  ArrowUpRight, 
  Code2, 
  Medal, 
  TrendingUp, 
  Disc3,
  Flame,
  Award
} from "lucide-react";

export default function CompetitiveProgramming() {
  return (
    <section id="competitive" className="py-20 md:py-28 border-b border-[#322358] bg-[#0c0817] lofi-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#322358]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
              <span>TRACK 02</span>
              <span>•</span>
              <span>COMPETITIVE PROGRAMMING LOGBOOK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]">
              Contest Metrics & Verified Handles
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-[#d8c8f2] max-w-md">
            4,300+ problems solved across Codeforces, AtCoder, CSES, LightOJ, and Toph. Honed in timed on-site national arenas.
          </p>
        </div>

        {/* Global CP Metrics Editorial Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 bg-[#17102e] border border-[#322358] rounded-2xl relative overflow-hidden shadow-md">
            <div className="flex items-center justify-between text-[#d8c8f2] mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9f8ec2] font-semibold">Total Solved</span>
              <Code2 className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f8f4ff] tracking-tight">
              4,300
              <span className="text-[#c084fc] text-xl font-normal">+</span>
            </div>
            <p className="text-[11px] font-mono text-[#d8c8f2] mt-2 font-medium">
              Verified across 5 judges
            </p>
          </div>

          <div className="p-5 bg-[#17102e] border border-[#322358] rounded-2xl relative overflow-hidden shadow-md">
            <div className="flex items-center justify-between text-[#d8c8f2] mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9f8ec2] font-semibold">Codeforces Peak</span>
              <TrendingUp className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-[#c084fc] tracking-tight">
              {portfolioData.metrics.cfMaxRating}
            </div>
            <p className="text-[11px] font-mono text-[#d8c8f2] mt-2 font-medium">
              Expert Rank • {portfolioData.metrics.cfSolveCount} Solved
            </p>
          </div>

          <div className="p-5 bg-[#17102e] border border-[#322358] rounded-2xl relative overflow-hidden shadow-md">
            <div className="flex items-center justify-between text-[#d8c8f2] mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9f8ec2] font-semibold">ICPC Regional</span>
              <Trophy className="w-4 h-4 text-[#e9d5ff]" aria-hidden="true" />
            </div>
            <div className="text-3xl font-bold font-mono text-[#e9d5ff] tracking-tight">
              35th
            </div>
            <p className="text-[11px] font-mono text-[#d8c8f2] mt-2 font-medium">
              Asia Dhaka 2025 Preliminary
            </p>
          </div>

          <div className="p-5 bg-[#17102e] border border-[#322358] rounded-2xl relative overflow-hidden shadow-md">
            <div className="flex items-center justify-between text-[#d8c8f2] mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9f8ec2] font-semibold">Intra Championship</span>
              <Medal className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
            </div>
            <div className="text-3xl font-bold font-mono text-[#f8f4ff] tracking-tight">
              2nd Place
            </div>
            <p className="text-[11px] font-mono text-[#d8c8f2] mt-2 font-medium">
              AIUB Intra 2024 Finalist
            </p>
          </div>
        </div>

        {/* Live Platform Handles Matrix */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xs font-mono uppercase text-[#c084fc] font-bold tracking-wider flex items-center gap-2">
              <Disc3 className="w-3.5 h-3.5 text-[#c084fc] animate-tape-spin" aria-hidden="true" />
              <span>Live Profiles & Public Judges</span>
            </h3>
            <span className="text-[11px] font-mono text-[#9f8ec2]">CLICK TO INSPECT PROFILE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {portfolioData.competitivePlatforms.map((p, index) => (
              <a
                key={index}
                href={p.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 bg-[#17102e] hover:bg-[#20173e] border border-[#322358] hover:border-[#c084fc] rounded-2xl transition-all block relative shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-base font-bold text-[#f8f4ff] group-hover:text-[#c084fc] transition-colors">
                      {p.platform}
                    </span>
                    <div className="text-xs font-mono font-bold text-[#c084fc] mt-0.5">
                      @{p.handle}
                    </div>
                  </div>
                  <div className="p-2 bg-[#20173e] group-hover:bg-[#291b4a] border border-[#3e2c6c] rounded-lg text-[#d8c8f2] group-hover:text-[#f8f4ff] transition-colors">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>

                {/* Platform Metric Badges */}
                <div className="flex flex-wrap items-baseline gap-3 mb-3 text-xs font-mono">
                  {p.rating && (
                    <div className="p-1.5 px-2 bg-[#120c24] border border-[#2a1d47] rounded">
                      <span className="text-[#9f8ec2]">Max Rating: </span>
                      <span className="font-bold text-[#c084fc]">{p.rating}</span>
                    </div>
                  )}
                  {p.rank && (
                    <div className="p-1.5 px-2 bg-[#120c24] border border-[#2a1d47] rounded">
                      <span className="text-[#9f8ec2]">Rank: </span>
                      <span className="text-[#e9d5ff] font-semibold">{p.rank}</span>
                    </div>
                  )}
                  {p.problemsSolved && (
                    <div className="p-1.5 px-2 bg-[#120c24] border border-[#2a1d47] rounded">
                      <span className="text-[#9f8ec2]">Solved: </span>
                      <span className="text-[#f8f4ff] font-bold">{p.problemsSolved}</span>
                    </div>
                  )}
                </div>

                {p.highlight && (
                  <div className="text-[11px] font-mono text-[#d8c8f2] pt-3 border-t border-[#2a1d47] font-medium">
                    {p.highlight}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Major Contest Placements List */}
        <div id="achievements">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pt-10 border-t border-[#322358] gap-2">
            <div>
              <div className="text-xs font-mono text-[#c084fc] mb-1 font-bold tracking-wider">
                TRACK 03 • PLACEMENTS & STANDINGS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f8f4ff]">
                Major Contest Standings & Officiated Finishes
              </h3>
            </div>
            <span className="text-xs font-mono text-[#9f8ec2]">VERIFIED OFFICIATED LOG</span>
          </div>

          <div className="border border-[#322358] rounded-2xl overflow-hidden divide-y divide-[#2a1d47] shadow-md">
            {portfolioData.achievements.map((ach, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 bg-[#17102e] hover:bg-[#20173e] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold rounded bg-[#20173e] text-[#c084fc] border border-[#5b3f9c]">
                      {ach.category}
                    </span>
                    <span className="text-xs font-mono text-[#d8c8f2] font-medium">
                      {ach.year}
                    </span>
                    <span className="text-[#5b3f9c]">•</span>
                    <span className="text-xs font-mono text-[#f8f4ff] font-medium">
                      {ach.organization}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#f8f4ff] group-hover:text-[#c084fc] transition-colors">
                    {ach.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#d8c8f2] leading-relaxed font-normal">
                    {ach.description}
                  </p>
                </div>

                <div className="flex md:flex-col items-end justify-between md:justify-center gap-1 border-t md:border-t-0 pt-3 md:pt-0 border-[#2a1d47]">
                  <span className="text-sm font-mono font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-sm text-[#f8f4ff] bg-[#291b4a] border border-[#5b3f9c]">
                    {ach.placement}
                  </span>
                  {ach.metrics && (
                    <span className="text-[11px] font-mono text-[#d8c8f2] whitespace-nowrap font-medium">
                      {ach.metrics}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
