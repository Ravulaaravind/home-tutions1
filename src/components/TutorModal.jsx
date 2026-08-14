import React, { useState } from 'react';
import { 
  X, Star, ShieldCheck, MapPin, Briefcase, GraduationCap, 
  BookOpen, Award, CheckCircle2, Phone, MessageSquare, Clock
} from 'lucide-react';

export default function TutorModal({ tutor, onClose, onBookDemo }) {
  if (!tutor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-8 relative animate-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="blue-purple-gradient text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img 
              src={tutor.image} 
              alt={tutor.name}
              className="w-24 h-24 rounded-2xl object-cover border-4 border-white/30 shadow-lg flex-shrink-0" 
            />
            
            <div className="text-center sm:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {tutor.badge || 'Verified Expert'}
                </span>
                <span className="bg-emerald-500/30 text-emerald-200 text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-400/40">
                  <ShieldCheck className="w-3.5 h-3.5" /> Background Checked
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{tutor.name}</h3>
              <p className="text-blue-200 text-sm">{tutor.title}</p>
              
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-blue-100 pt-1">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-amber-300" /> {tutor.qualification}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-amber-300" /> {tutor.experience} Years Exp.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Key Quick Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Rating</span>
              <span className="text-lg font-black text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {tutor.rating}
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Teaching Mode</span>
              <span className="text-sm font-bold text-indigo-700 mt-1 block">
                {tutor.mode}
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Monthly Fee</span>
              <span className="text-sm font-bold text-emerald-700 mt-1 block">
                {tutor.monthlyRate}
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Reviews</span>
              <span className="text-sm font-bold text-slate-800 mt-1 block">
                {tutor.reviewsCount}+ Parents
              </span>
            </div>
          </div>

          {/* Bio & Approach */}
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" /> Bio & Teaching Approach
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              {tutor.bio}
            </p>
          </div>

          {/* Subjects & Classes Taught */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2">Subjects Handled:</h5>
              <div className="flex flex-wrap gap-1.5">
                {tutor.subjects.map((sub) => (
                  <span key={sub} className="bg-indigo-100 text-indigo-800 font-medium text-xs px-2.5 py-1 rounded-lg">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2">Classes Taught:</h5>
              <div className="flex flex-wrap gap-1.5">
                {tutor.classes.map((c) => (
                  <span key={c} className="bg-blue-100 text-blue-800 font-medium text-xs px-2.5 py-1 rounded-lg">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Boards & Hyderabad Service Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2">Boards Covered:</h5>
              <div className="flex flex-wrap gap-1.5">
                {tutor.boards.map((b) => (
                  <span key={b} className="bg-amber-100 text-amber-900 font-bold text-xs px-2.5 py-1 rounded-lg">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" /> Preferred Hyderabad Localities:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {tutor.areas.map((area) => (
                  <span key={area} className="bg-slate-100 text-slate-700 font-medium text-xs px-2.5 py-1 rounded-lg">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          {tutor.achievements && tutor.achievements.length > 0 && (
            <div>
              <h5 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" /> Key Achievements:
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {tutor.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>⚡ 1 Trial Class included before finalizing</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/916304248840?text=Hi,%20I%20want%20to%20start%20classes%20with%20tutor%20${encodeURIComponent(tutor.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Contact
            </a>

            <button
              onClick={() => {
                onClose();
                onBookDemo(tutor);
              }}
              className="flex-1 sm:flex-initial amber-gradient-btn text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
            >
              Start Classes Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
