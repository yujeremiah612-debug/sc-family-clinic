import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">SC Family Clinic</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Personalized, patient-centered care for individuals and families in Plano, Texas. 
              Dr. Steven Chae, MD and our team are dedicated to your health and wellness.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <span className="font-semibold mr-2">Address:</span>
                <span className="text-slate-300">{CLINIC_INFO.address}</span>
              </p>
              <p>
                <span className="font-semibold mr-2">Phone:</span>
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-slate-300 hover:text-white underline decoration-cta underline-offset-4">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/insurance-payments" className="text-slate-300 hover:text-white transition-colors">Insurance & Payments</Link></li>
              <li><Link to="/location-hours" className="text-slate-300 hover:text-white transition-colors">Location & Hours</Link></li>
              <li><Link to="/reviews" className="text-slate-300 hover:text-white transition-colors">Patient Reviews</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Office Hours</h3>
            <ul className="space-y-3 text-sm">
              {CLINIC_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-slate-400 italic">
                Now accepting new patients and Medicare. Call to schedule your appointment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SC Family Clinic. All rights reserved.</p>
          <p className="mt-2">5168 Village Creek Dr, Suite 300, Plano, TX 75093</p>
        </div>
      </div>
    </footer>
  );
}
