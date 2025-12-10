import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollDown = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-40"
        >
            <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown className="w-4 h-4 text-white/50" />
            </motion.div>
        </motion.div>
    );
};
export default ScrollDown;
