import { UserPlus, Send, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  onWaitlist: () => void;
}

export default function HowItWorks({ onWaitlist }: HowItWorksProps) {
  const steps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Meld je organisatie aan',
      description:
        'Registreer je in een paar minuten. Kies het plan dat bij je organisatie past en stel je account in.',
    },
    {
      step: '02',
      icon: Send,
      title: 'Nodig je medewerkers uit',
      description:
        'Stuur een uitnodigingslink. Medewerkers installeren de app en starten direct — laagdrempelig en volledig anoniem.',
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Volg de teamtrends',
      description:
        'Jouw dashboard toont welzijn, werkdruk en vitaliteit op team- en organisatieniveau. Zo signaleer je vroeg en handel je op tijd.',
    },
  ];

  return (
    <section id="hoe-het-werkt" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Hoe het werkt
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Eenvoudig en snel starten.
              <br />
              <span className="text-brand-400">Gericht werken aan preventie.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Teamwelzijn en werkdruk op teamniveau in één oogopslag
              <br className="hidden sm:block" />
              Vroege signalen van verhoogde werkdruk direct zichtbaar
              <br className="hidden sm:block" />
              Vitaliteitsscore per afdeling of team
              <br className="hidden sm:block" />
              Individuele data altijd beschermd — privacy by design
            </p>
            <button
              onClick={onWaitlist}
              className="bg-brand-400 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-150 shadow-lg shadow-brand-400/20"
            >
              Begin vandaag nog
            </button>
            <p className="text-slate-400 text-sm mt-3">Gratis toegang tijdens de early access periode</p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-5 bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-100 hover:shadow-md rounded-2xl p-6 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-400 rounded-xl flex items-center justify-center shadow-lg shadow-brand-400/20">
                  <step.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-brand-300 text-xs font-black uppercase tracking-widest">{step.step}</span>
                    <h3 className="text-slate-900 font-bold text-base">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
