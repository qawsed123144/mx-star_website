'use client';

export default function BigData() {
    return (
        <div className="container mx-auto px-6 max-h-[90vh] overflow-auto">
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
    )
}
