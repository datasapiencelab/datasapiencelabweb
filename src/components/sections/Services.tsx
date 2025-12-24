import { useState } from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { HOME_CONTENT } from "../../content/home";

const brainIconSrc = "assets/icons/brain-icon.svg"

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
        <div className="group cursor-pointer pb-8" onClick={onClick}>
            <div className="flex items-center gap-3 mb-8">
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
    const { services: servicesContent } = HOME_CONTENT;

    return (
        <section className="relative bg-zinc-950 py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28 z-20">
            <div className="max-w-7xl mx-auto">
                {/* Services Section */}
                <div className="mb-16 md:mb-20 lg:mb-24">
                    {/* Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 mb-16 md:mb-20 lg:mb-24">
                        <div className="flex items-center gap-2.5">
                            <Spark />
                            <span className="text-base md:text-lg lg:text-body-xl text-zinc-100">
                                {servicesContent.kicker}
                            </span>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl md:text-4xl lg:text-h1 font-medium text-zinc-100 leading-tight">
                                <span>{servicesContent.heading.prefix}</span>
                                <span className="font-engagement text-brand-primary text-3xl md:text-5xl lg:text-[72px] tracking-wide">
                                    {servicesContent.heading.accent}
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Services Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
                        {/* Services List */}
                        <div className="space-y-0">
                            {servicesContent.items.map((service, index) => (
                                <ServiceItem
                                    key={index}
                                    number={service.number}
                                    title={service.title}
                                    isActive={activeService === index}
                                    onClick={() => setActiveService(index)}
                                />
                            ))}

                            <div className="pt-6">
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
                        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="w-8 h-8 mb-6">
                                            <img
                                                src={brainIconSrc}
                                                alt="AI Brain"
                                                className="w-full h-full"
                                            />
                                        </div>

                                        <p className="text-base md:text-lg text-neutral-disable mb-8 leading-relaxed">
                                            {
                                                servicesContent.serviceDetail
                                                    .description
                                            }
                                        </p>

                                        <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                                            {servicesContent.serviceDetail.tags.map(
                                                (tag, index) => (
                                                    <ServiceTag
                                                        key={index}
                                                        label={tag.label}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5">
                                            <img
                                                src={
                                                    servicesContent.timing.icon
                                                }
                                                alt="Time"
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <span className="text-base md:text-lg text-neutral-disable">
                                            {servicesContent.timing.text}
                                        </span>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative h-64 md:h-full">
                                    <img
                                        src={
                                            servicesContent.serviceDetail.image
                                        }
                                        alt="AI Technology"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="flex items-center gap-4 mb-16 md:mb-20 lg:mb-24">
                    <Spark />
                    <div className="flex-1 h-px bg-neutral-tertiary"></div>
                    <Spark />
                    <div className="flex-1 h-px bg-neutral-tertiary"></div>
                    <Spark />
                    <div className="flex-1 h-px bg-neutral-tertiary"></div>
                    <Spark />
                </div>

                {/* Partners Section */}
                <div>
                    {/* Partners Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 mb-12 md:mb-16 lg:mb-20">
                        <div className="flex items-center gap-2.5">
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
