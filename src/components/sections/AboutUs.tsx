import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Spark from "../ui/Spark";
import { HOME_CONTENT } from "../../content/home";

// Helper component for animated text segments
interface AnimatedTextProps {
    text: string;
    progress: ReturnType<typeof useTransform<number, number>>;
    startProgress: number;
    isHighlight?: boolean;
}

function AnimatedText({
    text,
    progress,
    startProgress,
    isHighlight = false,
}: AnimatedTextProps) {
    // Split text into words for individual animation
    const words = text.split(" ");
    const wordDuration = 0.03; // Each word takes 3% of the animation

    return (
        <>
            {words.map((word, index) => {
                const wordStart = startProgress + index * wordDuration;
                const wordEnd = wordStart + wordDuration;

                return (
                    <AnimatedWord
                        key={index}
                        word={word}
                        progress={progress}
                        startProgress={wordStart}
                        endProgress={wordEnd}
                        isHighlight={isHighlight}
                        isLast={index === words.length - 1}
                    />
                );
            })}
        </>
    );
}

interface AnimatedWordProps {
    word: string;
    progress: ReturnType<typeof useTransform<number, number>>;
    startProgress: number;
    endProgress: number;
    isHighlight?: boolean;
    isLast?: boolean;
}

function AnimatedWord({
    word,
    progress,
    startProgress,
    endProgress,
    isLast = false,
}: AnimatedWordProps) {
    // All animated text starts gray and transitions to black
    const color = useTransform(
        progress,
        [startProgress, endProgress],
        ["#a1a1aa", "#18181b"]
    );

    return (
        <motion.span style={{ color }}>
            {word}
            {!isLast && " "}
        </motion.span>
    );
}

export default function AboutUs() {
    const { about } = HOME_CONTENT;
    const sectionRef = useRef<HTMLElement>(null);

    // Main scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Phase 2: Header animation - moves up and becomes sticky
    const headerY = useTransform(scrollYProgress, [0.05, 0.2], ["0vh", "-10vh"]);

    const headerOpacity = useTransform(
        scrollYProgress,
        [0.05, 0.15],
        [1, 1]
    );

    // Phase 2-5: Paragraph positioning
    // Controls the paragraph's vertical position relative to its sticky container
    const paragraphScale = useTransform(
        scrollYProgress,
        [0.1, 0.2],
        [0.95, 1]
    );

    // Phase 4: Text color fill progress
    const textColorProgress = useTransform(
        scrollYProgress,
        [0.25, 0.95],
        [0, 1]
    );

    // Phase 5: Paragraph stays visible
    const paragraphOpacity = 1;

    // Phase 6: CTA is in normal document flow below the sticky section
    // No animation needed - it scrolls naturally

    // Build the heading content with proper segment tracking
    // Segments: prefix, accent1 (red), " with design.", middle, suffix (highlight), accent2, accent2Text (red), ending
    const headingSegments = [
        { text: about.heading.prefix, isRed: false, isHighlight: false }, // "Shaping "
        { text: about.heading.accent1, isRed: true, isHighlight: false }, // "Intelligence" (red)
        { text: " with design.", isRed: false, isHighlight: false },
        { text: " We blend ", isRed: false, isHighlight: false },
        { text: about.heading.suffix, isRed: false, isHighlight: true }, // "AI, Data Science, & Human-Centered Design" (highlight)
        { text: about.heading.accent2, isRed: false, isHighlight: false }, // " to build "
        { text: about.heading.accent2Text, isRed: true, isHighlight: false }, // "Real Systems" (red)
        { text: about.heading.ending, isRed: false, isHighlight: false }, // " that are powerful..."
    ];

    // Calculate start progress for each segment
    let currentProgress = 0;
    const segmentsWithProgress = headingSegments.map((segment) => {
        const wordCount = segment.text.split(" ").filter((w) => w).length;
        const segmentDuration = wordCount * 0.03;
        const startProgress = currentProgress;
        currentProgress += segmentDuration;
        return { ...segment, startProgress };
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-zinc-100 z-20"
            style={{ height: "350vh" }}
        >
            {/* Sticky container that holds all animated content - z-10 to stay above CTA */}
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center z-10">
                {/* Background layer */}
                <div className="absolute inset-0 bg-zinc-100" />

                {/* Header Section - positioned at top */}
                <motion.div
                    className="absolute top-0 left-0 right-0 pt-32 md:pt-24 lg:pt-32 px-6 md:px-16 lg:px-28"
                    style={{
                        y: headerY,
                        opacity: headerOpacity,
                    }}
                >
                    {/* Kicker row */}
                    <div className="flex flex-row items-center justify-between mb-8 md:mb-12 gap-4 max-w-7xl mx-auto w-full">
                        <div className="flex items-center gap-2 md:gap-2.5">
                            <Spark />
                            <span className="text-sm md:text-lg lg:text-body-xl text-neutral-secondary whitespace-nowrap">
                                {about.kicker}
                            </span>
                        </div>
                        <div className="text-xs md:text-base lg:text-body-lg text-neutral-secondary whitespace-nowrap">
                            {about.yearRange}
                        </div>
                    </div>
                </motion.div>

                {/* Paragraph Section - centered in viewport */}
                <motion.div
                    className="relative px-6 md:px-16 lg:px-28"
                    style={{
                        scale: paragraphScale,
                        opacity: paragraphOpacity,
                    }}
                >


                    <div className="text-center max-w-5xl mx-auto">
                            <h2 className="text-2xl md:text-4xl lg:text-h1 font-medium leading-tight">
                                {segmentsWithProgress.map((segment, index) => {
                                    if (segment.isRed) {
                                        // Red text - always stays red
                                        return (
                                            <span
                                                key={index}
                                                className="font-engagement text-brand-primary text-3xl md:text-5xl lg:text-[72px] tracking-wide"
                                            >
                                                {segment.text}
                                            </span>
                                        );
                                    }

                                    // Animated text - transitions from gray to black
                                    return (
                                        <AnimatedText
                                            key={index}
                                            text={segment.text}
                                            progress={textColorProgress}
                                            startProgress={
                                                segment.startProgress
                                            }
                                            isHighlight={segment.isHighlight}
                                        />
                                    );
                                })}
                            </h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
