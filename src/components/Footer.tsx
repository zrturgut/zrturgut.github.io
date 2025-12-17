import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white pt-32 pb-16 px-6 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-full max-h-[500px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter uppercase text-white">zekeriyya.</h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
              Crafting digital experiences that bridge the gap between imagination and reality.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400/80">Explore</h3>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li><a href="#projects" className="hover:text-white transition-colors duration-300">Works</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300 opacity-50 cursor-not-allowed">Lab (Soon)</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400/80">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/zrturgut" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group border border-white/5 hover:border-white/20">
                <Github className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/in/iamzekeriyya" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group border border-white/5 hover:border-white/20">
                <Linkedin className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
              <a href="mailto:z.r.turgut@student.vu.nl" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all group border border-white/5 hover:border-white/20">
                <Mail className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400/80">Status</h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-400/80 tracking-wide">Available for hire</span>
            </div>
            <MagneticButton>
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-[10px] rounded-full hover:scale-105 transition-transform duration-300">
                Start a Project
              </button>
            </MagneticButton>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-widest font-mono">
          <span>© {currentYear} Zekeriyya Digital.</span>
          <span className="mt-2 md:mt-0 hover:text-white/40 transition-colors cursor-default">Designed & Engineered by Zekeriyya.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
