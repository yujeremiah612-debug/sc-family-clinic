import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Location & Hours
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Conveniently located in Plano, Texas, serving the North Texas community.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Map Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 card-shadow h-full min-h-[400px] relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <MapPin className="w-10 h-10 text-cta" />
                    </div>
                    <p className="text-lg text-slate-700 font-bold mb-6">5168 Village Creek Dr, Suite 300, Plano, TX 75093</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-cta text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5 space-y-8"
            >
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 card-shadow">
                <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
                  <Clock className="w-7 h-7 text-cta mr-3" />
                  Office Hours
                </h2>
                <ul className="space-y-4">
                  {CLINIC_INFO.hours.map((h, i) => (
                    <li key={i} className="flex justify-between items-center text-base border-b border-slate-100 pb-3 last:border-0">
                      <span className="text-slate-500 font-medium">{h.day}</span>
                      <span className="font-bold text-primary">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-bg-alt p-8 md:p-10 rounded-[2.5rem] border border-slate-100">
                <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <Phone className="w-6 h-6 text-cta mr-3" />
                  Contact Info
                </h2>
                <div className="space-y-4">
                  <p className="text-slate-600 text-lg">
                    Phone: <a href={`tel:${CLINIC_INFO.phone}`} className="text-cta font-bold hover:underline">{CLINIC_INFO.phoneDisplay}</a>
                  </p>
                  <p className="text-slate-600 text-lg">
                    Email: <span className="font-medium">{CLINIC_INFO.email}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 card-shadow"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Areas We Serve</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We proudly serve patients from across North Texas, providing accessible family medicine to the following communities:
            </p>
            <div className="flex flex-wrap gap-3">
              {["Plano", "Frisco", "Allen", "McKinney", "Richardson", "The Colony", "Dallas", "Carrollton", "Murphy"].map((city, i) => (
                <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-slate-700 hover:bg-cta hover:text-white hover:border-cta transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />

      {/* JSON-LD for MedicalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "SC Family Clinic",
          "image": "https://scfamilyclinic.com/logo.png",
          "@id": "https://scfamilyclinic.com",
          "url": "https://scfamilyclinic.com",
          "telephone": "972-955-3655",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5168 Village Creek Dr, Suite 300",
            "addressLocality": "Plano",
            "addressRegion": "TX",
            "postalCode": "75093",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.0187,
            "longitude": -96.8189
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:30",
              "closes": "17:00"
            }
          ],
          "medicalSpecialty": "FamilyMedicine",
          "priceRange": "$$"
        })}
      </script>
    </div>
  );
}
