import React from 'react';
import { UserCheck, ShieldCheck, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/80 space-y-8">
        <div className="text-center space-y-3">
          <span className="bg-blue-100 text-blue-800 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Why Parents Trust Teja Home Tuitions
          </h2>
          <p className="text-slate-800 font-bold max-w-2xl mx-auto text-sm sm:text-base">
            We bridge the gap between dedicated academic mentors and students needing personal attention across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200 bg-slate-50/50">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1-to-1 Personal Attention</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Unlike crowded coaching institutes, our home tutors focus 100% on your child's specific strengths, weaknesses, and learning pace.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200 bg-slate-50/50">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Background Checked Tutors</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Every educator passes multi-step screening including Aadhaar check, degree verification, and teaching evaluation.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200 bg-slate-50/50">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Flexible Timings & Home Comfort</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Save travel time! Schedule classes at your preferred timings directly at your home or convenient online interactive sessions.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-200 bg-slate-50/50">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Transparent & Affordable</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              No hidden registration fees. Pay affordable monthly fees with guaranteed replacement if you ever want a different tutor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
