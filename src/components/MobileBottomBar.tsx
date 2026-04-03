import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <a
        href={`tel:${CLINIC_INFO.phone}`}
        className="flex items-center justify-center w-full bg-cta text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
      >
        <Phone className="w-5 h-5 mr-3 fill-current" />
        Call {CLINIC_INFO.phoneDisplay}
      </a>
    </div>
  );
}
