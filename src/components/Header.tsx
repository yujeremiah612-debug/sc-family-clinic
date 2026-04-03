import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insurance', path: '/insurance-payments' },
    { name: 'Location', path: '/location-hours' },
    { name: '한국어', path: '/korean' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold text-primary leading-tight">SC Family Clinic</span>
            <span className="text-[10px] md:text-xs text-secondary font-medium tracking-widest uppercase">Plano, Texas</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cta",
                  location.pathname === link.path ? "text-cta" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-bold rounded-full text-white bg-cta hover:bg-blue-700 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              {CLINIC_INFO.phoneDisplay}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 text-base font-medium rounded-md",
                  location.pathname === link.path ? "bg-slate-50 text-cta" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-cta shadow-md"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
