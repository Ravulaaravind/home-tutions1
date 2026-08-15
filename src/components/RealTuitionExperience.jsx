import React from 'react';
import { Sparkles } from 'lucide-react';

export default function RealTuitionExperience() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/80 space-y-8">
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
              src="/hero_banner_fresh.jpg" 
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
              src="/tuition_card_fresh.jpg" 
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

        {/* TUTOR WHATSAPP CHANNEL BANNER */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-950 rounded-xl sm:rounded-3xl p-3 sm:p-8 text-white shadow-lg sm:shadow-2xl border border-emerald-500/40 relative overflow-hidden space-y-2.5 sm:space-y-6">
          {/* Subtle Glow Orb */}
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-6 relative z-10">
            <div className="space-y-1.5 sm:space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-[#25D366] text-slate-950 font-black text-[9px] sm:text-xs px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 sm:gap-1.5 shadow">
                  📢 Official WhatsApp Channel
                </span>
              </div>

              <h3 className="text-sm sm:text-3xl font-black text-white leading-snug">
                Join Our Tutor WhatsApp Channel
              </h3>
              <p className="text-emerald-200 font-bold text-[11px] sm:text-base">
                Stay connected with Teja Home Tuitions
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 sm:gap-2.5 pt-0.5 text-[10px] sm:text-sm font-semibold text-emerald-100">
                <div className="flex items-center gap-1">
                  <span>📚</span> <span>New opportunities</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍</span> <span>Student locations</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📢</span> <span>Announcements</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔔</span> <span>Daily updates</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0 pt-0.5 md:pt-0">
              <a
                href="https://whatsapp.com/channel/0029VbDY3eJ7DAX4GXRn3v32"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-3.5 sm:px-6 py-2 sm:py-4 rounded-lg sm:rounded-2xl text-[11px] sm:text-base flex items-center justify-center gap-1.5 sm:gap-3 shadow-md transition-all border border-white/40 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 sm:w-6 sm:h-6 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Join Tutor WhatsApp Channel</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
