import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Terminal, Database, Cpu, Wrench, Shield, Sliders } from "lucide-react";

export default function TechnicalArsenal() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "programming languages":
        return <Terminal className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />;
      case "backend, databases & web":
        return <Database className="w-4 h-4 text-[#e9d5ff]" aria-hidden="true" />;
      case "systems, tools & infrastructure":
        return <Wrench className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />;
      case "algorithmic domains & theory":
        return <Cpu className="w-4 h-4 text-[#e9d5ff]" aria-hidden="true" />;
      default:
        return <Shield className="w-4 h-4 text-[#c084fc]" aria-hidden="true" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#322358] bg-[#0c0817] lofi-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#322358]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c084fc] mb-2 font-bold tracking-wider">
              <span>TRACK 04</span>
              <span>•</span>
              <span>ANALOG SYNTH RACK & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f8f4ff]">
              Languages, Frameworks & Tooling
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono text-[#d8c8f2] max-w-md">
            Concrete tools, low-level execution models, and algorithmic paradigms applied across 4,300+ contest tasks and real projects.
          </p>
        </div>

        {/* Categories Grid: Styled as Analog Hardware Rack Units */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#17102e] border border-[#322358] rounded-2xl relative hover:border-[#c084fc] transition-all flex flex-col justify-between shadow-md group"
            >
              {/* Hardware Knurled Screw Indicators */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#3e2c6c] border border-[#5b3f9c]" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#3e2c6c] border border-[#5b3f9c]" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#3e2c6c] border border-[#5b3f9c]" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#3e2c6c] border border-[#5b3f9c]" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2a1d47]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(cat.category)}
                    <h3 className="text-base sm:text-lg font-bold text-[#f8f4ff] tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#c084fc] bg-[#20173e] px-2.5 py-0.5 rounded border border-[#5b3f9c]">
                    RACK 0{idx + 1} // {cat.skills.length} MODULES
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#d8c8f2] mb-6 leading-relaxed font-normal">
                  {cat.description}
                </p>

                {/* Badges / Skills list */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-[#120c24] border border-[#2a1d47] hover:border-[#5b3f9c] rounded-xl transition-all group/item"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            skill.isPrimary 
                              ? "bg-[#c084fc] shadow-[0_0_8px_rgba(192,132,252,0.8)]" 
                              : "bg-[#5b3f9c]"
                          }`} />
                          <span className="text-xs sm:text-sm font-mono font-bold text-[#f8f4ff] group-hover/item:text-[#c084fc] transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                          skill.level === "Advanced"
                            ? "text-[#f8f4ff] bg-[#291b4a] border border-[#5b3f9c]"
                            : skill.level === "Proficient"
                            ? "text-[#e9d5ff] bg-[#20173e] border border-[#3e2c6c]"
                            : "text-[#d8c8f2] bg-[#17102e] border border-[#322358]"
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      {skill.details && (
                        <p className="text-[11px] font-mono text-[#d8c8f2] pl-4 group-hover/item:text-[#f8f4ff] transition-colors font-medium">
                          {skill.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-[#2a1d47] flex items-center justify-between text-[10px] font-mono text-[#9f8ec2]">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3 h-3 text-[#c084fc]" />
                  <span>SYNTH BUS SIGNAL: CALIBRATED</span>
                </span>
                <span className="text-[#c084fc] font-bold">VERIFIED PRODUCTION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
