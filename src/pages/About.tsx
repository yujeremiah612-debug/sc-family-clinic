import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 text-center tracking-tight">
            About SC Family Clinic
          </h1>
          <div className="max-prose-content">
            <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
              Patient-Centered Primary Care in Plano, TX. We believe in building long-term relationships 
              based on trust, expertise, and compassionate care.
            </p>
            
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our mission is to provide high-quality, comprehensive medical care to individuals and families 
                in the Plano community. We focus on preventive medicine and chronic disease management to help 
                our patients live their healthiest lives.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-16 mb-6">The Vision of Dr. Chae</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Dr. Steven Chae founded SC Family Clinic with a vision of a practice where patients are treated 
                like family. With his bilingual background (English and Korean), he saw a need for accessible, 
                culturally competent care in North Texas. His approach combines top-tier medical training with 
                a warm, personal touch that is often lost in modern healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Experienced Physician", 
                desc: "Over 25 years of medical experience and training at world-class institutions like UT Southwestern and Yale-affiliated programs." 
              },
              { 
                title: "Whole-Person Care", 
                desc: "We don't just treat symptoms; we look at the whole person, considering lifestyle, history, and long-term wellness goals." 
              },
              { 
                title: "Comfortable Environment", 
                desc: "Our clinic is designed to be a welcoming space where you feel heard and respected from the moment you walk in." 
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 card-shadow flex flex-col h-full">
                <div className="w-14 h-14 bg-cta/10 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-7 h-7 text-cta" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
