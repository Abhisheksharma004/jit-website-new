export default function Comparison() {
  const comparisons = [
    {
      feature: "Communication Channel",
      traditional: "Account managers, non-technical liaisons, slow email threads",
      jyoti: "Direct WhatsApp/Slack channel with lead software architect writing your code",
    },
    {
      feature: "Pricing Model",
      traditional: "Vague hourly estimates, scope creep padding, surprise monthly invoices",
      jyoti: "100% fixed price in writing before kick-off. 50% on milestone sign-off",
    },
    {
      feature: "Engineering Talent",
      traditional: "Pitched by senior executives, handed off to junior interns",
      jyoti: "Engineered exclusively by senior full-stack developers with production track records",
    },
    {
      feature: "Turnaround Speed",
      traditional: "Months of bureaucracy, change-order approvals, endless meetings",
      jyoti: "Working staging environment live in 7–14 days. Rapid weekly iterations",
    },
    {
      feature: "Code & IP Ownership",
      traditional: "Proprietary lock-in, recurring licensing fees, restricted repository access",
      jyoti: "100% source code ownership. Zero vendor lock-in. Deployed to your cloud",
    },
    {
      feature: "Post-Launch Support",
      traditional: "Abandoned after final payment or forced into expensive retainer traps",
      jyoti: "Guaranteed SLA support window + included warranty + accessible direct contact",
    },
  ];

  return (
    <section className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#f4f1ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 05 / COMPARATIVE ANALYSIS ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            THE JIT ADVANTAGE · ZERO AGENCY FLUFF
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Why growing companies choose Jyoti Info Tech.
          </h2>
          <p className="mt-4 text-base text-[#11100e]/70">
            See how our senior-led engineering studio compares against conventional IT agencies.
          </p>
        </div>

        {/* Desktop / Tablet Comparison Table (Hidden on small mobile) */}
        <div className="mt-14 hidden sm:block overflow-hidden rounded-2xl border border-[#11100e]/15 bg-white shadow-xs">
          <div className="grid grid-cols-12 border-b border-[#11100e]/15 bg-[#11100e] p-4 text-xs font-mono uppercase tracking-wider text-[#f4f1ea]">
            <div className="col-span-4 md:col-span-3">Operational Factor</div>
            <div className="col-span-4 md:col-span-4 text-[#f4f1ea]/60">Traditional IT Agency</div>
            <div className="col-span-4 md:col-span-5 text-[#fe1e10] font-bold">Jyoti Info Tech</div>
          </div>

          <div className="divide-y divide-[#11100e]/10">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 items-center p-4.5 text-xs transition-colors hover:bg-[#faf8f4]"
              >
                <div className="col-span-4 md:col-span-3 font-semibold text-[#11100e]">
                  {item.feature}
                </div>
                <div className="col-span-4 md:col-span-4 pr-3 text-[#11100e]/60 flex items-start gap-1.5">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span>{item.traditional}</span>
                </div>
                <div className="col-span-4 md:col-span-5 font-medium text-[#11100e] flex items-start gap-1.5">
                  <span className="text-[#fe1e10] font-bold shrink-0">✓</span>
                  <span>{item.jyoti}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-Optimized Comparison Cards (Visible on screens < 640px) */}
        <div className="mt-10 space-y-4 sm:hidden">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#11100e]/15 bg-white p-5 shadow-xs space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-[#11100e]/10 pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#fe1e10] font-bold">
                  Factor 0{idx + 1}
                </span>
                <span className="font-semibold text-xs text-[#11100e]">
                  {item.feature}
                </span>
              </div>

              {/* Traditional Agency row */}
              <div className="rounded-lg border border-red-200/60 bg-red-50/40 p-3 text-xs">
                <div className="flex items-center gap-1 font-mono text-[10px] uppercase text-red-600 font-semibold mb-1">
                  <span>✕</span>
                  <span>Traditional IT Agency</span>
                </div>
                <p className="text-[#11100e]/70 leading-relaxed font-sans">
                  {item.traditional}
                </p>
              </div>

              {/* Jyoti Info Tech row */}
              <div className="rounded-lg border border-[#fe1e10]/30 bg-[#fe1e10]/[0.04] p-3 text-xs">
                <div className="flex items-center gap-1 font-mono text-[10px] uppercase text-[#fe1e10] font-bold mb-1">
                  <span>✓</span>
                  <span>Jyoti Info Tech</span>
                </div>
                <p className="text-[#11100e] font-medium leading-relaxed font-sans">
                  {item.jyoti}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
