'use client';

export default function Service() {
    return (
        <div className="container mx-auto px-6 max-h-[90vh] overflow-auto">
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
    )
}