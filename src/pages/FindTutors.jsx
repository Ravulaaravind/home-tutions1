import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Star, MapPin, Briefcase, GraduationCap, 
  CheckCircle2, X, RefreshCw, BookOpen, ShieldCheck, UserCheck, MessageSquare, PhoneCall
} from 'lucide-react';
import { 
  TUTORS_DATA, HYDERABAD_LOCATIONS, CLASSES_LIST, 
  SUBJECTS_LIST, BOARDS_LIST 
} from '../data/tutorsData';

export default function FindTutors({ initialFilters = {}, onSelectTutor, onBookDemo }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState(initialFilters.class || '');
  const [selectedSubject, setSelectedSubject] = useState(initialFilters.subject || '');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedArea, setSelectedArea] = useState(initialFilters.area || '');
  const [genderFilter, setGenderFilter] = useState('Any');
  const [modeFilter, setModeFilter] = useState('Any');
  const [minExperience, setMinExperience] = useState('0');
  const [sortBy, setSortBy] = useState('rating');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedClass('');
    setSelectedSubject('');
    setSelectedBoard('');
    setSelectedArea('');
    setGenderFilter('Any');
    setModeFilter('Any');
    setMinExperience('0');
    setSortBy('rating');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="blue-purple-gradient rounded-3xl p-6 sm:p-10 text-white space-y-3 relative overflow-hidden shadow-xl">
        <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          Hyderabad Tutor Network
        </span>
        <h1 className="text-3xl sm:text-4xl font-black">Find Verified Tutors in Hyderabad</h1>
        <p className="text-blue-100 text-sm max-w-2xl">
          Filter by Class, Subject, Board, Hyderabad Area, Gender, and Mode (Home or Online tuition). All tutors are background-verified.
        </p>
      </div>

      {/* Main Filter Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sidebar Filter Column */}
        <aside className="hidden lg:block lg:col-span-4 xl:col-span-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-6 sticky top-24">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="font-black text-slate-900 text-lg flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-600" /> Filter Tutors
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>

          {/* Search keyword input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Search by Keyword
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Physics, Math, Madhapur..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Class Filter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Class / Grade
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Classes (Class 1 - 12)</option>
              {CLASSES_LIST.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Subjects</option>
              {SUBJECTS_LIST.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Board Filter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Educational Board
            </label>
            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Boards (CBSE, ICSE...)</option>
              {BOARDS_LIST.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Hyderabad Area Location Filter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Hyderabad Area / Locality
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">All Hyderabad Areas</option>
              {HYDERABAD_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tutor Gender
            </label>
            <div className="grid grid-cols-3 gap-1.5 text-xs font-bold">
              {['Any', 'Male', 'Female'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGenderFilter(g)}
                  className={`py-2 rounded-xl border transition-all ${
                    genderFilter === g
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

        </aside>

        {/* Content Column */}
        <main className="lg:col-span-8 xl:col-span-8 space-y-6">
          
          {/* Top Header Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="lg:hidden bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Filter className="w-4 h-4 text-blue-600" /> Filter Tutors
              </button>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {showMobileFilter && (
            <div className="lg:hidden bg-white p-5 rounded-3xl shadow-xl border border-slate-200 space-y-4 animate-in slide-in-from-top duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm">Filter Options</h4>
                <button onClick={() => setShowMobileFilter(false)} className="text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold">Class:</label>
                  <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="w-full mt-1 p-2 bg-slate-50 border rounded-lg">
                    <option value="">All Classes</option>
                    {CLASSES_LIST.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-bold">Subject:</label>
                  <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} className="w-full mt-1 p-2 bg-slate-50 border rounded-lg">
                    <option value="">All Subjects</option>
                    {SUBJECTS_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-bold">Area:</label>
                  <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} className="w-full mt-1 p-2 bg-slate-50 border rounded-lg">
                    <option value="">All Hyderabad Areas</option>
                    {HYDERABAD_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button onClick={resetFilters} className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-xl text-xs font-bold">Reset</button>
                <button onClick={() => setShowMobileFilter(false)} className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-xs font-bold">Apply Filters</button>
              </div>
            </div>
          )}

          {/* Clean Request Tutor Card (Cards list removed as requested) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl font-black text-slate-900">Request Verified Tutor Profiles</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Select your required Class, Subject, and Hyderabad Locality from the filters to receive matched tutor profiles directly on your Phone or WhatsApp within 2 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/916304248840?text=Hi%20Teja%20Home%20Tuitions,%20I%20want%20to%20request%20tutor%20profiles."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> Request via WhatsApp
              </a>

              <a
                href="tel:+916304248840"
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" /> Call Counselor Now
              </a>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}
