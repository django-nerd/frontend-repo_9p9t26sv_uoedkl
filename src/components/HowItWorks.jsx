import { Smartphone, MapPin, KeyRound, Share2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: "Start on your phone",
      text: "Choose a city and mission. You'll receive a link that turns your phone into a game controller.",
    },
    {
      icon: MapPin,
      title: "Navigate with GPS",
      text: "Head to the marked locations. Clues unlock automatically when you arrive.",
    },
    {
      icon: KeyRound,
      title: "Solve cinematic puzzles",
      text: "Crack codes, decipher ciphers, and uncover the story woven into the city streets.",
    },
    {
      icon: Share2,
      title: "Team up and compete",
      text: "Play together in one team or race your friends. See live progress and rankings.",
    },
  ];

  return (
    <section id="how" className="py-20 border-t border-white/10 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How it works</h2>
        <p className="mt-4 text-slate-300 max-w-2xl">A modern escape room without the room. Everything happens outdoors, guided by your phone.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/10 bg-slate-800/40">
              <s.icon className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
