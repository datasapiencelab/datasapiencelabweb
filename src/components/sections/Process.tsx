import React from 'react';
import Spark from '../ui/Spark';
import Button from '../ui/Button';

// Icon SVG assets matching Figma design
const LightbulbIcon = () => (
    <svg
        className="w-12 h-12 text-[#f2500d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M24 6c6.627 0 12 5.373 12 12 0 4.418-2.39 8.291-5.955 10.386-.474.278-.895.632-1.245 1.048C27.6 30.8 27 32.3 27 34v4a2 2 0 01-2 2h-2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2h-2a2 2 0 01-2-2v-4c0-1.7-.6-3.2-1.8-4.566-.35-.416-.771-.77-1.245-1.048C8.39 26.291 6 22.418 6 18c0-6.627 5.373-12 12-12z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 38h10M21 42h6"
        />
    </svg>
);

const ToolsIcon = () => (
    <svg
        className="w-12 h-12 text-[#f2500d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1 7.94 0l.47.47a1 1 0 0 1 0 1.41L26.5 10.9a1 1 0 0 0 0 1.41l1.6 1.6a1 1 0 0 0 1.41 0l3.77-3.77a6 6 0 0 1 7.94 0l.47.47a1 1 0 0 1 0 1.41L37.3 16a1 1 0 0 1-1.4 0L32 12.1a6 6 0 0 0-8.49 0l-.47.47a1 1 0 0 1-1.41 0l-1.6-1.6a1 1 0 0 1 0-1.41l3.77-3.77a6 6 0 0 0 0-8.49l-.47-.47a1 1 0 0 0-1.41 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 25.86L9.14 36.7a1 1 0 0 1-1.41 0l-1.4-1.4a1 1 0 0 1 0-1.42L17.15 23"
        />
    </svg>
);

const PuzzleIcon = () => (
    <svg
        className="w-12 h-12 text-[#f2500d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 12a6 6 0 0 1 12 0v6h6a6 6 0 0 1 0 12h-6v6a6 6 0 0 1-12 0v-6H6a6 6 0 0 1 0-12h0V12Z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M24 18h6a6 6 0 0 1 0 12h-6"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 24v6a6 6 0 0 0 12 0v-6"
        />
    </svg>
);

const RocketIcon = () => (
    <svg
        className="w-12 h-12 text-[#f2500d]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.5 16.5c-1.5 1.5-1.5 4 0 5.5l7 7c1.5 1.5 4 1.5 5.5 0l.5-.5m6.5-10.5L30.5 12c6-6 13.5-8 20.5-5 3 7-1 14.5-7 20.5L37.5 34m-19-19L12 21.5m6.5-6.5L25 8.5m12.5 25L31 40m6.5-6.5l7-7"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M29 29l3.5 3.5M30 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        />
    </svg>
);

const processSteps = [
    {
        icon: <LightbulbIcon />,
        title: "Discover & Define",
        description: "We start with deep research and discussions to understand your business, users, and goals — shaping a clear problem definition and roadmap."
    },
    {
        icon: <ToolsIcon />,
        title: "Design & Development",
        description: "Through collaborative design and agile development, we transform ideas into intuitive, scalable solutions that balance usability with performance."
    },
    {
        icon: <PuzzleIcon />,
        title: "Integration & Testing",
        description: "We integrate data, AI, and systems seamlessly while running rigorous testing to ensure stability, security, and a smooth user experience."
    },
    {
        icon: <RocketIcon />,
        title: "Deployment & Maintenance",
        description: "We launch your product with confidence and continue to provide updates, monitoring, and long-term support to keep it future-ready."
    }
];

const stats = [
    { number: "20+", label: "Happy Clients" },
    { number: "$25m", label: "Revenue added" },
    { number: "4.8", label: "Average Rating" }
];

export const Process: React.FC = () => {
    return (
        <>
            {/* Desktop Layout (1280px+) */}
            <section className="hidden xl:block bg-neutral-50 py-32">
                <div className="max-w-[1280px] mx-auto px-28">
                    <div className="grid grid-cols-2 gap-16">
                        {/* Left Column - Header */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2.5">
                                <Spark />
                                <span className="text-lg text-zinc-800 font-normal tracking-[0.5px]">
                                    How we execute
                                </span>
                            </div>

                            <div className="text-zinc-800 font-medium tracking-[-2px]">
                                <h2 className="text-[60px] leading-[72px] mb-0">
                                    Turning challenges
                                </h2>
                                <h2 className="text-[60px] leading-[72px]">
                                    into{' '}
                                    <span className="font-['Engagement'] text-[#f2500d] text-[72px] tracking-[2px] not-italic">
                                        Clear Outcomes.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Right Column - Process Steps */}
                        <div className="flex flex-col gap-5">
                            {/* Process Steps */}
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-zinc-200 p-8 flex flex-col gap-5"
                                >
                                    <div className="w-12 h-12">
                                        {step.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-medium text-zinc-900 tracking-[-0.25px] leading-9">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-zinc-600 tracking-[0.5px] leading-8">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Stats Section */}
                            <div className="pt-8 flex flex-col gap-4">
                                <div className="grid grid-cols-3 gap-4">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-zinc-200 p-5 flex flex-col gap-1.5"
                                        >
                                            <div className="text-[40px] font-medium text-zinc-900 tracking-[-1px] leading-12">
                                                {stat.number}
                                            </div>
                                            <div className="text-xl text-zinc-500 tracking-[0.5px] leading-8">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Text & CTA */}
                                <div className="max-w-[510px]">
                                    <p className="text-2xl text-zinc-600 tracking-[-0.25px] leading-9">
                                        From first discovery to long-term support, our proven process ensures your product is built with{' '}
                                        <span className="font-['Engagement'] text-[#f2500d] text-[32px] tracking-[1px] not-italic">
                                            Clarity, Precision, & Impact.
                                        </span>
                                    </p>
                                </div>

                                <Button
                                    variant="primary"
                                    size="large"
                                    className="w-fit"
                                >
                                    Let's Build Together
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop Layout (1024px - 1279px) */}
            <section className="hidden lg:block xl:hidden bg-neutral-50 py-24">
                <div className="max-w-[1024px] mx-auto px-20">
                    <div className="grid grid-cols-2 gap-12">
                        {/* Left Column - Header */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2.5">
                                <Spark />
                                <span className="text-base text-zinc-800 font-normal tracking-[0.5px]">
                                    How we execute
                                </span>
                            </div>

                            <div className="text-zinc-800 font-medium tracking-[-2px]">
                                <h2 className="text-[48px] leading-[56px] mb-0">
                                    Turning challenges
                                </h2>
                                <h2 className="text-[48px] leading-[56px]">
                                    into{' '}
                                    <span className="font-['Engagement'] text-[#f2500d] text-[56px] tracking-[2px] not-italic">
                                        Clear Outcomes.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Right Column - Process Steps */}
                        <div className="flex flex-col gap-4">
                            {/* Process Steps */}
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-zinc-200 p-6 flex flex-col gap-4"
                                >
                                    <div className="w-10 h-10">
                                        {step.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-medium text-zinc-900 tracking-[-0.25px] leading-7">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-zinc-600 tracking-[0.5px] leading-7">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Stats Section */}
                            <div className="pt-6 flex flex-col gap-3">
                                <div className="grid grid-cols-3 gap-3">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-zinc-200 p-4 flex flex-col gap-1"
                                        >
                                            <div className="text-[32px] font-medium text-zinc-900 tracking-[-1px] leading-10">
                                                {stat.number}
                                            </div>
                                            <div className="text-lg text-zinc-500 tracking-[0.5px] leading-6">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Text & CTA */}
                                <div className="max-w-[440px]">
                                    <p className="text-xl text-zinc-600 tracking-[-0.25px] leading-8">
                                        From first discovery to long-term support, our proven process ensures your product is built with{' '}
                                        <span className="font-['Engagement'] text-[#f2500d] text-[28px] tracking-[1px] not-italic">
                                            Clarity, Precision, & Impact.
                                        </span>
                                    </p>
                                </div>

                                <Button
                                    variant="primary"
                                    size="medium"
                                    className="w-fit"
                                >
                                    Let's Build Together
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tablet Layout (768px - 1023px) */}
            <section className="hidden md:block lg:hidden bg-neutral-50 py-20">
                <div className="max-w-[768px] mx-auto px-16">
                    <div className="flex flex-col gap-12">
                        {/* Header */}
                        <div className="flex flex-col gap-3 text-center">
                            <div className="flex items-center justify-center gap-2.5">
                                <Spark />
                                <span className="text-base text-zinc-800 font-normal tracking-[0.5px]">
                                    How we execute
                                </span>
                            </div>

                            <div className="text-zinc-800 font-medium tracking-[-2px]">
                                <h2 className="text-[40px] leading-[48px] mb-0">
                                    Turning challenges into
                                </h2>
                                <h2 className="text-[40px] leading-[48px]">
                                    <span className="font-['Engagement'] text-[#f2500d] text-[48px] tracking-[2px] not-italic">
                                        Clear Outcomes.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Process Steps Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-zinc-200 p-5 flex flex-col gap-4"
                                >
                                    <div className="w-8 h-8">
                                        {step.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-medium text-zinc-900 tracking-[-0.25px] leading-6">
                                            {step.title}
                                        </h3>
                                        <p className="text-base text-zinc-600 tracking-[0.5px] leading-6">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-3 gap-3">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-zinc-200 p-4 flex flex-col gap-1 text-center"
                                    >
                                        <div className="text-[28px] font-medium text-zinc-900 tracking-[-1px] leading-8">
                                            {stat.number}
                                        </div>
                                        <div className="text-base text-zinc-500 tracking-[0.5px] leading-5">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Text & CTA */}
                            <div className="text-center">
                                <p className="text-lg text-zinc-600 tracking-[-0.25px] leading-7 mb-4">
                                    From first discovery to long-term support, our proven process ensures your product is built with{' '}
                                    <span className="font-['Engagement'] text-[#f2500d] text-[24px] tracking-[1px] not-italic">
                                        Clarity, Precision, & Impact.
                                    </span>
                                </p>

                                <Button
                                    variant="primary"
                                    size="medium"
                                    className="w-fit mx-auto"
                                >
                                    Let's Build Together
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Layout (< 768px) */}
            <section className="block md:hidden bg-neutral-50 py-16">
                <div className="max-w-[375px] mx-auto px-4">
                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col gap-2 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <Spark />
                                <span className="text-sm text-zinc-800 font-normal tracking-[0.5px]">
                                    How we execute
                                </span>
                            </div>

                            <div className="text-zinc-800 font-medium tracking-[-1px]">
                                <h2 className="text-[28px] leading-[32px] mb-0">
                                    Turning challenges
                                </h2>
                                <h2 className="text-[28px] leading-[32px]">
                                    into{' '}
                                    <span className="font-['Engagement'] text-[#f2500d] text-[32px] tracking-[1px] not-italic">
                                        Clear Outcomes.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="flex flex-col gap-3">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-zinc-200 p-4 flex flex-col gap-3"
                                >
                                    <div className="w-6 h-6">
                                        {step.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base font-medium text-zinc-900 tracking-[-0.25px] leading-5">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 tracking-[0.5px] leading-5">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col gap-3">
                            <div className="grid grid-cols-3 gap-2">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-zinc-200 p-3 flex flex-col gap-0.5 text-center"
                                    >
                                        <div className="text-[20px] font-medium text-zinc-900 tracking-[-0.5px] leading-6">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs text-zinc-500 tracking-[0.5px] leading-4">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Text & CTA */}
                            <div className="text-center">
                                <p className="text-sm text-zinc-600 tracking-[-0.25px] leading-5 mb-3">
                                    From first discovery to long-term support, our proven process ensures your product is built with{' '}
                                    <span className="font-['Engagement'] text-[#f2500d] text-[16px] tracking-[0.5px] not-italic">
                                        Clarity, Precision, & Impact.
                                    </span>
                                </p>

                                <Button
                                    variant="primary"
                                    size="small"
                                    className="w-full"
                                >
                                    Let's Build Together
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};