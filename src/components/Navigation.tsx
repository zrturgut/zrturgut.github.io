import { Github, Linkedin, Mail, Phone, Home, Gamepad2 } from "lucide-react";
import { Language } from "@/data/translations";

interface NavigationProps {
    onBackToHome: () => void;
    lang: Language;
    setLang: (lang: Language) => void;
    onOpenGame: () => void;
}

const Navigation = ({ onBackToHome, lang, setLang, onOpenGame }: NavigationProps) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 bg-white/80 backdrop-blur-md border-b border-gray-100">
            {/* Minimal Centered Nav */}
            <div className="flex items-center gap-8 md:gap-12">
                <button
                    onClick={onBackToHome}
                    className="text-sm font-medium tracking-widest uppercase hover:text-gray-600 transition-colors"
                >
                    Home
                </button>
                <a href="#projects" className="text-sm font-medium tracking-widest uppercase hover:text-gray-600 transition-colors">Work</a>

                {/* Logo / Name */}
                <div onClick={onBackToHome} className="text-xl font-bold tracking-tighter cursor-pointer px-4">
                    iamzekeriyya
                </div>

                <a href="#about" className="text-sm font-medium tracking-widest uppercase hover:text-gray-600 transition-colors">About</a>
                <a href="#contact" className="text-sm font-medium tracking-widest uppercase hover:text-gray-600 transition-colors">Contact</a>
            </div>

            {/* Language Switcher - Absolute Right */}
            <div className="absolute right-8 flex items-center gap-2">
                {(['nl', 'en', 'tr', 'es'] as Language[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`text-xs uppercase font-medium transition-colors ${lang === l ? 'text-black underline decoration-2 underline-offset-4' : 'text-gray-400 hover:text-black'}`}
                    >
                        {l}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;
