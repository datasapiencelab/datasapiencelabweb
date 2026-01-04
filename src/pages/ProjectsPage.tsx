import ProjectsHero from "../components/sections/ProjectsHero";
import ProjectsList from "../components/sections/ProjectsList";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";

export default function ProjectsPage() {
    return (
        <div className="relative">
            <ProjectsHero />
            <ProjectsList />
            <Pricing />
            <FAQ />
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
