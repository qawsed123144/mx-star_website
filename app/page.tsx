'use client'

import React from 'react';
import { useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { sections } from '@/lib/section';
import SectionModal from '@/components/modal';
import CircularNavigation from '@/components/circular-navigation';
import { Button } from '@/components/button';

const sectionComponents = Object.fromEntries(
  sections.filter(s => s.component).map(s => [s.id, s.component])
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleCTAClick = (action: string) => {
    if (action === 'contact' || action === 'consult') {
      setActiveSection('contact');
      window.location.hash = 'contact';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--deep-black)] text-white">

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--deep-black)]/90 backdrop-blur-sm border-b border-[var(--gold)]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center">
              <span className="text-[var(--deep-black)] font-bold text-lg">MX</span>
            </div>
            <span className="text-xl font-semibold">敏星數據</span>
          </div>

          <button className="md:hidden text-[var(--gold)]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <div className="relative w-full max-w-6xl mx-auto px-6">
              <CircularNavigation
                activeSection={activeSection}
                onSelectSection={(sectionID) => setActiveSection(sectionID)}
              />

              <div className="text-center mt-28 space-y-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-[var(--gold)]">當 IT 不再只是 IT</span><br />
                  <span className="text-2xl md:text-4xl font-medium">整合創新，重塑企業競爭力</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                  精實團隊．策略顧問．專屬解方
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Button
                    className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] text-[var(--deep-black)] px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/50 transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleCTAClick('contact')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    聯絡我們
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[var(--gold)] text-[var(--gold)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--gold)] hover:text-[var(--deep-black)] transition-all duration-300"
                    onClick={() => handleCTAClick('consult')}
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    立即諮詢
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="py-20 bg-[var(--warm-gray)]/20 ">
            {activeSection && sectionComponents[activeSection] && (
              <SectionModal isOpen={true} onClose={() => { setActiveSection(null); }}>
                {React.createElement(sectionComponents[activeSection])}
              </SectionModal>
            )}
          </div>

        </AnimatePresence>
      </div >

      {/* Footer */}
      < footer className="bg-[var(--deep-black)] border-t border-[var(--gold)]/20 py-12" >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6 ">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center">
                <span className="text-[var(--deep-black)] font-bold text-lg">MX</span>
              </div>
              <span className="text-2xl font-semibold">敏星數據</span>
            </div>
            <p className="text-gray-400 mb-6">整合創新，重塑企業競爭力</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <div className="border-t border-[var(--gold)]/20 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 敏星數據 MX Star. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}
