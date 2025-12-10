import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomContextMenu = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            setVisible(true);
            setPosition({ x: e.clientX, y: e.clientY });
        };
        const handleClick = () => setVisible(false);

        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    style={{ left: position.x, top: position.y }}
                    className="fixed z-[99999] bg-black/90 border border-white/20 backdrop-blur-xl rounded-lg p-2 min-w-[200px] shadow-2xl overflow-hidden"
                >
                    <div className="px-3 py-2 text-xs font-mono text-gray-500 border-b border-white/10 mb-1">
                        SYSTEM ACTIONS
                    </div>
                    <button onClick={() => window.print()} className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded transition-colors flex items-center justify-between">
                        <span>Print Portfolio</span>
                        <span className="text-[10px] text-gray-600">CMD+P</span>
                    </button>
                    <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded transition-colors flex items-center justify-between">
                        <span>Copy Link</span>
                        <span className="text-[10px] text-gray-600">CMD+C</span>
                    </button>
                    <a href="mailto:zackturgut@gmail.com" className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-white/10 rounded transition-colors flex items-center justify-between">
                        <span>Contact Me</span>
                        <span className="text-[10px] text-gray-600">@</span>
                    </a>
                    <div className="px-3 py-2 text-[10px] text-gray-700 mt-1 text-center">
                        © 2024 Zekeriyya Turgut
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default CustomContextMenu;
