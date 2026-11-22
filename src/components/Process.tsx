export default function Process() {
  const steps = [
    {
      number: "01",
      phase: "Audit & Architecture Scope",
      headline: "A fixed price, in writing.",
      description:
        "Every project begins with a free technical assessment of your current workflow or legacy codebase: what is causing operational bottlenecks, what architecture we will build first, and a fixed price in writing. No hourly billing, no surprise invoices.",
      deliverable: "Technical Scope Document + Fixed Quote",
    },
    {
      number: "02",
      phase: "Direct Sprint Development",
      headline: "Built by the engineer you talked to.",
      description:
        "A plain-English agreement with 50% upfront via secure payment gateway. You are placed in a direct Slack or WhatsApp channel with the lead software architect. Weekly staging releases let you test real working code every 7 days.",
      deliverable: "Private Staging URL + Weekly Live Demos",
    },
    {
      number: "03",
      phase: "Stress Testing & Security Audit",
      headline: "Zero vulnerabilities. Zero data loss.",
      description:
        "Before any deployment, we run rigorous unit tests, role-based security checks, SQL injection prevention, mobile responsiveness audits, and simulated traffic load tests to ensure flawless stability under peak demand.",
      deliverable: "Security Audit Report & Verification",
    },
    {
      number: "04",
      phase: "Production Launch & Handover",
      headline: "Handover, not a handoff.",
      description:
        "We deploy to your AWS, GCP, or cloud account with automated backups and SSL. You receive 100% full source code ownership, clean database schemas, and recorded video walkthroughs for your team. Then we remain on-call with a guaranteed SLA.",
      deliverable: "Full Source Code + 60-Day Support SLA",
    },
  ];

  return (
    <section id="process" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 04 / DELIVERY METHODOLOGY ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            DISCIPLINED SPRINTS · ZERO SCOPE CREEP
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Audit → architecture → build → launch.
            <br />
            <span className="italic font-normal">Then we stay reachable.</span>
          </h2>
          <p className="mt-4 text-base text-[#11100e]/70">
            A battle-tested software delivery model engineered to eliminate scope creep, 
            communication breakdowns, and project delays.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#11100e]/15 bg-white p-7 transition-all duration-300 hover:border-[#11100e] hover:shadow-lg"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between border-b border-[#11100e]/10 pb-4">
                  <span className="font-mono text-2xl font-bold text-[#fe1e10]">
                    {step.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#11100e]/50">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-[#11100e]">
                  {step.headline}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#11100e]/75">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#11100e]/10 pt-4">
                <div className="font-mono text-[10px] uppercase text-[#11100e]/45">
                  Guaranteed Deliverable
                </div>
                <div className="mt-0.5 text-xs font-semibold text-[#11100e]">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
