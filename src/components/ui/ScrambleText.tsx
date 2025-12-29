import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

interface ScrambleTextProps {
    text: string;
    className?: string;
}

const ScrambleText = ({ text, className }: ScrambleTextProps) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        scramble();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []); // Run once on mount

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    const randomChar2 = CHARS[Math.floor(Math.random() * CHARS.length)];

                    return index % 2 === 0 ? randomChar : randomChar2; // rapid flicker
                })
                .join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        }, SHUFFLE_TIME);
    };

    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={className}
        >
            {displayText}
        </motion.h1>
    );
};

export default ScrambleText;
