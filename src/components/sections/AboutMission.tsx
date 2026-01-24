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
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3">
                            <Spark />
                            <span className="text-base md:text-lg text-zinc-400 font-geist">
                                {mission.kicker}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-8">
                        <p className="text-xl font-semibold md:text-2xl lg:text-3xl text-white font-geist leading-relaxed">
                            {mission.description}
                            <span className="text-[#f2500d] font-engagement">
                                {mission.descriptionAccent}
                            </span>
                            {mission.descriptionEnd}
                        </p>
                    </div>
                </div>

                {/* Mission Image and Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
                    {/* Image */}
                    <div className="lg:col-span-4">
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                            <img
                                src={mission.image}
                                alt="Mission"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Mission */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-geist mb-4 text-white">
                                {mission.mission.title}
                            </h3>
                            <p className="text-base md:text-lg text-zinc-300 font-geist leading-relaxed">
                                {mission.mission.description}
                            </p>
                        </div>

                        {/* Vision */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-geist mb-6 text-white">
                                {mission.vision.title}
                            </h3>
                            <ul className="space-y-4">
                                {mission.vision.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#f2500d] mt-2 flex-shrink-0" />
                                        <span className="text-base md:text-lg text-zinc-300 font-geist">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Client Stats Card */}
                    <div className="bg-zinc-800 rounded-lg p-6 md:p-8 flex flex-col">
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
                                    ),
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
                        <div className="border-t border-zinc-700 pt-6 mt-auto flex items-center justify-between gap-4">
                            <p className="text-3xl md:text-4xl font-engagement text-[#f2500d] flex-shrink-0">
                                98%
                            </p>
                            <p className="text-sm md:text-base text-zinc-400 font-geist text-right">
                                {mission.clientStats.description}
                            </p>
                        </div>
                    </div>

                    {/* Regular Stats Cards */}
                    {mission.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800 rounded-lg p-6 md:p-8 flex flex-col"
                        >
                            <p className="text-xs md:text-sm text-zinc-400 mb-6 font-geist">
                                {stat.label}
                            </p>
                            <div className="border-t border-zinc-700 pt-6 mt-auto flex items-center justify-between gap-4">
                                <p className="text-3xl md:text-4xl font-engagement text-[#f2500d] flex-shrink-0">
                                    {stat.value}
                                </p>
                                <p className="text-sm md:text-base text-zinc-400 font-geist text-right">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4" />
                    <div className="lg:col-span-8">
                        <p className="text-base md:text-lg mb-6 font-geist leading-relaxed">
                            <span style={{ color: "#9F9FA9" }}>
                                {mission.cta.description.part1}
                            </span>
                            <span style={{ color: "#E4E4E7" }}>
                                {mission.cta.description.part2}
                            </span>
                        </p>
                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => (window.location.href = "/contact")}
                        >
                            {mission.cta.text}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
