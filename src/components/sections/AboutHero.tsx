import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutHero() {
    const { hero } = ABOUT_CONTENT;

    return (
        <section className="relative min-h-[1024px] bg-zinc-100 overflow-hidden">
            {/* Image Overlay Background */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/assets/images/about/about-hero-section-overlay.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 lg:px-28 pt-32 md:pt-40 lg:pt-48 pb-24">
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-4xl flex flex-col gap-8">
                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-8 md:mb-12">
                            <span className="text-zinc-900 font-geist font-semibold">
                                {hero.title.line1}{" "}
                            </span>
                            <span className="text-[#f2500d] font-engagement">
                                {hero.title.accent}
                            </span>
                            <br />
                            <span className="text-zinc-900 font-geist font-semibold">
                                {hero.title.line2}
                            </span>
                        </h1>

                        {/* Description with Spark */}
                        <div className="mb-8 md:mb-12">
                            <div className="flex gap-3 mb-2">
                                <Spark />
                                <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-geist leading-relaxed mb-0">
                                    We help businesses move from
                                </p>
                            </div>
                            <div className="text-base md:text-lg lg:text-xl text-zinc-600 font-geist leading-relaxed max-w-2xl">
                                <p className="mb-0">
                                    Raw Datasets to powerful, intuitive
                                    applications
                                </p>
                                <p className="mb-0">
                                    designed to grow with confidence.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <Button variant="primary" size="large">
                                {hero.cta.text}
                            </Button>
                        </div>
                    </div>

                    {/* Video Preview with Year Range and Hero Image */}
                    <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        {/* Year Range */}
                        <div className="lg:col-span-4">
                            <p className="text-lg md:text-xl text-zinc-600 font-geist">
                                {hero.yearRange}
                            </p>
                        </div>

                        {/* Hero Video */}
                        <div className="lg:col-span-8">
                            <div className="relative aspect-square max-w-md ml-auto rounded-lg overflow-hidden shadow-2xl">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src="/assets/videos/hero-section.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
