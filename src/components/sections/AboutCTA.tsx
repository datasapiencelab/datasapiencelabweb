import Button from "../ui/Button";
import { HOME_CONTENT } from "../../content/home";

export default function AboutCTA() {
    const { about } = HOME_CONTENT;

    return (
        <section className="relative bg-zinc-100 z-20 px-6 md:px-16 lg:px-28 pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    {/* Team Image */}
                    <div className="relative max-w-4xl w-full">
                        <div className="bg-zinc-100 p-4 md:p-7 border-4 md:border-8 border-white">
                            <img
                                src={about.image.src}
                                alt={about.image.alt}
                                className="w-full h-64 md:h-96 lg:h-[652px] object-cover"
                            />
                            {/* CTA Button Overlay */}
                            <div className="flex justify-center mt-3 md:mt-5">
                                <div className="bg-white rounded-full p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-lg max-w-full">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                                        <img
                                            src={about.callToAction.avatar}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="pr-2 md:pr-4">
                                        <h3 className="text-sm md:text-lg lg:text-h6 font-semibold text-neutral-primary">
                                            {about.callToAction.title}
                                        </h3>
                                        <p className="text-xs md:text-base lg:text-body-lg text-neutral-tertiary">
                                            {about.callToAction.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description and CTA */}
                    <div className="text-center max-w-4xl px-4">
                        <p className="text-lg md:text-xl lg:text-h5 font-medium text-neutral-primary mb-6 md:mb-8 leading-relaxed">
                            <span className="text-neutral-disable">
                                {about.description.prefix}
                            </span>
                            <span className="text-neutral-primary">
                                {about.description.highlight1}
                            </span>
                            <span className="text-neutral-disable">
                                {about.description.middle}
                            </span>
                            <span className="text-neutral-primary">
                                {about.description.highlight2}
                            </span>
                            <span className="text-neutral-disable">
                                {about.description.suffix}
                            </span>
                        </p>

                        <Button variant="primary" size="large">
                            {about.cta.text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
