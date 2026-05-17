import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta, seoConfigs } from '../lib/seo';

export default function MentalFitPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta(seoConfigs.mentalFit);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Mentaal fit — Weerbaarheid trainen
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Mentale gezondheid is net als fysieke gezondheid: je kunt er aan trainen. Ontdek hoe je jezelf sterker maakt door regelmatig aandacht te geven aan je mentaal welzijn.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Wat betekent mentaal fit zijn?</h2>
            <p>
              Mentaal fit zijn betekent dat je goed kunt omgaan met de stress en uitdagingen die het leven met zich meebrengt. Het is niet hetzelfde als altijd gelukkig zijn, maar eerder het vermogen om jezelf op te richten en weer door te gaan na moeilijke momenten.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12">De voordelen van mentale fitheid</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Betere omgang met stress en druk</li>
              <li>Meer weerbaarheid tegen tegenslagen</li>
              <li>Grotere focus en productiviteit</li>
              <li>Betere relaties en samenwerking</li>
              <li>Minder uitval door burnout of depressie</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12">Hoe train je mentale fitheid?</h2>
            <p>
              Net zoals je lichaam sterker wordt door regelmatige beweging, wordt je geest sterker door regelmatige aandacht. Dit kunnen zijn:
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li>Reflectie en zelfbewustzijn ontwikkelen</li>
              <li>Stress management technieken oefenen</li>
              <li>Gezonde routines opbouwen</li>
              <li>Sociale contacten onderhouden</li>
              <li>Fysieke activiteit combineren met mentale aandacht</li>
            </ul>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mt-12">
              <p className="text-emerald-900">
                <strong>Met Releafe kun je aan je mentale fitheid werken.</strong> Door regelmatig in te checken met jezelf en je patronen te ontdekken, train je jezelf stap voor stap tot betere mentale gezondheid.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
