import { Zap, TrendingUp, Bell, BarChart3, ArrowRight, Check } from 'lucide-react';

interface RetentionSectionProps {
  onWaitlist?: () => void;
  onLearnMore?: () => void;
}

export default function RetentionSection({ onWaitlist, onLearnMore }: RetentionSectionProps) {
  const cards = [
    {
      icon: Zap,
      title: 'Korte check-ins',
      description: 'Geen lange vragenlijsten, maar korte check-ins rondom stress, energie, slaap, focus en zorgen.',
      color: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200/50',
    },
    {
      icon: TrendingUp,
      title: 'Directe waarde voor medewerkers',
      description: 'Medewerkers krijgen persoonlijk inzicht, reflecties en oefeningen die direct helpen in het dagelijks leven.',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200/50',
    },
    {
      icon: Bell,
      title: 'Slimme activatie',
      description: 'Met reminders, introductiematerialen en duidelijke communicatie stimuleren we regelmatig gebruik zonder druk.',
      color: 'from-violet-50 to-purple-50',
      borderColor: 'border-violet-200/50',
    },
    {
      icon: BarChart3,
      title: 'Inzicht over tijd',
      description: 'Organisaties krijgen waardevolle trends op basis van regelmatige signalen — niet perfecte dagelijkse deelname.',
      color: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200/50',
    },
  ];

  const checklistItems = [
    'Introductiemail voor medewerkers',
    'Privacy-uitleg in begrijpelijke taal',
    'Activatie- en communicatietips',
    'Voorbeeld onboarding',
    'Tips voor werkoverleggen en vitaliteit',
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Waarom mensen Releafe willen gebruiken
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Releafe vraagt geen perfecte discipline. Door korte check-ins, persoonlijk inzicht en slimme activatie wordt mentale ondersteuning laagdrempelig onderdeel van de werkweek.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-default`}
              >
                {/* Icon container */}
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {card.description}
                </p>

                {/* Subtle accent line */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-slate-300 to-transparent rounded-full group-hover:w-24 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Flow Visualization */}
        <div className="my-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 mb-8">
            <div className="flex items-center gap-3 lg:gap-2">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-emerald-50 border border-emerald-200/50 rounded-lg text-sm font-medium text-slate-900 whitespace-nowrap">
                  Korte check-ins
                </div>
              </div>
              <div className="hidden lg:block text-slate-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="lg:hidden text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-2">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200/50 rounded-lg text-sm font-medium text-slate-900 whitespace-nowrap">
                  Meer zelfinzicht
                </div>
              </div>
              <div className="hidden lg:block text-slate-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="lg:hidden text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-2">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-violet-50 border border-violet-200/50 rounded-lg text-sm font-medium text-slate-900 whitespace-nowrap">
                  Regelmatig gebruik
                </div>
              </div>
              <div className="hidden lg:block text-slate-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="lg:hidden text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-2">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-amber-50 border border-amber-200/50 rounded-lg text-sm font-medium text-slate-900 whitespace-nowrap">
                  Trends zichtbaar
                </div>
              </div>
              <div className="hidden lg:block text-slate-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="lg:hidden text-slate-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-lg text-sm font-semibold text-emerald-900">
                Eerder signaleren
              </div>
            </div>
          </div>
        </div>

        {/* Starterkit Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              Self-service, maar niet zonder houvast
            </h3>
            <p className="text-slate-700 leading-relaxed mb-8">
              Met Releafe start je zelfstandig, maar niet blanco. Organisaties ontvangen praktische materialen om medewerkers goed mee te nemen in de introductie van het platform.
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Trust Statement & CTAs */}
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-8 inline-block">
            🔒 Privacyveilig ingericht — medewerkers houden regie over hun gegevens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onWaitlist}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Zet je organisatie op de wachtlijst
            </button>
            <button
              onClick={onLearnMore}
              className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-900 font-medium rounded-xl border border-slate-300 transition-all duration-300"
            >
              Bekijk hoe Releafe werkt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
