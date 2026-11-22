"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<"all" | "erp" | "ai" | "saas">("all");

  const projects = [
    {
      id: "campus360",
      index: "CASE / 01",
      category: "erp",
      title: "JIT Campus360",
      subtitle: "Enterprise Institute & School Management Suite",
      badge: "In Production",
      problem:
        "Schools and colleges manage student records across fragmented paper registers, disparate spreadsheets, and endless WhatsApp parent queries. Attendance in one file, fee defaults in another, exam marks lost in transit.",
      solution:
        "A unified cloud ERP with distinct dashboards for Admin, Teachers, Parents, and Accountants. Includes biometric attendance sync, automated fee receipts with Razorpay, and instant WhatsApp report cards.",
      metrics: [
        { label: "Active Students", value: "2,500+" },
        { label: "Attendance Accuracy", value: "99.1%" },
        { label: "Fee Collection Delay", value: "-64%" },
      ],
      techStack: ["Next.js 16", "PostgreSQL", "Node.js", "Docker", "AWS ECS", "Razorpay API"],
      demoUrl: "#contact",
      demoLabel: "Request ERP Demo",
    },
    {
      id: "logiflow",
      index: "CASE / 02",
      category: "saas",
      title: "LogiFlow Dispatcher",
      subtitle: "Real-Time Fleet & Warehouse Logistics Hub",
      badge: "In Production",
      problem:
        "Logistics coordinators losing track of delivery schedules, manual e-way bill generation errors, and endless phone calls to locate drivers and cargo status.",
      solution:
        "High-throughput dispatch platform with real-time GPS tracking, automated customer dispatch SMS, digital Proof-of-Delivery signatures, and automated GST billing.",
      metrics: [
        { label: "Daily Shipments", value: "350+" },
        { label: "Dispatch Latency", value: "3.2m" },
        { label: "Transit Loss", value: "0.02%" },
      ],
      techStack: ["React", "FastAPI (Python)", "Redis", "Supabase", "Google Maps Platform"],
      demoUrl: "#contact",
      demoLabel: "Request Portal Demo",
    },
    {
      id: "carepulse",
      index: "CASE / 03",
      category: "ai",
      title: "CarePulse AI Clinic Suite",
      subtitle: "Healthcare Patient Portal with 24/7 AI Triage & Booking",
      badge: "Live System",
      problem:
        "Clinics losing up to 40% of patient inquiries that happen after 8:00 PM when the reception desk is closed, leading to lost appointments to competitors.",
      solution:
        "A HIPAA-compliant patient booking portal with an intelligent AI chatbot that answers treatment FAQs, triages symptoms, checks doctor availability, and schedules visits seamlessly.",
      metrics: [
        { label: "After-Hours Bookings", value: "+58%" },
        { label: "Front-desk Call Load", value: "-45%" },
        { label: "Patient Satisfaction", value: "4.9/5" },
      ],
      techStack: ["Next.js", "OpenAI / Claude API", "PostgreSQL", "WhatsApp Cloud API", "Tailwind"],
      demoUrl: "#contact",
      demoLabel: "Test AI Clinic Bot",
    },
    {
      id: "fintrack",
      index: "CASE / 04",
      category: "saas",
      title: "FinMetric Cloud",
      subtitle: "Automated Multi-Branch GST & Revenue Analytics",
      badge: "Enterprise Standard",
      problem:
        "Growing retail and manufacturing chains spending 20+ accountant hours weekly reconciling bank statements against billing software with frequent calculation discrepancies.",
      solution:
        "Automated financial reconciliation engine that connects banking APIs, parses invoices with OCR, and generates automated P&L statements with 100% tax compliance.",
      metrics: [
        { label: "Hours Saved / Wk", value: "22 hrs" },
        { label: "Reconciliation Error", value: "0.00%" },
        { label: "Sync Speed", value: "<150ms" },
      ],
      techStack: ["TypeScript", "Python Data Engine", "Tailwind CSS", "AWS Lambda", "Stripe / Banking APIs"],
      demoUrl: "#contact",
      demoLabel: "View Case Study",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="systems" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 02 / PRODUCTION DISPATCHES ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            PROVEN ARCHITECTURES · DEPLOYED IN PRODUCTION
          </span>
        </div>

        {/* Header & Filter Row */}
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
              Real systems. Running in production.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#11100e]/70">
              No fictitious mockups or generic templates. These are production-grade 
              architectures designed to solve real operational bottlenecks.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { id: "all", label: "All Systems" },
              { id: "erp", label: "ERP & Portals" },
              { id: "ai", label: "AI & Chatbots" },
              { id: "saas", label: "SaaS & Cloud" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#11100e] text-[#f4f1ea] font-semibold"
                    : "border border-[#11100e]/15 bg-white/70 text-[#11100e]/70 hover:border-[#11100e]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-2">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between rounded-2xl border border-[#11100e]/15 bg-white p-5 sm:p-8 transition-all duration-300 hover:border-[#11100e]/50 hover:shadow-lg"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between border-b border-[#11100e]/10 pb-3 sm:pb-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#fe1e10]">
                    {proj.index} // {proj.title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {proj.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-[#11100e]">
                  {proj.subtitle}
                </h3>

                {/* The Problem */}
                <div className="mt-4 sm:mt-5 border-l-2 border-[#fe1e10]/50 pl-3">
                  <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#11100e]/50">
                    The Operational Bottleneck
                  </div>
                  <p className="mt-1 text-xs text-[#11100e]/75 leading-relaxed">
                    {proj.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mt-3.5 sm:mt-4 border-l-2 border-[#11100e]/40 pl-3">
                  <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#11100e]/50">
                    The Architecture
                  </div>
                  <p className="mt-1 text-xs text-[#11100e]/85 leading-relaxed">
                    {proj.solution}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-1.5 sm:gap-2 rounded-xl border border-[#11100e]/10 bg-[#faf8f4] p-2.5 sm:p-3 text-center">
                  {proj.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-display text-base sm:text-lg font-bold text-[#11100e]">
                        {m.value}
                      </div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-[#11100e]/60">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-1 sm:gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-[#11100e]/10 bg-[#11100e]/[0.03] px-2 py-0.5 font-mono text-[10px] sm:text-[10.5px] text-[#11100e]/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 sm:mt-8 border-t border-[#11100e]/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#11100e]/60">
                  Custom deployment available
                </span>
                <a
                  href={proj.demoUrl}
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#11100e] transition-colors hover:text-[#fe1e10]"
                >
                  <span>{proj.demoLabel}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
