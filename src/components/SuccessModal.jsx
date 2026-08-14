import React from 'react';
import { CheckCircle, X, Sparkles, PhoneCall, Calendar } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose, title, message, ticketNumber }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 text-center space-y-4 animate-in zoom-in-95 duration-200 relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div>
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full mb-2 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Application Submitted
          </span>
          <h3 className="text-2xl font-bold text-slate-900">{title || "Thank You!"}</h3>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            {message || "We will contact you shortly."}
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full amber-gradient-btn text-white py-3 rounded-xl font-bold text-sm shadow-md"
          >
            Done / Close
          </button>
        </div>

      </div>
    </div>
  );
}
