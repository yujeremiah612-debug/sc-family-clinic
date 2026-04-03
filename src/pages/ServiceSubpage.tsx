import { Phone, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';

interface ServiceSubpageProps {
  type: 'primary' | 'preventive' | 'chronic' | 'physical';
}

const SERVICE_DATA = {
  primary: {
    h1: "Primary Care & Family Medicine in Plano, TX 75093",
    title: "Primary Care",
    explanation: "Primary care is the foundation of your health. At SC Family Clinic, we provide comprehensive medical care for individuals of all ages, focusing on long-term wellness and disease prevention.",
    benefits: [
      "Personalized care from a board-certified physician",
      "Management of acute illnesses and minor injuries",
      "Coordination of care with specialists if needed",
      "Accepting new patients and Medicare",
      "Bilingual care (English and Korean)"
    ]
  },
  preventive: {
    h1: "Preventive Care & Wellness Screenings in Plano, TX",
    title: "Preventive Care",
    explanation: "Preventive care helps you stay healthy and catch potential issues early when they are most treatable. We offer a full range of screenings and wellness services.",
    benefits: [
      "Annual wellness exams and check-ups",
      "Cancer screenings (colon, breast, prostate, etc.)",
      "Immunizations and flu shots",
      "Heart health screenings and blood pressure checks",
      "Lifestyle and nutrition counseling"
    ]
  },
  chronic: {
    h1: "Chronic Disease Management in Plano, TX",
    title: "Chronic Disease Management",
    explanation: "Managing a chronic condition requires expertise and consistent care. Dr. Chae works closely with patients to manage long-term health issues effectively.",
    benefits: [
      "Comprehensive Diabetes management and monitoring",
      "Hypertension (High Blood Pressure) control",
      "Cholesterol and lipid management",
      "Asthma and COPD care",
      "Thyroid disorder management"
    ]
  },
  physical: {
    h1: "Comprehensive Physical Exams in Plano, TX",
    title: "Physical Exams",
    explanation: "Whether you need an annual check-up or a specific exam for school or work, we provide thorough evaluations to ensure you are in peak health.",
    benefits: [
      "Annual physical examinations for all ages",
      "Medicare Annual Wellness Visits",
      "Sports physicals for student athletes",
      "Pre-employment and work physicals",
      "School and camp physicals"
    ]
  }
};

export default function ServiceSubpage({ type }: ServiceSubpageProps) {
  const data = SERVICE_DATA[type];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="max-content">
          <div className="max-prose-content">
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-cta mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-10 leading-tight tracking-tight">
              {data.h1}
            </h1>
            
            <div className="bg-bg-alt p-10 rounded-[2.5rem] mb-16 border border-slate-100">
              <p className="text-xl text-slate-700 leading-relaxed">
                {data.explanation}
              </p>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">Key Benefits & Services</h2>
            <ul className="space-y-6 mb-16">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start p-6 bg-white rounded-2xl border border-slate-100 card-shadow">
                  <CheckCircle2 className="w-7 h-7 text-accent-green mr-5 shrink-0" />
                  <span className="text-lg text-slate-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Ready to schedule your {data.title}?</h3>
              <p className="text-lg text-slate-300 mb-10 relative z-10">Call our Plano office today to book your appointment and experience personalized care.</p>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center px-10 py-5 bg-cta text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 relative z-10"
              >
                <Phone className="w-6 h-6 mr-3" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
