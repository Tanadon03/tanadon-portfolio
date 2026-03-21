const portfolioData = {
    expertise: [
        {
            id: "01",
            title: "System Architecture & Technical Integration",
            description: "Designing cohesive systems by connecting backend services, AI workflows, and frontend interfaces. Focused on scalability, logical structure, and maintainable architecture.",
            icon: "schema",
            tags: ["System Design", "API Architecture", "Workflow Design", "AI-Assisted Dev", "Docker"],
            featured: true,
            span: 4
        },
        {
            id: "02",
            title: "Backend Engineering",
            description: "Building production-ready backend systems with secure authentication, structured database modelling, logging, and clean API contracts.",
            icon: "dns",
            tags: ["Java (Spring Boot)", "Node.js", "Express", "PostgreSQL", "JWT", "Audit Logging"],
            featured: false,
            span: 2
        },
        {
            id: "03",
            title: "AI & Data Analytics",
            description: "Experience with data preprocessing and structured experimentation. Familiar with AI workflows including local model deployment and open-source chatbot frameworks for practical applications.",
            icon: "insights",
            tags: ["Python", "Jupyter Notebook", "Kaggle", "Open-source LLMs", "Chatbot Integration"],
            featured: false,
            span: 2
        },
        {
            id: "04",
            title: "Full-stack Application Development",
            description: "Delivering complete, end-to-end web solutions. I build responsive frontends that communicate seamlessly with structured backends, ensuring data integrity and a smooth user experience from UI to Database.",
            icon: "layers",
            tags: ["React", "Next.js", "Express.js", "Java (Spring Boot)", "PostgreSQL", "RESTful API"],
            featured: false,
            span: 2
        },
        {
            id: "05",
            title: "Embedded & IoT Systems",
            description: "Bridging sensors, microcontrollers, and cloud dashboards to build real-world connected systems.",
            icon: "memory",
            tags: ["Arduino", "ESP32/8266", "Raspberry Pi", "Node-RED", "Blynk", "LINE Notify"],
            featured: false,
            span: 2
        }
    ],
    projects: [
        {
            category: "2025 REAL-TIME COMM",
            title: "Online Meeting Platform (Jitsi Integration)",
            description: "Full-scale meeting platform with three coordinated systems: Spring Boot backend, React admin control panel, and Flutter user app integrated with a self-hosted Jitsi instance. Implements JWT-based auth and full action logging.",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60",
            proj_img: [
                { name: "User App - Screen 1", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20210551.png" },
                { name: "User App - Screen 3", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211732.png" },
                { name: "User App - Screen 4", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211745.png" },
                { name: "User App - Screen 5", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211806.png" },
                { name: "User App - Screen 6", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211819.png" },
                { name: "User App - Screen 2", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20210605.png" },
                { name: "User App - Screen 7", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211826.png" },
                { name: "User App - Screen 8", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211836.png" },
                { name: "User App - Screen 9", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211927.png" },
                { name: "User App - Screen 10", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20User%20App/Screenshot%202025-10-16%20211940.png" },
                { name: "Admin Web - Screen 1", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-06%20214357.png" },
                { name: "Admin Web - Screen 2", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212203.png" },
                { name: "Admin Web - Screen 3", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212234.png" },
                { name: "Admin Web - Screen 4", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212327.png" },
                { name: "Admin Web - Screen 5", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212411.png" },
                { name: "Admin Web - Screen 6", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212450.png" },
                { name: "Admin Web - Screen 7", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212513.png" },
                { name: "Admin Web - Screen 8", path: "https://tanadon03.github.io/Portfolio/img/Jitsi/UI%20Admin%20Web/Screenshot%202025-10-16%20212606.png" }
            ],
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
            proj_img: [
                { name: "Add Menu", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Add%20Menu.png" },
                { name: "Edit Menu", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Edit%20Menu.png" },
                { name: "Login", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Login.png" },
                { name: "Main", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Main.png" },
                { name: "Menu Management", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Menu%20Management.png" },
                { name: "Not Found", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Not%20Found.png" },
                { name: "Role Managenent", path: "https://tanadon03.github.io/Portfolio/img/Rebuild/Role%20Managenent.png" }
            ],
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
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/1.png"
                }, {
                    name: "Home",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/4.png"
                }, {
                    name: "Profile",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/3.png"
                }, {
                    name: "Add Friend",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/5.png"
                }, {
                    name: "Create Group",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/6.png"
                }, {
                    name: "Create Meeting",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/7.png"
                }, {
                    name: "News",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/8.png"
                }, {
                    name: "News Detail",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/9_2.png"
                }, {
                    name: "Settings",
                    path: "https://tanadon03.github.io/Portfolio/img/LineUi/10.png"
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
            category: "2025 AI ANALYTICS COURSEWORK",
            title: "AI & Data Analytics – Labs and Applied Project",
            description: "Coursework and applied project in AI Analytics covering data cleaning, regression modeling, and data visualization. Includes structured lab work, a data analytics project, and Kaggle certifications as proof of completion.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1200&q=60",
            proj_img: [
                {
                    name: "Python",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Python.png"
                }, {
                    name: "Pandas",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Pandas.png"
                }, {
                    name: "Data Cleaning",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Data%20Cleaning.png"
                }, {
                    name: "Data Visualization",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Data%20Visualization.png"
                }, {
                    name: "Intro to Machine Learning",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Intro%20to%20Machine%20Learning.png"
                }, {
                    name: "Intro to Deep Learning",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Intro%20to%20Deep%20Learning.png"
                }, {
                    name: "Time Series",
                    path: "https://tanadon03.github.io/Portfolio/img/Kaggle%20Certificate/Tanadon%20Aunyart%20-%20Time%20Series.png"
                }
            ],
            stats: [
                { label: "Complexity", value: "End-to-end analytics workflow from preprocessing to model evaluation" },
                { label: "Stack", value: "Jupyter Notebook, Kaggle, Python (Pandas, NumPy, Matplotlib/Seaborn), Scikit-learn" },
                { label: "Role", value: "Data preprocessing, model development, evaluation, and visualization" }
            ],
            link: "https://github.com/Tanadon03/Data-Analytics"
        },
        {
            category: "2023 - 2025 WEB APP",
            title: "Professor DB Web Application",
            description: "Multi-page React application for managing academic staff records, including publications and student intake. Features complex CRUD operations and admin management workflows.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60",
            proj_img: [
                {
                    name: "Professor DB Web Application",
                    path: "https://tanadon03.github.io/Portfolio/img/ProfDB/1.png"
                }, {
                    name: "Research Search",
                    path: "https://tanadon03.github.io/Portfolio/img/ProfDB/2.png"
                }, {
                    name: "Profile",
                    path: "https://tanadon03.github.io/Portfolio/img/ProfDB/3.png"
                }, {
                    name: "Academic Works",
                    path: "https://tanadon03.github.io/Portfolio/img/ProfDB/4.png"
                }, {
                    name: "Edit Proceeding Page",
                    path: "https://tanadon03.github.io/Portfolio/img/ProfDB/5.png"
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
            proj_img: [
                { name: "Screenshot 1", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20015113.png" },
                { name: "Screenshot 2", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20015126.png" },
                { name: "Screenshot 3", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20015136.png" },
                { name: "Screenshot 4", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20015147.png" },
                { name: "Screenshot 5", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20015212.png" },
                { name: "Screenshot 6", path: "https://tanadon03.github.io/Portfolio/img/Chiller/Screenshot%202026-03-04%20141938.png" }
            ],
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
            proj_img: [
                { name: "Screenshot 1", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%20(94).png" },
                { name: "Screenshot 2", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%20(95).png" },
                { name: "Screenshot 3", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%20(98).png" },
                { name: "Screenshot 4", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%20(102).png" },
                { name: "Screenshot 5", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%20(103).png" },
                { name: "Screenshot 6", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot%202026-03-04%20021347.png" },
                { name: "Screenshot 7", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/Screenshot_20221217_110735.png" }
            ],
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
            proj_img: [
                { name: "AWS Cloud Foundations", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260321-31-kmowdn.png" },
                { name: "AWS Cloud Developing", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20260321-31-lo3u6n.png" },
                { name: "KMITL Smart Building", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/KMITL_Smart_Building.jpg" },
                { name: "Ollama Local LLM", path: "https://tanadon03.github.io/Portfolio/img/NodeProj/42_BKK_Python.png" }
            ],
            stats: [
                { label: "Focus", value: "Curiosity-driven learning & experimentation" },
                { label: "Stack", value: "GitHub (Jekyll), Google Apps Script, Ollama" },
                { label: "Nature", value: "Small builds, tool testing, and idea validation" }
            ],
            link: "#"
        }
    ]
};
