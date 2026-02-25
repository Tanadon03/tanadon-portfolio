const portfolioData = {
    expertise: [
        {
            id: "01",
            title: "Full-stack Development",
            description: "Architecting scalable web applications with modern frameworks and robust backend services.",
            icon: "layers",
            tags: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
            featured: false,
            span: 2
        },
        {
            id: "02",
            title: "Backend & API",
            description: "RESTful API design, authentication & authorization, database modelling, and production-ready backend systems.",
            icon: "dns",
            tags: ["Java (Spring Boot)", "Node.js", "PostgreSQL", "JWT", "Docker", "Logging & Audit"],
            featured: false,
            span: 1
        },
        {
            id: "03",
            title: "Hardware Edge",
            description: "Embedded systems and IoT — bridging sensors, controllers and cloud dashboards for real-world devices.",
            icon: "memory",
            tags: ["Arduino", "ESP32/8266", "Raspberry Pi", "Node-RED", "Blynk", "LINE Notify"],
            featured: false,
            span: 1
        },
        {
            id: "04",
            title: "Technical Integration",
            description: "I specialize as a 'Technical Integrator'—leveraging AI-driven tools to rapidly prototype and build maintainable systems. My focus is on connecting diverse technologies into a cohesive solution with robust logical architecture.",
            icon: "code",
            tags: ["System Design", "Vibe Coding", "AI-Assisted Dev", "CI/CD", "Docker"],
            featured: true,
            span: 4
        }
    ],
    projects: [
        {
            category: "2025 REAL-TIME COMM",
            title: "Online Meeting Platform (Jitsi Integration)",
            description: "Full-scale meeting platform with three coordinated systems: Spring Boot backend, React admin control panel, and Flutter user app integrated with a self-hosted Jitsi instance. Implements JWT-based auth and full action logging.",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "Multi-layer auth & Role-based access" },
                { label: "Stack", value: "Spring Boot, PostgreSQL, React, Flutter, Jitsi" },
                { label: "Role", value: "System Architect & Backend Lead" }
            ],
            link: "#"
        },
        {
            category: "2025 MODERNIZATION",
            title: "Government Permission Management (Front-end Rebuild)",
            description: "Rebuilt legacy XML-driven front-end into modern Next.js / React application. Migrated UI logic to reusable components and integrated with existing APIs to improve UX and system maintainability.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "Legacy XML to Next.js Component Migration" },
                { label: "Stack", value: "Next.js, React, Tailwind CSS, API integration" },
                { label: "Role", value: "Front-end Developer" }
            ],
            link: "#"
        },
        {
            category: "2025 MOBILE / CHAT",
            title: "Flutter Chat-style App (LINE-like UI)",
            description: "Designed and built responsive frontend pages in Flutter using modern UI patterns. Implemented API endpoints and end-to-end integration for secure data handling.",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
            proj_img: [
                {
                    name: "Login",
                    path: "../img/LineUi/1.png"
                }, {
                    name: "Home",
                    path: "../img/LineUi/4.png"
                }, {
                    name: "Profile",
                    path: "../img/LineUi/3.png"
                }, {
                    name: "Add Friend",
                    path: "../img/LineUi/5.png"
                }, {
                    name: "Create Group",
                    path: "../img/LineUi/6.png"
                }, {
                    name: "Create Meeting",
                    path: "../img/LineUi/7.png"
                }, {
                    name: "News",
                    path: "../img/LineUi/8.png"
                }, {
                    name: "News Detail",
                    path: "../img/LineUi/9_2.png"
                }, {
                    name: "Settings",
                    path: "../img/LineUi/10.png"
                }
            ],
            stats: [
                { label: "Complexity", value: "UI Fidelity & API Integration" },
                { label: "Stack", value: "Flutter, Dart, REST API, Secure Storage" },
                { label: "Role", value: "Mobile Developer & Integrator" }
            ],
            link: "#"
        },
        {
            category: "2025 DATA / EXPERIMENT",
            title: "Data Analysis & Kaggle Experiments",
            description: "Implementation of data pipelines, EDA, and model experiments. Managed the full cycle of data cleaning, visualization, and model evaluation within Jupyter environments.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "EDA & Model Comparison Pipeline" },
                { label: "Stack", value: "Python, Pandas, Scikit-learn, Matplotlib" },
                { label: "Role", value: "Data Analyst / ML Researcher" }
            ],
            link: "#"
        },
        {
            category: "2023 - 2025 WEB APP",
            title: "Professor DB Web Application",
            description: "Multi-page React application for managing academic staff records, including publications and student intake. Features complex CRUD operations and admin management workflows.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60",
            proj_img: [
                {
                    name: "Professor DB Web Application",
                    path: "../img/ProfDB/1.png"
                }, {
                    name: "Research Search",
                    path: "../img/ProfDB/2.png"
                }, {
                    name: "Profile",
                    path: "../img/ProfDB/3.png"
                }, {
                    name: "Academic Works",
                    path: "../img/ProfDB/4.png"
                }, {
                    name: "Edit Proceeding Page",
                    path: "../img/ProfDB/5.png"
                }
            ],
            stats: [
                { label: "Complexity", value: "Data-heavy CRUD & Admin workflows" },
                { label: "Stack", value: "React, REST API, SQL Database, SCSS" },
                { label: "Role", value: "Front-end Developer & Integrator" }
            ],
            link: "https://www.professor.eng.kmitl.ac.th/"
        },
        {
            category: "2024 AUTOMATION",
            title: "LINE OA Webhook System (Tier-based limits)",
            description: "Webhook service for LINE Official Account that validates users and enforces tier-based limits. Designed for reliable message handling and automated responses.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "Webhook Handling & Authorization" },
                { label: "Stack", value: "Node.js, Express, LINE Messaging API" },
                { label: "Role", value: "Backend Developer" }
            ],
            link: "#"
        },
        {
            category: "2023 IOT / CONTROL",
            title: "Aquarium Chiller Control System",
            description: "Industrial sensor integration using Raspberry Pi 4 and RS485. Developed local control GUI and remote monitoring dashboard with automated data logging.",
            image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "RS485 Sensor Integration & Control Loop" },
                { label: "Stack", value: "Python, Tkinter, Node-RED, Google Sheets" },
                { label: "Role", value: "Embedded / Control Developer" }
            ],
            link: "#"
        },
        {
            category: "2022 IOT",
            title: "Smart Home IoT System (NodeMCU)",
            description: "Distributed IoT system using NodeMCU for real-time sensor monitoring. Data is processed through Node-RED for dashboard visualization and automated notifications.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Complexity", value: "Device-to-Cloud Data Pipeline" },
                { label: "Stack", value: "Arduino, ESP32/8266, Raspberry Pi, Sensor, Node-RED, Blynk, LINE Notify" },
                { label: "Role", value: "IoT Developer" }
            ],
            link: "#"
        },
        {
            category: "Ongoing TECH PLAYGROUND",
            title: "Personal Tech Playground",
            description: "A collection of small, interest-driven experiments — building quick sites with templates, automating small tasks, exploring new tools, and occasionally testing local AI setups. Mostly built out of curiosity and self-development.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60",
            stats: [
                { label: "Focus", value: "Curiosity-driven learning & experimentation" },
                { label: "Stack", value: "GitHub (Jekyll), Google Apps Script, Ollama" },
                { label: "Nature", value: "Small builds, tool testing, and idea validation" }
            ],
            link: "#"
        }
    ]
};