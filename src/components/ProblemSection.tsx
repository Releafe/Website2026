import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProblemSectionProps {
  onWaitlist?: () => void;
}

const stats = [
  {
    number: '1 op de 5',
    label: 'werknemers',
    description: 'ervaart burn-out/mentale klachten.',
    color: 'from-blue-50 to-blue-100',
    numberColor: 'text-blue-600'
  },
  {
    number: '2 uur',
    label: 'per dag',
    description: 'Zijn werknemers minder productief door mentale klachten.',
    color: 'from-emerald-50 to-emerald-100',
    numberColor: 'text-emerald-600'
  },
  {
    number: '27%',
    label: 'van het verzuim',
    description: 'zijn het gevolg van mentale klachten.',
    color: 'from-amber-50 to-amber-100',
    numberColor: 'text-amber-600'
  },
  {
    number: '63',
    label: 'werkdagen',
    description: 'is het gemiddelde verzuim door mentale klachten.',
    color: 'from-rose-50 to-rose-100',
    numberColor: 'text-rose-600'
  },
  {
    number: '€14.000',
    label: 'per medewerker',
    description: 'zijn de gemiddelde verzuimkosten door werkdruk.',
    color: 'from-red-50 to-red-100',
    numberColor: 'text-red-600'
  }
];

export default function ProblemSection({ onWaitlist }: ProblemSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stats.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  return (
    <section id="problem" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Header text (centered vertically) */}
          <div className="flex-shrink-0 lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
              Mentale belasting raakt elke organisatie
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Achter deze cijfers zitten medewerkers die vaak te lang doorgaan en organisaties die te laat zicht krijgen op wat er speelt. Releafe geeft eerder inzicht, zodat preventie concreet wordt.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Mentale belasting raakt medewerkers én organisaties — in werkgeluk, productiviteit en verzuim(kosten).
            </p>
          </div>

          {/* Right side - Card carousel with buttons */}
          <div className="flex-1">
            <div className="flex items-center gap-8">
              {/* Left button */}
              <button
                onClick={goToPrev}
                className="flex-shrink-0 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Card display */}
              <div className="flex-1 min-h-64 flex items-center justify-center">
                <div
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative group cursor-default overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 w-full max-w-sm h-64 ${
                    hoveredIndex === 0
                      ? 'shadow-xl scale-105 border-slate-300'
                      : 'hover:shadow-lg hover:border-slate-300'
                  }`}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stats[currentIndex].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full bg-white group-hover:bg-opacity-95 transition-all duration-300 justify-center">
                    <div className={`text-5xl font-extrabold ${stats[currentIndex].numberColor} mb-3 transition-colors duration-300`}>
                      {stats[currentIndex].number}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-4">
                      {stats[currentIndex].label}
                    </div>
                    <p className={`text-base leading-relaxed transition-all duration-300 ${
                      hoveredIndex === 0
                        ? 'text-slate-900'
                        : 'text-slate-600'
                    }`}>
                      {stats[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right button */}
              <button
                onClick={goToNext}
                className="flex-shrink-0 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex gap-2 justify-center mt-6">
              {stats.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-slate-900 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main message */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200 mb-12 mt-20">
          <p className="text-xl lg:text-2xl text-slate-900 leading-relaxed mb-6">
            <span className="font-semibold">Mentaal welzijn:</span> inzicht en ondersteuning voordat klachten uitval worden
          </p>

          <p className="text-lg text-slate-600 leading-relaxed">
            Releafe ondersteunt medewerkers laagdrempelig bij hun mentale welzijn. Juist vóórdat stress, zorgen of minder focus leiden tot uitval. Met check-ins, doelen, reflectie en ontspanning herkennen medewerkers eerder patronen en kunnen ze zelf stappen zetten. Terwijl organisaties op groepsniveau inzicht krijgen en kunnen sturen op veerkracht, werkgeluk en het voorkomen van productiviteitsverlies, uitval en verzuim(kosten).
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">
            Zet je organisatie op de wachtlijst
          </h3>
          <button
            onClick={onWaitlist}
            className="group inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-150 shadow-lg shadow-brand-400/20"
          >
            Kom op de wachtlijst
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
