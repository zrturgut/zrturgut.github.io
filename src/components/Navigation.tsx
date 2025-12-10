import { Github, Linkedin, Mail, Download, MapPin, Home } from "lucide-react";

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
            </div>

            <div className="flex items-center gap-6 pointer-events-auto">
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
                    <span className="text-xl font-bold group-hover:text-purple-400 transition-colors flex items-center gap-2">
                        LINKEDIN <Linkedin className="w-5 h-5" />
                    </span>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
