import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

type CookiePreferences = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_PREFERENCES_KEY = 'releafe_cookie_preferences';
const COOKIE_BANNER_DISMISSED_KEY = 'releafe_cookie_banner_dismissed';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const dismissed = localStorage.getItem(COOKIE_BANNER_DISMISSED_KEY);
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

    if (!dismissed) {
      setShowBanner(true);
    }

    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    localStorage.setItem(COOKIE_BANNER_DISMISSED_KEY, 'true');
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Apply cookie preferences (in a real app, you'd enable/disable tracking scripts here)
    if (prefs.analytics) {
      // Initialize analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing tracking
      console.log('Marketing tracking enabled');
    }
  };

  const acceptAll = () => {
    saveCookiePreferences({
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveCookiePreferences({
      functional: true,
      analytics: false,
      marketing: false,
    });
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'functional') return; // Functional cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  if (!showBanner) return null;

  if (showSettings) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end lg:items-center justify-center">
        <div className="bg-white rounded-t-3xl lg:rounded-3xl w-full lg:max-w-2xl p-8 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Cookie-instellingen</h2>
            <button
              onClick={() => setShowSettings(false)}
              className="text-slate-400 hover:text-slate-600 transition"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-slate-600 mb-8">
            We gebruiken cookies om je ervaring te verbeteren. Kies hieronder welke cookies je wilt toestaan.
          </p>

          <div className="space-y-6 mb-8">
            {/* Functional Cookies */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900">Functionele Cookies</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Noodzakelijk voor de basisfunctionaliteit van de app en website, zoals inloggegevens en voorkeuren.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  disabled
                  className="mt-1 w-5 h-5 rounded accent-blue-600"
                />
              </div>
              <p className="text-xs text-slate-500">Altijd ingeschakeld</p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900">Analytische Cookies</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Helpen ons te begrijpen hoe je de app gebruikt zodat we deze kunnen verbeteren. We gebruiken geanonimiseerde gegevens.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                  className="mt-1 w-5 h-5 rounded accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900">Marketing Cookies</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Gebruiken we om relevante inhoud en advertenties aan te bieden die aansluiten bij je interesses.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                  className="mt-1 w-5 h-5 rounded accent-blue-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 mb-8">
            <p className="text-sm text-slate-600">
              Voor meer informatie, lees onze <a href="/privacy" className="text-blue-600 hover:underline font-semibold">privacyverklaring</a> en <a href="/terms" className="text-blue-600 hover:underline font-semibold">algemene voorwaarden</a>.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={rejectAll}
              className="flex-1 px-6 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition"
            >
              Alles weigeren
            </button>
            <button
              onClick={() => saveCookiePreferences(preferences)}
              className="flex-1 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Instellingen opslaan
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-6 shadow-2xl z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">We gebruiken cookies</h3>
            <p className="text-slate-300 text-sm">
              We gebruiken cookies voor functionaliteit, analyses en marketing. Lees meer in onze <a href="/privacy" className="underline hover:text-white">privacyverklaring</a>.
            </p>
          </div>

          <div className="flex gap-3 flex-col sm:flex-row">
            <button
              onClick={rejectAll}
              className="px-6 py-2 rounded-lg border border-slate-400 text-white font-medium hover:bg-slate-800 transition whitespace-nowrap"
            >
              Weigeren
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="px-6 py-2 rounded-lg border border-slate-400 text-white font-medium hover:bg-slate-800 transition whitespace-nowrap"
            >
              Instellingen
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition whitespace-nowrap"
            >
              Alles accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
