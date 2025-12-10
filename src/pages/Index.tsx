import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Navigation from "@/components/Navigation";
import { resumeData, sectionBackgrounds } from "@/data/resume";
import { translations, Language } from "@/data/translations";
import { Code2, GraduationCap, Briefcase, Terminal, Eye, ChevronRight, Zap } from "lucide-react";
import SkillsGraph from "@/components/SkillsGraph";
import ProjectModal from "@/components/ProjectModal";
import AIStrategyGame from "@/components/AIStrategyGame";

// UI Components
import Card from "@/components/ui/Card";
import TiltCard from "@/components/ui/TiltCard";
import CustomCursor from "@/components/ui/CustomCursor";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>('nl');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showGame, setShowGame] = useState(false);
  const t = translations[lang];

  return (
    <div className="bg-black text-white relative min-h-screen font-sans selection:bg-purple-500/30 overflow-hidden">
      <CustomCursor />
      {showGame && <AIStrategyGame onClose={() => setShowGame(false)} />}
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeBackground />
      </div>

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="relative z-50 h-screen flex flex-col items-center justify-center p-4 cursor-default"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 lowercase select-none">
                <GlitchText text="zekeriyya" />
              </h1>
              <div className="space-y-4">
                <p className="text-lg md:text-2xl text-purple-200/50 tracking-[0.5em] font-light uppercase h-8 lowercase">
                  <Typewriter text={t.role} delay={1.5} />
                </p>
                {/* One Sentence Intro */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 1 }}
                  className="text-sm md:text-base text-gray-400 font-light max-w-md mx-auto"
                >
                  Building digital experiences at the intersection of design and artificial intelligence.
                </motion.p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              onClick={() => setShowLanding(false)}
              className="mt-16 px-8 py-3 rounded-full border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 transition-all duration-500 text-sm tracking-widest lowercase text-gray-400 hover:text-white hover:scale-105 z-50 group flex items-center gap-2"
              aria-label="Enter Portfolio"
            >
              <span>{t.enter}</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            <Navigation
              onBackToHome={() => setShowLanding(true)}
              lang={lang}
              setLang={setLang}
              onOpenGame={() => setShowGame(true)}
            />

            {/* Semantic Section Wrapper */}
            <main className="relative z-10 container mx-auto px-4 py-32 flex-grow h-[120vh]">
              <section
                className="flex flex-col md:flex-row h-full gap-4 md:gap-0 border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/5"
                aria-label="Portfolio Sections"
              >

                {/* PROJECTS - With Navigation Hint */}
                <Card
                  index={0}
                  title={t.cards.projects.title}
                  subtitle={t.cards.projects.subtitle}
                  icon={Code2}
                  backgroundImage={sectionBackgrounds.projects}
                  isActive={activeIndex === 0}
                  onClick={() => setActiveIndex(0)}
                >
                  {activeIndex !== 0 && (
                    <div className="absolute top-1/2 -left-4 md:-top-16 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 animate-bounce opacity-50 pointer-events-none">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                    {resumeData.projects.map((project, i) => (
                      <TiltCard key={i} className="h-full" onClick={() => setSelectedProject(project)}>
                        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 h-full cursor-pointer">
                          {/* Actions */}
                          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button className="p-2 bg-purple-500/80 backdrop-blur rounded-full text-white shadow-lg hover:bg-purple-400 transition-colors" aria-label={`View details for ${project.title}`}>
                              <Eye size={16} />
                            </button>
                          </div>

                          {project.gif && (
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                              <img src={project.gif} alt="" loading="lazy" className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="relative z-20 p-8 h-full flex flex-col">
                            <div className="mb-4">
                              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">{project.title}</h3>
                              {project.subtitle && <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-mono rounded-full border border-purple-500/20">{project.subtitle}</span>}

                              {project.technologies && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                  {project.technologies.slice(0, 4).map((tech, t) => (
                                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border border-white/10 bg-black/50 text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors">
                                      {tech}
                                    </span>
                                  ))}
                                  {project.technologies.length > 4 && <span className="text-[10px] text-gray-500 py-1">+{project.technologies.length - 4}</span>}
                                </div>
                              )}
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-4 group-hover:text-gray-200 transition-colors">
                              {project.details[0]}
                            </p>
                            <div className="mt-auto flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
                              Read Case Study <ChevronRight className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        </article>
                      </TiltCard>
                    ))}
                  </div>
                </Card>

                {/* EXPERIENCE */}
                <Card
                  index={1}
                  title={t.cards.experience.title}
                  subtitle={t.cards.experience.subtitle}
                  icon={Briefcase}
                  backgroundImage={sectionBackgrounds.experience}
                  isActive={activeIndex === 1}
                  onClick={() => setActiveIndex(1)}
                >
                  <div className="space-y-12 pl-2 max-w-4xl">
                    {resumeData.experience.map((exp, i) => (
                      <article key={i} className="relative pl-8 border-l-2 border-white/10 hover:border-purple-500 transition-colors duration-500 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-purple-500 group-hover:scale-125 transition-all duration-500" />
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{exp.role}</h3>
                          <span className="hidden md:inline text-white/20">•</span>
                          <span className="text-purple-400 font-mono text-sm uppercase tracking-wider">{exp.company}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-mono mb-4 bg-white/5 py-1 px-3 rounded w-fit border border-white/5">{exp.period}</p>
                        <ul className="space-y-3 text-gray-400 group-hover:text-gray-300">
                          {exp.details.map((detail, j) => (
                            <li key={j} className="text-base leading-relaxed flex gap-3">
                              <span className="text-purple-500/50 mt-1.5 min-w-[4px] h-[4px] rounded-full bg-purple-500" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </Card>

                {/* EDUCATION */}
                <Card
                  index={2}
                  title={t.cards.education.title}
                  subtitle={t.cards.education.subtitle}
                  icon={GraduationCap}
                  backgroundImage={sectionBackgrounds.education}
                  isActive={activeIndex === 2}
                  onClick={() => setActiveIndex(2)}
                >
                  <div className="grid gap-6 max-w-3xl">
                    {resumeData.education.map((edu, i) => (
                      <article key={i} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-purple-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4 relative z-10">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{edu.institution}</h3>
                            <p className="text-purple-400/80 mt-1">{edu.degree}</p>
                          </div>
                          <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono whitespace-nowrap border border-white/5">{edu.period}</span>
                        </div>

                        <p className="text-sm text-gray-500 mb-6 flex items-center gap-2 relative z-10">
                          <span className="w-1 h-1 bg-gray-500 rounded-full" />
                          {edu.location}
                        </p>

                        {edu.details.length > 0 && (
                          <div className="pt-6 border-t border-white/5 relative z-10">
                            <ul className="text-sm text-gray-400 space-y-2">
                              {edu.details.map((detail, j) => (
                                <li key={j} className="flex gap-2">
                                  <span className="opacity-50 text-purple-400">→</span> {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </article>
                    ))}

                    {/* Achievement Section (Quick Update) */}
                    <div className="mt-8">
                      <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" /> Recognitions & Hackathons
                      </h3>
                      <div className="bg-gradient-to-r from-purple-900/20 to-black p-4 rounded-lg border border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                          <h4 className="font-bold text-white">Top 5 Finalist @ AI Hackathon 2024</h4>
                          <p className="text-xs text-gray-400">Recognized for innovative use of Generative Agents.</p>
                        </div>
                        <span className="text-xs font-mono border border-purple-500/50 text-purple-300 px-2 py-1 rounded">Ranked 5th / 100+</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* SKILLS */}
                <Card
                  index={3}
                  title={t.cards.skills.title}
                  subtitle={t.cards.skills.subtitle}
                  icon={Terminal}
                  backgroundImage={sectionBackgrounds.skills}
                  isActive={activeIndex === 3}
                  onClick={() => setActiveIndex(3)}
                >
                  <div className="w-full h-full min-h-[500px] flex flex-col relative">
                    <div className="absolute top-0 right-0 z-10 flex gap-2">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10 text-[10px] text-gray-400">
                        <span className="w-2 h-2 bg-purple-500 rounded-full inline-block mr-2" />Languages
                      </div>
                      <div className="px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10 text-[10px] text-gray-400">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full inline-block mr-2" />AI/ML
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 text-center font-mono uppercase tracking-widest text-xs">
                      Interactive Network • Click nodes to explore
                    </p>
                    <SkillsGraph />
                  </div>
                </Card>

              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
