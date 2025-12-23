import Button from "../ui/Button";
import Spark from "../ui/Spark";

// Placeholder video - in production this would be replaced with actual video file
const heroVideoSrc = "/assets/videos/hero-section.mp4";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full h-screen flex flex-col bg-black text-white overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover blur-sm filter"
                >
                    <source src={heroVideoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full w-full px-6 md:px-16 lg:px-28 py-0">
                <div className="flex-1 flex flex-col items-start justify-between min-h-0 pb-8 md:pb-12 lg:pb-16 pt-20">
                    {/* Main Heading */}
                    <div className="flex flex-col items-start justify-end w-full flex-1 min-h-0">
                        <div className="mb-4 md:mb-6 lg:mb-8">
                            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] font-bold text-white leading-none lg:leading-[0.9] xl:leading-[0.85] tracking-tight lg:tracking-[-6px] xl:tracking-[-8px] 2xl:tracking-[-10px] mb-0">
                                Smart Solutions
                            </h1>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 lg:gap-6 xl:gap-9 pl-0 md:pl-8 lg:pl-16 xl:pl-20 2xl:pl-24 w-full mt-1 md:mt-2">
                                <span className="font-engagement text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] text-white tracking-wider leading-none lg:leading-[0.9] xl:leading-[0.85]">
                                    For
                                </span>
                                <span className="text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[144px] font-bold text-white leading-none lg:leading-[0.9] xl:leading-[0.85] tracking-tight lg:tracking-[-6px] xl:tracking-[-8px] 2xl:tracking-[-10px]">
                                    Complex Data
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 w-full">
                        {/* Description */}
                        <div className="flex flex-col items-center relative flex-shrink-0">
                            <div className="absolute left-1 top-0.5">
                                <Spark />
                            </div>
                            <div className="text-center pl-8">
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                    We transform Complex Data
                                </p>
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px] mb-0">
                                    into Intelligent Applications - driving
                                    growth,
                                </p>
                                <p className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium text-zinc-300 leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                    efficiency, and long-term impact.
                                </p>
                            </div>
                        </div>

                        {/* Services List + CTA */}
                        <div className="flex flex-col items-end gap-4 lg:gap-6 w-full lg:w-auto flex-1 lg:flex-initial">
                            <div className="flex flex-col items-end gap-2 lg:gap-3">
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">
                                        (01)
                                    </span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                        Machine Learning & AI
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">
                                        (02)
                                    </span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                        Data Analytics & Visualization
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">
                                        (03)
                                    </span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                        End-to-End Development
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300 text-right">
                                    <span className="font-engagement text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-7 md:leading-8 lg:leading-8 xl:leading-9 tracking-[-1px]">
                                        (04)
                                    </span>
                                    <span className="text-base md:text-lg lg:text-[18px] xl:text-[20px] font-medium leading-6 md:leading-7 lg:leading-7 xl:leading-8 tracking-[0.5px]">
                                        UI/UX Strategy
                                    </span>
                                </div>
                            </div>

                            <Button variant="primary" size="large">
                                Get a Free Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
