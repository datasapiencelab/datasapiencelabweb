import { useState } from "react";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutInquiry() {
    const { inquiry } = ABOUT_CONTENT;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Info */}
                    <div>
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-engagement text-zinc-900 mb-6">
                                {inquiry.heading}
                            </h2>
                            <p className="text-base md:text-lg text-zinc-600 font-geist mb-8">
                                {inquiry.kicker}
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="space-y-8">
                            {inquiry.steps.map((step, index) => (
                                <div key={index}>
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-lg font-geist text-[#f2500d]">
                                            {step.number}
                                        </span>
                                        <h3 className="text-xl font-geist text-zinc-900">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-base text-zinc-600 font-geist pl-11">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-zinc-50 rounded-lg p-6 md:p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-geist text-zinc-700 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={inquiry.form.namePlaceholder}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg font-geist text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#f2500d] focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-geist text-zinc-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={inquiry.form.emailPlaceholder}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg font-geist text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#f2500d] focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-geist text-zinc-700 mb-2"
                                >
                                    Share a few words about your idea
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={
                                        inquiry.form.messagePlaceholder
                                    }
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-lg font-geist text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#f2500d] focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                fullWidth
                            >
                                Send Inquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
