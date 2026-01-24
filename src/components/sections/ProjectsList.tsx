import { getAllProjects } from "../../content/projectDetails";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

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
    slug: string;
}

function ProjectCard({ title, tags, image, slug }: ProjectCardProps) {
    const navigate = useNavigate();

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
                <Button
                    onClick={() => navigate(`/projects/${slug}`)}
                    variant="outline"
                    showArrow
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}

export default function ProjectsList() {
    const allProjects = getAllProjects();

    return (
        <div className="relative bg-white py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-32 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-12">
                {allProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        tags={project.services}
                        image={project.hero.image}
                        slug={project.slug}
                    />
                ))}
            </div>
        </div>
    );
}
