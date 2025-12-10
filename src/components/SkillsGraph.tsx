import { useMemo, useState, useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { resumeData } from "@/data/resume";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

// Helper to normalize strings for comparison
const normalize = (str: string) => str.toLowerCase().trim();

const SkillsGraph = () => {
    const { theme } = useTheme(); // Though we are in forced dark mode mostly
    const [highlightedNode, setHighlightedNode] = useState<any>(null);
    const [dimensions, setDimensions] = useState({ w: 800, h: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Prepare Graph Data
    const graphData = useMemo(() => {
        const nodes: any[] = [];
        const links: any[] = [];

        // 1. Central Node
        nodes.push({ id: "Me", label: "Me", group: "center", radius: 8 });

        // 2. Category Nodes
        const categories = [
            { id: "category-lang", label: "Languages", group: "category", color: "#4ade80" },
            { id: "category-ai", label: "AI / ML", group: "category", color: "#c084fc" },
            { id: "category-tools", label: "Tools", group: "category", color: "#fbbf24" },
        ];
        nodes.push(...categories);
        categories.forEach(c => links.push({ source: "Me", target: c.id, value: 3 }));

        // 3. Skill Nodes
        // Languages
        resumeData.technicalSkills.languages.forEach(skill => {
            nodes.push({ id: skill, label: skill, group: "skill", color: "#4ade80" });
            links.push({ source: "category-lang", target: skill, value: 1 });
        });
        // AI/ML
        resumeData.technicalSkills.libraries.forEach(skill => {
            nodes.push({ id: skill, label: skill, group: "skill", color: "#c084fc" });
            links.push({ source: "category-ai", target: skill, value: 1 });
        });
        // Tools
        resumeData.technicalSkills.tools.forEach(skill => {
            nodes.push({ id: skill, label: skill, group: "skill", color: "#fbbf24" });
            links.push({ source: "category-tools", target: skill, value: 1 });
        });

        return { nodes, links };
    }, []);

    // Handle Resize
    useEffect(() => {
        const updateDim = () => {
            if (containerRef.current) {
                setDimensions({
                    w: containerRef.current.clientWidth,
                    h: containerRef.current.clientHeight
                });
            }
        };

        // Initial update
        updateDim();

        // Use ResizeObserver for robust container resizing
        const observer = new ResizeObserver(() => {
            updateDim();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Find Related Projects
    const relatedProjects = useMemo(() => {
        if (!highlightedNode || highlightedNode.group !== "skill") return [];
        return resumeData.projects.filter(p =>
            p.technologies.some(tech => normalize(tech).includes(normalize(highlightedNode.label)) || normalize(highlightedNode.label).includes(normalize(tech)))
        );
    }, [highlightedNode]);

    return (
        <div className="relative w-full h-full min-h-[500px] flex gap-4" ref={containerRef}>
            <div className="flex-grow border border-white/10 rounded-xl overflow-hidden bg-black/20">
                <ForceGraph2D
                    width={dimensions.w}
                    height={dimensions.h}
                    graphData={graphData}
                    nodeLabel="label"
                    nodeColor={(node: any) => node.color || "#fff"}
                    nodeRelSize={6}
                    linkColor={() => "rgba(255,255,255,0.2)"}
                    backgroundColor="rgba(0,0,0,0)"
                    onNodeClick={(node) => {
                        setHighlightedNode(node);
                        // Center/Zoom?
                    }}
                    onBackgroundClick={() => setHighlightedNode(null)}
                    d3VelocityDecay={0.3} // Damping
                    d3AlphaDecay={0.02} // Simulation speed
                    cooldownTicks={100}
                />
            </div>

            {/* Overlay Info Panel */}
            <AnimatePresence>
                {highlightedNode && (
                    <motion.div
                        key={highlightedNode.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-4 top-4 w-64 p-4 rounded-xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl z-20 pointer-events-auto max-h-[90%] overflow-y-auto"
                    >
                        <h3 className="text-xl font-bold text-white mb-1">{highlightedNode.label}</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                            {highlightedNode.group === 'skill' ? 'Related Projects' :
                                highlightedNode.group === 'category' ? 'Included Skills' : 'Overview'}
                        </p>

                        {highlightedNode.group === 'skill' ? (
                            relatedProjects.length > 0 ? (
                                <ul className="space-y-3">
                                    {relatedProjects.map(p => (
                                        <li key={p.title} className="text-sm text-gray-300 border-l-2 border-purple-500 pl-3">
                                            <div className="font-bold text-purple-200">{p.title}</div>
                                            <div className="text-xs text-gray-500 line-clamp-2">{p.details[0]}</div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-500 italic">No direct project links modeled for this skill.</p>
                            )
                        ) : highlightedNode.group === 'category' ? (
                            <ul className="flex flex-wrap gap-2">
                                {graphData.nodes
                                    .filter((n: any) => n.group === 'skill' && n.color === highlightedNode.color)
                                    .map((n: any) => (
                                        <li key={n.id} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/10">
                                            {n.label}
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                            <div className="text-sm text-gray-300">
                                <p className="mb-2">Central Node</p>
                                <p className="text-xs text-gray-500">Connects to {graphData.nodes.length - 1} data points across Languages, AI/ML, and Tools.</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 text-xs text-gray-500 pointer-events-none">
                * Click nodes to see usage
            </div>
        </div>
    );
};

export default SkillsGraph;
