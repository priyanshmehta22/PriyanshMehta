import {
    backend,
    creator,
    web,
    passportjs,
    python,
    html,
    java,
    wordpress,
    sql,
    expressjs,
    bootstrap,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    secretly,
    threejs,
    todo,
    teleradtechlogo, solarsecuresolutions, vchc, emotionrecognition, arjunkalyanpur, madeinheaven
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
        id: "contact",
        title: "Contact",
    },

];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "CMS Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: sql,
    },
    {
        name: "WordPress",
        icon: wordpress,
    },
];

const experiences = [
    {
        title: "Fullstack Web Developer and CMS Developer",
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
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Priyansh proved me wrong.",
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
        image: "https://media.licdn.com/dms/image/D5603AQHVByle7FA4sw/profile-displayphoto-shrink_800_800/0/1674542132274?e=2147483647&v=beta&t=3P6USy9uuTB6OTgsbuCWJ_waW_kWUsjPC5Py7cNwlvM",
    },
];

const projects = [
    {
        name: "Secretly",
        description:
            "Welcome to Secretly where secrets find solace and confessions are liberated, all in anonymous harmony. Embrace the cathartic power of sharing unfiltered thoughts, desires, and regrets. Be part of a compassionate community, offering understanding without judgment. In this digital haven, vulnerability unites, as whispered revelations form an intricate tapestry of shared experiences. Join us as the shadows become a canvas for untold stories, creating a symphony of souls yearning for connection. Discover the strength in anonymity and the freedom to be your true self. Welcome to a sanctuary where every whisper matters.",
        tags: [
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: secretly,
        source_code_link: "https://secretly-iioc.onrender.com/",
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
        // source_code_link: "https://github.com/priyanshmehta22/Secretly",
    },
    {
        name: "Made In Heaven",
        description:
            "Welcome to Made in Heaven, where destinies unite and love finds its perfect match.Our Matrimony website is a divine platform that connects hearts and souls, making dreams of everlasting love come true.Delve into genuine profiles of individuals seeking their soulmates, as we facilitate meaningful connections that last a lifetime. With a seamless and user friendly interface, discovering and communicating with potential partners has never been easier. Whether you're in pursuit of an eternal bond or a lifelong friendship, let Made in Heaven be your guiding star on this enchanting journey of love. Embrace destiny and find your forever here, at Made in Heaven.",
        tags: [
            {
                name: "NodeJs",
                color: "blue-text-gradient",
            },
            {
                name: "ExpressJs",
                color: "green-text-gradient",
            },
            {
                name: "MongoDb",
                color: "pink-text-gradient",
            },
        ],
        image: madeinheaven,
        source_code_link: "https://github.com/priyanshmehta22/matrimony-project",
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
    {
        name: "To-Do Tasks",
        description:
            "This Todo Tasks project is a streamlined and efficient task management system designed to help you stay organized and focused. With an intuitive user interface, you can easily add, prioritize, and categorize your tasks. Set due dates and reminders to ensure timely completion, while also tracking your progress along the way. Whether you're managing personal projects or team collaborations, Todo Tasks keeps everything in one place, ensuring no task slips through the cracks. Experience the power of productivity and take control of your to-do list with this Todo Tasks project. Simplify your life and achieve your goals, one task at a time.",
        tags: [
            {
                name: "NodeJs",
                color: "blue-text-gradient",
            },
            {
                name: "MongoDb",
                color: "green-text-gradient",
            },
            {
                name: "ExpressJs",
                color: "pink-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/priyanshmehta22/toDo-v1",
    },
    {
        name: "VCHC",
        description:
            "Welcome to VCHC - Your Comprehensive Health Center. Our website, powered by ReactJS, offers a seamless healthcare experience. Discover a wide range of medical services, meet our skilled team of professionals, and easily schedule appointments. ReactJS ensures a responsive and user-friendly interface, enabling quick access to vital health information. Stay informed with the latest medical updates, health tips, and patient resources. Your well-being is our top priority, and VCHC is committed to providing comprehensive healthcare solutions. Experience the convenience and excellence of VCHC's ReactJS website for all your health needs.",
        tags: [
            {
                name: "ReactJs",
                color: "blue-text-gradient",
            },
            {
                name: "RESTAPI",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: vchc,
        source_code_link: "https://github.com/priyanshmehta22/vchc",
    },

];

export { services, technologies, experiences, testimonials, projects };