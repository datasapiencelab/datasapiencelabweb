import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";

export default function ContactPage() {
    return (
        <div className="pt-16 md:pt-20 lg:pt-24">
            <ContactForm />
            <ContactInfo />
        </div>
    );
}
