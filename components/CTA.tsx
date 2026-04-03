export function CTA() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-secondary">
      <div className="max-w-[1240px] mx-auto bg-primary rounded-[4rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="font-sans text-white/80 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Start your journey today
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-white mb-8 leading-[1.1]">
            Give your students the shot they deserve.
          </h2>
          <p className="font-sans text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 50+ colleges already transforming their placement outcomes with AI-powered intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-primary font-sans font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-black/10 text-base">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-black text-white font-sans font-bold rounded-2xl hover:bg-black/80 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20 text-base">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
