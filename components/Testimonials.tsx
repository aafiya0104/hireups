"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "HireUps helped us connect with 40+ recruiters in just 3 months. Our placement rate went from 62% to 89%.",
    author: "Dr. Priya Sharma",
    role: "TPO",
    org: "KIIT Bhubaneswar",
    tag: "Placement Cell",
    color: "#FF5A2A",
  },
  {
    quote: "The AI roadmap was a game-changer. I went from struggling with arrays to cracking my TCS interview in 4 months.",
    author: "Rahul Verma",
    role: "Student",
    org: "VIT Vellore",
    tag: "Student",
    color: "#1c1c1c",
  },
  {
    quote: "The alumni radar feature alone justified the subscription. We discovered 200+ alumni at top companies we didn't even know about.",
    author: "Prof. Ankit Mehta",
    role: "Placement Cell",
    org: "SRM Chennai",
    tag: "Placement Cell",
    color: "#FF5A2A",
  },
  {
    quote: "My AI-generated portfolio got 150+ recruiter views in the first week. Got 3 interview calls directly from it.",
    author: "Sneha Patel",
    role: "Student",
    org: "Manipal University",
    tag: "Student",
    color: "#1c1c1c",
  },
  {
    quote: "The job signal radar detected Infosys openings 2 days before they appeared on Naukri. We placed 12 students from that batch.",
    author: "Dr. Ramesh Iyer",
    role: "Dean",
    org: "Bennett University",
    tag: "Placement Cell",
    color: "#FF5A2A",
  },
  {
    quote: "CP Arena leaderboards made DSA practice addictive. Earned Gold Badge and got noticed by a Wipro recruiter directly.",
    author: "Aman Singh",
    role: "Student",
    org: "LPU Jalandhar",
    tag: "Student",
    color: "#1c1c1c",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-16 bg-secondary overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <span className="font-sans text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-black">
              Loved by students &amp; TPOs
            </h2>
          </div>
          <p className="font-sans text-sm text-black/50 max-w-xs leading-relaxed">
            Real stories from real campuses across India.
          </p>
        </div>

        {/* Main featured card + side stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">

          {/* Featured testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative bg-primary rounded-3xl p-10 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[320px]"
            >
              {/* Quote mark */}
              <span className="font-heading text-7xl text-white/20 leading-none select-none absolute top-6 left-10">"</span>

              <div className="mt-8">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-sans text-[10px] font-bold uppercase tracking-widest mb-6">
                  {t.tag}
                </span>
                <p className="font-heading text-xl sm:text-2xl text-white leading-snug mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center font-heading text-white text-base uppercase">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white text-sm">{t.author}</p>
                    <p className="font-sans text-white/60 text-xs">{t.role} · {t.org}</p>
                  </div>
                </div>

                {/* Nav arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side stack — next 3 testimonials */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((offset) => {
              const idx = (active + offset) % testimonials.length;
              const s = testimonials[idx];
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className="text-left bg-white border-[1.5px] border-black hover:shadow-[4px_4px_0px_0px_#000000] rounded-2xl px-5 py-4 transition-all duration-200 group hover:-translate-y-1"
                >
                  <p className="font-sans text-xs text-black/70 leading-relaxed line-clamp-2 mb-3 group-hover:text-black transition-colors">
                    "{s.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center font-sans text-white text-[10px] font-bold uppercase transition-colors group-hover:bg-primary">
                      {s.author.charAt(0)}
                    </div>
                    <span className="font-sans text-[11px] font-bold text-black/60">{s.author}</span>
                    <span className="font-sans text-[11px] text-black/30">· {s.org}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-primary" : "w-1.5 bg-black/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
