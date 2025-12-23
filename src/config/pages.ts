// Page configuration - defines which sections appear on each page

export interface PageConfig {
    title: string;
    description: string;
    sections: string[];
}

export const pageConfigs: Record<string, PageConfig> = {
    home: {
        title: "Home - Data Sapience Lab",
        description: "Smart Solutions for Data-Driven Growth",
        sections: [
            "Hero",
            "About",
            "Services",
            "Projects",
            "Principles",
            "Process",
            "WhySection",
            "PricingSection",
            "StoriesSection",
            "InquiryFormSection",
            "FAQSection",
            "ContactSocialSection",
        ],
    },
    about: {
        title: "About - Data Sapience Lab",
        description: "Learn more about Data Sapience Lab",
        sections: ["About", "Principles", "StoriesSection"],
    },
    projects: {
        title: "Projects - Data Sapience Lab",
        description: "Our work and case studies",
        sections: ["Projects", "StoriesSection"],
    },
    career: {
        title: "Career - Data Sapience Lab",
        description: "Join our team",
        sections: ["InquiryFormSection", "ContactSocialSection"],
    },
    contact: {
        title: "Contact - Data Sapience Lab",
        description: "Get in touch with us",
        sections: ["InquiryFormSection", "ContactSocialSection"],
    },
    expertise: {
        title: "Expertise - Data Sapience Lab",
        description: "Our services and expertise",
        sections: ["Services", "Process", "WhySection"],
    },
    pricing: {
        title: "Pricing - Data Sapience Lab",
        description: "Our pricing plans",
        sections: ["PricingSection", "FAQSection"],
    },
    faqs: {
        title: "FAQs - Data Sapience Lab",
        description: "Frequently asked questions",
        sections: ["FAQSection", "ContactSocialSection"],
    },
};
