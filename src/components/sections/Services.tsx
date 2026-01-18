import { useEffect, useMemo, useRef, useState } from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { HOME_CONTENT } from "../../content/home";
import {
    BrainCircuit,
    ChartNoAxesCombined,
    CodeXml,
    Component,
} from "lucide-react";

// const brainIconSrc = "assets/icons/brain-icon.svg";

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

const iconMap: Record<string, React.ElementType> = {
    "brain-circuit": BrainCircuit,
    "chart-no-axes-combined": ChartNoAxesCombined,
    "code-xml": CodeXml,
    component: Component,
};

interface ServiceItemProps {
    number: string;
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function ServiceItem({
    number,
    title,
    isActive = false,
    onClick,
}: ServiceItemProps) {
    return (
        <div className="group cursor-pointer pb-4 lg:pb-6" onClick={onClick}>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <span
                    className={`font-engagement text-2xl leading-9 tracking-tight transition-colors ${
                        isActive
                            ? "text-zinc-200"
                            : "text-neutral-disable group-hover:text-zinc-200"
                    }`}
                >
                    {number}
                </span>
                <span
                    className={`text-h6 font-medium leading-8 tracking-wide transition-colors ${
                        isActive
                            ? "text-zinc-200"
                            : "text-neutral-disable group-hover:text-zinc-200"
                    }`}
                >
                    {title}
                </span>
            </div>
            <div className="h-px bg-zinc-800 transition-colors group-hover:bg-zinc-700"></div>
        </div>
    );
}

interface ServiceTagProps {
    label: string;
}

function ServiceTag({ label }: ServiceTagProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-brand-primary rounded-full flex-shrink-0"></div>
            <span className="text-sm md:text-base text-zinc-200 tracking-wide">
                {label}
            </span>
        </div>
    );
}

interface PartnerLogoProps {
    name: string;
    isButton?: boolean;
}

function PartnerLogo({ name, isButton = false }: PartnerLogoProps) {
    if (isButton) {
        return (
            <div className="bg-brand-primary border border-zinc-800 aspect-[189/177] flex items-center justify-center">
                <Button variant="primary" size="medium">
                    Join With Us
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900 border border-zinc-800 aspect-[189/177] flex items-center justify-center p-6 md:p-8 lg:p-10 group hover:bg-zinc-800 transition-colors">
            <div className="text-zinc-400 font-medium text-lg group-hover:text-zinc-200 transition-colors">
                {name}
            </div>
        </div>
    );
}

export default function Services() {
    const [activeService, setActiveService] = useState(0);
    const [desktopProgress, setDesktopProgress] = useState(0);
    const { services: servicesContent } = HOME_CONTENT;

    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia("(min-width: 1024px)");

        const onChange = () => setIsDesktop(media.matches);
        onChange();

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", onChange);
            return () => media.removeEventListener("change", onChange);
        }

        media.addListener(onChange);
        return () => media.removeListener(onChange);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const update = () => {
            const element = scrollAreaRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const totalScrollable = rect.height - viewportHeight;
            const scrolledInto = -rect.top;

            const progress =
                totalScrollable <= 0
                    ? 0
                    : clamp(scrolledInto / totalScrollable, 0, 1);

            setDesktopProgress(progress);

            const nextActive = clamp(
                Math.floor(progress * servicesContent.items.length + 1e-6),
                0,
                servicesContent.items.length - 1,
            );
            setActiveService(nextActive);
        };

        const scheduleUpdate = () => {
            if (rafRef.current != null) return;
            rafRef.current = window.requestAnimationFrame(() => {
                rafRef.current = null;
                update();
            });
        };

        update();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            if (rafRef.current != null) {
                window.cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [isDesktop, servicesContent.items.length]);

    const timelineFills = useMemo(() => {
        if (!isDesktop) return [0, 0, 0];
        const totalSegments = 3;
        const segmentProgress = clamp(desktopProgress * totalSegments, 0, 3);
        return Array.from({ length: totalSegments }, (_, index) =>
            clamp(segmentProgress - index, 0, 1),
        );
    }, [desktopProgress, isDesktop]);

    const activeItem = servicesContent.items[activeService];
    const ActiveIcon = iconMap[activeItem.icon] || BrainCircuit;

    return (
        <section className="relative bg-zinc-950 py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28 z-20">
            <div className="max-w-7xl mx-auto">
                {/* Services Section (desktop: sticky scroll) */}
                <div
                    ref={scrollAreaRef}
                    className="relative mb-16 md:mb-20 lg:mb-0 lg:h-[400vh]"
                >
                    <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col">
                        <div className="hidden lg:block lg:flex-1"></div>
                        <div>
                            {/* Header */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 md:mb-20 lg:mb-12">
                                <div className="flex gap-2.5 text-[#FAFAFA]">
                                    <Spark />
                                    <span className="text-base md:text-lg lg:text-body-xl text-zinc-100">
                                        {servicesContent.kicker}
                                    </span>
                                </div>
                                <div className="lg:col-span-2">
                                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-zinc-100 leading-tight">
                                        <span className="font-semibold font-geist">
                                            {servicesContent.heading.prefix}
                                        </span>
                                        <span className="font-engagement text-brand-primary text-3xl md:text-5xl lg:text-[72px] tracking-wide">
                                            {servicesContent.heading.accent}
                                        </span>
                                    </h2>
                                </div>
                            </div>

                            {/* Services Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                                {/* Services List */}
                                <div className="space-y-0 flex flex-col h-full">
                                    {servicesContent.items.map(
                                        (service, index) => (
                                            <ServiceItem
                                                key={index}
                                                number={service.number}
                                                title={service.title}
                                                isActive={
                                                    activeService === index
                                                }
                                                onClick={() =>
                                                    setActiveService(index)
                                                }
                                            />
                                        ),
                                    )}

                                    <div className="pt-6 mt-auto">
                                        <Button
                                            variant="primary"
                                            size="large"
                                            className="w-full lg:w-auto"
                                        >
                                            {servicesContent.cta.text}
                                        </Button>
                                    </div>
                                </div>

                                {/* Service Detail Card */}
                                <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 overflow-hidden h-[500px] lg:h-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                        {/* Content */}
                                        <div className="p-4 md:p-6 lg:p-6 flex flex-col justify-between relative z-10 h-full">
                                            <div>
                                                <div className="w-8 h-8 mb-4 text-[#FAFAFA]">
                                                    <ActiveIcon
                                                        strokeWidth={1.5}
                                                        className="w-full h-full"
                                                    />
                                                </div>

                                                <p className="text-base md:text-lg text-neutral-disable mb-4 lg:mb-6 leading-relaxed">
                                                    {activeItem.description}
                                                </p>

                                                <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
                                                    {activeItem.tags.map(
                                                        (tag, index) => (
                                                            <ServiceTag
                                                                key={index}
                                                                label={
                                                                    tag.label
                                                                }
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5">
                                                    <img
                                                        src={
                                                            servicesContent
                                                                .timing.icon
                                                        }
                                                        alt="Time"
                                                        className="w-full h-full"
                                                    />
                                                </div>
                                                <span className="text-base md:text-lg text-neutral-disable">
                                                    {
                                                        servicesContent.timing
                                                            .text
                                                    }
                                                </span>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="relative h-64 md:h-full w-full">
                                            <img
                                                src={activeItem.image}
                                                alt={activeItem.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:flex-1"></div>

                        {/* Separator/timeline */}
                        <div className="flex items-center gap-4 mt-16 md:mt-20 lg:mt-0 text-neutral-tertiary">
                            <Spark />
                            <div className="flex-1 h-px bg-neutral-tertiary relative overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-brand-primary transition-[width] duration-200 ease-out"
                                    style={{
                                        width: `${timelineFills[0] * 100}%`,
                                    }}
                                />
                            </div>
                            <Spark />
                            <div className="flex-1 h-px bg-neutral-tertiary relative overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-brand-primary transition-[width] duration-200 ease-out"
                                    style={{
                                        width: `${timelineFills[1] * 100}%`,
                                    }}
                                />
                            </div>
                            <Spark />
                            <div className="flex-1 h-px bg-neutral-tertiary relative overflow-hidden">
                                <div
                                    className="absolute inset-y-0 left-0 bg-brand-primary transition-[width] duration-200 ease-out"
                                    style={{
                                        width: `${timelineFills[2] * 100}%`,
                                    }}
                                />
                            </div>
                            <Spark />
                        </div>
                        <div className="hidden lg:block lg:flex-1"></div>
                    </div>
                </div>

                {/* Partners Section */}
                <div>
                    {/* Partners Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
                        <div className="flex gap-2.5 text-neutral-inverse">
                            <Spark />
                            <span className="text-base md:text-lg lg:text-body-xl text-zinc-100">
                                Meet Our Partners
                            </span>
                        </div>
                        <div className="lg:col-span-2">
                            <p className="text-lg md:text-2xl lg:text-h3 font-medium text-neutral-disable leading-relaxed">
                                <span>We've partnered with </span>
                                <span className="text-zinc-200">
                                    startups, enterprises, and global brands
                                </span>
                                <span>
                                    {" "}
                                    to deliver solutions that make an impact.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                        {servicesContent.partners.map((partner, index) => (
                            <PartnerLogo
                                key={index}
                                name={partner}
                                isButton={
                                    index ===
                                    servicesContent.partners.length - 1
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
