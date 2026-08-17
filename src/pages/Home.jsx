import React, { useState } from 'react';
import {
  Search, ShieldCheck, UserCheck, Award, Star, MapPin, CheckCircle2,
  ArrowRight, PhoneCall, MessageSquare, BookOpen, Clock, Users, Sparkles,
  GraduationCap, ChevronRight, Play, Check, HeartHandshake
} from 'lucide-react';
import {
  TUTORS_DATA, HYDERABAD_LOCATIONS, CLASSES_LIST,
  SUBJECTS_LIST, TESTIMONIALS_DATA, BOARDS_LIST
} from '../data/tutorsData';

export default function Home({ setActiveTab, onSelectTutor, setSearchFilter }) {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    setSearchFilter({
      class: selectedClass,
      subject: selectedSubject,
      area: selectedArea
    });
    setActiveTab('registration');
  };

  return (
    <div className="space-y-16 pb-12">

      {/* CLEAN FULL SCREEN HERO BANNER SECTION (UNOBSTRUCTED BACKGROUND IMAGE) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between text-white overflow-hidden pt-16 pb-16 px-4">

        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_banner_fresh.jpg"
            alt="1-on-1 Home Tuition and Private Tutor in Hyderabad - Teja Home Tuitions"
            className="w-full h-full object-cover object-center"
          />

          {/* Subtle Transparent Gradient Overlay for Unobstructed Image View */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>

          {/* Subtle Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* Hero Headline & CTA Buttons */}
        <div className="max-w-7xl mx-auto w-full my-auto relative z-10 space-y-6 text-center lg:text-left max-w-3xl lg:mx-0">

          {/* Top Badges */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-xs sm:text-sm font-semibold shadow-xl">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold">
              <MapPin className="w-4 h-4" /> Hyderabad
            </span>
            <span className="text-white/40">•</span>
            <span className="text-blue-100">Classes 1–12</span>
            <span className="text-white/40">•</span>
            <span className="text-emerald-300 font-bold">CBSE • ICSE • State Board</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Find a Tutor Who Fits <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Your Child's Learning Needs</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-2xl text-blue-50 max-w-2xl leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Connect with verified home and online tutors in Hyderabad for personalized, one-to-one learning. Build stronger concepts, improve academic performance, and learn with confidence.
          </p>

          {/* Feature Bullets */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-bold text-white max-w-lg">
            <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Personalized 1-to-1 Attention</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Verified & Screened Tutors</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => setActiveTab('registration')}
              className="amber-gradient-btn text-white px-8 py-4 rounded-2xl font-black text-base shadow-2xl flex items-center gap-2 group"
            >
              <span>Find the Right Tutor</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/916302664394?text=Hi%20Teja%20Home%20Tuition,%20I%20want%20to%20find%20a%20tutor%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2.5 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1.5 sm:gap-2.5 transition-all text-xs sm:text-base border border-emerald-400/40 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white flex-shrink-0" />
              <span>Talk to Us on WhatsApp</span>
            </a>

            <button
              onClick={() => setActiveTab('join-tutor')}
              className="bg-slate-950/80 hover:bg-slate-900 text-white border-2 border-white/40 backdrop-blur-md px-7 py-4 rounded-2xl font-bold text-base transition-all flex items-center gap-2 shadow-xl"
            >
              <UserCheck className="w-5 h-5 text-amber-300" />
              <span>Join as Tutor</span>
            </button>
          </div>

        </div>

        {/* Hero Bottom Stats Strip */}
        <div className="max-w-7xl mx-auto w-full pt-8 relative z-10 hidden sm:block">
          <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl p-4 border border-white/20 grid grid-cols-4 gap-4 text-center text-xs shadow-2xl">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span><strong className="text-white text-sm block">500+ Verified</strong> Tutors in Hyderabad</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-l border-white/15">
              <Users className="w-5 h-5 text-blue-400" />
              <span><strong className="text-white text-sm block">2,500+ Happy</strong> Students Taught</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-l border-white/15">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span><strong className="text-white text-sm block">Verified & Screened</strong> Tutors</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-l border-white/15">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span><strong className="text-white text-sm block">Focused on Better</strong> Learning Outcomes</span>
            </div>
          </div>
        </div>
      </section>







      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="blue-purple-gradient rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              Trial Class Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Ready to Upgrade Your Child's Grades?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
              Call us or message on WhatsApp to get instant tutor matches in Madhapur, Gachibowli, Kukatpally, or anywhere in Hyderabad!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="tel:+916302664394"
                className="bg-white text-blue-900 hover:bg-slate-100 px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" /> Call +91 6302664394
              </a>
              <a
                href="https://wa.me/916302664394?text=Hi%20Teja%20Home%20Tuitions,%20I%20want%20to%20request%20a%20home%20tutor."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
