// Icon components using inline SVG instead of localhost assets
import { HOME_CONTENT } from "../../content/home";
import Button from "../ui/Button";
import SparkIcon from "../ui/Spark";

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
            <div className="container mx-auto px-4 py-[72px] md:px-8 md:py-24 lg:px-16 xl:px-28 xl:py-32 max-w-[1440px]">
                {/* Header */}
                <div className="mb-8 md:mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {/* Kicker & Spark */}
                    <div className="flex items-center justify-center lg:justify-start gap-2.5 text-[#FAFAFA]">
                        <SparkIcon />
                        <span className="font-geist text-xs md:text-base lg:text-lg text-zinc-100 tracking-wide">
                            {principlesContent.kicker}
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="lg:col-span-2 text-center lg:text-left font-geist font-medium text-white tracking-tight">
                        {/* Mobile/Tablet Version */}
                        <div className="lg:hidden text-2xl md:text-[48px] md:leading-[60px]">
                            {principlesContent.heading.prefix}
                            <span className="font-engagement text-[#f2500d] text-[32px] md:text-[56px] tracking-[1px] md:tracking-[1.2px]">
                                {principlesContent.heading.accent}
                            </span>
                            {principlesContent.heading.suffix}
                        </div>

                        {/* Desktop Version */}
                        <div className="hidden lg:block text-[44px] leading-[56px] xl:text-[60px] xl:leading-[72px]">
                            {principlesContent.heading.prefix.replace(
                                " by ",
                                "",
                            )}
                            <br />
                            by{" "}
                            <span className="font-engagement text-[#f2500d] text-[52px] xl:text-[72px] tracking-[1.1px] xl:tracking-[1.44px]">
                                {principlesContent.heading.accent}
                            </span>
                            {principlesContent.heading.suffix}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6 lg:gap-8">
                    {principlesContent.cards.map((card, index) => {
                        const IconComponent = iconMap[card.key];
                        return (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 p-6 xl:p-8 flex flex-col items-center gap-5 md:gap-6 xl:gap-8 text-center"
                            >
                                <div className="flex items-center justify-center">
                                    <div className="scale-75 md:scale-100">
                                        <IconComponent />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-geist font-medium text-base md:text-xl lg:text-2xl text-zinc-100 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="font-geist text-sm md:text-lg xl:text-xl text-[#9f9fa9] md:text-zinc-300 tracking-wide">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    {/* Learn More Button */}
                    <div className="w-full h-auto md:h-full">
                        <Button className="bg-[#f2500d] w-full md:h-full flex items-center justify-center gap-1.5 px-[18px] py-3 md:py-6">
                            <span className="font-geist font-semibold text-base md:text-xl text-white tracking-wide">
                                Learn More
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Principles;
