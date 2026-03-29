import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#0a7a8a] font-semibold text-sm uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Programează-te Acum
          </h2>
          <p className="text-lg text-gray-600">
            Suntem aici pentru a te ajuta să ai un zâmbet sănătos și frumos. 
            Contactează-ne pentru o programare sau pentru orice întrebare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
                  <p className="text-gray-600 mb-2">Sună-ne pentru programări și urgențe</p>
                  <a 
                    href="tel:0732474880" 
                    className="text-[#0a7a8a] font-semibold text-lg hover:underline"
                  >
                    0732 474 880
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Adresă</h3>
                  <p className="text-gray-600 mb-2">Vizitează-ne la clinică</p>
                  <p className="text-[#0a7a8a] font-semibold">
                    Strada Principală 73
                  </p>
                  <p className="text-gray-500 text-sm">207250 Drănic, Județul Dolj</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Program</h3>
                  <p className="text-gray-600 mb-2">Orele de funcționare</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Luni</span>
                      <span className="text-[#0a7a8a] font-semibold">09:00 - 11:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Marți</span>
                      <span className="text-[#0a7a8a] font-semibold">9:30 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Miercuri</span>
                      <span className="text-[#0a7a8a] font-semibold">Slatina</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Joi</span>
                      <span className="text-[#0a7a8a] font-semibold">9:30 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Vineri</span>
                      <span className="text-[#0a7a8a] font-semibold">Filiasi</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sâmbătă</span>
                      <span className="text-[#0a7a8a] font-semibold">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Duminică</span>
                      <span className="text-gray-500">Închis</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Scrie-ne pe WhatsApp</p>
                  <a 
                    href="https://wa.me/40732474880" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a7a8a] font-semibold text-lg hover:underline"
                  >
                    0732 474 880
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0a7a8a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0a7a8a]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">Scrie-ne pentru informații</p>
                  <a href="mailto:contact@doctorqdent.ro" className="text-[#0a7a8a] font-semibold text-lg hover:underline">
                    contact@doctorqdent.ro
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & CTA */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps?q=Strada+Principal%C4%83+73,+207250+Dr%C4%83nic&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație Doctor Q Dent"
              />
            </div>

            <div className="bg-[#0a7a8a] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ai o Urgență Dentară?</h3>
              <p className="text-white/90 mb-6">
                Nu amâna tratamentul. Contactează-ne imediat pentru asistență.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#0a7a8a] hover:bg-gray-100 font-semibold"
                onClick={() => window.location.href = 'tel:0732474880'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
