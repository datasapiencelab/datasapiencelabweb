import AboutHero from "../components/sections/AboutHero";
import AboutIntro from "../components/sections/AboutIntro";
import AboutMission from "../components/sections/AboutMission";
import AboutTechnologies from "../components/sections/AboutTechnologies";
// import AboutBreakImage from "../components/sections/AboutBreakImage";
// import AboutTeam from "../components/sections/AboutTeam";
// import AboutTestimonials from "../components/sections/AboutTestimonials";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <AboutIntro />
            <AboutMission />
            <AboutTechnologies />
            {/* <AboutBreakImage /> */}
            {/* <AboutTeam /> */}
            {/* <AboutTestimonials /> */}
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
