import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gamepad2, Grid3X3, Brain } from 'lucide-react';
import AIStrategyGame from '../AIStrategyGame';
import TicTacToe from './games/TicTacToe';
import MemoryMatch from './games/MemoryMatch';

interface GameCenterProps {
    onClose: () => void;
    onLaunchSnake?: () => void;
}

const GameCenter = ({ onClose, onLaunchSnake }: GameCenterProps) => {
    const [activeGame, setActiveGame] = useState<'menu' | 'snake' | 'tictactoe' | 'memory'>('menu');

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative min-h-[600px] flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition z-20"
                >
                    <X size={24} />
                </button>

                <div className="flex-1 p-8 overflow-y-auto">
                    {activeGame === 'menu' ? (
                        <div className="h-full flex flex-col justify-center">
                            <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                                ARCADE CENTER
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <button
                                    onClick={() => onLaunchSnake?.()}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all text-left flex flex-col gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                                        <Gamepad2 />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Neural Navigate</h3>
                                        <p className="text-sm text-gray-400">Classic Snake with an AI twist.</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setActiveGame('tictactoe')}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-left flex flex-col gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <Grid3X3 />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Tic Tac Toe</h3>
                                        <p className="text-sm text-gray-400">Challenge the logic.</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setActiveGame('memory')}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all text-left flex flex-col gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                                        <Brain />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Memory Match</h3>
                                        <p className="text-sm text-gray-400">Test your recall.</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full">
                            {activeGame === 'snake' && (
                                <div className="relative h-full flex flex-col items-center justify-center">
                                    <button onClick={() => setActiveGame('menu')} className="absolute top-0 left-0 text-sm text-gray-500 hover:text-white mb-4">← Back to Arcade</button>
                                    {/* Re-using logic from AIStrategyGame but unwrapped if needed, or just rendering it. 
                                 However, AIStrategyGame has its own Modal wrapper. I should probably refactor AIStrategyGame 
                                 or just mount it here. But AIStrategyGame has `onClose`. 
                                 Let's assume AIStrategyGame renders a modal. 
                                 Actually, looking at previous edits, AIStrategyGame IS a modal.
                                 I should probably just render the CONTENTS of snake here. 
                                 For now, let's just cheat and render it, but it might double modal opacity.
                                 Better approach: Render the new games here, and for Snake, maybe just re-implement or accept the double modal for now?
                                 No, user wants "add 2 more basic games".
                                 Let's just refactor AIStrategyGame later if needed. For now let's just display it.
                             */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <p className="text-white">Launching Neural Navigate...</p>
                                        {/* Actually, since AIStrategyGame is a Modal, I can't easily embed it inside this div without changes.
                                     I will refactor AIStrategyGame to be embeddable or just change logic.
                                     For now, let's just conditionally render the existing AIStrategyGame component 
                                     if activeGame is snake, but that would be outside this GameCenter modal?
                                     
                                     Let's change the plan: GameCenter handles the menu. If Snake is picked, we switch to Snake mode.
                                  */}
                                    </div>
                                </div>
                            )}
                            {activeGame === 'tictactoe' && <TicTacToe onBack={() => setActiveGame('menu')} />}
                            {activeGame === 'memory' && <MemoryMatch onBack={() => setActiveGame('menu')} />}
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Hack: If snake is active, render the original component on top and close this menu temporarily? 
          Or better: Modify AIStrategyGame to be a child component. 
          Given the constraint, I'll just render AIStrategyGame when 'snake' is chosen 
          and hide GameCenter, or just pass a prop to GameCenter to close itself and open Snake?
      */}
        </div>
    );
};

export default GameCenter;
