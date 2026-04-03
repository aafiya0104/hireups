"use client";

import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const duration = 3000;
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small pause at 100% before fading out
      setTimeout(() => {
        setLoadingComplete(true);
        // Wait for the fade-out transition to finish before unmounting splash
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 400); 
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`flex min-h-screen flex-col items-center justify-center bg-splash-bg transition-opacity duration-500 ${
        loadingComplete ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* mt-10 shifts the cluster visibly below the absolute vertical center */}
      <div className="flex flex-col items-center justify-center space-y-2 w-full max-w-xs px-6 mt-10">
        
        {/* Video Container (Made smaller: w-28 h-28) */}
        <div className="relative w-28 h-28 flex items-center justify-center overflow-hidden rounded-3xl">
          <video 
            src="/hireups_loading.mp4" 
            autoPlay 
            muted 
            playsInline 
            loop 
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Progress Bar & Counter Container (Closer to video due to space-y-2) */}
        <div className="flex flex-col items-center w-full space-y-3">
          <span className="font-heading font-medium text-black tracking-[0.2em] uppercase text-sm">
            Loading {Math.min(100, Math.floor(progress))}%
          </span>
          <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-75 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
