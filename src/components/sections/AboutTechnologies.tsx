import { motion } from "framer-motion";
import Spark from "../ui/Spark";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutTechnologies() {
    const { technologies } = ABOUT_CONTENT;

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
                                {technologies.kicker}
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
                        <p className="text-xl md:text-2xl lg:text-3xl text-zinc-900 font-geist leading-relaxed">
                            {technologies.description}
                        </p>
                    </motion.div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {technologies.logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center p-6 md:p-8 hover:border-[#f2500d]/20 hover:bg-[#f2500d]/5 transition-all duration-300"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
