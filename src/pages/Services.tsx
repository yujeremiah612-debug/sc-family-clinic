import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "primary",
      title: "Primary Care",
      h1: "Primary Care & Family Medicine in Plano, TX 75093",
      desc: "Comprehensive health management for patients of all ages, from routine check-ups to acute illness treatment.",
      link: "/services/primary-care-plano",
      features: ["New Patient Exams", "Medicare Wellness", "Acute Illness Care"]
    },
    {
      id: "preventive",
      title: "Preventive Care",
      h1: "Preventive Medicine & Wellness in Plano",
      desc: "Stay ahead of health issues with regular screenings, immunizations, and wellness counseling.",
      link: "/services/preventive-care-plano",
      features: ["Cancer Screenings", "Immunizations", "Heart Health"]
    },
    {
      id: "chronic",
      title: "Chronic Disease Management",
      h1: "Chronic Condition Care in Plano, TX",
      desc: "Expert management for long-term conditions to improve quality of life and prevent complications.",
      link: "/services/chronic-disease-management-plano",
      features: ["Diabetes Care", "Hypertension", "Cholesterol Management"]
    },
    {
      id: "physical",
      title: "Physical Exams",
      h1: "Comprehensive Physical Exams in Plano",
      desc: "Thorough evaluations for school, work, sports, or annual health maintenance.",
      link: "/services/physical-exams-plano",
      features: ["Annual Physicals", "Sports Physicals", "Employment Exams"]
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
            Our Medical Services
          </h1>
          <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
            We provide a wide range of primary care services tailored to your individual health needs. 
            Dr. Chae and our team are committed to excellence in every visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 card-shadow hover:border-cta/20 hover:-translate-y-1 transition-all flex flex-col h-full">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 gap-3 mb-10">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-accent-green mr-3 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <Link 
                  to={service.link}
                  className="inline-flex items-center justify-center w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark />
    </div>
  );
}
