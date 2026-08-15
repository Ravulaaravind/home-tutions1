import React from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, MessageSquare, 
  ChevronRight, Heart, Award, ShieldCheck, Clock, Sparkles, ExternalLink
} from 'lucide-react';
import { HYDERABAD_LOCATIONS } from '../data/tutorsData';

export default function Footer({ setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* WHATSAPP CHANNEL FOOTER BANNER - PROFESSIONAL DARK EMERALD GREEN */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 rounded-3xl p-6 sm:p-8 border border-emerald-500/40 text-white shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow">
              <Sparkles className="w-3.5 h-3.5" /> Join Teja Home Tuition Group for Every Update
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Join Official Teja Home Tuition Group
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Get instant alerts for new home tuition opportunities, student requirements across Hyderabad, location updates, and teacher announcements!
            </p>
          </div>

          <a
            href="https://chat.whatsapp.com/LJ9vFZ5b91YJV6rEWt1ZCu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 group transition-all text-sm shrink-0 border border-emerald-300/40"
          >
            <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>Join WhatsApp Group</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">Teja Home Tuitions</span>
                <span className="block text-[11px] text-amber-400 font-bold uppercase tracking-wider">Hyderabad's Trusted Tutor Network</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Providing verified, background-checked, and highly qualified 1-on-1 home and online tutors across Hyderabad. Empowering students in Classes 1–12 across CBSE, ICSE, and State Boards to achieve academic excellence.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Tutors
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-amber-400" /> Direct Classes
              </span>
              <span className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-blue-400" /> Quick Matching
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleTabClick('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('find-tutors')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Find Tutors
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('join-tutor')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Join as Tutor
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('registration')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Parent Registration
                </button>
              </li>
              <li>
                <button onClick={() => handleTabClick('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Tuition Boards & Classes */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Tuition Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> CBSE Home Tuitions
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> ICSE / ISC Home Tuitions
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Telangana State Board
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Classes 1 - 5 (Primary)
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Classes 6 - 10 (High School)
              </li>
              <li className="hover:text-white cursor-pointer transition-colors flex items-center gap-1.5" onClick={() => handleTabClick('find-tutors')}>
                <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Intermediate 11th & 12th
              </li>
            </ul>
          </div>

          {/* Contact Info & Office Address */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Contact Office</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <span>Near Habsiguda Metro Station, Uppal Road, Habsiguda, Hyderabad, TS - 500007</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+916304248840" className="hover:text-white transition-colors">+91 6304248840</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/916304248840" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">+91 6304248840 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@tejahometuitions.com" className="hover:text-white transition-colors">contact@tejahometuitions.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Hyderabad Locations Tag Cloud */}
        <div className="py-8 border-b border-slate-800">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Service Areas Across Hyderabad</h5>
          <div className="flex flex-wrap gap-2 text-xs">
            {HYDERABAD_LOCATIONS.map((loc) => (
              <button 
                key={loc}
                onClick={() => handleTabClick('find-tutors')}
                className="bg-slate-900 hover:bg-blue-900 hover:text-white text-slate-400 px-2.5 py-1 rounded-md transition-colors"
              >
                Tutor in {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Teja Home Tuitions. All rights reserved. Premium Education Solutions, Hyderabad.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for Hyderabad Students & Educators</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
