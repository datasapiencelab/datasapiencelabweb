import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Spark from "../ui/Spark";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutCTA() {
    const { hero } = ABOUT_CONTENT;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative bg-zinc-100 z-20 px-6 md:px-16 lg:px-28 pb-16 md:pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-12 md:gap-16">
                    {/* Description with Spark */}
                    <div className="text-center max-w-4xl px-4">
                        <div className="flex items-start justify-center gap-3 mb-8">
                            <Spark />
                            <p className="text-lg md:text-xl lg:text-2xl font-geist text-zinc-900 leading-relaxed text-left max-w-2xl">
                                We help businesses move from
                                <br />
                                Raw Datasets to powerful, intuitive applications
                                <br />
                                designed to grow with confidence.
                            </p>
                        </div>
                    </div>

                    {/* Team Image */}
                    <div className="relative max-w-4xl w-full">
                        <div className="bg-zinc-100 p-4 md:p-7 border-4 md:border-8 border-white">
                            <img
                                src={hero.heroImage}
                                alt="Data Sapience Lab Team"
                                className="w-full h-64 md:h-96 lg:h-[652px] object-cover"
                            />
                            {/* CTA Button Overlay */}
                            <div className="flex justify-center mt-3 md:mt-5">
                                <motion.div
                                    className="bg-white rounded-full p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-lg max-w-full cursor-pointer overflow-hidden"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    initial={false}
                                    animate={{
                                        paddingLeft: isHovered ? "12px" : "8px",
                                        paddingRight: isHovered
                                            ? "24px"
                                            : "12px",
                                    }}
                                    transition={{
                                        duration: 0.1,
                                        ease: "easeOut",
                                    }}
                                >
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                                        <img
                                            src="/assets/images/logo-transparent.png"
                                            alt="Data Sapience Lab Logo"
                                            className="w-10 h-10 md:w-14 md:h-14 object-contain"
                                        />
                                    </div>

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{
                                                    width: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    width: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    width: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                }}
                                                className="flex-shrink-0 flex items-center"
                                            >
                                                <img
                                                    src="/assets/icons/phone-circlular.svg"
                                                    alt="Phone Icon"
                                                    className="w-12 h-12 md:w-16 md:h-16"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="pr-2 md:pr-4">
                                        <h3 className="text-sm md:text-lg lg:text-h6 font-semibold text-neutral-primary whitespace-nowrap">
                                            {hero.cta.text}
                                        </h3>
                                        <p className="text-xs md:text-base lg:text-body-lg text-neutral-tertiary whitespace-nowrap">
                                            Let's discuss your project
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Description and CTA removed from bottom */}
                </div>
            </div>
        </section>
    );
}
