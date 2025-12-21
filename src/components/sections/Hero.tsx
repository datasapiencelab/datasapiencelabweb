import { useState, useEffect } from 'react';
import Navigation from '../ui/Navigation';
import Button from '../ui/Button';
import Spark from '../ui/Spark';

// Placeholder video - in production this would be replaced with actual video file
const heroVideoSrc = "/assets/videos/hero-section.mp4";

// Logo image from Figma
const logoSrc = "data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='21' cy='21' r='21' fill='white'/%3E%3Cpath d='M21 12L29 30H13L21 12Z' fill='%23f2500d'/%3E%3C/svg%3E";

// Menu hamburger SVG for clicked state from Figma
const menuClickedSvg = "assets/images/Menu_expanded.svg";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 backdrop-blur-[14.75px] bg-[rgba(9,9,11,0.72)] flex flex-col">
            {/* Navigation */}
            <div className="flex items-center justify-between py-5 md:py-[26px] lg:py-8 xl:py-9 px-4 md:px-8 lg:px-16 xl:px-28">
                <div className="flex items-center gap-2">
                    <div className="w-[42px] h-[42px] rounded-full overflow-hidden">
                        <img
                            src={logoSrc}
                            alt="Data Sapience Lab"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Hide text on mobile, show on tablet+ */}
                    <span className="hidden md:block text-lg lg:text-xl font-bold text-white tracking-[0.5px] font-['Geist']">
                        Data Sapience Lab
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="w-[23px] h-[13px] md:w-[35px] md:h-5 lg:w-[42px] lg:h-6 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
                    aria-label="Close menu"
                >
                    <img src={menuClickedSvg} alt="Close menu" className="w-full h-full" />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col px-4 md:px-8 lg:px-16 xl:px-28 pb-4 md:pb-8 lg:pb-16 xl:pb-28">
                {/* Mobile & Tablet: Vertical Layout (up to 1279px) */}
                <div className="flex flex-col xl:hidden">
                    {/* Heading */}
                    <div className="flex flex-col gap-1 mb-6 md:mb-8 lg:mb-12">
                        <h1 className="text-[32px] leading-[40px] md:text-[50px] md:leading-[60px] lg:text-[60px] lg:leading-[72px] tracking-[-1px] md:tracking-[-2px] text-white font-semibold font-['Geist']">
                            Providing world class
                        </h1>
                        <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5 items-center">
                            <span className="text-[40px] leading-[40px] md:text-[60px] md:leading-[48px] lg:text-[72px] lg:leading-[52px] tracking-[1px] text-brand-primary font-['Engagement']">
                                Data Solutions
                            </span>
                            <span className="text-[32px] leading-[40px] md:text-[50px] md:leading-[60px] lg:text-[60px] lg:leading-[72px] tracking-[-1px] md:tracking-[-2px] text-white font-semibold font-['Geist']">
                                for you.
                            </span>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-[10px] md:gap-3 lg:gap-4 items-end flex-1">
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        <a href="#home" onClick={onClose} className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right">
                            Home
                        </a>
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        <a href="#about" onClick={onClose} className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right">
                            About
                        </a>
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        <a href="#projects" onClick={onClose} className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right">
                            Projects
                        </a>
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        <a href="#career" onClick={onClose} className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right">
                            Career
                        </a>
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        <a href="#contact" onClick={onClose} className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right">
                            Contact
                        </a>
                        <div className="w-full h-[0.67px] bg-neutral-50"></div>
                    </div>

                    {/* Bottom Content - Mobile/Tablet */}
                    <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mt-6 md:mt-8">
                        <div className="flex flex-row md:flex-col lg:flex-col gap-3 md:gap-4 lg:gap-4 order-2">
                            <a href="#expertise" className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                Expertise
                            </a>
                            <a href="#pricing" className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                Pricing
                            </a>
                            <a href="#faqs" className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                FAQs
                            </a>
                        </div>

                        <div className="flex flex-col gap-[6px] md:gap-4 lg:gap-5 order-1">
                            <div className="flex flex-col text-zinc-100">
                                <div className="text-lg leading-7 md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] tracking-[0.5px] md:tracking-[-1px] lg:tracking-[-1px] font-normal md:font-semibold lg:font-semibold font-['Geist']">
                                    {new Date().toLocaleTimeString('en-US', {
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                    })}
                                </div>
                                <div className="text-xs leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 tracking-[0.5px] font-normal font-['Geist']">
                                    CURRENT TIME ZONE (GMT+1)
                                </div>
                            </div>
                            <div className="text-xs leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 tracking-[0.5px] text-[#9f9fa9] font-normal font-['Geist'] max-w-[280px] md:max-w-[400px] lg:max-w-none">
                                © 2025 Data Sapience Lab. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop: Two-Column Layout (1280px+) */}
                <div className="hidden xl:flex xl:flex-col xl:h-full">
                    {/* Top Section: Heading + Menu Items */}
                    <div className="flex gap-12 2xl:gap-16 items-start flex-1">
                        {/* Left: Heading */}
                        <div className="flex-1 flex flex-col gap-[14px]">
                            <h1 className="text-[64px] 2xl:text-[72px] leading-[70px] 2xl:leading-[78px] tracking-[-3px] 2xl:tracking-[-4px] text-white font-semibold font-['Geist']">
                                Providing world class
                            </h1>
                            <div className="flex gap-4 2xl:gap-5 items-center">
                                <span className="text-[80px] 2xl:text-[96px] leading-[70px] 2xl:leading-[78px] tracking-[1px] text-brand-primary font-['Engagement']">
                                    Data Solutions
                                </span>
                                <span className="text-[64px] 2xl:text-[72px] leading-[70px] 2xl:leading-[78px] tracking-[-3px] 2xl:tracking-[-4px] text-white font-semibold font-['Geist']">
                                    for you.
                                </span>
                            </div>
                        </div>

                        {/* Right: Menu Items */}
                        <div className="w-[350px] 2xl:w-[424px] flex flex-col gap-3 2xl:gap-4 items-end">
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                            <a href="#home" onClick={onClose} className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors">
                                Home
                            </a>
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                            <a href="#about" onClick={onClose} className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors">
                                About
                            </a>
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                            <a href="#projects" onClick={onClose} className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors">
                                Projects
                            </a>
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                            <a href="#career" onClick={onClose} className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors">
                                Career
                            </a>
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                            <a href="#contact" onClick={onClose} className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors">
                                Contact
                            </a>
                            <div className="w-full h-[0.67px] bg-neutral-50"></div>
                        </div>
                    </div>

                    {/* Bottom Section: Time + Footer Links */}
                    <div className="flex justify-between items-end">
                        {/* Left: Time & Copyright */}
                        <div className="flex flex-col gap-4 2xl:gap-5">
                            <div className="flex flex-col text-zinc-100">
                                <div className="text-[52px] 2xl:text-[60px] leading-[60px] 2xl:leading-[72px] tracking-[-2px] font-bold font-['Geist']">
                                    {new Date().toLocaleTimeString('en-US', {
                                        hour12: false,
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                    })}
                                </div>
                                <div className="text-sm 2xl:text-base leading-5 2xl:leading-6 tracking-[0.5px] font-normal font-['Geist']">
                                    CURRENT TIME ZONE (GMT+1)
                                </div>
                            </div>
                            <div className="text-sm 2xl:text-base leading-5 2xl:leading-6 tracking-[0.5px] text-[#9f9fa9] font-normal font-['Geist']">
                                © 2025 Data Sapience Lab. All rights reserved.
                            </div>
                        </div>

                        {/* Right: Footer Links */}
                        <div className="flex flex-col items-end gap-3 2xl:gap-4">
                            <a href="#expertise" className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                Expertise
                            </a>
                            <a href="#pricing" className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                Pricing
                            </a>
                            <a href="#faqs" className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors">
                                FAQs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <section id="hero" className="relative w-full h-screen flex flex-col bg-black text-white overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-sm filter"
                >
                    <source src={heroVideoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full w-full px-6 md:px-16 lg:px-28 py-0">
                <Navigation onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />

                <div className="flex-1 flex flex-col items-start justify-between min-h-0 pb-8 md:pb-12 lg:pb-16">
                    {/* Main Heading */}
                    <div className="flex flex-col items-start justify-end w-full flex-1 min-h-0">
                        <div className="mb-4 md:mb-6 lg:mb-8">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] font-bold text-white leading-none lg:leading-[0.9] xl:leading-[0.85] tracking-tight lg:tracking-[-6px] xl:tracking-[-8px] 2xl:tracking-[-10px] mb-0">
                                Smart Solutions
                            </h1>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6 xl:gap-9 pl-0 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-24 w-full mt-1 md:mt-2">
                                <span className="font-engagement text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] text-white tracking-wider leading-none lg:leading-[0.9] xl:leading-[0.85]">
                                    For
                                </span>
                                <span className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] font-bold text-white leading-none lg:leading-[0.9] xl:leading-[0.85] tracking-tight lg:tracking-[-6px] xl:tracking-[-8px] 2xl:tracking-[-10px]">
                                    Complex Data
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 w-full">
                        {/* Description */}
                        <div className="flex flex-col items-center relative flex-shrink-0">
                            <div className="absolute left-1 top-0.5">
                                <Spark />
                            </div>
                            <div className="text-center pl-8">
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                    We transform Complex Data
                                </p>
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                    into Intelligent Applications - driving growth,
                                </p>
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                    efficiency, and long-term impact.
                                </p>
                            </div>
                        </div>

                        {/* Services List + CTA */}
                        <div className="flex flex-col items-end gap-4 lg:gap-6 w-full lg:w-auto flex-1 lg:flex-initial">
                            <div className="flex flex-col items-end gap-2 lg:gap-3">
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">(01)</span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">Machine Learning & AI</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">(02)</span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">Data Analytics & Visualization</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">(03)</span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">End-to-End Development</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">(04)</span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">UI/UX Strategy</span>
                                </div>
                            </div>

                            <Button variant="primary" size="large">
                                Get a Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Overlay */}
            <MenuOverlay isOpen={isMenuOpen} onClose={closeMenu} />
        </section>
    );
}