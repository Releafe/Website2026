import { ArrowRight, Calendar, User, Mail } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WaitlistModal from '../components/WaitlistModal';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { updatePageMeta, seoConfigs } from '../lib/seo';

const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

type ModalMode = 'waitlist' | 'demo' | null;

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  useEffect(() => {
    updatePageMeta(seoConfigs.kennisbank);

    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
    }
  }, [searchParams]);

  const openWaitlist = () => setModalMode('waitlist');
  const closeModal = () => setModalMode(null);

  const posts = [
    {
      id: 1,
      title: 'Wat kost een burn-out een werkgever echt?',
      excerpt: 'Burn-out kost werkgevers gemiddeld €14.000-€30.000 per medewerker. Directe én indirecte kosten van verzuim, productiviteitsverlies en juridische risico\'s.',
      author: 'Jan Grobbe',
      date: '6 mei 2026',
      category: 'Kosten & verzuim',
    },
    {
      id: 2,
      title: 'Hoe herken je mentale overbelasting bij medewerkers?',
      excerpt: 'Vroege signalen van mentale overbelasting: meer fouten, concentratieproblemen, prikkelbaarheid. Lees hoe leidinggevenden dit herkennen.',
      author: 'Jan Grobbe',
      date: '12 mei 2026',
      category: 'Preventie',
    },
    {
      id: 3,
      title: 'Zo verlaag je verzuim in je bedrijf',
      excerpt: 'Drie effectieve aanpakken om verzuim te verlagen: preventie, vroege interventie en reïntegratie. Speciaal voor MKB-bedrijven.',
      author: 'Jan Grobbe',
      date: '8 mei 2026',
      category: 'HR & beleid',
    },
    {
      id: 4,
      title: 'Wat is een platform voor mentaal welzijn op het werk?',
      excerpt: 'Welzijnsplatform: check-ins, doelen, geanonimiseerde teaminzichten. Laagdrempelige ondersteuning voor mentale gezondheid.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '2 mei 2026',
      category: 'Product',
    },
    {
      id: 5,
      title: 'Hoe helpt een werkgeversdashboard bij mentale preventie?',
      excerpt: 'HR-dashboard maakt mentale belasting zichtbaar op teamniveau. Geanonimiseerde data, privacy-veilig, preventief handelen.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '1 mei 2026',
      category: 'Product',
    },
    {
      id: 6,
      title: 'Waarom privacy essentieel is bij mentale gezondheid op de werkvloer',
      excerpt: 'Privacy = vertrouwen = effectieve mentale ondersteuning. GDPR-compliant, geanonimiseerde gegevens, psychologische veiligheid.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '29 april 2026',
      category: 'HR & beleid',
    },
    {
      id: 7,
      title: 'Hoe mentale klachten leiden tot productiviteitsverlies op de werkvloer',
      excerpt: 'Mentale stress vermindert focus, samenwerking en kwaliteit. Productiviteitsverlies begint vóór verzuim. Preventie = ROI.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '26 april 2026',
      category: 'Kosten & verzuim',
    },
    {
      id: 8,
      title: 'De verborgen kosten van stress binnen organisaties',
      excerpt: 'Werkstress kost miljarden: lagere betrokkenheid, meer fouten, uitstroom. Verborgen kosten die onder de radar blijven.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '22 april 2026',
      category: 'Kosten & verzuim',
    },
    {
      id: 9,
      title: 'Waarom preventie belangrijker is dan ooit binnen organisaties',
      excerpt: 'Preventief werken: bewustwording, veerkracht, vroege signalen opvangen. Beter dan reactief ingrijpen na uitval.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '19 april 2026',
      category: 'Preventie',
    },
    {
      id: 10,
      title: 'Preventie van burn-out: wat werkt echt?',
      excerpt: 'Evidence-based burn-out preventie: open communicatie, psychologische veiligheid, werkdruk management, ruimte voor herstel.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '16 april 2026',
      category: 'Preventie',
    },
    {
      id: 11,
      title: 'Wat is werkgeluk en waarom is het belangrijk?',
      excerpt: 'Werkgeluk = energie, betrokkenheid, motivatie. Impact op samenwerking, creativiteit, productiviteit en duurzaamheid.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '12 april 2026',
      category: 'Werkgeluk',
    },
    {
      id: 12,
      title: 'Hoe mentale gezondheid invloed heeft op werkgeluk',
      excerpt: 'Stress vermindert werkplezier; welzijn verhoogt betrokkenheid en duurzaamheid. Directe link mentale gezondheid en prestatie.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '9 april 2026',
      category: 'Werkgeluk',
    },
    {
      id: 13,
      title: '7 manieren om werkgeluk binnen teams te vergroten',
      excerpt: 'Praktische aanpakken: open communicatie, rustpauzes, autonomie, groei, ondersteuning. Kleine veranderingen, groot effect.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '5 april 2026',
      category: 'Werkgeluk',
    },
    {
      id: 14,
      title: 'Waarom mentale gezondheid een strategisch HR-thema is',
      excerpt: 'Mentale gezondheid beïnvloedt verzuim, productiviteit, uitstroom. Waarom HR strategisch moet handelen: ROI duidelijk.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '2 april 2026',
      category: 'HR & beleid',
    },
    {
      id: 15,
      title: 'Hoe HR mentale belasting eerder zichtbaar kan maken',
      excerpt: 'Meetmethoden: check-ins, anonieme welzijnsmetingen, dashboards. Data-driven preventie op teamniveau.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '29 maart 2026',
      category: 'HR & beleid',
    },
    {
      id: 16,
      title: 'Van reactief naar preventief HR-beleid',
      excerpt: 'HR-transformatie: van crisis management naar preventie. Open communicatie, werkdruk, ondersteuning, trends.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '25 maart 2026',
      category: 'HR & beleid',
    },
    {
      id: 17,
      title: 'Hoe organisaties mentale gezondheid bespreekbaar maken',
      excerpt: 'Psychologische veiligheid creëren: rol leidinggevenden, open gesprekken, laagdrempelige ondersteuning.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '22 maart 2026',
      category: 'HR & beleid',
    },
    {
      id: 18,
      title: 'Mentale gezondheid en AVG: wat mag je als werkgever wel en niet weten?',
      excerpt: 'GDPR & gezondheid: wat mag werkgever weten? Geanonimiseerde data, privacy-veilig, veilig handelen.',
      author: 'Jan Grobbe & Nynke Dijk',
      date: '18 maart 2026',
      category: 'HR & beleid',
    },
  ];

  const categories = ['Alle', 'Product', 'Kosten & verzuim', 'Preventie', 'Werkgeluk', 'HR & beleid'];
  const filteredPosts = selectedCategory === 'Alle'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={openWaitlist} />

      {/* Hero */}
      <section className="pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4">
            Releafe Kennisbank — Mentale gezondheid artikelen
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto px-4">
            Mentale gezondheid speelt een steeds grotere rol binnen organisaties.
          </p>
        </div>
      </section>

      {/* Knowledge Bank Intro */}
      <section className="py-10 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
            We nemen je in onze Releafe kennisbank mee in inzichten, praktijkverhalen en artikelen over <span className="font-semibold text-emerald-600">mentale belasting</span>, <span className="font-semibold text-emerald-600">werkgeluk</span>, <span className="font-semibold text-emerald-600">veerkracht</span> en <span className="font-semibold text-emerald-600">verzuimpreventie</span> - maar ook mee in de ontwikkeling van Releafe: van nieuwe functies en inzichten uit de praktijk tot hoe ons platform organisaties helpt om mentale belasting eerder zichtbaar te maken en medewerkers laagdrempelig te ondersteunen. Praktisch toepasbaar voor MKB, relevant voor HR en waardevol voor iedere organisatie die mentaal welzijn serieus neemt.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 sm:pb-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-brand-400 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/kennisbank/${generateSlug(post.title)}`}
              >
              <article
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden h-16 sm:h-20 bg-gradient-to-br from-brand-100 to-slate-100 flex items-center justify-center">
                  <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-brand-400 text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col gap-2 sm:gap-3 border-t border-slate-100 pt-3 sm:pt-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <User className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
                      <span className="truncate">{post.date}</span>
                    </div>
                  </div>

                  <button className="w-full mt-3 sm:mt-4 flex items-center justify-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-xs sm:text-sm transition-colors">
                    Lees meer
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-400 py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            Wil je op de hoogte blijven?
          </h2>

          <p className="text-brand-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Ontvang wekelijks inzichten, tips en verhalen over welzijn en mentale gezondheid op het werk.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mb-10 sm:mb-12">
            <button
              onClick={openWaitlist}
              className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-brand-500 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-150 shadow-xl shadow-brand-600/20"
            >
              <Mail className="w-4 h-4" />
              Inschrijven
            </button>
            <p className="text-brand-100 text-xs sm:text-sm">
              We sturen je nooit spam. Afmelden kan altijd met één klik.
            </p>
          </div>

          <p className="text-brand-100 text-sm max-w-2xl mx-auto leading-relaxed">
            Ontdek hoe Releafe jouw organisatie kan helpen om mentale belasting eerder zichtbaar te maken en medewerkers preventief te ondersteunen.
          </p>
        </div>
      </section>

      <Footer />

      <WaitlistModal
        open={modalMode !== null}
        onClose={closeModal}
        mode={modalMode ?? 'waitlist'}
      />
    </div>
  );
}
