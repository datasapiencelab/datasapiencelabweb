import React from "react";

import Button from "../ui/Button";

// Social Media Icons
const LinkedInIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/linkedin.svg"
        alt="LinkedIn"
        loading="lazy"
        decoding="async"
    />
);

const GitHubIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/github.svg"
        alt="GitHub"
        loading="lazy"
        decoding="async"
    />
);

const FacebookIcon = () => (
    <img
        className="w-full h-full"
        src="/assets/icons/facebook.svg"
        alt="Facebook"
        loading="lazy"
        decoding="async"
    />
);

const ContactInfo: React.FC = () => {
    const handleGetInTouch = () => {
        window.location.href = "/contact";
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <LinkedInIcon />,
            url: "https://www.linkedin.com/company/data-sapience-lab/",
        },
        {
            name: "Github",
            icon: <GitHubIcon />,
            url: "https://github.com/datasapiencelab",
        },
        {
            name: "Facebook",
            icon: <FacebookIcon />,
            url: "https://facebook.com/datasapiencelab",
        },
    ];

    return (
        <div className="relative contactSocialSection bg-white w-full z-20">
            {/* Desktop Layout (1024px+) */}
            <div className="contactSocialSection-desktop hidden lg:block">
                <div className="bg-white box-border flex flex-col gap-16 items-center px-28 py-32 w-full min-h-fit">
                    {/* Stay Connected With Us SVG Text */}
                    <div className="w-full flex justify-center">
                        <div className="font-geist font-bold text-[80px] leading-[88px] text-zinc-900 tracking-[-2px] text-center">
                            Stay Connected With Us
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex gap-8 items-start w-full max-w-[1280px]">
                        {/* Left Side - Content */}
                        <div className="flex-1 box-border flex flex-col justify-between h-full items-start pr-5 relative min-h-[400px]">
                            {/* Description and CTA */}
                            <div className="flex flex-col gap-5 items-start max-w-[522px] w-full">
                                <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[-0.25px] w-full">
                                    <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                        Whether you need an MVP, a data-driven
                                        platform, or enterprise scale AI
                                        solutions,
                                    </span>
                                    <span className="font-engagement not-italic text-[#f2500d] text-2xl tracking-[0.24px]">
                                        {" "}
                                        Data Sapience Lab{" "}
                                    </span>
                                    <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                        is here to design, build, and scale
                                        products for lasting success.
                                    </span>
                                </div>

                                <Button
                                    onClick={handleGetInTouch}
                                    className="justify-between w-[343px]"
                                >
                                    <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                        Get in Touch
                                    </span>
                                </Button>
                            </div>

                            {/* Divider */}
                            <div className="bg-zinc-200 h-px w-full my-6" />

                            {/* Contact Information */}
                            <div className="flex flex-col gap-1.5 items-start">
                                <div className="font-geist font-medium text-2xl leading-9 text-zinc-900 tracking-[-0.25px]">
                                    hello@datasapiencelab.com
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-zinc-600 tracking-[0.5px]">
                                    +880 1756-568927
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="bg-zinc-200 h-px w-full my-6" />

                            {/* Social Links */}
                            <div className="flex gap-8 items-start w-full">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-3 items-center overflow-hidden cursor-pointer hover:text-[#f2500d] transition-colors"
                                    >
                                        <div className="w-5 h-5 text-zinc-900 hover:text-[#f2500d] transition-colors">
                                            {social.icon}
                                        </div>
                                        <div className="font-geist font-normal text-lg leading-7 text-zinc-600 tracking-[0.5px]">
                                            {social.name}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - AI Brain Image */}
                        <div className="flex-1 bg-zinc-900 relative border border-solid border-zinc-800 min-h-[400px] overflow-hidden">
                            <img
                                src="assets/images/home/hero-image.jpg"
                                alt="AI Brain Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="contactSocialSection-tablet hidden md:block lg:hidden">
                <div className="bg-white box-border flex flex-col gap-12 items-center px-8 py-24 w-full min-h-fit">
                    {/* Stay Connected With Us Heading */}
                    <div className="w-full flex justify-center">
                        <div className="font-geist font-bold text-[48px] leading-[52px] text-zinc-900 tracking-[-1px] text-center">
                            Stay Connected With Us
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-8 items-center w-full max-w-[1280px]">
                        {/* AI Brain Image */}
                        <div className="bg-zinc-900 relative border border-solid border-zinc-800 w-full h-[300px] overflow-hidden">
                            <img
                                src="assets/images/home/hero-image.jpg"
                                alt="AI Brain Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20"></div>
                        </div>

                        {/* Description and CTA */}
                        <div className="flex flex-col gap-4 items-center w-full">
                            <div className="font-geist font-normal text-base leading-6 text-center text-zinc-600 tracking-[-0.25px] w-full">
                                <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                    Whether you need an MVP, a data-driven
                                    platform, or enterprise scale AI solutions,
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-xl tracking-[0.24px]">
                                    {" "}
                                    Data Sapience Lab{" "}
                                </span>
                                <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                    is here to design, build, and scale products
                                    for lasting success.
                                </span>
                            </div>

                            <Button
                                onClick={handleGetInTouch}
                                className="justify-between w-[280px]"
                            >
                                <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                    Get in Touch
                                </span>
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* Contact Information */}
                        <div className="flex flex-col gap-1 items-center">
                            <div className="font-geist font-medium text-xl leading-8 text-zinc-900 tracking-[-0.25px]">
                                hello@datasapiencelab.com
                            </div>
                            <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px]">
                                +880 1756-568927
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* Social Links */}
                        <div className="flex gap-6 items-center justify-center w-full">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2 items-center overflow-hidden cursor-pointer hover:text-[#f2500d] transition-colors"
                                >
                                    <div className="w-4 h-4 text-zinc-900 hover:text-[#f2500d] transition-colors">
                                        {social.icon}
                                    </div>
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px]">
                                        {social.name}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="contactSocialSection-mobile block md:hidden">
                <div className="bg-white box-border flex flex-col gap-8 items-left px-4 py-16 w-full min-h-fit">
                    {/* Stay Connected With Us Heading */}
                    <div className="w-full flex justify-left">
                        <div className="font-geist font-bold text-2xl leading-8 text-zinc-900 tracking-[-0.25px] text-center">
                            Stay Connected With Us
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6 items-left w-full">
                        {/* AI Brain Image */}
                        {/* <div className="bg-zinc-900 relative border border-solid border-zinc-800 w-full h-[200px] overflow-hidden">
                            <img
                                src="assets/images/home/hero-image.jpg"
                                alt="AI Brain Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20"></div>
                        </div> */}

                        {/* Description and CTA */}
                        <div className="flex flex-col gap-8 items-left w-full">
                            <div className="font-geist font-normal text-sm leading-5 text-left text-zinc-600 tracking-[-0.25px] w-full">
                                <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                    Whether you need an MVP, a data-driven
                                    platform, or enterprise scale AI solutions,
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-lg tracking-[0.24px]">
                                    {" "}
                                    Data Sapience Lab{" "}
                                </span>
                                <span className="font-medium text-zinc-600 tracking-[0.5px]">
                                    is here to design, build, and scale products
                                    for lasting success.
                                </span>
                            </div>

                            <Button
                                onClick={handleGetInTouch}
                                fullWidth
                                className="justify-between"
                            >
                                <span className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    Get in Touch
                                </span>
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* Contact Information */}
                        <div className="flex flex-col gap-1 items-left">
                            <div className="font-geist font-medium text-lg leading-7 text-zinc-900 tracking-[-0.25px]">
                                hello@datasapiencelab.com
                            </div>
                            <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px]">
                                +880 1756-568927
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* Social Links */}
                        <div className="flex flex-col gap-4 items-left w-full">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2 items-center overflow-hidden cursor-pointer hover:text-[#f2500d] transition-colors w-full"
                                >
                                    <div className="w-4 h-4 text-zinc-900 hover:text-[#f2500d] transition-colors">
                                        {social.icon}
                                    </div>
                                    <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px]">
                                        {social.name}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
