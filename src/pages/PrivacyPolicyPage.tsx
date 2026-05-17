import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { updatePageMeta } from '../lib/seo';

export default function PrivacyPolicyPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    updatePageMeta({
      title: 'Privacyverklaring | Releafe',
      description: 'Lees onze privacyverklaring om te begrijpen hoe Releafe je persoonsgegevens beschermt.',
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
              Privacyverklaring
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Releafe stelt deze privacyverklaring op om inzicht te geven in het gebruik van persoonsgegevens op Releafe.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 text-slate-700">
            {/* Header Info */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacyverklaring Releafe Group BV</h2>
              <p className="mb-2"><strong>Versiedatum:</strong> 2026-05</p>
              <p className="mb-4">Releafe Group B.V. (hierna: "Releafe") is de verantwoordelijke voor de persoonsgegevensverwerking, zoals omschreven in deze privacyverklaring.</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Contactgegevens</h3>
              <ul className="space-y-2">
                <li><strong>Adres:</strong> Eyckstraat 1, 9731 PA te Groningen</li>
                <li><strong>E-mailadres:</strong> privacy@releafe.nl</li>
                <li><strong>KvK-nummer:</strong> 42010211</li>
              </ul>
            </div>

            {/* Table of Contents */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Inhoud</h2>
              <ol className="space-y-2 ml-4 list-decimal text-slate-700">
                <li>Algemeen</li>
                <li>Welke gegevens worden verwerkt</li>
                <li>Doel van de verwerking van de gegevens</li>
                <li>Ontvangers van de persoonsgegevens</li>
                <li>Bewaartermijn van de gegevens</li>
                <li>Rechten van de gebruikers</li>
                <li>Beveiliging van persoonsgegevens</li>
                <li>Gebruik van cookies</li>
                <li>Wijzigingen in de privacyverklaring</li>
              </ol>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Algemeen</h2>
              <div className="space-y-4">
                <p>Releafe stelt deze privacyverklaring op om inzicht te geven in het gebruik van persoonsgegevens op Releafe (hierna: "de app of de website"), en alle aan de app of de website gerelateerde domeinen.</p>

                <p>Onder persoonsgegevens worden alle gegevens verstaan waarmee een individu geïdentificeerd kan worden, zoals de naam, het klantnummer en de persoonlijke contactgegevens. Gegevens die op zichzelf niet persoonlijk zijn, maar in combinatie met andere gegevens wel tot identificatie van de gebruiker leiden, gelden eveneens als persoonsgegevens.</p>

                <p>Deze privacyverklaring is van toepassing op iedereen die de Releafe-app gebruikt, de website van Releafe bezoekt, zich inschrijft voor een wachtlijst of nieuwsbrief, contact opneemt met Releafe of op andere wijze gebruikmaakt van de diensten van Releafe (hierna: "de gebruiker").</p>

                <p>Releafe verbindt zich ertoe de Verordening (EU) 2016/679 van het Europees Parlement en de Raad van 27 april 2016 betreffende de bescherming van natuurlijke personen in verband met de verwerking van persoonsgegevens (de Algemene verordening gegevensbescherming) en de Uitvoeringswet Algemene verordening gegevensbescherming in acht te nemen.</p>

                <p>Releafe draagt zorg voor passende maatregelen ter bescherming van de verzamelde en verwerkte persoonsgegevens.</p>

                <p>Releafe werkt aan aanvullende dienstverlening voor organisaties, zoals een online dashboard of portaal. Zodra deze functionaliteiten beschikbaar worden gesteld, zal Releafe deze privacyverklaring waar nodig aanvullen met informatie over de daarbij behorende verwerkingen.</p>

                <p>Bij vragen over deze privacyverklaring, andere privacy gerelateerde vragen of vragen met betrekking tot het uitoefenen van de rechten van de gebruiker op grond van de AVG, kan contact worden opgenomen via privacy@releafe.nl</p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Welke gegevens worden verwerkt</h2>
              <div className="space-y-4">
                <p>Bij het gebruik van de app, de website, contactformulieren, wachtlijst, e-mailcommunicatie of andere diensten van Releafe kunnen de volgende persoonsgegevens worden verzameld en verwerkt:</p>

                <h3 className="text-lg font-semibold text-slate-900">Basisgegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Voornaam, achternaam, e-mailadres, wachtwoord, geboortedatum, adres, postcode, woonplaats en gebruikers-ID of klantnummer</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Demografische gegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Geslacht en opleidingsniveau</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Gebruikersvoorkeuren</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Het markeren van favoriete audio- of video-oefeningen</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Organisatie- en contactgegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Organisatienaam, functie of rol binnen de organisatie, telefoonnummer indien zelf ingevuld, interessegebied en de inhoud van contactverzoeken, formulierinzendingen of andere communicatie met Releafe</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Abonnements- en betalingsgegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Abonnementsstatus, type abonnement, startdatum en einddatum van het abonnement, factuurnummer, factuurdatum, bedrag van de factuur, betaalstatus, datum van betaling, eventuele btw-informatie en gebruikers-ID of klantnummer</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Inschrijvingsgegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Datum en tijdstip van inschrijving, gegeven toestemming, e-mailvoorkeuren en afmeldstatus</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900">Technische en gebruiksgegevens</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>IP-adres, apparaat- en browsergegevens, cookievoorkeuren en, voor zover van toepassing, gegevens over e-mailinteractie zoals openen en klikken</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Bijzondere persoonsgegevens</h3>
                <p>Daarnaast verwerkt Releafe de volgende bijzondere persoonsgegevens van de gebruiker:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Scores met betrekking tot emotioneel welzijn, waaronder gevoelens, angst, zorgen, stress, slaap, energie en concentratie</li>
                  <li>Open tekstuele antwoorden over onderwerpen zoals zorgen, vermijding, dankbaarheid, trots en vrije notities</li>
                  <li>Informatie over het al dan niet behalen van zelf gestelde persoonlijke doelen</li>
                  <li>Tekstuele notities waarin de gebruiker zorgen beschrijft en opslaat</li>
                  <li>Antwoorden op reflectieve vragen, waaronder perspectieven op zorgen en alternatieve interpretaties</li>
                  <li>Persoonlijke tekst- of audioberichten die de gebruiker aan zichzelf kan richten en opslaan binnen de app</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Doel van de verwerking van de gegevens</h2>
              <div className="space-y-4">
                <p>Met inachtneming van de privacywetgeving, worden de persoonsgegevens van de gebruikers uitsluitend gebruikt voor de volgende doeleinden:</p>

                <h3 className="text-lg font-semibold text-slate-900">Gebruik van de app</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Het aanmaken van een account, faciliteren van inlogfunctionaliteit, en het personaliseren van de app-ervaring. Tevens worden gegevens geanonimiseerd en geaggregeerd ingezet voor data-analyses en segmentatie</li>
                  <li>Het bieden van inzicht in mentale gezondheid en zelfmonitoring, waarbij gegevens geanonimiseerd en geaggregeerd gebruikt kunnen worden voor visualisaties en segmentatie binnen data-analyses</li>
                  <li>Het ondersteunen van mentale ontlading en het bevorderen van zelfreflectie</li>
                  <li>Het bieden van mentale ondersteuning en het faciliteren van cognitieve herstructurering</li>
                  <li>Het bevorderen van zelfreflectie en het bieden van ondersteuning tijdens moeilijke momenten</li>
                  <li>Het verder personaliseren van de app-omgeving op basis van gebruikersvoorkeuren</li>
                  <li>Het aanbieden van abonnementen en de afhandeling van betalingen</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Grondslagen volgens artikel 6 AVG</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Toestemming van de gebruiker (art. 6 lid 1 sub a AVG). Deze toestemming kan te allen tijde worden ingetrokken</li>
                  <li>Uitvoering van een overeenkomst met de gebruiker (art. 6 lid 1 sub b AVG)</li>
                </ul>

                <p className="mt-4">Voor zover Releafe bijzondere persoonsgegevens verwerkt, zoals gegevens over mentaal welzijn, gebeurt dit op basis van uitdrukkelijke toestemming van de gebruiker.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Website, wachtlijst en e-mailmarketing</h3>
                <p>Voor website, wachtlijst en e-mailmarketing verwerkt Releafe persoonsgegevens voor de volgende doeleinden:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Het beantwoorden van vragen en contactverzoeken</li>
                  <li>Het registreren van geïnteresseerden op een wachtlijst</li>
                  <li>Het informeren van geïnteresseerden over Releafe, de app, het toekomstige dashboard, pilots, updates, relevante inzichten en aanbiedingen</li>
                  <li>Het beheren van e-mailvoorkeuren en afmeldingen</li>
                  <li>Het analyseren en verbeteren van de website, formulieren en e-mailcommunicatie</li>
                  <li>Het voorbereiden en opvolgen van mogelijke samenwerkingen of zakelijke aanvragen</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Ontvangers van de persoonsgegevens</h2>
              <div className="space-y-4">
                <p>Persoonsgegevens kunnen door Releafe worden verstrekt aan derden, indien dit verenigbaar is met het in deze privacyverklaring genoemde doel waarvoor de gegevens zijn verzameld. De gegevens kunnen in opdracht van Releafe worden doorgegeven aan de volgende ontvangers:</p>

                <ul className="ml-4 list-disc space-y-2">
                  <li>Hostingpartijen en cloudleveranciers voor opslag en werking van de app en website</li>
                  <li>Leveranciers van e-mailmarketingsoftware, voor het verzenden en beheren van nieuwsbrieven en e-mailcampagnes</li>
                  <li>Leveranciers van formulieren of enquêtetools, voor het verwerken van inschrijvingen, contactformulieren en feedback</li>
                  <li>IT- en beveiligingsleveranciers</li>
                  <li>Administratieve of financiële dienstverleners, voor zover noodzakelijk voor betalingen, facturatie of boekhouding</li>
                  <li>Ontwikkel- en onderhoudspartijen die Releafe ondersteunen bij de app, website of technische infrastructuur</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Specifieke verwerkers en dienstverleners</h3>
                <p>Releafe maakt op de website concreet gebruik van de volgende verwerkers en dienstverleners:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li><strong>MailerLite</strong> (UAB MailerLite, Vilnius, Litouwen — EU): voor het beheren van de wachtlijst en het verzenden van nieuwsbrieven en e-mailcommunicatie.</li>
                  <li><strong>Google Analytics</strong> (Google Ireland Ltd., Dublin, Ierland): voor het meten en analyseren van geanonimiseerd websitegebruik, uitsluitend wanneer de gebruiker hiervoor toestemming geeft via de cookie-banner.</li>
                  <li><strong>Picky Assist</strong> (WhatsApp-contactwidget): voor het faciliteren van rechtstreeks WhatsApp-contact. Bij interactie met de widget worden gegevens uitgewisseld met Meta Platforms Ireland Ltd. volgens hun eigen privacybeleid.</li>
                  <li><strong>Vercel Inc.</strong> (San Francisco, Verenigde Staten): voor het hosten van de website. Gegevens kunnen worden doorgegeven naar de Verenigde Staten op grond van het EU-VS Data Privacy Framework, waaraan Vercel deelneemt.</li>
                </ul>

                <p className="mt-4">Persoonsgegevens worden enkel verstrekt voor de periode en omvang die noodzakelijk is voor de uitvoering van de door Releafe gegeven opdracht aan de ontvangers.</p>

                <p>In alle gevallen van verstrekking van persoonsgegevens aan derden, draagt Releafe er zorg voor dat de gegevens enkel voor de beoogde doeleinden worden gebruikt en overeenkomstig het wettelijk verzekerde beschermingsniveau worden bewaard.</p>

                <p><strong>Releafe verkoopt de gegevens van de gebruiker nooit voor commerciële doeleinden.</strong></p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Verwerkersovereenkomsten</h3>
                <p>Releafe sluit met alle externe partijen die persoonsgegevens verwerken in haar opdracht een verwerkersovereenkomst. Hierin worden duidelijke afspraken vastgelegd over onder meer beveiliging, vertrouwelijkheid en het doel van de verwerking.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Geanonimiseerde gegevens</h3>
                <p>Releafe kan gegevens die in de app worden ingevoerd geanonimiseerd en geaggregeerd verwerken voor statistische analyses, productverbetering, onderzoek en toekomstige rapportagefunctionaliteiten. Geanonimiseerde gegevens zijn gegevens die niet meer herleidbaar zijn tot een individuele gebruiker.</p>

                <p className="mt-4"><strong>Releafe deelt geen individuele appgegevens, dagboekgegevens, zorgen, doelen, reflecties of berichten aan zichzelf met werkgevers, organisaties of andere externe partijen, tenzij de gebruiker daarvoor uitdrukkelijk toestemming heeft gegeven of Releafe daartoe wettelijk verplicht is.</strong></p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Bewaartermijn van de gegevens</h2>
              <div className="space-y-4">
                <p>De persoonsgegevens worden door Releafe niet langer gebruikt of opgeslagen dan noodzakelijk is voor het bereiken van de doelstellingen waarvoor de gegevens worden verzameld overeenkomstig deze privacyverklaring.</p>

                <h3 className="text-lg font-semibold text-slate-900">App-gegevens</h3>
                <p>De bewaartermijn is in ieder geval niet langer dan: tot 1 jaar na beëindiging van het account.</p>

                <p>Scores met betrekking tot emotioneel welzijn, waaronder gevoelens, angst, zorgen, stress, slaap, energie en concentratie, worden na beëindiging van het account geanonimiseerd (permanent niet meer te herleiden naar een specifiek persoon) en voor onbepaalde tijd bewaard voor statistische doeleinden.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Website, contactverzoeken, wachtlijst en e-mailmarketing</h3>
                <p>Gegevens die worden verwerkt naar aanleiding van een contactverzoek worden bewaard zolang dit nodig is voor de beantwoording en opvolging van het verzoek, en daarna maximaal 2 jaar, tenzij een langere bewaartermijn noodzakelijk is vanwege een bestaande klantreleatie, overeenkomst of wettelijke verplichting.</p>

                <p>Gegevens van personen die zich inschrijven voor een wachtlijst, nieuwsbrief of e-mailmarketing worden bewaard totdat de betrokkene zich afmeldt of zijn/haar toestemming intrekt. Na afmelding kan Releafe het e-mailadres nog beperkt bewaren op een afmeldlijst, uitsluitend om te voorkomen dat de betrokkene opnieuw ongewenste e-mails ontvangt.</p>

                <p>Na de hierboven beschreven periode worden de persoonsgegevens geanonimiseerd of vernietigd.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Rechten van de gebruikers</h2>
              <div className="space-y-4">
                <p>De gebruiker van de app of de website kan op ieder moment zijn rechten uitoefenen ten aanzien van Releafe.</p>

                <p>De gebruiker kan zijn verzoek tot de uitoefening van één of meer van zijn rechten kenbaar maken aan Releafe middels één van de in deze privacyverklaring genoemde contactgegevens van Releafe.</p>

                <p>Releafe geeft gehoor aan het verzoek van de gebruiker, tenzij het verzoek ongegrond of buitensporig is.</p>

                <p>Releafe geeft uiterlijk binnen een maand na het verzoek reactie op het verzoek van de gebruiker, ook wanneer er geen gehoor wordt gegeven aan het verzoek. De reactie op het verzoek dient duidelijk te zijn voor de gebruiker, en dient schriftelijk of via andere (elektronische) middelen te worden verstrekt aan de gebruiker.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht op informatie over de verwerkingen</h3>
                <p>De gebruiker van de app of de website heeft het recht op een duidelijke en transparante uitleg over de gegevensverwerking.</p>

                <p>Middels deze privacyverklaring verstrekt Releafe informatie over de bron van de gegevens, de gegevensontvanger(s), de doelstellingen, noodzakelijkheid en grondslag van de gegevensverwerking, de waarborgen voor gegevensbescherming, de bewaartermijn, de contactgegevens voor klachten, en de rechten van de gebruiker.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht van inzage</h3>
                <p>De gebruiker van de app of de website heeft het recht om, met redelijke tussenpozen, zijn persoonsgegevens die zijn verzameld in te zien.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht op rectificatie</h3>
                <p>De gebruiker van de app of de website heeft het recht om zijn persoonsgegevens te corrigeren of aan te vullen indien deze niet accuraat zijn. Indien de gebruiker niet de mogelijkheid heeft om zijn persoonsgegevens zelf te corrigeren of aan te vullen, kan de gebruiker Releafe opdragen zijn persoonsgegevens te corrigeren of aan te vullen.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht op gegevenswissing</h3>
                <p>De gebruiker van de app of de website heeft het recht om zijn verzamelde persoonsgegevens door Releafe te laten wissen, indien sprake is van één van de in artikel 17, lid 1 van de Algemene verordening gegevensbescherming genoemde situaties.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht op beperking van de verwerking</h3>
                <p>De gebruiker van de app of de website heeft het recht om de verwerking van zijn persoonsgegevens te laten beperken in een aantal wettelijk bepaalde situaties, zoals opgenomen in artikel 18, lid 1 van de Algemene verordening gegevensbescherming.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht op overdraagbaarheid van gegevens</h3>
                <p>De gebruiker van de app of de website heeft het recht om zijn persoonsgegevens te verkrijgen van Releafe in een gestructureerde, gangbare en machineleesbare vorm en door te geven aan een andere verwerkingsverantwoordelijke, zonder dat Releafe hem hierbij hindert, indien sprake is van één van de in artikel 20, lid 1 van de Algemene verordening gegevensbescherming genoemde situaties.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Recht van bezwaar</h3>
                <p>De gebruiker van de app of de website heeft te allen tijde het recht om bezwaar te maken, vanwege zijn specifieke situatie, tegen de verwerking van zijn persoonsgegevens door Releafe.</p>

                <p>Bij verwerking van de persoonsgegevens voor direct marketing doeleinden, heeft de gebruiker te allen tijde het recht om bezwaar te maken tegen de verwerking van zijn persoonsgegevens. Indien de gebruiker bezwaar maakt tegen gegevensverwerking ten behoeve van direct marketing, worden de gegevens niet langer voor deze doeleinden verwerkt.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Klachtrecht</h3>
                <p>De gebruiker van de app of de website heeft het recht om een klacht in te dienen met betrekking tot de verwerking van zijn persoonsgegevens door Releafe bij de Autoriteit Persoonsgegevens.</p>

                <p>De Autoriteit Persoonsgegevens is in Nederland aangesteld voor het houden van toezicht op persoonsgegevensverwerking. Informatie met betrekking tot de Autoriteit Persoonsgegevens kan gevonden worden op: <a href="https://autoriteitpersoonsgegevens.nl" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://autoriteitpersoonsgegevens.nl</a></p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Beveiliging van persoonsgegevens</h2>
              <div className="space-y-4">
                <p>Releafe neemt passende technische en organisatorische maatregelen om de persoonsgegevens van gebruikers te beveiligen tegen verlies, misbruik, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging. Deze maatregelen omvatten onder meer:</p>

                <ul className="ml-4 list-disc space-y-2">
                  <li>Versleuteling van gegevens waar passend (bijv. tijdens opslag of verzending)</li>
                  <li>Beveiligde verbindingen (SSL) voor communicatie via de app en website</li>
                  <li>Beperkte en gecontroleerde toegang tot persoonsgegevens, uitsluitend voor geautoriseerde medewerkers</li>
                  <li>Regelmatige beoordeling van de beveiligingsmaatregelen en naleving van het beveiligingsbeleid</li>
                  <li>Bewaarprocedures en back-upsystemen ter voorkoming van gegevensverlies</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Gebruik van cookies</h2>
              <div className="space-y-4">
                <p>Releafe maakt gebruik van cookies en vergelijkbare technieken op de app en de website om de gebruikerservaring te verbeteren, het gebruik te analyseren en bepaalde functionaliteiten mogelijk te maken.</p>

                <p>Cookies zijn kleine tekstbestanden die bij een bezoek aan de app of website op het apparaat van de gebruiker worden geplaatst. Deze cookies kunnen functioneel, analytisch of (indien van toepassing) trackingcookies zijn.</p>

                <p>Voor analytische en marketingcookies vraagt Releafe toestemming wanneer dat wettelijk vereist is. Zonder toestemming worden geen trackingcookies geplaatst. Releafe gebruikt de volgende typen cookies:</p>

                <h3 className="text-lg font-semibold text-slate-900">Functionele cookies</h3>
                <p>Noodzakelijk om de app en website goed te laten functioneren, zoals het onthouden van inloggegevens en voorkeuren.</p>

                <h3 className="text-lg font-semibold text-slate-900">Analytische cookies</h3>
                <p>Om inzicht te krijgen in het gebruik van de app en website en deze te kunnen verbeteren, waarbij gebruik wordt gemaakt van geanonimiseerde gegevens.</p>

                <h3 className="text-lg font-semibold text-slate-900">Trackingcookies</h3>
                <p>Worden alleen geplaatst na uitdrukkelijke toestemming van de gebruiker, met als doel het tonen van relevante content of advertenties.</p>

                <h3 className="text-lg font-semibold text-slate-900 mt-6">Specifiek gebruikte cookies en scripts</h3>
                <p>Op de website van Releafe worden onder meer de volgende cookies en scripts geplaatst:</p>
                <ul className="ml-4 list-disc space-y-2">
                  <li><strong>Google Analytics (gtag.js)</strong> — analytische cookies voor het meten van websitegebruik. Worden uitsluitend geactiveerd na uitdrukkelijke toestemming via de cookie-banner.</li>
                  <li><strong>Picky Assist WhatsApp-widget</strong> — functionele scripts voor de WhatsApp-contactknop op de website.</li>
                </ul>

                <p className="mt-4">Bij het eerste bezoek aan de app of website wordt de gebruiker geïnformeerd over het gebruik van cookies en, voor zover wettelijk vereist, om toestemming gevraagd. De gebruiker kan zijn cookievoorkeuren altijd aanpassen of toestemming intrekken via de instellingen van de browser of binnen de app.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Wijzigingen in de privacyverklaring</h2>
              <div className="space-y-4">
                <p>Releafe behoudt zich het recht voor om deze privacyverklaring te wijzigen. Eventuele wijzigingen worden op deze pagina gepubliceerd. Indien de wijzigingen van wezenlijk belang zijn voor de gebruiker, wordt de gebruiker hiervan tijdig op de hoogte gebracht via de app of per e-mail.</p>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-12">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Vragen over privacy?</h3>
              <p className="text-blue-900">
                Neem contact op met ons privacy team via <a href="mailto:privacy@releafe.nl" className="font-semibold hover:underline">privacy@releafe.nl</a>
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
