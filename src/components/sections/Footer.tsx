import React, { useState } from "react";

// Arrow icon for newsletter subscription button
const ArrowIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="-rotate-45"
    >
        <path
            d="M1 8L15 8M15 8L8 1M15 8L8 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log("Newsletter subscription:", email);
            setEmail("");
            // Add newsletter subscription logic here
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-zinc-950 w-full">
            {/* Main Footer Content */}
            <div className="px-4 md:px-12 lg:px-13 pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section - Brand and Newsletter */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-8">
                        <div className="flex-1 max-w-md lg:max-w-lg">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/assets/images/logo-transparent.png"
                                        alt="Data Sapience Lab Logo"
                                        className="w-[70%] h-[70%] object-contain"
                                    />
                                </div>
                                <h2 className="font-['Geist'] font-bold text-2xl md:text-3xl lg:text-[32px] text-white leading-tight tracking-[-1px]">
                                    Data Sapience Lab
                                </h2>
                            </div>
                            <p className="font-['Geist'] font-normal text-sm md:text-base text-zinc-200 leading-relaxed tracking-[0.5px]">
                                We transform Complex Data into Intelligent
                                Applications, driving growth, efficiency, and
                                long-term impact.
                            </p>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="flex-1 max-w-sm lg:max-w-md">
                            <h3 className="font-['Geist'] font-semibold text-lg md:text-xl text-white mb-2 tracking-[0.5px]">
                                Subscribe to our newsletter
                            </h3>
                            <form
                                onSubmit={handleNewsletterSubmit}
                                className="bg-zinc-900 border border-zinc-800 p-0.5 flex items-center"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-4 py-3 text-sm font-['Geist'] font-medium text-white placeholder:text-zinc-500 focus:outline-none tracking-[0.5px]"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#f2500d] hover:bg-[#d63d00] transition-colors duration-200 p-3.5 flex items-center justify-center"
                                >
                                    <ArrowIcon />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-zinc-800 mb-8"></div>

                    {/* Bottom Section - Links and Copyright */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
                        {/* Navigation Links */}
                        <div>
                            <h4 className="font-['Geist'] font-normal text-zinc-300 mb-4 tracking-[0.5px]">
                                Navigation
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("hero")}
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("about")}
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        About
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("projects")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            (window.location.href = "/career")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Career
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            (window.location.href = "/contact")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-['Geist'] font-normal text-zinc-300 mb-4 tracking-[0.5px]">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("services")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Expertise
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("pricing")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Pricing
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("faq")}
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        FAQs
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            (window.location.href = "/privacy")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Privacy Policy
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            (window.location.href = "/terms")
                                        }
                                        className="font-['Geist'] font-semibold text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-200 tracking-[0.5px] text-left"
                                    >
                                        Terms & Conditions
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Copyright - Spans full width on mobile, positioned right on desktop */}
                        <div className="md:col-span-1 lg:col-span-2 flex justify-start md:justify-end items-start">
                            <p className="font-['Geist'] font-normal text-zinc-400 text-sm md:text-base text-center md:text-right tracking-[0.5px] leading-relaxed max-w-md">
                                © 2026 Data Sapience Lab. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Footer Text SVG - Full Width of Container */}
                    <div className="mt-12 md:mt-16 w-full">
                        <img
                            src="/assets/icons/DSL-footer text.svg"
                            alt="Data Sapience Lab"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
