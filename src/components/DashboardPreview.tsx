import { TrendingUp, AlertTriangle, BarChart2, Lock } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Label */}
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-6">
            Werkgeversdashboard
          </p>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-8">
            Jij ziet trends.
            <br />
            Je medewerkers
            <br />
            <span className="text-brand-400">houden hun privacy.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-lg leading-relaxed mb-12">
            Met het Releafe dashboard krijg je inzicht in trends en mentale belasting binnen teams en organisatie. Hier beheer je ook toegang tot de Releafe app. Hierdoor kun je proactief sturen op mentale belastbaarheid, productiviteitsverlies, uitval en verzuim(kosten).
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: BarChart2, text: 'Teamwelzijn en werkdruk op teamniveau in één oogopslag' },
              { icon: AlertTriangle, text: 'Vroege signalen van verhoogde werkdruk direct zichtbaar' },
              { icon: TrendingUp, text: 'Vitaliteitsscore per afdeling of team' },
              { icon: Lock, text: 'Individuele data altijd beschermd — privacy by design' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-500" strokeWidth={1.75} />
                </div>
                <span className="text-slate-600 text-sm leading-relaxed text-left pt-1">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
