import { Quote } from 'lucide-react';

interface Story {
  quote: string;
  author: string;
  subtitle: string;
}

const stories: Story[] = [
  {
    quote: 'De dagboekfunctie van Releafe heeft me geholpen mijn emoties beter te begrijpen en mijn vooruitgang bij te houden. Het is een onmisbaar hulpmiddel geweest voor mijn mentale welzijn.',
    author: 'Merijn',
    subtitle: 'over de kracht van emotionele reflectie en groei'
  },
  {
    quote: 'Het zorgenbakje is fantastisch om mijn dagelijkse stress van me af te zetten. Het helpt me zaken te ordenen in mijn hoofd en helpt me gefocust te blijven.',
    author: 'Kristiyan',
    subtitle: 'over de verlichting van het beheersen van dagelijkse stress'
  },
  {
    quote: 'De dagelijkse mindfulness-routines in Releafe zijn een essentieel onderdeel van mijn dag geworden. Ik voel me meer in balans en minder overweldigd door de uitdagingen van het leven.',
    author: 'Hanna',
    subtitle: 'over de voordelen van mindfulness in het dagelijks leven integreren'
  },
  {
    quote: 'Ik heb jarenlang geworsteld met angst, maar de mindfulness-oefeningen in Releafe hebben me geholpen rust en balans te vinden in mijn dagelijks leven.',
    author: 'Ivan',
    subtitle: 'over het vinden van balans en verlichting van angst'
  }
];

export default function RealStories() {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Echte verhalen, echte impact
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hoor van testgebruikers hoe Releafe hun leven heeft veranderd
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 hover:border-brand-200 hover:shadow-xl transition-all duration-300 animate-drop-bounce"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-brand-400/40 group-hover:text-brand-400 transition-colors" />
              </div>

              {/* Quote */}
              <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                "{story.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-brand-200/0 via-brand-200 to-brand-200/0 mb-6" />

              {/* Author Info */}
              <div>
                <p className="font-bold text-slate-900">
                  {story.author}
                </p>
                <p className="text-sm text-slate-500 italic mt-2">
                  {story.subtitle}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-4 inline-block">
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  Testgebruiker
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-xl text-slate-900 font-semibold mb-2">
            Wil je ontdekken wat Releafe voor jouw organisatie en medewerkers kan betekenen?
          </p>
          <p className="text-slate-600 mb-6">
            Zet je organisatie op de wachtlijst en ontvang als eerste informatie.
          </p>
          <button className="inline-block bg-brand-400 hover:bg-brand-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-150 shadow-lg shadow-brand-400/20">
            Schrijf je in voor de wachtlijst
          </button>
        </div>
      </div>
    </section>
  );
}
