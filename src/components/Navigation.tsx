
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 pointer-events-none">
            <div className="flex flex-col gap-1 pointer-events-auto cursor-pointer group">
                <div className="text-xl font-bold tracking-wider group-hover:text-purple-400 transition-colors">
                    ZEKERIYYA TURGUT
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Amsterdam • Available</span>
                </div>
            </div>

            <div className="flex items-center gap-6 pointer-events-auto">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-purple-500/50 transition-all group"
                >
                    <Download className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-gray-200 group-hover:text-white">CV</span>
                </a>

                <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

                <a
                    href="https://github.com/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <span className="text-xl font-bold group-hover:text-purple-400 transition-colors">GITHUB</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">CODE</span>
                </a>
                <a
                    href="https://linkedin.com/in/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <span className="text-xl font-bold group-hover:text-purple-400 transition-colors">LINKEDIN</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">PROFESSIONAL</span>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
