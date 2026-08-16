import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-200 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" /> Location Map — Abids, Hyderabad
            </h3>
            <p className="text-slate-500 text-xs font-medium">
              Abids, Hyderabad, TS - 500001
            </p>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Abids+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow transition-all border border-blue-400/40 shrink-0"
          >
            <Navigation className="w-4 h-4 text-amber-300" />
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        
        <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative shadow-inner">
          <iframe
            title="Teja Home Tuitions Location - Abids Hyderabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4729112952874!2d78.4716!3d17.3888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a63503b0d%3A0x6e88e89ef23961f7!2sAbids%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
