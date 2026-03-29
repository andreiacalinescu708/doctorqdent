import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  Syringe, 
  Scan,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Stomatologie Generală',
    description: 'Consultații, tratamente carii, obturații, extracții simple și tratamente de canal la cele mai înalte standarde.',
  },
  {
    icon: Sparkles,
    title: 'Estetică Dentară',
    description: 'Albire dentară profesională, fațete dentare, coroane și punți pentru un zâmbet perfect.',
  },
  {
    icon: Smile,
    title: 'Ortodonție',
    description: 'Aparate dentare fixe și mobile, alignere transparente pentru îndreptarea dinților.',
  },
  {
    icon: Syringe,
    title: 'Implantologie',
    description: 'Implante dentare de ultimă generație pentru înlocuirea dinților lipsă.',
  },
  {
    icon: Scan,
    title: 'Radiologie Digitală',
    description: 'Radiografii panoramice și 3D pentru diagnostic precis și tratamente personalizate.',
  },
  {
    icon: ShieldCheck,
    title: 'Prevenție',
    description: 'Igienizare profesională, detartraj, periaj profesional și sfaturi personalizate.',
  },
];

export function Services() {
  return (
    <section id="servicii" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#0a7a8a] font-semibold text-sm uppercase tracking-wider mb-4">
            Ce oferim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Servicii Stomatologice Complete
          </h2>
          <p className="text-lg text-gray-600">
            La Doctor Q Dent, combinăm tehnologia modernă cu experiența medicală pentru a oferi 
            tratamente stomatologice de calitate superioară.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-[#0a7a8a] transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0a7a8a]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-[#0a7a8a] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ai nevoie de o consultație? Contactează-ne pentru o evaluare gratuită.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-[#0a7a8a] font-semibold hover:underline"
          >
            Programează-te acum
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
