export type Language = 'en' | 'nl' | 'tr' | 'es';

export const translations = {
    en: {
        role: "ai engineer",
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
            ai_ml: "ai / ml",
            tools: "tools",
            spoken_languages: "spoken languages"
        }
    },
    nl: {
        role: "ai engineer",
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
            ai_ml: "ai / ml",
            tools: "tools",
            spoken_languages: "gesproken talen"
        }
    },
    tr: {
        role: "yapay zeka mühendisi",
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
            ai_ml: "yapay zeka / makine öğrenimi",
            tools: "araçlar",
            spoken_languages: "konuşulan diller"
        }
    },
    es: {
        role: "ingeniero de ia",
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
            ai_ml: "ia / ml",
            tools: "herramientas",
            spoken_languages: "idiomas hablados"
        }
    }
};
