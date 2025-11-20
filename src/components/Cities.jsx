import { MapPin } from "lucide-react";

export default function Cities() {
  const cities = [
    { name: "Oslo", desc: "Historic center, waterfront puzzles, barcode district", soon: false },
    { name: "Bergen", desc: "Bryggen secrets and rain‑soaked riddles", soon: true },
    { name: "Trondheim", desc: "Nidaros Cathedral codes and river trails", soon: true },
  ];

  return (
    <section id="cities" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Available cities</h2>
            <p className="mt-3 text-slate-300">We’re launching in Oslo first, then rolling out across Norway.</p>
          </div>
          <MapPin className="h-8 w-8 text-emerald-400 hidden sm:block"/>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c) => (
            <div key={c.name} className="p-6 rounded-xl border border-white/10 bg-slate-800/40">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{c.name}</h3>
                {c.soon && <span className="text-xs px-2 py-1 rounded bg-white/10 text-white">Coming soon</span>}
              </div>
              <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
