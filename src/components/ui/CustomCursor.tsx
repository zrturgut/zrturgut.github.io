import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    marginTop: -8,
                    marginLeft: -8,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    marginTop: -16,
                    marginLeft: -16,
                }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
