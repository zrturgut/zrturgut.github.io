import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName.toLowerCase() === 'a' ||
                (e.target as HTMLElement).tagName.toLowerCase() === 'button' ||
                (e.target as HTMLElement).closest('a') ||
                (e.target as HTMLElement).closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block mix-blend-difference">
            <motion.div
                className="fixed top-0 left-0 bg-white rounded-full"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    width: isHovering ? 60 : 16,
                    height: isHovering ? 60 : 16,
                    marginTop: isHovering ? -30 : -8,
                    marginLeft: isHovering ? -30 : -8,
                    opacity: 0.8
                }}
            />
            {/* Trailing 'Ghost' */}
            <motion.div
                className="fixed top-0 left-0 border border-white rounded-full"
                animate={{
                    width: isHovering ? 80 : 40,
                    height: isHovering ? 80 : 40,
                    marginTop: isHovering ? -40 : -20,
                    marginLeft: isHovering ? -40 : -20,
                }}
                transition={{ duration: 0.2 }}
                style={{
                    translateX: cursorX, // Direct tracking for trail
                    translateY: cursorY,
                    opacity: 0.3
                }}
            />
        </div>
    );
};

export default CustomCursor;
