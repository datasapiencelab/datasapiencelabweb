// Resource configuration for WhySection component
// Change these URLs to update the images used in the component

export const WHY_SECTION_RESOURCES = {
    // Images - using high-quality stock photos from Unsplash
    images: {
        // Human-centered design background - represents collaboration and user focus
        humanCenteredDesign: "assets/images/home/Human-Centered Design.jpg",

        // Data analytics background - represents charts and data visualization
        dataAnalytics: "assets/images/home/Data-Driven Decisions.jpg",

        // Alternative options (uncomment to use):
        // humanCenteredDesign: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop&crop=center", // team collaboration
        // dataAnalytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center", // analytics dashboard
    },

    // Text content
    content: {
        header: {
            subtitle: "Why Data Sapience Lab",
            title: "Empowering businesses",
            titleAccent: "Data-Driven innovation.",
        },

        cards: {
            flexiblePricing: {
                accent: "Flexible",
                title: "Pricing",
                description: "Pricing plans that adapt to your budget and scope.",
            },

            fasterResults: {
                number: "3X",
                title: "Faster Results",
                description: "Our clients streamline decision-making and cut project delivery time by up to 70%.",
            },

            transparency: {
                number: "100",
                symbol: "%",
                title: "Transparency.",
                description: "You'll always know what we're building, why, and how it benefits your business.",
            },

            realTimeSupport: {
                title: "Real-time support",
                description: "Our team is always just a message away — real humans, real answers.",
            },

            strategicSolutions: {
                title: "Strategic solutions for",
                titleAccent: "long lasting impact.",
                features: [
                    "Data-Driven Decisions",
                    "Scalable Architecture",
                    "Timely delivery",
                    "Unlimited Revisions",
                    "Post-Launch support"
                ],
            },
        },

        cta: {
            buttonText: "Get Your Free Project Quote",
        },

        // Chat simulation content
        chat: {
            userMessage1: "Can we update the layout before launch?",
            botGreeting: "Hi there",
            botResponse1: "We'll make the changes and send a quick preview",
            botResponse2: "Just updated. You should be able to see the new version on your side now.",
            userMessage2: "Amazing, thank you! You guys are fast 🙌",
            placeholder: "Type message.....",
        },
    },

    // Color scheme
    colors: {
        brand: "#f2500d",
        brandSecondary: "#7e2a0c",
        brandHover: "#d63d00",
        background: "#18181b", // zinc-950
        cardBackground: "#27272a", // zinc-900
        border: "#3f3f46", // zinc-800
        textPrimary: "#f4f4f5", // zinc-100
        textSecondary: "#d4d4d8", // zinc-200
        textTertiary: "#a1a1aa", // zinc-300
        textMuted: "#71717a", // zinc-400
        textDisabled: "#9f9fa9",
    },

    // Typography settings
    typography: {
        fontFamily: {
            primary: "Geist",
            accent: "Engagement",
        },

        sizes: {
            // Desktop
            desktop: {
                mainTitle: "60px",
                accentTitle: "72px",
                cardTitle: "24px",
                cardText: "18px",
                buttonText: "16px",
                chatText: "12px",
            },

            // Tablet
            tablet: {
                mainTitle: "44px",
                accentTitle: "52px",
                cardTitle: "20px",
                cardText: "16px",
                buttonText: "16px",
                chatText: "12px",
            },

            // Mobile
            mobile: {
                mainTitle: "28px",
                accentTitle: "32px",
                cardTitle: "18px",
                cardText: "14px",
                buttonText: "16px",
                chatText: "12px",
            },
        },
    },

    // Layout settings
    layout: {
        maxWidth: "1440px",
        padding: {
            desktop: "7rem", // px-28
            tablet: "2rem", // px-8
            mobile: "1rem", // px-4
        },

        spacing: {
            sectionPadding: {
                desktop: "8rem", // py-32
                tablet: "6rem", // py-24
                mobile: "4rem", // py-16
            },

            gridGap: {
                desktop: "2rem", // gap-8
                tablet: "1.5rem", // gap-6
                mobile: "1rem", // gap-4
            },
        },
    },
};

export default WHY_SECTION_RESOURCES;