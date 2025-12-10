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

  return (
    <div className="bg-black text-white relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <ThreeBackground />
      </div>
      <Navigation />

      <main className="relative z-10 container mx-auto px-4 py-32 h-[120vh]">
        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-0 border border-white/10 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">

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

          <Card
            index={3}
            title="Skills"
            subtitle="Technical Proficiency"
            icon={Terminal}
            backgroundImage={sectionBackgrounds.skills}
            isActive={activeIndex === 3}
            onClick={() => setActiveIndex(3)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-purple-400/70 mb-6 font-bold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-purple-500/50" /> Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.technicalSkills.languages.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg text-sm border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-blue-400/70 mb-6 font-bold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-blue-500/50" /> Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.technicalSkills.tools.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg text-sm border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-green-400/70 mb-6 font-bold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-green-500/50" /> Libraries & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.technicalSkills.libraries.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg text-sm border border-white/5 hover:border-green-500/50 hover:bg-green-500/10 hover:text-white transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-yellow-400/70 mb-6 font-bold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-yellow-500/50" /> Spoken Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.technicalSkills.spokenLanguages.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 text-gray-200 rounded-lg text-sm border border-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Index;
