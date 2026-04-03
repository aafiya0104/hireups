import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { Marquee } from "./Marquee";
import { Platforms } from "./Platforms";
import { Features } from "./Features";
import { Pricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary animate-in fade-in duration-1000">
      <Navbar />
      <HeroSection />
      <Marquee />
      <Platforms />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
