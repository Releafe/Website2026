import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta } from '../lib/seo';

export default function NotFoundPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta({
      title: 'Pagina niet gevonden — Releafe',
      description: 'De pagina die je zoekt bestaat niet. Ga terug naar de homepage of bekijk onze andere pagina\'s.',
      focusKeyword: '404 pagina niet gevonden',
    });
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-brand-400 font-bold text-lg mb-4 tracking-wider">404</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Deze pagina bestaat niet.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg mx-auto">
            De pagina die je zoekt is verplaatst, verwijderd of heeft nooit bestaan. Geen zorgen — er is genoeg ander moois te ontdekken.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all duration-150 shadow-lg shadow-brand-400/20"
            >
              <Home className="w-4 h-4" />
              Terug naar home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-7 py-3.5 rounded-xl text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-150"
            >
              <ArrowLeft className="w-4 h-4" />
              Vorige pagina
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Of bekijk een van deze pagina's:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link to="/releafe-app" className="text-brand-600 hover:text-brand-700 hover:underline">Releafe App</Link>
              <Link to="/releafe-dashboard" className="text-brand-600 hover:text-brand-700 hover:underline">Dashboard</Link>
              <Link to="/kennisbank" className="text-brand-600 hover:text-brand-700 hover:underline">Kennisbank</Link>
              <Link to="/mentaal-fit" className="text-brand-600 hover:text-brand-700 hover:underline">Mentaal fit</Link>
              <Link to="/mentale-klachten" className="text-brand-600 hover:text-brand-700 hover:underline">Mentale klachten</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
