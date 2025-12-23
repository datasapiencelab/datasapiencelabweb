export type ServiceItem = {
    number: string;
    title: string;
};

export type ServiceTag = {
    label: string;
};

export type ProjectItem = {
    title: string;
    tags: string[];
    image: string;
};

export type PrincipleCard = {
    key: string;
    title: string;
    description: string;
};

export type ProcessStep = {
    title: string;
    description: string;
};

export type Stat = {
    number: string;
    label: string;
};

export type HomePageContent = {
    hero: {
        video: {
            src: string;
        };
        title: {
            line1: string;
            accent1: string;
            line2: string;
        };
        description: {
            line1: string;
            line2: string;
            line3: string;
        };
        services: ServiceItem[];
        cta: {
            text: string;
        };
    };
    about: {
        kicker: string;
        yearRange: string;
        heading: {
            prefix: string;
            accent1: string;
            middle: string;
            suffix: string;
            accent2: string;
            accent2Text: string;
            ending: string;
        };
        image: {
            src: string;
            alt: string;
        };
        callToAction: {
            avatar: string;
            title: string;
            subtitle: string;
        };
        description: {
            prefix: string;
            highlight1: string;
            middle: string;
            highlight2: string;
            suffix: string;
        };
        cta: {
            text: string;
        };
    };
    services: {
        kicker: string;
        heading: {
            prefix: string;
            accent: string;
        };
        items: ServiceItem[];
        serviceDetail: {
            image: string;
            description: string;
            tags: ServiceTag[];
        };
        timing: {
            icon: string;
            text: string;
        };
        partners: string[];
        cta: {
            text: string;
        };
    };
    projects: {
        kicker: string;
        heading: {
            word1: string;
            accent: string;
            word2: string;
        };
        items: ProjectItem[];
        cta: {
            text: string;
        };
    };
    principles: {
        kicker: string;
        heading: {
            prefix: string;
            accent: string;
        };
        cards: PrincipleCard[];
    };
    process: {
        kicker: string;
        heading: {
            line1: string;
            accent: string;
        };
        description: string;
        steps: ProcessStep[];
        stats: Stat[];
    };
};

export const HOME_CONTENT: HomePageContent = {
    hero: {
        video: {
            src: "/assets/videos/hero-section.mp4",
        },
        title: {
            line1: "Smart Solutions",
            accent1: "For",
            line2: "Complex Data",
        },
        description: {
            line1: "We transform Complex Data",
            line2: "into Intelligent Applications - driving growth,",
            line3: "efficiency, and long-term impact.",
        },
        services: [
            { number: "(01)", title: "Machine Learning & AI" },
            { number: "(02)", title: "Data Analytics & Visualization" },
            { number: "(03)", title: "End-to-End Development" },
            { number: "(04)", title: "UI/UX Strategy" },
        ],
        cta: {
            text: "Let's Build Something Great",
        },
    },
    about: {
        kicker: "Behind the Lab",
        yearRange: "( 2023 - 2025 )",
        heading: {
            prefix: "Shaping ",
            accent1: "Intelligence",
            middle: " with design. We blend ",
            suffix: "AI, Data Science, & Human-Centered Design",
            accent2: " to build ",
            accent2Text: "Real Systems",
            ending: " that are powerful, intuitive, and ready to scale.",
        },
        image: {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
            alt: "Data Sapience Lab Team",
        },
        callToAction: {
            avatar: "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23e5e5e5'/%3E%3Cpath d='M32 20L40 44H24L32 20Z' fill='%23f2500d'/%3E%3C/svg%3E",
            title: "Book a 30‑Minute Free Call",
            subtitle: "Discuss with the team lead",
        },
        description: {
            prefix: "We solve the right problems, not just build products by ",
            highlight1: "Combining Research, Strategy, & Design",
            middle: ", we ensure your solutions are not only intuitive and scalable, but also aligned with your ",
            highlight2: "Business Goals",
            suffix: ".",
        },
        cta: {
            text: "View Our Works",
        },
    },
    services: {
        kicker: "Our Expertise.",
        heading: {
            prefix: "Transform your data Into ",
            accent: "Growth opportunities.",
        },
        items: [
            { number: "(01)", title: "Machine Learning & AI" },
            { number: "(02)", title: "Data Analytics & Visualization" },
            { number: "(03)", title: "End-to-End Development" },
            { number: "(04)", title: "UI/UX Strategy" },
        ],
        serviceDetail: {
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            description:
                "Custom AI models, automation, and chatbots that drive efficiency.",
            tags: [
                { label: "ML Models" },
                { label: "AI Chatbot" },
                { label: "NLP" },
                { label: "Automation" },
                { label: "Recommendation Engine" },
            ],
        },
        timing: {
            icon: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z' stroke='%239f9fa9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10 6V10L13 13' stroke='%239f9fa9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
            text: "2 - 4 Weeks",
        },
        partners: [
            "Adobe",
            "Trivago",
            "Puma",
            "Stripe",
            "Trivago",
            "Puma",
            "Trivago",
            "Puma",
            "Adobe",
            "Puma",
            "Stripe",
        ],
        cta: {
            text: "Start Your Data Transformation",
        },
    },
    projects: {
        kicker: "Our Work in Action",
        heading: {
            word1: "Insight",
            accent: "&",
            word2: "Innovation",
        },
        items: [
            {
                title: "NovaAi",
                tags: ["Machine Learning & AI", "UI/UX Strategy"],
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
            },
            {
                title: "Mastership",
                tags: ["UI/UX Strategy"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            },
            {
                title: "NovaAi",
                tags: ["Machine Learning & AI", "UI/UX Strategy"],
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
            },
            {
                title: "Mastership",
                tags: ["UI/UX Strategy"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
            },
            {
                title: "NovaAi",
                tags: [
                    "ML Models",
                    "AI Chatbots",
                    "Mobile App",
                    "Data Insights",
                ],
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
            },
        ],
        cta: {
            text: "View All Projects",
        },
    },
    principles: {
        kicker: "Our Approach",
        heading: {
            prefix: "Guided By ",
            accent: "Purpose & Precision",
        },
        cards: [
            {
                key: "data-driven",
                title: "Data-Driven Decisions",
                description:
                    "We let the data guide our strategy — not assumptions. Real insights lead to real results.",
            },
            {
                key: "scalable",
                title: "Scalable Architecture",
                description:
                    "Built for today, ready for tomorrow. Our systems are designed to grow with your business.",
            },
            {
                key: "revisions",
                title: "Unlimited Revisions",
                description:
                    "Your satisfaction is non-negotiable. We refine until the product is just right.",
            },
            {
                key: "human-centered",
                title: "Human-Centered Design",
                description:
                    "Technology should feel intuitive. We build interfaces people actually want to use.",
            },
            {
                key: "partnership",
                title: "Long-Term Partnership",
                description:
                    "We're not just vendors — we're invested in your success, from launch through every milestone.",
            },
        ],
    },
    process: {
        kicker: "How we execute",
        heading: {
            line1: "From idea to Impact,",
            accent: "Every step counts.",
        },
        description:
            "Our process is designed around collaboration, clarity, and momentum. We don't disappear after the kickoff — we're with you from discovery to deployment and beyond.",
        steps: [
            {
                title: "Discover & Define",
                description:
                    "We start with deep research and discussions to understand your business, users, and goals — shaping a clear problem definition and roadmap.",
            },
            {
                title: "Design & Development",
                description:
                    "Through collaborative design and agile development, we transform ideas into intuitive, scalable solutions that balance usability with performance.",
            },
            {
                title: "Integration & Testing",
                description:
                    "We integrate data, AI, and systems seamlessly while running rigorous testing to ensure stability, security, and a smooth user experience.",
            },
            {
                title: "Deployment & Maintenance",
                description:
                    "We launch your product with confidence and continue to provide updates, monitoring, and long-term support to keep it future-ready.",
            },
        ],
        stats: [
            { number: "20+", label: "Happy Clients" },
            { number: "$25m", label: "Revenue added" },
            { number: "4.8", label: "Average Rating" },
        ],
    },
} as const;
