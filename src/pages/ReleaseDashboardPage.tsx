import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { updatePageMeta, seoConfigs } from '../lib/seo';
import { Users, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import WaitlistModal from '../components/WaitlistModal';

export default function ReleaseDashboardPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta(seoConfigs.releaseDashboard);
    window.scrollTo(0, 0);
  }, []);

  const whyCards = [
    {
      icon: Users,
      title: 'Voor HR en vitaliteit',
      description: 'Gebruik actuele inzichten om beleid en interventies te onderbouwen.',
    },
    {
      icon: TrendingUp,
      title: 'Voor leidinggevenden en teams',
      description: 'Maak thema\'s als werkdruk, energie en focus bespreekbaar.',
    },
    {
      icon: Briefcase,
      title: 'Voor directie',
      description: 'Krijg zicht op risico\'s voor productiviteitsverlies, uitval en verzuimkosten.',
    },
  ];

  const dashboardPoints = [
    'Trends in welzijn, stress, energie, slaap, focus en zorgen',
    'Inzicht per organisatie, team of afdeling',
    'Vergelijking over periodes',
    'Ondersteuning bij gesprekken over werkdruk, veerkracht en werkgeluk',
    'Signalen die helpen om eerder te sturen op preventie',
  ];

  const selfServicePoints = [
    'Organisatiegegevens bekijken en beheren',
    'Medewerkers en gebruikers beheren',
    'Toegang regelen voor medewerkers',
    'Licentie bekijken en beheren',
    'Facturatie- en betaalgegevens beheren',
    'Dashboard en beheer op één centrale plek',
  ];

  const actionExamples = [
    'Energie daalt binnen een team: bespreek werkdruk, herstel en prioriteiten.',
    'Stress neemt toe in een afdeling: zet gericht ondersteuning of communicatie in.',
    'Slaap en focus staan onder druk: kijk naar belasting, werkritme en herstelmomenten.',
    'Een positieve trend is zichtbaar: leer wat werkt en versterk dit.',
  ];

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Releafe Dashboard voor werkgevers
                </h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Met het Releafe-dashboard krijg je inzicht in mentale belasting binnen teams en je organisatie. Via hetzelfde portaal beheer je eenvoudig medewerkers, toegang, licenties en organisatiegegevens.
                </p>
                <p className="text-base text-slate-500 mb-8 leading-relaxed">
                  Zo combineert Releafe preventieve stuurinformatie met praktisch self-service beheer. Geschikt voor alle organisaties die eenvoudig willen starten en meer inzicht willen in welzijn, werkdruk en duurzame inzetbaarheid.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-4 rounded-xl text-xs sm:text-base transition-all duration-150 shadow-lg shadow-emerald-600/20"
                  >
                    Meld je aan
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-4 sm:px-7 py-2.5 sm:py-4 rounded-xl text-xs sm:text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-150"
                  >
                    Schrijf je in op de wachtlijst
                  </button>
                </div>
                <p className="text-sm text-slate-500 mt-4">
                  Laat je gegevens achter en ontvang als eerste informatie over de lancering.
                </p>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-sm">
                  <img
                    src="/Screenshot_1_overzicht_startpagina.jpg"
                    alt="Releafe portaal overzicht"
                    className="w-full h-auto"
                  />
                  <p className="p-4 text-sm text-slate-600 text-center border-t border-slate-200">
                    Het Releafe-portaal brengt dashboardinzichten en organisatiebeheer samen in één overzichtelijke omgeving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You See Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Van losse signalen naar duidelijke trends
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Het dashboard laat op groepsniveau zien hoe het gaat met welzijn, stress, energie, slaap, focus en zorgen. Zo zie je eerder waar mentale belasting toeneemt en waar extra ondersteuning nodig is — zonder individuele medewerkers te volgen.
                </p>

                <div className="space-y-4">
                  {dashboardPoints.map((point, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-full">
                  <img
                    src="/Screenshot_2_dashboard_met_welzijn_en_trends.jpg"
                    alt="Dashboard welzijn en trends"
                    className="w-full h-auto"
                  />
                  <p className="p-4 text-sm text-slate-600 text-center border-t border-slate-200">
                    Voorbeeld van geanonimiseerde trends op groepsniveau. Individuele medewerkers zijn nooit zichtbaar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">
              Eerder sturen op welzijn, voordat klachten uitval worden
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Mentale belasting wordt vaak pas zichtbaar als iemand minder energie heeft, zich vaker ziekmeldt of uitvalt. Het dashboard helpt organisaties om signalen eerder te herkennen en gerichter te handelen.
            </p>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Zo wordt preventie concreter: niet alleen op basis van gevoel, maar op basis van trends binnen teams, afdelingen of de organisatie als geheel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-6">
                      <div className="inline-flex p-3 bg-emerald-100 rounded-xl">
                        <Icon className="w-6 h-6 text-emerald-700" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">
              Inzicht zonder individuele medewerkers te volgen
            </h2>
            <div className="bg-white border-l-4 border-emerald-600 rounded-2xl p-8">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Het Releafe-dashboard is bedoeld voor preventie, niet voor controle. Medewerkers gebruiken de app persoonlijk. Wat zij invullen is niet zichtbaar voor de werkgever. Organisaties zien alleen anonieme inzichten op groepsniveau. Zo blijft Releafe veilig voor medewerkers én waardevol voor organisaties.
              </p>
              <p className="text-lg text-slate-700 font-semibold text-emerald-700">
                Zo ontstaat inzicht voor preventie, zonder dat medewerkers het gevoel krijgen dat ze worden gemonitord.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section 1 */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Wil je Releafe inzetten binnen jouw organisatie?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We openen Releafe binnenkort voor nieuwe organisaties. Meld je aan voor de wachtlijst en ontvang als eerste informatie over beschikbaarheid, mogelijkheden en introductievoorwaarden.
            </p>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="group inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 shadow-lg hover:shadow-xl"
            >
              Meld je aan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </section>

        {/* Self-Service Portal Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Zelf beheren, zonder ingewikkeld IT-traject
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Via het Releafe-portaal regel je eenvoudig praktische zaken zoals medewerkers, toegang, organisatiegegevens, licenties en facturatie. Zo blijft Releafe overzichtelijk en makkelijk inzetbaar. Als organisatie kan je hierdoor zelfstandig en snel starten.
                </p>

                <div className="space-y-4">
                  {selfServicePoints.map((point, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-full">
                  <img
                    src="/Screenshot_3_selfservice_portal.jpg"
                    alt="Self-service portal"
                    className="w-full h-auto"
                  />
                  <p className="p-4 text-sm text-slate-600 text-center border-t border-slate-200">
                    Het portaal combineert dashboardinzichten met praktisch beheer voor organisaties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="hidden lg:flex justify-center order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden w-full">
                  <img
                    src="/public/Releafe.nl_:_Releafe_wachtlijst_-_gezondheid_van_medewerkers_telt.webp"
                    alt="Aanmeldproces"
                    className="w-full h-auto"
                  />
                  <p className="p-4 text-sm text-slate-600 text-center border-t border-slate-200">
                    Snel en eenvoudig aanmelden en starten.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Eenvoudig en snel aanmelden en starten
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Nieuwe organisaties kunnen via het portaal eenvoudig starten. Organisatie-, licentie- en facturatiegegevens worden in korte maar zorgvuldige stappen vastgelegd, zodat de basis direct goed staat.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Dit maakt Releafe laagdrempelig: geen langdurig implementatietraject, maar een duidelijke en eenvoudige start met overzicht over toegang, gebruik en licentie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* From Insight to Action */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 text-center">
              Van inzicht naar actie
            </h2>
            <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
              Het Releafe-dashboard helpt je als organisatie om signalen bespreekbaar te maken en gerichter te handelen. Hierdoor meet je niet allen, maar maak je vooral preventie concreet en effectief.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actionExamples.map((example, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-600 text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Maak je organisatie klaar voor preventief mentaal welzijn
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Wil je Releafe gebruiken om mentale belasting eerder zichtbaar te maken en medewerkers laagdrempelig te ondersteunen? Meld je aan voor de wachtlijst en blijf op de hoogte van de lancering.
            </p>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="group inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-150 shadow-lg hover:shadow-xl"
            >
              Meld je aan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} mode="waitlist" />
      <Footer />
    </div>
  );
}
