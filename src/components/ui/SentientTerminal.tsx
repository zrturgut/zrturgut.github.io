import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUiSound } from "@/hooks/useUiSound";
import { ChevronRight, Terminal } from "lucide-react";

interface SentientTerminalProps {
    onComplete: () => void;
}

const lines = [
    { text: "INITIALIZING KERNEL...", delay: 0 },
    { text: "LOADING NEURAL ARCHITECTURE...", delay: 800 },
    { text: "CONNECTING TO HIVE MIND...", delay: 1600 },
    { text: "DETECTING VISITOR SIGNAL...", delay: 2400 },
    { text: "ANALYSIS: HUMAN INTEREST DETECTED.", delay: 3200 },
    { text: "PROTOCOL: ENGAGE_STORYTELLING_MODE", delay: 4000 },
];

const SentientTerminal = ({ onComplete }: SentientTerminalProps) => {
    const [lineIndex, setLineIndex] = useState(0);
    const [showPrompt, setShowPrompt] = useState(false);
    const { playHover, playClick } = useUiSound();
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [lineIndex, showPrompt]);

    // Sequence timer
    useEffect(() => {
        const timeouts = lines.map((line, i) => {
            return setTimeout(() => {
                setLineIndex(i + 1);
                playHover(); // Use hover sound as a subtle "tick"
            }, line.delay);
        });

        const promptTimeout = setTimeout(() => {
            setShowPrompt(true);
        }, lines[lines.length - 1].delay + 1000);

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(promptTimeout);
        };
    }, []);

    const handleEnter = () => {
        playClick();
        onComplete();
    };

    return (
        <div className="font-mono text-sm md:text-base text-green-500/80 w-full max-w-2xl p-6 relative z-50">
            {/* Terminal Window Header */}
            <div className="flex items-center gap-2 mb-6 opacity-50 border-b border-green-500/20 pb-2">
                <Terminal size={14} />
                <span className="text-xs tracking-widest uppercase">Zekeriyya.sys — zsh — 80x24</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
                {lines.slice(0, lineIndex).map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-2"
                    >
                        <span className="opacity-50 select-none">{">"}</span>
                        <span className={i === lines.length - 1 ? "text-green-400 font-bold" : ""}>{line.text}</span>
                    </motion.div>
                ))}

                {/* Interaction Prompt */}
                <AnimatePresence>
                    {showPrompt && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 border-t border-green-500/20 pt-8"
                        >
                            <p className="text-white mb-4 leading-relaxed font-sans text-lg md:text-xl">
                                "I have constructed a digital space to house my creations.
                                <br />It is messy, complex, and alive. Just like a mind."
                            </p>

                            <div className="flex flex-col gap-2 mt-8">
                                <span className="text-xs uppercase tracking-widest text-green-500/50 mb-2">Command Required:</span>
                                <button
                                    onClick={handleEnter}
                                    className="group flex items-center gap-3 text-left hover:bg-green-500/10 p-2 -ml-2 rounded transition-colors"
                                >
                                    <span className="text-green-500">{">"}</span>
                                    <span className="text-white font-bold group-hover:text-green-400 group-hover:underline underline-offset-4 decoration-current">
                                        EXECUTE: ENTER_PORTFOLIO()
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default SentientTerminal;
