'use client';

export default function About() {
    return (
        <div className="container mx-auto px-6 max-h-[90vh] overflow-auto">
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
    )
}