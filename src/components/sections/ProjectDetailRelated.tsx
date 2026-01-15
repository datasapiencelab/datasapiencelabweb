import {
    getRelatedProjects,
    type ProjectDetail,
} from "../../content/projectDetails";
import Button from "../ui/Button";

interface RelatedProjectCardProps {
    project: ProjectDetail;
}

function RelatedProjectCard({ project }: RelatedProjectCardProps) {
    return (
        <div className="bg-white border border-zinc-200 p-3 sm:p-5 flex flex-col gap-3 sm:gap-5 w-full">
            <div className="aspect-[640/478] sm:aspect-[552/358] w-full relative overflow-hidden bg-zinc-100">
                <img
                    src={project.hero.images[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3.5">
                <div className="flex flex-col gap-1 sm:gap-2.5">
                    <h3 className="font-medium text-lg leading-7 sm:text-2xl sm:leading-9 text-zinc-800 tracking-[0.5px] sm:tracking-[-0.25px] font-['Geist']">
                        {project.title.length > 50
                            ? project.title.substring(0, 50) + "..."
                            : project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2 py-0.5">
                        {project.services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 sm:gap-1.5"
                            >
                                <div className="w-2 h-2 bg-zinc-800 flex-shrink-0" />
                                <span className="text-xs leading-5 sm:text-base sm:leading-6 tracking-[0.5px] text-neutral-tertiary font-['Geist']">
                                    {service}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Button
                        variant="outline"
                        onClick={() => {
                            window.location.href = `/projects/${project.slug}`;
                        }}
                    >
                        View Details
                    </Button>
                </div>
            </div>
        </div>
    );
}

interface ProjectDetailRelatedProps {
    currentSlug: string;
}

export default function ProjectDetailRelated({
    currentSlug,
}: ProjectDetailRelatedProps) {
    const relatedProjects = getRelatedProjects(currentSlug, 4);

    if (relatedProjects.length === 0) {
        return null;
    }

    return (
        <div className="relative bg-white py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-32 lg:px-28">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6 sm:gap-10 lg:gap-20">
                <h2 className="font-semibold text-2xl leading-8 sm:text-4xl sm:leading-[48px] lg:text-5xl lg:leading-[64px] text-zinc-800 tracking-[-0.5px] sm:tracking-[-1px] font-['Geist']">
                    Explore More Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {relatedProjects.map((project) => (
                        <RelatedProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
