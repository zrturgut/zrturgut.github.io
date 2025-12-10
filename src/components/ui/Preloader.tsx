import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 2s load time
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -500, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-white"
        >
            <div className="text-9xl font-black opacity-10 tracking-tighter absolute select-none">
                LOADING
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="text-4xl font-mono font-bold">{progress}%</div>
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mt-2">
                    Initializing System...
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
