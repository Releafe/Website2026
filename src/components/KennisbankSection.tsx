import { ArrowRight, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function KennisbankSection() {
  const [selectedTag, setSelectedTag] = useState<string>('Alle');
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      tag: 'Kosten & verzuim',
      title: 'Wat kost een burn-out een werkgever echt?',
      excerpt:
        'Een burn-out kost gemiddeld €14.000 per medewerker. Maar de indirecte kosten liggen veel hoger. We rekenen het voor je door.',
      readTime: '4 min',
    },
    {
      id: 2,
      tag: 'Preventie',
      title: 'Hoe herken je mentale overbelasting bij medewerkers?',
      excerpt:
        'Vroege signalen zijn subtiel: meer fouten, minder initiatief, vaker ziek. Ontdek welke gedragsveranderingen écht iets betekenen.',
      readTime: '5 min',
    },
    {
      id: 3,
      tag: 'HR & beleid',
      title: 'Zo verlaag je verzuim in je bedrijf',
      excerpt:
        'Kleine bedrijven hebben het zwaarst te lijden onder verzuim. Ontdek de drie aanpakken die het meest effectief zijn bewezen.',
      readTime: '6 min',
    },
  ];

  const tags = ['Alle', 'Product', 'Kosten & verzuim', 'Preventie', 'Werkgeluk', 'HR & beleid'];
  const filteredPosts = selectedTag === 'Alle'
    ? posts
    : posts.filter(post => post.tag === selectedTag);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    navigate(`/kennisbank?category=${encodeURIComponent(tag)}`);
  };

  return (
    <section id="blog" className="bg-white py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Kennisbank
          </p>
          <p className="text-base lg:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto mb-6">
            In onze Releafe kennisbank delen we inzichten over <span className="font-semibold text-emerald-600">mentale belasting</span>, <span className="font-semibold text-emerald-600">veerkracht</span>, <span className="font-semibold text-emerald-600">werkgeluk</span> en <span className="font-semibold text-emerald-600">verzuimpreventie</span>, maar ook rondom het platform. Praktisch voor MKB, relevant voor HR en bruikbaar voor organisaties die eerder willen sturen op mentaal welzijn.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                selectedTag === tag
                  ? 'bg-brand-500 text-white border border-brand-500'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/kennisbank/${post.id}`}
            >
              <article
                className="group cursor-pointer bg-slate-50 rounded-2xl border border-slate-100 p-7 hover:border-brand-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime} lezen
                  </span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-brand-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center gap-1.5 text-brand-500 text-sm font-semibold group-hover:gap-2.5 transition-all duration-150">
                  Lees hier
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/kennisbank"
            className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-600 font-semibold text-sm group"
          >
            Lees hier meer relevante artikelen
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
