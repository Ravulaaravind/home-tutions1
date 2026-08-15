import React, { useState, useEffect } from 'react';
import { 
  Search, MapPin, Filter, Star, UserCheck, GraduationCap, 
  MessageSquare, Phone, CheckCircle2, Sparkles, BookOpen, ShieldCheck
} from 'lucide-react';
import { TUTORS_DATA, HYDERABAD_LOCATIONS, CLASSES_LIST, SUBJECTS_LIST } from '../data/tutorsData';

export default function FindTutors({ initialFilters = {}, onSelectTutor, onBookDemo }) {
  const [selectedClass, setSelectedClass] = useState(initialFilters.class || '');
  const [selectedSubject, setSelectedSubject] = useState(initialFilters.subject || '');
  const [selectedArea, setSelectedArea] = useState(initialFilters.area || '');

  useEffect(() => {
    if (initialFilters.class) setSelectedClass(initialFilters.class);
    if (initialFilters.subject) setSelectedSubject(initialFilters.subject);
    if (initialFilters.area) setSelectedArea(initialFilters.area);
  }, [initialFilters]);

  // Filter tutors based on criteria
  const filteredTutors = TUTORS_DATA.filter((tutor) => {
    const matchClass = !selectedClass || tutor.classes?.some(c => c.toLowerCase().includes(selectedClass.toLowerCase()));
    const matchSubject = !selectedSubject || tutor.subjects?.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase()));
    const matchArea = !selectedArea || tutor.areas?.some(l => l.toLowerCase().includes(selectedArea.toLowerCase()));
    return matchClass && matchSubject && matchArea;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

      {/* Filter Bar */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600" /> Filter Tutors by Preference
          </span>
          {(selectedClass || selectedSubject || selectedArea) && (
            <button
              onClick={() => { setSelectedClass(''); setSelectedSubject(''); setSelectedArea(''); }}
              className="text-xs text-rose-600 font-bold hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Class / Grade
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">All Classes (Class 1 to 12)</option>
              {CLASSES_LIST.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Subject Required
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">All Subjects</option>
              {SUBJECTS_LIST.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Hyderabad Locality
            </label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              <option value="">All Hyderabad Localities</option>
              {HYDERABAD_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Tutors Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">
            Available Verified Tutors ({filteredTutors.length})
          </h2>
        </div>

        {filteredTutors.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center space-y-4 shadow-md border border-slate-200">
            <Search className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">No specific tutors matched your exact search</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Don't worry! We have 500+ unlisted tutors in Hyderabad. Register your requirement directly or WhatsApp us to get matched.
            </p>
            <button
              onClick={() => { setSelectedClass(''); setSelectedSubject(''); setSelectedArea(''); }}
              className="amber-gradient-btn text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <div 
                key={tutor.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-slate-200/80 hover:shadow-2xl hover:-translate-y-1 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <img 
                      src={tutor.image} 
                      alt={tutor.name} 
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shadow-md flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <h3 className="text-lg font-bold text-slate-900">{tutor.name}</h3>
                        <ShieldCheck className="w-4 h-4 text-emerald-600 fill-emerald-100 flex-shrink-0" />
                      </div>
                      <span className="text-xs text-blue-700 font-bold block">{tutor.qualification}</span>
                      <span className="text-xs text-slate-500 font-semibold block">{tutor.experience} Experience</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-500 font-semibold block uppercase tracking-wider text-[10px]">Subjects:</span>
                      <span className="font-bold text-slate-800">{tutor.subjects?.join(', ')}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 font-semibold block uppercase tracking-wider text-[10px]">Classes & Boards:</span>
                      <span className="font-bold text-slate-800">{tutor.classes?.join(', ')} ({tutor.boards?.join(', ')})</span>
                    </div>

                    <div>
                      <span className="text-slate-500 font-semibold block uppercase tracking-wider text-[10px]">Hyderabad Areas:</span>
                      <span className="font-bold text-emerald-800">📍 {tutor.areas?.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectTutor(tutor)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 rounded-xl transition-colors"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => onBookDemo(tutor)}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Request Tutor</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
