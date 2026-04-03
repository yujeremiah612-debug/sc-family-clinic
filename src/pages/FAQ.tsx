import { Plus, Minus } from 'lucide-react';
import React from 'react';
import CTASection from '../components/CTASection';
import { CLINIC_INFO } from '../constants';

export default function FAQ() {
  const faqs = [
    {
      q: "Are you accepting new patients?",
      a: "Yes! We are currently accepting new patients of all ages at our Plano clinic. Please call us at " + CLINIC_INFO.phoneDisplay + " to schedule your first appointment."
    },
    {
      q: "Do you accept Medicare?",
      a: "Yes, we welcome Medicare patients and accept traditional Medicare as well as many Medicare Advantage plans, including UHC Advantage."
    },
    {
      q: "Does the doctor speak Korean?",
      a: "Yes, Dr. Steven Chae is fluent in both English and Korean (한국어), providing comfortable care for our Korean-speaking community."
    },
    {
      q: "What insurance plans do you accept?",
      a: "We accept United Healthcare (PPO/HMO), UHC Advantage, Molina, Medicare, and several other major plans. Please call our office to verify your specific coverage."
    },
    {
      q: "Where is the clinic located?",
      a: "We are located at 5168 Village Creek Dr, Suite 300, Plano, TX 75093. We are near the intersection of West Plano Parkway and Village Creek Drive."
    },
    {
      q: "What should I do if I don't have insurance?",
      a: "We offer self-pay options for patients without insurance. Please contact our office to discuss our consultation fees and payment options."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="max-prose-content">
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 text-center tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 mb-16 text-center leading-relaxed">
              Find answers to common questions about our clinic, services, and policies.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection dark />

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        })}
      </script>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl card-shadow overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-primary pr-4">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-cta shrink-0" /> : <Plus className="w-5 h-5 text-cta shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
