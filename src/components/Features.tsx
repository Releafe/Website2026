import { Zap, MessageSquare, TrendingUp, RotateCw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Korte check-ins',
      description:
        'Geen lange vragenlijsten, maar check-ins over stress, energie, slaap, focus en zorgen.',
    },
    {
      icon: Zap,
      title: 'Directe meerwaarde voor medewerkers',
      description:
        'Medewerkers krijgen persoonlijk inzicht én praktische oefeningen die direct helpen in het dagelijks leven.',
    },
    {
      icon: RotateCw,
      title: 'Regelmatig gebruik, zonder verplichting',
      description:
        'Heldere communicatie en vriendelijke reminders helpen medewerkers om Releafe regelmatig te gebruiken, zonder dat het als druk voelt.',
    },
    {
      icon: TrendingUp,
      title: 'Inzicht dat groeit',
      description:
        'Regelmatige check-ins maken trends zichtbaar op groepsniveau, zonder dat medewerkers dagelijks alles perfect hoeven bij te houden.',
    },
  ];

  return (
    <section id="oplossing" className="bg-white py-12 sm:py-16 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-brand-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            Waarom mensen Releafe gebruiken
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-5 leading-[1.1]">
            Laagdrempelige ondersteuning
            <br />
            <span className="text-brand-400">in het dagelijks leven.</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Releafe vraagt niet veel tijd of perfecte discipline. Met korte check-ins, persoonlijk inzicht en praktische oefeningen wordt ondersteuning laagdrempelig onderdeel van het dagelijks leven.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 lg:mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-brand-100 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-brand-500" strokeWidth={1.75} />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-50 to-slate-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-100 mb-12 lg:mb-16">
          <h3 className="text-center text-slate-900 font-bold text-lg sm:text-xl mb-6">
            De Releafe Flow
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            <div className="bg-white rounded-full px-4 py-2 border border-slate-200 font-semibold text-slate-900">Korte check-ins</div>
            <div className="text-brand-400 hidden sm:block">→</div>
            <div className="text-brand-400 sm:hidden">↓</div>
            <div className="bg-white rounded-full px-4 py-2 border border-slate-200 font-semibold text-slate-900">Zelfinzicht</div>
            <div className="text-brand-400 hidden sm:block">→</div>
            <div className="text-brand-400 sm:hidden">↓</div>
            <div className="bg-white rounded-full px-4 py-2 border border-slate-200 font-semibold text-slate-900">Regelmatig gebruik</div>
            <div className="text-brand-400 hidden sm:block">→</div>
            <div className="text-brand-400 sm:hidden">↓</div>
            <div className="bg-white rounded-full px-4 py-2 border border-slate-200 font-semibold text-slate-900">Trends zichtbaar</div>
            <div className="text-brand-400 hidden sm:block">→</div>
            <div className="text-brand-400 sm:hidden">↓</div>
            <div className="bg-brand-400 rounded-full px-4 py-2 font-semibold text-white">Eerder sturen</div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-100">
          <h3 className="text-slate-900 font-bold text-xl sm:text-2xl mb-4">
            Zelf starten, met duidelijke ondersteuning
          </h3>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Releafe is eenvoudig zelf te starten, maar je staat er niet alleen voor. Organisaties ontvangen praktische materialen om medewerkers te informeren, vertrouwen op te bouwen en regelmatig gebruik te stimuleren.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Introductiemail voor medewerkers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Privacy-uitleg in begrijpelijke taal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Activatie- en communicatietips</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Voorbeeld onboarding</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-slate-700 text-sm">Tips om Releafe te integreren in organisatie</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
