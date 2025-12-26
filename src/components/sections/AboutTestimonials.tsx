import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutTestimonials() {
    const { testimonials } = ABOUT_CONTENT;
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
            const scrollAmount = 500;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${
                    i < rating ? "text-[#f2500d]" : "text-zinc-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="bg-zinc-50 py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <Spark />
                        <span className="text-base md:text-lg text-zinc-600 font-geist">
                            {testimonials.kicker}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-engagement text-zinc-900 mb-6"
                    >
                        {testimonials.heading}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-zinc-600 font-geist max-w-3xl mx-auto"
                    >
                        {testimonials.description}
                    </motion.p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Scroll Buttons */}
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors"
                            aria-label="Scroll left"
                        >
                            <svg
                                className="w-6 h-6"
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
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors"
                            aria-label="Scroll right"
                        >
                            <svg
                                className="w-6 h-6"
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
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {testimonials.items.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                }}
                                className="flex-shrink-0 w-full md:w-[500px] bg-white rounded-lg p-6 md:p-8"
                            >
                                {/* Client Info */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-geist text-zinc-900 mb-1">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-zinc-600 font-geist">
                                            {testimonial.role} •{" "}
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-zinc-200 mb-6" />

                                {/* Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg font-geist text-zinc-900">
                                        {testimonial.rating}.0
                                    </span>
                                    <div className="flex gap-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>

                                {/* Feedback */}
                                <p className="text-base text-zinc-600 font-geist leading-relaxed">
                                    {testimonial.feedback}
                                </p>

                                {/* Quote Icon */}
                                <div className="mt-6 flex justify-end">
                                    <svg
                                        className="w-24 h-16 text-zinc-100"
                                        viewBox="0 0 160 120"
                                        fill="currentColor"
                                    >
                                        <path d="M0 60h40v60H0V60zm20-20c0-16.569 13.431-30 30-30v20c-5.523 0-10 4.477-10 10v10H0V40z" />
                                        <path d="M80 60h40v60H80V60zm20-20c0-16.569 13.431-30 30-30v20c-5.523 0-10 4.477-10 10v10H80V40z" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <div className="flex items-center justify-center -space-x-2 mb-6">
                        {testimonials.avatars.map((avatar, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                            >
                                <img
                                    src={avatar}
                                    alt={`Client ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-900 text-white flex items-center justify-center text-sm font-geist">
                            {testimonials.count}
                        </div>
                    </div>
                    <p className="text-base md:text-lg text-zinc-600 font-geist mb-6">
                        {testimonials.description}
                    </p>
                    <Button variant="primary" size="large">
                        {testimonials.cta.text}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
