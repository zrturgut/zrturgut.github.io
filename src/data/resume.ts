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
            location: "Amsterdam, Netherlands",
            degree: "BSc Artificial Intelligence (Minor in Spanish)",
            period: "2023 – 2026",
            details: [
                "Selected coursework: Machine Learning, Data Structures & Algorithms, Applied Programming for AI, Text Mining"
            ]
        },
        {
            institution: "CBS Summer School",
            location: "CBS - Copenhagen",
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
            location: "Naples, Italy",
            degree: "Erasmus+ Workshop: Governing Urban Metabolism",
            period: "May 2024",
            details: [
                "Traveled to Naples to participate in an interdisciplinary Erasmus workshop focused on urban resource flows and redevelopment.",
                "Combined data modeling with social and environmental perspectives to propose realistic redevelopment ideas."
            ]
        },
        {
            institution: "Istanbul University",
            location: "Istanbul, Turkey",
            degree: "BSc Law",
            period: "2017 – 2020",
            details: []
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
            title: "Generative AI Project Builder",
            subtitle: "Hackathon Hacker – 2nd Place at WTC 40 Hour Hackathon",
            gif: "https://i.giphy.com/media/26tn33aiTi1jkl6H6/giphy.webp",
            technologies: ["React", "TypeScript", "OpenAI API", "Tailwind"],
            details: [
                "Created an AI assistant that instantly generates complete hackathon projects including architecture, backend, frontend, tests and documentation.",
                "Collaborated closely with teammates to rapidly ideate, prototype and present a functional solution to judges."
            ]
        },
        {
            title: "Human AI Interaction Prototype",
            subtitle: "",
            gif: "https://i.giphy.com/media/NvVO0lqVd9yP6/giphy.webp",
            technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
            details: [
                "Built a working prototype of a Furhat social robot, focusing on natural interaction and clear conversational behavior.",
                "Designed and implemented a supporting web interface to ensure intuitive usability and smooth communication between users and the robot."
            ]
        },
        {
            title: "Liver Disease Classification with Machine Learning",
            subtitle: "Research Project",
            gif: "https://i.giphy.com/media/TqiwHbFBaZ4ti/giphy.webp",
            technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
            details: [
                "Developed classification models (Random Forest, Gradient Boosting) using Python, scikit learn, pandas, Matplotlib on more than 3500 samples.",
                "Applied structured experimentation and iteration to improve model reliability and explainability."
            ]
        },
        {
            title: "Text Mining for AI: NLP Model Development",
            subtitle: "Research Project",
            gif: "https://i.giphy.com/media/U3qYN8S0j3bpK/giphy.webp",
            technologies: ["Python", "BERT", "spaCy", "NLTK", "PyTorch"],
            details: [
                "Worked in a team to build models for sentiment analysis, topic classification and named entity recognition.",
                "Used VADER, Naive Bayes, Logistic Regression, Random Forest, spaCy transformers and fine tuned BERT.",
                "Reached 0.70 weighted F1 for NER, 0.71 F1 for sentiment and 77.78 percent accuracy for topic classification."
            ]
        }
    ],
    technicalSkills: {
        languages: ["Python", "R", "SQL", "Prolog", "Bash"],
        tools: ["Git", "VS Code", "PyCharm", "Jupyter", "Neo4j", "GraphDB", "Power BI"],
        libraries: ["NumPy", "pandas", "scikit learn", "PyTorch", "spaCy", "Matplotlib"],
        spokenLanguages: ["Turkish (Native) 🇹🇷", "English (C1) 🇬🇧", "Dutch (B2) 🇳🇱", "Spanish (A2) 🇪🇸"]
    }
};
