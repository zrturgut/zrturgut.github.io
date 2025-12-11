import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FluidBackground from "@/components/FluidBackground";
import Navigation from "@/components/Navigation";
import { resumeData, sectionBackgrounds } from "@/data/resume";
import { translations, Language } from "@/data/translations";
import { ChevronRight, Eye, Briefcase, Zap } from "lucide-react";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectModal from "@/components/ProjectModal";
import AIStrategyGame from "@/components/AIStrategyGame"; // Keep for now if needed, but we want GameCenter
import GameCenter from "@/components/GameCenter";

// UI Components
import PortfolioSection from "@/components/ui/PortfolioSection";
import TiltCard from "@/components/ui/TiltCard";
import CustomCursor from "@/components/ui/CustomCursor";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";
import StickyCTA, { ProgressBar } from "@/components/ui/StickyCTA";

// Pro Features
import Preloader from "@/components/ui/Preloader";
import Noise from "@/components/ui/Noise";
import LiveClock from "@/components/ui/LiveClock";
import CustomContextMenu from "@/components/ui/CustomContextMenu";
import ClickRipple from "@/components/ui/ClickRipple";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showGame, setShowGame] = useState(false);

  const t = translations[lang];
  const [gameMode, setGameMode] = useState<'none' | 'center' | 'snake'>('none');

  return (
    <div className="bg-black text-white relative min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* Pro Features */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Noise />
      <CustomContextMenu />
      <ClickRipple />
      <ProgressBar />
      <CustomCursor />
      <StickyCTA />

      {/* Game & Modal */}
      {gameMode === 'center' && <GameCenter onClose={() => setGameMode('none')} onLaunchSnake={() => setGameMode('snake')} />}
      {gameMode === 'snake' && <AIStrategyGame onClose={() => setGameMode('center')} />}
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />

      {/* Global Fluid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FluidBackground />
      </div>

      <div className="fixed top-0 w-full z-40 mt-1 pointer-events-none opacity-50">
        {/* Optional top decoration */}
      </div>

      {/* Landing Section */}
      <AnimatePresence mode="wait">
        {showLanding ? (
          !loading && (
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
                <div className="mb-4">
                  <LiveClock />
                </div>
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
          )
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Navigation
              onBackToHome={() => setShowLanding(true)}
              lang={lang}
              setLang={setLang}
              onOpenGame={() => setGameMode('center')}
            />

            <div className="pt-24 pb-4">
              {/* Marquee removed */}
            </div>

            <main className="relative z-10 w-full">

              {/* 1. PROJECTS SECTION */}
              <PortfolioSection index={0} title={t.cards.projects.title} subtitle={t.cards.projects.subtitle} backgroundImage={sectionBackgrounds.projects}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                  {resumeData.projects.map((project, i) => (
                    <article key={i} className="group relative flex flex-col h-full perspective-1000">
                      {/* Card Content using TiltCard wrapped content */}
                      <TiltCard>
                        <div className="relative h-64 overflow-hidden rounded-t-2xl border-b border-white/10 group-hover:border-purple-500/50 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                          <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-purple-900/20 transition-colors z-10" />
                          {project.repo && (
                            <img
                              src={`https://opengraph.githubassets.com/1/${project.repo}`}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                            />
                          )}

                          <div className="absolute bottom-4 left-4 z-20">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {project.technologies.slice(0, 3).map(tech => (
                                <span key={tech} className="text-[10px] font-mono border border-white/20 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                            className="absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-purple-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 duration-300"
                            aria-label="Quick Look"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex-1 p-6 bg-black/40 backdrop-blur-md rounded-b-2xl border border-white/5 border-t-0 group-hover:border-purple-500/30 transition-all flex flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-white transition-all mb-1">{project.title}</h3>
                            {project.subtitle && <p className="text-xs text-purple-400 font-mono mb-2">{project.subtitle}</p>}
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.details[0]}</p>
                          </div>
                        </div>
                      </TiltCard>
                    </article>
                  ))}
                </div>
              </PortfolioSection>

              {/* 2. EXPERIENCE SECTION */}
              <PortfolioSection index={1} title={t.cards.experience.title} subtitle={t.cards.experience.subtitle} backgroundImage={sectionBackgrounds.experience}>
                <div className="max-w-4xl mx-auto space-y-12">
                  {resumeData.experience.map((exp, i) => (
                    <article key={i} className="relative pl-8 md:pl-0">
                      {/* Timeline Line */}
                      <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 to-transparent md:hidden" />

                      <div className="md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start group">
                        <div className={`hidden md:block text-right ${i % 2 === 0 ? 'order-1' : 'order-3'}`}>
                          {i % 2 === 0 ? (
                            <>
                              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                              <p className="text-purple-400 font-mono text-sm mt-1">{exp.company}</p>
                            </>
                          ) : (
                            <p className="text-gray-500 font-mono text-sm pt-2">{exp.period}</p>
                          )}
                        </div>

                        <div className="order-2 flex flex-col items-center relative z-10 h-full">
                          <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-black border border-white/50 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                          {i !== resumeData.experience.length - 1 && <div className="w-[1px] flex-1 min-h-[4rem] bg-gradient-to-b from-purple-600/50 to-transparent my-2" />}
                        </div>

                        <div className={`md:block ${i % 2 === 0 ? 'order-3' : 'order-1'} ${i % 2 !== 0 ? 'text-right' : ''}`}>
                          {i % 2 !== 0 ? (
                            <>
                              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                              <p className="text-purple-400 font-mono text-sm mt-1">{exp.company}</p>
                            </>
                          ) : (
                            <div className="text-left">
                              <p className="text-gray-500 font-mono text-sm mb-4 md:hidden">{exp.period}</p>
                              {/* Mobile Header */}
                              <div className="md:hidden mb-4">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-purple-400">{exp.company}</p>
                              </div>

                              <ul className="space-y-2 md:hidden">
                                {exp.details.map((detail, j) => (
                                  <li key={j} className="text-gray-400 text-sm flex gap-2">
                                    <span className="text-purple-500 mt-1">▹</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {i % 2 === 0 && (
                            <div className="hidden md:block text-left mt-4">
                              <ul className="space-y-2">
                                {exp.details.map((detail, j) => (
                                  <li key={j} className="text-gray-400 text-sm flex gap-2">
                                    <span className="text-purple-500 mt-1">▹</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </PortfolioSection>

              {/* 3. EDUCATION SECTION */}
              <PortfolioSection index={2} title={t.cards.education.title} subtitle={t.cards.education.subtitle} backgroundImage={sectionBackgrounds.education}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {resumeData.education.map((edu, i) => (
                    <article key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all group flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{edu.institution}</h3>
                          <p className="text-purple-400 text-lg">{edu.degree}</p>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          {edu.period}
                        </span>
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
                  {resumeData.achievements?.map((achievement, i) => (
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
                  ))}
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

            <footer className="text-center py-24 text-gray-600 text-xs font-mono uppercase tracking-widest relative z-10">
              <p>© 2024 Zekeriyya Turgut • Digital Portfolio</p>
              <p className="mt-2 opacity-50">Built with React, Three.js & Tailwind</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
