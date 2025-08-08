// import { Resume } from "./types";

import { Resume } from "./types"

const summaryV2 = [
    "Backend developer specializing in Node.js and TypeScript, focused on building scalable APIs, integrating databases, and delivering reliable backend systems.",
    "Brings a unique combination of technical skills, multilingual communication (French, English, Arabic), and business insight from ecommerce and customer support.",
    "Passionate about clean code, problem-solving, and creating real-world solutions."
]

const professionalExperiences: Resume['experiences'] = [
    {
        title: "Freelance Backend Developer",
        office: 'Remote',
        time: '2023 - Present',
        content: [
            'Designed and developed RESTful APIs with Node.js, TypeScript, and Express.',
            'Built small-scale ecommerce and inventory systems with PostgreSQL and MongoDB.',
            'Integrated authentication (JWT) and third-party APIs (payment, shipping).',
            'Deployed apps on Vercel and Render with Git version control.',
        ],
    },
    {
        title: "Live Chat Support Specialist",
        office: "Remote",
        organisation: "Yango",
        time: "Oct 2023 - Apr 2025",
        content: [
            'Handled multilingual (French/English/Arabic) customer support for ride-hailing and delivery services.',
            'Collaborated with technical teams to troubleshoot and resolve app and backend-related issues.',
            'Maintained high satisfaction scores in a fast-paced support environment.'
        ]
    },
    {
        title: "Content Moderator",
        office: "Hybrid",
        organisation: "Majorel",
        time: "Dec 2019 - Dec 2022",
        content: [
            'Moderated Instagram and Facebook content according to community guidelines'
        ]
    },
    {
        title: "Ecommerce Entrepreneur",
        time: "2017 - 2019",
        content: [
            'Managed dropshipping and local ecommerce stores.',
            'Oversaw product sourcing, marketing campaigns, and payment integrations.'
        ]
    },
]

const education: Resume['educations'] = [
    {
        title: "Backend Development Program (Python)",
        time: "2025",
        org: "ALX Africa",
        content: [
            "Completed intensive program covering backend fundamentals, API design, databases, and deployment.",
            "Built and deployed multiple backend projects during training.",
        ]
    },
    {
        title: "Self-Directed Backend Development Track (JavaScript/TypeScript)",
        time: "2023–2025",
        content: [
            "Studied and applied Node.js, Express, Next.js, PostgreSQL, and MongoDB through real projects.",
            "Focused on REST API development, authentication, and deployment workflows."
        ],
    },
    {
        title: "Continuous Learning",
        content: [
            "Courses from freeCodeCamp, The Odin Project, and JavaScript Mastery.",
            "Hands-on work in ecommerce, inventory management systems, and API integration."
        ]
    }
]

const skills : Resume['skills'] = [
    { title: "Programming", content: ['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js']},
    { title: "Databases", content: ['PostgreSQL', 'MySQL', 'MongoDB']},
    { title: "Tools", content: ['Git', 'Postman', 'Vercel', 'Render']},
    { title: "APIs", content: ['REST APIs', 'JWT Authentication', 'OAuth basics']},
    { title: "Other", content: ['Digital marketing', 'Ecommerce platforms']},
    { title: "Languages", content: ['French (Native)', 'Arabic (Native)', 'English (Advanced)', 'Italian (Beginner)']},
]
export default {
    summary: "Backend developer specialized in Node.js and TypeScript, with experience designing REST APIs, integrating databases, and deploying backend services. Strong problem-solving skills from customer-facing roles and a background in ecommerce. Passionate about clean code, scalable architecture, and delivering real-world solutions.",
    experiences: professionalExperiences,
    educations: education,
    skills: skills
} as Resume