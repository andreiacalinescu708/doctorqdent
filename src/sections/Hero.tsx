import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="acasa" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/clinic-interior.webp"
          alt="Clinica Doctor Q Dent"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a4a5c]/95 via-[#0a4a5c]/85 to-[#0a4a5c]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Deschis acum</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Doctor Q Dent
                </h1>
                <p className="text-xl sm:text-2xl text-cyan-100 font-light">
                  Clinica Stomatologica
                </p>
              </div>

              <p className="text-lg text-white/90 max-w-xl leading-relaxed">
                Oferim servicii stomatologice complete cu tehnologie modernă și o echipă dedicată. 
                Zâmbetul tău sănătos este prioritatea noastră.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#0a4a5c] hover:bg-cyan-50 font-semibold px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Programează-te
                </Button>
                <Button 
                  size="lg" 
                  className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[#0a4a5c] font-semibold px-8"
                  onClick={() => document.getElementById('servicii')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Serviciile noastre
                </Button>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Adresă</p>
                    <p className="text-white/80 text-sm">Strada Principală 73, Drănic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Telefon</p>
                    <p className="text-white/80 text-sm">0732 474 880</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Program</p>
                    <p className="text-white/80 text-sm">Luni - Sâmbătă</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">+1000</div>
                    <div className="text-cyan-200 text-sm">Pacienți mulțumiți</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">5+</div>
                    <div className="text-cyan-200 text-sm">Ani experiență</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-cyan-200 text-sm">Satisfacție</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-cyan-200 text-sm">Suport urgențe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
