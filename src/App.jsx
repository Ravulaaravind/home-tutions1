import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TutorModal from './components/TutorModal';
import SuccessModal from './components/SuccessModal';

import Home from './pages/Home';
import JoinAsTutor from './pages/JoinAsTutor';
import StudentRegistration from './pages/StudentRegistration';
import RealTuitionExperience from './components/RealTuitionExperience';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import LocationMap from './components/LocationMap';
import Contact from './pages/Contact';
import { PhoneCall, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchFilter, setSearchFilter] = useState({ class: '', subject: '', area: '' });
  
  // Modals state
  const [selectedTutorForModal, setSelectedTutorForModal] = useState(null);
  const [selectedTutorForDemo, setSelectedTutorForDemo] = useState(null);
  const [successModalData, setSuccessModalData] = useState(null);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenTutorModal = (tutor) => {
    setSelectedTutorForModal(tutor);
  };

  const handleBookDemoFromModal = (tutor) => {
    setSelectedTutorForDemo(tutor);
    setSelectedTutorForModal(null);
    scrollToSection('registration');
  };

  const handleFormSuccess = (modalData) => {
    setSuccessModalData(modalData);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-950 relative overflow-hidden">

      {/* Header & Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={scrollToSection} 
      />

      {/* Main Single Page Content Area with Fixed Tuition Background */}
      <main className="tuition-fixed-bg flex-1 space-y-16 relative z-10">
        
        {/* SECTION 1: HOME */}
        <section id="home" className="scroll-mt-24">
          <Home 
            setActiveTab={scrollToSection} 
            onSelectTutor={handleOpenTutorModal}
            setSearchFilter={setSearchFilter}
          />
        </section>

        {/* SECTION 2: FIND A HOME & ONLINE TUTOR (PARENT & STUDENT REGISTRATION) - TOP */}
        <section id="registration" className="scroll-mt-24 border-t border-slate-200/60 pt-8">
          <StudentRegistration 
            presetTutor={selectedTutorForDemo}
            onSuccess={handleFormSuccess}
          />
        </section>

        {/* SECTION 3: REAL TUITION EXPERIENCE SHOWCASE - BELOW PARENT & STUDENT DETAILS */}
        <section id="real-experience" className="scroll-mt-24 border-t border-slate-200/60 pt-8 pb-4">
          <RealTuitionExperience />
        </section>

        {/* SECTION 3: JOIN TEJA HOME TUITIONS NETWORK (TUTOR REGISTRATION) */}
        <section id="join-tutor" className="scroll-mt-24 border-t border-slate-200/60 pt-8 py-12">
          <JoinAsTutor 
            onSuccess={handleFormSuccess}
          />
        </section>

        {/* SECTION 4: WHY CHOOSE US (WHY PARENTS TRUST TEJA HOME TUITIONS) - BELOW JOIN AS A TUTOR */}
        <section id="why-choose-us" className="scroll-mt-24 border-t border-slate-200/60 pt-8 pb-4">
          <WhyChooseUs />
        </section>

        {/* SECTION 5: CONTACT US & FAQS */}
        <section id="contact" className="scroll-mt-24 border-t border-slate-200/60 pt-4 pb-6">
          <Contact 
            onSuccess={handleFormSuccess}
          />
        </section>

        {/* SECTION 6: 3 SIMPLE STEPS / HOW IT WORKS - BELOW CONTACT US */}
        <section id="how-it-works" className="scroll-mt-24 border-t border-slate-200/60 pt-6 pb-8">
          <HowItWorks setActiveTab={scrollToSection} />
        </section>

        {/* SECTION 7: LOCATION MAP - ABIDS, HYDERABAD - BELOW 3 SIMPLE STEPS */}
        <section id="location" className="scroll-mt-24 border-t border-slate-200/60 pt-6 pb-8">
          <LocationMap />
        </section>

      </main>

      {/* Footer */}
      <Footer setActiveTab={scrollToSection} />

      {/* Global Floating Action Elements */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Quick Action Footer Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-4 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href="tel:+916302664394"
          className="flex-1 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" /> Call Helpline
        </a>

        <button
          onClick={() => scrollToSection('registration')}
          className="flex-1 amber-gradient-btn text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Search className="w-3.5 h-3.5" /> Find Tutors
        </button>
      </div>

      {/* Tutor Profile Modal */}
      {selectedTutorForModal && (
        <TutorModal 
          tutor={selectedTutorForModal}
          onClose={() => setSelectedTutorForModal(null)}
          onBookDemo={handleBookDemoFromModal}
        />
      )}

      {/* Submission Success Modal */}
      {successModalData && (
        <SuccessModal
          isOpen={!!successModalData}
          onClose={() => setSuccessModalData(null)}
          title={successModalData.title}
          message={successModalData.message}
          ticketNumber={successModalData.ticketNumber}
        />
      )}

    </div>
  );
}
