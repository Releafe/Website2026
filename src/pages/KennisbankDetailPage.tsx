import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { useState, useEffect } from 'react';
import { updatePageMeta, seoConfigs } from '../lib/seo';

type ModalMode = 'waitlist' | 'demo' | null;

const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const kennisbankContentData = [
  { id: '1', title: 'Wat kost een burn-out een werkgever echt?' },
  { id: '2', title: 'Hoe herken je mentale overbelasting bij medewerkers?' },
  { id: '3', title: 'Zo verlaag je verzuim in je bedrijf' },
  { id: '4', title: 'Wat is een platform voor mentaal welzijn op het werk?' },
  { id: '5', title: 'Hoe helpt een werkgeversdashboard bij mentale preventie?' },
  { id: '6', title: 'Waarom privacy essentieel is bij mentale gezondheid op de werkvloer' },
  { id: '7', title: 'Hoe mentale klachten leiden tot productiviteitsverlies op de werkvloer' },
  { id: '8', title: 'De verborgen kosten van stress binnen organisaties' },
  { id: '9', title: 'Waarom preventie belangrijker is dan ooit binnen organisaties' },
  { id: '10', title: 'Preventie van burn-out: wat werkt echt?' },
  { id: '11', title: 'Wat is werkgeluk en waarom is het belangrijk?' },
  { id: '12', title: 'Hoe mentale gezondheid invloed heeft op werkgeluk' },
  { id: '13', title: '7 manieren om werkgeluk binnen teams te vergroten' },
  { id: '14', title: 'Waarom mentale gezondheid een strategisch HR-thema is' },
  { id: '15', title: 'Hoe HR mentale belasting eerder zichtbaar kan maken' },
  { id: '16', title: 'Van reactief naar preventief HR-beleid' },
  { id: '17', title: 'Hoe organisaties mentale gezondheid bespreekbaar maken' },
  { id: '18', title: 'Mentale gezondheid en AVG: wat mag je als werkgever wel en niet weten?' },
];

const slugToId: Record<string, string> = kennisbankContentData.reduce((acc, item) => {
  acc[generateSlug(item.title)] = item.id;
  return acc;
}, {} as Record<string, string>);

const kennisbankContent: Record<string, { title: string; content: string; author: string; date: string }> = {
  '1': {
    title: 'Wat kost een burn-out een werkgever echt?',
    author: 'Jan Grobbe',
    date: '6 may 2026',
    content: `Een burn-out kost gemiddeld €14.000 per medewerker. Maar de indirecte kosten liggen veel hoger. We rekenen het voor je door.

De directe kosten van een burn-out zijn duidelijk: uitkeringen, vervangingsarbeid, reïntegratieprogramma's. Maar daar stopt het niet.

Onderzoek toont aan dat een medewerker in burn-out 40-60% minder productief is. De kwaliteit van werk neemt af, fouten stijgen, en teamdynamiek lijdt eronder. Over een periode van zes maanden burn-out kan dit al snel €20.000-€30.000 aan verlies opleveren.

Daarnaast is er het risico op juridische acties, reputatiedamage en het verlies van werving van talenten. Preventie is altijd goedkoper dan reparatie.

Releafe helpt je deze kosten voorkomen door vroegtijdig signalen op te vangen en preventieve maatregelen in te stellen.`
  },
  '2': {
    title: 'Hoe herken je mentale overbelasting bij medewerkers?',
    author: 'Jan Grobbe',
    date: '12 mei 2026',
    content: `Vroege signalen zijn subtiel: meer fouten, minder initiatief, vaker ziek. Ontdek welke gedragsveranderingen écht iets betekenen.

Mentale overbelasting manifesteert zich niet altijd op voor de hand liggende manieren. Als leidinggevende of HR-professional moet je weten welke subtiele veranderingen waarschuwingssignalen kunnen zijn.

De eerste tekenen zijn vaak gedragsveranderingen:
- Meer fouten in werk dat normaal goed gaat
- Verminderde deelname in teamactiviteiten
- Vaker ziekmeldingen, ook voor korte periodes
- Moeilijker concentreren en minder initiatief
- Meer conflicten met collega's

Fysieke signalen kunnen ook zichtbaar zijn: vermoeidheid, achteruitgang van uiterlijk, verandering in eet- of drinkgewoontes.

Het belangrijkste is luisteren en waarschuwen. Een gesprek kan al veel schelen, en professionele ondersteuning is soms nodig.

Releafe biedt real-time inzichten in het welzijn van je team zodat je deze signalen niet mist.`
  },
  '3': {
    title: 'Zo verlaag je verzuim in je bedrijf',
    author: 'Jan Grobbe',
    date: '8 mei 2026',
    content: `Kleine bedrijven hebben het zwaarst te lijden onder verzuim. Ontdek de drie aanpakken die het meest effectief zijn bewezen.

Verzuim kost bedrijven miljarden per jaar in Nederland. Voor kleine bedrijven kan zelfs één absentie ernstige gevolgen hebben voor operaties en teammoraal.

De drie meest effectieve aanpakken zijn:

1. Preventie door een gezonde werkplek
Investeer in ergonomie, mentale gezondheid, en een positieve werksfeer. Medewerkers die zich gewaardeerd voelen, worden minder ziek.

2. Vroege interventie
Zodra je signalen ziet van onwelzijn, grijp in. Dat kan door een gesprek, flexibiliteit, of professionele ondersteuning.

3. Reïntegratieprogramma's
Als iemand al verzuimt, zorg voor een goed reïntegratietraject. Snelle terugkeer naar het werk onder de juiste begeleiding is essentieel.

Met Releafe kun je deze drie pijlers effectief implementeren door datagestuurde inzichten en preventieve tools.`
  },
  '4': {
    title: 'Wat is een platform voor mentaal welzijn op het werk?',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '2 mei 2026',
    content: `Mentale gezondheid speelt een steeds grotere rol binnen organisaties. Toch merken veel werkgevers dat ondersteuning vaak pas beschikbaar komt wanneer medewerkers al zijn uitgevallen. Een platform voor mentaal welzijn helpt juist om eerder inzicht en ondersteuning te bieden.

Met Releafe kunnen medewerkers laagdrempelig werken aan stress, energie, slaap, focus en mentale veerkracht via één toegankelijk platform voor mentaal welzijn. Denk aan korte check-ins, reflectie, doelen en ontspanningsoefeningen die eenvoudig via een app toegankelijk zijn.

Voor organisaties ontstaat tegelijkertijd inzicht in trends rondom mentale belasting en werkdruk. Niet op individueel niveau, maar geanonimiseerd en privacyveilig. Hierdoor kunnen HR en management eerder signaleren waar ondersteuning nodig is.

Steeds meer organisaties investeren daarom in preventieve oplossingen rondom mentale gezondheid. Niet alleen om verzuim te voorkomen, maar ook om werkgeluk, betrokkenheid en duurzame inzetbaarheid te versterken.`
  },
  '5': {
    title: 'Hoe helpt een werkgeversdashboard bij mentale preventie?',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '1 mei 2026',
    content: `Veel organisaties merken mentale belasting pas op wanneer medewerkers al langere tijd onder druk staan. Releafe helpt organisaties om die signalen eerder zichtbaar te maken. Het Releafe-dashboard helpt organisaties om eerder inzicht te krijgen in trends rondom welzijn en werkdruk.

Door geanonimiseerde inzichten te verzamelen op teamniveau ontstaat een beter beeld van factoren zoals stress, energie, focus en betrokkenheid. Hierdoor kunnen organisaties eerder gesprekken starten en preventief handelen.

Een goed dashboard draait niet om controle, maar om ondersteuning. Daarom is privacy essentieel. Individuele gegevens blijven beschermd en organisaties krijgen uitsluitend inzichten op groepsniveau.

Voor HR-professionals en leidinggevenden biedt dit een waardevolle basis om beleid rondom duurzame inzetbaarheid en werkgeluk concreet vorm te geven.`
  },
  '6': {
    title: 'Waarom privacy essentieel is bij mentale gezondheid op de werkvloer',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '29 april 2026',
    content: `Mentale gezondheid is een gevoelig onderwerp. Daarom is vertrouwen essentieel wanneer organisaties inzetten op welzijn en preventie.

Bij Releafe staat vertrouwen centraal. Medewerkers moeten erop kunnen vertrouwen dat persoonlijke informatie veilig blijft en niet gebruikt wordt voor beoordeling of controle. Juist daarom is Releafe ontwikkeld met privacy als uitgangspunt, waarbij alleen geanonimiseerde inzichten zichtbaar zijn op groepsniveau.

Wanneer medewerkers zich veilig voelen, neemt de betrokkenheid toe en ontstaat er meer ruimte om mentale belasting bespreekbaar te maken. Dat zorgt uiteindelijk voor betere ondersteuning én effectiever preventiebeleid.

Privacy is daarmee niet alleen een juridische verplichting, maar ook een belangrijke voorwaarde voor succesvolle mentale ondersteuning binnen organisaties.`
  },
  '7': {
    title: 'Hoe mentale klachten leiden tot productiviteitsverlies op de werkvloer',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '26 april 2026',
    content: `Mentale klachten leiden niet altijd direct tot verzuim. Vaak is productiviteitsverlies al veel eerder zichtbaar.

Medewerkers die langdurig stress ervaren hebben vaker moeite met focus, energie, samenwerking en besluitvorming. Hierdoor neemt niet alleen de productiviteit af, maar ontstaat ook meer druk binnen teams.

Voor organisaties is dit lastig zichtbaar. Zeker wanneer medewerkers blijven doorwerken terwijl mentale belasting langzaam oploopt.

Juist daarom wordt preventie steeds belangrijker. Door eerder inzicht te krijgen in signalen van mentale belasting kunnen organisaties sneller ondersteunen en verdere uitval voorkomen.`
  },
  '8': {
    title: 'De verborgen kosten van stress binnen organisaties',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '22 april 2026',
    content: `Werkstress kost organisaties jaarlijks miljarden euro's. Toch blijven veel gevolgen van mentale belasting onzichtbaar.

Naast verzuim leidt stress vaak tot lagere betrokkenheid, meer fouten, verminderde samenwerking en een hogere uitstroom van medewerkers. Releafe helpt organisaties om deze signalen eerder zichtbaar te maken. Ook leidinggevenden ervaren extra druk wanneer teams langdurig overbelast raken.

Veel organisaties richten zich pas op mentale gezondheid wanneer problemen escaleren. Terwijl juist de fase daarvoor kansen biedt om preventief te ondersteunen.

Met Releafe kunnen organisaties eerder signalen opvangen en niet alleen kosten beperken, maar ook bijdragen aan een gezondere en productievere werkomgeving.`
  },
  '9': {
    title: 'Waarom preventie belangrijker is dan ooit binnen organisaties',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '19 april 2026',
    content: `Mentale klachten ontstaan meestal niet van de ene op de andere dag. Vaak bouwen stress, zorgen en vermoeidheid zich langzaam op.

Toch grijpen veel organisaties pas in wanneer medewerkers uitvallen. Met Releafe kunnen organisaties juist eerder inzetten op preventie. Dat maakt preventie belangrijker dan ooit.

Door medewerkers eerder ondersteuning te bieden kunnen organisaties mentale belasting beter beheersen en langdurige uitval voorkomen. Daarbij gaat het niet alleen om hulp bij klachten, maar juist om bewustwording, veerkracht en het herkennen van patronen.

Releafe ondersteunt organisaties hierbij door mentale belasting eerder zichtbaar te maken en medewerkers preventief te ondersteunen.`
  },
  '10': {
    title: 'Preventie van burn-out: wat werkt echt?',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '16 april 2026',
    content: `Steeds meer organisaties investeren in burn-outpreventie. Toch blijft de vraag: wat werkt daadwerkelijk?

Effectieve preventie begint niet bij losse workshops of eenmalige initiatieven, maar bij structurele aandacht voor mentale gezondheid.

Belangrijke factoren zijn:
- Open communicatie
- Psychologische veiligheid
- Inzicht in werkdruk
- Ondersteuning bij stress
- Ruimte voor herstel

Met Releafe krijgen medewerkers laagdrempelig toegang tot ondersteuning rondom stress, energie, focus en mentale veerkracht.

Preventie werkt het beste wanneer medewerkers én organisaties samen verantwoordelijkheid nemen voor welzijn en duurzame inzetbaarheid.`
  },
  '11': {
    title: 'Wat is werkgeluk en waarom is het belangrijk?',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '12 april 2026',
    content: `Werkgeluk gaat verder dan tevreden zijn met een baan. Het draait om energie, betrokkenheid, motivatie en het gevoel dat medewerkers goed in hun vel zitten.

Wanneer medewerkers zich mentaal goed voelen, heeft dat invloed op vrijwel alles binnen een organisatie. Denk aan samenwerking, creativiteit, productiviteit en betrokkenheid.

Organisaties die investeren in werkgeluk zien vaak dat medewerkers langer blijven, minder verzuimen en beter presteren.

Werkgeluk ontstaat niet vanzelf. Daarom helpt Releafe organisaties om mentale gezondheid, werkdruk en welzijn structureel onderdeel te maken van de werkomgeving.`
  },
  '12': {
    title: 'Hoe mentale gezondheid invloed heeft op werkgeluk',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '9 april 2026',
    content: `Mentale gezondheid en werkgeluk zijn nauw met elkaar verbonden. Daarom richt Releafe zich op het versterken van mentale veerkracht binnen organisaties. Wanneer medewerkers langdurig stress ervaren, heeft dat direct invloed op motivatie, focus en werkplezier.

Andersom geldt hetzelfde: medewerkers die zich gesteund voelen en mentaal in balans zijn, ervaren vaker energie en betrokkenheid.

Voor organisaties ligt hier een belangrijke kans. Door mentale gezondheid serieus te nemen ontstaat een werkomgeving waarin medewerkers beter functioneren en zich duurzamer kunnen ontwikkelen.

Werkgeluk begint daarom niet alleen bij secundaire arbeidsvoorwaarden, maar vooral bij aandacht voor welzijn en mentale veerkracht.`
  },
  '13': {
    title: '7 manieren om werkgeluk binnen teams te vergroten',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '5 april 2026',
    content: `Werkgeluk vergroten hoeft niet ingewikkeld te zijn. Kleine veranderingen kunnen al een groot verschil maken.

Zeven effectieve manieren:

1. Zorg voor open communicatie
2. Geef ruimte voor herstel en balans
3. Maak mentale gezondheid bespreekbaar
4. Verminder onnodige werkdruk
5. Geef medewerkers autonomie
6. Stimuleer ontwikkeling en groei
7. Bied laagdrempelige ondersteuning aan

Wanneer organisaties actief investeren in welzijn ontstaat een positievere werkomgeving waarin medewerkers beter kunnen functioneren.`
  },
  '14': {
    title: 'Waarom mentale gezondheid een strategisch HR-thema is',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '2 april 2026',
    content: `Mentale gezondheid is allang niet meer alleen een persoonlijk onderwerp. Voor HR en organisaties is het inmiddels een strategisch thema geworden.

Mentale belasting heeft invloed op:
- Verzuim
- Productiviteit
- Betrokkenheid
- Uitstroom
- Werkgeluk

Daarom kijken steeds meer organisaties naar preventief beleid rondom welzijn en duurzame inzetbaarheid.

HR speelt hierin een belangrijke rol. Releafe helpt HR-teams om mentale belasting eerder zichtbaar te maken en preventief te handelen. Niet alleen door ondersteuning te organiseren, maar ook door mentale gezondheid structureel onderdeel te maken van cultuur en beleid.`
  },
  '15': {
    title: 'Hoe HR mentale belasting eerder zichtbaar kan maken',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '29 maart 2026',
    content: `Voor veel HR-teams is mentale belasting lastig meetbaar. Toch zijn er steeds meer manieren om eerder inzicht te krijgen in signalen van stress en overbelasting.

Denk aan regelmatige check-ins, anonieme welzijnsmetingen en dashboards die trends op teamniveau zichtbaar maken.

Met Releafe kunnen organisaties eerder inzicht krijgen, sneller handelen en gerichter ondersteunen. Dat helpt niet alleen om verzuim te voorkomen, maar ook om werkgeluk en betrokkenheid te verbeteren.

Belangrijk hierbij is dat medewerkers zich veilig voelen en weten dat privacy beschermd blijft.`
  },
  '16': {
    title: 'Van reactief naar preventief HR-beleid',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '25 maart 2026',
    content: `Veel organisaties handelen pas wanneer medewerkers uitvallen. Toch groeit het besef dat preventief HR-beleid noodzakelijk is.

Preventief beleid richt zich op het vroeg herkennen van mentale belasting en het ondersteunen van medewerkers voordat klachten escaleren.

Dat vraagt om:
- Open communicatie
- Aandacht voor werkdruk
- Ondersteuning bij mentale gezondheid
- Inzicht in trends binnen teams

Organisaties die preventief werken investeren niet alleen in welzijn, maar ook in duurzame inzetbaarheid en een gezonde organisatiecultuur.`
  },
  '17': {
    title: 'Hoe organisaties mentale gezondheid bespreekbaar maken',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '22 maart 2026',
    content: `Mentale gezondheid bespreekbaar maken blijft voor veel organisaties lastig. Toch is openheid essentieel om medewerkers tijdig te ondersteunen.

Een veilige cultuur begint bij leidinggevenden die ruimte creëren voor gesprekken over stress, werkdruk en welzijn. Releafe ondersteunt organisaties bij het toegankelijk maken van mentale ondersteuning. Daarnaast helpt het wanneer ondersteuning laagdrempelig toegankelijk is.

Door mentale gezondheid onderdeel te maken van dagelijkse gesprekken ontstaat meer bewustwording en wordt het makkelijker om signalen vroeg te herkennen.

Dat draagt bij aan sterkere teams, meer werkgeluk en minder langdurige uitval.`
  },
  '18': {
    title: 'Mentale gezondheid en AVG: wat mag je als werkgever wel en niet weten?',
    author: 'Jan Grobbe & Nynke Dijk',
    date: '18 maart 2026',
    content: `Wanneer organisaties werken aan mentale gezondheid, speelt privacy een belangrijke rol. Werkgevers mogen namelijk niet zomaar gezondheidsgegevens van medewerkers verzamelen.

Daarom kiezen veel organisaties voor oplossingen zoals Releafe, waarbij inzichten geanonimiseerd worden weergegeven en individuele gegevens beschermd blijven.

Het doel van preventie is niet controleren, maar ondersteunen. Transparantie over privacy en datagebruik is daarom essentieel.

Wanneer medewerkers vertrouwen hebben in hoe gegevens worden verwerkt, ontstaat meer betrokkenheid en effectievere ondersteuning rondom mentale gezondheid.`
  }
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  const openWaitlist = () => setModalMode('waitlist');
  const closeModal = () => setModalMode(null);

  const actualId = id ? (slugToId[id] || id) : null;
  const post = actualId ? kennisbankContent[actualId] : null;

  useEffect(() => {
    if (post && actualId) {
      const articleSEO = (seoConfigs.blogArticles as any)?.[actualId];
      if (articleSEO) {
        updatePageMeta({
          title: articleSEO.title,
          description: articleSEO.description,
          focusKeyword: articleSEO.focusKeyword,
          keywords: articleSEO.keywords,
          canonical: articleSEO.canonical,
          ogType: articleSEO.ogType,
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': post.title,
            'description': articleSEO.description,
            'author': {
              '@type': 'Person',
              'name': post.author
            },
            'datePublished': post.date,
            'publisher': {
              '@type': 'Organization',
              'name': 'Releafe'
            }
          }
        });
      } else {
        updatePageMeta({ title: post.title, description: post.content.substring(0, 150) });
      }
    }
  }, [post, id]);

  if (!post) {
    return (
      <div className="font-sans antialiased">
        <Navbar onWaitlist={openWaitlist} />
        <section className="min-h-screen pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Artikel niet gevonden</h1>
            <button
              onClick={() => navigate('/kennisbank')}
              className="text-brand-500 hover:text-brand-600 font-semibold"
            >
              Terug naar blog
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={openWaitlist} />

      <article className="pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/kennisbank')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar blog
          </button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-slate-200 pb-6 sm:pb-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-slate-500">
              <User className="w-4 h-4 flex-shrink-0" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="prose prose-sm sm:prose md:prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Zet je organisatie op de wachtlijst</h3>
            <button
              onClick={openWaitlist}
              className="bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-150 shadow-md"
            >
              Kom op de wachtlijst
            </button>
          </div>
        </div>
      </article>

      <Footer />

      <WaitlistModal
        open={modalMode !== null}
        onClose={closeModal}
        mode={modalMode ?? 'waitlist'}
      />
    </div>
  );
}
