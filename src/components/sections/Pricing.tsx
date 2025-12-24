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

const Pricing: React.FC = () => {
    return (
        <div className="relative pricingSection bg-neutral-50 w-full z-20">
            {/* Desktop Layout (1024px+) - Exact Figma Implementation */}
            <div className="pricingSection-desktop hidden lg:block">
                <div className="bg-neutral-50 box-border flex flex-col gap-16 items-center px-28 py-32 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="gap-12 grid grid-cols-3 grid-rows-1 h-[145px] max-w-[1280px] w-full">
                        {/* Flexible Pricing Label */}
                        <div className="[grid-area:1_/_1] flex gap-2.5 items-center">
                            <div className="flex flex-row items-center h-full">
                                <div className="w-7 h-7">
                                    <SparkIcon />
                                </div>
                            </div>
                            <div className="font-geist font-normal text-lg leading-7 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                Flexible Pricing
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="[grid-area:1_/_2_/_auto_/_span_2] font-geist font-medium text-[60px] leading-[72px] text-zinc-800 tracking-[-2px]">
                            <p className="leading-[72px] mb-0">
                                Pricing that adapt to{" "}
                            </p>
                            <p className="leading-[72px] whitespace-pre-wrap">
                                <span className="text-[60px]">everyone's </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[72px] tracking-[2px]">
                                    Budget and Scope.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Pricing Content */}
                    <div className="gap-12 grid grid-cols-3 grid-rows-1 h-[503px] max-w-[1280px] w-full">
                        {/* Intro Image */}
                        <div className="[grid-area:1_/_1] relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute bg-white inset-0" />
                                <img
                                    alt="Pricing consultation image"
                                    className="absolute max-w-none object-center object-cover w-full h-full"
                                    src="assets/images/home/handshaking.jpg"
                                />
                            </div>
                            <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />
                        </div>

                        {/* Pricing Card */}
                        <div className="[grid-area:1_/_2_/_auto_/_span_2] bg-white box-border flex flex-col gap-8 items-start p-5 relative">
                            <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />

                            {/* Header with Toggle */}
                            <div className="flex gap-16 items-start w-full">
                                <div className="flex-1 flex flex-col gap-1.5 items-start">
                                    <div className="font-geist font-semibold text-2xl leading-9 text-zinc-800 tracking-[-0.25px] w-full">
                                        Subscription start from
                                    </div>
                                    <div className="font-geist font-normal text-lg leading-7 text-zinc-600 tracking-[0.5px] w-full">
                                        Perfect for startups, and teams seeking
                                        reliable assistance without the cost of
                                        full-time hires.
                                    </div>
                                </div>

                                {/* Toggle */}
                                <div className="bg-neutral-50 box-border flex items-center justify-center p-1.5 rounded-full shrink-0 relative">
                                    <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-full" />
                                    <div className="box-border flex gap-2 items-center justify-center px-4 py-2 rounded-full">
                                        <div className="font-geist text-base leading-6 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                            Hourly
                                        </div>
                                    </div>
                                    <div className="bg-zinc-800 box-border flex gap-2 items-center justify-center px-4 py-2 rounded-full">
                                        <div className="font-geist text-base leading-6 text-white tracking-[0.5px] whitespace-pre">
                                            Project-based
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="bg-zinc-200 h-px w-full" />

                            {/* What's Included */}
                            <div className="flex flex-col gap-1.5 items-start w-full">
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                    What's Included
                                </div>

                                {/* Services Grid */}
                                <div className="gap-2 grid grid-cols-2 grid-rows-4 h-[120px] min-w-[296px] w-full">
                                    <div className="[grid-area:1_/_1] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Dedicated hours.
                                        </div>
                                    </div>
                                    <div className="[grid-area:1_/_2] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Unlimited revisions.
                                        </div>
                                    </div>
                                    <div className="[grid-area:2_/_1] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Weekly check-ins
                                        </div>
                                    </div>
                                    <div className="[grid-area:2_/_2] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Priority bug fixes
                                        </div>
                                    </div>
                                    <div className="[grid-area:3_/_1] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Access to data insights
                                        </div>
                                    </div>
                                    <div className="[grid-area:3_/_2] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Access to data insights
                                        </div>
                                    </div>
                                    <div className="[grid-area:4_/_1] flex gap-4 items-center">
                                        <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                        <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                            Progress & performance tracking.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="flex flex-col gap-1.5 items-start w-full">
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                    Subscription start from
                                </div>

                                <div className="bg-neutral-50 box-border flex flex-col items-start p-2 w-full relative">
                                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />
                                <div className="flex items-center w-full">
                                    <div className="flex-1 flex items-center">
                                        <div className="font-engagement text-[48px] leading-12 text-zinc-900 tracking-[-1px] whitespace-pre">
                                            $
                                        </div>
                                        <div className="font-geist font-medium text-[48px] leading-[52px] text-zinc-900 tracking-[-1px] whitespace-pre">
                                            330
                                        </div>
                                        <div className="box-border flex gap-2 items-center justify-center px-0 py-1">
                                            <div className="font-geist font-medium text-lg leading-7 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                                /Project
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-4 py-2.5 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                        <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px] whitespace-pre">
                                            Let's Discuss
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
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) - Exact Figma Implementation */}
            <div className="pricingSection-tablet hidden md:block lg:hidden">
                <div className="bg-neutral-50 box-border flex flex-col gap-12 items-center px-8 py-24 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4 items-center max-w-[1280px] w-full">
                        {/* Flexible Pricing Label */}
                        <div className="flex gap-1 items-start justify-center w-full">
                            <div className="w-7 h-7">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-lg leading-7 text-center text-zinc-800 tracking-[0.5px] whitespace-pre">
                                Flexible Pricing
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-[48px] leading-[52px] text-center text-zinc-800 tracking-[-1px] w-full">
                            <p className="leading-[52px] mb-0">
                                Pricing that adapt to{" "}
                            </p>
                            <p className="leading-[52px]">
                                <span className="text-[48px]">everyone's </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[60px] tracking-[2px]">
                                    Budget and Scope.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Pricing Card - Full Width */}
                    <div className="bg-white box-border flex flex-col gap-8 items-start p-5 w-full relative">
                        <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />

                        {/* Header with Toggle */}
                        <div className="flex gap-16 items-start w-full">
                            <div className="flex-1 flex flex-col gap-1.5 items-start">
                                <div className="font-geist font-semibold text-2xl leading-9 text-zinc-800 tracking-[-0.25px] w-full">
                                    Subscription start from
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-600 tracking-[0.5px] w-full">
                                    Perfect for startups, and teams seeking
                                    reliable assistance without the cost of
                                    full-time hires.
                                </div>
                            </div>

                            {/* Toggle */}
                            <div className="bg-neutral-50 box-border flex items-center justify-center p-1 rounded-full shrink-0 relative">
                                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-full" />
                                <div className="box-border flex gap-2 items-center justify-center px-4 py-2 rounded-full">
                                    <div className="font-geist font-medium text-sm leading-5 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                        Hourly
                                    </div>
                                </div>
                                <div className="bg-zinc-800 box-border flex gap-2 items-center justify-center px-4 py-2 rounded-full">
                                    <div className="font-geist font-medium text-sm leading-5 text-white tracking-[0.5px] whitespace-pre">
                                        Project-based
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* What's Included */}
                        <div className="flex flex-col gap-1.5 items-start w-full">
                            <div className="font-geist font-medium text-lg leading-7 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                What's Included
                            </div>

                            {/* Services Grid */}
                            <div className="gap-2 grid grid-cols-2 grid-rows-4 h-[120px] min-w-[296px] w-full">
                                <div className="[grid-area:1_/_1] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Dedicated hours.
                                    </div>
                                </div>
                                <div className="[grid-area:1_/_2] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Unlimited revisions.
                                    </div>
                                </div>
                                <div className="[grid-area:2_/_1] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Weekly check-ins
                                    </div>
                                </div>
                                <div className="[grid-area:2_/_2] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Priority bug fixes
                                    </div>
                                </div>
                                <div className="[grid-area:3_/_1] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Access to data insights
                                    </div>
                                </div>
                                <div className="[grid-area:3_/_2] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Access to data insights
                                    </div>
                                </div>
                                <div className="[grid-area:4_/_1] flex gap-4 items-center">
                                    <div className="bg-[#f2500d] w-2 h-2 shrink-0" />
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                        Progress & performance tracking.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex flex-col gap-1.5 items-start w-full">
                            <div className="font-geist font-medium text-lg leading-7 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                Subscription start from
                            </div>

                            <div className="bg-neutral-50 box-border flex flex-col items-start p-2 w-full relative">
                                <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />
                                <div className="flex items-center w-full">
                                    <div className="flex-1 flex items-center">
                                        <div className="font-engagement text-[48px] leading-12 text-zinc-900 tracking-[-1px] whitespace-pre">
                                            $
                                        </div>
                                        <div className="font-geist font-medium text-[48px] leading-[52px] text-zinc-900 tracking-[-1px] whitespace-pre">
                                            330
                                        </div>
                                        <div className="box-border flex gap-2 items-center justify-center px-0 py-1">
                                            <div className="font-geist font-medium text-lg leading-7 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                                /Project
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-4 py-2.5 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                        <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px] whitespace-pre">
                                            Let's Discuss
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
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="pricingSection-mobile block md:hidden">
                <div className="bg-neutral-50 box-border flex flex-col gap-8 items-center px-4 py-16 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* Flexible Pricing Label */}
                        <div className="flex gap-1.5 items-center justify-center w-full">
                            <div className="flex flex-row items-center h-full">
                                <div className="w-6 h-6">
                                    <SparkIcon />
                                </div>
                            </div>
                            <div className="font-geist font-normal text-sm leading-5 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                Flexible Pricing
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-center text-2xl leading-8 text-zinc-800 tracking-[-0.25px] w-full">
                            <p className="leading-8 mb-0">
                                Pricing that adapt to{" "}
                            </p>
                            <p className="leading-8">
                                <span className="text-2xl">everyone's </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[28px] tracking-[1.5px]">
                                    Budget and Scope.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Pricing Content */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* Intro Image */}
                        {/* <div className="relative overflow-hidden h-[200px] w-full">
                            <div className="absolute inset-0">
                                <div className="absolute bg-white inset-0" />
                                <img
                                    alt="Pricing consultation image"
                                    className="absolute max-w-none object-center object-cover w-full h-full"
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                />
                            </div>
                            <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />
                        </div> */}

                        {/* Pricing Card */}
                        <div className="bg-white box-border flex flex-col gap-6 items-start p-4 w-full relative">
                            <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />

                            {/* Header with Toggle */}
                            <div className="flex flex-col gap-4 items-start w-full">
                                <div className="flex flex-col gap-2 items-start w-full">
                                    <div className="font-geist font-semibold text-lg leading-7 text-zinc-800 tracking-[-0.25px] w-full">
                                        Subscription start from
                                    </div>
                                    <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px] w-full">
                                        Perfect for startups, and teams seeking
                                        reliable assistance without the cost of
                                        full-time hires.
                                    </div>
                                </div>

                                {/* Toggle */}
                                <div className="bg-neutral-50 box-border flex items-center justify-center p-1 rounded-full w-fit relative">
                                    <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none rounded-full" />
                                    <div className="box-border flex gap-1 items-center justify-center px-3 py-1.5 rounded-full">
                                        <div className="font-geist text-xs leading-4 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                            Hourly
                                        </div>
                                    </div>
                                    <div className="bg-zinc-800 box-border flex gap-1 items-center justify-center px-3 py-1.5 rounded-full">
                                        <div className="font-geist text-xs leading-4 text-white tracking-[0.5px] whitespace-pre">
                                            Project-based
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="bg-zinc-200 h-px w-full" />

                            {/* What's Included */}
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="font-geist font-medium text-sm leading-5 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                    What's Included
                                </div>

                                {/* Services List */}
                                <div className="flex flex-col gap-2 w-full">
                                    {[
                                        "Dedicated hours.",
                                        "Unlimited revisions.",
                                        "Weekly check-ins",
                                        "Priority bug fixes",
                                        "Access to data insights",
                                        "Progress & performance tracking.",
                                    ].map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-2 items-center"
                                        >
                                            <div className="bg-[#f2500d] w-1.5 h-1.5 shrink-0" />
                                            <div className="font-geist font-normal text-xs leading-4 text-zinc-600 tracking-[0.5px]">
                                                {service}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="font-geist font-medium text-sm leading-5 text-zinc-800 tracking-[0.5px] whitespace-pre">
                                    Subscription start from
                                </div>

                                <div className="bg-neutral-50 box-border flex flex-col items-start p-3 w-full relative">
                                    <div className="absolute border border-solid border-zinc-200 inset-0 pointer-events-none" />
                                    <div className="flex flex-col gap-3 items-start w-full">
                                        <div className="flex items-end">
                                            <div className="font-engagement text-[32px] leading-8 text-zinc-900 tracking-[-1px] whitespace-pre">
                                                $
                                            </div>
                                            <div className="font-geist font-medium text-[32px] leading-8 text-zinc-900 tracking-[-1px] whitespace-pre">
                                                330
                                            </div>
                                            <div className="box-border flex gap-1 items-center justify-center px-0 py-0.5">
                                                <div className="font-geist font-medium text-sm leading-5 text-zinc-600 tracking-[0.5px] whitespace-pre">
                                                    /Project
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-4 py-2.5 cursor-pointer hover:bg-[#d63d00] transition-colors w-full">
                                            <div className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px] whitespace-pre">
                                                Let's Discuss
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
                </div>
            </div>
        </div>
    );
};

export default Pricing;
