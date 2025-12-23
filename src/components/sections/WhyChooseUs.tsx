import React from "react";
import { WHY_SECTION_RESOURCES } from "./whyChooseUsData";

// Destructure resources for easier access
const { images, colors } = WHY_SECTION_RESOURCES;

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
            fill={colors.brand}
        />
    </svg>
);

// Send icon for chat
const SendIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path
            d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
            stroke="#d4d4d8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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

const WhyChooseUs: React.FC = () => {
    return (
        <div className="relative whySection bg-zinc-950 w-full z-20">
            {/* Desktop Layout (1024px+) - Exact Figma Implementation */}
            <div className="whySection-desktop hidden lg:block">
                <div className="bg-zinc-950 box-border flex flex-col gap-16 items-center px-28 py-32 w-full">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4 items-center max-w-[1280px] w-full">
                        <div className="flex gap-2.5 items-start">
                            <div className="w-7 h-7">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-lg text-zinc-100 tracking-[0.5px] leading-7">
                                Why Data Sapience Lab
                            </div>
                        </div>
                        <div className="font-geist font-medium text-[60px] leading-[72px] text-zinc-100 tracking-[-2px] text-center">
                            <p className="leading-[72px] mb-0">
                                Empowering businesses{" "}
                            </p>
                            <p className="leading-[72px]">
                                <span className="text-[60px]">with </span>
                                <span className="capitalize font-engagement not-italic text-[#f2500d] text-[72px] tracking-[2px]">
                                    Data-Driven innovation.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Grid Body - Exact Figma Grid Layout */}
                    <div className="gap-8 grid grid-cols-3 grid-rows-3 h-[851px] max-w-[1280px] overflow-hidden w-full">
                        {/* Flexible Pricing - grid-area: 1 / 1 / span 2 */}
                        <div className="[grid-area:1_/_1_/_span_2] box-border flex flex-col gap-8 items-center justify-center px-4 py-6 relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute bg-zinc-900 inset-0" />
                                <img
                                    alt=""
                                    className="absolute max-w-none object-center object-cover opacity-40 w-full h-full"
                                    src={images.humanCenteredDesign}
                                />
                            </div>
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-[13px] items-center relative z-10 w-full">
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="bg-[#f2500d] box-border flex gap-2 items-center justify-center p-3">
                                        <div className="font-engagement text-[40px] leading-12 not-italic text-white tracking-[2px] text-center whitespace-pre">
                                            Flexible
                                        </div>
                                    </div>
                                    <div className="font-geist font-semibold text-[48px] leading-[52px] text-white tracking-[8px] text-center whitespace-pre">
                                        Pricing
                                    </div>
                                </div>
                                <div className="font-geist font-medium text-2xl leading-9 text-zinc-200 tracking-[-0.25px] text-center min-w-full">
                                    Pricing plans that adapt to your budget and
                                    scope.
                                </div>
                            </div>
                        </div>

                        {/* 100% Transparency - grid-area: 3 / 1 */}
                        <div className="[grid-area:3_/_1] bg-zinc-900 box-border flex flex-col items-start justify-between px-4 py-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex gap-1 items-end">
                                <div className="font-engagement text-[72px] leading-[72px] not-italic text-zinc-100 tracking-[-2px] whitespace-pre">
                                    100
                                </div>
                                <div className="box-border flex gap-2 items-center justify-center px-0 py-2">
                                    <div className="font-engagement text-[40px] leading-10 not-italic text-white tracking-[-1px] whitespace-pre">
                                        %
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start w-full">
                                <div className="font-geist font-medium text-2xl leading-9 text-zinc-200 tracking-[-0.25px] whitespace-pre">
                                    Transparency.
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px] min-w-full">
                                    You'll always know what we're building, why,
                                    and how it benefits your business.
                                </div>
                            </div>
                        </div>

                        {/* 3X Faster Results - grid-area: 1 / 2 */}
                        <div className="[grid-area:1_/_2] bg-zinc-900 box-border flex flex-col items-start justify-between px-4 py-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-engagement text-[48px] leading-[72px] not-italic text-zinc-100 tracking-[-1px] whitespace-pre">
                                3X
                            </div>
                            <div className="flex flex-col gap-1.5 items-start w-full">
                                <div className="font-geist font-medium text-2xl leading-9 text-zinc-200 tracking-[-0.25px] whitespace-pre">
                                    Faster Results
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px] min-w-full">
                                    Our clients streamline decision-making and
                                    cut project delivery time by up to 70%.
                                </div>
                            </div>
                        </div>

                        {/* Real-time Support - grid-area: 2 / 2 / span 2 */}
                        <div className="[grid-area:2_/_2_/_span_2] box-border flex flex-col items-start justify-between px-4 py-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-1.5 items-start w-full">
                                <div className="font-geist font-medium text-2xl leading-9 text-zinc-200 tracking-[-0.25px] whitespace-pre">
                                    Real-time support
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px] min-w-full">
                                    Our team is always just a message away —
                                    real humans, real answers.
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px] w-full">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] w-[154px]">
                                        Can we update the layout before launch?
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end w-full">
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 h-9 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] w-[55px]">
                                            Hi there
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px] w-[164px]">
                                            We'll make the changes and send a
                                            quick preview
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px] w-[227px]">
                                            Just updated. You should be able to
                                            see the new version on your side
                                            now.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] w-[138px]">
                                        <p className="mb-0">
                                            Amazing, thank you! You guys are
                                            fast
                                        </p>
                                        <p> 🙌</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex items-center justify-between px-3 py-1.5 rounded-[13.805px] w-full">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-[#9f9fa9] text-sm leading-5 tracking-[0.5px] whitespace-pre">
                                        Type message.....
                                    </div>
                                    <div className="w-5 h-5">
                                        <SendIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategic Solutions - grid-area: 1 / 3 / span 2 */}
                        <div className="[grid-area:1_/_3_/_span_2] box-border flex flex-col gap-8 items-start justify-end px-4 py-6 relative overflow-hidden">
                            <img
                                alt=""
                                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full"
                                src={images.dataAnalytics}
                            />
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-geist font-normal text-white tracking-[-1px] w-full relative z-10">
                                <p>
                                    <span className="font-geist font-normal leading-10 text-[32px] tracking-[-1px]">
                                        Strategic solutions for{" "}
                                    </span>
                                    <span className="font-engagement leading-12 not-italic text-[48px] tracking-[2px]">
                                        long lasting impact.
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 items-start w-full relative z-10">
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px]">
                                        Data-Driven Decisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px]">
                                        Scalable Architecture
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px]">
                                        Timely delivery
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px]">
                                        Unlimited Revisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-300 tracking-[0.5px]">
                                        Post-Launch support
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - grid-area: 3 / 3 */}
                        <div className="[grid-area:3_/_3] bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                            <div className="font-geist font-semibold text-base leading-6 not-italic text-white tracking-[0.5px] whitespace-pre">
                                Get Your Free Project Quote
                            </div>
                            <div className="w-5 h-5">
                                <ArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) - Exact Figma Implementation */}
            <div className="whySection-tablet hidden md:block lg:hidden">
                <div className="bg-zinc-950 box-border flex flex-col gap-12 items-center px-8 py-24 w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-4 items-center max-w-[1280px] w-full">
                        <div className="flex gap-1.5 items-center justify-center w-full">
                            <div className="flex flex-row items-center h-full">
                                <div className="w-7 h-7">
                                    <SparkIcon />
                                </div>
                            </div>
                            <div className="font-geist font-normal text-lg leading-7 text-center text-zinc-100 tracking-[0.5px] whitespace-pre">
                                Why Data Sapience Lab
                            </div>
                        </div>
                        <div className="font-geist font-medium text-white tracking-[-1px] text-center w-full">
                            <p className="font-geist font-semibold text-[40px] leading-12 mb-0">
                                Empowering businesses{" "}
                            </p>
                            <p>
                                <span className="font-geist font-semibold text-[40px] leading-12 tracking-[-1px]">
                                    with
                                </span>
                                <span className="text-[48px] leading-[52px]">
                                    {" "}
                                </span>
                                <span className="capitalize font-engagement not-italic text-[#f2500d] text-[60px] leading-[52px] tracking-[2px]">
                                    Data-Driven innovation.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Grid Body - Exact Figma Tablet Grid */}
                    <div className="gap-5 grid grid-cols-2 grid-rows-9 h-[1378px] max-w-[1280px] overflow-hidden w-full">
                        {/* Flexible Pricing - grid-area: 1 / 1 / span 2 */}
                        <div className="[grid-area:1_/_1_/_span_2] box-border flex flex-col gap-8 items-center justify-center p-6 relative overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="absolute bg-zinc-900 inset-0" />
                                <img
                                    alt=""
                                    className="absolute max-w-none object-center object-cover opacity-40 w-full h-full"
                                    src={images.humanCenteredDesign}
                                />
                            </div>
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-[13px] items-center relative z-10 w-full">
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="bg-[#f2500d] box-border flex gap-2 items-center justify-center p-3">
                                        <div className="font-engagement text-[32px] leading-12 not-italic text-white tracking-[2px] text-center whitespace-pre">
                                            Flexible
                                        </div>
                                    </div>
                                    <div className="font-geist font-semibold text-[40px] leading-[52px] text-white tracking-[8px] text-center whitespace-pre">
                                        Pricing
                                    </div>
                                </div>
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-200 tracking-[0.5px] text-center min-w-full">
                                    Pricing plans that adapt to your budget and
                                    scope.
                                </div>
                            </div>
                        </div>

                        {/* 3X Faster Results - grid-area: 1 / 2 / span 2 */}
                        <div className="[grid-area:1_/_2_/_span_2] bg-zinc-900 box-border flex flex-col items-start justify-between p-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-engagement text-[40px] leading-[72px] not-italic text-zinc-100 tracking-[-1px] whitespace-pre">
                                3X
                            </div>
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full">
                                <div className="font-geist font-medium text-xl leading-8 text-zinc-200 whitespace-pre">
                                    Faster Results
                                </div>
                                <div className="font-geist font-normal text-base leading-6 text-zinc-300 min-w-full">
                                    Our clients streamline decision-making and
                                    cut project delivery time by up to 70%.
                                </div>
                            </div>
                        </div>

                        {/* Strategic Solutions - grid-area: 3 / 1 / span 2 / span 2 */}
                        <div className="[grid-area:3_/_1_/_span_2_/_span_2] box-border flex flex-col items-start justify-between p-6 relative overflow-hidden">
                            <img
                                alt=""
                                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full"
                                src={images.dataAnalytics}
                            />
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-geist font-medium text-white tracking-[-0.25px] w-full relative z-10">
                                <p className="text-2xl leading-9">
                                    <span>Strategic solutions for </span>
                                    <span className="font-engagement not-italic text-[32px] tracking-[2px]">
                                        long lasting impact.
                                    </span>
                                </p>
                            </div>
                            <div className="gap-3 grid grid-cols-2 grid-rows-3 h-[108px] w-full relative z-10">
                                <div className="flex gap-2.5 items-center">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-base leading-6 text-zinc-300 tracking-[0.5px]">
                                        Data-Driven Decisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-base leading-6 text-zinc-300 tracking-[0.5px]">
                                        Unlimited Revisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-base leading-6 text-zinc-300 tracking-[0.5px]">
                                        Scalable Architecture
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-base leading-6 text-zinc-300 tracking-[0.5px]">
                                        Post-Launch support
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-base leading-6 text-zinc-300 tracking-[0.5px]">
                                        Timely delivery
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real-time Support - grid-area: 5 / 1 / span 3 / span 2 */}
                        <div className="[grid-area:5_/_1_/_span_3_/_span_2] box-border flex flex-col items-start justify-between p-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full">
                                <div className="font-geist font-medium text-xl leading-8 text-zinc-200 whitespace-pre">
                                    Real-time support
                                </div>
                                <div className="font-geist font-normal text-base leading-6 text-zinc-300 min-w-full">
                                    Our team is always just a message away —
                                    real humans, real answers.
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-start w-full">
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px] w-full">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                        Can we update the layout before launch?
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end w-full">
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                            Hi there
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                            We'll make the changes and send a
                                            quick preview
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                            Just updated. You should be able to
                                            see the new version on your side
                                            now.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                        <p className="mb-0">
                                            Amazing, thank you! You guys are
                                            fast
                                        </p>
                                        <p> 🙌</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex items-center justify-between px-3 py-1.5 rounded-[13.805px] w-full">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-[#9f9fa9] text-sm leading-5 tracking-[0.5px] whitespace-pre">
                                        Type message.....
                                    </div>
                                    <div className="w-5 h-5">
                                        <SendIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 100% Transparency - grid-area: 8 / 1 / span 2 */}
                        <div className="[grid-area:8_/_1_/_span_2] bg-zinc-900 box-border flex flex-col items-start justify-between p-6 relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex gap-1 items-end">
                                <div className="font-engagement text-[60px] leading-[72px] not-italic text-zinc-100 tracking-[-2px] whitespace-pre">
                                    100
                                </div>
                                <div className="box-border flex gap-2 items-center justify-center px-0 py-2">
                                    <div className="font-engagement text-[32px] leading-10 not-italic text-white tracking-[-1px] whitespace-pre">
                                        %
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full">
                                <div className="font-geist font-medium text-xl leading-8 text-zinc-200 whitespace-pre">
                                    Transparency.
                                </div>
                                <div className="font-geist font-normal text-base leading-6 text-zinc-300 min-w-full">
                                    You'll always know what we're building, why,
                                    and how it benefits your business.
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - grid-area: 8 / 2 / span 2 */}
                        <div className="[grid-area:8_/_2_/_span_2] bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                            <div className="font-geist font-semibold text-base leading-6 not-italic text-white tracking-[0.5px] whitespace-pre">
                                Get Your Free Project Quote
                            </div>
                            <div className="w-5 h-5">
                                <ArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) - Exact Figma Implementation */}
            <div className="whySection-mobile block md:hidden">
                <div className="bg-zinc-950 box-border flex flex-col gap-8 items-center px-4 py-[72px] w-full">
                    {/* Header */}
                    <div className="flex flex-col gap-1 items-center w-full">
                        <div className="flex gap-1.5 items-center justify-center w-full">
                            <div className="flex flex-row items-center h-full">
                                <div className="w-7 h-7">
                                    <SparkIcon />
                                </div>
                            </div>
                            <div className="font-geist font-normal text-xs leading-5 text-center text-zinc-100 tracking-[0.5px] whitespace-pre">
                                Why Data Sapience Lab
                            </div>
                        </div>
                        <div className="font-geist font-semibold not-italic text-zinc-100 tracking-[-0.25px] text-center w-full">
                            <p className="text-2xl leading-9 mb-0">
                                Empowering businesses{" "}
                            </p>
                            <p className="text-2xl leading-9">
                                <span>with </span>
                                <span className="font-geist font-semibold text-[#f2500d] tracking-[-0.25px]">
                                    Data-Driven{" "}
                                </span>
                                innovation.
                            </p>
                        </div>
                    </div>

                    {/* Stacked Cards */}
                    <div className="flex flex-col gap-[14px] items-start max-w-[1280px] overflow-hidden w-full">
                        {/* 3X Faster Results */}
                        <div className="bg-zinc-900 box-border flex flex-col gap-2 items-start p-3 w-full relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-engagement text-[40px] leading-12 not-italic text-zinc-100 tracking-[-1px] whitespace-pre relative z-10">
                                3X
                            </div>
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full relative z-10">
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-200 whitespace-pre">
                                    Faster Results
                                </div>
                                <div className="font-geist font-normal text-sm leading-5 text-zinc-300 min-w-full">
                                    Our clients streamline decision-making and
                                    cut project delivery time by up to 70%.
                                </div>
                            </div>
                        </div>

                        {/* Strategic Solutions */}
                        <div className="box-border flex flex-col gap-4 items-start p-3 relative overflow-hidden w-full">
                            <img
                                alt=""
                                className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full"
                                src={images.dataAnalytics}
                            />
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="font-geist font-medium text-white tracking-[0.5px] w-[249px] relative z-10">
                                <p className="text-lg leading-7">
                                    <span>Strategic solutions for </span>
                                    <span className="font-engagement not-italic text-2xl tracking-[1.5px]">
                                        long lasting impact.
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 items-start w-full relative z-10">
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px]">
                                        Data-Driven Decisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px]">
                                        Scalable Architecture
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px]">
                                        Timely delivery
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px]">
                                        Unlimited Revisions
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center w-full">
                                    <div className="flex flex-row items-center h-full">
                                        <div className="w-7 h-7">
                                            <SparkIcon />
                                        </div>
                                    </div>
                                    <div className="flex-1 font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px]">
                                        Post-Launch support
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real-time Support */}
                        <div className="box-border flex flex-col gap-4 items-start p-3 w-full relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full relative z-10">
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-200 whitespace-pre">
                                    Real-time support
                                </div>
                                <div className="font-geist font-normal text-sm leading-5 text-zinc-300 min-w-full">
                                    Our team is always just a message away —
                                    real humans, real answers.
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-start w-full relative z-10">
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px] w-[167px] relative">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="flex-1 font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] relative z-10">
                                        Can we update the layout before launch?
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 items-end w-full">
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] whitespace-pre">
                                            Hi there
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px]">
                                        <div className="font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px] w-[170px]">
                                            We'll make the changes and send a
                                            quick preview
                                        </div>
                                    </div>
                                    <div className="bg-[#7e2a0c] box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px] w-[250px]">
                                        <div className="flex-1 font-geist font-normal text-xs text-right leading-5 text-zinc-200 tracking-[0.5px]">
                                            Just updated. You should be able to
                                            see the new version on your side
                                            now.
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-[13.805px] w-[179px] relative">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="flex-1 font-geist font-normal text-xs leading-5 text-zinc-200 tracking-[0.5px] relative z-10">
                                        <p className="mb-0">
                                            Amazing, thank you! You guys are
                                            fast
                                        </p>
                                        <p> 🙌</p>
                                    </div>
                                </div>
                                <div className="bg-zinc-950 box-border flex items-center justify-between px-3 py-1.5 rounded-[13.805px] w-full relative">
                                    <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none rounded-[13.805px]" />
                                    <div className="font-geist font-normal text-[#9f9fa9] text-sm leading-5 tracking-[0.5px] whitespace-pre relative z-10">
                                        Type message.....
                                    </div>
                                    <div className="w-5 h-5 relative z-10">
                                        <SendIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 100% Transparency */}
                        <div className="bg-zinc-900 box-border flex flex-col items-start p-3 w-full relative">
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex gap-1 items-end relative z-10">
                                <div className="font-engagement text-[60px] leading-[72px] not-italic text-zinc-100 tracking-[-2px] whitespace-pre">
                                    100
                                </div>
                                <div className="box-border flex gap-2 items-center justify-center px-0 py-2">
                                    <div className="font-engagement text-[32px] leading-10 not-italic text-white tracking-[-1px] whitespace-pre">
                                        %
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 items-start leading-0 tracking-[0.5px] w-full relative z-10">
                                <div className="font-geist font-medium text-lg leading-7 text-zinc-200 whitespace-pre">
                                    Transparency.
                                </div>
                                <div className="font-geist font-normal text-sm leading-5 text-zinc-300 min-w-full">
                                    You'll always know what we're building, why,
                                    and how it benefits your business.
                                </div>
                            </div>
                        </div>

                        {/* Flexible Pricing */}
                        <div className="box-border flex flex-col gap-4 items-start justify-center p-3 relative overflow-hidden w-full">
                            <div className="absolute inset-0">
                                <div className="absolute bg-zinc-900 inset-0" />
                                <img
                                    alt=""
                                    className="absolute max-w-none object-center object-cover opacity-40 w-full h-full"
                                    src={images.humanCenteredDesign}
                                />
                            </div>
                            <div className="absolute border border-solid border-zinc-800 inset-0 pointer-events-none" />
                            <div className="flex flex-col gap-[13px] items-center relative z-10 w-full">
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="bg-[#f2500d] box-border flex gap-2 items-center justify-center px-3 py-1.5">
                                        <div className="font-engagement text-xl leading-7 not-italic text-white tracking-[2px] text-center whitespace-pre">
                                            Flexible
                                        </div>
                                    </div>
                                    <div className="font-geist font-semibold text-2xl leading-8 text-white tracking-[8px] text-center whitespace-pre">
                                        Pricing
                                    </div>
                                </div>
                                <div className="font-geist not-italic text-base leading-6 text-zinc-200 tracking-[0.5px] text-center w-[241px]">
                                    Pricing plans that adapt to your budget and
                                    scope.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="bg-[#f2500d] box-border flex gap-4 items-center justify-center p-3 w-full cursor-pointer hover:bg-[#d63d00] transition-colors">
                        <div className="font-geist font-semibold text-base leading-6 not-italic text-white tracking-[0.5px] whitespace-pre">
                            Get Your Free Project Quote
                        </div>
                        <div className="w-5 h-5">
                            <ArrowIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
