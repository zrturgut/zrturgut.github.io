import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, RotateCw } from "lucide-react";

interface AIStrategyGameProps {
    onClose: () => void;
}

const GRID_SIZE = 15;
const CELL_SIZE = 20;

type Point = { x: number; y: number };

const AIStrategyGame = ({ onClose }: AIStrategyGameProps) => {
    const [snake, setSnake] = useState<Point[]>([{ x: 7, y: 7 }]);
    const [food, setFood] = useState<Point>({ x: 3, y: 3 });
    const [direction, setDirection] = useState<Point>({ x: 0, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

    // AI "Prediction" Visuals
    // In a real "AI Strategy" game we might show a pathfinding algo overlay.
    // For this simple robust implementation, we'll keep it as a sleek Snake game
    // but branded as "Neural Navigate".

    const generateFood = () => {
        return {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        };
    };

    const resetGame = () => {
        setSnake([{ x: 7, y: 7 }]);
        setFood(generateFood());
        setDirection({ x: 0, y: 0 });
        setGameOver(false);
        setScore(0);
        setGameStarted(false);
        if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };

    const startGame = () => {
        setGameStarted(true);
        setDirection({ x: 1, y: 0 });
        setGameOver(false);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!gameStarted) return;
            switch (e.key) {
                case "ArrowUp":
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case "ArrowDown":
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case "ArrowLeft":
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case "ArrowRight":
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [direction, gameStarted]);

    useEffect(() => {
        if (gameStarted && !gameOver) {
            gameLoopRef.current = setInterval(() => {
                setSnake((prev) => {
                    const newHead = {
                        x: prev[0].x + direction.x,
                        y: prev[0].y + direction.y,
                    };

                    // Check collisions
                    if (
                        newHead.x < 0 ||
                        newHead.x >= GRID_SIZE ||
                        newHead.y < 0 ||
                        newHead.y >= GRID_SIZE ||
                        prev.some((p) => p.x === newHead.x && p.y === newHead.y)
                    ) {
                        setGameOver(true);
                        return prev;
                    }

                    const newSnake = [newHead, ...prev];
                    if (newHead.x === food.x && newHead.y === food.y) {
                        setScore((s) => s + 10);
                        setFood(generateFood());
                    } else {
                        newSnake.pop();
                    }
                    return newSnake;
                });
            }, 150);
        }
        return () => {
            if (gameLoopRef.current) clearInterval(gameLoopRef.current);
        };
    }, [gameStarted, gameOver, direction, food]);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-black border border-purple-500/30 p-6 rounded-2xl shadow-2xl relative max-w-md w-full"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-1"><span className="text-purple-500">Neural</span> Navigate</h2>
                    <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">Training Phase: Collect Data</p>
                </div>

                <div className="relative mx-auto bg-gray-900 border border-white/10 rounded-lg overflow-hidden"
                    style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>

                    {/* Grid Lines (Optional Aesthetic) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
                        }}
                    />

                    {snake.map((part, i) => (
                        <div
                            key={i}
                            className="absolute bg-purple-500 border border-black/50"
                            style={{
                                left: part.x * CELL_SIZE,
                                top: part.y * CELL_SIZE,
                                width: CELL_SIZE,
                                height: CELL_SIZE,
                                borderRadius: i === 0 ? '4px' : '2px', // Head is rounder
                                opacity: 1 - i / (snake.length + 5), // Fade tail
                            }}
                        />
                    ))}

                    <div
                        className="absolute bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)] rounded-full animate-pulse"
                        style={{
                            left: food.x * CELL_SIZE,
                            top: food.y * CELL_SIZE,
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            transform: 'scale(0.8)'
                        }}
                    />

                    {(!gameStarted || gameOver) && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px]">
                            {gameOver ? (
                                <>
                                    <div className="text-red-500 font-bold mb-2">CRASH DETECTED</div>
                                    <div className="text-white text-xl font-mono mb-4">Score: {score}</div>
                                    <button
                                        onClick={resetGame}
                                        className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-bold transition-all"
                                    >
                                        <RotateCw className="w-4 h-4" /> Retry
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={startGame}
                                    className="flex items-center gap-2 px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all"
                                >
                                    <Play className="w-4 h-4" /> Start Simulation
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-between items-center text-sm font-mono text-gray-500">
                    <div>Score: <span className="text-white">{score}</span></div>
                    <div className="flex gap-1">
                        <span className="px-1 border border-white/10 rounded">↑</span>
                        <span className="px-1 border border-white/10 rounded">↓</span>
                        <span className="px-1 border border-white/10 rounded">←</span>
                        <span className="px-1 border border-white/10 rounded">→</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AIStrategyGame;
