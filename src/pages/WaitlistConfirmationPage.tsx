import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Leaf, Heart } from 'lucide-react';
import { updatePageMeta } from '../lib/seo';

const Confetti = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '50';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const confetti: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ['#6e8f6b', '#587556', '#8BA988', '#c2dbc2', '#e0ede0'];

    for (let i = 0; i < 60; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * 5 + 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      confetti.forEach((piece, index) => {
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.vy += 0.12;
        piece.rotation += piece.rotationSpeed;

        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate(piece.rotation);
        ctx.fillStyle = piece.color;
        ctx.globalAlpha = Math.max(0, 1 - piece.y / canvas.height);
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        ctx.restore();

        if (piece.y > canvas.height) {
          confetti.splice(index, 1);
        }
      });

      if (confetti.length > 0) {
        requestAnimationFrame(animate);
      } else {
        if (document.body.contains(canvas)) {
          document.body.removeChild(canvas);
        }
      }
    };

    animate();

    return () => {
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return null;
};

export default function WaitlistConfirmationPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Je staat op de wachtlijst — Releafe',
      description: 'Bedankt voor je aanmelding! Je staat nu op onze wachtlijst. Wij houden je op de hoogte als Releafe live gaat.',
      focusKeyword: 'wachtlijst bevestiging',
      keywords: ['wachtlijst', 'Releafe', 'mentale gezondheid'],
      canonical: '/waitlist-confirmation',
      ogType: 'website'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-brand-100 to-brand-50 flex items-center justify-center px-4 py-8 overflow-hidden relative">
      <Confetti />

      {/* Floating background elements */}
      <div className="absolute top-10 right-10 opacity-10 animate-pulse">
        <Leaf className="h-32 w-32 text-brand-600 rotate-45" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
        <Heart className="h-32 w-32 text-brand-600 rotate-12" />
      </div>

      {/* Main card */}
      <div className="max-w-4xl w-full relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-16 text-center">
            {/* Logo */}
            <div className="mb-8">
              <img src="/Logo-Releafe-liggend.png" className="h-12 w-auto mx-auto" alt="Releafe" />
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              Je staat op de wachtlijst!
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Dankjewel voor jullie interesse. Binnenkort gaan we live voor het grote publiek: we houden jouw bedrijf op de hoogte.
            </p>

            {/* Content section with background */}
            <div className="bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-brand-800 mb-4">
                Mentale gezondheid verdient aandacht
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Releafe helpt daarbij door jouw medewerkers alle tools te geven om zich beter te voelen.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Of je medewerkers nu grip wilt laten krijgen op stress, beter inzicht in emoties, of simpelweg bewuster wilt laten leven – met Releafe heb je zometeen alles wat nodig is.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-lg"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
