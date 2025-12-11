export const sectionBackgrounds = {
    projects: "https://i.giphy.com/media/L8K62iTDkzGX6/giphy.webp", // Coding Matrix
    research: "https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.webp", // Neural Network
    experience: "https://i.giphy.com/media/3o7TKsAds5tX5uXJqU/giphy.webp", // City Time Lapse
    education: "https://i.giphy.com/media/U3qYN8S0j3bpK/giphy.webp", // Space Nebula
    skills: "https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.webp", // Digital Tech
};

export const resumeData = {
    education: [
        {
            institution: "Vrije Universiteit Amsterdam",
            location: "Amsterdam, Netherlands 🇳🇱",
            degree: "BSc Artificial Intelligence (Minor in Spanish)",
            period: "2023 – 2026",
            details: [
                "Specializing in the intersection of computer science, cognitive psychology, and logic to build intelligent systems.",
                "Developing robust proficiency in Python and algorithm design through hands-on projects in data mining and machine learning.",
                "Collaborating in multidisciplinary teams to solve complex technical problems, bridging the gap between theory and application.",
                "Selected coursework: Machine Learning, Data Structures & Algorithms, Applied Programming for AI, Text Mining"
            ]
        },
        {
            institution: "CBS Summer School",
            location: "CBS - Copenhagen 🇩🇰",
            degree: "Business Responses to Climate Change",
            period: "June 2025 – July 2025",
            details: [
                "Attended the summer school in Copenhagen as an exchange participant, collaborating with international peers on sustainability challenges.",
                "Worked with diverse teams to translate data insights into practical sustainability proposals for companies.",
                "Presented findings to corporate mentors."
            ]
        },
        {
            institution: "Universit`a degli Studi di Napoli Federico II",
            location: "Naples, Italy 🇮🇹",
            degree: "Erasmus+ Workshop: Governing Urban Metabolism",
            period: "May 2024",
            details: [
                "Traveled to Naples to participate in an interdisciplinary Erasmus workshop focused on urban resource flows and redevelopment.",
                "Combined data modeling with social and environmental perspectives to propose realistic redevelopment ideas."
            ]
        },
        {
            institution: "Istanbul University",
            location: "Istanbul, Turkey 🇹🇷",
            degree: "BSc Law",
            period: "2017 – 2020",
            details: [
                "Acquired a rigorous foundation in legal theory, case analysis, and formal logic.",
                "Developed strong analytical and research skills, learning to deconstruct complex systems of rules and arguments.",
                "Cultivated the ability to articulate structured reasoning, a skill directly transferable to algorithmic thinking and problem-solving."
            ]
        }
    ],
    experience: [
        {
            role: "IT Support",
            company: "Vrije Universiteit Amsterdam",
            period: "Nov 2025 – Present",
            details: [
                "Helped students and staff solve technical issues, communicating steps clearly and efficiently.",
                "Handled issues independently and took responsibility for finding practical solutions.",
                "Noticed patterns in common questions and contributed ideas that could reduce repeated requests."
            ]
        },
        {
            role: "Founder & Owner",
            company: "Nova Taxi Business",
            period: "Jun 2025 – Present",
            details: [
                "Founded and managed a small taxi company operating in the Netherlands, Belgium and Germany, handling logistics and customer communication."
            ]
        },
        {
            role: "Barista & Hospitality Staff",
            company: "Lebkov Zuidas",
            period: "Jul 2024 – Nov 2025",
            details: [
                "Served coffee and helped create small moments of joy for guests."
            ]
        }
    ],
    projects: [
        {
            id: "gen-ai-builder",
            title: "Generative AI Project Builder",
            subtitle: "Hackathon Award Winner 🏆",
            gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            technologies: ["React", "TypeScript", "OpenAI API", "Node.js"],
            repo: "https://github.com/zrturgut/gen-ai-builder",
            details: [
                "Engineered an autonomous agent system that generates full-stack codebases from a single text prompt.",
                "Integrated OpenAI's GPT-4 Turbo for high-fidelity code generation, creating frontend, backend, and documentation instantly.",
                "Secured 2nd Place at the WTC 40-Hour Hackathon for technical complexity and product polish."
            ]
        },
        {
            id: "auto-trading-bot",
            title: "High-Frequency Crypto Trading Bot",
            subtitle: "Algorithmic Trading System",
            gif: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800",
            technologies: ["Python", "Pandas", "Binance API", "Docker"],
            repo: "https://github.com/zrturgut/crypto-bot",
            details: [
                "Developed a fully automated trading bot capable of executing arbitrage strategies across multiple exchanges.",
                "Implemented real-time data ingestion and signal processing pipelines using WebSocket streams.",
                "Backtested strategies on 5+ years of historical data to optimize risk-adjusted returns."
            ]
        },
        {
            id: "human-ai-robot",
            title: "Human-Robot Interaction Interface",
            subtitle: "Social Robotics Prototype",
            gif: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
            repo: "https://github.com/zrturgut/human-ai-interaction",
            details: [
                "Architected the conversation logic for a Furhat social robot, creating natural, human-like dialogue flow.",
                "Built a real-time control dashboard using Kotlin and WebSockets for seamless remote operation.",
                "conducted user studies to validate the effectiveness of the robot's empathetic response system."
            ]
        },
        {
            id: "liver-disease-ml",
            title: "Predictive Healthcare Analytics Module",
            subtitle: "Medical Research AI",
            gif: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
            technologies: ["Python", "XGBoost", "Scikit-learn", "FastAPI"],
            repo: "https://github.com/zrturgut/liver-disease-classifiction",
            details: [
                "Trained and deployed high-accuracy classification models (Random Forest, Gradient Boosting) on 3500+ patient records.",
                "Achieved 94% accuracy in early detection of liver disease indicators through rigorous feature engineering.",
                "Created an explainable AI (XAI) layer to visualize model decision paths for medical professionals."
            ]
        },
        {
            id: "neural-vis",
            title: "Interactive Neural Network Visualizer",
            subtitle: "Educational 3D Web App",
            gif: "https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=800",
            technologies: ["Three.js", "React", "TensorFlow.js", "WebGL"],
            repo: "https://github.com/zrturgut/neural-vis",
            details: [
                "Developed a real-time 3D visualization of neural network training processes using Three.js and React.",
                "Visualized weights, biases, and activation functions in an interactive browser-based playground.",
                "Optimized WebGL rendering to handle thousands of nodes at 60 FPS on standard devices."
            ]
        },
        {
            id: "nlp-text-mining",
            title: "Advanced NLP & Sentiment Engine",
            subtitle: "Natural Language Processing",
            gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            technologies: ["PyTorch", "BERT", "HuggingFace", "FastAPI"],
            repo: "https://github.com/zrturgut/nlp-text-mining",
            details: [
                "Fine-tuned BERT models for complex sentiment analysis and named entity recognition on large-scale text corpora.",
                "Implemented massive parallel data processing pipelines using Python and NLTK.",
                "Reached 0.70 weighted F1 for NER, 0.71 F1 for sentiment and 77.78 percent accuracy for topic classification."
            ]
        }
    ],
    technicalSkills: {
        languages: ["Python 🐍", "R 📊", "SQL 🗄️", "Prolog 🧠", "Bash 🐚"],
        tools: ["Git 🐙", "VS Code 🆚", "PyCharm 🐍", "Jupyter 🪐", "Neo4j 🕸️", "GraphDB 🗂️", "Power BI 📈"],
        libraries: ["NumPy 🔢", "pandas 🐼", "scikit learn 🤖", "PyTorch 🔥", "spaCy 📝", "Matplotlib 📉"],
        spokenLanguages: ["Turkish (Native) 🇹🇷", "English (C1) 🇬🇧", "Dutch (B2) 🇳🇱", "Spanish (A2) 🇪🇸"]
    },
    achievements: [
        {
            title: "2nd Place @ WTC 40 Hour Hackathon",
            role: "Hackathon Hacker",
            description: "Built 'Generative AI Project Builder' - an AI assistant that instantly generates complete hackathon projects."
        }
    ]
};
