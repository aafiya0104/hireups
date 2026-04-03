import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const footerGroups = [
    {
      title: "Product",
      links: [
        { name: "Platforms", href: "#platforms" },
        { name: "Features", href: "#features" },
        { name: "Working", href: "#working" },
        { name: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Success Stories",
      links: [
        { name: "Testimonials", href: "#testimonials" },
        { name: "Colleges", href: "#" },
        { name: "Reports", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Privacy", href: "#" },
      ],
    },
  ];

  return (
    <footer id="footers" className="bg-primary pt-24 pb-12 px-6 sm:px-12 lg:px-20 border-t-4 border-black">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-5xl sm:text-7xl text-black leading-[0.9] tracking-tighter mb-8">
              REVOLUTIONIZING <br /> INDIAN PLACEMENTS.
            </h2>
            <p className="font-sans text-xl text-black/80 max-w-md leading-snug">
              Messiah AI is the intelligence layer connecting 50k+ students to top-tier global opportunities.
            </p>
          </div>

          <Link href="/" className="relative w-48 h-14 block group">
            <div className="absolute inset-0 bg-black rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white border-2 border-black rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center px-6">
              <Image
                src="/hireups_logo.png"
                alt="HireUps Logo"
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 border-t-2 border-black pt-16">

          <div className="lg:col-span-4 max-w-xs">
            <h4 className="font-sans font-black text-black text-xs uppercase tracking-[0.2em] mb-8">
              Stay Connected
            </h4>
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                { name: 'Twitter', icon: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /> },
                { name: 'GitHub', icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12" /> }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 bg-black text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000000] border-2 border-black rounded-xl transition-all duration-300 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">{social.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerGroups.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-sans font-black text-black text-xs uppercase tracking-[0.2em] mb-8">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-black/70 hover:text-black hover:font-bold transition-all"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="font-sans text-[11px] font-bold text-black/60 uppercase tracking-widest">
            © 2026 HireUps · Built for the future of Indian education.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="font-sans text-[11px] font-bold text-black/60 hover:text-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-sans text-[11px] font-bold text-black/60 hover:text-black uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
