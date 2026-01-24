import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/projectDetails";
import ProjectDetailHero from "../components/sections/ProjectDetailHero";
import ProjectDetailImages from "../components/sections/ProjectDetailImages";
import ProjectDetailChallenge from "../components/sections/ProjectDetailChallenge";
import ProjectDetailGallery from "../components/sections/ProjectDetailGallery";
import ProjectDetailKeyFeatures from "../components/sections/ProjectDetailKeyFeatures";
import ProjectDetailResult from "../components/sections/ProjectDetailResult";
import ProjectDetailRelated from "../components/sections/ProjectDetailRelated";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";

export default function ProjectDetailsPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <div className="relative bg-white min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-zinc-800 mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-xl text-zinc-600 mb-8">
                        The project you're looking for doesn't exist.
                    </p>
                    <a
                        href="/projects"
                        className="inline-block px-6 py-3 bg-brand-primary text-white font-semibold"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <ProjectDetailHero project={project} />
            <ProjectDetailImages image={project.hero.image} />
            <ProjectDetailChallenge
                title={project.challenge.title}
                description={project.challenge.description}
                className={
                    !project.hero.image ? "pt-0 sm:pt-0 md:pt-0 lg:pt-0" : ""
                }
            />
            <ProjectDetailGallery image={project.challenge.image} />
            <ProjectDetailKeyFeatures
                features={project.keyFeatures.features}
                className={
                    !project.challenge.image
                        ? "pt-0 sm:pt-0 md:pt-0 lg:pt-0"
                        : ""
                }
            />
            <ProjectDetailGallery image={project.gallery.image} />
            <ProjectDetailResult
                title={project.result.title}
                description={project.result.description}
                className={
                    !project.gallery.image ? "pt-0 sm:pt-0 md:pt-0 lg:pt-0" : ""
                }
            />
            <ProjectDetailRelated currentSlug={project.slug} />
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
