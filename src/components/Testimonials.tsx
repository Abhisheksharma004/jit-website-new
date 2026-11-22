export default function Testimonials() {
  const reviews = [
    {
      index: "DISPATCH 01",
      quote:
        "Jyoti Info Tech built our clinic's patient portal with WhatsApp appointment booking in just 12 days. Our after-hours patient inquiries now automatically convert into confirmed bookings. Front desk call overload dropped by 45%.",
      author: "Dr. Ananya Sharma",
      role: "Medical Director, Pulse Healthcare & Diagnostics",
      location: "Ahmedabad, Gujarat",
      metric: "+62% After-Hours Bookings",
      initials: "AS",
      verified: true,
    },
    {
      index: "DISPATCH 02",
      quote:
        "Replacing our chaotic mix of WhatsApp groups and Excel registers with JIT Campus360 was the best operational decision we made. 2,500 students, fee collection with instant Razorpay receipts, zero errors.",
      author: "Principal Vikram Singhania",
      role: "Director of Administration, Modern Academy",
      location: "Jaipur, Rajasthan",
      metric: "98.4% On-Time Fee Collection",
      initials: "VS",
      verified: true,
    },
    {
      index: "DISPATCH 03",
      quote:
        "What separates Jyoti Info Tech from other agencies is that you talk directly to the senior software engineer writing your code. No account managers delaying questions. Clean code, fixed quote in writing, delivered ahead of schedule.",
      author: "Rajesh Mehta",
      role: "Operations Head, Apex Express Logistics",
      location: "Mumbai, Maharashtra",
      metric: "22 Hours Saved / Week",
      initials: "RM",
      verified: true,
    },
  ];

  return (
    <section id="testimonials" className="border-t border-[#11100e]/12 py-16 sm:py-24 bg-[#faf8f4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between border-b border-[#11100e]/12 pb-6 gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#fe1e10]">
            [ 06 / CLIENT DISPATCHES ]
          </span>
          <span className="font-mono text-xs text-[#11100e]/50">
            VERIFIED OUTCOMES · PRODUCTION TESTED
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-3xl font-normal tracking-tight text-[#11100e] sm:text-5xl">
            Trusted by founders, doctors &amp; institute leaders.
          </h2>
          <p className="mt-4 text-base text-[#11100e]/70">
            Real feedback from organizations that replaced manual spreadsheets and generic templates 
            with Jyoti Info Tech custom software systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#11100e]/15 bg-white p-8 transition-all duration-300 hover:border-[#11100e] hover:shadow-lg"
            >
              <div>
                {/* Index & Metric Badge */}
                <div className="flex items-center justify-between border-b border-[#11100e]/10 pb-4">
                  <span className="font-mono text-[11px] font-bold text-[#11100e]/60">
                    {rev.index}
                  </span>
                  <span className="rounded-full bg-[#fe1e10]/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#fe1e10]">
                    {rev.metric}
                  </span>
                </div>

                {/* Stars */}
                <div className="mt-5 flex gap-1 text-[#fe1e10]">
                  {[...Array(5)].map((_, sIdx) => (
                    <svg key={sIdx} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 font-display text-base leading-relaxed text-[#11100e]">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-3.5 border-t border-[#11100e]/10 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#11100e] font-mono text-xs font-bold text-[#f4f1ea]">
                  {rev.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-xs text-[#11100e]">
                    <span>{rev.author}</span>
                    <span className="text-emerald-600 text-xs" title="Verified Client">✓</span>
                  </div>
                  <div className="text-[11px] text-[#11100e]/60">
                    {rev.role}
                  </div>
                  <div className="font-mono text-[10px] text-[#11100e]/40">
                    {rev.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
