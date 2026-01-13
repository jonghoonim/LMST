"use client";

import { motion } from "framer-motion";

export default function ContactClient() {
    return (
        <div className="container mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16"
            >
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-light tracking-widest uppercase mb-12">Contact</h1>

                    <div className="space-y-8 text-gray-700 font-light">
                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Address</h3>
                            <p>L Floor, 6-6, Tojeong-ro 2-gil, Mapo-gu, Seoul</p>
                            <p className="text-sm text-gray-400 mt-1">서울특별시 마포구 토정로2길 6-6</p>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Email</h3>
                            <p>jim.lmst@gmail.com</p>
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

                <div className="w-full md:w-1/2 bg-white border border-gray-100 h-[400px] flex items-center justify-center text-gray-400 text-sm uppercase tracking-widest">
                    Map Placeholder
                </div>
            </motion.div>
        </div>
    );
}
