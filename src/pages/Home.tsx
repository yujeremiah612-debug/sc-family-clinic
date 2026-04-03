import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ShieldCheck, Languages, MapPin, Award, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO */}
      <section className="relative bg-white pt-16 pb-20 md:pt-32 md:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="max-content relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent-green/10 text-accent-green border border-accent-green/20">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  Now Accepting New Patients
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-medicare-green/10 text-medicare-green border border-medicare-green/20">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                  Medicare Welcome
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-8 leading-[1.05] tracking-tight">
                Comprehensive Family Care <span className="text-cta">You Can Trust</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Personalized, patient-centered care for individuals and families in Plano, Texas. 
                Experience the difference of a dedicated physician who truly listens.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-cta text-white text-xl font-bold rounded-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  {CLINIC_INFO.phoneDisplay}
                </a>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white text-primary border-2 border-slate-200 text-xl font-bold rounded-2xl hover:bg-slate-50 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Medical Office" 
                  className="w-full h-auto rounded-[2rem] shadow-2xl object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent-green" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Board Certified</p>
                      <p className="text-xs text-slate-500">Family Medicine Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-bg-alt py-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] md:min-w-0 gap-8">
            {[
              { icon: Award, text: "Board-Certified MD" },
              { icon: ShieldCheck, text: "UTSW & Yale-Trained" },
              { icon: Languages, text: "English & Korean Spoken" },
              { icon: CheckCircle2, text: "Medicare & UHC Accepted" },
              { icon: MapPin, text: "Plano 75093" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 whitespace-nowrap">
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SNAPSHOT */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a full spectrum of healthcare services designed to meet the unique needs of your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Primary Care", desc: "Comprehensive health management for all ages.", link: "/services/primary-care-plano" },
              { title: "Preventive Care", desc: "Wellness exams, screenings, and immunizations.", link: "/services/preventive-care-plano" },
              { title: "Chronic Disease", desc: "Expert care for diabetes, hypertension, and more.", link: "/services/chronic-disease-management-plano" },
              { title: "Physical Exams", desc: "Annual, sports, and Medicare wellness physicals.", link: "/services/physical-exams-plano" }
            ].map((service, i) => (
              <Link 
                key={i} 
                to={service.link}
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] card-shadow hover:border-cta/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-all mb-6">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-cta transition-colors mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center px-8 py-4 bg-slate-50 text-primary font-bold rounded-full hover:bg-slate-100 transition-all">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DOCTOR TEASER */}
      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <div className="bg-white p-8 md:p-16 rounded-[3rem] card-shadow border border-slate-100">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-square max-w-[320px] mx-auto">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] -z-10 rotate-6" />
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" 
                    alt="Dr. Steven Chae" 
                    className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Dr. Steven Chae, MD</h2>
                <p className="text-xl text-secondary font-bold mb-6">Board-Certified Family Physician</p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  With over 25 years of experience, Dr. Chae provides expert medical care with a personal touch. 
                  Trained at UT Southwestern and Yale-affiliated programs, he specializes in preventive medicine 
                  and chronic disease management for the Plano community.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                  <span className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">UT Southwestern MD</span>
                  <span className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">Yale-Affiliated Training</span>
                  <span className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">25+ Years Experience</span>
                </div>
                <Link 
                  to="/dr-steven-chae-plano"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                >
                  Learn More About Dr. Chae
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSURANCE BAR */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Insurance We Accept</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-black text-slate-700">UnitedHealthcare</span>
            <span className="text-xl font-black text-slate-700">Medicare</span>
            <span className="text-xl font-black text-slate-700">Molina</span>
            <span className="text-xl font-black text-slate-700">UHC Advantage</span>
          </div>
          <p className="mt-8 text-sm text-slate-500">Don't see your plan? <Link to="/insurance-payments" className="text-cta underline">View full list</Link></p>
        </div>
      </section>

      {/* 6. LOCATION */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Visit Our Clinic</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Conveniently located in Plano, Texas. We are currently accepting new patients.
            </p>
          </div>
          <div className="bg-bg-alt rounded-[3rem] overflow-hidden border border-slate-200 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-80 lg:h-auto bg-slate-300 relative">
              {/* Placeholder for Map */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium bg-slate-100">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-cta" />
                  </div>
                  <p className="text-lg font-bold text-primary mb-2">5168 Village Creek Dr, Suite 300</p>
                  <p className="text-slate-600">Plano, TX 75093</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <MapPin className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">Address</p>
                    <p className="text-slate-600 leading-relaxed">{CLINIC_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mr-5 shrink-0">
                    <Phone className="w-6 h-6 text-cta" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg mb-1">Phone</p>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-cta font-bold text-2xl hover:underline">{CLINIC_INFO.phoneDisplay}</a>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                >
                  Get Directions
                </a>
                <Link 
                  to="/location-hours"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-primary font-bold rounded-2xl hover:bg-slate-50 transition-all"
                >
                  Office Hours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <CTASection dark />
    </div>
  );
}
