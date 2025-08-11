"use client";

import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Container from "../ui/container";

const navigationItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#services", id: "services" },
    { label: "Services", href: "#what-we-do", id: "what-we-do" },
    { label: "Our Work", href: "#portfolio", id: "portfolio" },
    { label: "FAQs", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
];

const sectionBackgrounds = {
    hero: 'dark',
    services: 'light',
    'what-we-do': 'light',
    portfolio: 'light',
    faq: 'light',
    contact: 'light'
} as const;

const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId.replace("#", ""));
    if (element) {
        const navHeight = 80;
        const offsetTop = element.offsetTop - navHeight;
        window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: "smooth"
        });
    }
};

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState<string>('hero');
    const [sectionBackground, setSectionBackground] = useState<'light' | 'dark' | 'mixed'>('dark');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'services', 'what-we-do', 'portfolio', 'faq', 'contact'];
            const scrollPosition = window.scrollY + 150;

            setIsScrolled(window.scrollY > 20);

            if (window.scrollY < 100) {
                setActiveSection('hero');
                setSectionBackground('dark');
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    setActiveSection(sections[i]);
                    setSectionBackground(sectionBackgrounds[sections[i] as keyof typeof sectionBackgrounds] || 'light');
                    break;
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { activeSection, sectionBackground, isScrolled };
};

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { activeSection, sectionBackground, isScrolled } = useActiveSection();

    let navBg: string;
    if (isMobileMenuOpen) {
        navBg = 'bg-black';
    } else if (sectionBackground === 'dark') {
        navBg = 'bg-black/5';
    } else {
        navBg = 'bg-black/90 backdrop-blur-md';
    }

    const shadowClass = isScrolled ? 'shadow-lg' : 'shadow-none';
    const textColor = 'text-white';
    const logoTextColor = 'text-white';
    const hoverColor = 'hover:text-orange-400';

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 backdrop-blur-sm ${navBg} ${shadowClass}`}>
            <Container className="py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            className={`flex items-center gap-2 transition-colors duration-300 ${textColor} ${hoverColor} cursor-pointer`}
                            onClick={() => scrollToSection("#hero")}
                        >

                            <Image
                                src="/Logo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className={`text-xl font-bold transition-all duration-300 ${logoTextColor}`}>
                                LifetimeArt
                            </span>
                        </button>
                    </div>
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-8">
                            {navigationItems.map((item) => (
                                <li key={item.label}>
                                    <button
                                        onClick={() => scrollToSection(item.href)}
                                        className={`text-sm transition-all duration-200 cursor-pointer relative ${textColor} ${hoverColor} ${activeSection === item.id
                                            ? 'text-orange-400 font-semibold'
                                            : ''
                                            }`}
                                    >
                                        {item.label}
                                        {activeSection === item.id && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        aria-label="Open menu"
                        className={`flex rounded-md p-2 md:hidden transition-all duration-300 ease-in-out ${textColor} ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                            }`}
                        onClick={() => setIsMobileMenuOpen((v) => !v)}
                    >
                        <div className="relative w-5 h-5">
                            <HiMenu
                                size={20}
                                className={`absolute inset-0 transition-all duration-300 ease-in-out ${textColor} ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                                    }`}
                            />
                            <HiX
                                size={20}
                                className={`absolute inset-0 transition-all duration-300 ease-in-out ${textColor} ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                <div className={`absolute left-0 right-0 top-full h-screen bg-black backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-4 invisible'
                    }`}>
                    <ul className={`flex flex-col gap-4 p-4 transition-all duration-300 ease-in-out delay-75 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
                        }`}>
                        {navigationItems.map((item, index) => (
                            <li
                                key={item.label}
                                className={`transition-all duration-300 ease-in-out ${isMobileMenuOpen
                                    ? 'translate-y-0 opacity-100'
                                    : '-translate-y-4 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : '0ms'
                                }}
                            >
                                <button
                                    className={`w-full rounded px-4 py-3 text-left text-xl text-white transition-all duration-200 hover:bg-orange-400 hover:text-black ${activeSection === item.id
                                        ? 'bg-orange-400/20 text-orange-400 border-l-4 border-orange-400'
                                        : ''
                                        }`}
                                    onClick={() => {
                                        scrollToSection(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </header>
    );
}
