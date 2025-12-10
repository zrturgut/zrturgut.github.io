import { resumeData } from "@/data/resume";
import { useState } from "react";
import { translations } from "@/data/translations";

const Index = () => {
  const [lang, setLang] = useState<any>('en');
  const t = translations[lang];

  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans selection:bg-gray-200">

      {/* 1. Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter cursor-pointer">iamzekeriyya</div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium tracking-widest uppercase hover:text-gray-500 transition-colors">Home</a>
            <a href="#projects" className="text-sm font-medium tracking-widest uppercase hover:text-gray-500 transition-colors">Work</a>
            <a href="#about" className="text-sm font-medium tracking-widest uppercase hover:text-gray-500 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium tracking-widest uppercase hover:text-gray-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            {(['nl', 'en', 'tr', 'es']).map((l: any) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs uppercase font-medium transition-colors ${lang === l ? 'text-black underline decoration-2 underline-offset-4' : 'text-gray-400 hover:text-black'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="hero" className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto">
        <h1 className="text-[10vw] leading-[0.9] font-black tracking-tighter mb-8">
          DIGITAL <br />
          <span className="text-gray-300">CRAFTSMAN</span>
        </h1>
        <p className="max-w-xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
          I build high-end digital experiences at the intersection of design, motion, and artificial intelligence.
        </p>
      </section>

      {/* 3. Projects Grid */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
            <span className="text-sm font-mono text-gray-500">( {resumeData.projects.length} )</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {resumeData.projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6 relative">
                  {/* Simple Image Placeholder or Actual Image */}
                  <img
                    src={project.images[0] || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold group-hover:underline decoration-1 underline-offset-4 transition-all">{project.title}</h3>
                  <span className="text-sm text-gray-400 font-mono">{project.subtitle}</span>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {project.technologies.slice(0, 3).map(t => (
                    <span key={t} className="text-xs border border-gray-200 px-2 py-1 rounded text-gray-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About / Experience */}
      <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-12">About Me</h2>
        <p className="text-3xl md:text-4xl font-light leading-normal mb-20 text-gray-800">
          Based in Amsterdam, I specialize in combining robust software engineering with fluid, organic design. My background in law and AI gives me a unique perspective on systems, logic, and creativity.
        </p>

        <div className="space-y-12">
          <h3 className="text-2xl font-bold">Experience</h3>
          {resumeData.experience.map((exp, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline justify-between border-t border-gray-200 pt-6">
              <div className="md:w-1/3">
                <span className="text-lg font-medium">{exp.company}</span>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <div className="md:w-2/3 mt-2 md:mt-0">
                <h4 className="text-lg text-gray-800 mb-2">{exp.role}</h4>
                <p className="text-gray-500 font-light">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact */}
      <section id="contact" className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[12vw] font-black tracking-tighter leading-none mb-8">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-400 mb-12">Available for select freelance opportunities and collaborations.</p>

          <a
            href="mailto:zackturgut@gmail.com"
            className="inline-block px-12 py-4 border border-white/20 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            zackturgut@gmail.com
          </a>

          <div className="mt-24 flex justify-between text-sm text-gray-500 font-mono">
            <span>© 2025 iamzekeriyya</span>
            <span>Amsterdam, NL</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
