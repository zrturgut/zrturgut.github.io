import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for clickable elements or specific classes
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference">
                {/* Main Cursor Dot */}
                <motion.div
                    className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white"
                    animate={{
                        x: mousePosition.x - 6,
                        y: mousePosition.y - 6,
                        scale: isClicking ? 0.8 : isHovering ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
                />

                {/* Fluid Follower Ring */}
                <motion.div
                    className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/50 backdrop-invert"
                    animate={{
                        x: mousePosition.x - 24,
                        y: mousePosition.y - 24,
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
                />
            </div>
        </>
    );
};

export default CustomCursor;
