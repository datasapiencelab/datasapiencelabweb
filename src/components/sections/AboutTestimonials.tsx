import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "@/content/about";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

export default function AboutTestimonials() {
    const { testimonials } = ABOUT_CONTENT;

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

    // Split testimonials into two rows
    const midpoint = Math.ceil(testimonials.items.length / 2);
    const rowA = testimonials.items.slice(0, midpoint);
    const rowB = testimonials.items.slice(midpoint);

    const TestimonialCard = ({
        testimonial,
    }: {
        testimonial: (typeof testimonials.items)[0];
    }) => (
        <div className="mx-2 md:mx-4 inline-block w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-sm">
            {/* Client Info */}
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg lg:text-xl font-geist text-zinc-900 mb-1 truncate">
                        {testimonial.name}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-zinc-600 font-geist line-clamp-2">
                        {testimonial.role} • {testimonial.company}
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-200 mb-4 md:mb-6" />

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-base md:text-lg font-geist text-zinc-900">
                    {testimonial.rating}.0
                </span>
                <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                </div>
            </div>

            {/* Feedback */}
            <p className="text-sm md:text-base text-zinc-600 font-geist leading-relaxed line-clamp-4 md:line-clamp-none">
                {testimonial.feedback}
            </p>

            {/* Quote Icon */}
            <div className="mt-4 md:mt-6 flex justify-end">
                <svg
                    className="w-16 h-10 md:w-20 md:h-12 lg:w-24 lg:h-16 text-zinc-100"
                    viewBox="0 0 160 120"
                    fill="currentColor"
                >
                    <path d="M0 60h40v60H0V60zm20-20c0-16.569 13.431-30 30-30v20c-5.523 0-10 4.477-10 10v10H0V40z" />
                    <path d="M80 60h40v60H80V60zm20-20c0-16.569 13.431-30 30-30v20c-5.523 0-10 4.477-10 10v10H80V40z" />
                </svg>
            </div>
        </div>
    );

    return (
        <section className="bg-zinc-50 py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Spark />
                        <span className="text-base md:text-lg text-zinc-600 font-geist">
                            {testimonials.kicker}
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl text-zinc-900 mb-6 font-geist">
                        {testimonials.heading}
                        <span className="text-[#f2500d] font-engagement">
                            {testimonials.headingAccent}
                        </span>
                    </h2>
                </div>

                {/* Scroll-based Velocity Testimonials */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 md:py-8">
                    <ScrollVelocityContainer className="w-full">
                        <ScrollVelocityRow
                            baseVelocity={4}
                            direction={1}
                            className="py-2 md:py-4"
                        >
                            {rowA.map((testimonial, idx) => (
                                <TestimonialCard
                                    key={idx}
                                    testimonial={testimonial}
                                />
                            ))}
                        </ScrollVelocityRow>
                        <ScrollVelocityRow
                            baseVelocity={4}
                            direction={-1}
                            className="py-2 md:py-4"
                        >
                            {rowB.map((testimonial, idx) => (
                                <TestimonialCard
                                    key={idx}
                                    testimonial={testimonial}
                                />
                            ))}
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>

                    {/* Gradient overlays */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-zinc-50"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-zinc-50"></div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16">
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
                        20+ teams who turned their ideas into solutions with{" "}
                        <span className="text-[#f2500d] font-engagement">
                            Data Sapience Lab
                        </span>
                        . Let's explore how we can help shape your next success.
                    </p>
                    <Button
                        variant="primary"
                        size="large"
                        onClick={() => (window.location.href = "/contact")}
                    >
                        Write Your Story
                    </Button>
                </div>
            </div>
        </section>
    );
}
