import { Project } from "./types";


export default [
    {
        hidden: false,
        status: "COMPLETED",
        category: 'PORTFOLIO',
        id: "task_tracker_api_python",
        title: "Task tracker API",
        tagline: "A robust REST API for managing personal and team tasks with secure authentication.",
        links: [
            { label: "Source code", href: "https://github.com/0x84d0u/task_tracker_api_python" },
            { label: "API Docs", href: "https://github.com/0x84d0u/task_tracker_api_python?tab=readme-ov-file#api-documentation" },
        ],
        overview: [
            "This project is a back-end REST API designed to streamline task management. It provides a powerful and secure foundation for building a front-end application to help individuals and teams organize their work. The API handles user authentication, allowing users to register, log in, and manage their own tasks, as well as collaborate on shared tasks within a team.", ,
        ],
        keyFeatures: [
            'User Authentication: Secure user registration, login, and token-based authentication.',
            'Task Management: Full CRUD (Create, Read, Update, Delete) functionality for managing individual tasks.',
            'Team Collaboration: Enables users to create and manage teams, assign tasks to members, and track progress collectively.',
            "Task Status Tracking: Allows tasks to be marked with different statuses (e.g., 'To Do,' 'In Progress,' 'Complete')."
        ],
        technologies: [
            'Backend: Python',
            'Framewok: Django'
        ],
        whatLearned: [
            "Developing this project provided hands-on experience with modern API design principles, including endpoint structuring and data modeling for complex relationships. I gained a deep understanding of implementing secure authentication and authorization systems from scratch, and I improved my skills in database management and object-relational mapping (ORM) with Django."
        ],
        futureImprovements: [
            "Potential future features could include adding task-related notifications, implementing a more granular permission system for team roles, or expanding the API to support subtasks and dependencies."
        ]
    },
    {
        hidden: false,
        status: "COMPLETED",
        category: 'PORTFOLIO',
        id: "url_shortner_api",
        title: "URL Shortner API",
        tagline: "A simple and efficient API to shorten long URLs and track click redirections.",
        overview: [
            "The URL Shortner API is a powerful backend service that solves the problem of long, unwieldy URLs. It provides a clean and predictable API endpoint for developers to generate shortened links and, more importantly, track their usage. This project is a demonstration of efficient backend routing, data storage, and analytics, all built on a modern, asynchronous JavaScript stack."
        ],
        keyFeatures: [
            " URL Shortening: Generates a unique, shortened URL for any provided long URL.", ,
            "Redirection Tracking: Logs and counts every click on a shortened link, providing valuable analytics.",
            "Custom Shortening (Optional): Allows users to specify a custom slug for their shortened URL.",
            "High Performance: Built with a non-blocking I/O model to handle a high volume of requests efficiently.",
        ],
        whatLearned: [
            "Building this API was an excellent exercise in back-end development. I solidified my skills in asynchronous programming with Node.js, routing with Express.js, and working with data persistence to store and retrieve URL mappings. Using TypeScript also taught me the importance of strong typing for creating more maintainable and error-free code."
        ],
        futureImprovements: [
            "Next steps for this project could involve adding user accounts to manage their own shortened links, implementing rate limiting to prevent abuse, or creating a front-end dashboard to visualize the click analytics."
        ],
        technologies: ['Language: TypeScript', 'Runtime: Node.js', 'Framework: Express.js'],
        links: [
            { label: "Source code", href: "https://github.com/0x84d0u/url_shortner_api" },
            // { label: "API Docs", href: "" },
        ]
    },
    {
        hidden: false,
        status: 'COMPLETED',
        category: "PERSONAL",
        id: "minimalist_portfolio",
        title: "Minimalist portfolio",
        tagline: "A clean, fast, and modern developer portfolio built with cutting-edge front-end technologies.",
        overview: [
            "This project is a personal portfolio website designed to be a professional, visually appealing, and highly performant platform for showcasing my work. The goal was to create a site that is not only a showcase of my projects but also a demonstration of my front-end development skills and attention to detail. Its minimalist design focuses on content, ensuring a fast and intuitive user experience."
        ],
        keyFeatures: [
            "Responsive Design: Flawlessly adapts to any screen size, from mobile devices to desktop monitors.",
            "Optimal Performance: Utilizes server-side rendering and static site generation for lightning-fast page load times and excellent SEO.",
            "lean UI/UX: A minimalist design with a focus on typography and white space to make content easy to read and digest.",
            "Developer-Friendly: The codebase is modular, well-documented, and easy to maintain and expand."
        ],

        technologies: ["Framework: Next.js", "Styling: Tailwind CSS"],
        whatLearned: [
            "Working with Next.js gave me a strong foundation in modern React frameworks and their powerful features like routing and API routes. I became highly proficient in building responsive interfaces with Tailwind CSS, which significantly accelerated the styling process. This project was a great opportunity to understand the importance of web performance and the techniques used to achieve it."
        ],
        futureImprovements: [
            "To expand on this project, I could add a blog section to share my development insights, implement case studies for my projects with more in-depth details, or add a dark mode toggle for user preference."
        ],
        links: [
            { label: "Source code", href: "https://github.com/0x84d0u/minimalist_portfolio" },
            { label: "Demo", href: "/" },
        ]
    },
    {
        hidden: true,
        status: "UPCOMING",
        category: 'PORTFOLIO',
        title: "Inventory Management API",
    },
    {
        hidden: true,
        status: "UPCOMING",
        category: 'Local Ecommerce Store',
        title: "Inventory Management API",
    }
] as Project[]