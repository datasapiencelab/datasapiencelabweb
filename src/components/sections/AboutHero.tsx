import { motion } from "framer-motion";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutHero() {
    const { hero } = ABOUT_CONTENT;

    return (
        <section className="relative min-h-screen bg-zinc-100 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src={hero.video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/50 to-zinc-100" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 lg:px-28 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        {/* Kicker */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <Spark />
                            <span className="text-base md:text-lg text-zinc-600 font-geist">
                                {hero.kicker}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-engagement mb-8 md:mb-12"
                        >
                            <span className="text-zinc-900">
                                {hero.title.line1}{" "}
                            </span>
                            <span className="text-[#f2500d]">
                                {hero.title.accent}
                            </span>
                            <br />
                            <span className="text-zinc-900">
                                {hero.title.line2}
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-zinc-600 mb-8 md:mb-12 max-w-2xl font-geist leading-relaxed"
                        >
                            {hero.description}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button variant="primary" size="large">
                                {hero.cta.text}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Video Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 md:mt-24"
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-48 md:h-64 lg:h-80 object-cover"
                            >
                                <source src={hero.video.src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
