import { ABOUT_CONTENT } from "../../content/about";

export default function AboutBreakImage() {
    const { breakImage } = ABOUT_CONTENT;

    return (
        <section className="relative h-64 md:h-96 lg:h-[600px] overflow-hidden">
            <div className="w-full h-full">
                <img
                    src={breakImage.src}
                    alt={breakImage.alt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
        </section>
    );
}
