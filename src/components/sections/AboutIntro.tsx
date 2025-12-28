import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutIntro() {
    const { intro } = ABOUT_CONTENT;

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
                    {/* Kicker */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                            <Spark />
                            <span className="text-base md:text-lg text-zinc-600 font-geist">
                                {intro.kicker}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-8">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-geist leading-relaxed">
                            {intro.description}
                            <span className="text-[#f2500d] font-engagement">
                                {intro.descriptionAccent}
                            </span>
                            {intro.descriptionEnd}
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
                    <div className="lg:col-span-4" />
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {intro.stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-base md:text-lg text-zinc-600 font-geist leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Line with Sparks */}
                <div className="flex items-center gap-4 mb-12 md:mb-16">
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                </div>

                {/* Result Paragraph */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4" />
                    <div className="lg:col-span-8">
                        <p className="text-base md:text-lg text-zinc-600 font-geist leading-relaxed">
                            <span style={{ color: "#9F9FA9" }}>
                                {intro.result.part1}
                            </span>
                            <span style={{ color: "#52525C" }}>
                                {intro.result.part2}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
