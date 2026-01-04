import { HOME_CONTENT } from "../../content/home";

// Project Tag Component
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

// Project Card Component (one per row)
interface ProjectCardProps {
    title: string;
    tags: string[];
    image: string;
}

function ProjectCard({ title, tags, image }: ProjectCardProps) {
    return (
        <div className="bg-white border border-zinc-200 p-3 sm:p-5 flex flex-col gap-3 sm:gap-5 w-full">
            <div className="aspect-[640/442] sm:aspect-[16/9] w-full relative overflow-hidden">
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

export default function ProjectsList() {
    const { projects } = HOME_CONTENT;

    // Project order for the page:
    // 1. Mastership item[1]
    // 2. NovaAI item[4]
    // 3. NovaAI item[2]
    // 4. Mastership item[3]
    const projectOrder = [
        projects.items[1], // Mastership
        projects.items[4], // NovaAI (featured)
        projects.items[2], // NovaAI
        projects.items[3], // Mastership
    ];

    return (
        <div className="relative bg-white py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-32 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">
                {projectOrder.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        tags={project.tags}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
}
