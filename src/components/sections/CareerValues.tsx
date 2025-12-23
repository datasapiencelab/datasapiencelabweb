import SectionKicker from "../ui/SectionKicker";

interface ValueCard {
    key: string;
    title: string;
    description: string;
}

interface CareerValuesProps {
    kicker: string;
    headingPrefix: string;
    headingAccent: string;
    cards: ValueCard[];
    icons: Record<string, string>;
}

export default function CareerValues({
    kicker,
    headingPrefix,
    headingAccent,
    cards,
    icons,
}: CareerValuesProps) {
    return (
        <section className="bg-zinc-950 text-white py-24 md:py-32">
            <div className="px-6 md:px-16 lg:px-28">
                <div className="max-w-[1216px] mx-auto">
                    <div className="max-w-[700px]">
                        <SectionKicker variant="dark">{kicker}</SectionKicker>
                        <p className="mt-8 font-geist font-medium text-h3 tracking-[-1px] text-zinc-200">
                            {headingPrefix}{" "}
                            <span className="font-engagement text-brand-primary text-[48px] leading-[48px] tracking-[2px]">
                                {headingAccent}
                            </span>
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cards.map((card) => (
                            <div
                                key={card.key}
                                className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between min-h-[260px]"
                            >
                                <img
                                    src={icons[card.key]}
                                    alt=""
                                    className="w-12 h-12"
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="font-geist font-medium text-h5 tracking-[-0.25px] text-zinc-200">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 font-geist text-h6 tracking-[0.5px] text-neutral-disable">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
