import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      message.trim() 
        ? message 
        : "Hello! I am looking for a 1-on-1 home tutor in Hyderabad. Please assist me."
    );
    window.open(`https://wa.me/916304248840?text=${encodedText}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Popover WhatsApp Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-bold text-lg border-2 border-emerald-400">
                  T
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Teja Home Tuitions</h4>
                <span className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" /> Online • Quick Match
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-emerald-100 hover:text-white p-1 rounded-full hover:bg-emerald-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-emerald-50/50 space-y-3 text-xs leading-relaxed">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700 space-y-1 max-w-[90%]">
              <p className="font-semibold text-emerald-800 text-xs">Namaste! 👋</p>
              <p>Welcome to Teja Home Tuitions Hyderabad!</p>
              <p>Need a qualified 1-on-1 home or online tutor for your child? Message us directly on WhatsApp!</p>
              <div className="text-[10px] text-slate-400 text-right pt-1">Just now</div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <button 
                onClick={() => setMessage("I need a Class 10 CBSE Math Tutor in Hyderabad.")}
                className="bg-white hover:bg-emerald-100 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 transition-colors"
              >
                Class 10 CBSE Math
              </button>
              <button 
                onClick={() => setMessage("I need a Primary School Home Tutor.")}
                className="bg-white hover:bg-emerald-100 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 transition-colors"
              >
                Primary School
              </button>
              <button 
                onClick={() => setMessage("I want to Join as a Home Tutor.")}
                className="bg-white hover:bg-emerald-100 text-emerald-800 text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 transition-colors"
              >
                Join as Tutor
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-xs border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 text-slate-800"
            />
            <button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl transition-colors shadow"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/60"
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-emerald-600 animate-pulse"></span>
        </div>
        <span className="font-extrabold text-sm pr-1">WhatsApp Us</span>
      </button>

    </div>
  );
}
