import SectionKicker from "../ui/SectionKicker";

interface CareerGalleryProps {
    images: {
        one: string;
        two: string;
        three: string;
        four: string;
        intro: string;
    };
}

export default function CareerGallery({ images }: CareerGalleryProps) {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="px-6 md:px-16 lg:px-28">
                <div className="max-w-[1216px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div>
                            <SectionKicker variant="light">
                                Life at Data Sapience Lab
                            </SectionKicker>
                        </div>
                        <p className="font-geist font-medium text-h3 tracking-[-1px] text-neutral-secondary">
                            We're building more than products — we're building a
                            culture of{" "}
                            <span className="font-engagement text-brand-primary text-[48px] leading-[48px] tracking-[2px]">
                                curiosity, creativity, and continuous learning.
                            </span>
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4 bg-zinc-900 overflow-hidden">
                            <img
                                src={images.one}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:col-span-8 bg-zinc-900 overflow-hidden">
                            <img
                                src={images.two}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:col-span-7 bg-zinc-900 overflow-hidden">
                            <img
                                src={images.three}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:col-span-5 bg-zinc-900 overflow-hidden">
                            <img
                                src={images.four}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:col-span-12 bg-white overflow-hidden border border-zinc-200">
                            <img
                                src={images.intro}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
