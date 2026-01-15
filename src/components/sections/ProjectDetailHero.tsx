import Spark from "../ui/Spark";
import Button from "../ui/Button";
import type { ProjectDetail } from "../../content/projectDetails";

interface ProjectDetailHeroProps {
    project: ProjectDetail;
}

interface ProjectInfoRowProps {
    label: string;
    value: string | React.ReactNode;
}

function ProjectInfoRow({ label, value }: ProjectInfoRowProps) {
    return (
        <>
            <div className="h-px bg-zinc-300 w-full" />
            <div className="flex items-center justify-between py-2.5 sm:py-4 lg:py-[18px]">
                <div className="flex items-center gap-0 lg:gap-0 flex-1">
                    <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-zinc-500 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                        {label}
                    </span>
                </div>
                <div className="flex items-center justify-end flex-1">
                    {typeof value === "string" ? (
                        <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-medium font-['Geist']">
                            {value}
                        </span>
                    ) : (
                        value
                    )}
                </div>
            </div>
        </>
    );
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
    return (
        <div className="relative bg-white pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 md:pt-28 md:pb-20 md:px-8 lg:pt-32 lg:pb-24 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* Title */}
                <h1 className="font-semibold text-3xl leading-[44px] sm:text-5xl sm:leading-[56px] lg:text-6xl lg:leading-[72px] text-zinc-800 tracking-[-0.5px] sm:tracking-[-1px] lg:tracking-[-1.5px] font-['Geist']">
                    {project.title}
                </h1>

                {/* Overview Section */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                        {/* Left: Kicker */}
                        <div className="w-full lg:w-[592px] flex-shrink-0">
                            <div className="flex items-center gap-2 sm:gap-[14px]">
                                <div className="w-5 h-5 sm:w-7 sm:h-7">
                                    <Spark />
                                </div>
                                <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-medium font-['Geist']">
                                    {project.kicker}
                                </span>
                            </div>
                        </div>

                        {/* Right: Description and CTA */}
                        <div className="flex-1 flex flex-col gap-6 sm:gap-8">
                            <div className="text-base leading-6 sm:text-xl sm:leading-8 lg:text-xl lg:leading-8 text-zinc-600 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                                <span className="font-medium text-zinc-600">
                                    An{" "}
                                </span>
                                <span className="font-['Engagement'] capitalize text-[#f2500d] text-lg sm:text-xl lg:text-2xl tracking-[2px]">
                                    {project.description
                                        .split(" ")
                                        .slice(1, 4)
                                        .join(" ")}
                                </span>
                                <span className="font-medium text-zinc-600">
                                    {" "}
                                    {project.description
                                        .split(" ")
                                        .slice(4)
                                        .join(" ")}
                                </span>
                            </div>
                            <div>
                                <Button>View Live Project</Button>
                            </div>
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
                        {/* Left: Empty space for alignment */}
                        <div className="hidden lg:block w-[592px] flex-shrink-0" />

                        {/* Right: Info Rows */}
                        <div className="flex-1 flex flex-col">
                            <ProjectInfoRow label="Year" value={project.year} />
                            <ProjectInfoRow
                                label="Industry"
                                value={project.industry}
                            />
                            <ProjectInfoRow
                                label="Scope of work"
                                value={
                                    <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-7 items-center justify-end">
                                        {project.services.map(
                                            (service, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-1.5 sm:gap-2"
                                                >
                                                    <div className="w-2 h-2 bg-brand-primary flex-shrink-0" />
                                                    <span className="text-base leading-6 sm:text-xl sm:leading-7 lg:text-2xl lg:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-medium font-['Geist']">
                                                        {service}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                }
                            />
                            <ProjectInfoRow
                                label="Timeline"
                                value={project.timeline}
                            />
                            <div className="h-px bg-zinc-300 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
