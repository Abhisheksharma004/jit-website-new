import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#11100e] text-[#f4f1ea]">
      {/* 2px Accent Line across top of footer (Bytencia signature) */}
      <div aria-hidden="true" className="h-[2px] bg-[#fe1e10]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Massive Typographic Watermark in Courgette */}
        <div className="w-full overflow-hidden select-none pb-2 pt-10 sm:pt-14 lg:pt-16">
          <p className="font-courgette select-none whitespace-nowrap text-[clamp(2.5rem,10.5vw,9.5rem)] font-normal leading-[0.9] tracking-[-0.02em] text-[#f4f1ea]/[0.13]">
            Jyoti Info Tech<span className="text-[#fe1e10]">.</span>
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-8 sm:gap-12 border-t border-[#f4f1ea]/12 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Column 1: Brand & Tagline */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-85"
            >
              <div className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Jyoti Info Tech"
                  width={26}
                  height={26}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bubbles text-[22px] font-bold leading-none tracking-[-0.01em] text-[#f4f1ea]">
                Jyoti Info Tech<span className="text-[#fe1e10]">.</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#f4f1ea]/55 font-sans">
              Websites, portals and AI chatbots — <span className="font-script text-base text-[#f4f1ea]/80">designed and built by senior software engineers</span>, for clients worldwide.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4f1ea]/45">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm font-sans">
              <li>
                <a
                  href="#services"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  Website + AI Chatbot
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  Client / Admin Portal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  MVP / AI Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4f1ea]/45">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm font-sans">
              <li>
                <a
                  href="#systems"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="link-hover-effect text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4f1ea]/45">
              Connect
            </p>
            <ul className="mt-5 space-y-3 text-sm font-sans">
              <li>
                <a
                  href="mailto:contact@jyotiinfotech.com"
                  className="group inline-flex items-center gap-2.5 text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#f4f1ea]/45 transition-colors duration-300 group-hover:text-[#fe1e10]"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <span>Email</span>
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#f4f1ea]/45 transition-colors duration-300 group-hover:text-[#fe1e10]"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#f4f1ea]/45 transition-colors duration-300 group-hover:text-[#fe1e10]"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-[#f4f1ea]/60 transition-colors duration-300 hover:text-[#f4f1ea]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-[#f4f1ea]/45 transition-colors duration-300 group-hover:text-emerald-400"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#f4f1ea]/12 py-6 sm:flex-row">
          <p className="text-xs text-[#f4f1ea]/45 font-sans">
            © 2026 Jyoti Info Tech. All rights reserved.
          </p>
          <p className="text-xs text-[#f4f1ea]/35 font-script text-sm">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
