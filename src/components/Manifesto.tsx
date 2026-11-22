export default function Manifesto() {
  const tenets = [
    {
      num: "01.",
      title: "Senior-Only Craftsmanship",
      desc: "We reject the agency model of pitching with veteran partners and delegating code to junior interns. Every architecture, database schema, and line of code is written by senior developers with production track records.",
    },
    {
      num: "02.",
      title: "Fixed Scope & Pricing, in Writing",
      desc: "Hourly billing creates perverse incentives to work slowly. We specify every milestone, deliverable, and integration in plain English with a guaranteed fixed quote before you pay a single rupee beyond the initial deposit.",
    },
    {
      num: "03.",
      title: "Zero Proprietary Lock-In",
      desc: "Upon final launch, 100% of the repository code, database configurations, and cloud deployment pipelines are transferred directly to your organization. You retain full intellectual property ownership forever.",
    },
  ];

  return (
    <section className="border-t border-[#11100e]/12 py-16 sm:py-20 bg-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ Studio Manifesto ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            ENGINEERING PRINCIPLES · EST. 2026
          </span>
        </div>

        {/* Big Editorial Manifesto Statement in Courgette & Petit Formal Script */}
        <div className="mt-8 sm:mt-12 max-w-4xl">
          <p className="font-courgette text-xl sm:text-3xl lg:text-4xl sm:leading-[1.35] text-[#11100e] font-normal">
            &ldquo;We believe modern businesses deserve software built with the rigor of civil engineering:{" "}
            <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#fe1e10] inline-block px-1">
              zero scope ambiguity
            </span>, rock-solid 99.8% uptime, and direct communication with the craftsman writing the code.&rdquo;
          </p>
        </div>

        {/* 3 Core Tenets Grid in Fuzzy Bubbles */}
        <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-3 border-t border-[#11100e]/12 pt-10 sm:pt-12">
          {tenets.map((t, idx) => (
            <div key={idx} className="space-y-2.5 sm:space-y-3">
              <div className="font-bubbles text-2xl font-bold text-[#fe1e10]">
                {t.num}
              </div>
              <h3 className="font-courgette text-xl sm:text-2xl font-bold text-[#11100e]">
                {t.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#11100e]/70 font-sans">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
