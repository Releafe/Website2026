import { Users, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onShowFounders: () => void;
}

export default function TeamSection({ onShowFounders }: TeamSectionProps) {
  return (
    <section id="team" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ontmoet ons team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Jan en Nynke gaan met Releafe voor een toekomst waarin mentaal welzijn voor mensen en organisaties toegankelijk is
          </p>
        </div>

        {/* Team Preview */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl border border-slate-200 p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Jan */}
            <div className="flex flex-col items-center text-center animate-drop-bounce">
              <div className="w-full mb-6">
                <img
                  src="/e3a6b3029957d8fb284905d79cafa0317eb3648c-1600x1066.webp"
                  alt="Jan Grobbe"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Jan Grobbe
              </h3>
              <p className="text-brand-400 font-semibold mb-4">
                Oprichter van Releafe
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Jan weet uit eigen ervaring hoe ingrijpend mentale klachten kunnen zijn. Met zijn bedrijfskundige achtergrond bouwt hij aan oplossingen die menselijk zijn en organisaties helpt om preventie concreet te maken.
              </p>
            </div>

            {/* Nynke */}
            <div className="flex flex-col items-center text-center animate-drop-bounce" style={{ animationDelay: '0.15s' }}>
              <div className="w-full mb-6">
                <img
                  src="/487324bb79ef4f3080cd56b33bf85ce30855271e-512x492.webp"
                  alt="Nynke Dijk"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Nynke Dijk
              </h3>
              <p className="text-brand-400 font-semibold mb-4">
                Medeoprichter van Releafe
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Nynke richt zich op implementatie, gebruikerservaring en de verbinding met organisaties. Met haar betrokkenheid en praktische blik zorgt zij ervoor dat Releafe nauw aansluit bij de mensen die ermee werken.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={onShowFounders}
              className="group inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 shadow-lg shadow-brand-400/20 hover:shadow-brand-400/40"
            >
              <Users className="w-4 h-4" />
              Meer over ons team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
