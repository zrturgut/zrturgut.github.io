export const sectionBackgrounds = {
    projects: "https://i.giphy.com/media/L8K62iTDkzGX6/giphy.webp", // Coding Matrix
    research: "https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.webp", // Neural Network
    experience: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Corporate Skyscrapers / City
    education: "https://i.giphy.com/media/U3qYN8S0j3bpK/giphy.webp",
    volunteering: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1200", // Community / People
    skills: "https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.webp",
};

export const resumeData = {
    about: "AI student at Vrije Universiteit Amsterdam with a strong interest in software engineering and machine learning. I enjoy developing intelligent systems that solve real world problems. Alongside my studies, I manage a taxi business in the Netherlands, combining entrepreneurship with practical experience.",
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
            id: "hackathon-hacker",
            title: "Hackathon Hacker",
            subtitle: "2nd Place | WTC AI Hackathon 🏆",
            gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            technologies: ["Python", "Software Architecture", "LLMOps", "GenAI"],
            repo: "https://github.com/zrturgut",
            details: [
                "Hackathon Hacker is that friend at every virtual networking event who hears your maybe-we-could and five minutes later has a GitHub repo, CI pipeline, and a README that feels like a victory speech.",
                "You share a half-baked idea and it returns a backend, APIs, data model, frontend mock, and DevOps plan — all packaged in a ZIP file that somehow matches your new level of confidence.",
                "Each project remembers its own history, so you can come back later and genuinely act like it was always part of your plan."
            ]
        },
        {
            id: "alma-ai",
            title: "Alma - Local AI Voice Assistant",
            subtitle: "Privacy-First LLM Assistant",
            gif: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
            technologies: ["Llama 3", "OpenAI Whisper", "Python", "Local RAG"],
            repo: "https://github.com/zrturgut",
            details: [
                "Built a privacy-first AI assistant from scratch using Meta's Llama 3 as the core intelligence engine. The application runs 100% locally on macOS, eliminating the need for cloud APIs.",
                "Full Privacy: Engineered a completely offline architecture where all data processing happens on-device.",
                "Voice Interaction: Integrated OpenAI Whisper for real-time, high-accuracy speech recognition.",
                "Smart Workspace: Developed a 'Projects' system allowing users to define custom personas and context for different workflows."
            ]
        },
        {
            id: "nlp-text-mining",
            title: "Text Mining: NLP & Sentiment",
            subtitle: "NER, Sentiment Analysis, Topic Class.",
            gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            technologies: ["BERT", "spaCy", "VADER", "Scikit-learn"],
            repo: "https://github.com/zrturgut",
            details: [
                "Worked as part of a team to build and evaluate NLP models for named entity recognition, sentiment analysis, and topic classification.",
                "Implemented VADER, Naive Bayes, Logistic Regression, Random Forest, spaCy transformers, and a fine-tuned BERT model.",
                "Best models reached 0.70 weighted F1 for NER, 0.71 F1 for sentiment analysis, and 77.78% accuracy for topic classification."
            ]
        },
        {
            id: "human-ai-robot",
            title: "Human-Robot Interaction Interface",
            subtitle: "Social Robotics Prototype",
            gif: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
            repo: "https://github.com/zrturgut",
            details: [
                "Architected the conversation logic for a Furhat social robot, creating natural, human-like dialogue flow.",
                "Built a real-time control dashboard using Kotlin and WebSockets for seamless remote operation.",
                "Conducted user studies to validate the effectiveness of the robot's empathetic response system."
            ]
        }
    ],
    volunteering: [
        {
            role: "Aurora Student Ambassador",
            institution: "Aurora Universities",
            period: "Nov 2024 – Present",
            details: [
                "Selected as a key representative for Vrije Universiteit Amsterdam within the Aurora European University Alliance.",
                "Facilitated international student engagement and policy workshops at major summits in Naples and Copenhagen."
            ]
        },
        {
            role: "Student Ambassador",
            institution: "Vrije Universiteit Amsterdam",
            period: "Nov 2025 – Present",
            details: [
                "Serving as the face of the AI department for prospective talent.",
                "Conducting curriculum walkthroughs, clarifying technical specializations, and guiding students through their academic decision-making process."
            ]
        },
        {
            role: "ESN Buddy",
            institution: "ESN The Netherlands",
            period: "Sep 2025 – Present",
            details: [
                "Mentoring international students during their transition to the Netherlands.",
                "Facilitating cultural integration and building a supportive community network for incoming scholars."
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
