"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Namaste! Welcome to Jyoti Info Tech. Looking for custom software, clinic/school ERP, or an AI booking assistant?",
    },
    {
      role: "user",
      text: "We need an ERP for our clinic with automated WhatsApp appointment booking & billing.",
    },
    {
      role: "bot",
      text: "We build custom HIPAA-ready clinic portals with automated WhatsApp reminders & Razorpay/Stripe billing. Live in 14 days with fixed pricing in writing.",
    },
  ]);

  const quickQuestions = [
    "How does fixed pricing work?",
    "What is the turnaround timeline?",
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    const newMsg = { role: "user", text };
    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setChatInput("");

    setTimeout(() => {
      let botReply =
        "Thank you! Our lead software architect will review your requirement and send an initial blueprint with fixed-price scope within 24 hours.";
      if (text.toLowerCase().includes("pricing")) {
        botReply =
          "We offer 100% fixed pricing in writing: Web & AI Bot from ₹34,999, Client ERP Portals from ₹89,999, and Enterprise Cloud from ₹2.49L. 50% deposit, 50% on milestone sign-off.";
      } else if (text.toLowerCase().includes("timeline")) {
        botReply =
          "Websites + AI bots take 7–10 days. Custom portals take 14–21 days. Enterprise cloud systems take 3–5 weeks with weekly staging demos.";
      }

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    }, 450);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 bg-[#f4f1ea] border-b border-[#11100e]/12">
      {/* Background Subtle Flame Accents */}
      <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-[550px] w-[550px] rounded-full bg-[#fe1e10]/6 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#11100e]/4 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7">
            {/* Status Pill with Flame Mark */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#11100e]/15 bg-white/80 backdrop-blur-xs px-3 py-1.5 text-[11px] sm:text-xs font-mono text-[#11100e]">
              <Image
                src="/logo.png"
                alt="Flame icon"
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="font-bubbles font-bold text-[#fe1e10]">Jyoti Info Tech</span>
              <span className="text-[#11100e]/30">•</span>
              <span className="text-[#11100e]/70">Boutique IT &amp; Software Solutions</span>
            </div>

            {/* Main Headline in Courgette with Petit Formal Script accent */}
            <h1 className="mt-5 sm:mt-6 font-courgette text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#11100e] leading-[1.2] sm:leading-[1.18]">
              Custom software, ERP portals &amp;{" "}
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl font-normal text-[#fe1e10] inline-block px-1">
                AI systems
              </span>{" "}
              built for serious scale.
            </h1>

            {/* Subhead */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#11100e]/75">
              <strong className="font-bubbles font-bold text-[#11100e]">Jyoti Info Tech</strong>{" "}
              builds fixed-price digital systems for growing businesses, healthcare clinics, institutions, and modern enterprises. 
              Designed, built, and maintained exclusively by senior engineers. No account managers, no junior handoffs, no hourly billing surprises.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#11100e] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#f4f1ea] transition-all duration-300 hover:bg-[#fe1e10] hover:shadow-xl hover:shadow-[#fe1e10]/20 text-center"
              >
                <span className="font-bubbles tracking-wide">Request Free Architecture Audit</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

              <a
                href="#systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#11100e]/20 bg-white/70 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-medium text-[#11100e] transition-all duration-300 hover:border-[#11100e] hover:bg-white text-center"
              >
                <span>Explore Live Systems</span>
                <span className="font-mono text-xs text-[#fe1e10]">↓</span>
              </a>
            </div>

            {/* Trust Metrics Bar in Fuzzy Bubbles */}
            <div className="mt-10 sm:mt-12 border-t border-[#11100e]/12 pt-6">
              <p className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-[#11100e]/50 mb-3">
                Production Standards &amp; Guarantees
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
                <div className="rounded-xl border border-[#11100e]/10 bg-white/50 p-2.5 sm:p-3">
                  <div className="font-bubbles text-xl sm:text-2xl font-bold text-[#11100e]">
                    100+
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#11100e]/65">Systems Delivered</div>
                </div>
                <div className="rounded-xl border border-[#11100e]/10 bg-white/50 p-2.5 sm:p-3">
                  <div className="font-bubbles text-xl sm:text-2xl font-bold text-[#fe1e10]">
                    99.8%
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#11100e]/65">Production Uptime</div>
                </div>
                <div className="rounded-xl border border-[#11100e]/10 bg-white/50 p-2.5 sm:p-3">
                  <div className="font-bubbles text-xl sm:text-2xl font-bold text-[#11100e]">
                    7–21d
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#11100e]/65">Staged Delivery</div>
                </div>
                <div className="rounded-xl border border-[#11100e]/10 bg-white/50 p-2.5 sm:p-3">
                  <div className="font-bubbles text-xl sm:text-2xl font-bold text-emerald-700">
                    100%
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] text-[#11100e]/65">Code Ownership</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Light & Simple Assistant Simulator (No harsh black) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full rounded-2xl border border-[#11100e]/15 bg-white p-4 sm:p-6 text-[#11100e] shadow-xl shadow-[#11100e]/5 transition-all duration-300">
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#11100e]/10 pb-3 gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-[11px] text-[#11100e]/50">
                    jyotiinfotech.com/portal
                  </span>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-mono text-[10px] text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span>ONLINE 99.8% SLA</span>
                </div>
              </div>

              {/* Chat Messages Stream */}
              <div className="mt-4 flex flex-col h-[300px] sm:h-[320px] justify-between">
                <div className="space-y-3 overflow-y-auto pr-1">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-2 sm:gap-2.5 ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {m.role === "bot" && (
                        <div className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-[#faf8f4] border border-[#11100e]/10 p-1">
                          <Image
                            src="/logo.png"
                            alt="JIT"
                            width={18}
                            height={18}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[88%] sm:max-w-[85%] rounded-2xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs leading-relaxed font-sans ${
                          m.role === "user"
                            ? "bg-[#fe1e10] text-white rounded-br-none shadow-xs"
                            : "bg-[#faf8f4] text-[#11100e]/90 rounded-bl-none border border-[#11100e]/10"
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Questions Chips */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {quickQuestions.map((q, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={() => handleSendMessage(q)}
                      className="rounded-full border border-[#11100e]/15 bg-[#faf8f4] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-sans text-[#11100e]/75 hover:border-[#fe1e10] hover:text-[#fe1e10] hover:bg-white transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Simple Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="mt-3 flex gap-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask a question or requirement..."
                    className="min-w-0 flex-1 rounded-xl border border-[#11100e]/15 bg-[#faf8f4] px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs text-[#11100e] placeholder-[#11100e]/40 focus:border-[#fe1e10] focus:bg-white focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-[#fe1e10] px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#df1609]"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Clean Bottom Notification Pill */}
              <div className="mt-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl border border-emerald-600/20 bg-emerald-50/70 px-3.5 py-2 gap-1 sm:gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  <span className="text-[11px] sm:text-xs font-sans text-emerald-950">
                    <strong>Lead Verified:</strong> Clinic Booking Portal · Automated 24/7
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 font-semibold shrink-0">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
