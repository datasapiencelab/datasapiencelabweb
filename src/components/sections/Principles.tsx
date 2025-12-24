// Icon components using inline SVG instead of localhost assets
import { HOME_CONTENT } from "../../content/home";

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
    <img
        className="w-[120px] h-[120px]"
        src="/assets/icons/data-driven.svg"
        alt="Data-driven"
        loading="lazy"
        decoding="async"
    />
);

const ScalableArchIcon = () => (
    <img
        className="w-[120px] h-[120px]"
        src="/assets/icons/scaleable-architechture.svg"
        alt="Scalable architecture"
        loading="lazy"
        decoding="async"
    />
);

const UnlimitedRevisionsIcon = () => (
    <img
        className="w-[120px] h-[120px]"
        src="/assets/icons/unlimited-revision.svg"
        alt="Unlimited revisions"
        loading="lazy"
        decoding="async"
    />
);

const HumanCenteredIcon = () => (
    <img
        className="w-[120px] h-[120px]"
        src="/assets/icons/human-centered-design.svg"
        alt="Human-centered design"
        loading="lazy"
        decoding="async"
    />
);

const LongTermPartnershipIcon = () => (
    <img
        className="w-[120px] h-[120px]"
        src="/assets/icons/long-term-partner.svg"
        alt="Long-term partner"
        loading="lazy"
        decoding="async"
    />
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

const iconMap: Record<string, React.FC> = {
    "data-driven": DataDrivenIcon,
    scalable: ScalableArchIcon,
    revisions: UnlimitedRevisionsIcon,
    "human-centered": HumanCenteredIcon,
    partnership: LongTermPartnershipIcon,
};

const Principles = () => {
    const { principles: principlesContent } = HOME_CONTENT;

    return (
        <section className="relative bg-zinc-950 z-20">
            {/* Large Desktop Layout (1280px+) */}
            <div className="hidden xl:block">
                <div className="container mx-auto px-28 py-32 max-w-[1440px]">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-16 gap-8">
                        <div className="flex items-center gap-2.5">
                            <SparkIcon />
                            <span className="font-geist text-lg text-zinc-100 tracking-wide">
                                {principlesContent.kicker}
                            </span>
                        </div>
                        <div className="font-geist font-medium text-white tracking-tight max-w-2xl">
                            <h2 className="text-[60px] leading-[72px]">
                                {principlesContent.heading.prefix}{" "}
                                <span className="font-engagement text-[#f2500d] text-[72px] tracking-[1.44px]">
                                    {principlesContent.heading.accent}
                                </span>{" "}
                                not guesswork.
                            </h2>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {principlesContent.cards.map((card, index) => {
                            const IconComponent = iconMap[card.key];
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
                                            {card.title}
                                        </h3>
                                        <p className="font-geist text-xl text-zinc-300 tracking-wide">
                                            {card.description}
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
                                Every choice is backed by{" "}
                                <span className="font-engagement text-[#f2500d] text-[52px] tracking-[1.1px]">
                                    Insights,
                                </span>{" "}
                                not guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-6 items-start">
                        {principlesContent.cards.map((card, index) => {
                            const IconComponent = iconMap[card.key];
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
                                            {card.title}
                                        </h3>
                                        <p className="font-geist text-lg text-zinc-300 tracking-wide">
                                            {card.description}
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
                                Every choice is backed by{" "}
                                <span className="font-engagement text-[#f2500d] text-[56px] tracking-[1.2px]">
                                    Insights,
                                </span>{" "}
                                not guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Grid - 2 columns for tablet */}
                    <div className="grid grid-cols-2 gap-6">
                        {principlesContent.cards.map((card, index) => {
                            const IconComponent = iconMap[card.key];
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
                                            {card.title}
                                        </h3>
                                        <p className="font-geist text-lg text-zinc-300 tracking-wide">
                                            {card.description}
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
                                Every choice is backed by{" "}
                                <span className="font-engagement text-[#f2500d] text-[32px] tracking-[1px]">
                                    Insights,
                                </span>{" "}
                                no guesswork.
                            </span>
                        </h2>
                    </div>

                    {/* Stacked Cards */}
                    <div className="space-y-3.5">
                        {principlesContent.cards.map((card, index) => {
                            const IconComponent = iconMap[card.key];
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
                                            {card.title}
                                        </h3>
                                        <p className="font-geist text-sm text-[#9f9fa9] text-center">
                                            {card.description}
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
