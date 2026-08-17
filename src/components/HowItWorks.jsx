import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function HowItWorks({ setActiveTab }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 space-y-10">

        <div className="text-center space-y-3">
          <span className="bg-amber-400/20 text-amber-300 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider border border-amber-400/30">
            3 Simple Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-black">How It Works</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Find the right home tutor for your child in under 2 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Step 1 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
              01
            </div>
            <h3 className="text-xl font-bold">Tell Us What You Need</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Share your child's class, subject, board, preferred location, and learning requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
              02
            </div>
            <h3 className="text-xl font-bold">Get Matched With a Tutor</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We help you find a suitable tutor based on your child's academic needs, location, and preferred schedule.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 text-center relative hover:border-amber-400/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white font-black text-2xl flex items-center justify-center mx-auto shadow-lg">
              03
            </div>
            <h3 className="text-xl font-bold">Start Learning</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Begin personalized one-to-one sessions at home or online and track your child's learning progress.
            </p>
          </div>

        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setActiveTab && setActiveTab('registration')}
            className="amber-gradient-btn text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-xl inline-flex items-center gap-2 hover:scale-105 transition-all"
          >
            <span>Register Now for Direct Classes</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
