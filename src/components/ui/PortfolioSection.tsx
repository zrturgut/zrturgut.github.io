import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggeredText from "@/components/ui/StaggeredText";
import RevealWrapper from "@/components/ui/RevealWrapper";

interface PortfolioSectionProps {
    id?: string;
    title: string;
    subtitle: string;
    index: number;
    children: React.ReactNode;
    backgroundImage?: string;
}

const PortfolioSection = ({ id, title, subtitle, index, children, backgroundImage }: PortfolioSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id={id}
            ref={ref}
            className="relative min-h-[50vh] flex flex-col items-center py-24 md:py-32 px-4 overflow-hidden border-b border-white/5 last:border-0"
        >
            {/* Background Image Parallax */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-20" />
                    <motion.img
                        src={backgroundImage}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover opacity-[0.05] grayscale"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                    />
                </div>
            )}

            {/* Content Container */}
            <div className="relative z-30 container mx-auto max-w-6xl w-full">
                {/* Header */}
                <motion.div
                    style={{ y: headerY, opacity }}
                    className="mb-16 md:mb-24 px-4 border-l-2 border-purple-500/50 pl-6"
                >
                    <span className="text-6xl md:text-8xl font-thin text-white/5 font-mono absolute -top-12 -left-4 select-none pointer-events-none">
                        0{index + 1}
                    </span>

                    <div className="relative z-10 mb-2">
                        <StaggeredText
                            text={title}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2"
                        />
                    </div>

                    <p className="text-purple-400 uppercase tracking-[0.2em] text-sm font-semibold max-w-xl">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Children (The main content) */}
                <RevealWrapper delay={0.2}>
                    {children}
                </RevealWrapper>
            </div>
        </section>
    );
};

export default PortfolioSection;
