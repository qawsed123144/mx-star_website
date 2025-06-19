'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CircularNavigation from '@/components/circular-navigation';
import ContactForm from '@/components/contact-form';
import { Button } from '@/components/button';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && hash !== activeSection) {
      setActiveSection(hash);
    }
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    window.location.hash = section;
  };

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
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'data-thinking', 'why-us', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`hover:text-[var(--gold)] transition-colors ${
                  activeSection === section ? 'text-[var(--gold)]' : ''
                }`}
              >
                {getSectionTitle(section)}
              </button>
            ))}
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
          {activeSection === 'home' && (
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
                  onSectionChange={handleSectionChange} 
                />
                
                <div className="text-center mt-16 space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="text-[var(--gold)]">當 IT 不再只是 IT</span><br/>
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
          )}

          {activeSection === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-[var(--warm-gray)]/20"
            >
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-[var(--gold)]">關於我們</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--gold)]">公司介紹</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          敏星數據致力於提供大數據導入、企業數位轉型與 IT 統整規劃之顧問服務。我們擁有來自不同產業的專業顧問，具備跨界整合與落地驗證經驗。
                        </p>
                      </div>

                      <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
                        <h3 className="text-2xl font-semibold mb-4 text-[var(--gold)]">核心理念</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>從需求探索、長遠規劃，到系統建置與運維</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>混齡團隊落實創新精神，精實團隊服務價值型客戶</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="italic">見微知著，篤始知終</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30">
                        <div className="flex items-center mb-6">
                          <svg className="w-8 h-8 text-[var(--gold)] mr-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                          </svg>
                          <h3 className="text-2xl font-semibold text-[var(--gold)]">公司資訊</h3>
                        </div>
                        <div className="space-y-4 text-gray-300">
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>台北市南京東路五段 225 號 9 樓之一</span>
                          </div>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>info@mxstar.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-6 bg-[var(--deep-black)]/60 rounded-xl border border-[var(--gold)]/20">
                          <svg className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-2xl font-bold text-[var(--gold)]">10+</div>
                          <div className="text-sm text-gray-400">專業顧問</div>
                        </div>
                        <div className="text-center p-6 bg-[var(--deep-black)]/60 rounded-xl border border-[var(--gold)]/20">
                          <svg className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                          <div className="text-2xl font-bold text-[var(--gold)]">50+</div>
                          <div className="text-sm text-gray-400">專案經驗</div>
                        </div>
                        <div className="text-center p-6 bg-[var(--deep-black)]/60 rounded-xl border border-[var(--gold)]/20">
                          <svg className="w-8 h-8 text-[var(--gold)] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <div className="text-2xl font-bold text-[var(--gold)]">8+</div>
                          <div className="text-sm text-gray-400">服務產業</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'services' && (
            <motion.section
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20"
            >
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-[var(--gold)]">顧問服務</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      夥伴式顧問服務（Embedded Advisory Service）
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--gold)]/20">
                      <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-[var(--gold)] mr-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <h3 className="text-xl font-semibold">物聯網數據平台</h3>
                      </div>
                      <p className="text-gray-300 mb-4">整合協作</p>
                      <ul className="space-y-2 text-gray-400">
                        <li>• IoT 設備整合</li>
                        <li>• 數據收集平台</li>
                        <li>• 即時監控系統</li>
                      </ul>
                    </div>

                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--gold)]/20">
                      <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-[var(--gold)] mr-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <h3 className="text-xl font-semibold">大數據架構</h3>
                      </div>
                      <p className="text-gray-300 mb-4">規劃與建置</p>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 數據倉庫設計</li>
                        <li>• ETL 流程建置</li>
                        <li>• 數據治理策略</li>
                      </ul>
                    </div>

                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--gold)]/20">
                      <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-[var(--gold)] mr-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.816-2.942.734-2.126 2.106.54.911.05 2.054-.906 2.457-1.39.556-1.39 2.486 0 3.042.956.403 1.446 1.546.906 2.457-.816 1.372.754 2.922 2.126 2.106a1.532 1.532 0 012.286.948c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-.948c1.372.816 2.942-.734 2.126-2.106-.54-.911-.05-2.054.906-2.457 1.39-.556 1.39-2.486 0-3.042-.956-.403-1.446-1.546-.906-2.457.816-1.372-.754-2.922-2.126-2.106a1.532 1.532 0 01-2.286-.948zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <h3 className="text-xl font-semibold">IT 技術顧問</h3>
                      </div>
                      <p className="text-gray-300 mb-4">驗證服務</p>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 技術架構審視</li>
                        <li>• 系統效能優化</li>
                        <li>• 安全性檢測</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--gold)]">技術架構導向（CIT）</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 008.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 008.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21-.899-.436-1.849-.713-2.856.057-.702.121-1.167.585-1.660zM12 11.459a29.848 29.848 0 012.455-1.158 41.029 41.029 0 01.39 3.114.75.75 0 01-.419.74c-.528.256-1.046.53-1.554.82.21-.899.436-1.849.713-2.856-.057-.702-.121-1.167-.585-1.66z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Context-aware Solution</h4>
                        <p className="text-gray-400 text-sm">情境感知解決方案</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Integrated Business Architecture</h4>
                        <p className="text-gray-400 text-sm">整合式商業架構</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M1 4.27c0-.77.624-1.395 1.395-1.395h15.21c.77 0 1.395.624 1.395 1.395v9.46c0 .77-.624 1.395-1.395 1.395H2.395A1.395 1.395 0 011 13.73V4.27zm3 2.048a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Tailored Platform Planning</h4>
                        <p className="text-gray-400 text-sm">客製化平台規劃</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'data-thinking' && (
            <motion.section
              key="data-thinking"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-[var(--warm-gray)]/20"
            >
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-[var(--gold)]">大數據思維</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-8">
                      <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
                        <h3 className="text-2xl font-semibold mb-6 text-[var(--gold)]">大數據思維是什麼？</h3>
                        <div className="space-y-6">
                          {[
                            { icon: "🔍", title: "探索本質 Essential", desc: "深入理解數據背後的商業邏輯與價值" },
                            { icon: "🏗️", title: "架構式思考", desc: "建立系統化的數據處理與分析框架" },
                            { icon: "🔗", title: "企業內外數據動態串連", desc: "整合多元數據源，創造綜合性洞察" },
                            { icon: "🌱", title: "從微落實、聚集至大", desc: "循序漸進建立數據能力與應用規模" }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-8 h-8 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mr-4 mt-1 text-lg">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30">
                        <h3 className="text-2xl font-semibold mb-6 text-[var(--gold)]">情境場景</h3>
                        <div className="relative">
                          <div className="bg-[var(--deep-black)]/40 rounded-xl p-6 border-l-4 border-[var(--gold)]">
                            <p className="text-gray-300 leading-relaxed text-lg italic">
                              "當企業 IT 從支援角色轉為設計核心，我們幫助您整合多元系統、提升反應速度與決策彈性。"
                            </p>
                          </div>
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-[var(--deep-black)]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
                        <h4 className="text-lg font-semibold mb-6 text-center text-[var(--gold)]">數據流程示意</h4>
                        <div className="flex items-center justify-between">
                          {[
                            { icon: "📥", label: "收集" },
                            { icon: "⚙️", label: "處理" },
                            { icon: "📊", label: "分析" },
                            { icon: "💡", label: "洞察" }
                          ].map((step, index) => (
                            <div key={index} className="flex items-center">
                              <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mb-2 text-lg">
                                  {step.icon}
                                </div>
                                <span className="text-xs text-gray-400">{step.label}</span>
                              </div>
                              {index < 3 && (
                                <svg className="w-6 h-6 text-[var(--gold)]/50 mx-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'why-us' && (
            <motion.section
              key="why-us"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20"
            >
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-[var(--gold)]">我們的優勢</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--deep-black)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--gold)]">服務模式</h3>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>全案式顧問規劃</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>BA modeling 滲透需求</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>技術架構跨領域整合</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--deep-black)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--gold)]">團隊特色</h3>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>目標與過程並重</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>系統整合與創新實戰經驗</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>跨領域專業背景</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all duration-300">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[var(--deep-black)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.816-2.942.734-2.126 2.106.54.911.05 2.054-.906 2.457-1.39.556-1.39 2.486 0 3.042.956.403 1.446 1.546.906 2.457-.816 1.372.754 2.922 2.126 2.106a1.532 1.532 0 012.286.948c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-.948c1.372.816 2.942-.734 2.126-2.106-.54-.911-.05-2.054.906-2.457 1.39-.556 1.39-2.486 0-3.042-.956-.403-1.446-1.546-.906-2.457.816-1.372-.754-2.922-2.126-2.106a1.532 1.532 0 01-2.286-.948zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--gold)]">核心技術</h3>
                      </div>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>架構審視與驗證</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>多樣化整合方法論</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--gold)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>敏捷開發流程</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30 text-center">
                    <h3 className="text-2xl font-semibold mb-6 text-[var(--gold)]">為什麼選擇敏星數據？</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-[var(--gold)]">100%</div>
                        <div className="text-sm text-gray-400">專案成功率</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-[var(--gold)]">24/7</div>
                        <div className="text-sm text-gray-400">技術支援</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-[var(--gold)]">30天</div>
                        <div className="text-sm text-gray-400">快速啟動</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-[var(--gold)]">∞</div>
                        <div className="text-sm text-gray-400">持續優化</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-[var(--warm-gray)]/20"
            >
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-[var(--gold)]">聯絡我們</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      準備開始您的數位轉型之旅？讓我們為您量身打造最佳解決方案
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    <ContactForm />

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30">
                        <h3 className="text-2xl font-semibold mb-6 text-[var(--gold)]">聯絡資訊</h3>
                        <div className="space-y-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">地址</h4>
                              <p className="text-gray-300">台北市南京東路五段 225 號 9 樓之一</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">Email</h4>
                              <p className="text-gray-300">info@mxstar.com</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">營業時間</h4>
                              <p className="text-gray-300">週一至週五 09:00 - 18:00</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20">
                        <h3 className="text-xl font-semibold mb-6 text-[var(--gold)]">合作方式</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {[
                            { icon: "🤝", title: "加入合作", desc: "成為我們的合作夥伴" },
                            { icon: "💻", title: "產品演示", desc: "預約線上展示會議" },
                            { icon: "🧮", title: "索取報價", desc: "獲得專案評估報價" }
                          ].map((item, index) => (
                            <button
                              key={index}
                              className="w-full bg-[var(--warm-gray)]/50 hover:bg-[var(--gold)]/20 border border-[var(--gold)]/30 hover:border-[var(--gold)]/50 text-left px-6 py-4 rounded-lg transition-all duration-300"
                            >
                              <div className="flex items-center">
                                <span className="text-2xl mr-4">{item.icon}</span>
                                <div>
                                  <h4 className="font-semibold">{item.title}</h4>
                                  <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--deep-black)] border-t border-[var(--gold)]/20 py-12">
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
      </footer>
    </div>
  );
}

function getSectionTitle(section: string): string {
  const titles: Record<string, string> = {
    'home': '首頁',
    'about': '關於我們',
    'services': '顧問服務',
    'data-thinking': '大數據思維',
    'why-us': '我們的優勢',
    'contact': '聯絡我們'
  };
  return titles[section] || section;
}
