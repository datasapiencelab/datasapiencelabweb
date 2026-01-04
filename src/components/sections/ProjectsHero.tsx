export default function ProjectsHero() {
    return (
        <div className="relative pt-32 pb-8 px-4 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 sm:px-6 md:px-8 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Heading - Center Aligned */}
                <div className="w-full flex flex-col items-center gap-4 sm:gap-6">
                    <h1 className="font-semibold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] leading-[0.9] text-zinc-900 tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-6px] xl:tracking-[-8px] font-['Geist'] text-center">
                        Where Innovation
                    </h1>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <h2 className="font-semibold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] leading-[0.9] text-zinc-900 tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] lg:tracking-[-6px] xl:tracking-[-8px] font-['Geist']">
                            Meets
                        </h2>
                        <span className="font-['Engagement'] text-[60px] sm:text-[84px] md:text-[108px] lg:text-[144px] xl:text-[180px] leading-[0.9] text-brand-primary">
                            Execution
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="w-full flex justify-center">
                    {/* Mobile: 2 lines */}
                    <p className="font-medium text-base leading-6 sm:text-xl sm:leading-8 md:text-2xl md:leading-9 text-[#52525C] tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist'] text-center max-w-4xl">
                        <span className="block sm:inline">
                            Explore the systems we've built to power{" "}
                        </span>
                        <span className="block sm:inline">
                            lasting business transformation
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
