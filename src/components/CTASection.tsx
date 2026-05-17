import { Calendar, Mail, CheckCircle } from 'lucide-react';

interface CTASectionProps {
  onWaitlist: () => void;
  onDemo: () => void;
}

export default function CTASection({ onWaitlist, onDemo }: CTASectionProps) {
  return (
    <section id="cta" className="bg-brand-400 py-24 lg:py-32 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
          Eerder inzicht.
          <br />
          Mentaal fitte medewerkers.
          <br />
          Sterkere organisaties.
        </h2>

        <p className="text-brand-100 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Sluit je aan bij werkgevers die preventief investeren in het mentale welzijn van hun teams en organisatie.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-14">
          <button
            onClick={onWaitlist}
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-brand-500 font-bold px-8 py-4 rounded-xl text-base transition-all duration-150 shadow-xl shadow-brand-600/20"
          >
            <Mail className="w-4 h-4" />
            Ik ben benieuwd naar meer
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { value: 'Snel, laagdrempelig en effectief starten', label: 'zonder zwaar implementatietraject' },
              { value: 'Privacyveilig ingericht', label: 'geen individuele gegevens zichtbaar voor werkgevers' },
            ].map((item) => (
              <div key={item.value} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-white/80" strokeWidth={1.75} />
                  <span className="text-white font-bold text-base sm:text-lg">{item.value}</span>
                </div>
                <p className="text-brand-100 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center max-w-sm">
              <div className="flex items-center justify-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-white/80" strokeWidth={1.75} />
                <span className="text-white font-bold text-base sm:text-lg">Voor MKB én grotere organisaties</span>
              </div>
              <p className="text-brand-100 text-sm">praktisch inzetbaar en schaalbaar per team of afdeling</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onDemo}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Laten zien hoe het werkt
          </button>
        </div>
      </div>
    </section>
  );
}
