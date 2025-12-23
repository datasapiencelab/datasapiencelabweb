const logoSrc =
    "data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='21' cy='21' r='21' fill='white'/%3E%3Cpath d='M21 12L29 30H13L21 12Z' fill='%23f2500d'/%3E%3C/svg%3E";

// Menu hamburger SVGs - responsive based on Figma design
const menuDefaultSvg = "assets/icons/Menu_expanded.svg";
const menuClickedSvg = "assets/icons/Menu_expanded.svg";

interface NavigationProps {
    onMenuToggle?: () => void;
    isMenuOpen?: boolean;
}

export default function Navigation({
    onMenuToggle,
    isMenuOpen = false,
}: NavigationProps) {
    return (
        <nav className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-[42px] md:h-[42px] rounded-full overflow-hidden">
                    <img
                        src={logoSrc}
                        alt="Data Sapience Lab"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-base md:text-lg lg:text-h6 font-bold text-white tracking-wider">
                    Data Sapience Lab
                </span>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
                <div className="hidden md:flex items-center gap-8 lg:gap-16">
                    <a
                        href="#home"
                        className="text-white hover:text-zinc-300 transition-colors text-sm lg:text-base"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-white hover:text-zinc-300 transition-colors text-sm lg:text-base"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="text-white hover:text-zinc-300 transition-colors text-sm lg:text-base"
                    >
                        Services
                    </a>
                </div>

                {/* Menu Button - Responsive sizing */}
                <button
                    onClick={onMenuToggle}
                    className="w-[23px] h-[13px] md:w-[35px] md:h-5 lg:w-[42px] lg:h-6 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    <img
                        src={isMenuOpen ? menuClickedSvg : menuDefaultSvg}
                        alt={isMenuOpen ? "Close menu" : "Open menu"}
                        className="w-full h-full"
                    />
                </button>
            </div>
        </nav>
    );
}
