import { X, Linkedin } from 'lucide-react';

interface FoundersModalProps {
  open: boolean;
  onClose: () => void;
}

const founders = [
  {
    name: 'Jan Grobbe',
    role: 'Oprichter van Releafe',
    description: 'Jan heeft uit eigen ervaring ondervonden hoe ingrijpend mentale uitdagingen kunnen zijn. Met zijn bedrijfskundige achtergrond en strategische blik bouwt hij aan een toekomst waarin mentale gezondheid voor iedereen toegankelijk is.\n\nNa jaren in de bedrijfswereld te hebben gewerkt, realiseerde hij zich dat veel organisaties worstelen met mentale gezondheid van hun medewerkers. Dit inzicht inspireerde hem om Releafe op te richten – een platform dat werkgevers helpt mentale klachten vroegtijdig te signaleren en preventief in te grijpen.\n\nJan is ervan overtuigd dat mentale gezondheid net zo belangrijk is als lichamelijke gezondheid, en dat preventie beter is dan genezen. Met Releafe wil hij een transformatie teweegbrengen in hoe organisaties omgaan met het welzijn van hun medewerkers.',
    image: '/e3a6b3029957d8fb284905d79cafa0317eb3648c-1600x1066.webp',
    linkedin: 'https://www.linkedin.com/in/jan-grobbe-b9158322/'
  },
  {
    name: 'Nynke Dijk',
    role: 'Medeoprichter van Releafe',
    description: 'Nynke\'s betrokkenheid, zakelijke visie en expertise zijn essentieel om Releafe efficiënt en duurzaam te laten groeien.\n\nNynke brengt jaren van ervaring in HR en organisatieontwikkeling mee naar Releafe. Zij begrijpt diepgaand hoe mentale gezondheid direct van invloed is op productiviteit, werksfeer en medewerkerstevredenheid. Met haar scherpe zakelijke inzicht en empathische benadering creëert ze de operationele basis waarmee Releafe kan schalen.\n\nNynke gelooft dat werkgevers een cruciaal rol spelen in het ondersteunen van mentale gezondheid. Met Releafe wil zij organisaties de tools en kennis geven om hun medewerkers echt te ondersteunen – niet als compliance, maar als onderdeel van een gezonde bedrijfscultuur. Haar visie is erop gericht om Releafe tot dé partner van werkgevers te maken in hun streven naar een gezond en productief team.',
    image: '/487324bb79ef4f3080cd56b33bf85ce30855271e-512x492.webp',
    linkedin: 'https://linkedin.com/in/nynkedijk'
  }
];

export default function FoundersModal({ open, onClose }: FoundersModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 max-h-screen overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Ontmoet ons team
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors p-2"
          >
            <X className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-drop-bounce"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Image */}
                <div className="mb-4 sm:mb-6 w-full">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-40 sm:h-56 md:h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1">
                  {founder.name}
                </h3>
                <p className="text-brand-400 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
                  {founder.role}
                </p>
                <div className="text-slate-600 leading-relaxed mb-4 sm:mb-6 space-y-3 sm:space-y-4 text-left text-xs sm:text-sm">
                  {founder.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* LinkedIn Button */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-brand-400 font-semibold transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  LinkedIn profiel
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-slate-200 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-150 shadow-lg shadow-brand-400/20 text-sm sm:text-base"
            >
              Sluit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
