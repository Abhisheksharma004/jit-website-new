"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      num: "01.",
      q: "Who actually builds my software project?",
      a: "Senior full-stack software engineers at Jyoti Info Tech led by our principal architect. Unlike traditional agencies that pitch with senior executives and delegate code to junior interns, you work directly with the senior developers writing, testing, and deploying your code start to finish.",
    },
    {
      num: "02.",
      q: "How do payments and milestones work?",
      a: "Every project operates under a crystal-clear plain-English agreement with a fixed price in writing. Standard billing is 50% upfront deposit to commence architecture sprints and 50% upon final delivery, testing, and client sign-off. We accept direct bank transfer (NEFT/RTGS/UPI), Razorpay, and PayPal / Wire for international clients.",
    },
    {
      num: "03.",
      q: "How long does development take from start to finish?",
      a: "High-Performance Website + AI Chatbot: 7–10 days. Custom Client / Admin Portal & ERP: 14–21 days depending on module count. Enterprise Cloud Suites & MVPs: 3–6 weeks in structured weekly milestone releases with continuous staging access.",
    },
    {
      num: "04.",
      q: "Who owns the intellectual property and source code?",
      a: "You do. 100%. Upon final milestone completion, all repository code, database configurations, and deployment scripts are transferred directly to your organization's GitHub / GitLab and AWS/GCP accounts. There are zero licensing lock-ins or proprietary vendor traps.",
    },
    {
      num: "05.",
      q: "What happens after the software is launched?",
      a: "Every project includes a comprehensive 30–60 day post-launch warranty window covering bug fixes, performance tuning, and technical guidance. After this period, we provide optional monthly maintenance and cloud infrastructure care plans so you never worry about servers or updates.",
    },
    {
      num: "06.",
      q: "Can you integrate with our existing accounting, WhatsApp, or CRM tools?",
      a: "Yes. We frequently build automated bi-directional integrations with Razorpay, Stripe, WhatsApp Cloud API, Tally, Zoho, Google Sheets, SMS gateways, and custom REST/GraphQL APIs to ensure your new software communicates seamlessly with your existing tech ecosystem.",
    },
  ];

  return (
    <section id="faq" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#f4f1ea]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 07 / CLARIFICATIONS &amp; DETAILS ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        <div className="mt-8 text-left">
          <h2 className="font-display text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Asked before every project.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#11100e]/70">
            Everything you need to know about our engineering approach, pricing guarantees, and timelines.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 sm:mt-14 divide-y divide-[#11100e]/15 border-t border-b border-[#11100e]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between text-left text-base sm:text-lg font-medium text-[#11100e] transition-colors hover:text-[#fe1e10]"
                >
                  <span className="flex items-baseline gap-2.5 sm:gap-3 pr-4 sm:pr-6">
                    <span className="font-mono text-xs font-semibold text-[#fe1e10]">
                      {faq.num}
                    </span>
                    <span className="font-display font-semibold text-base sm:text-xl leading-snug">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full border border-[#11100e]/20 text-xs font-mono transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#fe1e10] text-white border-[#fe1e10]" : "bg-white"
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3.5 pl-0 sm:pl-7 pr-2 sm:pr-8 text-xs sm:text-sm leading-relaxed text-[#11100e]/75 animate-in fade-in duration-200 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
