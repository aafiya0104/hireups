"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SignatureTextProps {
  text: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function SignatureText({
  text,
  className,
  strokeColor = "currentColor",
  strokeWidth = 2,
  duration = 1.5,
  delay = 0,
  once = true,
  as: Component = "span",
}: SignatureTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  // Create SVG path for the text using a handwritten-style font approach
  // We'll use a creative approach with stroke animation on text
  
  const letterVariants = {
    hidden: { 
      opacity: 0,
      pathLength: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay: delay + i * 0.08,
          duration: duration / text.length,
          ease: "easeInOut",
        },
        opacity: { delay: delay + i * 0.08, duration: 0.1 },
      },
    }),
  };

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <Component className="relative">
        {/* Background text (faint) */}
        <span className="opacity-20">{text}</span>
        
        {/* Animated signature overlay */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 100 40"
          preserveAspectRatio="xMidYMid meet"
          style={{ 
            width: "100%", 
            height: "120%",
            top: "-10%",
          }}
        >
          <defs>
            <filter id="signature-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Signature path - stylized cursive for "HireUps" */}
          <motion.path
            d="M5,25 C5,20 8,15 10,12 C12,9 15,8 18,10 C20,12 20,18 18,22 C16,26 12,28 8,28 C4,28 2,24 3,20 C4,16 8,14 12,14 C16,14 20,16 22,20 C24,24 24,28 22,30 C20,32 16,32 14,30 M26,18 C26,15 28,12 30,12 C32,12 33,15 32,18 C31,21 29,24 27,26 C25,28 23,28 22,26 M35,20 C35,16 37,12 40,12 C43,12 44,16 43,20 C42,24 40,28 38,30 M48,15 C46,18 45,22 46,25 C47,28 50,28 52,26 C54,24 55,20 54,17 M58,12 C58,16 58,22 58,28 M62,20 C64,18 68,16 72,16 C76,16 78,18 78,22 C78,26 74,28 70,28 C66,28 64,26 65,24 C66,22 70,22 74,24 C78,26 82,28 86,28 C90,28 92,26 93,24"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#signature-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              pathLength: {
                duration: duration,
                delay: delay,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.3,
                delay: delay,
              },
            }}
          />
          
          {/* Decorative underline */}
          <motion.path
            d="M2,32 Q45,38 95,32"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth * 0.8}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            transition={{
              pathLength: {
                duration: duration * 0.5,
                delay: delay + duration * 0.8,
                ease: "easeOut",
              },
              opacity: {
                duration: 0.3,
                delay: delay + duration * 0.8,
              },
            }}
          />
        </svg>
        
        {/* Actual visible text */}
        <motion.span
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + duration * 0.5,
          }}
        >
          {text}
        </motion.span>
      </Component>
    </div>
  );
}

// Alternative simpler version using CSS stroke animation
export function SignatureTextSimple({
  text,
  className,
  strokeColor = "currentColor",
  duration = 2,
  delay = 0,
  once = true,
}: Omit<SignatureTextProps, "strokeWidth" | "as">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 300 60"
        preserveAspectRatio="xMidYMid meet"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="font-script"
          style={{
            fontSize: "48px",
            fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
          }}
        >
          <motion.tspan
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.1, delay }}
          >
            {text}
          </motion.tspan>
        </text>
      </svg>
    </div>
  );
}

// Animated handwriting effect with individual letter strokes
export function SignatureTextAnimated({
  text,
  className,
  strokeColor = "currentColor",
  strokeWidth = 2.5,
  duration = 2.5,
  delay = 0,
  once = true,
}: SignatureTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  // SVG paths for each letter in "hireUps" - stylized lowercase cursive
  const letterPaths = [
    // h (lowercase)
    "M10,15 L10,40 M10,28 Q10,22 18,22 Q25,22 25,28 L25,40",
    // i (lowercase)
    "M35,28 L35,40 M35,20 L35,18",
    // r (lowercase)
    "M45,40 L45,30 Q45,24 52,24 Q55,24 57,26",
    // e (lowercase)
    "M75,32 Q72,26 68,26 Q62,26 62,33 Q62,40 70,40 Q78,40 80,33",
    // U (uppercase)
    "M90,20 L90,35 Q90,42 100,42 Q110,42 110,35 L110,20",
    // p (lowercase)
    "M120,18 L120,48 M120,32 Q120,26 128,26 Q136,26 136,32 Q136,40 128,40 Q124,40 122,38",
    // s (lowercase)
    "M155,26 Q148,26 148,31 Q148,35 152,36 Q158,38 158,41 Q158,46 150,46 Q145,46 142,43",
  ];

  return (
    <div ref={ref} className={cn("relative inline-flex items-center", className)}>
      <svg
        width="180"
        height="60"
        viewBox="0 0 180 60"
        className="overflow-visible"
      >
        <defs>
          <filter id="ink-effect" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        
        {letterPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ink-effect)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              pathLength: {
                duration: duration / letterPaths.length,
                delay: delay + (index * duration) / letterPaths.length,
                ease: [0.4, 0, 0.2, 1],
              },
              opacity: {
                duration: 0.1,
                delay: delay + (index * duration) / letterPaths.length,
              },
            }}
          />
        ))}
        
        {/* Flourish underline */}
        <motion.path
          d="M5,50 Q90,58 175,50"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth * 0.6}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
          transition={{
            pathLength: {
              duration: duration * 0.4,
              delay: delay + duration * 0.9,
              ease: "easeOut",
            },
            opacity: {
              duration: 0.3,
              delay: delay + duration * 0.9,
            },
          }}
        />
      </svg>
    </div>
  );
}