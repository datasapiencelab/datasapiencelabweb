import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { HOME_CONTENT } from "../../content/home";
import { getAllProjects } from "../../content/projectDetails";
import { useNavigate } from "react-router-dom";

// Desktop and Mobile SVGs
const desktopHeader = "assets/icons/insight&innovation-desktop.svg";
const mobileHeader = "assets/icons/insight&innovation-mobile.svg";

interface ProjectTagProps {
    children: React.ReactNode;
}

function ProjectTag({ children }: ProjectTagProps) {
    return (
        <div className="flex items-center gap-1.5 sm:gap-4">
            <div className="w-2 h-2 bg-brand-primary flex-shrink-0"></div>
            <span className="text-xs leading-5 sm:text-base sm:leading-6 tracking-[0.5px] text-neutral-tertiary font-['Geist']">
                {children}
            </span>
        </div>
    );
}

interface ProjectCardProps {
    title: string;
    tags: string[];
    image: string;
    slug: string;
    className?: string;
}

function ProjectCard({
    title,
    tags,
    image,
    slug,
    className = "",
}: ProjectCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className={`bg-white border border-zinc-200 p-3 sm:p-5 flex flex-col gap-3 sm:gap-5 ${className}`}
        >
            <div className="aspect-[640/442] sm:aspect-[556/393] w-full relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-end">
                <div className="flex-1 flex flex-col gap-1">
                    <h3 className="font-semibold text-lg leading-7 sm:font-medium sm:text-2xl sm:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                        {title}
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-4 py-1">
                        {tags.map((tag, index) => (
                            <ProjectTag key={index}>{tag}</ProjectTag>
                        ))}
                    </div>
                </div>
                <Button
                    variant="outline"
                    showArrow
                    onClick={() => {
                        navigate(`/projects/${slug}`);
                    }}
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}

export default function Projects() {
    const { projects } = HOME_CONTENT;
    const allProjects = getAllProjects();
    const navigate = useNavigate();

    return (
        <div className="relative bg-neutral-50 py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-32 lg:px-28 z-20">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* Header Section */}
                <div className="w-full flex flex-col gap-4 sm:gap-8 lg:gap-12">
                    {/* Mobile: Left aligned with kicker and svg */}
                    <div className="block sm:hidden">
                        <div className="flex flex-col items-start gap-4">
                            {/* Kicker */}
                            <div className="flex gap-1.5 items-center">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Spark />
                                </div>
                                <span className="text-xs leading-5 text-zinc-900 tracking-[0.5px] font-['Geist']">
                                    {projects.kicker}
                                </span>
                            </div>
                            {/* Mobile Title SVG */}
                            <img
                                src={mobileHeader}
                                alt={`${projects.heading.word1} & ${projects.heading.word2}`}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Desktop: Centered SVG with absolute positioning for Kicker */}
                    <div className="hidden sm:flex justify-center w-full">
                        <div className="relative inline-block">
                            {/* Badge/Kicker - Absolute Top Right Inside */}
                            <div className="absolute top-0 right-0 flex gap-2.5 items-center z-10 p-2">
                                <div className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                                    <Spark />
                                </div>
                                <span className="text-base lg:text-lg leading-6 lg:leading-7 text-zinc-900 tracking-[0.5px] font-['Geist']">
                                    {projects.kicker}
                                </span>
                            </div>

                            {/* Desktop Title SVG */}
                            <img
                                src={desktopHeader}
                                alt={`${projects.heading.word1} & ${projects.heading.word2}`}
                                className="w-full h-auto max-w-[90vw] xl:max-w-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="w-full">
                    {/* Mobile: Single column */}
                    <div className="block sm:hidden">
                        <p className="font-medium text-base leading-6 text-[#9f9fa9] tracking-[0.5px] font-['Geist'] text-left">
                            From predictive models to scalable platforms,{" "}
                            <span className="text-zinc-900">
                                Every solution is Fueled by Data Intelligence,
                                Shaped by Design, and Built to deliver
                                measurable impact.
                            </span>{" "}
                            See how we've helped businesses turn raw data into
                            powerful outcomes.
                        </p>
                    </div>

                    {/* Desktop: Grid layout */}
                    <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8 items-start">
                        <div className="flex gap-2.5 items-center">
                            <span className="text-2xl lg:text-[24px] leading-8 lg:leading-9 text-zinc-800 tracking-[-1px] font-['Engagement']">
                                (2025)
                            </span>
                        </div>
                        <div className="col-span-2 font-medium text-xl lg:text-2xl leading-8 lg:leading-9 text-[#9f9fa9] tracking-[-0.25px] font-['Geist']">
                            From predictive models to scalable platforms,{" "}
                            <span className="text-zinc-900">
                                Every solution is Fueled by Data Intelligence,
                                Shaped by Design, and Built to deliver
                                measurable impact.
                            </span>{" "}
                            See how we've helped businesses turn raw data into
                            powerful outcomes.
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="w-full">
                    {/* Mobile: Single column */}
                    <div className="flex flex-col gap-3.5 sm:hidden">
                        {allProjects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                tags={project.services}
                                image={project.hero.image}
                                slug={project.slug}
                            />
                        ))}
                    </div>

                    {/* Desktop: Two column grid with masonry layout */}
                    <div className="hidden sm:grid sm:grid-cols-2 gap-6 lg:gap-8 auto-rows-max">
                        {/* Project 1 - LinkedIn Observer */}
                        {allProjects[0] && (
                            <ProjectCard
                                title={allProjects[0].title}
                                tags={allProjects[0].services}
                                image={allProjects[0].hero.image}
                                slug={allProjects[0].slug}
                            />
                        )}

                        {/* Project 2 - Race Pace */}
                        {allProjects[1] && (
                            <ProjectCard
                                title={allProjects[1].title}
                                tags={allProjects[1].services}
                                image={allProjects[1].hero.image}
                                slug={allProjects[1].slug}
                            />
                        )}

                        {/* Project 3 - NouZik (Large featured project spanning full width) */}
                        {allProjects[2] && (
                            <div className="col-span-2 bg-white border border-zinc-200 p-3 sm:p-5 flex flex-col gap-3 sm:gap-5">
                                <div className="w-full h-[400px] sm:h-[500px] lg:h-[667px] overflow-hidden flex gap-2 items-center justify-center">
                                    <img
                                        src={allProjects[2].hero.image}
                                        alt={allProjects[2].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-end">
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h3 className="font-semibold text-lg leading-7 sm:font-medium sm:text-2xl sm:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                                            {allProjects[2].title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 sm:gap-4 py-1">
                                            {allProjects[2].services.map(
                                                (tag, index) => (
                                                    <ProjectTag key={index}>
                                                        {tag}
                                                    </ProjectTag>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        showArrow
                                        onClick={() => {
                                            navigate(
                                                `/projects/${allProjects[2].slug}`,
                                            );
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <Button
                        className="bg-brand-primary px-4 py-2.5 sm:px-[18px] sm:py-3 flex gap-1.5 items-center w-full sm:w-auto"
                        onClick={() => navigate("/projects")}
                    >
                        <span className="text-white text-base leading-6 font-semibold tracking-[0.5px] font-['Geist']">
                            View All Projects
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
