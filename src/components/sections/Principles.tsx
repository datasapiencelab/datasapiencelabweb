// Icon components using inline SVG instead of localhost assets
const SparkIcon = () => (
    <svg
        className="w-7 h-7"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14 3L16.5 10.5L24 13L16.5 15.5L14 23L11.5 15.5L4 13L11.5 10.5L14 3Z"
            fill="#f2500d"
        />
    </svg>
);

const DataDrivenIcon = () => (
    <svg
        className="w-[120px] h-[120px]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="10" y="20" width="12" height="60" fill="#f2500d" opacity="0.8" />
        <rect x="30" y="30" width="12" height="50" fill="#f2500d" opacity="0.6" />
        <rect x="50" y="10" width="12" height="70" fill="#f2500d" />
        <rect x="70" y="25" width="12" height="55" fill="#f2500d" opacity="0.7" />
        <rect x="90" y="35" width="12" height="45" fill="#f2500d" opacity="0.5" />
        <line x1="5" y1="85" x2="110" y2="85" stroke="#f2500d" strokeWidth="2" />
        <circle cx="16" cy="15" r="2" fill="#f2500d" />
        <circle cx="36" cy="25" r="2" fill="#f2500d" />
        <circle cx="56" cy="5" r="2" fill="#f2500d" />
        <circle cx="76" cy="20" r="2" fill="#f2500d" />
        <circle cx="96" cy="30" r="2" fill="#f2500d" />
    </svg>
);

const ScalableArchIcon = () => (
    <svg
        className="w-[120px] h-[120px]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="20" y="20" width="80" height="80" fill="none" stroke="#f2500d" strokeWidth="2" />
        <rect x="30" y="30" width="60" height="60" fill="none" stroke="#f2500d" strokeWidth="1.5" />
        <rect x="40" y="40" width="40" height="40" fill="none" stroke="#f2500d" strokeWidth="1" />
        <circle cx="60" cy="60" r="8" fill="#f2500d" />
        <path d="M10 10L20 20M100 20L110 10M20 100L10 110M100 100L110 110" stroke="#f2500d" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 15L35 25M85 15L85 25M15 35L25 35M95 35L105 35M35 95L35 105M85 95L85 105M15 85L25 85M95 85L105 85" stroke="#f2500d" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
);

const UnlimitedRevisionsIcon = () => (
    <svg
        className="w-[120px] h-[120px]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="60" cy="60" r="45" fill="none" stroke="#f2500d" strokeWidth="3" />
        <path
            d="M40 50L55 65L85 35"
            fill="none"
            stroke="#f2500d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M30 30C40 20 50 20 60 30M90 30C80 20 70 20 60 30M30 90C40 100 50 100 60 90M90 90C80 100 70 100 60 90"
            fill="none"
            stroke="#f2500d"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
        />
    </svg>
);

const HumanCenteredIcon = () => (
    <svg
        className="w-[120px] h-[120px]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="60" cy="60" r="50" fill="none" stroke="#f2500d" strokeWidth="2" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="#f2500d" strokeWidth="1.5" />
        <circle cx="60" cy="45" r="8" fill="#f2500d" />
        <path
            d="M45 70C45 65 50 60 60 60C70 60 75 65 75 70V85H45V70Z"
            fill="#f2500d"
            opacity="0.6"
        />
        <circle cx="25" cy="75" r="6" fill="#f2500d" opacity="0.4" />
        <circle cx="95" cy="35" r="5" fill="#f2500d" opacity="0.5" />
        <circle cx="35" cy="25" r="3" fill="#f2500d" opacity="0.3" />
        <circle cx="85" cy="85" r="4" fill="#f2500d" opacity="0.4" />
    </svg>
);

const LongTermPartnershipIcon = () => (
    <svg
        className="w-[120px] h-[120px]"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 40L60 20L100 40V80L60 100L20 80V40Z"
            fill="none"
            stroke="#f2500d"
            strokeWidth="2"
        />
        <path
            d="M20 40L60 60L100 40"
            stroke="#f2500d"
            strokeWidth="1.5"
        />
        <path
            d="M60 60V100"
            stroke="#f2500d"
            strokeWidth="1.5"
        />
        <circle cx="60" cy="50" r="6" fill="#f2500d" />
        <path d="M40 30L60 40L80 30" stroke="#f2500d" strokeWidth="1" opacity="0.6" />
        <path d="M30 70L60 80L90 70" stroke="#f2500d" strokeWidth="1" opacity="0.6" />
    </svg>
);

const ArrowIcon = () => (
    <svg
        className="w-2.5 h-4"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 1L8 8L1 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface PrincipleCard {
    icon: React.ComponentType;
    title: string;
    description: string;
}

const principles: PrincipleCard[] = [
    {
        icon: DataDrivenIcon,
        title: "Data-Driven Decisions",
        description: "Every solution is grounded in insights, not assumptions."
    },
    {
        icon: ScalableArchIcon,
        title: "Scalable Architecture",
        description: "Future-ready systems that evolve with your growth."
    },
    {
        icon: UnlimitedRevisionsIcon,
        title: "Unlimited Revisions",
        description: "We offer continuous iteration to ensure your satisfaction."
    },
    {
        icon: HumanCenteredIcon,
        title: "Human-Centered Design",
        description: "Products built with empathy and accessibility at the core."
    },
    {
        icon: LongTermPartnershipIcon,
        title: "Long-Term Partnership",
        description: "We don't just build and leave, we stay invested in your success."
    }
];

const Principles = () => {
    return (
        <section className="bg-zinc-950 relative">
            {/* Large Desktop Layout (1280px+) */}
            <div className="hidden xl:block">
                <div className="container mx-auto px-28 py-32 max-w-[1440px]">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-16 gap-8">
                        <div className="flex items-center gap-2.5">
                            <SparkIcon />
                            <span className="font-geist text-lg text-zinc-100 tracking-wide">
                                How We Stay Aligned
                            </span>
                        </div>
                        <div className="font-geist font-medium text-white tracking-tight max-w-2xl">
                            <h2 className="text-[60px] leading-[72px]">
                                Every choice is backed by{' '}
                                <span className="font-engagement text-[#f2500d] text-[72px] tracking-[1.44px]">
                                    Insights,
                                </span>
                                {' '}not guesswork.
                            </h2>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {principles.map((principle, index) => {
                            const IconComponent = principle.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col items-center gap-8 text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <IconComponent />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-geist font-medium text-2xl text-zinc-100 tracking-tight">
                                            {principle.title}
                                        </h3>
                                        <p className="font-geist text-xl text-zinc-300 tracking-wide">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA Button */}
                        <button className="bg-[#f2500d] flex items-center justify-center gap-1.5 px-[18px] py-3">
                            <span className="font-geist font-semibold text-base text-white tracking-wide">
                                Learn More
                            </span>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (1024px - 1279px) */}
            <div className="hidden lg:block xl:hidden">
                <div className="container mx-auto px-16 py-24 max-w-[1200px]">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-6">
                        <div className="flex items-center justify-center gap-3">
                            <SparkIcon />
                            <span className="font-geist text-base text-zinc-100 tracking-wide">
                                How We Stay Aligned
                            </span>
                        </div>
                        <h2 className="font-geist font-medium text-white tracking-tight">
                            <span className="text-[44px] leading-[56px]">
                                Every choice is backed by{' '}
                                <span className="font-engagement text-[#f2500d] text-[52px] tracking-[1.1px]">
                                    Insights,
                                </span>
                                {' '}not guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-6 items-start">
                        {principles.map((principle, index) => {
                            const IconComponent = principle.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col items-center gap-6 text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <IconComponent />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-geist font-medium text-xl text-zinc-100 tracking-tight">
                                            {principle.title}
                                        </h3>
                                        <p className="font-geist text-lg text-zinc-300 tracking-wide">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA Button - spans all columns */}
                        <div className="col-span-3 flex justify-center">
                            <button className="bg-[#f2500d] flex items-center justify-center gap-1.5 px-6 py-3">
                                <span className="font-geist font-semibold text-base text-white tracking-wide">
                                    Learn More
                                </span>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="hidden md:block lg:hidden">
                <div className="container mx-auto px-8 py-24 max-w-[768px]">
                    {/* Header */}
                    <div className="text-center mb-12 space-y-6">
                        <div className="flex items-center justify-center gap-3">
                            <SparkIcon />
                            <span className="font-geist text-base text-zinc-100 tracking-wide">
                                How We Stay Aligned
                            </span>
                        </div>
                        <h2 className="font-geist font-medium text-white tracking-tight">
                            <span className="text-[48px] leading-[60px]">
                                Every choice is backed by{' '}
                                <span className="font-engagement text-[#f2500d] text-[56px] tracking-[1.2px]">
                                    Insights,
                                </span>
                                {' '}not guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Grid - 2 columns for tablet */}
                    <div className="grid grid-cols-2 gap-6">
                        {principles.map((principle, index) => {
                            const IconComponent = principle.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col items-center gap-6 text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <IconComponent />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-geist font-medium text-xl text-zinc-100 tracking-tight">
                                            {principle.title}
                                        </h3>
                                        <p className="font-geist text-lg text-zinc-300 tracking-wide">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA Button - spans both columns */}
                        <div className="col-span-2 flex justify-center">
                            <button className="bg-[#f2500d] flex items-center justify-center gap-1.5 px-6 py-3">
                                <span className="font-geist font-semibold text-base text-white tracking-wide">
                                    Learn More
                                </span>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="block md:hidden">
                <div className="px-4 py-[72px]">
                    {/* Header */}
                    <div className="text-center mb-8 space-y-3">
                        <div className="flex items-center justify-center gap-1.5">
                            <SparkIcon />
                            <span className="font-geist text-xs text-zinc-100 tracking-wide">
                                How We Stay Aligned
                            </span>
                        </div>
                        <h2 className="font-geist font-semibold text-zinc-100 tracking-tight">
                            <span className="text-2xl leading-9">
                                Every choice is backed by{' '}
                                <span className="font-engagement text-[#f2500d] text-[32px] tracking-[1px]">
                                    Insights,
                                </span>
                                {' '}no guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Stacked Cards */}
                    <div className="space-y-3.5">
                        {principles.map((principle, index) => {
                            const IconComponent = principle.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-zinc-900 border border-zinc-800 px-3 py-8 flex flex-col items-center gap-5 text-center"
                                >
                                    <div className="flex items-center justify-center">
                                        <div className="scale-75">
                                            <IconComponent />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-geist text-base text-zinc-300 tracking-wide">
                                            {principle.title}
                                        </h3>
                                        <p className="font-geist text-sm text-[#9f9fa9] text-center">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CTA Button */}
                        <button className="bg-[#f2500d] w-full flex items-center justify-center gap-1.5 px-[18px] py-3">
                            <span className="font-geist font-semibold text-base text-white tracking-wide">
                                Learn More
                            </span>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Principles;