import CareerHero from "../components/sections/CareerHero";
import CareerValues from "../components/sections/CareerValues";
import CareerOpenings from "../components/sections/CareerOpenings";
import CareerGallery from "../components/sections/CareerGallery";
import ContactInfo from "../components/sections/ContactInfo";
import { CAREER_CONTENT } from "../content/career";

export default function CareerPage() {
    return (
        <div className="w-full">
            <CareerHero
                titleLines={CAREER_CONTENT.hero.titleLines}
                description={CAREER_CONTENT.hero.description}
                image={CAREER_CONTENT.hero.image}
            />

            <CareerValues
                kicker={CAREER_CONTENT.values.kicker}
                headingPrefix={CAREER_CONTENT.values.headingPrefix}
                headingAccent={CAREER_CONTENT.values.headingAccent}
                cards={CAREER_CONTENT.values.cards}
                icons={CAREER_CONTENT.values.icons}
            />

            <CareerOpenings openings={CAREER_CONTENT.openings} />

            <CareerGallery images={CAREER_CONTENT.gallery.images} />

            <ContactInfo />
        </div>
    );
}
