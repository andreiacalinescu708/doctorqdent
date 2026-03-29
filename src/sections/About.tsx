import { useState } from 'react';
import { Check, Award, Users, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  'Echipamente stomatologice moderne',
  'Materiale de cea mai înaltă calitate',
  'Sterilizare conform standardelor',
  'Personal calificat și experimentat',
  'Atmosferă prietenoasă și relaxantă',
  'Prețuri accesibile pentru toți',
];

const aboutImages = [
  { src: '/images/Imagine Q2.jpeg', alt: 'Echipa Doctor Q Dent' },
  { src: '/images/Imagine Q1.jpeg', alt: 'Clinica Doctor Q Dent' },
];

export function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);

  return (
    <section id="despre" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImages[currentImage].src}
                alt={aboutImages[currentImage].alt}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all"
                aria-label="Poza anterioară"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all"
                aria-label="Poza următoare"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentImage ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Mergi la poza ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Ani de experiență</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0a7a8a]/10 rounded-full -z-10" />
            <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-[#0a7a8a]/5 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-[#0a7a8a] font-semibold text-sm uppercase tracking-wider mb-4">
              Despre Noi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Doctor Q Dent - Partenerul Tău pentru un Zâmbet Sănătos
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Suntem o clinică stomatologică modernă din Craiova, dedicată să oferim servicii 
              dentare de cea mai înaltă calitate. Misiunea noastră este să facem fiecare vizită 
              la dentist o experiență plăcută și lipsită de stres.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Echipa noastră de medici stomatologi experimentați folosește tehnologie de ultimă 
              generație pentru a oferi tratamente precise și durabile. Credem că fiecare pacient 
              merită atenție personalizată și soluții adaptate nevoilor sale specifice.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0a7a8a]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0a7a8a]" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-10 h-10 bg-[#0a7a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5 text-[#0a7a8a]" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Empatie</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#0a7a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5 h-5 text-[#0a7a8a]" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Profesionalism</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-[#0a7a8a]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-[#0a7a8a]" />
                </div>
                <div className="text-sm font-semibold text-gray-900">Dedicare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
