import { motion } from "framer-motion";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutIntro() {
    const { intro } = ABOUT_CONTENT;

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
                    {/* Kicker */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="flex items-center gap-3">
                            <Spark />
                            <span className="text-base md:text-lg text-zinc-600 font-geist">
                                {intro.kicker}
                            </span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-8"
                    >
                        <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-geist leading-relaxed">
                            {intro.description}
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
                    <div className="lg:col-span-4" />
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {intro.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + index * 0.1,
                                }}
                            >
                                <p className="text-base md:text-lg text-zinc-600 font-geist leading-relaxed">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Line with Sparks */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-4 mb-12 md:mb-16"
                >
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                    <div className="flex-1 h-px bg-zinc-200" />
                    <Spark />
                </motion.div>

                {/* CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="lg:col-span-8"
                    >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl text-zinc-900 font-geist mb-8">
                            {intro.cta.text}
                        </h3>
                        <Button variant="primary" size="large">
                            Get in touch
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
