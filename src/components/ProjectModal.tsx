import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: any; // Using any for quick integration with resumeData structure
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    // Close on Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-4xl max-h-[90vh] bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto relative">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left: Media */}
                            <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center p-8 border-r border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 opacity-50" />
                                {project.gif ? (
                                    <img
                                        src={project.gif}
                                        alt={project.title}
                                        className="relative rounded-lg shadow-2xl border border-white/10 w-full object-cover max-h-[400px]"
                                    />
                                ) : (
                                    <div className="relative w-full h-64 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                                        <span className="text-white/20 font-mono">NO PREVIEW</span>
                                    </div>
                                )}
                            </div>

                            {/* Right: Details */}
                            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                {project.subtitle && (
                                    <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-purple-500 pl-3">
                                        {project.subtitle}
                                    </p>
                                )}

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((t: string) => (
                                                <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</h3>
                                        <ul className="space-y-3">
                                            {project.details?.map((d: string, i: number) => (
                                                <li key={i} className="text-sm text-gray-300 leading-relaxed flex gap-3">
                                                    <span className="text-purple-500 mt-1.5">•</span>
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 flex gap-4">
                                        {project.repo && (
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all group"
                                            >
                                                <Github className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                                <span className="text-sm font-bold text-gray-300 group-hover:text-white">Source Code</span>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg hover:shadow-purple-500/25"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm font-bold">Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
