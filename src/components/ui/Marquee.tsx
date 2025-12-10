import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div className="relative flex overflow-x-hidden bg-purple-900/20 border-y border-white/5 py-3 backdrop-blur-sm z-40">
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200/50 flex items-center gap-12">
                        Available for Hire <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        AI Engineer & Software Engineer<span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex gap-12 whitespace-nowrap absolute top-3 left-full pl-12"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="text-sm font-mono uppercase tracking-[0.3em] text-purple-200/50 flex items-center gap-12">
                        Available for Hire <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        AI Engineer & Software Engineer<span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
