import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta } from '../lib/seo';

export default function TermsOfServicePage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta({
      title: 'Algemene Voorwaarden | Releafe',
      description: 'Lees onze algemene voorwaarden voor het gebruik van de Releafe app.',
    });
  }, []);

  return (
    <div className="font-sans antialiased">
      <Navbar onWaitlist={() => setIsWaitlistOpen(true)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Algemene Voorwaarden
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Lees onze voorwaarden voor het gebruik van Releafe en de diensten die wij aanbieden.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 text-slate-700">
            {/* Disclaimer */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-3">Disclaimer</h2>
              <p className="text-red-900 leading-relaxed">
                Releafe biedt via de App ondersteuning op het gebied van mentaal welzijn, maar is geen vervanging voor professionele medische zorg of geestelijke gezondheidszorg. Bij een crisis of noodsituatie dient de gebruiker direct contact op te nemen met een arts of hulpverlener.
              </p>
            </div>

            {/* Artikel 1 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 1 - Definities</h2>
              <div className="space-y-4">
                <p>In deze algemene voorwaarden wordt verstaan onder:</p>
                <ul className="ml-4 space-y-3">
                  <li><strong>App:</strong> De mobiele applicatie Releafe, aangeboden door Releafe Group B.V., die content en functionaliteiten biedt ter bevordering van het mentale welzijn van Gebruikers.</li>
                  <li><strong>Gebruiker:</strong> Iedere natuurlijke persoon die de App installeert, gebruikt en/of zich abonneert.</li>
                  <li><strong>Releafe:</strong> Releafe Group B.V.</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Gegevens</h3>
                <p>Alle informatie die door de Gebruiker wordt ingevoerd in de App, waaronder:</p>

                <h4 className="font-semibold text-slate-900 mt-4">Basisgegevens</h4>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Voornaam, achternaam, e-mailadres, wachtwoord en geboortedatum</li>
                  <li>Adres, postcode, woonplaats</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mt-4">Demografische gegevens</h4>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Geslacht en opleidingsniveau</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mt-4">Gebruikersvoorkeuren</h4>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Het markeren van favoriete audio- of video-oefeningen</li>
                </ul>

                <h4 className="font-semibold text-slate-900 mt-4">Bijzondere persoonsgegevens</h4>
                <p>Daarnaast verwerkt Releafe de volgende bijzondere persoonsgegevens van de gebruiker:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Scores met betrekking tot emotioneel welzijn, waaronder gevoelens, angst, zorgen, stress, slaap, energie en concentratie</li>
                  <li>Open tekstuele antwoorden over onderwerpen zoals zorgen, vermijding, dankbaarheid, trots en vrije notities</li>
                  <li>Informatie over het al dan niet behalen van zelfgestelde persoonlijke doelen</li>
                  <li>Tekstuele notities waarin de gebruiker zorgen beschrijft en opslaat</li>
                  <li>Antwoorden op reflectieve vragen, waaronder perspectieven op zorgen en alternatieve interpretaties</li>
                  <li>Persoonlijke tekst- of audioberichten die de gebruiker aan zichzelf kan richten en opslaan binnen de app</li>
                </ul>
              </div>
            </div>

            {/* Artikel 2 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 2 - Toepasselijkheid</h2>
              <ul className="ml-4 list-disc space-y-3">
                <li>Deze algemene voorwaarden zijn van toepassing op alle diensten en producten die door Releafe worden aangeboden via de App.</li>
                <li>Door gebruik te maken van de App gaat de Gebruiker akkoord met deze algemene voorwaarden.</li>
                <li>Door gebruik te maken van de Releafe-app bevestigt de Gebruiker dat hij/zij niet in een crisissituatie bevindt of een bedreiging vormt voor zichzelf of anderen.</li>
              </ul>
            </div>

            {/* Artikel 3 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 3 - Gebruik van de App</h2>
              <ul className="ml-4 list-disc space-y-3">
                <li>De App is bedoeld voor gebruikers van 16 jaar en ouder. Gebruikers jonger dan 16 jaar mogen de App alleen gebruiken indien dit uitdrukkelijk door Releafe is toegestaan en met toestemming van een ouder of wettelijke vertegenwoordiger.</li>
                <li>De Gebruiker is verantwoordelijk voor het vertrouwelijk houden van inloggegevens en voor alle activiteiten die plaatsvinden onder zijn/haar account.</li>
                <li>Het is niet toegestaan de App te gebruiken op een manier die inbreuk maakt op rechten van Releafe en/of derden of die anderszins onrechtmatig is.</li>
              </ul>
            </div>

            {/* Artikel 4 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 4 - Beëindiging Account</h2>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">4.1 Beëindiging</h3>
              <ul className="ml-4 list-disc space-y-3">
                <li>Releafe behoudt zich het recht voor om het account van de Gebruiker te beëindigen bij overtreding van deze algemene voorwaarden of bij misbruik van de App.</li>
                <li>Releafe zal de Gebruiker daarover schriftelijk informeren.</li>
              </ul>
            </div>

            {/* Artikel 5 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 5 - Verplichtingen van de Gebruiker</h2>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">5.1 Accountverantwoordelijkheid</h3>
              <p>De Gebruiker is verantwoordelijk voor het vertrouwelijk houden van accountgegevens en voor alle activiteiten die onder zijn/haar account plaatsvinden.</p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">5.2 Verboden Activiteiten</h3>
              <p>De Gebruiker stemt ermee in de App niet te gebruiken voor illegale, ongeautoriseerde of schadelijke doeleinden, waaronder:</p>
              <ul className="ml-4 list-disc space-y-2 mt-2">
                <li>Inbreuk op toepasselijke wet- en regelgeving</li>
                <li>Pogingen om ongeautoriseerde toegang te verkrijgen tot de App of bijbehorende systemen</li>
                <li>Het delen of herdistribueren van content uit de App zonder toestemming</li>
                <li>Inbreuk maken op intellectuele eigendomsrechten</li>
                <li>Het verspreiden van content die discriminerend, misleidend, obsceen of schadelijk is</li>
              </ul>
            </div>

            {/* Artikel 6 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 6 - Intellectueel Eigendom</h2>
              <ul className="ml-4 list-disc space-y-3">
                <li>Alle content, functies en functionaliteit van de App, inclusief software, tekst, grafische elementen, logo's en handelsmerken, zijn het exclusieve eigendom van Releafe of haar licentiegevers en worden beschermd door intellectuele eigendomswetten.</li>
                <li>Het is de Gebruiker niet toegestaan de App of de content te kopiëren, te wijzigen, te distribueren, te verkopen of te verhuren zonder voorafgaande schriftelijke toestemming van Releafe.</li>
              </ul>
            </div>

            {/* Artikel 7 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 7 - Privacy, Verwerking en Delen van Gegevens</h2>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">7.1 Gegevensverwerking</h3>
              <ul className="ml-4 list-disc space-y-3">
                <li>Releafe verwerkt de gegevens die de Gebruiker invoert in de App in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG). Meer informatie hierover is te vinden in de Privacyverklaring.</li>
                <li>Deze gegevens worden primair gebruikt om de functionaliteit van de App te faciliteren en de gebruikerservaring te verbeteren.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">7.2 Geanonimiseerde Gegevens</h3>
              <ul className="ml-4 list-disc space-y-3">
                <li>Releafe kan ingevoerde gegevens geanonimiseerd en op groepsniveau verwerken voor statistische analyses, productverbeteringen en rapportages aan samenwerkingspartners.</li>
                <li>Anonimisering betekent dat de gegevens zodanig worden bewerkt dat deze permanent niet langer herleidbaar zijn tot een individuele gebruiker.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">7.3 Delen van Gegevens</h3>
              <ul className="ml-4 list-disc space-y-3">
                <li>Geanonimiseerde gegevens kunnen worden gedeeld met externe partijen, zoals zakelijke klanten en onderzoeksinstellingen, voor rapportagedoeleinden en om inzicht te krijgen in trends rondom mentaal welzijn.</li>
                <li>Er worden geen persoonsgegevens gedeeld die herleidbaar zijn tot een individuele gebruiker, tenzij hiervoor uitdrukkelijke toestemming van de betreffende gebruiker is verkregen.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">7.4 Recht van Inzage en Bezwaar</h3>
              <p>De Gebruiker heeft te allen tijde het recht om inzicht te krijgen in de gegevens die door Releafe worden verwerkt en kan schriftelijk bij Releafe bezwaar maken tegen de verwerking van zijn/haar gegevens, mits dit niet in strijd is met wettelijke verplichtingen of legitieme belangen van Releafe.</p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">7.5 Veiligheid en Bescherming</h3>
              <p>Releafe neemt passende technische en organisatorische maatregelen om de gegevens van Gebruikers te beveiligen tegen verlies, misbruik en ongeoorloofde toegang door derden.</p>
            </div>

            {/* Artikel 8 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 8 - Cookies</h2>
              <div className="space-y-4">
                <p>Releafe maakt gebruik van cookies en vergelijkbare technieken op de app en de website om de gebruikerservaring te verbeteren, het gebruik te analyseren en bepaalde functionaliteiten mogelijk te maken.</p>

                <p>We gebruiken de volgende typen cookies:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li><strong>Functionele cookies:</strong> Noodzakelijk voor de basisfunctionaliteit, zoals inloggegevens en voorkeuren</li>
                  <li><strong>Analytische cookies:</strong> Helpen ons je gedrag te begrijpen om de app te verbeteren, met geanonimiseerde gegevens</li>
                  <li><strong>Marketing cookies:</strong> Helpen ons relevante content te tonen die aansluit bij je interesses</li>
                </ul>

                <p className="mt-4">Functionele cookies zijn altijd nodig. Analytische en marketing cookies hebben je toestemming nodig. Je kunt je cookie-instellingen op elk moment aanpassen via de cookie-banner of door contact op te nemen met ons.</p>
              </div>
            </div>

            {/* Artikel 9 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 9 - Beperking van Aansprakelijkheid</h2>
              <ul className="ml-4 list-disc space-y-3">
                <li>Releafe streeft ernaar de App en de content up-to-date en functioneel te houden, maar geeft geen garanties met betrekking tot de volledigheid, nauwkeurigheid of beschikbaarheid daarvan.</li>
                <li>Releafe streeft naar continue beschikbaarheid van de App, maar kan niet garanderen dat alle diensten te allen tijde beschikbaar zijn. Onderbrekingen kunnen voorkomen vanwege onderhoud, technische storingen of andere omstandigheden.</li>
                <li>Releafe is niet aansprakelijk voor enige directe, indirecte of gevolgschade die voortvloeit uit het gebruik van de App, tenzij sprake is van opzet of grove schuld van de zijde van Releafe.</li>
                <li>Informatie of suggesties aangeboden via de App zijn uitsluitend bedoeld ter ondersteuning van mentaal welzijn van de gebruikers en vormen geen vervanging voor professioneel medisch advies, diagnose of behandeling.</li>
              </ul>
            </div>

            {/* Artikel 10 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 10 - Wijzigingen</h2>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">10.1 Wijzigingen van Voorwaarden</h3>
              <p>Releafe behoudt zich het recht voor deze algemene voorwaarden op elk moment te wijzigen. Wijzigingen worden onmiddellijk van kracht na publicatie in de App. Voortgezet gebruik van de App na wijzigingen impliceert acceptatie van de herziene voorwaarden.</p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">10.2 Wijzigingen van de App</h3>
              <p>Releafe behoudt zich het recht voor om functionaliteiten van en content in de App of aangeboden diensten op elk moment te wijzigen of te beëindigen.</p>
            </div>

            {/* Artikel 11 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 11 - Toepasselijk Recht en Geschillen</h2>
              <ul className="ml-4 list-disc space-y-3">
                <li>Op deze algemene voorwaarden is Nederlands recht van toepassing.</li>
                <li>Geschillen die voortvloeien uit of verband houden met deze algemene voorwaarden zullen worden voorgelegd aan de bevoegde rechter in het arrondissement waar Releafe is gevestigd, te weten de rechtbank Noord-Nederland, locatie Groningen.</li>
              </ul>
            </div>

            {/* Artikel 12 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 12 - Toekomstige Uitbreiding van de Dienstverlening</h2>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">12.1 Aanvullende Functionaliteiten</h3>
              <p>Releafe kan haar dienstverlening in de toekomst uitbreiden met aanvullende functionaliteiten, producten of diensten, zoals een online dashboard, organisatieportaal of rapportagefunctionaliteiten voor organisaties.</p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3 mt-6">12.2 Aanvullende Voorwaarden</h3>
              <p>Voor zover deze aanvullende functionaliteiten, producten of diensten beschikbaar worden gesteld, kunnen daarop aanvullende of afwijkende voorwaarden van toepassing zijn. Releafe zal deze voorwaarden voorafgaand aan het gebruik van de betreffende aanvullende dienst beschikbaar stellen.</p>
            </div>

            {/* Artikel 13 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Artikel 13 - Contactgegevens</h2>
              <p>Voor vragen of opmerkingen met betrekking tot deze algemene voorwaarden kunt u contact met ons opnemen via <a href="mailto:info@releafe.nl" className="text-blue-600 hover:underline font-semibold">info@releafe.nl</a></p>
            </div>

            {/* Contact Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-12">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Vragen over onze voorwaarden?</h3>
              <p className="text-blue-900">
                Neem contact op met ons via <a href="mailto:info@releafe.nl" className="font-semibold hover:underline">info@releafe.nl</a>
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
