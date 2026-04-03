"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"cells" | "students">("cells");

  const cellPlans = [
    {
      name: "Starter",
      desc: "Perfect for small placement cells just getting started",
      price: "₹99",
      period: "/month",
      yearlyPrice: "₹999",
      yearlyPeriod: "/year",
      saveAmount: "Save ₹189",
      features: [
        "Recruiter discovery (100/month)",
        "Alumni search (500 profiles)",
        "Basic analytics dashboard",
        "CSV export & reports",
        "1 admin user",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      desc: "For placement cells ready to scale operations",
      price: "₹399",
      period: "/month",
      yearlyPrice: "₹3,999",
      yearlyPeriod: "/year",
      saveAmount: "Save ₹789",
      features: [
        "Unlimited recruiter discovery",
        "Full alumni intelligence radar",
        "Advanced placement analytics",
        "AI-crafted outreach messages",
        "5 admin users + TPO dashboard",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For institutions that want the complete solution",
      price: "₹599",
      period: "/month",
      yearlyPrice: "₹5,999",
      yearlyPeriod: "/year",
      saveAmount: "Save ₹1,189",
      features: [
        "Everything in Growth",
        "AI auto-outreach campaigns",
        "Warm intro relationship graph",
        "Job signal radar (early alerts)",
        "Unlimited admins + API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const studentPlans = [
    {
      name: "Free",
      desc: "Get started with zero commitment",
      price: "₹0",
      period: "",
      yearlyPrice: "₹0",
      yearlyPeriod: "",
      saveAmount: "",
      features: [
        "10 DSA problems/day",
        "Basic learning roadmap",
        "Community leaderboard",
        "Profile & resume builder",
        "Public portfolio",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Learner",
      desc: "Level up your preparation game",
      price: "₹99",
      period: "/month",
      yearlyPrice: "₹999",
      yearlyPeriod: "/year",
      saveAmount: "Save ₹189",
      features: [
        "Unlimited DSA tracker",
        "AI-powered personalized roadmap",
        "5 mock interviews/month",
        "Progress analytics & insights",
        "Achievement badge system",
        "Priority community access",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Pro",
      desc: "Full access to land your dream job",
      price: "₹299",
      period: "/month",
      yearlyPrice: "₹2,999",
      yearlyPeriod: "/year",
      saveAmount: "Save ₹589",
      features: [
        "AI portfolio generator",
        "ATS resume optimizer",
        "Unlimited mock interviews",
        "AI interview coach & feedback",
        "Recruiter visibility boost",
        "Custom domain portfolio",
      ],
      cta: "Go Pro",
      popular: false,
    },
  ];

  const activePlans = billingCycle === "cells" ? cellPlans : studentPlans;

  return (
    <section id="pricing" className="py-24 bg-[#E8D6B3] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.span
            className="font-sans text-[#FF5A2A] font-bold tracking-[0.15em] uppercase text-[11px] mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            className="font-sans text-base sm:text-lg text-black/60 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Built for Indian colleges and students. No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { icon: "✓", text: "No credit card required" },
            { icon: "✓", text: "14-day free trial" },
            { icon: "✓", text: "Cancel anytime" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-black/60">
              <span className="text-[#FF5A2A] font-bold">{badge.icon}</span>
              <span className="font-sans text-sm">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white p-1.5 rounded-full border-[1.5px] border-black shadow-[3px_3px_0px_0px_#000000]">
            <button
              onClick={() => setBillingCycle("cells")}
              className={`px-8 py-3 rounded-full font-sans font-bold text-sm transition-all duration-300 ${
                billingCycle === "cells"
                  ? "bg-[#FF5A2A] text-white"
                  : "text-black hover:text-[#FF5A2A]"
              }`}
            >
              For Colleges
            </button>
            <button
              onClick={() => setBillingCycle("students")}
              className={`px-8 py-3 rounded-full font-sans font-bold text-sm transition-all duration-300 ${
                billingCycle === "students"
                  ? "bg-[#FF5A2A] text-white"
                  : "text-black hover:text-[#FF5A2A]"
              }`}
            >
              For Students
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-[24px] p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#FF5A2A] text-white border-[1.5px] border-black shadow-[6px_6px_0px_0px_#000000] lg:-translate-y-4"
                    : "bg-white text-black border-[1.5px] border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-1"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-black text-white font-sans font-bold text-[10px] uppercase tracking-[0.15em] rounded-full border-[1.5px] border-black">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl mb-2">{plan.name}</h3>
                  <p className={`font-sans text-sm ${plan.popular ? "text-white/80" : "text-black/50"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-5xl font-bold">{plan.price}</span>
                    <span className={`font-sans text-base ${plan.popular ? "text-white/70" : "text-black/40"}`}>
                      {plan.period}
                    </span>
                  </div>
                  {plan.yearlyPrice !== "₹0" && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`font-sans text-sm line-through ${plan.popular ? "text-white/40" : "text-black/30"}`}>
                        {plan.yearlyPrice} {plan.yearlyPeriod}
                      </span>
                      <span className={`px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider rounded-full ${plan.popular ? "bg-white text-[#FF5A2A]" : "bg-[#FF5A2A]/10 text-[#FF5A2A]"}`}>
                        {plan.saveAmount}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? "bg-white" : "bg-[#FF5A2A]/10"}`}>
                        <svg
                          className={`w-3 h-3 ${plan.popular ? "text-[#FF5A2A]" : "text-[#FF5A2A]"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`font-sans text-sm leading-relaxed ${plan.popular ? "text-white" : "text-black/70"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-[0.08em] transition-all duration-300 border-2 ${
                    plan.popular
                      ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-[6px_6px_0px_0px_#ffffff] hover:-translate-y-0.5"
                      : "bg-black text-white border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-[#FF5A2A] hover:border-[#FF5A2A] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-0.5"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Trust Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="font-sans text-sm text-black/50">
            Join <span className="text-[#FF5A2A] font-bold">500+ colleges</span> and <span className="text-[#FF5A2A] font-bold">50,000+ students</span> already using HireUps
          </p>
        </motion.div>
      </div>
    </section>
  );
}