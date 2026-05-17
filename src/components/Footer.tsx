import { Linkedin, Mail, Users } from 'lucide-react';

interface FooterProps {
  onFounders?: () => void;
}

export default function Footer({ onFounders }: FooterProps) {
  const year = new Date().getFullYear();

  const links: Record<string, Array<{ label: string; href?: string; onClick?: () => void }>> = {
    Ontdekken: [
      { label: 'Releafe App', href: '/releafe-app' },
      { label: 'Dashboard', href: '/releafe-dashboard' },
      { label: 'Kennisbank', href: '/kennisbank' },
    ],
    Kennis: [
      { label: 'Mentaal fit', href: '/mentaal-fit' },
      { label: 'Mentale klachten', href: '/mentale-klachten' },
    ],
    Bedrijf: [
      { label: 'Over ons', onClick: onFounders },
      { label: 'Stuur ons een bericht', href: 'mailto:hallo@releafe.nl' },
      { label: 'Telefonisch contact', href: 'tel:+31646620130' },
    ],
    Juridisch: [
      { label: 'Privacyverklaring', href: '/privacy' },
      { label: 'Algemene voorwaarden', href: '/terms' },
      { label: 'Cookie-instellingen', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src="/Logo-Releafe-liggend.png" className="h-8 w-auto brightness-0 invert" alt="Releafe" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Releafe helpt organisaties om mentale belasting vroeg te signaleren en medewerkers laagdrempelig te ondersteunen — voordat klachten leiden tot uitval en verzuim.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={onFounders}
                className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                title="Ontmoet ons team"
              >
                <Users className="w-4 h-4" />
              </button>
              <a
                href="https://www.linkedin.com/company/releafeapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label="Releafe op LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hallo@releafe.nl"
                className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-5">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href || '#'}
                        className="text-slate-400 hover:text-slate-200 text-sm transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-slate-500 text-sm">
            © {year} Releafe. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end">
            <div className="flex items-center gap-2 bg-brand-400/10 border border-brand-400/20 text-brand-300 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
              Binnenkort beschikbaar voor organisaties
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
