import { Github, Linkedin, Mail, Phone, Home, Gamepad2 } from "lucide-react";
import { Language } from "@/data/translations";
import { useUiSound } from "@/hooks/useUiSound";

interface NavigationProps {
    onBackToHome: () => void;
    lang: Language;
    setLang: (lang: Language) => void;
    onOpenGame: () => void;
}

const Navigation = ({ onBackToHome, lang, setLang, onOpenGame }: NavigationProps) => {
    const { playHover, playClick } = useUiSound();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 pointer-events-none">
            <div className="flex items-center gap-4 pointer-events-auto">
                <button
                    onClick={() => { playClick(); onBackToHome(); }}
                    onMouseEnter={playHover}
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
                        <span className="lowercase">{translations[lang].location}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 pointer-events-auto">
                {/* Language Switcher */}
                <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
                    {(['nl', 'en', 'tr', 'es'] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={`text-lg px-2 font-mono uppercase transition-colors ${lang === l ? 'text-purple-400 font-bold' : 'text-gray-500 hover:text-white'}`}
                        >
                            {l}
                        </button>
                    ))}
                </div>

                <button
                    onClick={onOpenGame}
                    className="relative p-2 mr-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
                    aria-label="Play Game"
                >
                    <div className="absolute inset-0 bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    <Gamepad2 className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] transition-all duration-300" />
                </button>

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
                    href="mailto:z.r.turgut@student.vu.nl"
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    aria-label="Email"
                >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
                </a>
                <a
                    href="tel:+31643154866"
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
