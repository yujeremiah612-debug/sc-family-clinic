import { Phone, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';
import { motion } from 'motion/react';

export default function Insurance() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-prose-content mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Insurance & Payments
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We accept a wide variety of insurance plans to ensure our patients have access to the care they need.
            </p>
          </motion.div>

          <div className="max-prose-content mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-alt p-8 md:p-10 rounded-[2.5rem] border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
                <ShieldCheck className="w-7 h-7 text-cta mr-3" />
                Accepted Insurance Plans
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "United Healthcare (PPO/HMO)",
                  "UHC Medicare Advantage",
                  "Medicare (Traditional)",
                  "Molina Healthcare",
                  "Aetna (Select Plans)",
                  "Blue Cross Blue Shield (Select Plans)"
                ].map((plan, i) => (
                  <div key={i} className="flex items-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 shrink-0" />
                    <span className="text-base font-medium text-slate-700">{plan}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-500 italic flex items-start">
                <span className="mr-2">*</span>
                Insurance coverage can vary. Please call our office to verify that we accept your specific plan.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 card-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-cta mr-3" />
                Uninsured Patients
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                If you do not have insurance, please call our office to discuss self-pay options. 
                We strive to make healthcare accessible and can provide information on our consultation fees.
              </p>
              <a 
                href={`tel:${CLINIC_INFO.phone}`} 
                className="inline-flex items-center px-8 py-4 bg-cta text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 card-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-8">What to Bring to Your Appointment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Valid Photo ID", desc: "Driver's license or state-issued identification." },
                  { title: "Insurance Card", desc: "Your current medical insurance card." },
                  { title: "Medication List", desc: "A list of all current medications, including dosages." },
                  { title: "Medical Records", desc: "Any relevant records from previous physicians (if new patient)." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-sm font-bold text-primary mr-5 shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg mb-1">{item.title}</p>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection dark />
    </div>
  );
}
