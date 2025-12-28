import { useState, useRef, useEffect } from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutTeam() {
    const { team } = ABOUT_CONTENT;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
            return () => container.removeEventListener("scroll", checkScroll);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-zinc-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Mobile Layout */}
            <div className="md:hidden px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header - Center aligned */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Spark />
                            <span className="text-base text-zinc-400 font-geist">
                                {team.kicker}
                            </span>
                        </div>
                        <h2 className="text-3xl text-white font-geist">
                            <span>{team.heading}</span>
                            <span className="text-[#f2500d] font-engagement">
                                {team.headingAccent}
                            </span>
                            <span>{team.headingEnd}</span>
                        </h2>
                    </div>

                    {/* Team Members Carousel - Mobile */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {team.members.map((member, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 group"
                            >
                                <div className="bg-zinc-800 rounded-lg p-3 mb-4 overflow-hidden">
                                    <div className="aspect-[3/4] rounded overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="px-3">
                                    <h3 className="text-xl font-engagement text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-zinc-400 font-geist">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Button - Mobile, below carousel */}
                    <div className="mt-8 text-center">
                        <Button variant="primary" size="large">
                            {team.cta.text}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Desktop Layout - Two Column */}
            <div className="hidden md:block">
                <div className="max-w-7xl mx-auto flex items-center gap-8 lg:gap-12">
                    {/* Left Column - Static Header Section */}
                    <div className="flex-shrink-0 w-80 lg:w-96 pl-6 lg:pl-16 pr-8 bg-zinc-900 relative z-30">
                        <div className="flex items-center gap-3 mb-6">
                            <Spark />
                            <span className="text-base lg:text-lg text-zinc-400 font-geist">
                                {team.kicker}
                            </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-white font-geist mb-8 leading-tight">
                            <span className="block">{team.heading}</span>
                            <span className="text-[#f2500d] font-engagement">
                                {team.headingAccent}
                            </span>
                            <span>{team.headingEnd}</span>
                        </h2>
                        <Button variant="primary" size="large">
                            {team.cta.text}
                        </Button>
                    </div>

                    {/* Right Column - Scrollable Gallery */}
                    <div className="flex-1 relative min-w-0">
                        {/* Left Fade Overlay */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent z-20 pointer-events-none" />

                        {/* Scroll Buttons */}
                        {canScrollLeft && (
                            <button
                                onClick={() => scroll("left")}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 shadow-lg rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                                aria-label="Scroll left"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                        )}

                        {canScrollRight && (
                            <button
                                onClick={() => scroll("right")}
                                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 shadow-lg rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                                aria-label="Scroll right"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        )}

                        {/* Scrollable Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pl-40 lg:pl-56 pr-6 lg:pr-16"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {team.members.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-72 lg:w-80 group"
                                >
                                    <div className="bg-zinc-800 rounded-lg p-3 mb-4 overflow-hidden">
                                        <div className="aspect-[3/4] rounded overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-3">
                                        <h3 className="text-xl lg:text-2xl font-engagement text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm lg:text-base text-zinc-400 font-geist">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
