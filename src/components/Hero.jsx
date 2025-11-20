import { Compass, MapPin, Clock, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/10 blur-3xl"/>
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl"/>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Norway's first GPS‑based outdoor escape game
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-prose">
            Explore the city, solve cryptic clues, and race against time. Escape City blends escape room puzzles with an urban treasure hunt you play right on your phone.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#book" className="px-6 py-3 rounded-md bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300 transition">
              Book your mission
            </a>
            <a href="#how" className="px-6 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 transition">
              How it works
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
            <div className="flex items-center gap-2"><Compass className="h-5 w-5 text-emerald-400"/>Story‑driven</div>
            <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400"/>GPS clues</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-emerald-400"/>90–120 mins</div>
            <div className="flex items-center gap-2"><Users className="h-5 w-5 text-emerald-400"/>2–6 players</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-cyan-400/10 blur-2xl rounded-3xl"/>
          <div className="relative rounded-2xl border border-white/10 bg-slate-800/50 p-4">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop" alt="City streets at dusk" className="rounded-lg object-cover aspect-video"/>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="p-3 rounded-md bg-slate-900/40 border border-white/10">Solve puzzles outdoors</div>
              <div className="p-3 rounded-md bg-slate-900/40 border border-white/10">Unlock locations via GPS</div>
              <div className="p-3 rounded-md bg-slate-900/40 border border-white/10">Compete on leaderboards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
