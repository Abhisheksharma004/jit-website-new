"use client";

import { useState } from "react";

export default function Services() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      id: "website_ai",
      index: "01",
      code: "SPEC // WEB+AI",
      name: "High-Performance Website + AI Chatbot",
      tagline: "Turn visitors into paid clients around the clock.",
      priceINR: "₹34,999 – ₹59,999",
      priceUSD: "$450 – $750",
      depositINR: "₹17,500 deposit to begin",
      depositUSD: "$225 deposit to begin",
      timeline: "7–10 Days Turnaround",
      badge: "Fast Launch",
      problem:
        "Your business loses up to 45% of potential client bookings that occur after 8:00 PM when your front desk is closed and competitors are awake.",
      solution:
        "A lightning-fast Next.js 16 web platform with an intelligent AI chatbot trained on your services, FAQs, and pricing. It answers questions, captures verified phone numbers, and books visits directly into your calendar 24/7.",
      deliverables: [
        "Custom responsive Next.js frontend with mobile-first speed",
        "AI Chatbot trained on your custom business knowledge base",
        "Instant WhatsApp & Email lead alerts with phone verification",
        "Admin lead management inbox with CSV / Excel export",
        "Full Google SEO optimization & Schema.org rich snippets",
        "30-day post-launch warranty & staff video walkthrough",
      ],
      stack: ["Next.js 16", "OpenAI / Claude API", "WhatsApp Cloud API", "Tailwind CSS", "Vercel / Cloudflare"],
      ctaLabel: "Request Website + AI Bot Scope",
    },
    {
      id: "portal_erp",
      index: "02",
      code: "SPEC // PORTAL+ERP",
      name: "Custom Client Portal & Admin ERP",
      tagline: "Replace messy WhatsApp chats and Excel spreadsheets.",
      priceINR: "₹89,999 – ₹1,89,999",
      priceUSD: "$1,150 – $2,400",
      depositINR: "50% milestone staging",
      depositUSD: "50% milestone staging",
      timeline: "14–21 Days Turnaround",
      badge: "Most Requested",
      problem:
        "Operations managed across scattered Excel sheets, paper registers, and endless WhatsApp threads lead to missed invoices, inventory shrinkage, and delayed reports.",
      solution:
        "A secure, role-based cloud portal tailored to your exact operational workflow. Multi-tenant dashboards for Admins, Managers, and Clients with automated billing, attendance, and real-time management reports.",
      deliverables: [
        "Granular Role-Based Access Control (RBAC: Admin, Staff, Customer)",
        "Automated PDF invoicing & payment gateway (Razorpay / Stripe)",
        "Cloud database with PostgreSQL / Supabase & automated backups",
        "Automated WhatsApp & SMS notifications API integration",
        "Real-time analytics dashboard with revenue & activity graphs",
        "60-day priority support SLA & complete video documentation",
      ],
      stack: ["React / Next.js", "PostgreSQL", "Node.js", "Redis Cache", "Razorpay / Stripe", "Docker"],
      ctaLabel: "Request Custom Portal Scope",
    },
    {
      id: "enterprise_mvp",
      index: "03",
      code: "SPEC // ENTERPRISE",
      name: "Custom Enterprise Software & Cloud MVP",
      tagline: "Production microservices built for 10,000+ daily users.",
      priceINR: "From ₹2,49,999+",
      priceUSD: "From $3,000+",
      depositINR: "Structured weekly sprint milestones",
      depositUSD: "Structured weekly sprint milestones",
      timeline: "3–6 Weeks Sprints",
      badge: "Enterprise Grade",
      problem:
        "Legacy software holding your team back, slow database queries during peak traffic, or launching a scalable SaaS product without architectural debt.",
      solution:
        "Full-scale custom software engineered on AWS / GCP cloud microservices. High-throughput APIs, automated CI/CD deployment pipelines, strict 99.8% uptime standard, and complete intellectual property ownership.",
      deliverables: [
        "Scalable microservices architecture on AWS ECS / Docker / GCP",
        "Strict 99.8% production uptime SLA & automated daily backups",
        "High-performance caching with Redis & database query tuning",
        "Complete Swagger / OpenAPI documentation & webhook endpoints",
        "100% full source code ownership with zero vendor lock-in",
        "Dedicated direct Slack / WhatsApp channel with lead architect",
      ],
      stack: ["AWS Cloud", "Python FastAPI / Node.js", "PostgreSQL Cluster", "Docker", "Redis", "Cloudflare Zero-Trust"],
      ctaLabel: "Schedule Software Architect Call",
    },
  ];

  const current = services[selectedService];

  return (
    <section id="services" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader with Currency Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#11100e]/12 pb-6 gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
              [ 01 / SERVICES &amp; PRICING ]
            </span>
            <span className="hidden sm:inline font-mono text-xs text-[#11100e]/40">•</span>
            <span className="font-mono text-xs text-[#11100e]/50 hidden sm:inline">
              FIXED SCOPE IN WRITING · ZERO HOURLY PADDING
            </span>
          </div>

          {/* Interactive Currency Switcher */}
          <div className="flex items-center gap-1.5 rounded-full border border-[#11100e]/15 bg-white p-1 shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`rounded-full px-3 py-1 text-xs font-mono transition-all ${
                currency === "INR"
                  ? "bg-[#fe1e10] text-white font-semibold shadow-xs"
                  : "text-[#11100e]/70 hover:text-[#11100e]"
              }`}
            >
              ₹ INR (India)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`rounded-full px-3 py-1 text-xs font-mono transition-all ${
                currency === "USD"
                  ? "bg-[#fe1e10] text-white font-semibold shadow-xs"
                  : "text-[#11100e]/70 hover:text-[#11100e]"
              }`}
            >
              $ USD (Global)
            </button>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mt-8 max-w-3xl">
          <h2 className="font-courgette text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Three offers. Fixed price, in writing.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#11100e]/70">
            Select a service below to inspect the complete engineering blueprint, 
            guaranteed turnaround timeline, and included production deliverables.
          </p>
        </div>

        {/* Master-Detail Studio Architecture */}
        <div className="mt-12 sm:mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Clean Light Service Selectors (No black background) */}
          <div className="space-y-4 lg:col-span-5 w-full">
            {services.map((svc, idx) => {
              const isSelected = selectedService === idx;
              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(idx)}
                  className={`group cursor-pointer rounded-2xl border p-4.5 sm:p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-2 border-[#fe1e10] bg-[#faf8f4] text-[#11100e] shadow-lg shadow-[#fe1e10]/5 ring-1 ring-[#fe1e10]/20"
                      : "border border-[#11100e]/15 bg-white hover:border-[#11100e]/40 hover:bg-[#faf8f4]"
                  }`}
                >
                  {/* Card Header: Index & Badge */}
                  <div className="flex items-center justify-between border-b border-[#11100e]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bubbles text-lg font-bold text-[#fe1e10]">
                        {svc.index}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#11100e]/50">
                        {svc.code}
                      </span>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                        isSelected
                          ? "bg-[#fe1e10] text-white"
                          : "bg-[#11100e]/5 text-[#11100e]/70"
                      }`}
                    >
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3.5 font-courgette text-lg sm:text-xl font-bold leading-tight text-[#11100e]">
                    {svc.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-1 font-script text-sm text-[#fe1e10]">
                    {svc.tagline}
                  </p>

                  {/* Price Bar */}
                  <div className="mt-4 flex flex-wrap items-baseline justify-between border-t border-[#11100e]/10 pt-3 gap-2">
                    <div>
                      <div className="font-bubbles text-xl sm:text-2xl font-bold tracking-tight text-[#fe1e10]">
                        {currency === "INR" ? svc.priceINR : svc.priceUSD}
                      </div>
                      <div className="font-mono text-[10px] text-[#11100e]/50">
                        {currency === "INR" ? svc.depositINR : svc.depositUSD}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs text-[#11100e]/60 block">
                        {svc.timeline}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-[#fe1e10]">
                        {isSelected ? "● Inspected" : "Click to view →"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Architectural Specification Terminal (Light & Clean) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl border border-[#11100e]/15 bg-white p-5 sm:p-8 lg:p-9 shadow-xl shadow-[#11100e]/5 transition-all duration-300">
              {/* Window Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#11100e]/10 pb-4 gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fe1e10] animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#11100e]">
                    Specification {current.index} // Full Blueprint
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-emerald-800">
                  Fixed Price &amp; Scope in Writing
                </span>
              </div>

              {/* Title & Tagline in Selected Component */}
              <div className="mt-6">
                <h3 className="font-courgette text-2xl sm:text-3xl font-bold text-[#11100e]">
                  {current.name}
                </h3>
                <p className="mt-1 font-script text-base sm:text-lg text-[#fe1e10]">
                  {current.tagline}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-red-700">
                    The Operational Bottleneck
                  </div>
                  <p className="mt-1.5 text-xs text-[#11100e]/80 leading-relaxed font-sans">
                    {current.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-600/20 bg-emerald-500/[0.04] p-4">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-800">
                    The Engineered Solution
                  </div>
                  <p className="mt-1.5 text-xs text-[#11100e]/80 leading-relaxed font-sans">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-7">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#11100e]/60 mb-3">
                  Included Production Deliverables
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {current.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-[#11100e]/85 font-sans"
                    >
                      <span className="text-[#fe1e10] font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-7 border-t border-[#11100e]/10 pt-4">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#11100e]/50 mb-2.5">
                  Production Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {current.stack.map((t, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-md border border-[#11100e]/15 bg-[#faf8f4] px-2.5 py-1 font-mono text-[11px] text-[#11100e]/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clean Light Footer CTA & Price Banner (No black box) */}
              <div className="mt-8 rounded-xl border border-[#11100e]/15 bg-[#faf8f4] p-4 sm:p-5 text-[#11100e] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto text-center sm:text-left">
                  <div className="font-mono text-[10px] uppercase text-[#11100e]/50 font-semibold">
                    Guaranteed Fixed Quote
                  </div>
                  <div className="font-bubbles text-2xl font-bold text-[#fe1e10]">
                    {currency === "INR" ? current.priceINR : current.priceUSD}
                  </div>
                  <div className="font-mono text-[10px] text-[#11100e]/60">
                    {current.timeline}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#fe1e10] px-6 py-3 font-bubbles text-xs font-semibold text-white transition-all hover:bg-[#df1609] hover:shadow-lg hover:shadow-[#fe1e10]/25 text-center"
                >
                  <span>{current.ctaLabel}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Cloud Maintenance Care Strip */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-[#11100e]/15 bg-[#faf8f4] p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#fe1e10] font-semibold">
              <span>● Optional Post-Launch Care Plan</span>
            </div>
            <h4 className="font-courgette text-lg sm:text-xl font-bold text-[#11100e]">
              Need ongoing server maintenance, security patching &amp; feature updates?
            </h4>
            <p className="text-xs text-[#11100e]/70 leading-relaxed font-sans">
              All projects include 30–60 days warranty. Afterward, our senior engineers offer optional monthly 
              infrastructure care starting from <strong>{currency === "INR" ? "₹6,999/mo" : "$99/mo"}</strong> with guaranteed 99.8% uptime SLA.
            </p>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#11100e]/20 bg-white px-5 py-3 font-mono text-xs text-[#11100e] transition-colors hover:border-[#11100e] hover:bg-[#11100e] hover:text-[#f4f1ea] text-center"
          >
            <span>Inquire About Care Plans</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
