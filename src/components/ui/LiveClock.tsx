import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LiveClock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Europe/Amsterdam' }));
        };
        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>AMS {time}</span>
        </div>
    );
};
export default LiveClock;
