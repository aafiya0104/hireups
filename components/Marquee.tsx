export function Marquee() {
  const colleges = [
    "VIT Vellore",
    "SRM Chennai",
    "KIIT Bhubaneswar",
    "Manipal University",
    "Amity University",
    "LPU Jalandhar",
    "Chandigarh University",
    "NMIMS Mumbai",
    "BIT Mesra",
    "Thapar Patiala",
    "JIIT Noida",
    "Bennett University",
    "Christ University",
    "Symbiosis Pune",
    "Lovely Professional",
    "Sharda University",
  ];

  const Item = ({ label }: { label: string }) => (
    <button
      disabled
      className="mx-4 font-sans text-sm font-semibold text-white/50 hover:text-black cursor-default transition-colors duration-200 px-3 py-1 whitespace-nowrap pointer-events-auto"
    >
      {label}
    </button>
  );

  return (
    <section className="py-2 bg-primary overflow-hidden -mt-1">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {colleges.map((c, i) => <Item key={`a-${i}`} label={c} />)}
          {colleges.map((c, i) => <Item key={`b-${i}`} label={c} />)}
        </div>

        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
