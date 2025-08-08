// import { Profile, Project, Resume } from "./types";

// const profile: Profile = {
//   firstName: "Naoufal",
//   lastName: "Badou",
//   aka: "0x8480u",
//   // roles: ["Web Developer", "Backend Specialist"],
//   roles: ['Backend Developer who enjoys clean code, fast systems & good coffee.'],
//   description: [
//     'Hey! I’m Naoufal — a backend dev who loves turning complex problems into simple, scalable solutions.',
//     'I work mostly with TypeScript, Node.js, and databases, building out the guts of web apps — APIs, services, auth flows, and all the logic that keeps things running smoothly behind the scenes.',
//     'Over the past couple of years, I’ve built RESTful APIs, managed gnarly database schemas, and helped ship features that actually scale. I’m all about performance, reliability, and code that won’t fall apart in production.',
//     'Whether you’re a founder looking to bring an idea to life, a team that needs solid backend help, or another dev just nerding out on architecture — I’m always up for a good tech chat.',
//   ],
//   githubLink: "#",
//   linkedinLink: "#",
//   twitterLink: "#",
//   websiteLink: "#",
//   email: "badou.dev@outlook.com",
//   phone: "+212 6 00 00 00 00"
// }

// export const resume: Resume = {
//   summary: `Backend-focused JavaScript developer passionate about building scalable systems, clean APIs, and fast backend architectures. Skilled in Node.js, TypeScript, and modern tooling. I thrive in remote teams and fast-moving product environments.`,
//   experiences: [
//     {
//       title: "Senior Backend Developer",
//       organisation: "TechNova Solutions",
//       city: "Berlin",
//       country: "Germany",
//       start: 2022,
//       end: "Present",
//       period: 3,
//       contract: "Full-time",
//       office: "Remote",
//       content: [
//         "Led development of RESTful and GraphQL APIs using Node.js and Prisma.",
//         "Implemented scalable architecture for a SaaS platform handling 1M+ users.",
//         "Collaborated with frontend teams on Next.js-based web app integrations.",
//         "Mentored junior developers and improved CI/CD pipelines using GitHub Actions.",
//       ],
//       techs: ["Node.js", "Prisma", "PostgreSQL", "GraphQL", "GitHub Actions"]
//     },
//     {
//       title: "Freelance Web Developer",
//       organisation: "Various Clients",
//       city: "Casablanca",
//       country: "Morocco",
//       start: 2020,
//       end: 2022,
//       period: 2,
//       contract: "Freelance",
//       office: "Remote",
//       content: [
//         "Built backend APIs & CMS for local businesses using Express.js and MongoDB ",
//         "Deployed production apps on Vercel and DigitalOcean.",
//         "Collaborated with designers and product owners using Figma prototypes.",
//       ],
//       techs: ["Express.js", "MongoDB", "Vercel", "DigitalOcean", "Figma"]
//     },
//   ],

//   education: [
//     {
//       diploma: "Bachelor of Computer Science",
//       option: "Software Engineering",
//       school: "University of Hassan II",
//       city: "Casablanca",
//       country: "Morocco",
//       graduationYear: 2020,
//       period: 3,
//       items: [
//         "Graduated with honors.",
//         "Focused on backend development, system architecture, and databases.",
//         "Completed a final project building an internal project management tool.",
//       ]
//     }
//   ],

//   certifications: [
//     {
//       title: "JavaScript Algorithms and Data Structures",
//       issuer: "freeCodeCamp",
//       issueDate: "2021-06",
//       credentialUrl: "https://freecodecamp.org/certification/demo/javascript-algorithms",
//       description: "Completed 300+ hours of coding challenges in JavaScript fundamentals, algorithms, and data structures."
//     },
//     {
//       title: "Backend Developer Certification",
//       issuer: "Meta via Coursera",
//       issueDate: "2022-09",
//       credentialId: "ABC123-META-BE",
//       description: "Covers Express, REST APIs, databases, authentication, and deployment best practices."
//     }
//   ],

//   skills: [
//     { category: "Programming", name: "Languages", techIds: ['javascript', 'typescript'] },
//     { category: "Programming", name: "Backend Frameworks & Libraries", techIds: ['nodejs', 'expressjs'] },
//     { category: "Programming", name: "Frontend Frameworks & Libraries", techIds: ['reactjs', 'tailwindcss', 'html', 'css'] },
//     { category: "Programming", name: "Fullstack Frameworks & Libraries", techIds: ['nextjs'] },
//     { category: "Programming", name: "Editors & IDEs", content: ['vscode', 'vim', 'emacs'] },
//     { category: "Programming", name: "Version control", techIds: ['git'] },

//     { category: "APIs", name: "Protocols", content: ['REST APIs', 'graphQL', 'WebSocket'] },
//     { category: "APIs", name: "Authenrtication & Authorizations", content: ['Sessions', 'Web tokens', 'Role-based access', 'oAuth'], },
//     { category: "APIs", name: "Testing techs", techIds: ['postman', 'insomnia', 'swagger'] },
//     { category: "APIs", name: "Documentation techs", techIds: ['markdown', 'swagger'] },

//     { category: "Data", name: "SQL Databases", techIds: ['mysql', 'postgresql'] },
//     { category: "Data", name: "NoSQL Databases", techIds: ['mongodb', 'redis'] },
//     { category: "Data", name: "ORMs", techIds: ['prisma', 'mongoose'] },

//     { category: "CI/CD", name: "Continious Integration", techIds: ['github'] },
//     { category: "CI/CD", name: "Deployment", techIds: ['vercel', 'docker'] },
//   ],

//   languages: [
//     { name: "English", level: "Advanced" },
//     { name: "French", level: "Advanced" },
//     { name: "Arabic", level: "Native" }
//   ]
// };


// const projects: Project[] = [
//   {
//     category: "PORTFOLIO",
//     slug: "developer-portfolio",
//     title: "Developer Portfolio",
//     shortDescription: "Personal website showcasing projects, blog, and resume.",
//     technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
//     links: {
//       live: "https://yourdomain.dev",
//       github: "https://github.com/yourhandle/portfolio",
//     },
//     screenshots: [
//       "/screenshots/portfolio-home.png",
//       "/screenshots/portfolio-projects.png",
//     ],
//     description: [
//       "Fully responsive portfolio built using Next.js and Tailwind CSS.",
//       "Supports dark mode, MDX blog posts, and dynamic project content.",
//       "Used Vercel for deployment and GitHub for CI/CD.",
//     ],
//     contributors: [],
//     futurePlans: [
//       "Add project filtering by tech stack",
//       "Support multi-language content",
//     ]
//   },

//   {
//     category: "PERSONAL",
//     slug: "taskmate",
//     title: "TaskMate – Productivity App",
//     shortDescription: "Minimal task manager for daily planning.",
//     technologies: ["React", "Firebase", "Framer Motion"],
//     links: {
//       live: "https://taskmate.app",
//       github: "https://github.com/yourhandle/taskmate",
//     },
//     screenshots: [
//       "/screenshots/taskmate-dashboard.png",
//       "/screenshots/taskmate-tasks.png",
//     ],
//     description: [
//       "A simple and fast task manager with real-time sync using Firebase.",
//       "Includes user auth, drag-and-drop reordering, and local dark mode.",
//     ],
//     contributors: [],
//     futurePlans: [
//       "Mobile app using React Native",
//       "Team collaboration and sharing",
//     ]
//   },

//   {
//     category: "PROFESSIONAL",
//     slug: "ecommerce-api",
//     title: "Ecommerce API",
//     shortDescription: "Scalable REST API for a multi-vendor ecommerce platform.",
//     technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
//     links: {
//       github: "https://github.com/yourhandle/ecommerce-api",
//       docs: "https://ecommerce-api-docs.vercel.app"
//     },
//     screenshots: [],
//     description: [
//       "Built secure, modular REST endpoints for orders, users, payments, and products.",
//       "Implemented token-based authentication, rate-limiting, and logging.",
//       "Collaborated with a frontend team using Swagger docs and API versioning.",
//     ],
//     contributors: ["team-lead@example.com", "qa@example.com"],
//     futurePlans: [
//       "GraphQL version of the API",
//       "Caching layer with Redis for hot products",
//     ]
//   },

//   {
//     category: "OTHER",
//     slug: "ai-newsletter-generator",
//     title: "AI Newsletter Generator",
//     shortDescription: "Tool to generate weekly tech newsletters using GPT APIs.",
//     technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
//     links: {
//       github: "https://github.com/yourhandle/ai-newsletter",
//     },
//     screenshots: ["/screenshots/ai-newsletter-editor.png"],
//     description: [
//       "Generates newsletter drafts based on trending GitHub and Hacker News posts.",
//       "Editable markdown preview, one-click export to Mailchimp or .md files.",
//     ],
//     contributors: [],
//     futurePlans: [
//       "Multi-topic support (AI, Web, DevOps, etc.)",
//       "Team workspace and scheduling system",
//     ]
//   }
// ];

// const data = { profile, resume, projects }

// export default data