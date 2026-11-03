import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperiencePhilosophy from "@/components/ExperiencePhilosophy";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0c0817] text-[#f8f4ff] selection:bg-[#c084fc] selection:text-[#0c0817]">
      {/* Global Lofi Navigation Bar */}
      <Header />

      {/* Main Content Showcase */}
      <main className="flex-1 w-full">
        {/* 1. Lofi Desk Hero: Live Dhaka Clock, Web Audio Rain Synthesizer, Cassette Sleeve Portrait */}
        <Hero />

        {/* 2. Liner Notes: Engineering Philosophy, Mindset & AIUB Academic Track */}
        <ExperiencePhilosophy />

        {/* 3. Contest Logbook: 4,300+ Solves, CF 1618 Expert, ICPC 35th & Verified Judges Matrix */}
        <CompetitiveProgramming />

        {/* 4. Analog Synth Rack: Languages, Frameworks, Systems & Algorithmic Domains */}
        <TechnicalArsenal />

        {/* 5. Cassette Releases: CodeCafe, Med AI, Online Exam System, OpenGL Shooter, Factory OOP, C Scoreboard */}
        <FeaturedProjects />
      </main>

      {/* 6. Midnight Telegraph: Direct Contact Channels & Technical Station Footer */}
      <ContactFooter />
    </div>
  );
}
