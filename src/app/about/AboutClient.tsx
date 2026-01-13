"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutClient() {
    return (
        <div className="container mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold tracking-widest uppercase mb-12 text-center">About Us</h1>

                <div className="relative w-full h-[400px] mb-16">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                        alt="Office Interior"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                <div className="space-y-12 text-gray-700 font-light leading-loose text-lg">
                    <p>
                        LMST Architects is a design studio dedicated to the pursuit of purity in form and function.
                        LMST stands for Logic, Matter, Space and Time. It also embodies our collaborative spirit: Let's Make Something Together.
                        Established with a vision to create timeless spaces, we strip away the unnecessary to reveal the essential.
                    </p>
                    <p>
                        Our work is characterized by a rigorous attention to detail, a sensitive use of materials, and a deep understanding of light.
                        We believe that good architecture has the power to improve the quality of life, fostering a sense of calm and clarity.
                    </p>
                    <p>
                        From private residences to cultural institutions, we approach each project as a unique opportunity to explore the relationship between people and their environment.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
