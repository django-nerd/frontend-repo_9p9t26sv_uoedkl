import { Menu, MapPin, Compass, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-900 font-black">EC</div>
            <span className="text-white font-semibold tracking-tight">Escape City</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="text-slate-300 hover:text-white transition">How it works</a>
            <a href="#cities" className="text-slate-300 hover:text-white transition inline-flex items-center gap-1"><MapPin className="h-4 w-4"/>Cities</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
            <a href="#book" className="px-4 py-2 rounded-md bg-emerald-400 text-slate-900 font-medium hover:bg-emerald-300 transition">Book now</a>
          </nav>
          <button className="md:hidden text-white/90" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
