import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Cities from './components/Cities'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent)] pointer-events-none" />

      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Cities />
        <FAQ />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Escape City • Outdoor GPS escape game in Norway</p>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#cities" className="hover:text-white transition">Cities</a>
            <a href="#book" className="hover:text-white transition">Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
