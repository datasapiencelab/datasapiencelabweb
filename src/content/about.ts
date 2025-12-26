export type TeamMember = {
    name: string;
    role: string;
    image: string;
};

export type Testimonial = {
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    feedback: string;
};

export type Stat = {
    value: string;
    label: string;
    description: string;
};

export const ABOUT_CONTENT = {
    hero: {
        title: {
            line1: "The story",
            accent: "Behind",
            line2: "Data Sapience Lab",
        },
        kicker: "Where data meets intelligence",
        description:
            "At the core of every innovation lies curiosity and a vision for the future. Our journey started with a simple belief: that data, when combined with intelligence and creativity, can solve any challenge.",
        cta: {
            text: "Get in touch",
        },
        video: {
            src: "/assets/videos/home/hero-video.mp4",
        },
    },
    intro: {
        kicker: "About us",
        description:
            "At Data Sapience Lab, we specialize in turning data into strategy and AI into action. Our team builds intelligent, scalable solutions that help businesses make faster, smarter decisions.",
        stats: [
            {
                description:
                    "At our core, we do one thing exceptionally well: simplify complexity. Whether it's unstructured data, scattered workflows, or underperforming systems.",
            },
            {
                description:
                    "We cut through the noise to deliver clarity, efficiency, and results that last. Every project is different, but our approach stays the same—insight-led, human-centered, and built to scale.",
            },
        ],
        cta: {
            text: "Discover what we can build together",
        },
    },
    mission: {
        kicker: "What drives us",
        description:
            "We don't just build systems—we solve problems. By combining insight, empathy, and engineering excellence, we create solutions that perform where it matters most.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop",
        mission: {
            title: "Mission",
            description:
                "To simplify complexity through data, AI, and engineering, building intelligent solutions that empower businesses to innovate, grow, and thrive in the digital era.",
        },
        vision: {
            title: "Vision",
            points: [
                "Insight-Led Strategy, aligns with real business needs.",
                "Human-Centered Design, balances form and function.",
                "Agile Development for faster, smarter delivery.",
                "Scalable Systems built for long-term success.",
            ],
        },
        stats: [
            {
                value: "5+",
                label: "Years of experience",
                description:
                    "Shaped by real projects, real challenges, real results.",
            },
            {
                value: "50+",
                label: "Projects delivered",
                description:
                    "Shaped by real projects, real challenges, real results.",
            },
        ],
        clientStats: {
            avatars: [
                "https://i.pravatar.cc/150?img=1",
                "https://i.pravatar.cc/150?img=2",
                "https://i.pravatar.cc/150?img=3",
                "https://i.pravatar.cc/150?img=4",
            ],
            count: "5+",
            rating: "4.8",
            ratingLabel: "Highly recommended",
            description: "Partnerships that last through performance",
        },
        cta: {
            text: "Let's build together",
            description:
                "At Data Sapience Lab, Every breakthrough starts with collaboration. we believe in partnering closely with clients to transform raw ideas into meaningful outcomes.",
        },
    },
    technologies: {
        kicker: "Our Stack",
        description:
            "We leverage cutting-edge tools and frameworks to build scalable, high-performance solutions tailored to your unique business needs.",
        logos: [
            {
                name: "TensorFlow",
                src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
            },
            {
                name: "MongoDB",
                src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
            },
            {
                name: "Scikit-Learn",
                src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            },
            {
                name: "Python",
                src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
            },
            {
                name: "OpenCV",
                src: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
            },
            {
                name: "Node.js",
                src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
            },
            {
                name: "PyTorch",
                src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
            },
            {
                name: "Vue.js",
                src: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
            },
            {
                name: "React",
                src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
            },
            {
                name: "FastAPI",
                src: "https://www.vectorlogo.zone/logos/fastapi/fastapi-icon.svg",
            },
            {
                name: "Docker",
                src: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
            },
            {
                name: "PostgreSQL",
                src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
            },
        ],
    },
    breakImage: {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop",
        alt: "Data Sapience Lab workspace",
    },
    team: {
        kicker: "Our Team",
        description:
            "Meet the minds behind the mission—talented, driven, and committed to delivering excellence.",
        cta: {
            text: "Join the team",
        },
        members: [
            {
                name: "Robert Brown",
                role: "Chief Executive Officer",
                image: "https://i.pravatar.cc/400?img=12",
            },
            {
                name: "Christopher Garcia",
                role: "Software project manager",
                image: "https://i.pravatar.cc/400?img=13",
            },
            {
                name: "Michael Smith",
                role: "Front End Developer",
                image: "https://i.pravatar.cc/400?img=14",
            },
            {
                name: "Jennifer Wilson",
                role: "Product designer",
                image: "https://i.pravatar.cc/400?img=5",
            },
            {
                name: "Joseph Jones",
                role: "Web developer",
                image: "https://i.pravatar.cc/400?img=15",
            },
            {
                name: "Angela Rodriguez",
                role: "Human Resource Manager",
                image: "https://i.pravatar.cc/400?img=9",
            },
        ],
    },
    testimonials: {
        kicker: "Success Stories",
        heading: "What our clients say about working with us",
        avatars: [
            "https://i.pravatar.cc/150?img=16",
            "https://i.pravatar.cc/150?img=17",
            "https://i.pravatar.cc/150?img=18",
            "https://i.pravatar.cc/150?img=19",
            "https://i.pravatar.cc/150?img=20",
        ],
        count: "5+",
        description:
            "Every project begins with trust. Here's what our clients have to say about their experience working with Data Sapience Lab.",
        cta: {
            text: "Start your project",
        },
        items: [
            {
                name: "Sarah Johnson",
                role: "CTO",
                company: "TechCorp Inc.",
                image: "https://i.pravatar.cc/150?img=21",
                rating: 5,
                feedback:
                    "Working with Data Sapience Lab transformed our approach to data analytics. Their team delivered a solution that exceeded our expectations and continues to drive business value.",
            },
            {
                name: "Michael Chen",
                role: "Product Manager",
                company: "Innovation Labs",
                image: "https://i.pravatar.cc/150?img=22",
                rating: 5,
                feedback:
                    "The team's expertise in AI and machine learning helped us launch our product ahead of schedule. Highly recommend their services!",
            },
            {
                name: "Emily Rodriguez",
                role: "Director of Operations",
                company: "Global Solutions Ltd.",
                image: "https://i.pravatar.cc/150?img=23",
                rating: 5,
                feedback:
                    "Data Sapience Lab doesn't just build software—they solve problems. Their collaborative approach and technical excellence made all the difference.",
            },
            {
                name: "David Thompson",
                role: "CEO",
                company: "StartupX",
                image: "https://i.pravatar.cc/150?img=24",
                rating: 4,
                feedback:
                    "From concept to deployment, the team guided us through every step. Their insights and execution were top-notch.",
            },
            {
                name: "Lisa Anderson",
                role: "VP Engineering",
                company: "DataFlow Systems",
                image: "https://i.pravatar.cc/150?img=25",
                rating: 5,
                feedback:
                    "Professional, responsive, and incredibly skilled. Data Sapience Lab built a scalable solution that has become integral to our operations.",
            },
            {
                name: "James Wilson",
                role: "Chief Innovation Officer",
                company: "FutureTech",
                image: "https://i.pravatar.cc/150?img=26",
                rating: 5,
                feedback:
                    "Their ability to translate complex requirements into elegant solutions is remarkable. Best tech partner we've worked with.",
            },
            {
                name: "Maria Garcia",
                role: "Head of Data Science",
                company: "Analytics Pro",
                image: "https://i.pravatar.cc/150?img=27",
                rating: 5,
                feedback:
                    "The team's deep understanding of both business and technology made our AI implementation seamless and successful.",
            },
            {
                name: "Robert Lee",
                role: "Founder",
                company: "SmartTech Ventures",
                image: "https://i.pravatar.cc/150?img=28",
                rating: 5,
                feedback:
                    "Data Sapience Lab delivered beyond expectations. Their work ethic, expertise, and commitment to quality are exceptional.",
            },
        ],
    },
    inquiry: {
        kicker: "Let's talk",
        heading:
            "Have a project in mind? Reach out and let's turn your vision into reality.",
        steps: [
            {
                number: "(01)",
                title: "Quick Response",
                description: "Get a reply within 24 hours of your inquiry.",
            },
            {
                number: "(02)",
                title: "Discovery Chat",
                description:
                    "We'll discuss your goals, challenges, and vision.",
            },
            {
                number: "(03)",
                title: "Roadmap & Kickoff",
                description:
                    "Receive a tailored plan and timeline to bring your project to life.",
            },
        ],
        form: {
            namePlaceholder: "Your name",
            emailPlaceholder: "Your email address",
            messagePlaceholder: "Tell us about your project...",
            submitText: "Send message",
        },
    },
    contact: {
        heading: "Stay Connected With Us",
        description:
            "Whether you have a question, want to start a project, or just want to connect—we're here. Let's build something amazing together.",
        cta: {
            text: "info@datasapiencelab.com",
        },
        email: "info@datasapiencelab.com",
        phone: "+1 (555) 123-4567",
        image: {
            src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=800&fit=crop",
            alt: "Data Sapience Lab office",
        },
        socials: [
            {
                icon: "linkedin",
                label: "LinkedIn",
                url: "https://linkedin.com/company/datasapiencelab",
            },
            {
                icon: "github",
                label: "Github",
                url: "https://github.com/datasapiencelab",
            },
            {
                icon: "facebook",
                label: "Facebook",
                url: "https://facebook.com/datasapiencelab",
            },
        ],
    },
    footer: {
        companyName: "Data Sapience Lab",
        description:
            "Transforming data into intelligence. Building solutions that scale.",
        newsletter: {
            heading: "Subscribe to our newsletter",
            placeholder: "Enter your email",
            buttonText: "→",
        },
        links: {
            company: {
                title: "Company",
                items: [
                    { label: "About", url: "/about" },
                    { label: "Career", url: "/career" },
                    { label: "Services", url: "/expertise" },
                    { label: "Pricing", url: "/pricing" },
                    { label: "Contact", url: "/contact" },
                ],
            },
            resources: {
                title: "Resources",
                items: [
                    { label: "Documentation", url: "/docs" },
                    { label: "Projects", url: "/projects" },
                    { label: "Blog", url: "/blog" },
                    { label: "Case Studies", url: "/case-studies" },
                    { label: "Terms & Conditions", url: "/terms" },
                ],
            },
        },
        copyright: "© 2025 Data Sapience Lab. All rights reserved.",
    },
};
