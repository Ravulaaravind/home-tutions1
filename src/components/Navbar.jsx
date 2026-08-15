import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Phone, MessageSquare, Menu, X, 
  Search, UserCheck, UserPlus, MapPin, Sparkles
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'registration', label: 'Find Tutor' },
    { id: 'join-tutor', label: 'Join as Tutor' },
    { id: 'contact', label: 'Contact' },
  ];

  // Scroll spy effect to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      {/* Top Notification Bar */}
      <div className="blue-purple-gradient text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Hyderabad • 1-to-1 Home & Online Tuitions</span>
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Home Tuitions Available
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+916304248840" 
              className="flex items-center gap-1 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 6304248840</span>
            </a>
            <a 
              href="https://wa.me/916304248840?text=Hi%20Teja%20Home%20Tuitions,%20I%20am%20looking%20for%20a%20home%20tutor%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-medium transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-nav border-b border-slate-200/80 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-800 to-violet-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="block text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent">
                Teja Home Tuitions
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-indigo-600 -mt-1">
                Hyderabad's #1 Tutor Network
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('registration')}
              className="amber-gradient-btn text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Find a Tutor</span>
            </button>
            
            <button
              onClick={() => handleNavClick('join-tutor')}
              className="bg-slate-900 hover:bg-blue-950 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-amber-400" />
              <span>Join as Tutor</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('registration')}
              className="amber-gradient-btn text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm"
            >
              Find Tutor
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 bg-white/95 rounded-2xl p-4 shadow-xl space-y-2 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-amber-400"></div>}
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('join-tutor')}
                className="w-full text-center bg-slate-900 text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4 text-amber-400" />
                <span>Join as Tutor</span>
              </button>
              
              <button
                onClick={() => handleNavClick('registration')}
                className="w-full text-center bg-blue-600 text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Student/Parent Registration</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
