import React, { useState } from "react";
import Spark from "../ui/Spark";
import Button from "../ui/Button";

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

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        projectDetails: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
            "Thank you for your inquiry! We'll get back to you within 24 hours.",
        );
    };

    const steps = [
        {
            number: "(01)",
            title: "Quick Response",
            description:
                "You'll hear from us within 24 hours with a confirmation and next steps.",
        },
        {
            number: "(02)",
            title: "Discovery Chat",
            description:
                "We'll schedule a 30–45 min call to dive deeper into your idea and explore possibilities.",
        },
        {
            number: "(03)",
            title: "Roadmap & Kickoff",
            description:
                "Once we align on goals, we'll share a tailored roadmap and start bringing your project to life. 🚀",
        },
    ];

    return (
        <div className="relative inquiryFormSection bg-white w-full overflow-hidden z-20">
            {/* Background Pattern */}
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
                <div className="box-border flex flex-col gap-16 items-center px-28 py-32 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="gap-8 grid grid-cols-11 grid-rows-1 h-[144px] max-w-[1280px] w-full">
                        {/* Left - Journey Label */}
                        <div className="col-span-4 flex gap-2.5 items-center">
                            <Spark />
                            <div className="font-geist font-normal text-lg leading-7 text-zinc-900 tracking-[0.5px]">
                                A simple 3-step journey
                            </div>
                        </div>

                        {/* Right - Main Heading */}
                        <div className="col-span-7 flex flex-col gap-8 items-start justify-center">
                            <div className="font-geist text-zinc-600 tracking-[-1px] w-full">
                                <p className="mb-0 whitespace-pre-wrap">
                                    <span className="font-semibold text-[60px] leading-[72px] tracking-[-2px]">
                                        Let's
                                    </span>
                                    <span className="font-medium text-[40px] leading-[48px]">
                                        {" "}
                                    </span>
                                    <span className="font-engagement not-italic text-[#f2500d] text-[72px] leading-[48px] tracking-[2px]">
                                        Explore
                                    </span>
                                    <span className="font-medium text-[40px] leading-[48px]">
                                        {" "}
                                    </span>
                                </p>
                                <p className="font-semibold text-[60px] leading-[72px] tracking-[-2px]">
                                    Your Idea Together
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="gap-8 grid grid-cols-11 grid-rows-1 max-w-[1280px] w-full">
                        {/* Left - Steps */}
                        <div className="col-span-3 flex flex-col gap-8 items-start">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1 items-start w-full"
                                >
                                    {/* Step Header */}
                                    <div className="flex gap-1.5 items-start text-zinc-900">
                                        <div className="font-engagement text-xl leading-7 tracking-[-1px] shrink-0">
                                            {step.number}
                                        </div>
                                        <div className="font-geist font-medium text-lg leading-7 tracking-[0.5px]">
                                            {step.title}
                                        </div>
                                    </div>
                                    {/* Step Description */}
                                    <div className="font-geist font-normal text-base leading-6 text-zinc-600 tracking-[0.5px] w-full">
                                        {step.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right - Form */}
                        <div className="col-span-7 col-start-5">
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
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        fullWidth
                                        className="disabled:opacity-50 disabled:cursor-not-allowed justify-between"
                                    >
                                        <span className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Inquiry"}
                                        </span>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="inquiryFormSection-tablet hidden md:block lg:hidden">
                <div className="box-border flex flex-col gap-12 items-center px-8 py-24 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-8 items-center max-w-[1280px] w-full">
                        {/* Journey Label */}
                        <div className="flex gap-2 items-center justify-center w-full">
                            <Spark />
                            <div className="font-geist font-normal text-lg leading-7 text-center text-zinc-900 tracking-[0.5px]">
                                A simple 3-step journey
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist text-center text-zinc-600 tracking-[-1px] w-full">
                            <p className="mb-0">
                                <span className="font-semibold text-[48px] leading-[52px] tracking-[-2px]">
                                    Let's
                                </span>
                                <span className="font-medium text-[32px] leading-[36px]">
                                    {" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[60px] leading-[36px] tracking-[2px]">
                                    Explore
                                </span>
                            </p>
                            <p className="font-semibold text-[48px] leading-[52px] tracking-[-2px]">
                                Your Idea Together
                            </p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-1 items-start w-full"
                            >
                                <div className="flex gap-1.5 items-start text-zinc-900">
                                    <div className="font-engagement text-lg leading-6 tracking-[-1px] shrink-0">
                                        {step.number}
                                    </div>
                                    <div className="font-geist font-medium text-base leading-6 tracking-[0.5px]">
                                        {step.title}
                                    </div>
                                </div>
                                <div className="font-geist font-normal text-sm leading-5 text-zinc-600 tracking-[0.5px] w-full">
                                    {step.description}
                                </div>
                            </div>
                        ))}
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

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                fullWidth
                                className="disabled:opacity-50 disabled:cursor-not-allowed justify-between"
                                size="small"
                            >
                                <span className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Inquiry"}
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="inquiryFormSection-mobile block md:hidden">
                <div className="box-border flex flex-col gap-8 items-center px-4 py-16 w-full min-h-fit relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* Journey Label */}
                        <div className="flex gap-1.5 items-center w-full">
                            <Spark />
                            <div className="font-geist font-normal text-sm leading-5 text-zinc-900 tracking-[0.5px]">
                                A simple 3-step journey
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist text-zinc-600 tracking-[-0.25px] w-full">
                            <p className="mb-0">
                                <span className="font-semibold text-2xl leading-8">
                                    Let's
                                </span>
                                <span className="font-medium text-xl leading-7">
                                    {" "}
                                </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[28px] leading-7 tracking-[1.5px]">
                                    Explore
                                </span>
                            </p>
                            <p className="font-semibold text-2xl leading-8">
                                Your Idea Together
                            </p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-4 items-start w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-1 items-start w-full"
                            >
                                <div className="flex gap-1 items-start text-zinc-900">
                                    <div className="font-engagement text-base leading-6 tracking-[-1px] shrink-0">
                                        {step.number}
                                    </div>
                                    <div className="font-geist font-medium text-sm leading-5 tracking-[0.5px]">
                                        {step.title}
                                    </div>
                                </div>
                                <div className="font-geist font-normal text-xs leading-4 text-zinc-600 tracking-[0.5px] w-full">
                                    {step.description}
                                </div>
                            </div>
                        ))}
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

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                fullWidth
                                className="disabled:opacity-50 disabled:cursor-not-allowed justify-between"
                                size="small"
                            >
                                <span className="font-geist font-semibold text-xs leading-4 text-white tracking-[0.5px]">
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Inquiry"}
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
