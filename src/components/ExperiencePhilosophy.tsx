import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, BookOpen, Disc3, Clock, Users, ArrowUpRight, FileText } from "lucide-react";

export default function ExperiencePhilosophy() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#322358] bg-[#0c0817] lofi-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#322358]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
              <span>TRACK 01</span>
              <span>•</span>
              <span>LINER NOTES & ACADEMIC ROOTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]">
              Engineering Mindset & Education
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm font-mono text-[#d8c8f2] max-w-md">
              Undergraduate at AIUB and Trainee ACM Coach. Forging clean systems logic through relentless algorithmic competition.
            </p>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#c084fc] bg-[#1b1235] hover:bg-[#251848] border border-[#5b3f9c] rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>VIEW RESUME (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Asymmetrical Grid: Left Column Philosophy & Coaching, Right Column Education & Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Engineering Philosophy & Coaching Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 bg-[#17102e] border border-[#322358] rounded-2xl relative shadow-md">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#2a1d47]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] font-bold">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>ALGORITHMIC INTUITION</span>
                </div>
                <span className="text-[10px] font-mono text-[#d8c8f2] bg-[#20173e] px-2 py-0.5 rounded border border-[#3e2c6c]">
                  4,300+ SOLVES
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#d8c8f2] leading-relaxed">
                {portfolioData.personal.bio.map((paragraph, idx) => (
                  <p key={idx} className="font-normal text-[#f8f4ff]/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* AIUB ACM Coaching Role Card */}
            <div className="p-6 bg-[#17102e] border border-[#322358] rounded-2xl shadow-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2a1d47]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] font-bold">
                  <Users className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>LEADERSHIP & MENTORSHIP</span>
                </div>
                <span className="text-[10px] font-mono text-[#e9d5ff] bg-[#20173e] border border-[#5b3f9c] px-2.5 py-0.5 rounded font-semibold">
                  {portfolioData.personal.coachingRole.period}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#f8f4ff] mb-1">
                {portfolioData.personal.coachingRole.organization}
              </h3>
              <div className="text-xs font-mono text-[#c084fc] mb-3 font-semibold">
                {portfolioData.personal.coachingRole.title}
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#d8c8f2]">
                {portfolioData.personal.coachingRole.details.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2">
                    <span className="text-[#c084fc] font-mono mt-0.5" aria-hidden="true">▸</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient Reflection Quote Card */}
            <div className="p-5 sm:p-6 bg-[#1b1235] border border-[#5b3f9c]/60 rounded-2xl relative shadow-md">
              <div className="flex items-center justify-between text-xs font-mono text-[#c084fc] mb-3 font-bold">
                <span className="flex items-center gap-2">
                  <Disc3 className="w-4 h-4 text-[#c084fc] animate-tape-spin" aria-hidden="true" />
                  <span>SESSION_LOG // MIDNIGHT REFLECTION</span>
                </span>
                <span className="flex items-center gap-1 text-[#d8c8f2]">
                  <Clock className="w-3 h-3 text-[#c084fc]" aria-hidden="true" />
                  <span>03:42 AM</span>
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm font-mono text-[#f8f4ff] italic leading-relaxed pl-3.5 border-l-2 border-[#c084fc] font-medium">
                &ldquo;{portfolioData.personal.lofiAtmosphere.moodQuote}&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Education & Academic Credentials (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* AIUB University Card */}
            <div className="p-6 sm:p-7 bg-[#17102e] border border-[#322358] rounded-2xl relative hover:border-[#5b3f9c] transition-all shadow-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2a1d47]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />
                  <span className="text-xs font-mono text-[#e9d5ff] font-bold uppercase">
                    UNDERGRADUATE STUDIES
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#c084fc] bg-[#20173e] border border-[#5b3f9c] px-2.5 py-0.5 rounded font-semibold">
                  CGPA: {portfolioData.personal.cgpa}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#f8f4ff] mb-1">
                {portfolioData.personal.institution}
              </h3>
              <div className="text-xs font-mono text-[#d8c8f2] mb-2 font-medium">
                {portfolioData.personal.department}
              </div>
              <div className="text-[11px] font-mono text-[#9f8ec2] mb-4">
                Dhaka, Bangladesh • {portfolioData.personal.expectedGraduation}
              </div>

              <p className="text-xs sm:text-sm text-[#d8c8f2] leading-relaxed mb-5">
                Deepening theoretical foundations across data structures, compiler design, object-oriented software architecture, operating systems, and computer networks. Actively coaching university competitive programming teams and competing in national on-site finals.
              </p>

              {/* High School & College Credentials */}
              <div className="space-y-2 mb-5 p-3.5 bg-[#120c24] border border-[#2a1d47] rounded-xl text-xs font-mono">
                <div className="flex items-center justify-between text-[#f8f4ff]">
                  <span>Adamjee Cantonment College (ACC)</span>
                  <span className="text-[#c084fc] font-bold">GPA: 5.00 / 5.00</span>
                </div>
                <div className="text-[10px] text-[#9f8ec2]">H.S.C. in Science • Dhaka, Bangladesh</div>

                <div className="pt-2 border-t border-[#2a1d47] flex items-center justify-between text-[#f8f4ff]">
                  <span>Adamjee Cantonment Public School</span>
                  <span className="text-[#c084fc] font-bold">GPA: 5.00 / 5.00</span>
                </div>
                <div className="text-[10px] text-[#9f8ec2]">S.S.C. in Science • Dhaka, Bangladesh</div>
              </div>

              <div className="pt-4 border-t border-[#2a1d47]">
                <div className="text-[11px] font-mono text-[#9f8ec2] uppercase mb-2 font-semibold">
                  Core Theoretical & Engineering Exploration:
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-1 bg-[#120c24] border border-[#3e2c6c] text-[#f8f4ff] rounded font-medium">Data Structures & Algorithms</span>
                  <span className="px-2.5 py-1 bg-[#120c24] border border-[#3e2c6c] text-[#f8f4ff] rounded font-medium">Advanced .NET Core</span>
                  <span className="px-2.5 py-1 bg-[#120c24] border border-[#3e2c6c] text-[#f8f4ff] rounded font-medium">Computer Graphics (OpenGL)</span>
                  <span className="px-2.5 py-1 bg-[#120c24] border border-[#3e2c6c] text-[#f8f4ff] rounded font-medium">Relational Databases (PostgreSQL / MySQL)</span>
                  <span className="px-2.5 py-1 bg-[#120c24] border border-[#3e2c6c] text-[#f8f4ff] rounded font-medium">Operating Systems</span>
                </div>
              </div>
            </div>

            {/* Problem Solving Discipline Metrics */}
            <div className="p-6 bg-[#17102e] border border-[#322358] rounded-2xl shadow-md">
              <div className="text-xs font-mono uppercase tracking-wider mb-4 flex items-center justify-between">
                <span className="text-[#c084fc] font-bold">CONTEST WORK ETHIC</span>
                <span className="text-[#e9d5ff] font-semibold">CONSISTENT DISCIPLINE</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
                  <span className="text-[#d8c8f2] font-medium">Total Solved Across All Judges:</span>
                  <span className="font-bold text-[#f8f4ff]">4,300+ Problems</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
                  <span className="text-[#d8c8f2] font-medium">Codeforces Solves (@hunterkasa_):</span>
                  <span className="font-bold text-[#c084fc]">3,500+ Solves (1618 Expert)</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono p-3 bg-[#120c24] border border-[#2a1d47] rounded-lg">
                  <span className="text-[#d8c8f2] font-medium">National Contests Fought:</span>
                  <span className="font-bold text-[#f8f4ff]">ICPC, IUPCs (SUST, CUET, IUT, etc.)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
