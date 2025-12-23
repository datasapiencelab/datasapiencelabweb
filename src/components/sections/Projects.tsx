import Spark from "../ui/Spark";

// Project images - using placeholder images for now
const projectImage01 =
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80";
const projectImage02 =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
const projectImage03 =
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80";
const projectImage04 =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80";

// Carl character SVG
const carlCharacter = "assets/icons/Carl.svg";

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
    className?: string;
}

function ProjectCard({ title, tags, image, className = "" }: ProjectCardProps) {
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
                <button className="border border-brand-primary border-solid px-3 py-2 sm:px-[18px] sm:py-3 flex gap-1 sm:gap-1.5 items-center self-start sm:self-auto">
                    <span className="text-brand-primary text-sm leading-5 sm:text-base sm:leading-6 font-semibold tracking-[0.5px] font-['Geist']">
                        View Details
                    </span>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="m8 6 4 4-4 4"
                                stroke="#f2500d"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = [
        {
            title: "NovaAi",
            tags: ["Machine Learning & AI", "UI/UX Strategy"],
            image: projectImage01,
        },
        {
            title: "Mastership",
            tags: ["UI/UX Strategy"],
            image: projectImage02,
        },
        {
            title: "NovaAi",
            tags: ["Machine Learning & AI", "UI/UX Strategy"],
            image: projectImage03,
        },
        {
            title: "Mastership",
            tags: ["UI/UX Strategy"],
            image: projectImage04,
        },
        {
            title: "NovaAi",
            tags: ["ML Models", "AI Chatbots", "Mobile App", "Data Insights"],
            image: projectImage01,
        },
    ];

    return (
        <div className="bg-neutral-50 py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-32 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {/* Header Section */}
                <div className="w-full flex flex-col gap-4 sm:gap-8 lg:gap-12">
                    {/* Mobile: Badge first, then title on same line */}
                    <div className="block sm:hidden">
                        {/* Badge */}
                        <div className="flex gap-1.5 items-center justify-center mb-3">
                            <div className="w-5 h-5 flex items-center justify-center">
                                <Spark />
                            </div>
                            <span className="text-xs leading-5 text-zinc-900 tracking-[0.5px] font-['Geist']">
                                Our Work in Action
                            </span>
                        </div>
                        {/* Mobile Title - Insight & always together, Innovation can wrap */}
                        <div className="flex flex-wrap items-center justify-center">
                            <h1 className="font-semibold text-[40px] leading-12 text-zinc-900 tracking-[-1px] font-['Geist']">
                                Insight
                            </h1>
                            <span className="font-['Engagement'] text-[60px] leading-12 text-brand-primary mx-5">
                                &
                            </span>
                            <h2 className="font-semibold text-[40px] leading-12 text-zinc-900 tracking-[-1px] font-['Geist']">
                                Innovation
                            </h2>
                        </div>
                    </div>

                    {/* Desktop: Layout with Carl between Insight and Innovation */}
                    <div className="hidden sm:flex sm:flex-col">
                        {/* Badge Row */}
                        <div className="w-full flex justify-end mb-4">
                            <div className="flex gap-2.5 items-center">
                                <div className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                                    <Spark />
                                </div>
                                <span className="text-base lg:text-lg leading-6 lg:leading-7 text-zinc-900 tracking-[0.5px] font-['Geist']">
                                    Our Work in Action
                                </span>
                            </div>
                        </div>

                        {/* Title Row - Insight, Carl, Innovation */}
                        <div className="w-full flex items-center justify-between relative">
                            {/* Insight */}
                            <h1 className="font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] 2xl:text-[144px] leading-[0.9] text-zinc-900 tracking-[-3px] sm:tracking-[-4px] md:tracking-[-6px] lg:tracking-[-8px] xl:tracking-[-10px] font-['Geist'] flex-shrink-0">
                                Insight
                            </h1>

                            {/* Carl Character - Always show between titles */}
                            <div className="flex items-center justify-center mx-5 flex-shrink-0">
                                <img
                                    src={carlCharacter}
                                    alt="Carl Character"
                                    className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[130px] xl:w-[169px] h-auto object-contain"
                                />
                            </div>

                            {/* Innovation */}
                            <h2 className="font-bold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[120px] 2xl:text-[144px] leading-[0.9] text-zinc-900 tracking-[-3px] sm:tracking-[-4px] md:tracking-[-6px] lg:tracking-[-8px] xl:tracking-[-10px] font-['Geist'] flex-shrink-0">
                                Innovation
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="w-full">
                    {/* Mobile: Single column */}
                    <div className="block sm:hidden">
                        <p className="font-medium text-base leading-6 text-[#9f9fa9] tracking-[0.5px] font-['Geist'] text-center">
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
                            <span className="text-2xl lg:text-[32px] leading-8 lg:leading-9 text-zinc-800 tracking-[-1px] font-['Engagement']">
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
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                tags={project.tags}
                                image={project.image}
                            />
                        ))}
                    </div>

                    {/* Desktop: Two column grid with masonry layout */}
                    <div className="hidden sm:grid sm:grid-cols-2 gap-6 lg:gap-8 auto-rows-max">
                        {/* Project 1 */}
                        <ProjectCard
                            title={projects[0].title}
                            tags={projects[0].tags}
                            image={projects[0].image}
                        />

                        {/* Project 2 */}
                        <ProjectCard
                            title={projects[1].title}
                            tags={projects[1].tags}
                            image={projects[1].image}
                        />

                        {/* Project 3 */}
                        <ProjectCard
                            title={projects[3].title}
                            tags={projects[3].tags}
                            image={projects[3].image}
                        />

                        {/* Project 4 */}
                        <ProjectCard
                            title={projects[2].title}
                            tags={projects[2].tags}
                            image={projects[2].image}
                        />

                        {/* Project 5 - Large featured project spanning full width */}
                        <div className="col-span-2 bg-white border border-zinc-200 p-3 sm:p-5 flex flex-col gap-3 sm:gap-5">
                            <div className="w-full h-[400px] sm:h-[500px] lg:h-[667px] overflow-hidden flex gap-2 items-center justify-center">
                                <img
                                    src={projects[4].image}
                                    alt={projects[4].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-end">
                                <div className="flex-1 flex flex-col gap-1">
                                    <h3 className="font-semibold text-lg leading-7 sm:font-medium sm:text-2xl sm:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                                        {projects[4].title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-4 py-1">
                                        {projects[4].tags.map((tag, index) => (
                                            <ProjectTag key={index}>
                                                {tag}
                                            </ProjectTag>
                                        ))}
                                    </div>
                                </div>
                                <button className="border border-brand-primary border-solid px-3 py-2 sm:px-[18px] sm:py-3 flex gap-1 sm:gap-1.5 items-center self-start sm:self-auto">
                                    <span className="text-brand-primary text-sm leading-5 sm:text-base sm:leading-6 font-semibold tracking-[0.5px] font-['Geist']">
                                        View Details
                                    </span>
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                                        <svg
                                            className="w-full h-full"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="m8 6 4 4-4 4"
                                                stroke="#f2500d"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-brand-primary px-4 py-2.5 sm:px-[18px] sm:py-3 flex gap-1.5 items-center w-full sm:w-auto">
                        <span className="text-white text-base leading-6 font-semibold tracking-[0.5px] font-['Geist']">
                            View All Projects
                        </span>
                        <div className="w-5 h-5 relative">
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="m8 6 4 4-4 4"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
