import { Github, Linkedin, Mail, Phone, Home } from "lucide-react";

const Navigation = ({ onBackToHome }: { onBackToHome: () => void }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 pointer-events-none">
            <div className="flex items-center gap-4 pointer-events-auto">
                <button
                    onClick={onBackToHome}
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="Go Home"
                >
                    <Home className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </button>
                <div onClick={onBackToHome} className="flex flex-col gap-1 cursor-pointer group">
                    <div className="text-xl font-bold tracking-wider group-hover:text-purple-400 transition-colors lowercase">
                        zekeriyya
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="lowercase">amsterdam • available</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 pointer-events-auto">
                <a
                    href="https://github.com/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="GitHub"
                >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                    href="https://linkedin.com/in/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                    href="mailto:zackturgut@gmail.com"
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="Email"
                >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                    href="tel:+31612345678"
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="Phone"
                >
                    <Phone className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
