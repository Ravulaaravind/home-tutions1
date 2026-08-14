import React, { useState } from 'react';
import { 
  UserCheck, BookOpen, MapPin, Phone, MessageSquare, Clock, 
  Sparkles, CheckCircle2, ShieldCheck, User, Calendar
} from 'lucide-react';
import { HYDERABAD_LOCATIONS, CLASSES_LIST, SUBJECTS_LIST, BOARDS_LIST } from '../data/tutorsData';

export default function StudentRegistration({ onSuccess, presetTutor = null }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    studentClass: 'Class 10',
    board: 'CBSE',
    subjectRequired: 'Mathematics',
    location: 'Gachibowli',
    preferredGender: 'Any',
    tuitionMode: 'Home Tuition',
    preferredDaysTime: 'Mon - Fri (5:00 PM - 7:00 PM)',
    phone: '',
    whatsapp: '',
    additionalNotes: presetTutor ? `Interested in classes with ${presetTutor.name}` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = 
`📚 *NEW HOME TUTOR REQUEST - TEJA HOME TUITIONS*

*Parent & Student Details:*
• Parent Name: ${formData.parentName}
• Student Name: ${formData.studentName}
• Phone: ${formData.phone}
• WhatsApp: ${formData.whatsapp}

*Tuition Requirement:*
• Class: ${formData.studentClass}
• Board: ${formData.board}
• Subject Required: ${formData.subjectRequired}
• Hyderabad Area: 📍 ${formData.location}
• Preferred Mode: ${formData.tuitionMode}
• Preferred Tutor Gender: ${formData.preferredGender}
• Timings / Days: ${formData.preferredDaysTime}

*Additional Notes:* ${formData.additionalNotes ? formData.additionalNotes : 'N/A'}`;

    window.open(`https://wa.me/916304248840?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      
      {/* Banner */}
      <div className="blue-purple-gradient rounded-3xl p-6 sm:p-10 text-white space-y-3 relative overflow-hidden shadow-xl">
        <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          Student & Parent Registration
        </span>
        <h1 className="text-3xl sm:text-4xl font-black">Start Direct Tuition Classes</h1>
        <p className="text-blue-100 text-sm max-w-xl">
          Tell us your tuition requirement and we'll match you with Hyderabad's top background-verified home tutors in your neighborhood.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 space-y-6">
        
        {presetTutor && (
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-2xl flex items-center gap-3">
            <img src={presetTutor.image} alt={presetTutor.name} className="w-12 h-12 rounded-xl object-cover" />
            <div>
              <span className="text-xs text-indigo-700 font-bold">Selected Tutor for Demo:</span>
              <h4 className="font-extrabold text-slate-900 text-sm">{presetTutor.name} ({presetTutor.qualification})</h4>
            </div>
          </div>
        )}

        {/* Section 1: Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Parent / Guardian Name *
            </label>
            <input
              type="text"
              required
              value={formData.parentName}
              onChange={(e) => setFormData({...formData, parentName: e.target.value})}
              placeholder="e.g. Ramesh Reddy"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Student Name *
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
              placeholder="e.g. Rohan Reddy"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Section 2: Class, Board & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Class / Grade *
            </label>
            <select
              value={formData.studentClass}
              onChange={(e) => setFormData({...formData, studentClass: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              {CLASSES_LIST.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Board *
            </label>
            <select
              value={formData.board}
              onChange={(e) => setFormData({...formData, board: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              {BOARDS_LIST.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Subject Required *
            </label>
            <select
              value={formData.subjectRequired}
              onChange={(e) => setFormData({...formData, subjectRequired: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              {SUBJECTS_LIST.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Section 3: Location & Preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Hyderabad Area *
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              {HYDERABAD_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Tutor Gender
            </label>
            <select
              value={formData.preferredGender}
              onChange={(e) => setFormData({...formData, preferredGender: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              <option value="Any">Any Gender</option>
              <option value="Male">Male Tutor</option>
              <option value="Female">Female Tutor</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tuition Mode
            </label>
            <select
              value={formData.tuitionMode}
              onChange={(e) => setFormData({...formData, tuitionMode: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
            >
              <option value="Home Tuition">Home Tuition (At Residence)</option>
              <option value="Online">Online Tuition</option>
            </select>
          </div>
        </div>

        {/* Section 4: Days / Timings & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Preferred Days & Timings *
            </label>
            <input
              type="text"
              required
              value={formData.preferredDaysTime}
              onChange={(e) => setFormData({...formData, preferredDaysTime: e.target.value})}
              placeholder="e.g. Mon to Fri Evening 6 PM"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value, whatsapp: e.target.value})}
              placeholder="10-digit mobile number"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Additional Notes / Requirements (Optional)
          </label>
          <textarea
            rows={2}
            value={formData.additionalNotes}
            onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
            placeholder="Mention any specific chapters, exam goals, or preferences..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full amber-gradient-btn text-white py-4 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Submitting Requirement...</span>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Submit & Get Call in 2 Hours</span>
              </>
            )}
          </button>
        </div>

      </form>

    </div>
  );
}
