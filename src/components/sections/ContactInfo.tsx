import React from "react";

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

// Social Media Icons
const LinkedInIcon = () => (
    <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8V14H13V8.5C13 7.9 12.6 7.5 12 7.5S11 7.9 11 8.5V14H8V8C8 5.8 9.8 4 12 4S16 5.8 16 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M6 9V14H3V9H6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle
            cx="4.5"
            cy="4.5"
            r="1.5"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
);

const GitHubIcon = () => (
    <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 1.66667C5.4 1.66667 1.66666 5.4 1.66666 10C1.66666 13.8 4.13333 17.0667 7.53333 18.1667C7.93333 18.2333 8.08333 18 8.08333 17.8V16.3C5.73333 16.8 5.26666 15.2 5.26666 15.2C4.9 14.2667 4.36666 14.0333 4.36666 14.0333C3.61666 13.5 4.43333 13.5 4.43333 13.5C5.26666 13.5667 5.68333 14.3667 5.68333 14.3667C6.41666 15.6 7.61666 15.2333 8.11666 15C8.18333 14.4667 8.4 14.1 8.63333 13.8667C6.85 13.6333 4.98333 12.9333 4.98333 9.66667C4.98333 8.76667 5.3 8.03333 5.7 7.46667C5.61666 7.23333 5.31666 6.36667 5.78333 5.2C5.78333 5.2 6.46666 4.96667 8.08333 6.06667C8.73333 5.86667 9.43333 5.76667 10.1333 5.76667C10.8333 5.76667 11.5333 5.86667 12.1833 6.06667C13.8 4.96667 14.4833 5.2 14.4833 5.2C14.95 6.36667 14.65 7.23333 14.5667 7.46667C14.9667 8.03333 15.2833 8.76667 15.2833 9.66667C15.2833 12.9333 13.4167 13.6333 11.6333 13.8667C11.9333 14.1333 12.1833 14.6333 12.1833 15.4V17.8C12.1833 18 12.3333 18.2333 12.7333 18.1667C16.1333 17.0667 18.6 13.8 18.6 10C18.3333 5.4 14.6 1.66667 10 1.66667Z"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="currentColor"
        />
    </svg>
);

const FacebookIcon = () => (
    <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667C5.4 1.66667 1.66666 5.4 1.66666 10C1.66666 14.0333 4.53333 17.3667 8.33333 18.1667V12.5H6.66666V10H8.33333V8.33333C8.33333 6.66667 9.66666 5.33333 11.3333 5.33333H13V7.5H11.6667C11.2 7.5 10.8333 7.86667 10.8333 8.33333V10H13V12.5H10.8333V18.2333C15.0833 17.6 18.3333 14.1333 18.3333 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ContactInfo: React.FC = () => {
    const handleGetInTouch = () => {
        // Scroll to the inquiry form section
        const inquirySection = document.querySelector(".inquiryFormSection");
        if (inquirySection) {
            inquirySection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <LinkedInIcon />,
            url: "https://linkedin.com/company/datasapiencelab",
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
        <div className="contactSocialSection bg-white w-full">
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

                                <button
                                    onClick={handleGetInTouch}
                                    className="bg-[#f2500d] box-border flex items-center justify-between px-[18px] py-3 w-[343px] cursor-pointer hover:bg-[#d63d00] transition-colors"
                                >
                                    <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                        Get in Touch
                                    </span>
                                    <div className="w-5 h-5">
                                        <ArrowIcon />
                                    </div>
                                </button>
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
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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

                            <button
                                onClick={handleGetInTouch}
                                className="bg-[#f2500d] box-border flex items-center justify-between px-[18px] py-3 w-[280px] cursor-pointer hover:bg-[#d63d00] transition-colors"
                            >
                                <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                    Get in Touch
                                </span>
                                <div className="w-5 h-5">
                                    <ArrowIcon />
                                </div>
                            </button>
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
                <div className="bg-white box-border flex flex-col gap-8 items-center px-4 py-16 w-full min-h-fit">
                    {/* Stay Connected With Us Heading */}
                    <div className="w-full flex justify-center">
                        <div className="font-geist font-bold text-2xl leading-8 text-zinc-900 tracking-[-0.25px] text-center">
                            Stay Connected With Us
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6 items-center w-full">
                        {/* AI Brain Image */}
                        <div className="bg-zinc-900 relative border border-solid border-zinc-800 w-full h-[200px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                alt="AI Brain Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20"></div>
                        </div>

                        {/* Description and CTA */}
                        <div className="flex flex-col gap-4 items-center w-full">
                            <div className="font-geist font-normal text-sm leading-5 text-center text-zinc-600 tracking-[-0.25px] w-full">
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

                            <button
                                onClick={handleGetInTouch}
                                className="bg-[#f2500d] box-border flex items-center justify-between px-4 py-2.5 w-full cursor-pointer hover:bg-[#d63d00] transition-colors"
                            >
                                <span className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    Get in Touch
                                </span>
                                <div className="w-4 h-4">
                                    <ArrowIcon />
                                </div>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="bg-zinc-200 h-px w-full" />

                        {/* Contact Information */}
                        <div className="flex flex-col gap-1 items-center">
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
                        <div className="flex flex-col gap-4 items-center w-full">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2 items-center overflow-hidden cursor-pointer hover:text-[#f2500d] transition-colors w-full justify-center"
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
