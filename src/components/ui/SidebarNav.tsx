import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
];

const SidebarNav = () => {
    const [activeSection, setActiveSection] = useState('projects');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8"
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-4 relative pl-2"
                >
                    {/* Active Indicator */}
                    <div
                        className={`absolute left-0 w-[2px] h-full transition-all duration-300 ${activeSection === section.id
                                ? 'bg-purple-500 h-8 top-1/2 -translate-y-1/2'
                                : 'bg-white/10 h-0 top-1/2 -translate-y-1/2 group-hover:h-4'
                            }`}
                    />

                    <span
                        className={`text-sm font-mono tracking-widest uppercase transition-all duration-300 ${activeSection === section.id
                                ? 'text-white translate-x-2'
                                : 'text-white/20 hover:text-white/60'
                            }`}
                    >
                        {section.label}
                    </span>
                </button>
            ))}
        </motion.div>
    );
};

export default SidebarNav;
