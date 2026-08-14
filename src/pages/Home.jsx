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
    setActiveTab('find-tutors');
  };

  return (
    <div className="space-y-16 pb-12">

      {/* CLEAN FULL SCREEN HERO BANNER SECTION (UNOBSTRUCTED BACKGROUND IMAGE) */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between text-white overflow-hidden pt-16 pb-16 px-4">

        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_tuition_banner.jpg"
            alt="Full Screen Home Tuition Banner Hyderabad"
            className="w-full h-full object-cover object-center scale-105 filter brightness-105 contrast-[1.05] transition-all duration-700"
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
            Find the Right <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Tutor</span> for Your Child
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-2xl text-blue-50 max-w-2xl leading-relaxed font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            Verified 1-to-1 Home & Online Tuitions in Hyderabad. Boost marks, master difficult subjects, and build lifelong academic confidence.
          </p>

          {/* Feature Bullets */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-bold text-white max-w-lg">
            <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>1-to-1 Home Tuition</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Background Verified</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => {
                const searchSec = document.getElementById('search-tutor-section');
                searchSec?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="amber-gradient-btn text-white px-8 py-4 rounded-2xl font-black text-base shadow-2xl flex items-center gap-2 group"
            >
              <span>Find a Tutor</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/916304248840?text=Hi%20Teja%20Home%20Tuitions,%20I%20need%20a%20home%20tutor%20in%20Hyderabad."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-7 py-4 rounded-2xl shadow-xl flex items-center gap-2.5 transition-all text-base border border-emerald-400/40 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 fill-white text-white" />
              <span>Need a Tutor? WhatsApp Us</span>
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
              <span><strong className="text-white text-sm block">Aadhaar & Degree</strong> Checked Tutors</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-l border-white/15">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span><strong className="text-white text-sm block">4.9 / 5 Star</strong> Parent Rating</span>
            </div>
          </div>
        </div>

      </section>

      {/* DEDICATED SEARCH SECTION (MOVED BELOW HERO BANNER) */}
      <section id="search-tutor-section" className="max-w-7xl mx-auto px-4 -mt-10 relative z-30">
        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80 space-y-6">

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-amber-600 font-black text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" /> Instant Tutor Matcher
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Request Home Tutor Now</h2>
            </div>
          </div>

          <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Class / Grade
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">All Classes (Class 1 to 12)</option>
                {CLASSES_LIST.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Subject Required
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">All Subjects (Math, Science, Physics...)</option>
                {SUBJECTS_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Hyderabad Area / Locality
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="">All Areas (Madhapur, Gachibowli...)</option>
                {HYDERABAD_LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full amber-gradient-btn text-white py-4 rounded-2xl font-black text-base shadow-xl flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Search Matched Tutors</span>
              </button>
            </div>

          </form>

        </div>
      </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center space-y-3 mb-12">
            <span className="bg-blue-100 text-blue-800 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Why Parents Trust Teja Home Tuitions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              We bridge the gap between dedicated academic mentors and students needing personal attention across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">1-to-1 Personal Attention</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Unlike crowded coaching institutes, our home tutors focus 100% on your child's specific strengths, weaknesses, and learning pace.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Background Checked Tutors</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every educator passes multi-step screening including Aadhaar check, degree verification, and teaching evaluation.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Flexible Timings & Home Comfort</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Save travel time! Schedule classes at your preferred timings directly at your home or convenient online interactive sessions.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Transparent & Affordable</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No hidden registration fees. Pay affordable monthly fees with guaranteed replacement if you ever want a different tutor.
              </p>
            </div>

          </div>
        </section>

        {/* VISUAL FEATURED HOME & ONLINE TUITION PHOTOGRAPHY GALLERY */}
        <section className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 space-y-8">
            <div className="text-center space-y-2">
              <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Real Tuition Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
                1-on-1 Home & Online Tuition Classes in Hyderabad
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                Whether you prefer face-to-face home learning or flexible interactive online tuition, our verified educators deliver top academic results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tuition Photo Card 1 */}
              <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-slate-200">
                <img 
                  src="/tuition_photo_1.jpg" 
                  alt="1-on-1 Home Tuition Session Hyderabad" 
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white space-y-2">
                  <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full w-max uppercase tracking-wider">
                    📍 1-on-1 Home Tuition
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">Personalized Doorstep Home Learning</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Dedicated home tutors in Gachibowli, Madhapur, Kukatpally, Banjara Hills & all Hyderabad localities.
                  </p>
                </div>
              </div>

              {/* Tuition Photo Card 2 */}
              <div className="relative group overflow-hidden rounded-3xl shadow-xl border border-slate-200">
                <img 
                  src="/tuition_photo_2.jpg" 
                  alt="Interactive Online Tuition Class Hyderabad" 
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white space-y-2">
                  <span className="bg-emerald-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full w-max uppercase tracking-wider">
                    💻 Interactive Online Tuition
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">Flexible Live 1-on-1 Online Sessions</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    Interactive digital board classes with weekly test series, doubt clearing, and progress tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="text-center space-y-3">
            <span className="bg-amber-400/20 text-amber-300 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
              3 Simple Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">How It Works</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm">
              Getting the perfect home tutor for your child takes less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold">Submit Requirement</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Fill out our quick registration form with student class, subject, board, and location in Hyderabad.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold">Match Tutor & Schedule</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We assign the top-rated tutor in your area and arrange 1-to-1 tuition classes at your home or online.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold">Start Regular Classes</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Finalize class timings and start regular tuition with weekly tracking reports.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setActiveTab('registration')}
              className="amber-gradient-btn text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl inline-flex items-center gap-2"
            >
              <span>Register Now for Direct Classes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
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
                href="tel:+916304248840"
                className="bg-white text-blue-900 hover:bg-slate-100 px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-blue-600" /> Call +91 6304248840
              </a>
              <a
                href="https://wa.me/916304248840?text=Hi%20Teja%20Home%20Tuitions,%20I%20want%20to%20request%20a%20home%20tutor."
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
