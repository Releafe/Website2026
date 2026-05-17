export default function SocialProof() {
  const partners = [
    {
      name: 'Cogniteq',
      logo: '/Logo-Cogniteq.png',
    },
    {
      name: 'Stichting Mentaal Welzijn Nederland',
      logo: '/Samenwerking_Stichting_Mentaal_Welzijn_Nederland_Releafe_:_Releafe.nl..webp',
    },
    {
      name: 'Health4You',
      logo: '/Logo-Health4you.webp',
    },
    {
      name: 'Stress Wise',
      logo: '/Samenwerking_Stress_Wise_Releafe_:_Releafe.nl..webp',
    },
    {
      name: 'Veer Studios',
      logo: '/Samenwerking_Veer_Studios_Releafe_:_Releafe.nl..webp',
    },
  ];

  return (
    <section id="social-proof" className="bg-white border-b border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-slate-900 text-lg lg:text-xl font-bold mb-10">
          Samenwerkingspartners
        </p>

        <div className="flex items-center gap-8 lg:gap-12 justify-center px-4 sm:px-14 py-4 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center h-14 lg:h-16 flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[120px] lg:max-w-[140px] max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
