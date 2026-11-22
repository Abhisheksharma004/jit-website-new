"use client";

import { useState } from "react";

export default function SolutionCalculator() {
  const [industry, setIndustry] = useState<string>("clinic");
  const [scope, setScope] = useState<string>("portal_bot");

  const recommendations: Record<
    string,
    Record<
      string,
      {
        timeline: string;
        priceRange: string;
        architecture: string[];
        keyBenefits: string[];
      }
    >
  > = {
    clinic: {
      website_bot: {
        timeline: "7–10 days",
        priceRange: "₹34,999 – ₹49,999",
        architecture: ["Next.js 16 Web Portal", "OpenAI Patient Triage Bot", "WhatsApp Alert API", "Cloud Database"],
        keyBenefits: ["Automated 24/7 bookings", "Zero front-desk overload", "Instant WhatsApp reminders"],
      },
      portal_bot: {
        timeline: "14–21 days",
        priceRange: "₹89,999 – ₹1,39,999",
        architecture: ["Role-Based Clinic ERP", "Electronic Health Records (EHR)", "WhatsApp Bot + Doctor Schedule", "PostgreSQL Cloud"],
        keyBenefits: ["Paperless prescriptions", "Automated billing receipts", "Reduced no-show rate by 40%"],
      },
      custom_enterprise: {
        timeline: "3–5 weeks",
        priceRange: "₹2,10,000+",
        architecture: ["Multi-Branch Hospital ERP", "Laboratory Sync API", "Pharmacy Inventory", "Custom Microservices"],
        keyBenefits: ["Cross-branch patient lookup", "Regulatory data compliance", "High concurrency reliability"],
      },
    },
    education: {
      website_bot: {
        timeline: "7–10 days",
        priceRange: "₹34,999 – ₹49,999",
        architecture: ["Institutional Showcase Site", "Admission AI Counseling Bot", "Lead Capture CRM", "SEO Suite"],
        keyBenefits: ["Captures 3x more admission inquiries", "Answers fee & course FAQs instantly", "Instant admission rep alerts"],
      },
      portal_bot: {
        timeline: "14–21 days",
        priceRange: "₹99,999 – ₹1,59,999",
        architecture: ["Student & Staff Portal", "Fee Register with Payment Gateway", "Attendance Tracking", "WhatsApp Notification API"],
        keyBenefits: ["Zero manual register reconciliation", "Automated fee reminder alerts", "Instant parent report cards"],
      },
      custom_enterprise: {
        timeline: "4–6 weeks",
        priceRange: "₹2,49,999+",
        architecture: ["Campus360 Full ERP Suite", "Online Examination Engine", "Biometric Hardware Sync", "AWS Cloud Cluster"],
        keyBenefits: ["Supports 10,000+ students", "Role-based hierarchical access", "Zero downtime during fee rushes"],
      },
    },
    logistics: {
      website_bot: {
        timeline: "8–12 days",
        priceRange: "₹39,999 – ₹55,000",
        architecture: ["Corporate Freight Portal", "Consignment Rate Estimator Bot", "Lead Intake CRM"],
        keyBenefits: ["Instant freight rate quotes", "24/7 shipper inquiry intake", "Branded modern identity"],
      },
      portal_bot: {
        timeline: "14–21 days",
        priceRange: "₹1,19,999 – ₹1,89,999",
        architecture: ["Dispatch Management Console", "Driver Mobile Web App", "Proof-of-Delivery Sync", "GST e-Way Bill Generator"],
        keyBenefits: ["Real-time trip tracking", "Automated customer SMS milestones", "Eliminates dispatch phone calls"],
      },
      custom_enterprise: {
        timeline: "4–6 weeks",
        priceRange: "₹2,80,000+",
        architecture: ["Full Supply Chain ERP", "Multi-Warehouse Inventory", "IoT Tracker Integration", "Microservices on Docker"],
        keyBenefits: ["Automated route optimization", "Predictive stock replenishment", "Enterprise multi-tenant security"],
      },
    },
    retail: {
      website_bot: {
        timeline: "7–10 days",
        priceRange: "₹34,999 – ₹52,000",
        architecture: ["Modern Catalog Web App", "WhatsApp Commerce Bot", "Inquiry Capture Sheet"],
        keyBenefits: ["Sell and take orders over WhatsApp", "Never miss evening customer inquiries", "Lightning fast mobile UI"],
      },
      portal_bot: {
        timeline: "14–21 days",
        priceRange: "₹89,999 – ₹1,49,999",
        architecture: ["Inventory & Billing Portal", "Barcode Scanner Support", "Supplier Purchase Orders", "Razorpay Integration"],
        keyBenefits: ["Automated low-stock alerts", "Unified billing at point of sale", "Daily profit analytics"],
      },
      custom_enterprise: {
        timeline: "3–5 weeks",
        priceRange: "₹2,40,000+",
        architecture: ["Omnichannel Multi-Store ERP", "Centralized Warehouse Sync", "Automated Accounting Engine"],
        keyBenefits: ["Syncs 50,000+ SKUs across branches", "Real-time GST filing reports", "High-traffic sale stability"],
      },
    },
  };

  const current =
    recommendations[industry]?.[scope] || recommendations["clinic"]["portal_bot"];

  return (
    <section id="calculator" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 03 / ARCHITECTURE ESTIMATOR ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            RAPID PROJECT SIZING · TRANSPARENT SPECIFICATIONS
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-courgette text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Estimate your software architecture &amp; scope.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#11100e]/70">
            Select your industry and project scope to see recommended technology choices, 
            realistic delivery timelines, and transparent pricing benchmarks.
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="mt-12 sm:mt-14 grid gap-8 lg:grid-cols-12">
          {/* Controls */}
          <div className="space-y-6 lg:col-span-5 w-full">
            {/* Step 1: Industry */}
            <div className="rounded-2xl border border-[#11100e]/15 bg-white p-4.5 sm:p-6">
              <label className="block font-mono text-xs uppercase tracking-wider text-[#11100e]/60 mb-3 font-semibold">
                01. Select Your Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: "clinic",
                    label: "Healthcare & Clinic",
                    renderIcon: () => (
                      <svg className="h-4 w-4 shrink-0 text-[#fe1e10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    ),
                  },
                  {
                    id: "education",
                    label: "Schools & Institutes",
                    renderIcon: () => (
                      <svg className="h-4 w-4 shrink-0 text-[#fe1e10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ),
                  },
                  {
                    id: "logistics",
                    label: "Fleet & Logistics",
                    renderIcon: () => (
                      <svg className="h-4 w-4 shrink-0 text-[#fe1e10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
                      </svg>
                    ),
                  },
                  {
                    id: "retail",
                    label: "Retail & E-Commerce",
                    renderIcon: () => (
                      <svg className="h-4 w-4 shrink-0 text-[#fe1e10]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndustry(item.id)}
                    className={`flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all ${
                      industry === item.id
                        ? "border-[#fe1e10] bg-[#fe1e10]/5 text-[#11100e] font-semibold ring-1 ring-[#fe1e10]"
                        : "border-[#11100e]/10 hover:border-[#11100e]/30 text-[#11100e]/80 bg-[#faf8f4]"
                    }`}
                  >
                    {item.renderIcon()}
                    <span className="text-xs font-sans">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope */}
            <div className="rounded-2xl border border-[#11100e]/15 bg-white p-4.5 sm:p-6">
              <label className="block font-mono text-xs uppercase tracking-wider text-[#11100e]/60 mb-3 font-semibold">
                02. Select System Complexity
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: "website_bot",
                    label: "Web Platform + AI Chatbot",
                    sub: "Client-facing site, knowledge-trained bot & lead capture",
                  },
                  {
                    id: "portal_bot",
                    label: "Custom Client / Admin ERP Portal",
                    sub: "Role-based dashboards, automated invoicing & workflows",
                  },
                  {
                    id: "custom_enterprise",
                    label: "Full Enterprise Cloud Suite",
                    sub: "Multi-branch microservices, custom APIs & SLA guarantee",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setScope(item.id)}
                    className={`w-full rounded-xl border p-3.5 text-left transition-all ${
                      scope === item.id
                        ? "border-[#fe1e10] bg-[#fe1e10]/5 text-[#11100e] ring-1 ring-[#fe1e10]"
                        : "border-[#11100e]/10 hover:border-[#11100e]/30 text-[#11100e]/80 bg-[#faf8f4]"
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#11100e] font-sans">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-[#11100e]/60 font-sans">
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display Card (Clean Light Paper Card - Black Background Removed) */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl border border-[#11100e]/15 bg-white p-5 sm:p-8 lg:p-9 text-[#11100e] shadow-xl shadow-[#11100e]/5 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between border-b border-[#11100e]/10 pb-4 gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#fe1e10] font-semibold">
                  // Engineering Specification Blueprint
                </span>
                <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-emerald-800">
                  Fixed Price &amp; Scope
                </span>
              </div>

              {/* Cost & Timeline */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[#11100e]/10 pb-6">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#11100e]/50 font-semibold">
                    Estimated Delivery
                  </div>
                  <div className="mt-1 font-bubbles text-2xl font-bold text-[#11100e] sm:text-3xl">
                    {current.timeline}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-[#11100e]/60">
                    Staged milestone delivery
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#11100e]/50 font-semibold">
                    Estimated Fixed Cost
                  </div>
                  <div className="mt-1 font-bubbles text-2xl font-bold text-[#fe1e10] sm:text-3xl">
                    {current.priceRange}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-[#11100e]/60">
                    50% deposit / 50% on milestone delivery
                  </div>
                </div>
              </div>

              {/* Recommended Architecture */}
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-[#11100e]/50 mb-3 font-semibold">
                  Recommended Technology Choices
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.architecture.map((arch, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-2 rounded-lg border border-[#11100e]/12 bg-[#faf8f4] px-3 py-2 text-xs text-[#11100e]/90 font-mono"
                    >
                      <span className="text-[#fe1e10]">●</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Operational Outcomes */}
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-[#11100e]/50 mb-3 font-semibold">
                  Key Operational Outcomes
                </div>
                <ul className="space-y-2">
                  {current.keyBenefits.map((ben, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs text-[#11100e]/85 font-sans">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 border-t border-[#11100e]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#11100e]/60 text-center sm:text-left">
                  Ready to translate this into a formal technical proposal?
                </span>
                <a
                  href="#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#fe1e10] px-6 py-3 font-bubbles text-xs font-semibold text-white transition-opacity hover:opacity-90 hover:shadow-lg hover:shadow-[#fe1e10]/25 text-center"
                >
                  <span>Book Free Consultation</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
