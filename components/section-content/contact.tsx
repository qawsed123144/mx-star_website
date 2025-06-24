'use client';
import ContactForm from "../contact-form";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Contact() {
    return (
        <div className="max-x-screen-xl mx-auto  px-4 max-h-[90vh] overflow-auto box-border">
            <div className="max-w-full mx-auto box-border">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-[var(--gold)]">聯絡我們</span>
                    </h2>
                    <div className="w-24 h-1 bg-[var(--gold)] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        準備開始您的數位轉型之旅？讓我們為您量身打造最佳解決方案
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 min-w-0">

                    <div className="min-w-0 w-full box-border">
                        <QueryClientProvider client={queryClient}>
                            <ContactForm />
                        </QueryClientProvider>
                    </div>

                    <div className="space-y-8 min-w-0 w-full box-border overflow-hidden">
                        <div className="bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold-light)]/10 rounded-2xl p-8 border border-[var(--gold)]/30 box-border w-full min-w-0">
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

                        <div className="bg-[var(--deep-black)]/60 rounded-2xl p-8 border border-[var(--gold)]/20 box-border w-full min-w-0">
                            <h3 className="text-xl font-semibold mb-6 text-[var(--gold)]">合作方式</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: "🤝", title: "加入合作", desc: "成為我們的合作夥伴" },
                                    { icon: "💻", title: "產品演示", desc: "預約線上展示會議" },
                                    { icon: "🧮", title: "索取報價", desc: "獲得專案評估報價" }
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        className="w-full bg-[var(--warm-gray)]/50 hover:bg-[var(--gold)]/20 border border-[var(--gold)]/30 hover:border-[var(--gold)]/50 text-left px-4 py-4 rounded-lg transition-all duration-300 box-border"
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
    )
}