import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'We zagen al vroeg dat Releafe niet zomaar een app is. Het is een manier om echt preventief te werken aan welzijn — iets waar we als HR al jaren naar zochten.',
      name: 'Sarah van den Berg',
      role: 'HR Manager',
      company: 'TechBedrijf NL',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote:
        'Als DGA van een bedrijf met 35 medewerkers weet ik hoe zwaar één burn-out aankomt. Releafe geeft mij eindelijk het inzicht en de tools om eerder te handelen.',
      name: 'Mark Hendriks',
      role: 'Directeur / DGA',
      company: 'Installatietechniek MKB',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote:
        "Het dashboard is simpel en helder. Geen ruis, geen onnodige cijfers. Precies wat je nodig hebt als ondernemer die z'n team wil ondersteunen zonder er een dagtaak van te maken.",
      name: 'Lisanne Mooij',
      role: 'Vitaliteitscoach & HR Adviseur',
      company: 'VitaalWerk',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Ervaringen
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Wat HR-professionals en
            <br />
            werkgevers zeggen.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote className="w-7 h-7 text-brand-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
