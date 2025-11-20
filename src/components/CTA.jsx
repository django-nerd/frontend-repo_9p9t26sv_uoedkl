export default function CTA() {
  return (
    <section id="book" className="py-20 border-t border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-900/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to escape the ordinary?</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Gather your team and pick a time. You’ll receive an instant link to start your outdoor escape mission.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="px-6 py-3 rounded-md bg-emerald-400 text-slate-900 font-semibold hover:bg-emerald-300 transition">Book now</a>
            <a href="#faq" className="px-6 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 transition">Read FAQ</a>
          </div>
          <p className="mt-4 text-xs text-slate-400">Gift vouchers available • Perfect for team building • No app download required</p>
        </div>
      </div>
    </section>
  );
}
