import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  mode?: 'waitlist' | 'demo';
}

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const MAILERLITE_FORM_URL =
  'https://assets.mailerlite.com/jsonp/1405414/forms/187562848368461057/subscribe';

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!emailRegex.test(email)) {
      setErrorMessage('Vul een geldig e-mailadres in.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('fields[email]', email);
      formData.append('ml-submit', '1');
      formData.append('anticsrf', 'true');

      // MailerLite-Endpunkt unterstützt kein CORS für unsere Origin —
      // wir senden mit no-cors. Response ist dann zwar opaque, aber der
      // POST kommt sicher an. Bei Netzwerkfehler fliegt fetch in catch.
      await fetch(MAILERLITE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // Erfolg: Modal schließen und zur Confirmation-Page weiterleiten
      setEmail('');
      onClose();
      navigate('/wachtlijst');
    } catch (err) {
      console.error('Waitlist submit error:', err);
      setErrorMessage('Er ging iets mis. Probeer het later opnieuw.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setErrorMessage(null);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-10 text-slate-400 hover:text-slate-700 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all"
          aria-label="Sluiten"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto max-h-[90vh] p-8 sm:p-12">
          <div className="flex flex-col gap-y-8">
            {/* Hauptüberschrift */}
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-slate-900">
              Releafe gaat live voor organisaties!
            </h2>

            {/* Beschreibungstext */}
            <p className="text-base xl:text-lg font-light text-slate-700">
              Wil je op de hoogte blijven van updates en de lancering voor
              organisaties? Laat hier je e-mailadres achter.
            </p>

            {/* Wartelisten-Formular */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl xl:text-2xl text-slate-900">
                📩 Kom op de wachtlijst:
              </h3>

              <form
                className="flex flex-col items-center lg:flex-row gap-x-2 gap-y-3 w-full"
                onSubmit={handleSubmit}
              >
                <input
                  className="rounded-full bg-gray-100 w-full lg:w-2/3 text-base xl:text-lg h-[50px] xl:h-[60px] px-6 outline-none focus:ring-2 focus:ring-[#8fa58b] transition-all"
                  type="email"
                  placeholder="email@example.com"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full lg:w-[20rem] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transition duration-300 ease-in-out font-bold text-white text-base xl:text-lg leading-none disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out hover:opacity-15"></span>
                  <p className="relative z-10 pointer-events-none">
                    {isSubmitting ? 'Bezig...' : 'Meld je aan'}
                  </p>
                </button>
              </form>
              {errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
              <p className="text-xs text-slate-500 leading-relaxed">
                Door je aan te melden geef je ons toestemming om je per e-mail te informeren over Releafe. We verwerken je gegevens volgens onze{' '}
                <Link
                  to="/privacy"
                  onClick={handleClose}
                  className="underline hover:text-slate-700 transition-colors"
                >
                  privacyverklaring
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
