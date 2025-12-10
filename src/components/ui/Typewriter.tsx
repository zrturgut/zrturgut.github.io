import { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [delay, text]);

    useEffect(() => {
        if (!text) return;
        setDisplayedText("");
    }, [text]);

    useEffect(() => {
        if (!started) return;
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [text, started]);

    return <span className="font-mono" aria-label={text}>{displayedText}<span className="animate-pulse" aria-hidden="true">_</span></span>;
};

export default Typewriter;
