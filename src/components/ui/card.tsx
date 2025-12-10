import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  index: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
  backgroundImage: string;
  children: React.ReactNode;
}

const Card = ({ index, title, subtitle, icon: Icon, isActive, onClick, backgroundImage, children }: CardProps) => {
  // Handle keyboard interaction for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      layout
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
        ${isActive ? "flex-[4]" : "flex-1 hover:flex-[1.2] opacity-80 hover:opacity-100"}
        border-r border-white/5 last:border-r-0 backdrop-blur-md group outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50
      `}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={backgroundImage}
          alt="" // Decorative background
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-1000
            ${isActive ? 'opacity-40 grayscale-0 scale-110' : 'opacity-20 grayscale scale-100 group-hover:grayscale-0 group-hover:scale-105'}
          `}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/95 z-10" />

      <div className={`relative h-full flex flex-col p-8 z-20 ${isActive ? 'justify-start' : 'justify-center items-center'}`}>

        {/* Active Header */}
        {isActive && (
          <div className="flex items-center gap-6 mb-8">
            <span className="text-6xl font-thin text-white/20 font-mono select-none">0{index + 1}</span>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-2">{title}</h2>
              <p className="text-purple-300/80 uppercase tracking-widest text-xs font-semibold">{subtitle}</p>
            </div>
          </div>
        )}

        {/* Inactive Vertical Title */}
        {!isActive && (
          <div className="h-full flex flex-col items-center justify-center gap-8">
            <span className="text-2xl font-mono text-white/40 pb-4 select-none">0{index + 1}</span>
            <div className="rotate-180 md:-rotate-90 origin-center whitespace-nowrap">
              <h2 className="text-3xl font-bold tracking-wider text-white/90 flex items-center gap-4 hover:text-purple-300 transition-colors">
                {title} <Icon className="w-6 h-6" />
              </h2>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-4 overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-white/5 h-full pb-32"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Card;
