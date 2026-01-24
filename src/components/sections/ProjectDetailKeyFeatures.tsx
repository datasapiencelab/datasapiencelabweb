import Spark from "../ui/Spark";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Feature {
    title: string;
    description: string;
}

interface ProjectDetailKeyFeaturesProps {
    features: Feature[];
    className?: string;
}

export default function ProjectDetailKeyFeatures({
    features,
    className,
}: ProjectDetailKeyFeaturesProps) {
    return (
        <div
            className={cn(
                "relative bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-32 lg:px-28",
                className,
            )}
        >
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                    {/* Left: Kicker */}
                    <div className="w-full lg:w-[592px] flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-[14px]">
                            <div className="w-5 h-5 sm:w-7 sm:h-7">
                                <Spark />
                            </div>
                            <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-neutral-tertiary tracking-[0.5px] sm:tracking-[-0.25px] font-medium font-['Geist']">
                                Key Features
                            </span>
                        </div>
                    </div>

                    {/* Right: Features List */}
                    <div className="flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-9">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-3 sm:gap-4 lg:gap-6"
                            >
                                <div className="flex items-start gap-2 sm:gap-2.5">
                                    <span className="text-lg leading-9 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-neutral-primary font-medium tracking-[-0.25px] sm:tracking-[-0.5px] font-['Engagement']">
                                        ({String(index + 1).padStart(2, "0")})
                                    </span>
                                    <h3 className="text-lg leading-9 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-neutral-primary font-medium tracking-[-0.25px] sm:tracking-[-0.5px] font-['Geist']">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-base leading-6 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-10 text-neutral-quartinary tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
