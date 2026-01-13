"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm py-4 text-black" : "bg-transparent py-6 text-black"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center h-full">
                <Link href="/" className="text-3xl tracking-tighter uppercase font-bold">
                    LMST
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {["About", "People", "Projects", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={`text-sm uppercase tracking-widest transition-colors font-medium ${isScrolled ? "hover:text-gray-500" : "hover:text-gray-500"}`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4">
                    {["About", "People", "Projects", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
