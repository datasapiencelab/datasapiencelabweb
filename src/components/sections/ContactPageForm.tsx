import React, { useState } from "react";

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

// Resize handle icon for textarea
const ResizeHandle = () => (
    <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 16 16" fill="none">
        <path
            d="M16 16L10 10M16 10L10 16M16 6L6 16M16 0L0 16"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
        />
    </svg>
);

interface FormData {
    fullName: string;
    email: string;
    projectDetails: string;
}

const ContactPageForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        projectDetails: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form
        setFormData({
            fullName: "",
            email: "",
            projectDetails: "",
        });

        setIsSubmitting(false);
        alert(
            "Thank you for your inquiry! We'll get back to you within 24 hours."
        );
    };

    return (
        <div className="relative inquiryFormSection bg-white w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/assets/images/contact/glass_building.jpg')",
                        transform: "scalex(-1)",
                    }}
                />
            </div>

            {/* Desktop Layout (1024px+) */}
            <div className="inquiryFormSection-desktop hidden lg:block">
                <div className="box-border flex flex-col gap-16 items-center px-28 pt-40 pb-32 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-center max-w-[1280px] w-full">
                        {/* Main Heading */}
                        <div className="font-geist text-center text-zinc-600 tracking-[-1px]">
                            <p className="mb-0">
                                <span className="font-semibold text-7xl leading-tight tracking-[-2px]">
                                    Let's{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-7xl leading-tight tracking-[2px]">
                                    Connect
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <div
                            className="font-geist text-xl leading-relaxed text-center"
                            style={{ color: "#3F3F47" }}
                        >
                            <p className="mb-0">
                                Have a question or a bold idea? Whether it's AI,
                                analytics, or product development
                                <br />
                                — our team is ready to collaborate. Reach out
                                today, and let's start shaping
                                <br />
                                solutions together.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-[1280px] w-full">
                        {/* Form */}
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white box-border flex flex-col gap-8 items-start p-5 w-full border border-solid border-zinc-200">
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-8 items-center w-full"
                                >
                                    {/* Full Name Field */}
                                    <div className="flex flex-col gap-1.5 items-start w-full">
                                        <label className="font-geist font-medium text-lg leading-7 text-zinc-900 tracking-[0.5px]">
                                            Full Name
                                        </label>
                                        <div className="box-border flex gap-2 items-start px-1 py-2.5 w-full border-b border-solid border-zinc-300 relative">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                className="flex-1 font-geist font-normal text-xl leading-8 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col gap-1.5 items-start w-full">
                                        <label className="font-geist font-medium text-lg leading-7 text-zinc-900 tracking-[0.5px]">
                                            Email Address
                                        </label>
                                        <div className="box-border flex gap-2 items-start px-1 py-2.5 w-full border-b border-solid border-zinc-300 relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="example@gmail.com"
                                                className="flex-1 font-geist font-normal text-xl leading-8 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Project Details Field */}
                                    <div className="flex flex-col gap-1.5 items-start w-full flex-1">
                                        <label className="font-geist font-medium text-lg leading-7 text-zinc-900 tracking-[0.5px]">
                                            Share a few details about your idea
                                        </label>
                                        <div className="box-border flex gap-2 items-start px-1 py-2.5 w-full border-b border-solid border-zinc-300 relative flex-1">
                                            <textarea
                                                name="projectDetails"
                                                value={formData.projectDetails}
                                                onChange={handleInputChange}
                                                placeholder='e.g., "A SaaS dashboard with real-time analytics for healthcare data."'
                                                className="flex-1 font-geist font-normal text-xl leading-8 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none resize-none min-h-[120px]"
                                                required
                                            />
                                            <div className="absolute bottom-0 right-0">
                                                <ResizeHandle />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#f2500d] box-border flex items-center justify-between px-[18px] py-3 w-full cursor-pointer hover:bg-[#d63d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Inquiry"}
                                        </span>
                                        <div className="w-5 h-5">
                                            <ArrowIcon />
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="inquiryFormSection-tablet hidden md:block lg:hidden">
                <div className="box-border flex flex-col gap-12 items-center px-8 pt-40 pb-24 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-center max-w-[1280px] w-full">
                        {/* Main Heading */}
                        <div className="font-geist text-center text-zinc-600 tracking-[-1px]">
                            <p className="mb-0">
                                <span className="font-semibold text-6xl leading-tight tracking-[-2px]">
                                    Let's{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-6xl leading-tight tracking-[2px]">
                                    Connect
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <div
                            className="font-geist text-xl leading-relaxed text-center"
                            style={{ color: "#3F3F47" }}
                        >
                            <p className="mb-0">
                                Have a question or a bold idea? Whether it's AI,
                                analytics, or product development
                                <br />
                                — our team is ready to collaborate. Reach out
                                today, and let's start shaping
                                <br />
                                solutions together.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white box-border flex flex-col gap-6 items-start p-4 w-full border border-solid border-zinc-200">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 items-center w-full"
                        >
                            <div className="flex flex-col gap-1 items-start w-full">
                                <label className="font-geist font-medium text-base leading-6 text-zinc-900 tracking-[0.5px]">
                                    Full Name
                                </label>
                                <div className="box-border flex gap-2 items-start px-1 py-2 w-full border-b border-solid border-zinc-300">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-full">
                                <label className="font-geist font-medium text-base leading-6 text-zinc-900 tracking-[0.5px]">
                                    Email Address
                                </label>
                                <div className="box-border flex gap-2 items-start px-1 py-2 w-full border-b border-solid border-zinc-300">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@gmail.com"
                                        className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-full flex-1">
                                <label className="font-geist font-medium text-base leading-6 text-zinc-900 tracking-[0.5px]">
                                    Share a few details about your idea
                                </label>
                                <div className="box-border flex gap-2 items-start px-1 py-2 w-full border-b border-solid border-zinc-300 relative">
                                    <textarea
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleInputChange}
                                        placeholder='e.g., "A SaaS dashboard with real-time analytics for healthcare data."'
                                        className="flex-1 font-geist font-normal text-lg leading-7 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none resize-none min-h-[100px]"
                                        required
                                    />
                                    <div className="absolute bottom-0 right-0">
                                        <ResizeHandle />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#f2500d] box-border flex items-center justify-between px-4 py-2.5 w-full cursor-pointer hover:bg-[#d63d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Inquiry"}
                                </span>
                                <div className="w-4 h-4">
                                    <ArrowIcon />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="inquiryFormSection-mobile block md:hidden">
                <div className="box-border flex flex-col gap-8 items-center px-4 pt-28 pb-16 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* Main Heading */}
                        <div className="font-geist text-zinc-600 tracking-[-0.25px] w-full">
                            <p className="mb-0">
                                <span className="font-semibold text-4xl leading-tight">
                                    Let's{" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-4xl leading-tight tracking-[1.5px]">
                                    Connect
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <div
                            className="font-geist text-xl leading-relaxed"
                            style={{ color: "#3F3F47" }}
                        >
                            <p className="mb-0">
                                Have a question or a bold idea? Whether it's AI,
                                analytics, or product development — our team is
                                ready to collaborate. Reach out today, and let's
                                start shaping solutions together.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white box-border flex flex-col gap-4 items-start p-3 w-full border border-solid border-zinc-200">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 items-center w-full"
                        >
                            <div className="flex flex-col gap-1 items-start w-full">
                                <label className="font-geist font-medium text-sm leading-5 text-zinc-900 tracking-[0.5px]">
                                    Full Name
                                </label>
                                <div className="box-border flex gap-1 items-start px-1 py-1.5 w-full border-b border-solid border-zinc-300">
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="flex-1 font-geist font-normal text-base leading-6 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-full">
                                <label className="font-geist font-medium text-sm leading-5 text-zinc-900 tracking-[0.5px]">
                                    Email Address
                                </label>
                                <div className="box-border flex gap-1 items-start px-1 py-1.5 w-full border-b border-solid border-zinc-300">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@gmail.com"
                                        className="flex-1 font-geist font-normal text-base leading-6 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 items-start w-full flex-1">
                                <label className="font-geist font-medium text-sm leading-5 text-zinc-900 tracking-[0.5px]">
                                    Share a few details about your idea
                                </label>
                                <div className="box-border flex gap-1 items-start px-1 py-1.5 w-full border-b border-solid border-zinc-300 relative">
                                    <textarea
                                        name="projectDetails"
                                        value={formData.projectDetails}
                                        onChange={handleInputChange}
                                        placeholder='e.g., "A SaaS dashboard with real-time analytics for healthcare data."'
                                        className="flex-1 font-geist font-normal text-base leading-6 text-zinc-900 tracking-[0.5px] placeholder-zinc-400 bg-transparent border-none outline-none resize-none min-h-[80px]"
                                        required
                                    />
                                    <div className="absolute bottom-0 right-0">
                                        <ResizeHandle />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#f2500d] box-border flex items-center justify-between px-3 py-2 w-full cursor-pointer hover:bg-[#d63d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="font-geist font-semibold text-xs leading-4 text-white tracking-[0.5px]">
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Inquiry"}
                                </span>
                                <div className="w-3 h-3">
                                    <ArrowIcon />
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageForm;
