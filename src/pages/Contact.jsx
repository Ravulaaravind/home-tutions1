import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, Send, 
  ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, Sparkles, Navigation, ExternalLink 
} from 'lucide-react';
import { HYDERABAD_LOCATIONS, FAQS_DATA } from '../data/tutorsData';

export default function Contact({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    userType: 'Parent',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = 
`📩 *DIRECT INQUIRY - TEJA HOME TUITIONS*

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email ? formData.email : 'N/A'}
• User Type: ${formData.userType}
• Message: ${formData.message}`;

    window.open(`https://wa.me/916302664394?text=${encodeURIComponent(waText)}`, '_blank');
    setIsSubmitting(false);

    // Automatic form refresh / reset to clean state
    setFormData({
      name: '',
      phone: '',
      email: '',
      userType: 'Parent',
      message: ''
    });

    if (onSuccess) {
      onSuccess({
        title: 'Message Sent via WhatsApp!',
        message: `Thank you ${formData.name}! Your inquiry has been sent to our helpline (+91 6302664394).`
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 space-y-6">
      
      {/* Page Header */}
      <div className="blue-purple-gradient rounded-3xl p-6 text-white space-y-2 relative overflow-hidden shadow-xl">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Contact Support
          </span>
          <span className="bg-emerald-500/30 text-emerald-200 text-xs px-3 py-1 rounded-full border border-emerald-400/40">
            Helpline: +91 6302664394
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black">Contact Teja Home Tuitions Hyderabad</h2>
        <p className="text-blue-100 text-xs sm:text-sm max-w-2xl">
          Have questions about home tutor fees, scheduling classes, or tutor onboarding? Reach out to our Hyderabad counseling team!
        </p>
      </div>

      {/* Grid Layout: Contact Info & Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Head Office Contact Details</h3>
            
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Hyderabad Office Address</h4>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                    Abids, Hyderabad, TS - 500001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Helpline Phone Numbers</h4>
                  <a href="tel:+916302664394" className="text-blue-700 font-bold hover:underline block text-xs mt-0.5">
                    +91 6302664394
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Support</h4>
                  <a 
                    href="https://wa.me/916302664394?text=Hi%20Teja%20Home%20Tuitions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline block text-xs mt-0.5"
                  >
                    +91 6302664394 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <a href="mailto:tejahometuitionshyd01@gmail.com" className="text-slate-600 hover:text-blue-700 text-xs mt-0.5 block font-medium">
                    tejahometuitionshyd01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Monday – Saturday: 8:00 AM – 9:00 PM<br />
                    Sunday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200 space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-slate-900">Send Us a Direct Message</h3>
            <p className="text-slate-500 text-xs">Fill out the quick form below and our counselor will respond promptly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Anand Kumar"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile / Phone *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="10-digit mobile number"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="e.g. anand@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  I am a...
                </label>
                <select
                  value={formData.userType}
                  onChange={(e) => setFormData({...formData, userType: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                >
                  <option value="Parent">Parent seeking Home Tutor</option>
                  <option value="Student">Student</option>
                  <option value="Tutor">Teacher / Tutor seeking Jobs</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Message / Inquiry Details *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Write your questions regarding tutor availability, fees, or starting classes..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-auto max-w-xs sm:max-w-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-2.5 text-sm sm:text-base transition-all border border-white/40 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </form>

        </div>

      </div>

    </div>
  );
}
