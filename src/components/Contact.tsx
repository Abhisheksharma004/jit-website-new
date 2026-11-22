"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    projectScope: "portal",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="border-t border-[#131210]/20 bg-[#131210] py-16 sm:py-24 text-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Outreach & Value Promise */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fe1e10]/30 bg-[#fe1e10]/10 px-3.5 py-1.5 font-mono text-xs text-[#fe1e10]">
              <Image
                src="/logo.png"
                alt="Jyoti Info Tech"
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
              />
              <span className="font-semibold uppercase tracking-wider">// Kickstart Your Project</span>
            </div>

            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              Tell us what software bottleneck is holding your business back.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#f4f1ea]/75">
              Send one message describing your business operations and current system (or manual workflow). 
              Our lead software architect will return a <strong>free technical audit</strong> with recommended 
              architecture, milestone timeline, and a fixed price in writing — zero obligation.
            </p>

            {/* Guarantees */}
            <div className="mt-8 space-y-3 font-mono text-xs text-[#f4f1ea]/85">
              <div className="flex items-center gap-2.5">
                <span className="text-[#46ecd5] font-bold">✓</span>
                <span>Free technical architecture audit within 24 hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#46ecd5] font-bold">✓</span>
                <span>100% fixed price &amp; scope in writing before any deposit</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#46ecd5] font-bold">✓</span>
                <span>Direct engineer communication via WhatsApp / Slack</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#46ecd5] font-bold">✓</span>
                <span>100% full source code and IP ownership upon launch</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="mt-10 border-t border-[#f4f1ea]/15 pt-6 space-y-4">
              <div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/45">
                  Direct Email Channel
                </div>
                <a
                  href="mailto:contact@jyotiinfotech.com"
                  className="mt-1 inline-block font-mono text-sm font-medium text-[#46ecd5] hover:underline"
                >
                  contact@jyotiinfotech.com
                </a>
              </div>

              <div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/45 mb-1.5">
                  Instant WhatsApp Consultation
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Jyoti%20Info%20Tech,%20I%20would%20like%20to%20request%20a%20free%20technical%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-mono text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-400 text-center"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Chat directly with Lead Software Architect</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Audit Request Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl border border-[#f4f1ea]/15 bg-[#f4f1ea]/[0.03] p-5 sm:p-8 lg:p-10 backdrop-blur-xs">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#46ecd5]/15 text-[#46ecd5]">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Audit Request Received!
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-[#f4f1ea]/70">
                    Thank you, {formData.name}. Our lead software architect will review your operational requirements 
                    and email a comprehensive technical proposal with fixed pricing within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        businessType: "",
                        projectScope: "portal",
                        message: "",
                      });
                    }}
                    className="mt-6 inline-flex rounded-full border border-[#f4f1ea]/20 px-6 py-2.5 text-xs font-mono text-[#f4f1ea] hover:bg-[#f4f1ea]/10 transition-colors"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-lg border border-[#f4f1ea]/20 bg-[#f4f1ea]/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#f4f1ea]/30 focus:border-[#fe1e10] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-lg border border-[#f4f1ea]/20 bg-[#f4f1ea]/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#f4f1ea]/30 focus:border-[#fe1e10] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="phone" className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full rounded-lg border border-[#f4f1ea]/20 bg-[#f4f1ea]/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#f4f1ea]/30 focus:border-[#fe1e10] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business Domain */}
                    <div>
                      <label htmlFor="businessType" className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                        Business Domain / Industry *
                      </label>
                      <input
                        id="businessType"
                        type="text"
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        placeholder="Your business or industry"
                        className="w-full rounded-lg border border-[#f4f1ea]/20 bg-[#f4f1ea]/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#f4f1ea]/30 focus:border-[#fe1e10] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Scope Selection */}
                  <div>
                    <label className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                      Primary Project Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: "website_bot", label: "Website + AI Bot" },
                        { id: "portal", label: "Client/ERP Portal" },
                        { id: "enterprise", label: "Enterprise Software" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectScope: item.id })}
                          className={`rounded-lg border px-3 py-2.5 text-center text-xs font-mono transition-all ${
                            formData.projectScope === item.id
                              ? "border-[#fe1e10] bg-[#fe1e10] text-white font-medium"
                              : "border-[#f4f1ea]/15 bg-[#f4f1ea]/5 text-[#f4f1ea]/70 hover:border-[#f4f1ea]/30"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#f4f1ea]/70 mb-2">
                      What bottleneck or challenge do you want to solve? *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you want to build or what challenge you want to solve..."
                      className="w-full rounded-lg border border-[#f4f1ea]/20 bg-[#f4f1ea]/5 px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-white placeholder-[#f4f1ea]/30 focus:border-[#fe1e10] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-[#fe1e10] py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#df1609] hover:shadow-lg hover:shadow-[#fe1e10]/25 disabled:opacity-50"
                  >
                    {loading ? "Analyzing Architecture Requirements..." : "Request My Free Technical Audit →"}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[10px] sm:text-[11px] text-[#f4f1ea]/45">
                    <svg className="h-3 w-3 shrink-0 text-[#f4f1ea]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <span>Strict NDA standard. We never share or sell client project data.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
