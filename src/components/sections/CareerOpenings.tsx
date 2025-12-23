import SectionKicker from "../ui/SectionKicker";

// Arrow Right Icon Component
const ArrowRightIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
    >
        <path
            d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface ApplyNowButtonProps {
    onClick?: () => void;
}

function ApplyNowButton({ onClick }: ApplyNowButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 border border-brand-primary px-[18px] py-3 font-geist font-semibold text-body-lg tracking-[0.5px] text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
        >
            Apply now
            <span
                className="w-5 h-5 inline-flex items-center justify-center rotate-45"
                aria-hidden="true"
            >
                <ArrowRightIcon />
            </span>
        </button>
    );
}

interface CareerOpeningsProps {
    openings: string[];
}

export default function CareerOpenings({ openings }: CareerOpeningsProps) {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="px-6 md:px-16 lg:px-28">
                <div className="max-w-[1216px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div>
                            <SectionKicker variant="light">
                                Current Openings
                            </SectionKicker>
                        </div>
                        <div className="md:col-span-2">
                            <p className="font-geist font-medium text-h3 tracking-[-1px] text-neutral-tertiary">
                                Looking for{" "}
                                <span className="font-engagement text-brand-primary text-[48px] leading-[48px] tracking-[2px]">
                                    thinkers, builders, and problem-solvers
                                </span>{" "}
                                who want to make an impact.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {openings.map((title) => (
                            <div
                                key={title}
                                className="bg-neutral-50 border border-zinc-200 p-5 flex flex-col justify-between min-h-[214px]"
                            >
                                <h3 className="font-geist font-medium text-h4 tracking-[-1px] text-neutral-secondary">
                                    {title}
                                </h3>
                                <ApplyNowButton onClick={() => undefined} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
