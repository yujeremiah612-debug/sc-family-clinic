import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-prose-content mx-auto"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-cta/10 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-cta" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-base text-slate-400 mb-16 text-center font-medium">
              Last Updated: April 2026
            </p>

            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                At SC Family Clinic, we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy outlines how we handle information on our website.
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">1. No Collection of PHI</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Our website is designed for informational purposes only. We do not collect Protected Health Information (PHI) through this website. We do not use online appointment forms or patient portals on this domain to ensure maximum security for your sensitive data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">2. HIPAA Compliance</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) in all our clinical operations. Any information shared during your visit or over the phone is protected under federal and state laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">3. Texas Privacy Law</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We comply with the Texas Medical Privacy Act and other applicable state regulations regarding the handling of patient information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">4. Analytics</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We may use Google Analytics to understand how visitors interact with our site. We have configured these tools to anonymize IP addresses to protect your identity.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">5. Contact Us</h2>
                  <p className="text-slate-600 leading-relaxed">
                    If you have questions about our privacy practices, please contact our office directly by phone. We do not recommend sending sensitive information via email.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
