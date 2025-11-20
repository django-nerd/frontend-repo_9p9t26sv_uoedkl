export default function FAQ() {
  const faqs = [
    {
      q: "What is Escape City?",
      a: "A story‑driven outdoor escape game that uses your smartphone and GPS to guide you through puzzles around the city.",
    },
    {
      q: "Do we need to download an app?",
      a: "No. Everything runs in the browser via a link you receive after booking.",
    },
    {
      q: "How many players?",
      a: "Best with 2–6 players per team. Larger groups can split into multiple teams and race.",
    },
    {
      q: "Is it family friendly?",
      a: "Yes. Recommended age 12+ with adults. Difficulty varies by mission.",
    },
    {
      q: "How long does it take?",
      a: "Most missions take 90–120 minutes depending on your pace.",
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <details key={i} className="p-6 rounded-xl border border-white/10 bg-slate-800/40 group">
              <summary className="list-none cursor-pointer text-white font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-emerald-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-slate-300 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
