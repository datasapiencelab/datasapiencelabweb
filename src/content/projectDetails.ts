export type ProjectDetail = {
    id: string;
    slug: string;
    title: string;
    accent: string;
    description: {
        line1: string;
        line2?: string;
    };
    year: string;
    industry: string;
    services: string[];
    timeline: string;
    hero: {
        image: string;
    };
    challenge: {
        title: string;
        description: string[];
        image: string;
    };
    keyFeatures: {
        features: {
            title: string;
            description: string;
        }[];
    };
    gallery: {
        image: string;
    };
    result: {
        title: string;
        description: string[];
    };
};

// For synchronous access, we load the data from JSON file
// This can be replaced with API call later
import projectDetailsData from "../data/projectDetails.json";
export const PROJECT_DETAILS: Record<string, ProjectDetail> =
    projectDetailsData as Record<string, ProjectDetail>;

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
    return PROJECT_DETAILS[slug];
}

// Helper function to get all projects as array
export function getAllProjects(): ProjectDetail[] {
    return Object.values(PROJECT_DETAILS);
}

// Helper function to get related projects (excluding current)
export function getRelatedProjects(
    currentSlug: string,
    limit: number = 4,
): ProjectDetail[] {
    const allProjects = getAllProjects();
    return allProjects
        .filter((project) => project.slug !== currentSlug)
        .slice(0, limit);
}
