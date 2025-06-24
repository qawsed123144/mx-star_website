'use client';

export default function Strength() {
    return (<div className="container mx-auto px-6 max-h-[90vh] overflow-auto">
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
    )
}