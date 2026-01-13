"use client";

import { motion } from "framer-motion";

export default function ContactClient() {
    return (
        <div className="container mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold tracking-widest uppercase mb-12">Contact</h1>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="space-y-8 text-gray-700 font-light">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Address</h3>
                                <p>L Floor, 6-6, Tojeong-ro 2-gil, Mapo-gu, Seoul</p>
                                <p className="text-sm text-gray-400 mt-1">서울특별시 마포구 토정로2길 6-6</p>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Email</h3>
                                <p>jim@lmst.kr</p>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</h3>
                                <p>+82 2 7718 1578</p>
                            </div>

                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Social</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 h-[400px] bg-gray-50 flex flex-col">
                        <iframe
                            title="LMST Location"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?q=서울특별시%20마포구%20토정로2길%206-6&t=m&z=17&output=embed&iwloc=near"
                            className="flex-grow grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="py-3 px-4 bg-white border-t border-gray-100 flex justify-end">
                            <a
                                href="https://map.kakao.com/link/search/서울특별시 마포구 토정로2길 6-6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold tracking-widest uppercase text-yellow-500 hover:text-yellow-600 flex items-center gap-2"
                            >
                                <span>View on KakaoMap</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
