import {
    backend,
    creator,
    web,
    passportjs,
    python,
    agenticAI,
    java,
    sql,
    expressjs,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    secretly,
    nextjs,
    todo,
    teleradtechlogo, solarsecuresolutions, vchc, emotionrecognition, arjunkalyanpur, madeinheaven, cybersec,
    datascience,
    datavizpython,
    digitalmarketing,
    frontend,
    fullstack,
    pythonbasics,
    gravitas,
    gravitaslogo,
    socialmediamarketing,
    clerk,
    FlickLogo,
    heart, Oracle, gestureos, apjadvisory, apjgurukul,
    docker, git, threejs
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },

    {
        id: "certificates",
        title: "Certificates",
    },
    {
        id: "contact",
        title: "Contact",
    },

];

// What I do, shown as a stack of cards in the Overview. Each proof point is from my resume.
const disciplines = [
    {
        kicker: "Agents & MCP",
        title: "AI Agent Engineering",
        text: "Orchestrator-led multi-agent systems that route work between specialised agents, share context memory and act through tools, plus the prompt engineering that keeps them reliable.",
        proof: { value: 22, suffix: " tools", label: "across 2 MCP servers, built at Oracle" },
        chips: ["Agent Orchestration", "MCP", "Prompt Engineering", "Python", "TypeScript"],
        accent: "#915EFF",
    },
    {
        kicker: "Systems",
        title: "Platform & Systems Engineering",
        text: "Datapath and platform work on Oracle's Acme Packet SBC in Linux, C and C++: media policing, NAT/ACL correctness and diagnostics across the SIP, RTP/RTCP and TCP/UDP stack.",
        proof: { value: 20, suffix: "+", label: "datapath drop & NAT-miss classifications shipped" },
        chips: ["Linux", "C", "C++", "SIP", "RTP/RTCP", "TCP/UDP"],
        accent: "#4f7cff",
    },
    {
        kicker: "Web",
        title: "Web Development",
        text: "Full-stack platforms from investigation GUIs like BugInsight to festival sites with 30+ reusable components, tuned until large pages load fast.",
        proof: { value: 10000, suffix: "+", label: "variables unified in one GUI in BugInsight" },
        chips: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Shadcn UI"],
        accent: "#f272c8",
    },
    {
        kicker: "Apps",
        title: "App Development",
        text: "Cross-platform apps with real-time cores: GestureOS ships as a Tauri desktop app driven by on-device hand tracking, and I built a multi-client TCP/WebSocket messaging app at Oracle.",
        proof: { value: 60, suffix: " FPS", label: "on-device gesture control in GestureOS" },
        chips: ["Tauri", "Rust", "ONNX", "TypeScript", "WebSockets"],
        accent: "#2fd4a3",
    },
    {
        kicker: "Automation",
        title: "Workflows & Pipelines",
        text: "Microservices, data pipelines and automated workflows that turn messy multi-vendor logs and dumps into answers, including compare-dump regression analysis.",
        proof: { value: 65, suffix: "%", label: "faster processing from a multi-vendor transformation layer" },
        chips: ["Python", "Microservices", "Data Pipelines", "REST APIs", "MongoDB"],
        accent: "#ffb547",
    },
];

const certificates = [
    {
        title: "fullstack",
        image: fullstack,
    },
    {
        title: "frontend",
        image: frontend,
    },
    {
        title: "cybersec",
        image: cybersec,
    },
    {
        title: "datascience",
        image: datascience,
    },
    {
        title: "datavizpython",
        image: datavizpython,
    },
    {
        title: "pythonbasics",
        image: pythonbasics,
    },
    {
        title: "digitalmarketing",
        image: digitalmarketing,
    },
    {
        title: "socialmediamarketing",
        image: socialmediamarketing,
    }
];

const technologies = [
    {
        name: "Agentic AI",
        icon: agenticAI,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Clerk Auth",
        icon: clerk,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
    {
        name: "Passport JS",
        icon: passportjs,
    },
    {
        name: "Next",
        icon: nextjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: sql,
    },
];

// Oldest first: the timeline reads like a story and ends at the current role.
const experiences = [
    {
        title: "React Developer",
        company_name: " Solar Secure Solutions",
        icon: solarsecuresolutions,
        date: "May 2022 – July 2022",
        points: [
            "Designed and constructed responsive websites using HTML, CSS and ReactJS ensuring user-friendly interfaces.",
            "Implemented Google OAuth for user authentication and deployed the website on Railway.App platform.",
            "Pioneered RESTful APIs using Node.js and express.js, facilitating seamless front-end and back-end data transfer.",
            "Utilized version control systems, like Git, to effectively manage codebase and facilitate seamless collaboration.",
            "Configured MongoDB and wrote Mongoose (ODM) queries enhancing response time by 15%."
        ],
    },

    {
        title: "Fullstack Web Developer and UI/UX Developer",
        company_name: "Telerad Tech",
        icon: teleradtechlogo,
        date: "May 2023 – July 2023",
        points: [
            "Instigated front-end functionalities using TypeScript with type inference and type guards, ensuring type safety.",
            "Fabricated modular and reusable SQL queries for CRUD operations, enhancing code integrity and scalability.",
            "Leveraged the Fetch API in JavaScript to perform async HTTP requests and crafted front-end prototypes.",
            "Drove a 40% improvement in website efficiency by reducing HTTP requests and mapping templates.",
            "Engineered a 100% Responsive website for the company on Wordpress by tailoring WordPress themes to meet given requirements, ensuring an unique online presence."
        ],
    },

    {
        title: "Tech Team Manager",
        company_name: "graVITas'23 · VIT Vellore",
        icon: gravitaslogo,
        date: "August 2023 – September 2023",
        points: [
            "Guided the frontend team to build the graVITas International Tech Festival site for student event registration and payment using TypeScript, Tailwind CSS, React and REST APIs, developing 30+ reusable components.",
            "Optimized site performance by reducing HTTP requests and refactoring templates using custom hooks and scoped React Context, resulting in a 50% reduction in page load time."
        ],
    },

    {
        title: "Project Intern",
        company_name: "Oracle India Pvt Ltd, Hyderabad",
        icon: Oracle,
        date: "January 2024 – June 2024",
        points: [
            "Developed a real-time multi-client messaging application supporting multiple concurrent users through TCP/WebSocket communication, implementing connection management and bidirectional message routing.",
            "Performed protocol-level debugging and traffic analysis to validate connection stability, message delivery, and concurrent communication behavior while working with SBC networking concepts and protocols."
        ],
    },

    {
        title: "Associate Software Developer",
        company_name: "Oracle India Pvt Ltd · Platform Engineering, Hyderabad",
        icon: Oracle,
        date: "July 2024 – October 2026",
        points: [
            "Led datapath and platform engineering for the Oracle Acme Packet SBC (Linux, C, C++), delivering production fixes in RTCP media policing, NAT/ACL correctness, and DPWD supportability across the SIP, RTP/RTCP, and TCP/UDP stack to improve runtime reliability and reduce customer-escalation turnaround.",
            "Designed and delivered 20+ datapath drop and NAT-miss classifications with enhanced CLI/dump visibility, replacing aggregate counters with protocol- and stage-level diagnostics that accelerated root-cause isolation.",
            "Built BugInsight, a full-stack Next.js / TypeScript / Python analysis platform unifying 10,000+ statistical variables and 100+ log files into a type-safe investigation GUI (Shadcn UI); engineered a multi-vendor transformation layer that reduced processing time by 65% and improved large-page load times by 50%.",
            "Architected an orchestrator-led multi-agent system with 22 tools across 2 MCP servers, enabling dynamic agent routing, autonomous task execution, shared context memory, and compare-dump regression analysis that accelerated faulty-delivery detection by up to 10,000×."
        ],
    },

    {
        title: "Application Software Developer 2",
        company_name: "Oracle India Pvt Ltd · Platform Engineering, Hyderabad",
        icon: Oracle,
        date: "16 October 2026 – Present",
        current: true,
        note: "Promoted from Associate Software Developer.",
        // One-line summaries from the project names; refine with specifics and impact.
        projects: [
            { name: "RCA Agent", text: "An AI agent that performs root-cause analysis on SBC issues, investigating logs and dumps to pinpoint likely causes." },
            { name: "Agentic Framework", text: "A reusable framework for building, orchestrating and running agents across engineering workflows." },
            { name: "RCA Workflow Generation & Automation", text: "Generates and runs RCA workflows automatically, turning manual investigation steps into repeatable automation." },
            { name: "RCA Remediation", text: "Takes RCA from diagnosis to fix, recommending and automating remediation for identified root causes." },
            { name: "DEMUX PPM", text: "Datapath work on the DEMUX Packet Processing Module of the SBC." },
            { name: "NAT PPM", text: "Datapath work on the NAT Packet Processing Module, which handles network address translation for SBC traffic." },
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "It was an absolute privilege working with you, you are the upcoming future of this country.",
        name: "Arjun Kalyanpur",
        designation: "CEO",
        company: "Telerad Tech",
        image: "https://www.imagecorelab.com/wp-content/uploads/2017/05/dr-arjun-kalyanpur.jpg",
    },
    {
        testimonial:
            "After Priyansh optimized our website, our traffic increased by 50% and the design was very captivating. We can't thank him enough!",
        name: "Sunita Maheshwari",
        designation: "Chief Dreamer",
        company: "Telerad Tech",
        image: "https://www.imagecorelab.com/wp-content/uploads/2017/05/dr-sunita-maheshwari.jpg",
    },
    {
        testimonial:
            "Priyansh has worked incredibly hard and produced results before time, the SEO of our website was increased drastically!",
        name: "Hareesh Kavil",
        designation: "Sales Manager",
        company: "Telerad Tech",
        image: "https://www.google.com/search?sca_esv=589119146&q=hareesh+kavil&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjDws2go4CDAxVZoWMGHVLtBsAQ0pQJegQICxAB&biw=1536&bih=730&dpr=1.25#imgrc=CXXdxmWZtwIHKM",
    },
];

const projects = [
    {
        name: "GestureOS",
        subtitle: "Real-time computer vision platform via ONNX hand landmark regression",
        description:
            "A multi-process, on-device gesture-control platform: a Rust vision core regresses hand landmarks and streams gesture events to a TypeScript action engine that drives apps and the OS cursor, with 0 cloud round-trips.",
        points: [
            "Architected a multi-process gesture-control platform: a Rust vision core regressing 21 landmarks/frame via two-stage ONNX streams JSON events over a named-pipe IPC (<100µs) to a TypeScript action engine routing gestures to pluggable adapters, on-device at 0 cloud round-trips.",
            "Accelerated landmark inference 67ms → 11ms (84%, 6x) on DirectML/CUDA and decoupled it onto a worker thread behind a ring-buffered queue, sustaining 60 FPS with latency under 16ms and 0 dropped frames.",
            "Designed a confidence-scored classifier spanning 20+ gestures fusing Kalman filtering, multi-frame temporal voting, and ghost-gesture suppression to drive false activations toward 0.",
            "Shipped a cross-platform Tauri app with 4 app-aware profiles (Gaming, Meeting, System, Cursor) and a Cursor Mode that consumes the landmark IPC stream and maps fingertips to OS-level mouse control via enigo, backed by a Next.js 15 site (Google OAuth, Prisma/PostgreSQL, Razorpay billing, Three.js) on Vercel."
        ],
        tags: [
            {
                name: "rust",
                color: "blue-text-gradient",
            },
            {
                name: "onnx",
                color: "green-text-gradient",
            },
            {
                name: "tauri",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "green-text-gradient",
            },
        ],
        image: gestureos,
        source_code_link: "https://gestureos.in",
    },
    {
        name: "APJ Advisory",
        subtitle: "Website for a retail & jewellery consultancy",
        description:
            "Website for APJ Advisory, a Mumbai-based consultancy for retail and jewellery businesses (a division of APJ Jewels). It presents their strategy, growth, retail-operations and marketing services, the industries they serve and their approach, with a 'Book a Consultation' flow, WhatsApp chat and links into the APJ Gurukul academy.",
        tags: [
            { name: "website", color: "blue-text-gradient" },
            { name: "consulting", color: "green-text-gradient" },
            { name: "retail", color: "pink-text-gradient" },
        ],
        image: apjadvisory,
        source_code_link: "https://www.apjadvisory.com/",
    },
    {
        name: "APJ Gurukul",
        subtitle: "Live-learning app for luxury retail professionals",
        description:
            "A mobile-first learning platform for luxury retail, hospitality and sales professionals: live instructor-led classes, DRM-protected recordings, structured courses and Razorpay subscriptions. Flutter apps for Android and iOS, a NestJS backend on Google Cloud (Cloud Run, PostgreSQL, Redis, Pub/Sub), one-account-one-device login and screen-recording protection, plus an internal admin dashboard.",
        tags: [
            { name: "flutter", color: "blue-text-gradient" },
            { name: "nestjs", color: "green-text-gradient" },
            { name: "gcp", color: "pink-text-gradient" },
        ],
        image: apjgurukul,
    },
    {
        name: "Dr Anamika Jain",
        description:
            "'This is a Portfolio cum appointment booking website for Dr. Anamika Jain. Having several landing pages and attractive UI/UX and responsive design, it is a perfect platform to promote and create a social presence on the internet. With seamless rendering using NextJS and Typescript, this website is built with latest technologies. This website gives a brief about Dr Anamika Jain and the work, services and expertise she provides to the patients through her caring work towards the public also integrated with EmailJS for smooth communication between user and Doctor. Appointment booking services is also available through which the patient can book an appointment and receive a response mail for comfirmation. Tailwind Css is used for designing this website and is fully responsive for better usage on various devices.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: heart,
        source_code_link: "https://dranamikajain.in/",
    },
    {
        name: "Flick",
        description:
            "'Flick is a  Responsive Social Media platform for people across the world to interact by posting flicks (posts), joining communities and reacting to flicks. The tech stack used is Next.js, TypeScript, Clerk Auth for authentication, Zod for data validation, MongoDB for database management, and UploadThing for file uploads. It is integrated with community creation, secure authentication, and threaded communication features, fostering user engagement. The platform's distinctive functionality extends beyond traditional social media, encompassing a robust community system. Users can effortlessly create and join communities tailored to their interests, fostering a sense of belonging and facilitating targeted content consumption. Leveraging MongoDB, I optimized data storage and retrieval mechanisms, enhancing the scalability of the platform as it accommodates a growing user base.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "clerk",
                color: "pink-text-gradient",
            },
        ],
        image: FlickLogo,
        source_code_link: "https://flick-sigma.vercel.app/",
    },
    {
        name: "graVITas'23",
        description:
            "'gravitas.vit.ac.in' is a dynamic and cutting-edge website that serves as the online hub for VIT (Vellore Institute of Technology) University's annual techno-management fest, Gravitas. As the Tech Team Manager, I led a highly skilled team in the creation of this digital platform, which seamlessly blends innovation, technology, and creativity. This website provides a comprehensive and immersive experience for students, participants, and tech enthusiasts from across the globe. Key features and components of the website include: Information Hub, User-Centric Design, Responsive Design, Engaging Animations, Performance Optimization, SEO-Ready, Accessibility and Inclusivity, Security Measures, Continuous Integration/Continuous Deployment (CI/CD), Stakeholder Collaboration.",
        tags: [
            {
                name: "next",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "react",
                color: "pink-text-gradient",
            },
        ],
        image: gravitas,
        source_code_link: "https://gravitas.vit.ac.in/",
    },
    {
        name: "Arjun Kalyanpur Portfolio",
        description:
            "I have designed a compelling personal portfolio for Dr. Arjun Kalyanpur using CMS WordPress. It serves as a comprehensive showcase of his remarkable career accomplishments and expertise in the medical field. The website boasts an intuitive layout, allowing visitors to explore Dr. Kalyanpur's academic background, research publications, and impactful projects effortlessly. Additionally, I incorporated authentic testimonials from satisfied patients and colleagues, providing insight into his compassionate approach to healthcare. The WordPress-based portfolio reflects my dedication to creating seamless and captivating digital experiences, while also showcasing Dr. Arjun Kalyanpur's commitment to advancing healthcare through innovation and excellence.",
        tags: [
            {
                name: "Wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "Elementor",
                color: "green-text-gradient",
            },
            {
                name: "AWS",
                color: "pink-text-gradient",
            },
        ],
        image: arjunkalyanpur,
        source_code_link: "https://arjunkalyanpur.in",
    },
    {
        name: "Emotion Recognition",
        description:
            "This emotion recognition project is an innovative endeavor that harnesses cutting-edge technology to understand and interpret human emotions accurately. Using advanced machine learning algorithms, we have developed a sophisticated system capable of detecting and analyzing various emotional states from facial expressions, voice tones, and physiological signals. This groundbreaking project holds immense potential for applications in fields like mental health, customer experience, and human-computer interaction, paving the way for a more empathetic and emotionally intelligent future. Our mission is to enhance human-machine interactions and improve overall well-being by effectively capturing and responding to human emotions.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "OpenCV",
                color: "green-text-gradient",
            },
            {
                name: "CNN",
                color: "pink-text-gradient",
            },
        ],
        image: emotionrecognition,
        source_code_link: "https://github.com/priyanshmehta22/EMOTION-RECOGNITON",
    },
];

// Skills section: one row per area. Items with an `icon` show the logo; others get a monogram.
const skillGroups = [
    {
        title: "AI & Agents",
        items: [
            { name: "Agentic AI", icon: agenticAI },
            { name: "MCP", mono: "MCP" },
            { name: "Agent Orchestration", mono: "AO" },
            { name: "Prompt Engineering", mono: "PE" },
            { name: "Computer Vision", mono: "CV" },
            { name: "ONNX Runtime", mono: "ONX" },
            { name: "OpenAI APIs", mono: "AI" },
        ],
    },
    {
        title: "Systems & Languages",
        items: [
            { name: "Java", icon: java },
            { name: "C++", mono: "C++" },
            { name: "C", mono: "C" },
            { name: "Python", icon: python },
            { name: "TypeScript", icon: typescript },
            { name: "JavaScript", icon: javascript },
            { name: "Rust", mono: "Rs" },
            { name: "Linux", mono: "Lx" },
            { name: "SIP · RTP · NAT", mono: "SBC" },
            { name: "Docker", icon: docker },
            { name: "Git", icon: git },
        ],
    },
    {
        title: "Web, Apps & Cloud",
        items: [
            { name: "React", icon: reactjs },
            { name: "Next.js", icon: nextjs },
            { name: "Node.js", icon: nodejs },
            { name: "Express", icon: expressjs },
            { name: "NestJS", mono: "Ns" },
            { name: "Flutter", mono: "Fl" },
            { name: "Tauri", mono: "Ta" },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Three.js", icon: threejs },
            { name: "MongoDB", icon: mongodb },
            { name: "PostgreSQL", mono: "PG" },
            { name: "Google Cloud", mono: "GCP" },
        ],
    },
];

// Scroll-story chapters. `at` is the chapter scroll progress (0–1) where a beat appears.
const storyChapters = [
    { id: "home", label: "Hello" },
    { id: "about", label: "About" },
    { id: "oracle", label: "Oracle" },
    { id: "gestureos", label: "GestureOS" },
    { id: "work", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Words" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
];

const oracleStory = {
    role: "Application Software Developer 2",
    meta: "Oracle · Platform Engineering · Hyderabad · Jul 2024 – Present · Application Software Developer 2 since Oct 2026",
    beats: [
        {
            title: "SBC datapath",
            text: "Production fixes in RTCP media policing, NAT/ACL correctness and DPWD supportability across SIP, RTP/RTCP and TCP/UDP.",
            stat: { text: "C · C++", label: "production SBC datapath on Linux" },
        },
        {
            title: "Deep diagnostics",
            text: "Datapath drop and NAT-miss classifications replacing aggregate counters with protocol- and stage-level visibility.",
            stat: { value: 20, suffix: "+", label: "drop classifications" },
        },
        {
            title: "BugInsight",
            text: "Next.js / TypeScript / Python platform unifying 10,000+ variables and 100+ log files into one investigation GUI.",
            stat: { value: 65, suffix: "%", label: "faster processing" },
        },
        {
            title: "Multi-agent MCP system",
            text: "Orchestrator-led agents with 22 tools across 2 MCP servers, routing, shared memory and compare-dump regression analysis.",
            stat: { value: 10000, suffix: "×", label: "faster faulty-delivery detection" },
        },
    ],
};

const gestureStory = {
    tagline: "Real-time hand tracking that drives your computer, fully on-device with 0 cloud round-trips.",
    link: "https://gestureos.in",
    stages: [
        { title: "Camera", detail: "two-stage ONNX" },
        { title: "Rust vision core", detail: "21 landmarks / frame" },
        { title: "Named-pipe IPC", detail: "< 100µs hop" },
        { title: "TS action engine", detail: "20+ gestures, Kalman + voting" },
        { title: "Your OS", detail: "4 profiles · cursor via enigo" },
    ],
};

export { disciplines, skillGroups, technologies, experiences, testimonials, projects, certificates, storyChapters, oracleStory, gestureStory };