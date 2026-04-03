"use client";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;


import { motion } from "framer-motion";

export function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: EASE,
      },
    },
  };

  const buttonHoverVariants = {
    rest: {
      scale: 1,
      transition: { ease: "easeOut" as const }
    },
    hover: {
      scale: 1.05,
      transition: { ease: "easeIn" as const }
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-secondary flex items-center overflow-x-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen px-6 sm:px-12 lg:px-20 pb-24 lg:pb-32">
        {/* Left Side: Text & Actions */}
        <motion.div
          className="flex flex-col justify-center space-y-5 z-10 py-28 lg:py-0 lg:pt-36"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            {/* Main Heading with animated underline highlights */}
            <motion.h1
              className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-black"
              variants={itemVariants}
            >
              Better{" "}
              <span className="relative inline-block">
                <span className="text-primary italic">Placements</span>
                {/* Animated underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: EASE,
                  }}
                />
              </span>{" "}
              for{" "}
              <span className="text-primary italic">Colleges.</span>
              <br />
              <span className="block mt-3">Better Opportunities for{" "}
                <span className="relative inline-block">
                  <span className="text-primary italic">Students.</span>
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.8,
                      delay: 1.3,
                      ease: EASE,
                    }}
                  />
                </span></span>
            </motion.h1>

            {/* Subheading with modern startup font */}
            <motion.p
              className="font-subheading text-xs sm:text-sm text-black/70 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              HireUps uses AI to connect placement cells with recruiters, helping students discover the right opportunities -{" "}
              <span className="text-primary font-medium">faster</span>,{" "}
              <span className="text-primary font-medium">smarter</span>, and {" "}
              <span className="text-primary font-medium">scalable</span>.
            </motion.p>
          </div>

          {/* Buttons with sketch-style effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-1"
            variants={itemVariants}
          >
            {/* Primary Button - Sketch Style */}
            <motion.button
              className="group relative px-8 py-4 bg-primary text-white font-sans font-semibold rounded-full border-2 border-primary transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                For Placement Cells
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.button>

            {/* Secondary Button - Sketch Style with black backdrop */}
            <motion.button
              className="group relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-sans font-semibold rounded-full transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-white hover:border-black active:shadow-none active:translate-x-0 active:translate-y-0"
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                For Students
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side: Full-bleed integrated image */}
        <motion.div
          className="hidden lg:block absolute -right-20 top-0 h-full select-none pointer-events-none"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Full image visible */}
          <img
            src="https://cdn.jsdelivr.net/gh/aafiya0104/hireups-assets@main/hero_image.png"
            alt="HireUps platform features"
            className="h-full w-auto block"
          />

          {/* Left-edge feather */}
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-secondary via-secondary/40 to-transparent" />

          {/* Floating animation for the image */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}