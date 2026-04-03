"use client";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Zap,
  Target,
  BarChart3,
  Network,
  ClipboardCheck,
  BrainCircuit,
  Code2,
  FileText,
  Trophy,
  ArrowRight,
} from "lucide-react";

export function Platforms() {
  const collegeFeatures = [
    {
      title: "AI Recruiter Discovery",
      desc: "Scrape 200+ sources to find recruiters actively hiring",
      icon: Zap,
    },
    {
      title: "Alumni Intelligence Radar",
      desc: "Map alumni across LinkedIn, GitHub & Twitter",
      icon: Network,
    },
    {
      title: "Placement Analytics",
      desc: "Auto-generated reports, NAAC/NBA ready",
      icon: BarChart3,
    },
    {
      title: "Company Partnership Finder",
      desc: "AI-matched company recommendations",
      icon: Target,
    },
    {
      title: "Offer Pipeline Tracking",
      desc: "Track every stage from outreach to offer",
      icon: ClipboardCheck,
    },
  ];

  const studentFeatures = [
    {
      title: "AI Learning Roadmap",
      desc: "Personalized path based on your goals",
      icon: BrainCircuit,
    },
    {
      title: "DSA Mastery Tracker",
      desc: "300+ curated problems with weak topic detection",
      icon: Code2,
    },
    {
      title: "AI Portfolio Generator",
      desc: "GitHub → stunning portfolio in one click",
      icon: Zap,
    },
    {
      title: "CP Arena & Leaderboards",
      desc: "Contests, XP, badges & recruiter visibility",
      icon: Trophy,
    },
    {
      title: "ATS Resume Optimizer",
      desc: "Score against real JDs, fix skill gaps",
      icon: FileText,
    },
  ];

  return (
    <section id="platforms" className="relative">
      {/* Section Heading */}
      <div className="bg-secondary px-6 sm:px-12 lg:px-20 pt-20 pb-12 text-center">
        <span className="font-sans text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
          Dual Platform
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl text-black mb-4">
          Two platforms. One mission.
        </h2>
        <p className="font-sans text-sm text-black/60 leading-relaxed max-w-lg mx-auto">
          Whether you're a placement cell or a student — HireUps has your back.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen border-y-4 border-black">
        {/* Placement Cells Section */}
        <div className="flex-1 bg-[#E8D6B3] p-8 sm:p-12 lg:p-20 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black group">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#FF5A2A] border-2 border-black flex items-center justify-center text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <Building2 size={20} />
              </div>
              <span className="font-inter font-black text-xs uppercase tracking-[0.2em] text-[#1c1c1c]">
                Placement Cell Suite
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1c1c] mb-6 leading-[1.05] tracking-tight">
              Do 10x More{" "}
              <span className="relative inline-block">
                <span className="text-[#FF5A2A] italic">Placements</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-[#FF5A2A] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                />
              </span>{" "}
              With the Same Team.
            </h2>

            <p className="font-inter text-base lg:text-lg text-[#1c1c1c]/70 mb-14 leading-relaxed max-w-lg">
              Automate company discovery, outreach, and follow-ups - without increasing workload.
            </p>

            <h3 className="font-inter font-bold text-[13px] uppercase tracking-[0.15em] text-[#1c1c1c]/60 mb-5">
              Key Features
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {collegeFeatures.slice(0, 4).map((f, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group/card rounded-2xl"
                >
                  <f.icon className="w-6 h-6 text-[#FF5A2A] mb-3 group-hover/card:scale-110 transition-transform" />
                  <h4 className="font-inter font-bold text-[#1c1c1c] text-sm mb-1.5 leading-snug">
                    {f.title}
                  </h4>
                  <p className="font-inter text-xs text-[#1c1c1c]/60 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="group/btn flex items-center bg-[#FF5A2A] text-white border-2 border-black px-8 py-4 font-black text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all w-fit rounded-2xl">
              <span>Explore for Colleges</span>
              <ArrowRight
                className="ml-3 group-hover/btn:translate-x-2 transition-transform"
                size={18}
              />
            </button>
          </div>
        </div>

        {/* Students Section */}
        <div className="flex-1 bg-[#FF5A2A] p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden group">
          {/* Decorative pattern from image vibe */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -mr-32 -mt-32 blur-3xl" />

          <div className="max-w-xl relative z-10 mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center text-[#FF5A2A] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <GraduationCap size={20} />
              </div>
              <span className="font-inter font-black text-xs uppercase tracking-[0.2em] text-white">
                Student Career Hub
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
              Become the Candidate Companies{" "}
              <span className="relative inline-block">
                <span className="text-[#E8D6B3] italic">Compete For.</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-[#E8D6B3] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                />
              </span>
            </h2>

            <p className="font-inter text-base lg:text-lg text-white/90 mb-14 leading-relaxed max-w-lg">
              Build proof-of-work, not just certificates & stand out.
            </p>

            <h3 className="font-inter font-bold text-[13px] uppercase tracking-[0.15em] text-white/70 mb-5">
              What You Get
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {studentFeatures.slice(0, 4).map((f, i) => (
                <div
                  key={i}
                  className="bg-[#E8D6B3] border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group/card rounded-2xl"
                >
                  <f.icon className="w-6 h-6 text-[#FF5A2A] mb-3 group-hover/card:scale-110 transition-transform" />
                  <h4 className="font-inter font-bold text-[#1c1c1c] text-sm mb-1.5 leading-snug">
                    {f.title}
                  </h4>
                  <p className="font-inter text-xs text-[#1c1c1c]/60 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="group/btn flex items-center bg-[#E8D6B3] text-[#1c1c1c] border-2 border-black px-8 py-4 font-black text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all w-fit rounded-2xl">
              <span>For Students</span>
              <ArrowRight
                className="ml-3 group-hover/btn:translate-x-2 transition-transform"
                size={18}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
