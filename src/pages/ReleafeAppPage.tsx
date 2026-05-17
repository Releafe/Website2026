import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta, seoConfigs } from '../lib/seo';
import { BookOpen, TrendingUp, Target, AlertCircle, MessageSquare, Smile, TreePine, ChevronDown } from 'lucide-react';

export default function ReleafeAppPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta(seoConfigs.releafeApp);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: 'Dagboek',
      goal: 'Doel: krijg inzicht in jouw huidige mentale welzijn',
      description: 'Gebruik het dagboek om eenvoudig bij te houden hoe je je voelt. Scoor dagelijks je stemming, stress, energie en slaap. Heb je iets bijzonders meegemaakt? Voeg dit als extra notitie toe. Zo krijg je een persoonlijk welzijnsoverzicht dat je verder helpt je welzijn beter te begrijpen.',
      cta: 'Begin met je dagboek',
    },
    {
      icon: TrendingUp,
      title: 'Welzijnsoverzicht',
      goal: 'Doel: bekijk je vooruitgang en ontdek patronen',
      description: 'Je dagboek heeft een persoonlijk welzijnsoverzicht met een handige grafiek. Hierin zie je in één oogopslag hoe het de afgelopen tijd met je is gegaan. Kies zelf welke onderwerpen je wilt weergeven en over welke periode je de gegevens wil zien. Zo herken je patronen, ontdek je wat jou helpt om je beter te voelen en waar je aan gaat werken.\n\nBenieuwd hoe je je gisteren, vorige week of een maand geleden voelde? Met de handige kalender in je dagboek kun je het zo opzoeken. Selecteer de datum en bekijk je oude aantekeningen. Zo krijg je meer inzicht in je gevoelens en gedachten.',
      cta: 'Bekijk je welzijnsoverzicht',
    },
    {
      icon: Target,
      title: 'Persoonlijke doelen',
      goal: 'Doel: stimuleer positieve veranderingen in je leven',
      description: 'Jezelf goed voelen begint met kleine dingen. Stel jezelf doelen die je blij maken, zoals \'een complimentje geven\' of \'iets nieuws leren\'. Met Releafe volg je deze doelen makkelijk én krijg je een beloning in de app als je ze haalt. Zo wordt het leuk om gezonde gewoontes te ontwikkelen. En het is nog makkelijk ook: in je dagboek schrijf je elke dag even op hoe het gaat en in het overzicht zie je precies hoe ver je bent. Zo zie je in één oogopslag hoe goed je bezig bent!',
      cta: 'Stel je eerste doel in',
    },
    {
      icon: AlertCircle,
      title: 'Zorgenbakje',
      goal: 'Doel: geef je zorgen een plek en creëer ruimte in je hoofd',
      description: 'Wil je je zorgen even kwijt? Gebruik het zorgenbakje. Schrijf je zorgen en angsten op en berg ze veilig op. Het helpt om je zorgen visueel op te bergen, ze uit je hoofd te zetten en ze daarna makkelijker los te laten of er anders over na te denken.',
      cta: 'Schrijf je zorgen op',
    },
    {
      icon: Smile,
      title: 'Reframen',
      goal: 'Doel: verander negatieve gedachten in helpende en realistische gedachten',
      description: 'De reframing-oefening helpt je om je zorgen vanuit een andere invalshoek te bekijken. Door stapsgewijs je gedachten te herformuleren helpt deze oefening je om meer positieve en realistische gedachten te ontdekken. Hierdoor krijg je meer grip op je emoties en situaties waardoor je je rustiger en zelfverzekerder voelt.\n\nZit je met zorgen? Bekijk ze eens vanuit een andere invalshoek. De reframing-oefening helpt je om je gedachten stap voor stap te veranderen. Door je gedachten anders te bekijken, ontdek je nieuwe mogelijkheden. Daardoor voel je je rustiger en zekerder, en kun je beter omgaan met moeilijke situaties.',
      cta: 'Probeer een reframing-oefening',
    },
    {
      icon: MessageSquare,
      title: 'Bericht aan jezelf',
      goal: 'Doel: help jezelf tijdens moeilijke momenten',
      description: 'Geef jezelf een steuntje in de rug. Schrijf of neem een bericht op voor jezelf, voor die momenten dat je het even moeilijk hebt. Lees of luister het later terug en geef jezelf zo een positieve boost, precies wanneer je het nodig hebt.\n\nTip: Je kan ook je partner, een vriend of familielid waar je steun aan hebt vragen een bericht voor je op te nemen.',
      cta: 'Schrijf of neem een bericht op',
    },
  ];

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Releafe: jouw pad naar mentaal welzijn
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              Je mentale gezondheid verdient aandacht, en Releafe helpt je daarbij. Of je nu grip wilt krijgen op je stress, beter inzicht wilt in je emoties, of simpelweg bewuster wilt leven – met Releafe heb je alle tools bij de hand. Van een overzichtelijk dagboek en persoonlijke doelen tot ontspanningsoefeningen en een motiverende bonsaiboom die met je meegroeit.
            </p>
            <p className="text-slate-600 italic border-l-4 border-brand-400 pl-4">
              Releafe geeft je praktische tools en oefeningen om mentaal sterker te worden en beter om te gaan met deze klachten. Maar onthoud: bij ernstige klachten is professionele hulp altijd de beste stap.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <button className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 font-semibold">
                Klaar om aan de slag te gaan
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Hoe Releafe jou helpt
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Wil je minder stress, meer balans en weer goed in je vel zitten? Releafe helpt je hierbij met praktische en handige tools. Ontdek hieronder welke functies de app biedt, wat hun doel is, hoe ze werken en kies wat bij jou past. Kleine stappen, groot verschil.
              </p>
            </div>

            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 mt-1">
                        <div className="inline-flex p-3 bg-brand-50 rounded-xl">
                          <Icon className="w-6 h-6 text-brand-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-brand-600 font-semibold mb-4">
                          {feature.goal}
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-6 whitespace-pre-line">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ontspanningsoefeningen Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-slate-200 p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="inline-flex p-3 bg-blue-100 rounded-xl">
                    <Smile className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ontspanningsoefeningen
                  </h3>
                  <p className="text-blue-700 font-semibold mb-4">
                    Doel: verminder stress en vind rust
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Even tijd voor jezelf? Releafe heeft volop meditatie- en mindfulnessvideo's en -audio's door professionals ontworpen. Of je nu behoefte hebt aan rust, meer focus of gewoon even een momentje voor jezelf, er is altijd iets wat bij je past. Bekijk de video's en audio's en kies wat jou helpt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonsaiboom Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-slate-200 p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="inline-flex p-3 bg-emerald-100 rounded-xl">
                    <TreePine className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Bonsaiboom
                  </h3>
                  <p className="text-emerald-700 font-semibold mb-4">
                    Doel: Jou motiveren om met je mentale welzijn bezig te blijven.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Voor elke stap die je zet binnen de app – of het nu het bijhouden van je dagboek is, het behalen van een doel of een moment van ontspanning – verdien je beloningen waarmee je jouw bonsai kunt laten groeien en bloeien. Zo wordt zelfzorg niet alleen waardevol, maar ook leuk en motiverend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-400 to-brand-500">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar om te beginnen?
            </h2>
            <p className="text-lg text-brand-100 mb-8 leading-relaxed">
              Sluit je aan bij organisaties die bouwen aan een gezondere en duurzamere werkomgeving.
            </p>
            <button className="px-8 py-4 bg-white hover:bg-slate-50 text-brand-500 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Zet je organisatie op de wachtlijst
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
