import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Navigation from "@/components/Navigation";
import { resumeData, sectionBackgrounds } from "@/data/resume";
import { Code2, GraduationCap, Briefcase, Terminal } from "lucide-react";

interface CardProps {
  index: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  backgroundImage: string;
  children: React.ReactNode;
}

const Card = ({ index, title, subtitle, icon: Icon, isActive, onClick, backgroundImage, children }: CardProps) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out
        ${isActive ? "flex-[4]" : "flex-1 hover:flex-[1.2] opacity-80 hover:opacity-100"}
        border-r border-white/10 last:border-r-0 backdrop-blur-md group
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={backgroundImage}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-1000
            ${isActive ? 'opacity-40 grayscale-0 scale-110' : 'opacity-20 grayscale scale-100 group-hover:grayscale-0 group-hover:scale-105'}
          `}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/90 z-10" />

      <div className={`relative h-full flex flex-col p-8 z-20 ${isActive ? 'justify-start' : 'justify-center items-center'}`}>

        {/* Active Header */}
        {isActive && (
          <div className="flex items-center gap-6 mb-8">
            <span className="text-6xl font-thin text-white/20 font-mono">0{index + 1}</span>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-2">{title}</h2>
              <p className="text-purple-300/80 uppercase tracking-widest text-xs font-semibold">{subtitle}</p>
            </div>
          </div>
        )}

        {/* Inactive Vertical Title */}
        {!isActive && (
          <div className="h-full flex flex-col items-center justify-center gap-8">
            <span className="text-2xl font-mono text-white/40">0{index + 1}</span>
            <div className="rotate-180 md:-rotate-90 origin-center whitespace-nowrap">
              <h2 className="text-3xl font-bold tracking-wider text-white/90 flex items-center gap-4 hover:text-purple-300 transition-colors">
                {title} <Icon className="w-6 h-6" />
              </h2>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-white/5 h-full pb-32"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showLanding, setShowLanding] = useState(true);

  return (
    <div className="bg-black text-white relative min-h-screen font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 z-0">
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
            className="relative z-50 h-screen flex flex-col items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="text-5xl md:text-8xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                ZEKERIYYA
                <br />
                TURGUT
              </h1>
              <p className="text-lg md:text-2xl text-purple-200/50 tracking-[0.5em] font-light uppercase">
                AI Engineer & Researcher
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={() => setShowLanding(false)}
              className="mt-16 px-8 py-3 rounded-full border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 transition-all duration-500 text-sm tracking-widest uppercase text-gray-400 hover:text-white hover:scale-105"
            >
              Enter Portfolio
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
            <Navigation />
            <main className="relative z-10 container mx-auto px-4 py-32 flex-grow h-[120vh]">
              <div className="flex flex-col md:flex-row h-full gap-4 md:gap-0 border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
                {/* ... Project Card ... */}
                <Card
                  index={0}
                  title="Projects"
                  subtitle="Selected Works & Research"
                  icon={Code2}
                  backgroundImage={sectionBackgrounds.projects}
                  isActive={activeIndex === 0}
                  onClick={() => setActiveIndex(0)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resumeData.projects.map((project, i) => (
                      <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500">
                        {project.gif && (
                          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                            <img src={project.gif} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="relative z-20 p-8 h-full flex flex-col">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">{project.title}</h3>
                            {project.subtitle && <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-mono rounded-full border border-purple-500/20">{project.subtitle}</span>}

                            {project.technologies && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech, t) => (
                                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border border-white/10 bg-black/50 text-gray-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-colors">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <ul className="space-y-3 text-gray-400 group-hover:text-gray-200 transition-colors mt-auto">
                            {project.details.map((detail, j) => (
                              <li key={j} className="flex gap-3 text-sm leading-relaxed">
                                <span className="text-purple-500 mt-1.5 opacity-50">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* ... Experience Card ... */}
                <Card
                  index={1}
                  title="Experience"
                  subtitle="Career History"
                  icon={Briefcase}
                  backgroundImage={sectionBackgrounds.experience}
                  isActive={activeIndex === 1}
                  onClick={() => setActiveIndex(1)}
                >
                  <div className="space-y-12 pl-2">
                    {resumeData.experience.map((exp, i) => (
                      <div key={i} className="relative pl-8 border-l-2 border-white/10 hover:border-purple-500 transition-colors duration-500 group">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-purple-500 group-hover:scale-125 transition-all duration-500" />
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                          <span className="hidden md:inline text-white/20">•</span>
                          <span className="text-purple-400 font-mono text-sm uppercase tracking-wider">{exp.company}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-mono mb-4 bg-white/5 py-1 px-3 rounded w-fit">{exp.period}</p>
                        <ul className="space-y-3 text-gray-400 group-hover:text-gray-300">
                          {exp.details.map((detail, j) => (
                            <li key={j} className="text-base leading-relaxed">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* ... Education Card ... */}
                <Card
                  index={2}
                  title="Education"
                  subtitle="Academic Background"
                  icon={GraduationCap}
                  backgroundImage={sectionBackgrounds.education}
                  isActive={activeIndex === 2}
                  onClick={() => setActiveIndex(2)}
                >
                  <div className="grid gap-6">
                    {resumeData.education.map((edu, i) => (
                      <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{edu.institution}</h3>
                            <p className="text-purple-400/80 mt-1">{edu.degree}</p>
                          </div>
                          <span className="px-3 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono whitespace-nowrap border border-white/5">{edu.period}</span>
                        </div>

                        <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-500 rounded-full" />
                          {edu.location}
                        </p>

                        {edu.details.length > 0 && (
                          <div className="pt-6 border-t border-white/5">
                            <ul className="text-sm text-gray-400 space-y-2">
                              {edu.details.map((detail, j) => (
                                <li key={j} className="flex gap-2">
                                  <span className="opacity-50">→</span> {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* ... Skills Card (Refactored) ... */}
                <Card
                  index={3}
                  title="Skills"
                  subtitle="Technical Proficiency"
                  icon={Terminal}
                  backgroundImage={sectionBackgrounds.skills}
                  isActive={activeIndex === 3}
                  onClick={() => setActiveIndex(3)}
                >
                  <div className="flex flex-col gap-12 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      {/* Programming Column */}
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-800 pb-2 flex items-center gap-2">
                          <Terminal className="w-4 h-4" /> Programming
                        </h3>
                        <ul className="space-y-4">
                          {resumeData.technicalSkills.languages.map((skill, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                              <span className="w-1.5 h-1.5 bg-green-500/50 rounded-full group-hover:bg-green-400 transition-colors shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
                              <span className="font-mono text-sm tracking-wide">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI / ML Column */}
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-800 pb-2 flex items-center gap-2">
                          {/* Brain icon logic would go here, using a generic Code for now if not imported */}
                          <Code2 className="w-4 h-4" /> AI / ML
                        </h3>
                        <ul className="space-y-4">
                          {resumeData.technicalSkills.libraries.map((skill, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                              <span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full group-hover:bg-purple-400 transition-colors shadow-[0_0_8px_rgba(192,132,252,0.5)]"></span>
                              <span className="font-mono text-sm tracking-wide">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools Column */}
                      <div>
                        <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-800 pb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" /> Tools
                        </h3>
                        <ul className="space-y-4">
                          {resumeData.technicalSkills.tools.map((skill, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                              <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full group-hover:bg-amber-400 transition-colors shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
                              <span className="font-mono text-sm tracking-wide">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spoken Languages Row - Image 2 Style */}
                    <div className="mt-auto border-t border-white/10 pt-8">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 text-center">Spoken Languages</h3>
                      <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {resumeData.technicalSkills.spokenLanguages.map((langString, i) => {
                          // "Turkish (Native) 🇹🇷" -> split by space? 
                          // Let's assume the flag is at the end. 
                          // Actually, let's just parse it based on the previous edit I made.
                          // I know the data is "Turkish (Native) 🇹🇷"
                          const parts = langString.split(" ");
                          const flag = parts[parts.length - 1]; // The emoji
                          const name = parts[0]; // Turkish

                          return (
                            <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                              <span className="text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110 drop-shadow-2xl">{flag}</span>
                              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{name}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
