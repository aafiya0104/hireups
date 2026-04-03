"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Unlock the Right Opportunities",
    desc: "Placement cells use Messiah AI to instantly discover and connect with alumni, hiring managers, and recruiters from top companies and fast-growing startups.",
  },
  {
    number: "02",
    title: "Make Students Job-Ready",
    desc: "Students follow personalized roadmaps and targeted practice - building real, recruiter-ready skills instead of just completing courses.",
  },
  {
    number: "03",
    title: "Reach Out With Confidence",
    desc: "Send AI-crafted, personalized messages to the right people - increasing response rates and opening real hiring conversations.",
  },
  {
    number: "04",
    title: "Convert Conversations Into Offers",
    desc: "Start meaningful chats, build connections, and turn opportunities into actual job offers.",
  },
];

export function Features() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section id="working" className="py-14 bg-[#FFEDC5]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <motion.span
            className="font-sans text-[#FF5A2A] font-bold tracking-[0.15em] uppercase text-[11px] mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="font-heading text-2xl sm:text-3xl text-black mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How Our Messiah AI Gets You Placed
          </motion.h2>
          <motion.p
            className="font-sans text-sm text-black/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From discovery to offer letter, follow a clear, AI-powered timeline
            designed to turn effort into real outcomes.
          </motion.p>
        </div>

        {/* Split Layout: GIF Left, Stepper Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-10 items-center pl-8 lg:pl-16">
          {/* Left Side - GIF */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-[24px] overflow-hidden border-[1.5px] border-black shadow-[6px_6px_0px_0px_#000000]">
              <img
                src="https://cdn.jsdelivr.net/gh/aafiya0104/hireups-assets@main/working_gif.gif"
                alt="How HireUps works"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FF5A2A] rounded-full opacity-20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#E8D6B3] rounded-full opacity-40 -z-10" />
          </motion.div>

          {/* Right Side - Custom Stepper */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Step Indicators */}
            <div className="flex items-center gap-2 mb-5">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeStep
                      ? "w-8 bg-[#FF5A2A]"
                      : index < activeStep
                        ? "w-2 bg-black"
                        : "w-2 bg-black/20"
                    }`}
                />
              ))}
            </div>

            {/* Step Content */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading text-4xl font-bold text-[#FF5A2A]">
                      {steps[activeStep].number}
                    </span>
                    <div className="h-[1px] flex-1 bg-black/10" />
                  </div>

                  {/* Step Label */}
                  <span className="font-sans text-[11px] font-bold text-[#FF5A2A] uppercase tracking-[0.15em] mb-3 block">
                    Step {steps[activeStep].number}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-black mb-3 leading-snug">
                    {steps[activeStep].title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-black/60 leading-relaxed mb-6">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className={`px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] rounded-full border-[1.5px] border-black transition-all duration-300 ${activeStep === 0
                    ? "bg-transparent text-black/30 border-black/20 cursor-not-allowed"
                    : "bg-transparent text-black hover:bg-black hover:text-white"
                  }`}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className={`px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] rounded-full transition-all duration-300 ${activeStep === steps.length - 1
                    ? "bg-[#FF5A2A]/30 text-white cursor-not-allowed"
                    : "bg-[#FF5A2A] text-white hover:bg-black"
                  }`}
              >
                Next
              </button>
            </div>

            {/* Step Counter */}
            <div className="mt-4 flex items-center gap-2">
              <span className="font-sans text-sm font-bold text-black">
                {activeStep + 1}
              </span>
              <span className="font-sans text-sm text-black/40">/</span>
              <span className="font-sans text-sm text-black/40">
                {steps.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}