import Spark from "../ui/Spark";

interface ProjectDetailResultProps {
    kicker: string;
    title: string;
    description: string[];
}

export default function ProjectDetailResult({
    kicker,
    title,
    description,
}: ProjectDetailResultProps) {
    return (
        <div className="relative bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-32 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                    {/* Left: Kicker */}
                    <div className="w-full lg:w-[592px] flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-[14px]">
                            <div className="w-5 h-5 sm:w-7 sm:h-7">
                                <Spark />
                            </div>
                            <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-medium font-['Geist']">
                                {kicker}
                            </span>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col gap-6 sm:gap-8">
                        <div className="flex flex-col gap-0">
                            <h2 className="font-semibold text-2xl leading-8 sm:text-3xl sm:leading-10 lg:text-[32px] lg:leading-10 text-zinc-800 tracking-[-0.25px] sm:tracking-[-0.5px] font-['Geist']">
                                <span className="text-zinc-600 font-normal">
                                    Impact:{" "}
                                </span>
                                {title}
                            </h2>
                        </div>

                        {description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-base leading-6 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-10 text-zinc-600 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
