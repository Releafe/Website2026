export interface SEOConfig {
  title: string;
  description: string;
  focusKeyword?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, any>;
}

export const seoConfigs: Record<string, SEOConfig | any> = {
  waitlistConfirmation: {
    title: 'Je staat op de wachtlijst — Releafe',
    description: 'Bedankt voor je aanmelding! Je staat nu op onze wachtlijst. Wij houden je op de hoogte als Releafe live gaat.',
    focusKeyword: 'wachtlijst bevestiging',
    keywords: ['wachtlijst', 'Releafe', 'mentale gezondheid'],
    canonical: '/waitlist-confirmation',
    ogType: 'website'
  },
  home: {
    title: 'Releafe — Mentale gezondheid op de werkvloer voor MKB',
    description: 'Medewerkers minder laten uitvallen? Releafe helpt MKB-ondernemers mentaal welzijn op te bouwen — eenvoudig, snel en anoniem.',
    focusKeyword: 'mentale gezondheid MKB',
    keywords: ['mentale gezondheid', 'welzijn', 'verzuim', 'MKB', 'werknemers', 'burnout', 'mentale klachten', 'HR software'],
    canonical: '/',
    ogImage: 'https://releafe.nl/Logo-Releafe-staand.png',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Releafe',
      'url': 'https://releafe.nl',
      'logo': 'https://releafe.nl/Logo-Releafe-staand.png',
      'description': 'Platform voor mentale gezondheid en welzijn op de werkvloer',
      'sameAs': [],
      'contact': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'availableLanguage': ['nl']
      }
    }
  },
  mkb: {
    title: 'Releafe voor MKB — Mentaal welzijn in jouw bedrijf',
    description: 'Speciaal ontworpen voor MKB-bedrijven. Eenvoudig platform voor mentale gezondheid en verzuimreductie. Geen IT-afdeling nodig. 15 minuten live.',
    keywords: ['MKB', 'mentale gezondheid', 'verzuim', 'werknemers', 'HR', 'welzijn', 'bedrijf'],
    canonical: '/mkb',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor MKB',
      'description': 'Mentale gezondheid platform voor MKB-bedrijven',
      'url': 'https://releafe.nl/mkb'
    }
  },
  semiOverheid: {
    title: 'Releafe voor Semi-overheden — Werknemerswelzijn en gezondheid',
    description: 'Oplossing voor semi-overheidsorganisaties. Preventief mentaal welzijn, ROI-tracking en integratie met bestaande systemen.',
    keywords: ['semi-overheid', 'mentale gezondheid', 'werknemerswelzijn', 'verzuim', 'publieke sector'],
    canonical: '/semi-overheid',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor Semi-overheden',
      'description': 'Mentale gezondheid platform voor semi-overheidsorganisaties',
      'url': 'https://releafe.nl/semi-overheid'
    }
  },
  arboDiensten: {
    title: 'Releafe voor Arbodiensten — Preventief welzijnsmanagement',
    description: 'Arbodiensten bieden Releafe aan als dienst. Uitgebreide rapportages, integraties en dedicated ondersteuning.',
    keywords: ['arbodienst', 'arboarts', 'mentale gezondheid', 'arbomanagement', 'werknemerswelzijn'],
    canonical: '/arbo-diensten',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor Arbodiensten',
      'description': 'Mentale gezondheid platform voor arbodiensten',
      'url': 'https://releafe.nl/arbo-diensten'
    }
  },
  hrManager: {
    title: 'Releafe voor HR Managers — Mentaal welzijn op bestuur niveau',
    description: 'Voor HR Managers die mentaal welzijn strategisch willen aanpakken. Dashboards, rapportages en integration capabilities.',
    keywords: ['HR manager', 'mentale gezondheid', 'welzijnsmanagement', 'HR analytics', 'werknemerswelzijn'],
    canonical: '/hr-manager',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor HR Managers',
      'description': 'HR-tool voor mentaal welzijn en verzuimmanagement',
      'url': 'https://releafe.nl/hr-manager'
    }
  },
  hrAdvisor: {
    title: 'Releafe voor HR Adviseurs — Adviesinstrument voor welzijn',
    description: 'HR Adviseurs gebruiken Releafe om cliënten beter te adviseren op mentaal welzijn en verzuimpreventie.',
    keywords: ['HR adviseur', 'HR consultant', 'mentale gezondheid', 'advies', 'wellbeing'],
    canonical: '/hr-advisor',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor HR Adviseurs',
      'description': 'Platform voor HR adviseurs om clients te helpen met welzijn',
      'url': 'https://releafe.nl/hr-advisor'
    }
  },
  personnelAdvisor: {
    title: 'Releafe voor Personeelsadviseurs — Preventief welzijnsadvies',
    description: 'Personeelsadviseurs helpen werkgevers met preventief mentaal welzijn. Data-driven inzichten en actionable recommendations.',
    keywords: ['personeelsadviseur', 'mentale gezondheid', 'HR', 'advies', 'preventie'],
    canonical: '/personnel-advisor',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor Personeelsadviseurs',
      'description': 'Platform voor personeelsadviseurs voor welzijnsadvies',
      'url': 'https://releafe.nl/personnel-advisor'
    }
  },
  arbo: {
    title: 'Releafe voor Arboprofessionals — Data-driven welzijnsmanagement',
    description: 'Voor arboprofessionals die data-driven welzijnsmanagement willen implementeren. Geavanceerde rapportages en integraties.',
    keywords: ['arbo', 'arboprofessional', 'occupational health', 'mentale gezondheid', 'welzijnsmanagement'],
    canonical: '/arbo',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Releafe voor Arboprofessionals',
      'description': 'Geavanceerd platform voor arboprofessionals',
      'url': 'https://releafe.nl/arbo'
    }
  },
  kennisbank: {
    title: 'Releafe Kennisbank — Artikelen over mentaal welzijn op het werk',
    description: 'Lees artikelen over mentale gezondheid, verzuimpreventie, HR-strategie en werknemersondersteuning. Expert insights en praktische tips.',
    focusKeyword: 'mentale gezondheid artikelen',
    keywords: ['mentale gezondheid', 'welzijn', 'verzuim', 'HR', 'burn-out', 'stress', 'werknemers'],
    canonical: '/kennisbank',
    ogImage: 'https://releafe.nl/Logo-Releafe-staand.png',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Releafe Kennisbank',
      'description': 'Kennisbank over mentale gezondheid en welzijn op het werk',
      'url': 'https://releafe.nl/kennisbank',
      'publisher': {
        '@type': 'Organization',
        'name': 'Releafe',
        'url': 'https://releafe.nl'
      }
    }
  },
  mentalFit: {
    title: 'Mentaal fit — Releafe',
    description: 'Mentale gezondheid is trainable. Ontdek wat mentaal fit zijn betekent en hoe je jezelf sterker maakt.',
    focusKeyword: 'mentaal fit',
    keywords: ['mentaal fit', 'mentale gezondheid', 'welzijn', 'weerbaarheid', 'mentale kracht'],
    canonical: '/mentaal-fit',
    ogType: 'website'
  },
  mentalHealth: {
    title: 'Mentale klachten — Releafe',
    description: 'Herken mentale klachten en begrijp wanneer je professionele hulp nodig hebt. Releafe helpt je vroegtijdig signalen op te vangen.',
    focusKeyword: 'mentale klachten herkennen',
    keywords: ['mentale klachten', 'mentale gezondheid', 'stress', 'angst', 'depressie', 'burnout'],
    canonical: '/mentale-klachten',
    ogType: 'website'
  },
  releafeApp: {
    title: 'Releafe: Jouw pad naar mentaal welzijn — Dagboek, doelen, ontspanning',
    description: 'Releafe helpt je mentaal sterker worden met dagboek, persoonlijke doelen, ontspanningsoefeningen en motiverende bonsaiboom. Praktische tools voor beter welzijn.',
    focusKeyword: 'mentale gezondheid app dagboek',
    keywords: ['mentale gezondheid app', 'welzijn app', 'dagboek', 'persoonlijke doelen', 'ontspanningsoefeningen', 'bonsaiboom', 'mindfulness', 'stress management', 'emotioneel welzijn'],
    canonical: '/releafe-app',
    ogImage: 'https://releafe.nl/Logo-Releafe-staand.png',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Releafe App',
      'description': 'App voor mentaal welzijn met dagboek, doelen en ontspanningsoefeningen',
      'url': 'https://releafe.nl/releafe-app',
      'applicationCategory': 'HealthApplication',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'EUR'
      }
    }
  },
  releaseDashboard: {
    title: 'Releafe Dashboard — Werkgevers',
    description: 'Zie hoe het Releafe dashboard organisaties inzicht geeft in teamwelzijn op teamniveau, anoniem en ethisch.',
    focusKeyword: 'Releafe dashboard',
    keywords: ['Releafe dashboard', 'HR dashboard', 'teamwelzijn', 'mentale gezondheid metriek', 'werkgever inzichten'],
    canonical: '/releafe-dashboard',
    ogImage: 'https://releafe.nl/Logo-Releafe-staand.png',
    ogType: 'website'
  },
  blogArticles: {
    '1': {
      title: 'Wat kost een burn-out een werkgever echt? Kostencalculatie 2026',
      description: 'Ontdek hoeveel een burn-out werkgevers kost: directe en indirecte kosten, verzuimverlies en impact op productiviteit. Preventie strategie.',
      focusKeyword: 'burn-out kosten werkgever',
      keywords: ['burn-out kosten', 'verzuim', 'werkgever', 'productiviteitsverlies', 'mentale gezondheid', 'HR kosten'],
      canonical: '/kennisbank/wat-kost-een-burn-out-een-werkgever-echt',
      ogType: 'article'
    },
    '2': {
      title: 'Mentale overbelasting herkennen: vroege signalen bij medewerkers',
      description: 'Leer mentale overbelasting vroegtijdig herkennen. Gedragsveranderingen, fysieke signalen en actiestappen voor leidinggevenden.',
      focusKeyword: 'mentale overbelasting herkennen',
      keywords: ['mentale overbelasting', 'burn-out signalen', 'stress symptomen', 'werkdruk', 'leidinggevenden', 'preventie'],
      canonical: '/kennisbank/hoe-herken-je-mentale-overbelasting-bij-medewerkers',
      ogType: 'article'
    },
    '3': {
      title: 'Verzuim verlagen in bedrijf: 3 bewezen methodes voor MKB',
      description: 'Effectieve aanpakken om verzuim te verlagen: preventie, vroege interventie en reïntegratietrajecten. Voor kleine bedrijven.',
      focusKeyword: 'verzuim verlagen',
      keywords: ['verzuim verlagen', 'absentie bedrijf', 'MKB', 'verzuimpreventie', 'werknemersgezondheid'],
      canonical: '/kennisbank/zo-verlaag-je-verzuim-in-je-bedrijf',
      ogType: 'article'
    },
    '4': {
      title: 'Platform mentaal welzijn bedrijf: hoe werkt het en wat levert het op?',
      description: 'Wat is een welzijnsplatform? Check-ins, doelen, geanonimiseerde inzichten voor teams en preventief ondersteuning. Privacy-veilig.',
      focusKeyword: 'welzijnsplatform bedrijf',
      keywords: ['welzijnsplatform', 'mentale gezondheid platform', 'employee wellbeing', 'werknemerswelzijn', 'check-ins'],
      canonical: '/kennisbank/wat-is-een-platform-voor-mentaal-welzijn-op-het-werk',
      ogType: 'article'
    },
    '5': {
      title: 'Werkgeversdashboard mentale preventie: data-driven inzichten teams',
      description: 'Hoe een HR-dashboard mentale belasting zichtbaar maakt op teamniveau. Geanonimiseerde data, privacy-veilig, actionable inzichten.',
      focusKeyword: 'HR dashboard mentale gezondheid',
      keywords: ['HR dashboard', 'welzijn metriek', 'teaminzichten', 'mentale belasting', 'data-driven HR'],
      canonical: '/kennisbank/hoe-helpt-een-werkgeversdashboard-bij-mentale-preventie',
      ogType: 'article'
    },
    '6': {
      title: 'Privacy mentale gezondheid bedrijf: waarom vertrouwen essentieel is',
      description: 'Privacy is fundamenteel voor effectieve mentale ondersteuning. Geanonimiseerde gegevens, GDPR-compliant, vertrouwen opbouwen.',
      focusKeyword: 'privacy mentale gezondheid',
      keywords: ['privacy gezondheid', 'GDPR', 'geanonimiseerde data', 'vertrouwen', 'werknemersgezondheid'],
      canonical: '/kennisbank/waarom-privacy-essentieel-is-bij-mentale-gezondheid-op-de-werkvloer',
      ogType: 'article'
    },
    '7': {
      title: 'Mentale klachten productiviteitsverlies: impact teams bedrijf',
      description: 'Hoe mentale stress de productiviteit aantast: focus, samenwerking, fouten. Preventie = ROI. Praktische stappen.',
      focusKeyword: 'productiviteitsverlies mentale klachten',
      keywords: ['productiviteitsverlies', 'mentale klachten', 'werkstress', 'concentratie', 'team performance'],
      canonical: '/kennisbank/hoe-mentale-klachten-leiden-tot-productiviteitsverlies-op-de-werkvloer',
      ogType: 'article'
    },
    '8': {
      title: 'Verborgen kosten werkstress organisatie: miljarden verlies',
      description: 'Werkstress kost jaarlijks miljarden: verzuim, uitstroom, kwaliteit. Ontdek alle verborgen kosten en preventie.',
      focusKeyword: 'werkstress kosten organisatie',
      keywords: ['werkstress kosten', 'verzuim kosten', 'bedrijfsuitstroom', 'welzijnsinvestering'],
      canonical: '/kennisbank/de-verborgen-kosten-van-stress-binnen-organisaties',
      ogType: 'article'
    },
    '9': {
      title: 'Preventie mentale gezondheid: waarom structureel beter is',
      description: 'Waarom preventief werken slimmer is dan reactief handelen. Bewustwording, veerkracht, vroege signalen opvangen.',
      focusKeyword: 'mentale gezondheid preventie',
      keywords: ['preventie burn-out', 'mentale gezondheid preventie', 'werkgeluk strategie', 'HR beleid'],
      canonical: '/kennisbank/waarom-preventie-belangrijker-is-dan-ooit-binnen-organisaties',
      ogType: 'article'
    },
    '10': {
      title: 'Burn-out preventie: welke interventies werken echt effectief?',
      description: 'Effectieve burn-out preventie: open communicatie, psychologische veiligheid, werkdruk management. Evidence-based.',
      focusKeyword: 'burn-out preventie',
      keywords: ['burn-out preventie', 'stress management', 'werkplezier', 'teamcultuur', 'mentale veerkracht'],
      canonical: '/kennisbank/preventie-van-burn-out-wat-werkt-echt',
      ogType: 'article'
    },
    '11': {
      title: 'Werkgeluk: definitie, belang en impact op organisatie',
      description: 'Wat is werkgeluk? Waarom energie, betrokkenheid en motivatie essentieel zijn. Impact op werkgever.',
      focusKeyword: 'werkgeluk',
      keywords: ['werkgeluk', 'employee engagement', 'betrokkenheid', 'motivatie werknemers', 'werkplezier'],
      canonical: '/kennisbank/wat-is-werkgeluk-en-waarom-is-het-belangrijk',
      ogType: 'article'
    },
    '12': {
      title: 'Mentale gezondheid werkgeluk: hoe gezondheid motivatie bepaalt',
      description: 'Directe link mentale gezondheid en werkgeluk: stress = lagere prestatie, welzijn = betrokkenheid. Praktische stappen.',
      focusKeyword: 'mentale gezondheid werkgeluk',
      keywords: ['mentale gezondheid werkgeluk', 'welzijn prestatie', 'medewerker engagement', 'stress impact'],
      canonical: '/kennisbank/hoe-mentale-gezondheid-invloed-heeft-op-werkgeluk',
      ogType: 'article'
    },
    '13': {
      title: '7 praktische manieren werkgeluk teams vergroten vandaag',
      description: 'Kleine veranderingen, groot effect: communicatie, rustpauzes, autonomie, groei, ondersteuning. Direct toepasbaar.',
      focusKeyword: 'werkgeluk vergroten teams',
      keywords: ['werkgeluk vergroten', 'teambetrokkenheid', 'HR interventies', 'medewerker tevredenheid'],
      canonical: '/kennisbank/7-manieren-om-werkgeluk-binnen-teams-te-vergroten',
      ogType: 'article'
    },
    '14': {
      title: 'Mentale gezondheid strategisch HR-thema: waarom nu essentieel',
      description: 'Mentale gezondheid bepaalt verzuim, uitstroom, productiviteit. Waarom HR strategisch moet handelen. ROI duidelijk.',
      focusKeyword: 'HR strategie mentale gezondheid',
      keywords: ['HR strategie', 'mentale gezondheid HR', 'welzijnsbeleid', 'verzuimmanagement', 'duurzame inzetbaarheid'],
      canonical: '/kennisbank/waarom-mentale-gezondheid-een-strategisch-hr-thema-is',
      ogType: 'article'
    },
    '15': {
      title: 'Mentale belasting zichtbaar maken: HR meting en inzicht',
      description: 'Hoe HR mentale belasting kan meten: check-ins, anonieme metingen, dashboards. Data-driven preventie.',
      focusKeyword: 'mentale belasting meten',
      keywords: ['mentale belasting meten', 'HR metrieken', 'wellbeing assessment', 'teamdiagnose'],
      canonical: '/kennisbank/hoe-hr-mentale-belasting-eerder-zichtbaar-kan-maken',
      ogType: 'article'
    },
    '16': {
      title: 'Reactief naar preventief HR-beleid: stappenplan transformatie',
      description: 'Van crisis management naar preventie: communicatie, werkdruk, ondersteuning, trends. Cultuurverandering.',
      focusKeyword: 'preventief HR beleid',
      keywords: ['HR beleid preventie', 'mentale gezondheid strategie', 'organisatiecultuur', 'veranderingsmanagement'],
      canonical: '/kennisbank/van-reactief-naar-preventief-hr-beleid',
      ogType: 'article'
    },
    '17': {
      title: 'Mentale gezondheid bespreekbaar maken: cultuur, vertrouwen, support',
      description: 'Psychologische veiligheid creëren voor gesprekken mentale gezondheid. Rol leidinggevenden. Praktisch.',
      focusKeyword: 'psychologische veiligheid mentale gezondheid',
      keywords: ['psychologische veiligheid', 'mentale gezondheid cultuur', 'leidinggeving', 'open communicatie'],
      canonical: '/kennisbank/hoe-organisaties-mentale-gezondheid-bespreekbaar-maken',
      ogType: 'article'
    },
    '18': {
      title: 'Mentale gezondheid AVG: wat werkgever mag weten juridisch',
      description: 'AVG compliance mentale gezondheid: wat mag, wat niet. Geanonimiseerde data. Privacy-veilig handelen.',
      focusKeyword: 'AVG mentale gezondheid',
      keywords: ['AVG gezondheid', 'GDPR compliance', 'privacy werknemers', 'gezondheidsgegevens', 'welzijn data'],
      canonical: '/kennisbank/mentale-gezondheid-en-avg-wat-mag-je-als-werkgever-wel-en-niet-wezen',
      ogType: 'article'
    }
  }
};

export const getStructuredDataOrganization = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'Releafe',
  'description': 'Platform voor mentale gezondheid en welzijn op de werkvloer',
  'url': 'https://releafe.nl',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'EUR',
    'description': 'Gratis toegang tijdens early access'
  },
  'author': {
    '@type': 'Organization',
    'name': 'Releafe'
  }
});

export function updatePageMeta(config: SEOConfig) {
  // Update title
  document.title = config.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', config.description);

  // Update or create keywords
  if (config.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', config.keywords.join(', '));
  }

  // Update or create canonical
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://releafe.nl${config.canonical}`);
  }

  // Update OG tags
  updateOGTag('og:title', config.title);
  updateOGTag('og:description', config.description);
  updateOGTag('og:url', config.canonical ? `https://releafe.nl${config.canonical}` : 'https://releafe.nl');
  if (config.ogImage) {
    updateOGTag('og:image', config.ogImage);
  }
  if (config.ogType) {
    updateOGTag('og:type', config.ogType);
  }

  // Update structured data
  if (config.structuredData) {
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(config.structuredData);
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

function updateOGTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
