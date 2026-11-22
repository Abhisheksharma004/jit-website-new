"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#11100e]/10 bg-[#f4f1ea]/90 backdrop-blur-md shadow-xs py-3"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo: Clean transparent flame logo (No black box background) */}
        <a
          href="#"
          className="group flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-95"
        >
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Jyoti Info Tech Flame Logo"
              width={34}
              height={34}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bubbles text-lg sm:text-xl font-bold tracking-tight text-[#11100e] transition-colors group-hover:text-[#fe1e10]">
                Jyoti Info Tech
              </span>
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#fe1e10]" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-[#11100e]/60 -mt-0.5">
              Software &amp; IT Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#services"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              Services &amp; Pricing
            </a>
          </li>
          <li>
            <a
              href="#systems"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              Systems
            </a>
          </li>
          <li>
            <a
              href="#calculator"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              Estimator
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              Client Proof
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="link-hover-effect text-xs font-mono uppercase tracking-wider text-[#11100e]/75 transition-colors hover:text-[#11100e]"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Action Button (Start a Project only, no WhatsApp button) */}
        <div className="hidden items-center md:flex">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#11100e] px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#f4f1ea] transition-all duration-300 hover:bg-[#fe1e10] hover:shadow-lg hover:shadow-[#fe1e10]/25"
          >
            <span>Start a Project</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-[#11100e] transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#11100e] transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#11100e] transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#11100e]/10 bg-[#f4f1ea] px-6 py-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                Services &amp; Pricing
              </a>
            </li>
            <li>
              <a
                href="#systems"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                Production Systems
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                Solution Estimator
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                Our 4-Step Process
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                Client Testimonials
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#11100e]/80 hover:text-[#11100e]"
              >
                FAQ
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#11100e] py-3 text-xs font-mono uppercase tracking-wider font-semibold text-[#f4f1ea]"
              >
                Request Free Audit →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
