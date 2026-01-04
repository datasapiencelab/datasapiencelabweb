export type CareerValueCard = {
    key: "growth" | "collaboration" | "remote" | "impact";
    title: string;
    description: string;
};

export type CareerPageContent = {
    hero: {
        titleLines: {
            line1: string;
            accent: string;
            line2: string;
        };
        description: string;
        image: {
            src: string;
            alt: string;
        };
    };
    values: {
        kicker: string;
        headingPrefix: string;
        headingAccent: string;
        cards: CareerValueCard[];
        icons: Record<CareerValueCard["key"], string>;
    };
    gallery: {
        images: {
            intro: string;
            one: string;
            two: string;
            three: string;
            four: string;
        };
    };
    openings: string[];
};

export const CAREER_CONTENT: CareerPageContent = {
    hero: {
        titleLines: {
            line1: "Join the",
            accent: "Minds",
            line2: "Behind the Lab",
        },
        description:
            "We're building data-driven products that shape the future of AI, analytics, and digital experiences. If you're curious, driven, and collaborative, we'd love to work with you.",
        image: {
            src: "/assets/images/career/hero.png",
            alt: "Team working together",
        },
    },
    values: {
        kicker: "A Place to Grow",
        headingPrefix:
            "At Data Sapience Lab, we believe innovation happens when",
        headingAccent: "Smart, Curious People Come Together.",
        icons: {
            growth: "/assets/icons/battery-plus.svg",
            collaboration: "/assets/icons/handshake.svg",
            remote: "/assets/icons/earth.svg",
            impact: "/assets/icons/lightbulb.svg",
        },
        cards: [
            {
                key: "growth",
                title: "Growth-Focused",
                description:
                    "Learn and experiment with cutting-edge AI & ML tools.",
            },
            {
                key: "collaboration",
                title: "Collaborative",
                description:
                    "Small teams, open discussions, and shared ownership.",
            },
            {
                key: "remote",
                title: "Remote Friendly",
                description: "Work where you do your best thinking.",
            },
            {
                key: "impact",
                title: "High Impact",
                description: "Ship work that changes real outcomes.",
            },
        ],
    },
    gallery: {
        images: {
            intro: "/assets/images/career/gallery-intro.png",
            one: "/assets/images/career/gallery-1.png",
            two: "/assets/images/career/gallery-2.png",
            three: "/assets/images/career/gallery-3.png",
            four: "/assets/images/career/gallery-4.png",
        },
    },
    openings: [
        "Sr. Business Analyst",
        "UX Strategist",
        "Data Engineer",
        "Web Developer",
        "Software Quality Assurance Engineer",
        "Business Analyst",
    ],
} as const;
