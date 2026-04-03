"use client";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;


import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Platforms",
    "Working",
    "Pricing",
    "Testimonials",
    "Footers",
  ];

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: EASE,
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: EASE,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const,  // ✅
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 lg:px-20 ${isScrolled
          ? "bg-secondary/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/" className="relative w-48 h-14 flex items-center group">
            <Image
              src="/hireups_logo.png"
              alt="HireUps Logo"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
        </motion.div>

        {/* Navigation Items (Desktop) with staggered animation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative font-sans text-sm font-medium text-black/70 hover:text-primary transition-colors duration-200 group"
              >
                {item}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Login Button with sketch effect */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-full border-2 border-primary transition-all duration-200 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-none active:translate-x-0 active:translate-y-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="ml-4 lg:hidden p-2 text-black relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 font-sans text-base font-medium text-black/70 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}