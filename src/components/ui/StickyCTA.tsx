import { motion, useScroll, useSpring } from "framer-motion";
import { MessageSquare } from "lucide-react";

const StickyCTA = () => {
    return (
        <motion.a
            href="mailto:z.r.turgut@student.vu.nl"
            title="Contact Me"
            className="fixed bottom-8 right-8 z-50 p-4 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300 md:bottom-12 md:right-12"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <MessageSquare className="w-6 h-6 fill-black" />
        </motion.a>
    );
};

export const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[100]"
            style={{ scaleX }}
        />
    );
}

export default StickyCTA;
