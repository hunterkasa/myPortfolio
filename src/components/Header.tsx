"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Disc3, Radio, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["experience", "competitive", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story & Notes", href: "#experience" },
    { name: "Contest Logbook", href: "#competitive" },
    { name: "Synth Rack (Skills)", href: "#skills" },
    { name: "Cassette Releases", href: "#projects" },
    { name: "Midnight Line", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#120c24]/90 backdrop-blur-md border-b border-[#322358] py-3 shadow-[0_4px_30px_rgba(12,8,23,0.8)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Codeforces Profile Link */}
          <a
            href={portfolioData.contact.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#c084fc] focus-visible:outline-none rounded-lg p-1"
            aria-label="Visit Codeforces profile for hunterkasa_ (opens in new tab)"
            title="Visit Codeforces profile (hunterkasa_)"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1b1235] border border-[#3e2c6c] flex items-center justify-center text-[#c084fc] font-mono text-sm font-bold shadow-inner group-hover:border-[#c084fc] transition-colors">
              <span className="tracking-tighter">KS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight text-[#f8f4ff] group-hover:text-[#c084fc] transition-colors flex items-center gap-1.5">
                {portfolioData.personal.handle}_
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-[#9f8ec2] tracking-wider uppercase">
                Dhaka // CP 4,300+ Solved
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#150f29]/80 border border-[#322358] px-3 py-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 min-h-[36px] flex items-center ${
                    isActive
                      ? "text-[#f8f4ff] bg-[#291b4a] border border-[#5b3f9c] font-semibold"
                      : "text-[#d8c8f2] hover:text-[#f8f4ff] hover:bg-[#20153c]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Direct Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-[#1b1235] hover:bg-[#251848] text-[#c084fc] border border-[#5b3f9c] transition-colors min-h-[36px] flex items-center gap-1.5"
              title="View Resume PDF"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-[#8b5cf6] hover:bg-[#a855f7] text-white transition-colors min-h-[36px] flex items-center shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              Reach Out
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-[#d8c8f2] hover:text-white bg-[#1b1235] border border-[#322358] focus-visible:ring-2 focus-visible:ring-[#c084fc] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120c24] border-b border-[#322358] px-4 pt-4 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 mb-2 rounded bg-[#17102e] border border-[#322358] text-xs font-mono text-[#c084fc] flex items-center gap-2">
            <Radio className="w-3.5 h-3.5" />
            <span>AIUB // Codeforces Expert 1618</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-mono text-[#d8c8f2] hover:text-[#f8f4ff] hover:bg-[#20153c] min-h-[44px] flex items-center border border-transparent hover:border-[#3e2c6c]"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-3 rounded-lg text-sm font-mono text-[#c084fc] bg-[#1b1235] border border-[#5b3f9c] flex items-center justify-between min-h-[44px]"
          >
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="pt-3 border-t border-[#322358] flex justify-between items-center text-xs font-mono text-[#9f8ec2]">
            <span>Dhaka, Bangladesh</span>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-[#c084fc] hover:underline"
            >
              {portfolioData.contact.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
