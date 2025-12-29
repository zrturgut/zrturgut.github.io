export type Language = 'en' | 'nl' | 'tr' | 'es';

export const translations = {
    en: {
        role: "AI Engineer",
        enter: "enter portfolio",
        location: "amsterdam • available",
        cards: {
            projects: { title: "projects", subtitle: "selected works & research" },
            experience: { title: "experience", subtitle: "career history" },
            education: { title: "education", subtitle: "academic background" },
            skills: { title: "skills", subtitle: "technical proficiency" },
        },
        sections: {
            programming: "programming",
            ai_ml: "AI / ML",
            tools: "tools",
            spoken_languages: "spoken languages"
        }
    },
    nl: {
        role: "AI Engineer",
        enter: "portfolio openen",
        location: "amsterdam • beschikbaar",
        cards: {
            projects: { title: "projecten", subtitle: "geselecteerde werken" },
            experience: { title: "ervaring", subtitle: "loopbaan" },
            education: { title: "opleiding", subtitle: "academische achtergrond" },
            skills: { title: "vaardigheden", subtitle: "technische bekwaamheid" },
        },
        sections: {
            programming: "programmeren",
            ai_ml: "AI / ML",
            tools: "tools",
            spoken_languages: "gesproken talen"
        }
    },
    tr: {
        role: "Yapay Zeka Mühendisi",
        enter: "portfolyoya gir",
        location: "amsterdam • müsait",
        cards: {
            projects: { title: "projeler", subtitle: "seçilmiş çalışmalar" },
            experience: { title: "deneyim", subtitle: "kariyer geçmişi" },
            education: { title: "eğitim", subtitle: "akademik geçmiş" },
            skills: { title: "yetenekler", subtitle: "teknik yeterlilik" },
        },
        sections: {
            programming: "programlama",
            ai_ml: "Yapay Zeka / ML",
            tools: "araçlar",
            spoken_languages: "konuşulan diller"
        }
    },
    es: {
        role: "Ingeniero de IA",
        enter: "entrar al portafolio",
        location: "ámsterdam • disponible",
        cards: {
            projects: { title: "proyectos", subtitle: "trabajos seleccionados" },
            experience: { title: "experiencia", subtitle: "trayectoria profesional" },
            education: { title: "educación", subtitle: "formación académica" },
            skills: { title: "habilidades", subtitle: "competencia técnica" },
        },
        sections: {
            programming: "programación",
            ai_ml: "IA / ML",
            tools: "herramientas",
            spoken_languages: "idiomas hablados"
        }
    }
};
