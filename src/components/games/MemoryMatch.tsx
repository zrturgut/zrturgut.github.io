import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const CARDS = ['🎮', '👾', '🚀', '🌈', '⚡️', '🔥', '💎', '🎲'];

const MemoryMatch = ({ onBack }: { onBack: () => void }) => {
    const [cards, setCards] = useState<{ id: number, content: string, isFlipped: boolean, isMatched: boolean }[]>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [matches, setMatches] = useState(0);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const shuffled = [...CARDS, ...CARDS]
            .sort(() => Math.random() - 0.5)
            .map((content, index) => ({
                id: index,
                content,
                isFlipped: false,
                isMatched: false
            }));
        setCards(shuffled);
        setFlipped([]);
        setMatches(0);
    };

    const handleCardClick = (id: number) => {
        if (flipped.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

        const newCards = [...cards];
        newCards[id].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flipped, id];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            const [first, second] = newFlipped;
            if (cards[first].content === cards[second].content) {
                newCards[first].isMatched = true;
                newCards[second].isMatched = true;
                setCards(newCards);
                setMatches(m => m + 1);
                setFlipped([]);
            } else {
                setTimeout(() => {
                    newCards[first].isFlipped = false;
                    newCards[second].isFlipped = false;
                    setCards([...newCards]); // Force re-render
                    setFlipped([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex justify-between w-full items-center mb-2">
                <h3 className="text-2xl font-bold text-white">Memory Match</h3>
                <button onClick={onBack} className="text-gray-400 hover:text-white">Back to Arcade</button>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {cards.map((card) => (
                    <motion.button
                        key={card.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCardClick(card.id)}
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-3xl transition-all duration-300 ${card.isFlipped || card.isMatched
                                ? 'bg-purple-600 rotate-0'
                                : 'bg-white/10 rotate-180 text-transparent'
                            }`}
                    >
                        {(card.isFlipped || card.isMatched) ? card.content : '?'}
                    </motion.button>
                ))}
            </div>

            {matches === CARDS.length && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center gap-4 mt-4"
                >
                    <div className="text-2xl font-bold text-green-400">All Matched! 🎉</div>
                    <button
                        onClick={initializeGame}
                        className="flex items-center gap-2 px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                    >
                        <RefreshCw className="w-4 h-4" /> Restart
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default MemoryMatch;
