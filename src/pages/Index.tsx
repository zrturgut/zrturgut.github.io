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
import TiltCard from "@/components/ui/TiltCard"; // Keep if used elsewhere or remove later
import SpotlightCard from "@/components/ui/SpotlightCard";
import SidebarNav from "@/components/ui/SidebarNav";
import AudioControl from "@/components/ui/AudioControl";
import CustomCursor from "@/components/ui/CustomCursor";
import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";
import StickyCTA, { ProgressBar } from "@/components/ui/StickyCTA";
import StaggeredText from "@/components/ui/StaggeredText";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrambleText from "@/components/ui/ScrambleText";

// Pro Features
import Preloader from "@/components/ui/Preloader";
import Noise from "@/components/ui/Noise";
import LiveClock from "@/components/ui/LiveClock";
import CustomContextMenu from "@/components/ui/CustomContextMenu";
import ClickRipple from "@/components/ui/ClickRipple";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Footer from "@/components/Footer";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";
import HoldToEnter from "@/components/ui/HoldToEnter";
import SentientTerminal from "@/components/ui/SentientTerminal";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showGame, setShowGame] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(true);

  const t = translations[lang];
  const [gameMode, setGameMode] = useState<'none' | 'center' | 'snake'>('none');

  return (
    <div className="bg-black text-white relative min-h-screen font-sans selection:bg-purple-500/30">

      {/* Pro Features */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Noise />
      <CustomContextMenu />
      <ClickRipple />
      <ScrollProgress />
      <AudioControl playTrigger={shouldPlayMusic} />
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
        {showLanding && !loading && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            // 3. Hyperspace Warp Exit
            exit={{ opacity: 0, scale: 20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-50 h-screen w-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm select-none"
          >
            {/* Elegant Hero Content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="relative text-center">
                {/* 1. Decryption Reveal */}
                <ScrambleText
                  text="iamzekeriyya"
                  className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white/80 lowercase"
                />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-sm md:text-xl font-mono text-purple-300 tracking-[0.8em] lowercase mt-4 ml-2"
                >
                  ai engineer
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8, ease: "circOut" }}
                  className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent mt-6"
                />

                {/* 2. System Status Stream Removed */}
              </div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12"
              >
                <MagneticButton>
                  <button
                    onClick={() => {
                      setShowLanding(false);
                      // Trigger music 500ms after click to sync with transition
                      setTimeout(() => setShouldPlayMusic(true), 500);
                    }}
                    className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 font-mono text-xs uppercase tracking-widest group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Enter System <ChevronRight size={14} />
                    </span>
                  </button>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Corner Decor */}
            <div className="absolute bottom-8 left-8 text-[10px] font-mono text-white/20">
              EST. 2024
            </div>
            <div className="absolute bottom-8 right-8 text-[10px] font-mono text-white/20">
              AMS, NL
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showLanding && (
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

            <SidebarNav />

            <div className="pt-24 pb-4">
              {/* Marquee removed */}
            </div>

            <main className="relative z-10 w-full">

              {/* 0. ABOUT SECTION */}
              <PortfolioSection id="about" index={0} title="about" subtitle="introduction" backgroundImage={sectionBackgrounds.projects}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 relative group">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=800"
                      alt="Abstract Tech Visualization"
                      className="relative z-10 w-full aspect-square object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10"
                    />
                    <div className="absolute -bottom-6 -right-6 font-display text-9xl text-white/5 font-bold z-0 pointer-events-none">
                      AI
                    </div>
                  </div>

                  <div className="order-1 md:order-2 space-y-8">
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200 lowercase font-sans">
                      <span className="text-white font-semibold">Hello, I'm Zekeriyya.</span> An <span className="text-purple-400 font-medium">ai student</span> at vrije universiteit amsterdam with a strong interest in software engineering and machine learning.
                    </p>
                    <p className="text-xl text-gray-400 leading-relaxed lowercase font-sans">
                      i enjoy developing intelligent systems that solve real world problems. alongside my studies, i manage a taxi business in the netherlands, combining entrepreneurship with practical experience.
                    </p>

                    <div className="flex gap-4 pt-4">
                      <div className="flex flex-col">
                        <span className="text-4xl font-display font-bold text-white">3+</span>
                        <span className="text-sm text-purple-400 font-mono lowercase tracking-widest mt-1">years exp</span>
                      </div>
                      <div className="w-px bg-white/10 h-12 mx-4" />
                      <div className="flex flex-col">
                        <span className="text-4xl font-display font-bold text-white">10+</span>
                        <span className="text-sm text-purple-400 font-mono lowercase tracking-widest mt-1">projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PortfolioSection>

              {/* 1. PROJECTS SECTION */}
              <PortfolioSection id="projects" index={1} title={t.cards.projects.title} subtitle={t.cards.projects.subtitle} backgroundImage={sectionBackgrounds.projects}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
                  {resumeData.projects.map((project, i) => (
                    <article key={i} className="group relative flex flex-col h-full perspective-1000">
                      {/* Card Content using SpotlightCard */}
                      <SpotlightCard>
                        <div className="relative h-64 overflow-hidden border-b border-white/10 group-hover:border-purple-500/50 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />

                          {/* Image */}
                          {project.gif ? (
                            <img
                              src={project.gif}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                            />
                          ) : (
                            project.repo && (
                              <img
                                src={`https://opengraph.githubassets.com/1/${project.repo}`}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
                              />
                            )
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

                        <div className="flex-1 p-6 bg-transparent transition-all flex flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-white transition-all mb-1">{project.title}</h3>
                            {project.subtitle && <p className="text-xs text-purple-400 font-mono mb-2">{project.subtitle}</p>}
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.details[0]}</p>
                          </div>
                        </div>
                      </SpotlightCard>
                    </article>
                  ))}
                </div>
              </PortfolioSection>

              {/* 2. EXPERIENCE SECTION */}
              <PortfolioSection id="experience" index={2} title={t.cards.experience.title} subtitle={t.cards.experience.subtitle} backgroundImage={sectionBackgrounds.experience}>
                <div className="max-w-4xl mx-auto space-y-12">
                  {resumeData.experience.map((exp, i) => (
                    <article key={i} className="relative group">
                      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[150px_auto_1fr] gap-6 md:gap-12 items-start">

                        {/* 1. Date (Desktop) */}
                        <div className="hidden md:block text-right pt-2">
                          <span className="text-purple-400 font-mono text-sm font-semibold tracking-wider">{exp.period}</span>
                        </div>

                        {/* 2. Timeline Line & Dot */}
                        <div className="relative flex flex-col items-center h-full">
                          <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-black border border-white/50 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20" />
                          {i !== resumeData.experience.length - 1 && (
                            <div className="absolute top-4 bottom-[-48px] w-px bg-gradient-to-b from-purple-600/50 to-white/5" />
                          )}
                        </div>

                        {/* 3. Content */}
                        <div className="pb-16 flex flex-col gap-4 pt-1">
                          {/* Mobile Date */}
                          <span className="md:hidden text-purple-400 font-mono text-xs mb-1">{exp.period}</span>

                          <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-xl text-gray-400">{exp.company}</p>

                          <ul className="space-y-4 mt-2">
                            {exp.details.map((detail, j) => (
                              <li key={j} className="text-gray-400 text-base leading-relaxed flex gap-3">
                                <span className="text-purple-500 mt-1.5 text-xs">◆</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </PortfolioSection>

              {/* 3. EDUCATION SECTION */}
              <PortfolioSection id="education" index={3} title={t.cards.education.title} subtitle={t.cards.education.subtitle} backgroundImage={sectionBackgrounds.education}>
                <div className="max-w-4xl mx-auto max-h-[60vh] overflow-y-auto education-scroll pr-4 space-y-6">
                  {resumeData.education.map((edu, i) => (
                    <article key={i} className="relative group">
                      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[150px_auto_1fr] gap-6 md:gap-12 items-start">

                        {/* 1. Date (Desktop) */}
                        <div className="hidden md:block text-right pt-2">
                          <span className="text-purple-400 font-mono text-sm font-semibold tracking-wider font-light">{edu.period}</span>
                        </div>

                        {/* 2. Timeline Line & Dot */}
                        <div className="relative flex flex-col items-center h-full">
                          <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-black border border-white/50 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20" />
                          <div className="absolute top-4 bottom-[-48px] w-px bg-gradient-to-b from-purple-600/50 to-white/5" />
                        </div>

                        {/* 3. Content */}
                        <div className="pb-16 flex flex-col gap-2 pt-1">
                          <span className="md:hidden text-purple-400 font-mono text-xs mb-1">{edu.period}</span>

                          <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {edu.institution}
                          </h3>

                          <div className="flex flex-col md:flex-row md:items-center gap-2 text-xl text-gray-400">
                            <span>{edu.degree}</span>
                            <span className="hidden md:inline text-white/20">|</span>
                            <span className="text-sm md:text-base text-gray-500">{edu.location}</span>
                          </div>

                          {edu.details.length > 0 && (
                            <ul className="space-y-4 mt-4">
                              {edu.details.map((detail, j) => (
                                <li key={j} className="text-gray-400 text-base leading-relaxed flex gap-3">
                                  <span className="text-purple-500 mt-1.5 text-xs">◆</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
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


              {/* 4. VOLUNTEERING SECTION */}
              <PortfolioSection id="volunteering" index={4} title="volunteering" subtitle="community & leadership" backgroundImage={sectionBackgrounds.volunteering}>
                <div className="max-w-4xl mx-auto space-y-12">
                  {resumeData.volunteering?.map((vol, i) => (
                    <article key={i} className="relative group">
                      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[150px_auto_1fr] gap-6 md:gap-12 items-start">
                        {/* 1. Date (Desktop) */}
                        <div className="hidden md:block text-right pt-2">
                          <span className="text-purple-400 font-mono text-sm font-semibold tracking-wider">{vol.period}</span>
                        </div>

                        {/* 2. Timeline Line & Dot */}
                        <div className="relative flex flex-col items-center h-full">
                          <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-black border border-white/50 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20" />
                          <div className="absolute top-4 bottom-[-48px] w-px bg-gradient-to-b from-purple-600/50 to-white/5" />
                        </div>

                        {/* 3. Content */}
                        <div className="pb-16 flex flex-col gap-4 pt-1">
                          <span className="md:hidden text-purple-400 font-mono text-xs mb-1">{vol.period}</span>

                          <h3 className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {vol.role}
                          </h3>
                          <p className="text-xl text-gray-400">{vol.institution}</p>

                          <ul className="space-y-4 mt-2">
                            {vol.details.map((detail, j) => (
                              <li key={j} className="text-gray-400 text-base leading-relaxed flex gap-3">
                                <span className="text-purple-500 mt-1.5 text-xs">◆</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </PortfolioSection>

              {/* 5. SKILLS SECTION */}
              <PortfolioSection
                id="skills"
                index={5}
                title={t.cards.skills.title}
                subtitle={t.cards.skills.subtitle}
                backgroundImage={sectionBackgrounds.skills}
              >
                <div className="min-h-[80vh] flex items-center justify-center">
                  <SkillsGrid />
                </div>
              </PortfolioSection>

              <Footer />
            </main>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
