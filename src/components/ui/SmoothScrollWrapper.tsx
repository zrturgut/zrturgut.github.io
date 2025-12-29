import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform, useScroll } from "framer-motion";

// This component creates a "virtual" scroll container that smooths out the native scroll
const SmoothScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    // Sync height on resize
    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [children]);

    const { scrollY } = useScroll(); // Native scroll position

    // Create a spring that follows the native scroll but smooths it out
    const smoothY = useSpring(scrollY, {
        damping: 15,
        stiffness: 100,
        mass: 0.5
    });

    // Inverse transform for the fixed content
    const y = useTransform(smoothY, (value) => -value);

    return (
        <>
            {/* The "ghost" div that forces the body to have the correct scrollable height */}
            <div style={{ height: contentHeight }} className="pointer-events-none" />

            {/* The fixed container that we move with the spring */}
            <motion.div
                ref={contentRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
            >
                {children}
            </motion.div>
        </>
    );
};

export default SmoothScrollWrapper;
