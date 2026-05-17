import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  onWaitlist?: () => void;
}

export default function Navbar({ onWaitlist = () => {} }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Oplossing', href: '#oplossing' },
    { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
  ];

  const pages = [
    { label: 'Releafe app', href: '/releafe-app' },
    { label: 'Dashboard', href: '/releafe-dashboard' },
    { label: 'Kennisbank', href: '/kennisbank' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="flex items-center group cursor-pointer">
            <img src="/Logo-Releafe-liggend.png" className="h-8 w-auto hover:opacity-80 transition-opacity" alt="Releafe" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {isHomePage && links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}

            {pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-150"
              >
                {page.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onWaitlist}
              className="bg-brand-400 hover:bg-brand-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-150 shadow-sm"
            >
              Gratis aanmelden
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-700 p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-3 sm:gap-4">
            {isHomePage && links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 hover:text-brand-500 text-sm font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {pages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 hover:text-brand-500 text-sm font-medium py-1 transition-colors"
              >
                {page.label}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => { onWaitlist(); setMobileOpen(false); }}
                className="bg-brand-400 hover:bg-brand-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all"
              >
                Gratis aanmelden
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
