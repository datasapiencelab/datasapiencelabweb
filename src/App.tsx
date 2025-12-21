import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Principles from './components/sections/Principles';
import { Process } from './components/sections/Process';
import WhySection from './components/sections/WhySection';
import PricingSection from './components/sections/PricingSection';
import StoriesSection from './components/sections/StoriesSection';
import InquiryFormSection from './components/sections/InquiryFormSection';
import FAQSection from './components/sections/FAQSection';
import ContactSocialSection from './components/sections/ContactSocialSection';
import Footer from './components/sections/Footer';

function App() {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Principles />
            <Process />
            <WhySection />
            <PricingSection />
            <StoriesSection />
            <InquiryFormSection />
            <FAQSection />
            <ContactSocialSection />
            <Footer />
        </div>
    );
}

export default App;