import React from "react";

// Spark icon component
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

// Arrow icon for button
const ArrowIcon = () => (
    <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M4 10H16M16 10L10 4M16 10L10 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex gap-0.5 items-center">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="w-[18px] h-[18px] relative">
                    {index < fullStars ? (
                        // Full star
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M9 1.5L11.09 5.26L15 5.87L12 8.78L12.68 12.64L9 10.77L5.32 12.64L6 8.78L3 5.87L6.91 5.26L9 1.5Z"
                                fill="#f2500d"
                                stroke="#f2500d"
                                strokeWidth="1"
                            />
                        </svg>
                    ) : index === fullStars && hasHalfStar ? (
                        // Half star
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M9 1.5L11.09 5.26L15 5.87L12 8.78L12.68 12.64L9 10.77L5.32 12.64L6 8.78L3 5.87L6.91 5.26L9 1.5Z"
                                fill="none"
                                stroke="#f2500d"
                                strokeWidth="1"
                            />
                        </svg>
                    ) : (
                        // Empty star
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 18 18"
                            fill="none"
                        >
                            <path
                                d="M9 1.5L11.09 5.26L15 5.87L12 8.78L12.68 12.64L9 10.77L5.32 12.64L6 8.78L3 5.87L6.91 5.26L9 1.5Z"
                                fill="none"
                                stroke="#f2500d"
                                strokeWidth="1"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
};

// Quote decoration SVG
const QuoteDecoration = () => (
    <div className="absolute -top-3 -right-3 w-[160px] h-[120px] scale-y-[-1] opacity-10">
        <svg viewBox="0 0 160 120" fill="none" className="w-full h-full">
            <path
                d="M40 60C40 26.8629 66.8629 0 100 0C133.137 0 160 26.8629 160 60C160 93.1371 133.137 120 100 120C66.8629 120 40 93.1371 40 60Z"
                fill="#f2500d"
                fillOpacity="0.1"
            />
            <path
                d="M0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60Z"
                fill="#f2500d"
                fillOpacity="0.1"
            />
        </svg>
    </div>
);

// Testimonial Card Component
interface TestimonialCardProps {
    name: string;
    role: string;
    rating: number;
    testimonial: string;
    avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    role,
    rating,
    testimonial,
    avatar,
}) => {
    return (
        <div className="bg-white box-border flex flex-col gap-5 items-start p-8 w-full relative border border-solid border-zinc-200 overflow-hidden">
            {/* Quote Decoration */}
            <QuoteDecoration />

            {/* Client Info */}
            <div className="flex gap-4 items-end w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="font-geist font-semibold text-2xl leading-9 text-zinc-900 tracking-[-0.25px]">
                        {name}
                    </div>
                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px]">
                        {role}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="bg-zinc-200 h-px w-full" />

            {/* Rating */}
            <div className="flex gap-1.5 items-center">
                <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px]">
                    {rating.toFixed(1)}
                </div>
                <StarRating rating={rating} />
            </div>

            {/* Testimonial */}
            <div className="font-geist font-semibold text-lg leading-7 text-zinc-600 tracking-[0.5px] w-full">
                {testimonial}
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Anika P.",
            role: "CTO, FinTech Startup",
            rating: 5.0,
            testimonial:
                "Data Sapience Lab turned our messy datasets into clear, actionable insights. Their AI-driven dashboards helped us cut reporting time by 60% while making smarter, faster decisions.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Sophia Lee",
            role: "COO, E-commerce Brand",
            rating: 5.0,
            testimonial:
                "The team didn't just deliver a solution, they became a true partner. From strategy workshops to deployment, they guided us every step of the way. We now run smarter operations with confidence.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Juan Attwood",
            role: "Head of Operations, Logistics Company",
            rating: 4.8,
            testimonial:
                "Working with Data Sapience Lab was seamless. They integrated machine learning into our existing system without disruption, and the results were immediate — higher efficiency and reduced costs.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Ava Martinez",
            role: "Founder, HealthTech Startup",
            rating: 5.0,
            testimonial:
                "Their mix of technical expertise and business understanding is rare. They don't just build AI tools — they build solutions that create real business impact.",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
        },
    ];

    const clientAvatars = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    ];

    return (
        <div className="storiesSection bg-neutral-50 w-full">
            {/* Desktop Layout (1024px+) */}
            <div className="storiesSection-desktop hidden lg:block">
                <div className="bg-neutral-50 box-border flex flex-col gap-16 items-center px-28 py-32 w-full min-h-fit">
                    <div className="flex gap-16 items-start max-w-[1280px] w-full">
                        {/* Left Column - Header */}
                        <div className="flex-1 flex flex-col gap-4 items-start">
                            {/* Client Success Stories Label */}
                            <div className="flex gap-2.5 items-center w-full">
                                <div className="w-7 h-7">
                                    <SparkIcon />
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-800 tracking-[0.5px]">
                                    Client Success Stories
                                </div>
                            </div>

                            {/* Main Heading */}
                            <div className="font-geist font-medium text-[60px] leading-[72px] text-zinc-800 tracking-[-2px] w-full">
                                <p className="leading-[72px] mb-0 whitespace-pre-wrap">
                                    <span className="text-[60px]">
                                        Reflections from our{" "}
                                    </span>
                                    <span className="font-engagement not-italic text-[#f2500d] text-[72px] tracking-[2px]">
                                        Happy Clients
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Testimonials */}
                        <div className="flex-1 flex flex-col gap-5 items-center">
                            {/* Testimonial Cards */}
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    rating={testimonial.rating}
                                    testimonial={testimonial.testimonial}
                                    avatar={testimonial.avatar}
                                />
                            ))}

                            {/* Bottom Section */}
                            <div className="flex flex-col gap-5 items-start pt-8 w-full">
                                {/* Client Avatars */}
                                <div className="flex items-center">
                                    {clientAvatars.map((avatar, index) => (
                                        <div
                                            key={index}
                                            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white -mr-3 relative z-10"
                                            style={{
                                                zIndex:
                                                    clientAvatars.length -
                                                    index,
                                            }}
                                        >
                                            <img
                                                src={avatar}
                                                alt={`Client ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="bg-[#f2500d] w-10 h-10 rounded-full flex items-center justify-center -mr-3 relative z-0 border-2 border-white">
                                        <div className="font-geist font-normal text-sm leading-5 text-white tracking-[0.5px]">
                                            20+
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="font-geist font-normal text-2xl leading-9 text-zinc-600 tracking-[-0.25px] w-full">
                                    <span className="font-geist font-normal text-zinc-900">
                                        20+ teams
                                    </span>
                                    <span>
                                        {" "}
                                        who turned their ideas into solutions
                                        with{" "}
                                    </span>
                                    <span className="font-engagement not-italic text-[#f2500d] text-[32px] tracking-[1px]">
                                        Data Sapience Lab
                                    </span>
                                    <span>
                                        . Let's explore how we can help shape
                                        your next success.
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                    <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                        Write Your Story
                                    </div>
                                    <div className="w-5 h-5">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="storiesSection-tablet hidden md:block lg:hidden">
                <div className="bg-neutral-50 box-border flex flex-col gap-12 items-center px-8 py-24 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-center max-w-[1280px] w-full">
                        {/* Client Success Stories Label */}
                        <div className="flex gap-2 items-center justify-center w-full">
                            <div className="w-7 h-7">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-lg leading-7 text-center text-zinc-800 tracking-[0.5px]">
                                Client Success Stories
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-[48px] leading-[52px] text-center text-zinc-800 tracking-[-1px] w-full">
                            <p className="leading-[52px] mb-0 whitespace-pre-wrap">
                                <span className="text-[48px]">
                                    Reflections from our{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[60px] tracking-[2px]">
                                    Happy Clients
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="flex flex-col gap-5 items-center w-full">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                role={testimonial.role}
                                rating={testimonial.rating}
                                testimonial={testimonial.testimonial}
                                avatar={testimonial.avatar}
                            />
                        ))}

                        {/* Bottom Section */}
                        <div className="flex flex-col gap-5 items-center pt-8 w-full">
                            {/* Client Avatars */}
                            <div className="flex items-center justify-center">
                                {clientAvatars.map((avatar, index) => (
                                    <div
                                        key={index}
                                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-white -mr-3 relative z-10"
                                        style={{
                                            zIndex:
                                                clientAvatars.length - index,
                                        }}
                                    >
                                        <img
                                            src={avatar}
                                            alt={`Client ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="bg-[#f2500d] w-10 h-10 rounded-full flex items-center justify-center -mr-3 relative z-0 border-2 border-white">
                                    <div className="font-geist font-normal text-sm leading-5 text-white tracking-[0.5px]">
                                        20+
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="font-geist font-normal text-xl leading-8 text-center text-zinc-600 tracking-[-0.25px] w-full">
                                <span className="font-geist font-normal text-zinc-900">
                                    20+ teams
                                </span>
                                <span>
                                    {" "}
                                    who turned their ideas into solutions with{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[28px] tracking-[1px]">
                                    Data Sapience Lab
                                </span>
                                <span>
                                    . Let's explore how we can help shape your
                                    next success.
                                </span>
                            </div>

                            {/* CTA Button */}
                            <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                    Write Your Story
                                </div>
                                <div className="w-5 h-5">
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="storiesSection-mobile block md:hidden">
                <div className="bg-neutral-50 box-border flex flex-col gap-8 items-center px-4 py-16 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* Client Success Stories Label */}
                        <div className="flex gap-1.5 items-center w-full">
                            <div className="w-6 h-6">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-sm leading-5 text-zinc-800 tracking-[0.5px]">
                                Client Success Stories
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-2xl leading-8 text-zinc-800 tracking-[-0.25px] w-full">
                            <p className="leading-8 mb-0">
                                Reflections from our
                            </p>
                            <p className="leading-8">
                                <span className="font-engagement not-italic text-[#f2500d] text-[28px] tracking-[1.5px]">
                                    Happy Clients
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="flex flex-col gap-4 items-start w-full">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white box-border flex flex-col gap-4 items-start p-4 w-full relative border border-solid border-zinc-200 overflow-hidden"
                            >
                                {/* Quote Decoration - Smaller for mobile */}
                                <div className="absolute -top-2 -right-2 w-[80px] h-[60px] scale-y-[-1] opacity-5">
                                    <svg
                                        viewBox="0 0 160 120"
                                        fill="none"
                                        className="w-full h-full"
                                    >
                                        <path
                                            d="M40 60C40 26.8629 66.8629 0 100 0C133.137 0 160 26.8629 160 60C160 93.1371 133.137 120 100 120C66.8629 120 40 93.1371 40 60Z"
                                            fill="#f2500d"
                                        />
                                        <path
                                            d="M0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60Z"
                                            fill="#f2500d"
                                        />
                                    </svg>
                                </div>

                                {/* Client Info */}
                                <div className="flex gap-3 items-end w-full">
                                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="font-geist font-semibold text-lg leading-7 text-zinc-900 tracking-[-0.25px]">
                                            {testimonial.name}
                                        </div>
                                        <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px]">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="bg-zinc-200 h-px w-full" />

                                {/* Rating */}
                                <div className="flex gap-1 items-center">
                                    <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px]">
                                        {testimonial.rating.toFixed(1)}
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                </div>

                                {/* Testimonial */}
                                <div className="font-geist font-semibold text-sm leading-5 text-zinc-600 tracking-[0.5px] w-full">
                                    {testimonial.testimonial}
                                </div>
                            </div>
                        ))}

                        {/* Bottom Section */}
                        <div className="flex flex-col gap-4 items-start pt-6 w-full">
                            {/* Client Avatars */}
                            <div className="flex items-center">
                                {clientAvatars.map((avatar, index) => (
                                    <div
                                        key={index}
                                        className="w-8 h-8 rounded-full overflow-hidden border-2 border-white -mr-2 relative z-10"
                                        style={{
                                            zIndex:
                                                clientAvatars.length - index,
                                        }}
                                    >
                                        <img
                                            src={avatar}
                                            alt={`Client ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="bg-[#f2500d] w-8 h-8 rounded-full flex items-center justify-center -mr-2 relative z-0 border-2 border-white">
                                    <div className="font-geist font-normal text-xs leading-4 text-white tracking-[0.5px]">
                                        20+
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="font-geist font-normal text-lg leading-7 text-zinc-600 tracking-[-0.25px] w-full">
                                <span className="font-geist font-normal text-zinc-900">
                                    20+ teams
                                </span>
                                <span>
                                    {" "}
                                    who turned their ideas into solutions with{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[22px] tracking-[1px]">
                                    Data Sapience Lab
                                </span>
                                <span>
                                    . Let's explore how we can help shape your
                                    next success.
                                </span>
                            </div>

                            {/* CTA Button */}
                            <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-4 py-2.5 cursor-pointer hover:bg-[#d63d00] transition-colors w-full">
                                <div className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    Write Your Story
                                </div>
                                <div className="w-4 h-4">
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
