import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, Send, 
  ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, Sparkles 
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
`💬 *NEW WEBSITE INQUIRY - TEJA HOME TUITIONS*

*Contact Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• User Type: ${formData.userType}

*Inquiry Message:*
${formData.message}`;

    window.open(`https://wa.me/916304248840?text=${encodeURIComponent(waText)}`, '_blank');
    setFormData({ name: '', phone: '', email: '', userType: 'Parent', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
      {/* Top Banner */}
      <div className="blue-purple-gradient rounded-3xl p-6 sm:p-10 text-white space-y-3 relative overflow-hidden shadow-xl">
        <span className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black">Contact Teja Home Tuitions</h1>
        <p className="text-blue-100 text-sm max-w-xl">
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
                    Suite 302, Cyber Heights, Hitec City Main Road, Madhapur, Hyderabad, TS - 500081 (Opp. Cyber Towers)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Helpline Phone Numbers</h4>
                  <a href="tel:+916304248840" className="text-blue-700 font-bold hover:underline block text-xs mt-0.5">
                    +91 6304248840
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
                    href="https://wa.me/916304248840?text=Hi%20Teja%20Home%20Tuitions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline block text-xs mt-0.5"
                  >
                    +91 6304248840 (Click to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <a href="mailto:contact@tejahometuitions.com" className="text-slate-600 hover:text-blue-700 text-xs mt-0.5 block">
                    contact@tejahometuitions.com
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

          {/* Service Areas Box */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-3 shadow-md">
            <h4 className="font-bold text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" /> Major Hyderabad Service Zones
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-300">
              {HYDERABAD_LOCATIONS.map(loc => (
                <span key={loc} className="bg-slate-800 px-2.5 py-1 rounded-md">
                  📍 {loc}
                </span>
              ))}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full amber-gradient-btn text-white py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? <span>Sending Message...</span> : <><Send className="w-4 h-4" /> <span>Send Message</span></>}
            </button>
          </form>

        </div>

      </div>

      {/* Embedded Map Section */}
      <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-200 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" /> Location Map - Madhapur, Hyderabad
        </h3>
        
        <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative">
          <iframe
            title="Teja Home Tuitions Hyderabad Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.297746467389!2d78.3845!3d17.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be70524bcb!2sHitec%20City%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQ ACCORDION SECTION */}
      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
        <div className="text-center space-y-2">
          <span className="bg-blue-100 text-blue-800 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black text-slate-900">Got Questions? We Have Answers</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm border-t border-slate-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
