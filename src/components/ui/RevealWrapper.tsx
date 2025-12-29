import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealWrapperProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealWrapper;
