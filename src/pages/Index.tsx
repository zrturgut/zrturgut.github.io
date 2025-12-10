
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeBackground from "@/components/ThreeBackground";
import Navigation from "@/components/Navigation";
import { resumeData } from "@/data/resume";
import { ArrowRight, Github, ExternalLink, Code2, GraduationCap, Briefcase, User, Terminal, Brain } from "lucide-react";

interface CardProps {
  index: number;
  title: string;
  subtitle: string;
  icon: any;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Card = ({ index, title, subtitle, icon: Icon, isActive, onClick, children }: CardProps) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
        ${isActive ? "flex-[3] bg-white/10" : "flex-1 bg-white/5 hover:bg-white/10"}
        border-r border-white/10 last:border-r-0 backdrop-blur-sm group
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <div className={`relative h-full flex flex-col p-8 ${isActive ? 'justify-start' : 'justify-end items-center text-center'}`}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl font-mono text-purple-400 opacity-50">0{index + 1}</span>
          {isActive && (
            <h2 className="text-3xl font-bold tracking-tighter uppercase">{title}</h2>
          )}
        </div>

        {!isActive && (
          <div className="rotate-0 md:-rotate-90 md:mb-12 transition-transform duration-500 origin-center whitespace-nowrap">
            <h2 className="text-2xl font-bold tracking-widest uppercase flex items-center gap-3">
              <Icon className="w-6 h-6 text-purple-400" /> {title}
            </h2>
          </div>
        )}

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-400/50 scrollbar-track-transparent h-full pb-20"
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
    <div className="h-screen w-screen overflow-hidden bg-black text-white relative flex flex-col">
      <ThreeBackground />
      <Navigation />

      <main className="flex-1 relative z-10 container mx-auto px-4 py-24 md:py-32 h-full">
        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-0 border border-white/10 rounded-2xl overflow-hidden bg-black/20 backdrop-blur-md shadow-2xl">

          <Card
            index={0}
            title="Projects"
            subtitle="Selected Works"
            icon={Code2}
            isActive={activeIndex === 0}
            onClick={() => setActiveIndex(0)}
          >
            <div className="space-y-12">
              {resumeData.projects.map((project, i) => (
                <div key={i} className="group hover:bg-white/5 p-6 rounded-xl transition-colors border border-transparent hover:border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    {project.subtitle && <span className="text-xs font-mono px-2 py-1 bg-purple-500/20 text-purple-300 rounded">{project.subtitle}</span>}
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    {project.details.map((detail, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-purple-500 mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card
            index={1}
            title="Research"
            subtitle="Academic Projects"
            icon={Brain}
            isActive={activeIndex === 1}
            onClick={() => setActiveIndex(1)}
          >
            <div className="space-y-12">
              {/* @ts-ignore */}
              {resumeData.research && resumeData.research.map((item, i) => (
                <div key={i} className="group hover:bg-white/5 p-6 rounded-xl transition-colors border border-transparent hover:border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-400">
                    {item.details.map((detail, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card
            index={2}
            title="Experience"
            subtitle="Career History"
            icon={Briefcase}
            isActive={activeIndex === 2}
            onClick={() => setActiveIndex(2)}
          >
            <div className="space-y-10">
              {resumeData.experience.map((exp, i) => (
                <div key={i} className="border-l-2 border-purple-500/30 pl-6 ml-2 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-purple-500" />
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-purple-400 font-mono text-sm">{exp.company} | {exp.period}</div>
                  </div>
                  <ul className="space-y-2 text-gray-400 mt-4">
                    {exp.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card
            index={3}
            title="Education"
            subtitle="Academic Background"
            icon={GraduationCap}
            isActive={activeIndex === 3}
            onClick={() => setActiveIndex(3)}
          >
            <div className="space-y-8">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-lg border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{edu.institution}</h3>
                    <span className="text-xs text-gray-500 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-purple-400 mb-2">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.location}</p>
                  {edu.details.length > 0 && (
                    <ul className="text-sm text-gray-400 space-y-1">
                      {edu.details.map((detail, j) => (
                        <li key={j}>• {detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card
            index={4}
            title="Skills"
            subtitle="Technical Proficiency"
            icon={Terminal}
            isActive={activeIndex === 4}
            onClick={() => setActiveIndex(4)}
          >
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-white/10 pb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.technicalSkills.languages.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-white/10 pb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.technicalSkills.tools.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-white/10 pb-2">Libraries & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.technicalSkills.libraries.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm border border-green-500/20 hover:bg-green-500/20 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold border-b border-white/10 pb-2">Spoken Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.technicalSkills.spokenLanguages.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
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
