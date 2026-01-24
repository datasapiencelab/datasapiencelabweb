import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import AboutCTA from "../components/sections/AboutCTA";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Principles from "../components/sections/Principles";
import { Process } from "../components/sections/Process";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/sections/ContactForm";
import FAQ from "../components/sections/FAQ";
import ContactInfo from "../components/sections/ContactInfo";

export default function HomePage() {
    return (
        <div className="relative">
            <Hero />
            <AboutUs />
            <AboutCTA />
            <Services />
            <Projects />
            <Principles /> {/* Our Expertise */}
            <Process /> {/* How We Execute */}
            <WhyChooseUs /> {/* Why Data Sapience Lab  */}
            <Pricing />
            <FAQ />
            <Testimonials />
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
