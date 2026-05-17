import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onWaitlist: () => void;
}

export default function Hero({ onWaitlist }: HeroProps) {
  return (
    <section className="pt-4 sm:pt-8 lg:pt-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center py-6 sm:py-12 lg:py-20">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-10 sm:mb-7">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
              Binnenkort beschikbaar voor organisaties
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4">
              Preventie begint vóór de ziekmelding.
              <br />
              <span className="text-brand-400">Daar werken we aan.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Releafe versterkt mentaal welzijn met een laagdrempelige app voor medewerkers. Organisaties krijgen anoniem inzicht in mentale belasting en kunnen eerder sturen op duurzame inzetbaarheid, verzuim en productiviteitsverlies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={onWaitlist}
                className="group inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-4 rounded-xl text-xs sm:text-base transition-all duration-150 shadow-lg shadow-brand-400/20"
              >
                Kom op de wachtlijst
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right: visual */}
          <div className="flex flex-col items-center lg:justify-center gap-4">
            <img
              src="/Releafe-toolkit.webp"
              alt="Releafe toolkit"
              className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-3xl shadow-2xl animate-drop-bounce max-w-full mix-blend-multiply"
            />
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <ArrowRight className="w-4 h-4 rotate-90 text-brand-400" />
              <span className="font-medium">Releafe helpt om signalen eerder zichtbaar te maken</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
