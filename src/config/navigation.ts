// Navigation configuration
export interface NavItem {
    label: string;
    path: string;
    isExternal?: boolean;
}

// Main navigation items (shown in navbar/sidebar)
export const mainNavItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
];

// Additional pages (not in main nav)
export const additionalNavItems: NavItem[] = [
    { label: "Expertise", path: "/expertise" },
    { label: "Pricing", path: "/pricing" },
    { label: "FAQs", path: "/faqs" },
];

// All navigation items combined
export const allNavItems: NavItem[] = [...mainNavItems, ...additionalNavItems];
