interface CareerHeroProps {
    titleLines: {
        line1: string;
        accent: string;
        line2: string;
    };
    description: string;
    image: {
        src: string;
        alt: string;
    };
}

export default function CareerHero({
    titleLines,
    description,
    image,
}: CareerHeroProps) {
    return (
        <section className="bg-white py-10 mt-12 md:py-16 lg:py-24">
            <div className="px-6 md:px-16 lg:px-28">
                <div className="max-w-[1216px] mx-auto">
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex flex-wrap items-baseline gap-3">
                                <h1 className="font-geist font-semibold text-[48px] leading-[52px] md:text-[72px] md:leading-[76px] lg:text-[96px] lg:leading-[96px] tracking-[-3px] text-neutral-primary">
                                    {titleLines.line1}
                                </h1>
                                <span className="font-engagement text-[64px] leading-[64px] md:text-[96px] md:leading-[96px] lg:text-[144px] lg:leading-[144px] tracking-[2px] text-brand-primary">
                                    {titleLines.accent}
                                </span>
                            </div>
                            <h2 className="font-geist font-semibold text-[48px] leading-[52px] md:text-[72px] md:leading-[76px] lg:text-[96px] lg:leading-[96px] tracking-[-3px] text-neutral-primary">
                                {titleLines.line2}
                            </h2>
                        </div>

                        <p className="font-geist font-medium text-h6 tracking-[0.5px] text-neutral-tertiary max-w-[800px] md:ml-auto">
                            {description}
                        </p>

                        <div className="w-full aspect-[1216/717] border border-zinc-200 overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
