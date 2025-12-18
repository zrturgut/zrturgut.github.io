import { Language } from "./translations";

export const sectionBackgrounds = {
    projects: "https://i.giphy.com/media/L8K62iTDkzGX6/giphy.webp",
    research: "https://i.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.webp",
    experience: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    education: "https://i.giphy.com/media/U3qYN8S0j3bpK/giphy.webp",
    volunteering: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1200",
    skills: "https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.webp",
};

const commonSkills = {
    languages: ["Python 🐍", "R 📊", "SQL 🗄️", "Prolog 🧠", "Bash 🐚"],
    tools: ["Git 🐙", "VS Code 🆚", "PyCharm 🐍", "Jupyter 🪐", "Neo4j 🕸️", "GraphDB 🗂️", "Power BI 📈"],
    libraries: ["NumPy 🔢", "pandas 🐼", "scikit learn 🤖", "PyTorch 🔥", "spaCy 📝", "Matplotlib 📉"],
};

const data = {
    en: {
        about: "AI student at Vrije Universiteit Amsterdam...", // Legacy field, now handled in translations.ts but kept for safety
        education: [
            {
                institution: "Vrije Universiteit Amsterdam",
                location: "Amsterdam, Netherlands 🇳🇱",
                degree: "BSc Artificial Intelligence (Minor in Spanish)",
                period: "2023 – 2026",
                details: [
                    "Specializing in the intersection of computer science, cognitive psychology, and logic.",
                    "Developing robust proficiency in Python and algorithm design through hands-on projects.",
                    "Collaborating in multidisciplinary teams to solve complex technical problems.",
                    "Selected coursework: Machine Learning, Data Structures & Algorithms, Applied Programming for AI."
                ]
            },
            {
                institution: "CBS Summer School",
                location: "CBS - Copenhagen 🇩🇰",
                degree: "Business Responses to Climate Change",
                period: "June 2025 – July 2025",
                details: [
                    "Collaborated with international peers on sustainability challenges.",
                    "Translated data insights into practical sustainability proposals for companies."
                ]
            },
            {
                institution: "Universit`a degli Studi di Napoli Federico II",
                location: "Naples, Italy 🇮🇹",
                degree: "Erasmus+ Workshop: Governing Urban Metabolism",
                period: "May 2024",
                details: [
                    "Participated in an interdisciplinary Erasmus workshop on urban resource flows.",
                    "Combined data modeling with social perspectives to propose redevelopment ideas."
                ]
            },
            {
                institution: "Istanbul University",
                location: "Istanbul, Turkey 🇹🇷",
                degree: "BSc Law",
                period: "2017 – 2020",
                details: [
                    "Acquired a rigorous foundation in legal theory and formal logic.",
                    "Developed strong analytical and research skills.",
                    "Cultivated structured reasoning, transferable to algorithmic thinking."
                ]
            }
        ],
        experience: [
            {
                role: "IT Support",
                company: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Present",
                details: [
                    "Helping students and staff solve technical issues clearly and efficiently.",
                    "Handling issues independently and finding practical solutions.",
                    "Identifying patterns in common questions to reduce repeated requests."
                ]
            },
            {
                role: "Founder & Owner",
                company: "Nova Taxi Business",
                period: "Jun 2025 – Present",
                details: [
                    "Managing a taxi company operating in the Netherlands, Belgium and Germany.",
                    "Handling logistics, scheduling, and customer communication."
                ]
            },
            {
                role: "Barista & Hospitality Staff",
                company: "Lebkov Zuidas",
                period: "Jul 2024 – Nov 2025",
                details: [
                    "Served coffee and created small moments of joy for guests."
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
                repo: "zrturgut/hackathon-hacker",
                details: [
                    "An AI assistant that instantly generates complete hackathon projects from a single idea.",
                    "You share an idea, and it generates a backend, API, data model, and frontend mock.",
                    "Built during a 40-hour hackathon, demonstrating rapid prototyping capabilities."
                ]
            },
            {
                id: "alma-ai",
                title: "Alma - Local AI Assistant",
                subtitle: "Privacy-First LLM Assistant",
                gif: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                technologies: ["Llama 3", "OpenAI Whisper", "Python", "Local RAG"],
                repo: "zrturgut/alma",
                details: [
                    "Built a privacy-first AI assistant running 100% locally on macOS using Llama 3.",
                    "Features offline architecture for full privacy and data security.",
                    "Integrated OpenAI Whisper for high-accuracy real-time speech recognition."
                ]
            },
            {
                id: "nlp-text-mining",
                title: "Text Mining: NLP & Sentiment",
                subtitle: "NER, Sentiment Analysis",
                gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                technologies: ["BERT", "spaCy", "VADER", "Scikit-learn"],
                repo: "zrturgut/nlp-project",
                details: [
                    "Built NLP models for named entity recognition, sentiment analysis, and classification.",
                    "Implemented BERT, spaCy transformers, and traditional ML models.",
                    "Achieved high accuracy (0.71 F1) for sentiment analysis and topic classification."
                ]
            }
        ],
        volunteering: [
            {
                role: "Aurora Student Ambassador",
                institution: "Aurora Universities",
                period: "Nov 2024 – Present",
                details: [
                    "Representing VU Amsterdam within the Aurora European University Alliance.",
                    "Facilitating international student workshops in Naples and Copenhagen."
                ]
            },
            {
                role: "Student Ambassador",
                institution: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Present",
                details: [
                    "Serving as the face of the AI department for prospective talent.",
                    "Guiding new students through their academic decision-making process."
                ]
            },
            {
                role: "ESN Buddy",
                institution: "ESN The Netherlands",
                period: "Sep 2025 – Present",
                details: [
                    "Mentoring international students during their transition to the Netherlands.",
                    "Building a supportive community network for incoming scholars."
                ]
            }
        ],
        technicalSkills: {
            ...commonSkills,
            spokenLanguages: ["Turkish (Native) 🇹🇷", "English (C1) 🇬🇧", "Dutch (B2) 🇳🇱", "Spanish (A2) 🇪🇸"]
        },
        achievements: [
            {
                title: "2nd Place @ WTC 40 Hour Hackathon",
                role: "Hackathon Hacker",
                description: "Built 'Generative AI Project Builder' - an AI assistant that instantly generates complete hackathon projects."
            }
        ]
    },
    nl: {
        about: "AI student aan de Vrije Universiteit Amsterdam...",
        education: [
            {
                institution: "Vrije Universiteit Amsterdam",
                location: "Amsterdam, Nederland 🇳🇱",
                degree: "BSc Artificial Intelligence (Minor in Spaans)",
                period: "2023 – 2026",
                details: [
                    "Specialisatie in het snijvlak van informatica, cognitieve psychologie en logica om intelligente systemen te bouwen.",
                    "Ontwikkelen van sterke vaardigheden in Python en algoritme-ontwerp door praktische projecten in data mining en machine learning.",
                    "Samenwerken in multidisciplinaire teams om complexe technische problemen op te lossen, waarbij de kloof tussen theorie en praktijk wordt overbrugd.",
                    "Geselecteerde vakken: Machine Learning, Datastructuren & Algoritmen, Applied Programming voor AI, Text Mining"
                ]
            },
            {
                institution: "CBS Summer School",
                location: "CBS - Kopenhagen 🇩🇰",
                degree: "Business Responses to Climate Change",
                period: "Juni 2025 – Juli 2025",
                details: [
                    "Deelgenomen aan de zomerschool in Kopenhagen als uitwisselingsstudent, samenwerkend met internationale peers aan duurzaamheidsvraagstukken.",
                    "Samengewerkt met diverse teams om data-inzichten te vertalen naar praktische duurzaamheidsvoorstellen voor bedrijven.",
                    "Bevindingen gepresenteerd aan mentoren uit het bedrijfsleven."
                ]
            },
            {
                institution: "Università degli Studi di Napoli Federico II",
                location: "Napels, Italië 🇮🇹",
                degree: "Erasmus+ Workshop: Governing Urban Metabolism",
                period: "Mei 2024",
                details: [
                    "Afgereisd naar Napels om deel te nemen aan een interdisciplinaire Erasmus-workshop gericht op stedelijke bronstromen en herontwikkeling.",
                    "Datamodellering gecombineerd met sociale en ecologische perspectieven om realistische herontwikkelingsideeën voor te stellen."
                ]
            },
            {
                institution: "Istanbul University",
                location: "Istanbul, Turkije 🇹🇷",
                degree: "BSc Rechten",
                period: "2017 – 2020",
                details: [
                    "Een stevige basis gelegd in juridische theorie, casusanalyse en formele logica.",
                    "Sterke analytische en onderzoeksvaardigheden ontwikkeld door complexe systemen van regels en argumenten te deconstrueren.",
                    "Het vermogen ontwikkeld om gestructureerd te redeneren, een vaardigheid die direct toepasbaar is op algoritmisch denken en probleemoplossing."
                ]
            }
        ],
        experience: [
            {
                role: "IT Support",
                company: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Heden",
                details: [
                    "Studenten en personeel geholpen bij het oplossen van technische problemen, stappen helder en efficiënt communicerend.",
                    "Problemen zelfstandig afgehandeld en verantwoordelijkheid genomen voor het vinden van praktische oplossingen.",
                    "Patronen in veelgestelde vragen opgemerkt en ideeën aangedragen die herhaalde verzoeken kunnen verminderen."
                ]
            },
            {
                role: "Oprichter & Eigenaar",
                company: "Nova Taxi Business",
                period: "Jun 2025 – Heden",
                details: [
                    "Een klein taxibedrijf opgericht en beheerd dat actief is in Nederland, België en Duitsland, verantwoordelijk voor logistiek en klantcommunicatie."
                ]
            },
            {
                role: "Barista & Horecamedewerker",
                company: "Lebkov Zuidas",
                period: "Jul 2024 – Nov 2025",
                details: [
                    "Koffie geserveerd en geholpen bij het creëren van kleine geluksmomenten voor gasten."
                ]
            }
        ],
        projects: [
            {
                id: "hackathon-hacker",
                title: "Hackathon Hacker",
                subtitle: "2e Plaats | WTC AI Hackathon 🏆",
                gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Software Architectuur", "LLMOps", "GenAI"],
                repo: "zrturgut/hackathon-hacker",
                details: [
                    "Hackathon Hacker is die vriend op elk virtueel netwerkevenement die je 'misschien-kunnen-we' hoort en vijf minuten later een GitHub-repo, CI-pipeline en een README heeft die leest als een overwinningstoespraak.",
                    "Je deelt een half uitgewerkt idee en het geeft je een backend, API's, datamodel, frontend-mock en DevOps-plan terug — allemaal verpakt in een ZIP-bestand dat op de een of andere manier past bij je nieuwe niveau van zelfvertrouwen.",
                    "Elk project onthoudt zijn eigen geschiedenis, zodat je later terug kunt komen en echt kunt doen alsof het altijd al deel uitmaakte van je plan."
                ]
            },
            {
                id: "alma-ai",
                title: "Alma - Lokale AI Assistent",
                subtitle: "Privacy-First LLM Assistent",
                gif: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                technologies: ["Llama 3", "OpenAI Whisper", "Python", "Local RAG"],
                repo: "zrturgut/alma",
                details: [
                    "Een privacy-first AI-assistent gebouwd vanaf nul, gebruikmakend van Meta's Llama 3 als de kern intelligentie-engine. De applicatie draait 100% lokaal op macOS, waardoor cloud-API's overbodig zijn.",
                    "Volledige Privacy: Een volledig offline architectuur ontworpen waarbij alle dataverwerking op het apparaat plaatsvindt.",
                    "Spraakinteractie: OpenAI Whisper geïntegreerd voor real-time, zeer nauwkeurige spraakherkenning.",
                    "Slimme Werkplek: Een 'Projecten'-systeem ontwikkeld waarmee gebruikers aangepaste persona's en context kunnen definiëren voor verschillende workflows."
                ]
            },
            {
                id: "nlp-text-mining",
                title: "Text Mining: NLP & Sentiment",
                subtitle: "NER, Sentiment Analyse, Topic Class.",
                gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                technologies: ["BERT", "spaCy", "VADER", "Scikit-learn"],
                repo: "zrturgut/nlp-project",
                details: [
                    "Als onderdeel van een team gewerkt aan het bouwen en evalueren van NLP-modellen voor named entity recognition, sentimentanalyse en onderwerpclassificatie.",
                    "VADER, Naive Bayes, Logistic Regression, Random Forest, spaCy transformers en een fine-tuned BERT-model geïmplementeerd.",
                    "Beste modellen behaalden 0.70 gewogen F1 voor NER, 0.71 F1 voor sentimentanalyse en 77.78% nauwkeurigheid voor onderwerpclassificatie."
                ]
            },
            {
                id: "human-ai-robot",
                title: "Mens-Robot Interactie Interface",
                subtitle: "Sociale Robotica Prototype",
                gif: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
                repo: "zrturgut/human-robot-interaction",
                details: [
                    "De gesprekslogica ontworpen voor een Furhat sociale robot, waarmee een natuurlijke, menselijke dialoogstroom werd gecreëerd.",
                    "Een real-time besturingsdashboard gebouwd met Kotlin en WebSockets voor naadloze bediening op afstand.",
                    "Gebruikersonderzoeken uitgevoerd om de effectiviteit van het empathische reactiesysteem van de robot te valideren."
                ]
            }
        ],
        volunteering: [
            {
                role: "Aurora Studentambassadeur",
                institution: "Aurora Universities",
                period: "Nov 2024 – Heden",
                details: [
                    "Geselecteerd als belangrijk vertegenwoordiger voor de Vrije Universiteit Amsterdam binnen de Aurora European University Alliance.",
                    "Internationale studentenbetrokkenheid en beleidsworkshops gefaciliteerd op grote toppen in Napels en Kopenhagen."
                ]
            },
            {
                role: "Studentambassadeur",
                institution: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Heden",
                details: [
                    "Dienstdoend als het gezicht van de afdeling AI voor toekomstig talent.",
                    "Curriculum-walkthroughs geven, technische specialisaties verduidelijken en studenten begeleiden bij hun academische besluitvormingsproces."
                ]
            },
            {
                role: "ESN Buddy",
                institution: "ESN Nederland",
                period: "Sep 2025 – Heden",
                details: [
                    "Internationale studenten begeleiden tijdens hun overgang naar Nederland.",
                    "Culturele integratie faciliteren en een ondersteunend gemeenschapsnetwerk bouwen voor inkomende bursalen."
                ]
            }
        ],
        technicalSkills: {
            ...commonSkills,
            spokenLanguages: ["Turks (Moedertaal) 🇹🇷", "Engels (C1) 🇬🇧", "Nederlands (B2) 🇳🇱", "Spaans (A2) 🇪🇸"]
        },
        achievements: [
            {
                title: "2e Plaats @ WTC 40 Uur Hackathon",
                role: "Hackathon Hacker",
                description: "'Generative AI Project Builder' gebouwd - een AI-assistent die direct complete hackathon-projecten genereert."
            }
        ]
    },
    tr: {
        about: "VU Amsterdam'da Yapay Zeka öğrencisi...",
        education: [
            {
                institution: "Vrije Universiteit Amsterdam",
                location: "Amsterdam, Hollanda 🇳🇱",
                degree: "Lisans Yapay Zeka (İspanyolca Yan Dal)",
                period: "2023 – 2026",
                details: [
                    "Akıllı sistemler inşa etmek için bilgisayar bilimleri, bilişsel psikoloji ve mantığın kesişim noktasında uzmanlaşıyorum.",
                    "Veri madenciliği ve makine öğrenimi üzerine uygulamalı projeler aracılığıyla Python ve algoritma tasarımı konusunda sağlam yetkinlik geliştiriyorum.",
                    "Karmaşık teknik sorunları çözmek için disiplinler arası ekiplerde işbirliği yapıyor, teori ve uygulama arasındaki boşluğu dolduruyorum.",
                    "Seçilmiş Dersler: Makine Öğrenimi, Veri Yapıları ve Algoritmalar, AI için Uygulamalı Programlama, Metin Madenciliği"
                ]
            },
            {
                institution: "CBS Yaz Okulu",
                location: "CBS - Kopenhag 🇩🇰",
                degree: "İklim Değişikliğine İş Dünyası Yanıtları",
                period: "Haziran 2025 – Temmuz 2025",
                details: [
                    "Kopenhag'daki yaz okuluna değişim katılımcısı olarak katıldım, sürdürülebilirlik zorlukları konusunda uluslararası arkadaşlarla işbirliği yaptım.",
                    "Veri içgörülerini şirketler için pratik sürdürülebilirlik önerilerine dönüştürmek amacıyla çeşitli ekiplerle çalıştım.",
                    "Bulguları kurumsal mentorlara sundum."
                ]
            },
            {
                institution: "Università degli Studi di Napoli Federico II",
                location: "Napoli, İtalya 🇮🇹",
                degree: "Erasmus+ Atölyesi: Kentsel Metabolizmayı Yönetmek",
                period: "Mayıs 2024",
                details: [
                    "Kentsel kaynak akışları ve yeniden geliştirme odaklı disiplinler arası bir Erasmus atölyesine katılmak üzere Napoli'ye seyahat ettim.",
                    "Gerçekçi yeniden geliştirme fikirleri önermek için veri modellemeyi sosyal ve çevresel perspektiflerle birleştirdim."
                ]
            },
            {
                institution: "İstanbul Üniversitesi",
                location: "İstanbul, Türkiye 🇹🇷",
                degree: "Lisans Hukuk",
                period: "2017 – 2020",
                details: [
                    "Hukuk teorisi, vaka analizi ve formel mantık konusunda titiz bir temel edindim.",
                    "Karmaşık kural ve argüman sistemlerini yapıbozuma uğratarak güçlü analitik ve araştırma becerileri geliştirdim.",
                    "Algoritmik düşünceye ve problem çözmeye doğrudan aktarılabilir olan yapılandırılmış akıl yürütme yeteneğini geliştirdim."
                ]
            }
        ],
        experience: [
            {
                role: "IT Destek",
                company: "Vrije Universiteit Amsterdam",
                period: "Kas 2025 – Günümüz",
                details: [
                    "Öğrencilere ve personele teknik sorunları çözmede yardımcı oldum, adımları açık ve verimli bir şekilde ilettim.",
                    "Sorunları bağımsız olarak ele aldım ve pratik çözümler bulma sorumluluğunu üstlendim.",
                    "Yaygın sorulardaki kalıpları fark ettim ve tekrarlanan talepleri azaltabilecek fikirlere katkıda bulundum."
                ]
            },
            {
                role: "Kurucu & Sahip",
                company: "Nova Taksi İşletmesi",
                period: "Haz 2025 – Günümüz",
                details: [
                    "Hollanda, Belçika ve Almanya'da faaliyet gösteren, lojistik ve müşteri iletişimini yürüten küçük bir taksi şirketi kurdum ve yönetiyorum."
                ]
            },
            {
                role: "Barista & Servis Elemanı",
                company: "Lebkov Zuidas",
                period: "Tem 2024 – Kas 2025",
                details: [
                    "Kahve servisi yaptım ve misafirler için küçük mutluluk anları yaratmaya yardımcı oldum."
                ]
            }
        ],
        projects: [
            {
                id: "hackathon-hacker",
                title: "Hackathon Hacker",
                subtitle: "2.lik Ödülü | WTC AI Hackathon 🏆",
                gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Yazılım Mimarisi", "LLMOps", "GenAI"],
                repo: "zrturgut/hackathon-hacker",
                details: [
                    "Hackathon Hacker, her sanal ağ etkinliğinde 'belki-yapabiliriz' dediğinizi duyan ve beş dakika sonra elinde bir GitHub deposu, CI boru hattı ve zafer konuşması gibi okunan bir README ile gelen o arkadaştır.",
                    "Yarım yamalak bir fikir paylaşırsınız ve o size bir arka uç, API'ler, veri modeli, ön yüz taslağı ve DevOps planı döndürür — hepsi de yeni güven seviyenize bir şekilde uyan bir ZIP dosyasında paketlenmiştir.",
                    "Her proje kendi geçmişini hatırlar, böylece daha sonra geri dönüp gerçekten de bunun her zaman planınızın bir parçasıymış gibi davranabilirsiniz."
                ]
            },
            {
                id: "alma-ai",
                title: "Alma - Yerel AI Asistanı",
                subtitle: "Gizlilik Odaklı LLM Asistanı",
                gif: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                technologies: ["Llama 3", "OpenAI Whisper", "Python", "Yerel RAG"],
                repo: "zrturgut/alma",
                details: [
                    "Meta'nın Llama 3 modelini temel zeka motoru olarak kullanarak sıfırdan gizlilik odaklı bir yapay zeka asistanı geliştirdim. Uygulama tamamen macOS üzerinde yerel olarak çalışır ve bulut API'lerine olan ihtiyacı ortadan kaldırır.",
                    "Tam Gizlilik: Tüm veri işlemenin cihaz üzerinde gerçekleştiği tamamen çevrimdışı bir mimari tasarladım.",
                    "Ses Etkileşimi: Gerçek zamanlı, yüksek doğruluklu konuşma tanıma için OpenAI Whisper entegre ettim.",
                    "Akıllı Çalışma Alanı: Kullanıcıların farklı iş akışları için özel personalar ve bağlam tanımlamasına olanak tanıyan bir 'Projeler' sistemi geliştirdim."
                ]
            },
            {
                id: "nlp-text-mining",
                title: "Metin Madenciliği: NLP & Duygu",
                subtitle: "NER, Duygu Analizi, Konu Sınıflandırma",
                gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                technologies: ["BERT", "spaCy", "VADER", "Scikit-learn"],
                repo: "zrturgut/nlp-project",
                details: [
                    "Varlık isimlendirme (NER), duygu analizi ve konu sınıflandırma için NLP modelleri oluşturmak ve değerlendirmek üzere bir ekibin parçası olarak çalıştım.",
                    "VADER, Naive Bayes, Lojistik Regresyon, Random Forest, spaCy transformer'ları ve ince ayarlı (fine-tuned) bir BERT modeli uyguladım.",
                    "En iyi modeller NER için 0.70 ağırlıklı F1, duygu analizi için 0.71 F1 ve konu sınıflandırma için %77.78 doğruluk elde etti."
                ]
            },
            {
                id: "human-ai-robot",
                title: "İnsan-Robot Etkileşim Arayüzü",
                subtitle: "Sosyal Robotik Prototipi",
                gif: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
                repo: "zrturgut/human-robot-interaction",
                details: [
                    "Bir Furhat sosyal robotu için konuşma mantığını tasarladım, doğal ve insan benzeri bir diyalog akışı oluşturdum.",
                    "Sorunsuz uzaktan kullanım için Kotlin ve WebSockets kullanarak gerçek zamanlı bir kontrol paneli inşa ettim.",
                    "Robotun empatik tepki sisteminin etkinliğini doğrulamak için kullanıcı çalışmaları yürüttüm."
                ]
            }
        ],
        volunteering: [
            {
                role: "Aurora Öğrenci Elçisi",
                institution: "Aurora Üniversiteleri",
                period: "Kas 2024 – Günümüz",
                details: [
                    "Aurora Avrupa Üniversiteler Birliği içinde Vrije Universiteit Amsterdam'ı temsil eden kilit bir temsilci olarak seçildim.",
                    "Napoli ve Kopenhag'daki büyük zirvelerde uluslararası öğrenci katılımını ve politika atölyelerini kolaylaştırdım."
                ]
            },
            {
                role: "Öğrenci Elçisi",
                institution: "Vrije Universiteit Amsterdam",
                period: "Kas 2025 – Günümüz",
                details: [
                    "Geleceğin yetenekleri için AI departmanının yüzü olarak hizmet veriyorum.",
                    "Müfredat tanıtımları yapıyor, teknik uzmanlık alanlarını açıklıyor ve öğrencilere akademik karar verme süreçlerinde rehberlik ediyorum."
                ]
            },
            {
                role: "ESN Buddy",
                institution: "ESN Hollanda",
                period: "Eyl 2025 – Günümüz",
                details: [
                    "Uluslararası öğrencilere Hollanda'ya geçiş süreçlerinde mentorluk yapıyorum.",
                    "Gelen akademisyenler için kültürel entegrasyonu kolaylaştırıyor ve destekleyici bir topluluk ağı oluşturuyorum."
                ]
            }
        ],
        technicalSkills: {
            ...commonSkills,
            spokenLanguages: ["Türkçe (Anadil) 🇹🇷", "İngilizce (C1) 🇬🇧", "Felemenkçe (B2) 🇳🇱", "İspanyolca (A2) 🇪🇸"]
        },
        achievements: [
            {
                title: "2.lik Ödülü @ WTC 40 Saat Hackathon",
                role: "Hackathon Hacker",
                description: "'Generative AI Project Builder'ı inşa ettim - tek bir fikirden anında tam hackathon projeleri üreten bir yapay zeka asistanı."
            }
        ]
    },
    es: {
        about: "Estudiante de IA en la Vrije Universiteit Amsterdam...",
        education: [
            {
                institution: "Vrije Universiteit Amsterdam",
                location: "Ámsterdam, Países Bajos 🇳🇱",
                degree: "BSc Inteligencia Artificial (Minor en Español)",
                period: "2023 – 2026",
                details: [
                    "Especializándome en la intersección de informática, psicología cognitiva y lógica para construir sistemas inteligentes.",
                    "Desarrollando una sólida competencia en Python y diseño de algoritmos a través de proyectos prácticos en minería de datos y aprendizaje automático.",
                    "Colaborando en equipos multidisciplinarios para resolver problemas técnicos complejos, cerrando la brecha entre la teoría y la aplicación.",
                    "Cursos seleccionados: Aprendizaje Automático, Estructuras de Datos y Algoritmos, Programación Aplicada para IA, Minería de Textos"
                ]
            },
            {
                institution: "Escuela de Verano CBS",
                location: "CBS - Copenhague 🇩🇰",
                degree: "Respuestas Empresariales al Cambio Climático",
                period: "Junio 2025 – Julio 2025",
                details: [
                    "Asistí a la escuela de verano en Copenhague como participante de intercambio, colaborando con compañeros internacionales en desafíos de sostenibilidad.",
                    "Trabajé con equipos diversos para traducir conocimientos de datos en propuestas prácticas de sostenibilidad para empresas.",
                    "Presenté los hallazgos a mentores corporativos."
                ]
            },
            {
                institution: "Università degli Studi di Napoli Federico II",
                location: "Nápoles, Italia 🇮🇹",
                degree: "Taller Erasmus+: Gobernanza del Metabolismo Urbano",
                period: "Mayo 2024",
                details: [
                    "Viajé a Nápoles para participar en un taller interdisciplinario Erasmus centrado en flujos de recursos urbanos y reurbanización.",
                    "Combiné modelado de datos con perspectivas sociales y ambientales para proponer ideas realistas de reurbanización."
                ]
            },
            {
                institution: "Universidad de Estambul",
                location: "Estambul, Turquía 🇹🇷",
                degree: "BSc Derecho",
                period: "2017 – 2020",
                details: [
                    "Adquirí una base rigurosa en teoría legal, análisis de casos y lógica formal.",
                    "Desarrollé sólidas habilidades analíticas y de investigación, aprendiendo a deconstruir complejos sistemas de reglas y argumentos.",
                    "Cultivé la capacidad de articular un razonamiento estructurado, una habilidad directamente transferible al pensamiento algorítmico y la resolución de problemas."
                ]
            }
        ],
        experience: [
            {
                role: "Soporte TI",
                company: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Presente",
                details: [
                    "Ayudé a estudiantes y personal a resolver problemas técnicos, comunicando los pasos de manera clara y eficiente.",
                    "Manejé problemas de forma independiente y asumí la responsabilidad de encontrar soluciones prácticas.",
                    "Identifiqué patrones en preguntas comunes y contribuí con ideas que podrían reducir las solicitudes repetidas."
                ]
            },
            {
                role: "Fundador y Propietario",
                company: "Nova Taxi Business",
                period: "Jun 2025 – Presente",
                details: [
                    "Fundé y gestiono una pequeña empresa de taxis que opera en los Países Bajos, Bélgica y Alemania, encargándome de la logística y la comunicación con los clientes."
                ]
            },
            {
                role: "Barista y Personal de Hostelería",
                company: "Lebkov Zuidas",
                period: "Jul 2024 – Nov 2025",
                details: [
                    "Serví café y ayudé a crear pequeños momentos de alegría para los clientes."
                ]
            }
        ],
        projects: [
            {
                id: "hackathon-hacker",
                title: "Hackathon Hacker",
                subtitle: "2º Lugar | WTC AI Hackathon 🏆",
                gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Arquitectura de Software", "LLMOps", "GenAI"],
                repo: "zrturgut/hackathon-hacker",
                details: [
                    "Hackathon Hacker es ese amigo en cada evento de networking virtual que escucha tu 'tal-vez-podríamos' y cinco minutos después tiene un repositorio de GitHub, un pipeline de CI y un README que se lee como un discurso de victoria.",
                    "Compartes una idea a medio cocinar y te devuelve un backend, APIs, modelo de datos, mock frontend y plan de DevOps — todo empaquetado en un archivo ZIP que de alguna manera coincide con tu nuevo nivel de confianza.",
                    "Cada proyecto recuerda su propia historia, para que puedas volver más tarde y actuar genuinamente como si siempre hubiera sido parte de tu plan."
                ]
            },
            {
                id: "alma-ai",
                title: "Alma - Asistente de IA Local",
                subtitle: "Asistente LLM Privado",
                gif: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                technologies: ["Llama 3", "OpenAI Whisper", "Python", "Local RAG"],
                repo: "zrturgut/alma",
                details: [
                    "Construí un asistente de IA enfocado en la privacidad desde cero, utilizando Llama 3 de Meta como el motor de inteligencia central. La aplicación se ejecuta 100% localmente en macOS, eliminando la necesidad de APIs en la nube.",
                    "Privacidad Total: Diseñé una arquitectura completamente offline donde todo el procesamiento de datos ocurre en el dispositivo.",
                    "Interacción por Voz: Integré OpenAI Whisper para un reconocimiento de voz en tiempo real de alta precisión.",
                    "Espacio de Trabajo Inteligente: Desarrollé un sistema de 'Proyectos' que permite a los usuarios definir personas y contextos personalizados para diferentes flujos de trabajo."
                ]
            },
            {
                id: "nlp-text-mining",
                title: "Minería de Texto: NLP y Sentimiento",
                subtitle: "NER, Análisis de Sentimiento, Clasificación de Temas",
                gif: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
                technologies: ["BERT", "spaCy", "VADER", "Scikit-learn"],
                repo: "zrturgut/nlp-project",
                details: [
                    "Trabajé como parte de un equipo para construir y evaluar modelos de NLP para reconocimiento de entidades nombradas, análisis de sentimiento y clasificación de temas.",
                    "Implementé VADER, Naive Bayes, Regresión Logística, Random Forest, transformers de spaCy y un modelo BERT ajustado (fine-tuned).",
                    "Los mejores modelos alcanzaron 0.70 F1 ponderado para NER, 0.71 F1 para análisis de sentimiento y 77.78% de precisión para clasificación de temas."
                ]
            },
            {
                id: "human-ai-robot",
                title: "Interfaz de Interacción Humano-Robot",
                subtitle: "Prototipo de Robótica Social",
                gif: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
                technologies: ["Python", "Kotlin", "WebSockets", "Furhat SDK"],
                repo: "zrturgut/human-robot-interaction",
                details: [
                    "Diseñé la lógica de conversación para un robot social Furhat, creando un flujo de diálogo natural y humano.",
                    "Construí un panel de control en tiempo real utilizando Kotlin y WebSockets para una operación remota fluida.",
                    "Realicé estudios con usuarios para validar la efectividad del sistema de respuesta empática del robot."
                ]
            }
        ],
        volunteering: [
            {
                role: "Embajador Estudiantil Aurora",
                institution: "Universidades Aurora",
                period: "Nov 2024 – Presente",
                details: [
                    "Seleccionado como representante clave para la Vrije Universiteit Amsterdam dentro de la Alianza de Universidades Europeas Aurora.",
                    "Facilité la participación de estudiantes internacionales y talleres de políticas en cumbres importantes en Nápoles y Copenhague."
                ]
            },
            {
                role: "Embajador Estudiantil",
                institution: "Vrije Universiteit Amsterdam",
                period: "Nov 2025 – Presente",
                details: [
                    "Sirviendo como la cara del departamento de IA para el talento futuro.",
                    "Realizando recorridos curriculares, aclarando especializaciones técnicas y guiando a los estudiantes a través de su proceso de toma de decisiones académicas."
                ]
            },
            {
                role: "Compañero ESN",
                institution: "ESN Países Bajos",
                period: "Sep 2025 – Presente",
                details: [
                    "Mentoring de estudiantes internacionales durante su transición a los Países Bajos.",
                    "Facilitando la integración cultural y construyendo una red comunitaria de apoyo para los académicos entrantes."
                ]
            }
        ],
        technicalSkills: {
            ...commonSkills,
            spokenLanguages: ["Turco (Nativo) 🇹🇷", "Inglés (C1) 🇬🇧", "Holandés (B2) 🇳🇱", "Español (A2) 🇪🇸"]
        },
        achievements: [
            {
                title: "2º Lugar @ Hackathon 40 Horas WTC",
                role: "Hackathon Hacker",
                description: "Construí 'Generative AI Project Builder' - un asistente de IA que genera proyectos de hackathon completos al instante."
            }
        ]
    }
};

export const getResumeData = (lang: Language) => data[lang];
