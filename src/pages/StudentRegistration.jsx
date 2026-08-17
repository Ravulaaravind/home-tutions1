import React, { useState } from 'react';
import { 
  UserCheck, GraduationCap, Phone, MapPin, BookOpen, 
  Calendar, CheckCircle2, Sparkles, Send, MessageSquare, ExternalLink, ArrowRight
} from 'lucide-react';
import { HYDERABAD_LOCATIONS, CLASSES_LIST, SUBJECTS_LIST, BOARDS_LIST } from '../data/tutorsData';

export default function StudentRegistration({ presetTutor, onSuccess }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    whatsapp: '',
    studentClass: 'Class 10',
    board: 'CBSE',
    subjectRequired: 'Mathematics',
    location: '',
    tuitionFee: '',
    tuitionMode: 'Online Tuition',
    preferredGender: 'Any Gender',
    preferredDaysTime: '',
    additionalNotes: presetTutor ? `Requesting tutor: ${presetTutor.name} (${presetTutor.subjects?.join(', ')})` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = 
`📚 *NEW STUDENT & PARENT TUITION REGISTRATION - TEJA HOME TUITIONS*

*Parent & Student Details:*
• Parent Name: ${formData.parentName}
• Student Name: ${formData.studentName}
• Phone: ${formData.phone}
• WhatsApp: ${formData.whatsapp}

*Tuition Requirements:*
• Class / Grade: ${formData.studentClass}
• Board / Syllabus: ${formData.board}
• Subject Required: ${formData.subjectRequired}
• Hyderabad Locality: 📍 ${formData.location}
• Tuition Fee Budget: ${formData.tuitionFee ? '₹' + formData.tuitionFee + '/month' : 'Negotiable'}
• Preferred Mode: ${formData.tuitionMode}
• Preferred Tutor Gender: ${formData.preferredGender}
• Timings & Days: ${formData.preferredDaysTime}

*Additional Notes:* ${formData.additionalNotes ? formData.additionalNotes : 'N/A'}

*📢 Official Teja Home Tuitions WhatsApp Helpline:*
https://wa.me/916302664394`;

    window.open(`https://wa.me/916302664394?text=${encodeURIComponent(waText)}`, '_blank');
    setIsSubmitting(false);

    // Automatic form refresh / reset to clean state
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      whatsapp: '',
      studentClass: 'Class 10',
      board: 'CBSE',
      subjectRequired: 'Mathematics',
      location: '',
      tuitionMode: 'Online Tuition',
      preferredGender: 'Any Gender',
      preferredDaysTime: '',
      additionalNotes: ''
    });

    if (onSuccess) {
      onSuccess({
        title: 'Tuition Registration Sent via WhatsApp!',
        message: `Thank you ${formData.parentName}! Your request for ${formData.studentName} (${formData.studentClass} ${formData.board}) has been sent to our WhatsApp helpline (+91 6302664394).`
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 rounded-3xl p-6 sm:p-10 text-white space-y-3 relative overflow-hidden shadow-2xl border border-blue-400/30">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Find Tutor Registration
          </span>
          <span className="bg-emerald-500/30 text-emerald-200 text-xs px-3 py-1 rounded-full border border-emerald-400/40">
            Matched Tutor in 2 Hours
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black">Book a 1-on-1 Home & Online Tutor in Hyderabad</h2>
        <p className="text-blue-100 text-sm max-w-2xl">
          Fill out the registration form below to get background-checked 1-on-1 home or online tutors in Hyderabad tailored to your child's exact subject, class, and location requirements.
        </p>
      </div>

      {/* Main Registration Form */}
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 space-y-8">
        
        {/* Parent & Student Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-blue-600" />
            <span>1. Parent & Student Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Parent / Guardian Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Reddy"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ananya Reddy"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="WhatsApp number"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Academic Requirements */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span>2. Tuition Academic Requirements</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Student Class / Grade *
              </label>
              <select
                value={formData.studentClass}
                onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                {CLASSES_LIST.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Syllabus / Board *
              </label>
              <select
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                {BOARDS_LIST.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Subject Required *
              </label>
              <select
                value={formData.subjectRequired}
                onChange={(e) => setFormData({ ...formData, subjectRequired: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                {SUBJECTS_LIST.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
                <option value="All Subjects">All Subjects (Primary/Middle)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location & Preferences */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-emerald-600" />
            <span>3. Hyderabad Locality & Preferences</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Hyderabad Locality / Area *
              </label>
              <input
                type="text"
                required
                placeholder="Type your area name here..."
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Mode *
              </label>
              <select
                value={formData.tuitionMode}
                onChange={(e) => setFormData({ ...formData, tuitionMode: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="Online Tuition">Online Tuition</option>
                <option value="Home Offline Tuition">Home Offline Tuition</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Tutor Gender *
              </label>
              <select
                value={formData.preferredGender}
                onChange={(e) => setFormData({ ...formData, preferredGender: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="Any Gender">Any Gender</option>
                <option value="Female Tutor Preferred">Female Tutor Preferred</option>
                <option value="Male Tutor Preferred">Male Tutor Preferred</option>
              </select>
            </div>
          </div>

          {/* Major Hyderabad Service Zones Reference Text Box */}
          <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              📍 Major Hyderabad Service Zones (Reference Area List):
            </span>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Madhapur • Gachibowli • Kondapur • Jubilee Hills • Banjara Hills • Kukatpally • KPHB Colony • Miyapur • Nizampet • Bachupally • Pragathi Nagar • Hafeezpet • Chanda Nagar • Begumpet • Ameerpet • SR Nagar • Panjagutta • Himayatnagar • Narayanguda • Nallakunta • Koti • Abids • Mehdipatnam • Tolichowki • Attapur • Manikonda • Puppalguda • Financial District • Tellapur • Kokapet • Narsingi • Sun City • Rajendra Nagar • LB Nagar • Dilsukhnagar • Kothapet • Nagole • Hayathnagar • Uppal • Tarnaka • Moulali • ECIL • Sainikpuri • AS Rao Nagar • Malkajgiri • Secunderabad • Bowenpally • Alwal • Kompally
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tuition Fee / Monthly Budget (₹)
              </label>
              <input
                type="text"
                placeholder="Enter your monthly fee budget..."
                value={formData.tuitionFee}
                onChange={(e) => setFormData({ ...formData, tuitionFee: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Timings & Days
              </label>
              <input
                type="text"
                placeholder="e.g. Mon to Sat"
                value={formData.preferredDaysTime}
                onChange={(e) => setFormData({ ...formData, preferredDaysTime: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Additional Notes / Learning Goals
            </label>
            <textarea
              rows="3"
              placeholder="Specify any specific topics, exam goals (Board Exams, IIT-JEE Foundation), or learning requirements..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Modern WhatsApp Submission Card */}
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full max-w-xl bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 transition-all duration-200 group flex items-center justify-between gap-4 text-left shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* WhatsApp Icon Circle */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>

              {/* Text Info */}
              <div>
                <span className="block font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Send Application via WhatsApp
                </span>
                <span className="block text-xs text-slate-600 mt-0.5 font-medium">
                  Direct submission for instant tutor matching
                </span>
              </div>
            </div>

            {/* Right Small Arrow */}
            <div className="flex items-center text-emerald-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </button>
        </div>

      </form>
    </div>
  );
}
