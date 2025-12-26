import { motion } from "framer-motion";
import Spark from "../ui/Spark";
import Button from "../ui/Button";
import { ABOUT_CONTENT } from "../../content/about";

export default function AboutMission() {
    const { mission } = ABOUT_CONTENT;

    return (
        <section className="bg-zinc-900 text-white py-16 md:py-24 lg:py-32 px-6 md:px-16 lg:px-28">
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
                            <span className="text-base md:text-lg text-zinc-400 font-geist">
                                {mission.kicker}
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
                        <p className="text-xl md:text-2xl lg:text-3xl text-white font-geist leading-relaxed">
                            {mission.description}
                        </p>
                    </motion.div>
                </div>

                {/* Mission Image and Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4"
                    >
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <img
                                src={mission.image}
                                alt="Mission"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Mission & Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 space-y-12"
                    >
                        {/* Mission */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-engagement mb-4 text-[#f2500d]">
                                {mission.mission.title}
                            </h3>
                            <p className="text-base md:text-lg text-zinc-300 font-geist leading-relaxed">
                                {mission.mission.description}
                            </p>
                        </div>

                        {/* Vision */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-engagement mb-6 text-[#f2500d]">
                                {mission.vision.title}
                            </h3>
                            <ul className="space-y-4">
                                {mission.vision.points.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.1 + index * 0.1,
                                        }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#f2500d] mt-2 flex-shrink-0" />
                                        <span className="text-base md:text-lg text-zinc-300 font-geist">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Client Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-zinc-800 rounded-lg p-6 md:p-8"
                    >
                        <div className="mb-6">
                            <div className="flex items-center -space-x-2 mb-4">
                                {mission.clientStats.avatars.map(
                                    (avatar, index) => (
                                        <div
                                            key={index}
                                            className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden"
                                        >
                                            <img
                                                src={avatar}
                                                alt={`Client ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )
                                )}
                                <div className="w-10 h-10 rounded-full border-2 border-zinc-800 bg-zinc-700 flex items-center justify-center text-sm font-geist">
                                    {mission.clientStats.count}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-zinc-400 mb-1">
                                    {mission.clientStats.ratingLabel}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-geist">
                                        {mission.clientStats.rating}
                                    </span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-[#f2500d]"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-zinc-700 pt-6">
                            <p className="text-3xl md:text-4xl font-engagement text-[#f2500d] mb-2">
                                100+
                            </p>
                            <p className="text-sm md:text-base text-zinc-400 font-geist">
                                {mission.clientStats.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Regular Stats Cards */}
                    {mission.stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 + index * 0.1,
                            }}
                            className="bg-zinc-800 rounded-lg p-6 md:p-8"
                        >
                            <p className="text-xs md:text-sm text-zinc-400 mb-6 font-geist">
                                {stat.label}
                            </p>
                            <div className="border-t border-zinc-700 pt-6">
                                <p className="text-3xl md:text-4xl font-engagement text-[#f2500d] mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-sm md:text-base text-zinc-400 font-geist">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8"
                    >
                        <p className="text-base md:text-lg text-zinc-300 mb-6 font-geist leading-relaxed">
                            {mission.cta.description}
                        </p>
                        <Button variant="primary" size="large">
                            {mission.cta.text}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
