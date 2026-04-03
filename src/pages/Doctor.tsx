import { Phone, Award, CheckCircle2, Languages, GraduationCap, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';

export default function Doctor() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/3 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] rotate-6 -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600" 
                  alt="Dr. Steven Chae, MD" 
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-10">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-accent-green/10 text-accent-green border border-accent-green/20">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  Accepting New Patients
                </span>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
                Dr. Steven Chae, MD
              </h1>
              <p className="text-2xl text-secondary font-bold mb-10">Board-Certified Family Physician</p>
              
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-primary mb-6">Professional Biography</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Dr. Steven Chae is a highly experienced, board-certified family physician dedicated to providing 
                  exceptional care to the Plano community. With over 25 years in practice, he brings a wealth of 
                  knowledge and a compassionate approach to every patient encounter.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  His medical journey began at the University of Texas at Austin, followed by medical school at 
                  the prestigious UT Southwestern Medical Center in Dallas. He completed his residency training 
                  at Yale-affiliated programs and the University of Louisville, further honing his skills with 
                  a specialized fellowship.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Throughout his career, Dr. Chae has served as a Medical Director and has been recognized for 
                  his expertise in preventive medicine and chronic disease management. He is fluent in both 
                  English and Korean, allowing him to serve a diverse patient population with clarity and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-bg-alt">
        <div className="max-content">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Credentials & Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <GraduationCap className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">Education & Training</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• UT Southwestern Medical Center (MD)</li>
                    <li>• Yale-affiliated Residency Program</li>
                    <li>• University of Louisville Residency</li>
                    <li>• University of Texas at Austin (Undergraduate)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <Award className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">Certifications & Licenses</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• American Board of Family Practice (ABFP) Certified</li>
                    <li>• Texas State Medical License</li>
                    <li>• Member, American Medical Association (AMA)</li>
                    <li>• Member, American Academy of Family Physicians (AAFP)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow">
              <div className="flex items-start">
                <Languages className="w-6 h-6 text-cta mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">Languages</h3>
                  <p className="text-sm text-slate-600">Fluent in English and Korean (한국어)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
