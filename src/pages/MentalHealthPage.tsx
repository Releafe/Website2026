import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta, seoConfigs } from '../lib/seo';

export default function MentalHealthPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta(seoConfigs.mentalHealth);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Mentale klachten herkennen
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Het herkennen van mentale klachten is de eerste stap naar hulp. Leer de signalen kennen en ontdek wanneer het tijd is om professionele ondersteuning in te schakelen.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">Veel voorkomende mentale klachten</h2>
            <p>
              Mentale klachten zijn meer gebruikelijk dan je denkt. Ze kunnen variëren van lichte tot ernstige symptomen die je dagelijks leven beïnvloeden.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8">Stress en werkdruk</h3>
            <p>
              Een normale reactie op uitdagingen, maar langdurige stress kan leiden tot fysieke en mentale uitputting. Signalen zijn: slapeloosheid, concentratieproblemen, prikkelbaarhheid en vermoeidheid.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8">Angst</h3>
            <p>
              Angst kan zich uiten in paniekgevoelens, onrust of voorbeeldige zorgen over alles. Het kan je beperken in je dagelijks leven en social interactions.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8">Depressie</h3>
            <p>
              Depressie is meer dan verdriet. Het gaat gepaard met gevoelens van hopelessness, verlies van interesse in activiteiten, veranderingen in slaap en eetlust, en moeheid.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8">Burnout</h3>
            <p>
              Langdurige overbelasting leidt tot burnout: totale vermoeidheid, cynisme over werk, en verminderde prestatie. Het vereist vaak professionele hulp om te herstellen.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12">Wanneer moet je hulp zoeken?</h2>
            <p>
              Het is belangrijk om professionele hulp in te schakelen wanneer:
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>Symptomen langer dan twee weken aanhouden</li>
              <li>Ze je dagelijks functioneren beïnvloeden</li>
              <li>Je jezelf schuldig voelt of suïcidale gedachten hebt</li>
              <li>Je niet meer plezier voelt in activiteiten die je normaal graag doet</li>
              <li>Je zelfmedicatie gaat gebruiken (alcohol, drugs)</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12">Hoe helpt Releafe?</h2>
            <p>
              Releafe helpt je mentale klachten vroegtijdig op te vangen door regelmatige check-ins. Dit geeft je:
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li>Inzicht in je patronen en triggers</li>
              <li>Vroegtijdig herkenning van problemen</li>
              <li>Praktische oefeningen voor beter welzijn</li>
              <li>Anoniem en veilig omgeving om jezelf uit te drukken</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-12">
              <p className="text-blue-900">
                <strong>Je bent niet alleen.</strong> Veel mensen worstelen met mentale klachten. Door ze vroegtijdig te herkennen en professionele hulp in te schakelen, kun je sterker uit deze periode komen.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12">Contactgegevens voor hulp</h2>
            <p className="text-slate-600">
              <strong>In crisis?</strong> Bel 112 of neem contact op met een hulporganisatie zoals:
            </p>
            <ul className="space-y-2 list-disc list-inside text-slate-600">
              <li><strong>Telefoonnummer Zelfmoordpreventie:</strong> 0900-0113</li>
              <li><strong>GGZ Nederland:</strong> www.ggznederland.nl</li>
              <li><strong>Thuisarts:</strong> Eerste contactpunt voor mentale gezondheid</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />

      <WaitlistModal open={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
