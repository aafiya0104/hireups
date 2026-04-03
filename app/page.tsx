"use client";

import { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);

  if (showLanding) {
    return <LandingPage />;
  }

  return <SplashScreen onComplete={() => setShowLanding(true)} />;
}

