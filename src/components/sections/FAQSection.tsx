import React, { useState } from 'react';

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
            fill="#f2500d"
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

// FAQ Item Component
interface FAQItemProps {
    question: string;
    answer: string;
    number: string;
    isExpanded: boolean;
    onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, number, isExpanded, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className={`bg-zinc-900 box-border flex flex-col gap-5 items-start justify-center p-8 w-full text-left transition-all duration-300 relative ${isExpanded ? 'border border-solid border-[#7e2a0c] shadow-[0px_0px_8.3px_0px_#f2500d]' : 'border border-solid border-zinc-800'
                }`}
        >
            {/* Question Header */}
            <div className="flex gap-2 items-center w-full">
                <div className="font-engagement text-2xl leading-9 text-zinc-100 tracking-[-1px] shrink-0">
                    {number}
                </div>
                <div className="font-geist font-medium text-2xl leading-9 text-zinc-100 tracking-[-0.25px] flex-1">
                    {question}
                </div>
            </div>

            {/* Answer - Only show when expanded */}
            {isExpanded && (
                <div className="font-geist font-normal text-xl leading-8 text-zinc-300 tracking-[0.5px] w-full">
                    {answer}
                </div>
            )}
        </button>
    );
};

const FAQSection: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number>(0); // First FAQ expanded by default

    const faqs = [
        {
            question: "Why choose your solutions?",
            answer: "We align every build with your goals — combining strategy, design, and technology to create solutions that actually move the needle.",
            number: "(01)"
        },
        {
            question: "What about post-launch support?",
            answer: "We don't disappear after launch. Our team provides continuous updates, improvements, and technical support to keep your system running at its best.",
            number: "(02)"
        },
        {
            question: "Are your services startup-friendly?",
            answer: "By using lean, agile methods, we deliver MVPs quickly and scale only when you're ready — so you invest smartly, not heavily.",
            number: "(03)"
        },
        {
            question: "What if I dislike the design?",
            answer: "No worries — we offer unlimited revisions during development, ensuring the end product meets your expectations.",
            number: "(04)"
        },
        {
            question: "Is AI affordable for small teams?",
            answer: "Yes. We tailor AI to your business case, starting small with high-impact features, then scaling as your needs grow.",
            number: "(05)"
        }
    ];

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className="faqSection bg-zinc-950 w-full">
            {/* Desktop Layout (1024px+) */}
            <div className="faqSection-desktop hidden lg:block">
                <div className="bg-zinc-950 box-border flex flex-col gap-16 items-center px-28 py-32 w-full min-h-fit">
                    <div className="flex gap-16 items-start max-w-[1280px] w-full">
                        {/* Left Column - Header */}
                        <div className="flex-1 flex flex-col gap-4 items-start">
                            {/* FAQs Label */}
                            <div className="flex gap-2.5 items-center w-full">
                                <div className="w-7 h-7">
                                    <SparkIcon />
                                </div>
                                <div className="font-geist font-normal text-lg leading-7 text-white tracking-[0.5px]">
                                    FAQs
                                </div>
                            </div>

                            {/* Main Heading */}
                            <div className="font-geist font-medium text-[60px] leading-[72px] text-white tracking-[-2px]">
                                <p className="leading-[72px] mb-0">Your questions</p>
                                <p className="leading-[72px]">
                                    <span className="text-[60px]">are </span>
                                    <span className="font-engagement not-italic text-[#f2500d] text-[72px] tracking-[2px]">Answered</span>
                                    <span className="text-[60px]"> here.</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Column - FAQ Items */}
                        <div className="flex-1 flex flex-col gap-5 items-center">
                            {/* FAQ Items */}
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    number={faq.number}
                                    isExpanded={expandedIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            ))}

                            {/* Bottom CTA */}
                            <div className="flex flex-col gap-5 items-start pt-8 w-full">
                                <div className="font-geist font-normal text-2xl leading-9 text-zinc-100 tracking-[-0.25px] w-full">
                                    <span>Still Have Questions? </span>
                                    <span className="text-[#9f9fa9]">Let's Talk.</span>
                                </div>

                                <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                    <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                        Book a 30‑Minute Free Call
                                    </div>
                                    <div className="w-5 h-5">
                                        <ArrowIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (768px - 1023px) */}
            <div className="faqSection-tablet hidden md:block lg:hidden">
                <div className="bg-zinc-950 box-border flex flex-col gap-12 items-center px-8 py-24 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-center max-w-[1280px] w-full">
                        {/* FAQs Label */}
                        <div className="flex gap-2 items-center justify-center w-full">
                            <div className="w-7 h-7">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-lg leading-7 text-center text-white tracking-[0.5px]">
                                FAQs
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-[48px] leading-[52px] text-center text-white tracking-[-1px] w-full">
                            <p className="leading-[52px] mb-0">Your questions</p>
                            <p className="leading-[52px]">
                                <span className="text-[48px]">are </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[60px] tracking-[2px]">Answered</span>
                                <span className="text-[48px]"> here.</span>
                            </p>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="flex flex-col gap-5 items-center w-full">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                number={faq.number}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}

                        {/* Bottom CTA */}
                        <div className="flex flex-col gap-5 items-center pt-8 w-full">
                            <div className="font-geist font-normal text-xl leading-8 text-center text-zinc-100 tracking-[-0.25px] w-full">
                                <span>Still Have Questions? </span>
                                <span className="text-[#9f9fa9]">Let's Talk.</span>
                            </div>

                            <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-[18px] py-3 cursor-pointer hover:bg-[#d63d00] transition-colors">
                                <div className="font-geist font-semibold text-base leading-6 text-white tracking-[0.5px]">
                                    Book a 30‑Minute Free Call
                                </div>
                                <div className="w-5 h-5">
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (below 768px) */}
            <div className="faqSection-mobile block md:hidden">
                <div className="bg-zinc-950 box-border flex flex-col gap-8 items-center px-4 py-16 w-full min-h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col gap-6 items-start w-full">
                        {/* FAQs Label */}
                        <div className="flex gap-1.5 items-center w-full">
                            <div className="w-6 h-6">
                                <SparkIcon />
                            </div>
                            <div className="font-geist font-normal text-sm leading-5 text-white tracking-[0.5px]">
                                FAQs
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="font-geist font-medium text-2xl leading-8 text-white tracking-[-0.25px] w-full">
                            <p className="leading-8 mb-0">Your questions</p>
                            <p className="leading-8">
                                <span className="text-2xl">are </span>
                                <span className="font-engagement not-italic text-[#f2500d] text-[28px] tracking-[1.5px]">Answered</span>
                                <span className="text-2xl"> here.</span>
                            </p>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="flex flex-col gap-4 items-start w-full">
                        {faqs.map((faq, index) => (
                            <button
                                key={index}
                                onClick={() => handleToggle(index)}
                                className={`bg-zinc-900 box-border flex flex-col gap-4 items-start justify-center p-4 w-full text-left transition-all duration-300 relative ${expandedIndex === index ? 'border border-solid border-[#7e2a0c] shadow-[0px_0px_8.3px_0px_#f2500d]' : 'border border-solid border-zinc-800'
                                    }`}
                            >
                                {/* Question Header */}
                                <div className="flex gap-2 items-center w-full">
                                    <div className="font-engagement text-lg leading-7 text-zinc-100 tracking-[-1px] shrink-0">
                                        {faq.number}
                                    </div>
                                    <div className="font-geist font-medium text-lg leading-7 text-zinc-100 tracking-[-0.25px] flex-1">
                                        {faq.question}
                                    </div>
                                </div>

                                {/* Answer - Only show when expanded */}
                                {expandedIndex === index && (
                                    <div className="font-geist font-normal text-sm leading-5 text-zinc-300 tracking-[0.5px] w-full">
                                        {faq.answer}
                                    </div>
                                )}
                            </button>
                        ))}

                        {/* Bottom CTA */}
                        <div className="flex flex-col gap-4 items-start pt-6 w-full">
                            <div className="font-geist font-normal text-lg leading-7 text-zinc-100 tracking-[-0.25px] w-full">
                                <span>Still Have Questions? </span>
                                <span className="text-[#9f9fa9]">Let's Talk.</span>
                            </div>

                            <div className="bg-[#f2500d] box-border flex gap-1.5 items-center justify-center px-4 py-2.5 cursor-pointer hover:bg-[#d63d00] transition-colors w-full">
                                <div className="font-geist font-semibold text-sm leading-5 text-white tracking-[0.5px]">
                                    Book a 30‑Minute Free Call
                                </div>
                                <div className="w-4 h-4">
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;