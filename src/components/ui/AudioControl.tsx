import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioControl = ({ playTrigger }: { playTrigger?: boolean }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Laurindo Almeida - The Lamp Is Low (Preview)
        audioRef.current = new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ad/8c/aa/ad8caa3e-18ea-a1bd-4011-f1cb5b823b35/mzaf_9663511433178614089.plus.aac.p.m4a');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Watch for external trigger
    useEffect(() => {
        if (playTrigger && audioRef.current && !isPlaying) {
            const playAudio = () => {
                audioRef.current?.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => {
                        console.log("Autoplay blocked, waiting for interaction:", e);
                        // Add one-time listener to unlock
                        const unlock = () => {
                            audioRef.current?.play().then(() => setIsPlaying(true));
                            window.removeEventListener('click', unlock);
                            window.removeEventListener('keydown', unlock);
                        };
                        window.addEventListener('click', unlock);
                        window.addEventListener('keydown', unlock);
                    });
            };
            playAudio();
        }
    }, [playTrigger]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(error => {
                console.log("Audio playback failed:", error);
                setIsPlaying(false);
            });
        } else {
            audioRef.current?.pause();
        };
    }, [isPlaying]);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            onClick={toggleAudio}
            className={`fixed bottom-8 left-8 z-[100] flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 ${isPlaying
                ? 'bg-purple-500/10 border-purple-500/50 text-purple-400'
                : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/30'
                }`}
        >
            {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span className="text-xs font-mono uppercase tracking-widest hidden md:inline-block">
                {isPlaying ? 'Audio On' : 'Audio Off'}
            </span>

            {/* Visualizer bars animation when playing */}
            {isPlaying && (
                <div className="flex gap-[2px] items-end h-3">
                    <motion.div
                        animate={{ height: [4, 12, 6, 12, 4] }}
                        transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                        className="w-[2px] bg-purple-400"
                    />
                    <motion.div
                        animate={{ height: [8, 4, 12, 5, 8] }}
                        transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                        className="w-[2px] bg-purple-400"
                    />
                    <motion.div
                        animate={{ height: [5, 10, 4, 8, 5] }}
                        transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                        className="w-[2px] bg-purple-400"
                    />
                </div>
            )}
        </motion.button>
    );
};

export default AudioControl;
