import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import FluidBackground from "@/components/FluidBackground";
import Navigation from "@/components/Navigation";
import { resumeData, sectionBackgrounds } from "@/data/resume";
import { translations, Language } from "@/data/translations";
import { ChevronRight, Eye, Briefcase, Zap } from "lucide-react";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectModal from "@/components/ProjectModal";
import AIStrategyGame from "@/components/AIStrategyGame";
import { ReactLenis } from '@studio-freight/react-lenis';

// UI Components
import PortfolioSection from "@/components/ui/PortfolioSection";
import TiltCard from "@/components/ui/TiltCard";
import CustomCursor from "@/components/ui/CustomCursor";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";
import Marquee from "@/components/ui/Marquee";
import StickyCTA, { ProgressBar } from "@/components/ui/StickyCTA";

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>('nl');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showGame, setShowGame] = useState(false);
  const t = translations[lang];

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 0.8, smoothTouch: false }}>
      <div className="bg-black text-white relative min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">
        <ProgressBar />
        <CustomCursor />
        <StickyCTA />

        {showGame && <AIStrategyGame onClose={() => setShowGame(false)} />}
        <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />

        {/* Global Fluid Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FluidBackground />
        </div>

        <div className="fixed top-0 w-full z-40 mt-1 pointer-events-none opacity-50">
          {/* Optional top decoration */}
        </div>

        <AnimatePresence mode="wait">
          {showLanding ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative z-50 h-screen flex flex-col items-center justify-center p-4 cursor-default overflow-hidden"
            >
              {/* Massive Kinetic Typography */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1.2, ease: "circOut" }}
                className="flex flex-col items-center leading-none z-10"
              >
                <h1 className="text-[12vw] md:text-[15vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-white via-white to-white/50 mix-blend-overlay select-none hover:scale-105 transition-transform duration-700 lowercase">
                  iamzekeriyya
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5 }}
                  className="h-[2px] bg-white/30 my-4"
                />
                <h2 className="text-2xl md:text-4xl font-light tracking-[0.5em] text-white/60 uppercase mix-blend-difference">
                  {t.role}
                </h2>
              </motion.div>

              {/* Minimalist Enter Trigger */}
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 1 }}
                onClick={() => setShowLanding(false)}
                className="absolute bottom-20 group cursor-pointer"
                aria-label="Enter Portfolio"
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">Enter System</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:border-white transition-all duration-500 bg-white/5 backdrop-blur-sm">
                    <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </div>
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

              <div className="pt-24 pb-4">
                <Marquee />
              </div>

              <main className="relative z-10 w-full">

                {/* 1. PROJECTS SECTION */}
                <PortfolioSection
                  id="projects"
                  index={0}
                  title={t.cards.projects.title}
                  subtitle={t.cards.projects.subtitle}
                  backgroundImage={sectionBackgrounds.projects}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, i) => (
                      <TiltCard key={i} className="h-full min-h-[400px]" onClick={() => setSelectedProject(project)}>
                        <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 h-full cursor-pointer flex flex-col">
                          {/* Actions */}
                          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            <button className="p-2 bg-purple-500/80 backdrop-blur rounded-full text-white shadow-lg hover:bg-purple-400 transition-colors">
                              <Eye size={16} />
                            </button>
                          </div>

                          {project.gif && (
                            <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                              <img src={project.gif} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                          )}

                          <div className="relative z-20 p-6 flex flex-col flex-grow">
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
                </PortfolioSection>

                {/* 2. EXPERIENCE SECTION */}
                <PortfolioSection
                  id="experience"
                  index={1}
                  title={t.cards.experience.title}
                  subtitle={t.cards.experience.subtitle}
                  backgroundImage={sectionBackgrounds.experience}
                >
                  <div className="max-w-4xl mx-auto space-y-12">
                    {resumeData.experience.map((exp, i) => (
                      <article key={i} className="relative pl-8 md:pl-12 border-l-2 border-white/10 hover:border-purple-500 transition-colors duration-500 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-purple-500 group-hover:scale-125 transition-all duration-500" />
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                          <h3 className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors">{exp.role}</h3>
                          <span className="text-purple-400 font-mono text-sm uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">{exp.company}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-mono mb-6 bg-white/5 py-1 px-3 rounded w-fit border border-white/5">{exp.period}</p>
                        <ul className="grid gap-4 text-gray-400 group-hover:text-gray-300">
                          {exp.details.map((detail, j) => (
                            <li key={j} className="text-lg leading-relaxed flex gap-4">
                              <span className="text-purple-500/50 mt-2 min-w-[6px] h-[6px] rounded-full bg-purple-500 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </PortfolioSection>

                {/* 3. EDUCATION SECTION */}
                <PortfolioSection
                  id="education"
                  index={2}
                  title={t.cards.education.title}
                  subtitle={t.cards.education.subtitle}
                  backgroundImage={sectionBackgrounds.education}
                >
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {resumeData.education.map((edu, i) => (
                      <article key={i} className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col">

                        <div className="flex flex-col gap-2 mb-6 relative z-10">
                          <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{edu.institution}</h3>
                            <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono border border-white/5">{edu.period}</span>
                          </div>
                          <p className="text-purple-400 text-lg">{edu.degree}</p>
                        </div>

                        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2 relative z-10">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                          {edu.location}
                        </p>

                        {edu.details.length > 0 && (
                          <div className="pt-6 border-t border-white/5 relative z-10 mt-auto">
                            <ul className="text-sm text-gray-400 space-y-3">
                              {edu.details.map((detail, j) => (
                                <li key={j} className="flex gap-3">
                                  <span className="opacity-50 text-purple-400 font-bold">→</span>
                                  <span className="leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </article>
                    ))}

                    {/* Recognition Cards - Dynamically Mapped */}
                    {
                      resumeData.achievements?.map((achievement, i) => (
                        <div key={i} className="bg-gradient-to-br from-purple-900/20 to-black p-8 md:p-10 rounded-3xl border border-purple-500/20 flex flex-col justify-center gap-4 group hover:border-purple-500/50 transition-all">
                          <div className="flex items-center gap-3 text-purple-400 mb-2">
                            <Zap className="w-6 h-6 text-yellow-500" />
                            <h3 className="text-sm font-mono uppercase tracking-widest">Recognitions</h3>
                          </div>
                          <h4 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{achievement.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                          <div className="mt-4">
                            <span className="text-xs font-mono border border-purple-500/50 text-purple-300 px-3 py-1 rounded-full bg-purple-500/10">{achievement.role}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </PortfolioSection>


                {/* 4. SKILLS SECTION */}
                <PortfolioSection
                  id="skills"
                  index={3}
                  title={t.cards.skills.title}
                  subtitle={t.cards.skills.subtitle}
                  backgroundImage={sectionBackgrounds.skills}
                >
                  <div className="min-h-[80vh] flex items-center justify-center">
                    <SkillsGrid />
                  </div>
                </PortfolioSection>

              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
};
export default Index;
