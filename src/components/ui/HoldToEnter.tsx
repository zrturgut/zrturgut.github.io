import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useUiSound } from "@/hooks/useUiSound";

interface HoldToEnterProps {
    onComplete: () => void;
}

const HoldToEnter = ({ onComplete }: HoldToEnterProps) => {
    const [isHolding, setIsHolding] = useState(false);
    const controls = useAnimation();
    const { playHover, playClick } = useUiSound();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const startHold = () => {
        setIsHolding(true);
        playHover();
        controls.start({
            pathLength: 1,
            transition: { duration: 1.2, ease: "easeOut" },
        });

        timeoutRef.current = setTimeout(() => {
            playClick();
            onComplete();
        }, 1200);
    };

    const endHold = () => {
        setIsHolding(false);
        controls.stop();
        controls.start({
            pathLength: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        });

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    return (
        <div
            className="relative cursor-pointer group"
            onMouseDown={startHold}
            onMouseUp={endHold}
            onMouseLeave={endHold}
            onTouchStart={startHold}
            onTouchEnd={endHold}
            role="button"
            aria-label="Hold to Enter"
        >
            {/* Outer Ring */}
            <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">

                {/* Progress SVG */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    <motion.circle
                        cx="48"
                        cy="48"
                        r="47"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={controls}
                        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    />
                </svg>

                {/* Inner Content */}
                <div className="flex flex-col items-center gap-1 transition-opacity duration-300">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 group-hover:text-white">Hold</span>
                    <span className="text-[8px] font-mono tracking-widest text-white/30">to enter</span>
                </div>
            </div>

            {/* Glow Effect on Grid */}
            <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700 opacity-20" />
        </div>
    );
};

export default HoldToEnter;
