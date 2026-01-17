import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Spark from "../ui/Spark";
import { HOME_CONTENT } from "../../content/home";

export default function Hero() {
    const { hero } = HOME_CONTENT;
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            // Calculate scroll progress with faster transition (0 to 1) over 60% of viewport
            const progress = Math.min(scrollY / (windowHeight * 0.6), 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculate transforms and opacity with more aggressive movement
    const headingTransform = `translateX(${-scrollProgress * 200}px)`;
    const headingOpacity = 1 - scrollProgress * 1.2;
    const contentTransform = `translateX(${scrollProgress * 200}px)`;
    const contentOpacity = 1 - scrollProgress * 1.2;

    return (
        <section
            id="hero"
            className="sticky top-0 w-full h-screen flex flex-col bg-black text-white overflow-hidden z-10"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-sm filter"
                >
                    <source src={hero.video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full w-full px-6 md:px-16 lg:px-28 justify-between pt-0 pb-8 md:pb-12 lg:pb-8">
                {/* Section 1: Nav Spacer (Content height without bottom padding) */}
                <div className="h-[48px] md:h-[66px] w-full flex-none" />

                {/* Section 2: Heading SVG Block */}
                <div
                    className="flex flex-col items-start w-full"
                    style={{
                        transform: headingTransform,
                        opacity: headingOpacity,
                        willChange: "transform, opacity",
                    }}
                >
                    <div className="w-full max-w-[1216px]">
                        <img
                            src="/assets/icons/HomepageHeroHeadingTxt.svg"
                            alt="Smart Solutions For Complex Data"
                            className="w-full h-auto"
                        />
                    </div>
                    {/* Description on Mobile - Stuck below SVG */}
                    <div className="lg:hidden mt-6 relative">
                        <div className="absolute left-1 top-0.5">
                            <Spark />
                        </div>
                        <div className="text-left pl-8">
                            <p className="text-sm md:text-lg font-medium text-zinc-300 leading-6 md:leading-7 tracking-[0.5px] mb-0">
                                {hero.description.line1}
                            </p>
                            <p className="text-sm md:text-lg font-medium text-zinc-300 leading-6 md:leading-7 tracking-[0.5px] mb-0">
                                {hero.description.line2}
                            </p>
                            <p className="text-sm md:text-lg font-medium text-zinc-300 leading-6 md:leading-7 tracking-[0.5px] mb-0">
                                {hero.description.line3}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Bottom Section */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-6 lg:gap-8 w-full mb-18 lg:mb-0">
                    {/* Description on Desktop */}
                    <div
                        className="hidden lg:flex flex-col items-center relative flex-shrink-0"
                        style={{
                            transform: headingTransform,
                            opacity: headingOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <div className="absolute left-1 top-0.5">
                            <Spark />
                        </div>
                        <div className="text-left pl-8">
                            <p className="text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                {hero.description.line1}
                            </p>
                            <p className="text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                {hero.description.line2}
                            </p>
                            <p className="text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                {hero.description.line3}
                            </p>
                        </div>
                    </div>

                    {/* Services List + CTA */}
                    <div
                        className="flex flex-col items-end gap-4 lg:gap-6 w-full lg:w-auto flex-1 lg:flex-initial"
                        style={{
                            transform: contentTransform,
                            opacity: contentOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <div className="flex flex-col items-end gap-2 lg:gap-3">
                            {hero.services.map((service) => (
                                <div
                                    key={service.number}
                                    className="flex items-center gap-3 text-zinc-300 text-right"
                                >
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">
                                        {service.number}
                                    </span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                        {service.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Button variant="primary" size="large">
                            {hero.cta.text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
