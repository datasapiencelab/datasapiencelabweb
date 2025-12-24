import React from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";

// Icon SVG assets referenced from public/
const LightbulbIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/lightbulb.svg"
        alt="Lightbulb"
        loading="lazy"
        decoding="async"
    />
);

const ToolsIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/tools.svg"
        alt="Tools"
        loading="lazy"
        decoding="async"
    />
);

const PuzzleIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/puzzle.svg"
        alt="Puzzle"
        loading="lazy"
        decoding="async"
    />
);

const RocketIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/rocket.svg"
        alt="Rocket"
        loading="lazy"
        decoding="async"
    />
);

const processSteps = [
    {
        icon: <LightbulbIcon />,
        title: "Discover & Define",
        description:
            "We start with deep research and discussions to understand your business, users, and goals — shaping a clear problem definition and roadmap.",
    },
    {
        icon: <ToolsIcon />,
        title: "Design & Development",
        description:
            "Through collaborative design and agile development, we transform ideas into intuitive, scalable solutions that balance usability with performance.",
    },
    {
        icon: <PuzzleIcon />,
        title: "Integration & Testing",
        description:
            "We integrate data, AI, and systems seamlessly while running rigorous testing to ensure stability, security, and a smooth user experience.",
    },
    {
        icon: <RocketIcon />,
        title: "Deployment & Maintenance",
        description:
            "We launch your product with confidence and continue to provide updates, monitoring, and long-term support to keep it future-ready.",
    },
];

const stats = [
    { number: "20+", label: "Happy Clients" },
    { number: "$25m", label: "Revenue added" },
    { number: "4.8", label: "Average Rating" },
];

export const Process: React.FC = () => {
    return (
        <>
            {/* Desktop Layout (1280px+) */}
            <section className="relative hidden xl:block bg-neutral-50 py-48 z-20">
                <div className="max-w-[1280px] mx-auto px-28">
                    <div className="grid grid-cols-2 gap-16">
                        {/* Left Column - Header */}
                        <div className="flex flex-col gap-4 sticky top-1/3 self-start h-fit">
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
                                    into{" "}
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
                                    <div className="w-12 h-12">{step.icon}</div>
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
                                        From first discovery to long-term
                                        support, our proven process ensures your
                                        product is built with{" "}
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
            <section className="relative hidden lg:block xl:hidden bg-neutral-50 py-40 z-20">
                <div className="max-w-[1024px] mx-auto px-20">
                    <div className="grid grid-cols-2 gap-12">
                        {/* Left Column - Header */}
                        <div className="flex flex-col gap-3 sticky top-1/3 self-start h-fit">
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
                                    into{" "}
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
                                    <div className="w-10 h-10">{step.icon}</div>
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
                                        From first discovery to long-term
                                        support, our proven process ensures your
                                        product is built with{" "}
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
            <section className="relative hidden md:block lg:hidden bg-neutral-50 py-20 z-20">
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
                                    <div className="w-8 h-8">{step.icon}</div>
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
                                    From first discovery to long-term support,
                                    our proven process ensures your product is
                                    built with{" "}
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
            <section className="relative block md:hidden bg-neutral-50 py-16 z-20">
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
                                    into{" "}
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
                                    <div className="w-6 h-6">{step.icon}</div>
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
                                    From first discovery to long-term support,
                                    our proven process ensures your product is
                                    built with{" "}
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
