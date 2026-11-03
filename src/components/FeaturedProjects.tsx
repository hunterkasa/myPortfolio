import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import { 
  ExternalLink, 
  Terminal, 
  Cpu, 
  ArrowUpRight,
  Disc3,
  Layers
} from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#322358] bg-[#0c0817] lofi-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#322358]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
              <span>TRACK 05</span>
              <span>•</span>
              <span>CASSETTE RELEASES & CODEBASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]">
              Featured Projects & Repositories
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-[#d8c8f2] max-w-md">
            Directly from GitHub (@hunterkasa). Spanning contest platforms, medical AI embeddings, enterprise .NET backends, and low-level OpenGL graphics.
          </p>
        </div>

        {/* Asymmetrical Project Showcase */}
        <div className="space-y-12">
          {portfolioData.projects.map((project, idx) => (
            <div
              key={project.slug}
              className="p-6 sm:p-8 bg-[#17102e] hover:bg-[#20173e] border border-[#322358] hover:border-[#c084fc] rounded-2xl transition-all relative group shadow-lg"
            >
              {/* Project Index & Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#2a1d47]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-md text-[#f8f4ff] bg-[#291b4a] border border-[#5b3f9c] flex items-center gap-1.5">
                    <Disc3 className="w-3.5 h-3.5 text-[#c084fc] animate-tape-spin" aria-hidden="true" />
                    <span>RELEASE 0{idx + 1}</span>
                  </span>
                  <span className="text-xs font-mono uppercase text-[#d8c8f2] tracking-wider font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-mono text-[#f8f4ff] bg-[#20173e] hover:bg-[#291b4a] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none px-3.5 py-2 rounded-lg transition-colors font-medium border border-[#3e2c6c] min-h-[40px]"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-2 text-xs font-mono text-[#0c0817] bg-[#c084fc] hover:bg-[#d8b4fe] focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none px-4 py-2 rounded-lg transition-colors font-bold shadow-sm min-h-[40px]"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4 fill-current" />
                    <span>VIEW REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f8f4ff] group-hover:text-[#c084fc] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-[#d8c8f2] leading-relaxed font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Core Layout: Asymmetrical Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
                {/* Left: Concrete Description & Implementation Highlights (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Concrete Description Box */}
                  <div className="p-4 sm:p-5 bg-[#120c24] border border-[#2a1d47] rounded-xl">
                    <div className="text-[11px] font-mono uppercase text-[#c084fc] font-bold mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                      <span>REPOSITORY OVERVIEW</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#f8f4ff]/90 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono uppercase text-[#e9d5ff] font-bold flex items-center gap-1.5">
                      <span className="text-[#c084fc] font-bold" aria-hidden="true">✓</span>
                      <span>KEY ARCHITECTURAL HIGHLIGHTS</span>
                    </div>

                    <div className="space-y-2">
                      {project.highlights.map((item, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d8c8f2] leading-relaxed"
                        >
                          <span className="text-[#c084fc] font-mono mt-0.5 font-bold" aria-hidden="true">▸</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Technical Badges & Telemetry (5 cols) */}
                <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                  {/* Repository Specs */}
                  <div className="p-4 sm:p-5 bg-[#120c24] border border-[#2a1d47] rounded-xl">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#d8c8f2] mb-2 pb-2 border-b border-[#2a1d47]">
                      <span className="flex items-center gap-1.5 text-[#f8f4ff] font-bold">
                        <Cpu className="w-3.5 h-3.5 text-[#c084fc]" aria-hidden="true" />
                        SYSTEM SPECS
                      </span>
                      <span className="text-[10px] text-[#c084fc] font-bold bg-[#20173e] border border-[#5b3f9c] px-2 py-0.5 rounded">
                        GITHUB HOSTED
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#d8c8f2] leading-relaxed font-medium">
                      Maintained by <span className="text-[#c084fc] font-bold">@hunterkasa</span>. Clean code structure, modular design, and reproducible local environment setups.
                    </div>
                  </div>

                  {/* Benchmarked Telemetry Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2">
                      {project.stats.map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-3 bg-[#120c24] border border-[#2a1d47] rounded-xl text-center"
                        >
                          <div className="text-[10px] font-mono text-[#9f8ec2] uppercase font-semibold">
                            {stat.label}
                          </div>
                          <div className="text-xs sm:text-sm font-mono font-bold mt-0.5 text-[#f8f4ff]">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Stack Tags */}
              <div className="pt-4 border-t border-[#2a1d47] flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-[#9f8ec2] mr-2 font-bold">TECH_STACK:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono text-[#f8f4ff] bg-[#120c24] border border-[#3e2c6c] rounded-md font-medium group-hover:border-[#5b3f9c] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
