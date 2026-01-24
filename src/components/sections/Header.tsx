import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainNavItems } from "../../config/navigation";

const logoSrc = "/assets/images/logo-transparent.png";

// Hamburger icons - white for overlay/homepage, black for other pages
const hamburgerIcons = {
    white: {
        default: {
            mobile: "/assets/icons/hamburger/Property 1=Default, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=Default, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=Default, Type=Desktop.svg",
        },
        hover: {
            mobile: "/assets/icons/hamburger/Property 1=hover, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=hover, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=hover, Type=Desktop.svg",
        },
        clicked: {
            mobile: "/assets/icons/hamburger/Property 1=clicked, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=clicked, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=clicked, Type=Desktop.svg",
        },
    },
    black: {
        default: {
            mobile: "/assets/icons/hamburger/Property 1=Default, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=Default, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=Default, Type=Desktop.svg",
        },
        hover: {
            mobile: "/assets/icons/hamburger/Property 1=hover, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=hover, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=hover, Type=Desktop.svg",
        },
        clicked: {
            mobile: "/assets/icons/hamburger/Property 1=clicked, Type=phone.svg",
            tablet: "/assets/icons/hamburger/Property 1=clicked, Type=tab.svg",
            desktop:
                "/assets/icons/hamburger/Property 1=clicked, Type=Desktop.svg",
        },
    },
};

interface HeaderProps {
    isHomePage?: boolean;
}

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            setShouldRender(true);
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            // Force browser reflow before triggering animation
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 50); // Slightly longer delay for reliability across all devices
            return () => {
                clearTimeout(timer);
                document.removeEventListener("keydown", handleEscape);
            };
        } else {
            setIsVisible(false);
            document.body.style.overflow = "unset";
            // Delay unmounting until animation completes
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 450); // Slightly longer than transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] backdrop-blur-[14.75px] bg-[rgba(9,9,11,0.72)] flex flex-col transition-opacity duration-400 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Navigation */}
            <div className="flex items-center justify-between py-4 md:py-6 px-6 md:px-16 lg:px-28">
                <Link
                    to="/"
                    onClick={onClose}
                    className="flex items-center gap-2"
                >
                    <div className="w-8 h-8 md:w-[42px] md:h-[42px] rounded-full overflow-hidden bg-white flex items-center justify-center">
                        <img
                            src={logoSrc}
                            alt="Data Sapience Lab"
                            className="w-[70%] h-[70%] object-contain"
                        />
                    </div>
                    <span className="hidden lg:block text-base md:text-lg lg:text-xl font-bold text-white tracking-wider">
                        Data Sapience Lab
                    </span>
                </Link>
                <button
                    onClick={onClose}
                    className="p-2 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
                    aria-label="Close menu"
                >
                    {/* Mobile */}
                    <img
                        src={hamburgerIcons.white.clicked.mobile}
                        alt="Close menu"
                        className="block md:hidden w-[23.23px] h-[13.22px]"
                    />
                    {/* Tablet */}
                    <img
                        src={hamburgerIcons.white.clicked.tablet}
                        alt="Close menu"
                        className="hidden md:block lg:hidden w-[35px] h-[20px]"
                    />
                    {/* Desktop */}
                    <img
                        src={hamburgerIcons.white.clicked.desktop}
                        alt="Close menu"
                        className="hidden lg:block w-[42.18px] h-[24px]"
                    />
                </button>
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 flex flex-col px-4 md:px-8 lg:px-16 xl:px-28 pb-4 md:pb-8 lg:pb-16 xl:pb-28 transition-all duration-400 ease-in-out delay-100 ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                }`}
            >
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
                        <div className="w-full h-px bg-neutral-50"></div>
                        {mainNavItems.map((item) => (
                            <div key={item.path} className="w-full">
                                <Link
                                    to={item.path}
                                    onClick={onClose}
                                    className="text-xl leading-8 md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] tracking-[0.5px] md:tracking-[-0.5px] lg:tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors w-full text-right block"
                                >
                                    {item.label}
                                </Link>
                                <div className="w-full h-px bg-neutral-50 mt-[10px] md:mt-3 lg:mt-4"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Content - Mobile/Tablet */}
                    <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mt-6 md:mt-8">
                        <div className="flex flex-row md:flex-col lg:flex-col gap-3 md:gap-4 lg:gap-4 order-2">
                            <Link
                                to="/expertise"
                                className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                Expertise
                            </Link>
                            <Link
                                to="/pricing"
                                className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                to="/faqs"
                                className="text-base leading-6 md:text-lg md:leading-7 lg:text-xl lg:leading-8 tracking-[0.5px] font-semibold md:font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                FAQs
                            </Link>
                        </div>

                        <div className="flex flex-col gap-[6px] md:gap-4 lg:gap-5 order-1">
                            <div className="flex flex-col text-zinc-100">
                                <div className="text-lg leading-7 md:text-[36px] md:leading-[44px] lg:text-[40px] lg:leading-[48px] tracking-[0.5px] md:tracking-[-1px] lg:tracking-[-1px] font-normal md:font-semibold lg:font-semibold font-['Geist']">
                                    {new Date().toLocaleTimeString("en-US", {
                                        hour12: false,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
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
                            <div className="w-full h-px bg-neutral-50"></div>
                            {mainNavItems.map((item) => (
                                <div
                                    key={item.path}
                                    className="w-full flex flex-col items-end"
                                >
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="text-[36px] 2xl:text-[40px] leading-[44px] 2xl:leading-[48px] tracking-[-1px] text-white font-semibold font-['Geist'] hover:text-zinc-300 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                    <div className="w-full h-px bg-neutral-50 mt-3 2xl:mt-4"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section: Time + Footer Links */}
                    <div className="flex justify-between items-end">
                        {/* Left: Time & Copyright */}
                        <div className="flex flex-col gap-4 2xl:gap-5">
                            <div className="flex flex-col text-zinc-100">
                                <div className="text-[52px] 2xl:text-[60px] leading-[60px] 2xl:leading-[72px] tracking-[-2px] font-bold font-['Geist']">
                                    {new Date().toLocaleTimeString("en-US", {
                                        hour12: false,
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
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
                            <Link
                                to="/expertise"
                                className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                Expertise
                            </Link>
                            <Link
                                to="/pricing"
                                className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                to="/faqs"
                                className="text-xl 2xl:text-2xl leading-8 2xl:leading-9 tracking-[-0.25px] font-medium text-zinc-200 font-['Geist'] hover:text-white transition-colors"
                            >
                                FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Header({ isHomePage = false }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const textColor = isHomePage ? "text-white" : "text-black";
    const hoverColor = isHomePage
        ? "hover:text-zinc-300"
        : "hover:text-zinc-700";

    return (
        <>
            <header className="absolute top-0 left-0 right-0 z-[15]">
                <nav className="flex items-center justify-between px-6 md:px-16 lg:px-28 py-4 md:py-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 md:w-[42px] md:h-[42px] rounded-full overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src={logoSrc}
                                alt="Data Sapience Lab"
                                className="w-[70%] h-[70%] object-contain"
                            />
                        </div>
                        <span
                            className={`text-base md:text-lg lg:text-h6 font-bold ${textColor} tracking-wider`}
                        >
                            Data Sapience Lab
                        </span>
                    </Link>

                    {/* Navigation Items + Hamburger */}
                    <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
                        {/* Desktop Nav Items - Only on large desktop (xl+) */}
                        {mainNavItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`hidden xl:block ${textColor} ${hoverColor} transition-colors text-sm lg:text-base`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Hamburger Menu Button - Always Visible - Responsive Icons */}
                        <button
                            onClick={toggleMenu}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="p-2 transition-opacity focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {/* Mobile */}
                            <img
                                src={
                                    isMenuOpen
                                        ? hamburgerIcons.white.clicked.mobile
                                        : isHovered
                                          ? hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].hover.mobile
                                          : hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].default.mobile
                                }
                                alt="Menu"
                                className={`block md:hidden w-[23.23px] h-[13.22px] transition-all ${
                                    !isHomePage && !isMenuOpen
                                        ? "brightness-0"
                                        : ""
                                }`}
                            />
                            {/* Tablet */}
                            <img
                                src={
                                    isMenuOpen
                                        ? hamburgerIcons.white.clicked.tablet
                                        : isHovered
                                          ? hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].hover.tablet
                                          : hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].default.tablet
                                }
                                alt="Menu"
                                className={`hidden md:block xl:hidden w-[35px] h-[20px] transition-all ${
                                    !isHomePage && !isMenuOpen
                                        ? "brightness-0"
                                        : ""
                                }`}
                            />
                            {/* Desktop */}
                            <img
                                src={
                                    isMenuOpen
                                        ? hamburgerIcons.white.clicked.desktop
                                        : isHovered
                                          ? hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].hover.desktop
                                          : hamburgerIcons[
                                                isHomePage ? "white" : "black"
                                            ].default.desktop
                                }
                                alt="Menu"
                                className={`hidden xl:block w-[42.18px] h-[24px] transition-all ${
                                    !isHomePage && !isMenuOpen
                                        ? "brightness-0"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Menu Overlay */}
            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}
