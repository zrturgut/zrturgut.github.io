import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, X, Circle } from 'lucide-react';

const TicTacToe = ({ onBack }: { onBack: () => void }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);

    const handleClick = (i: number) => {
        if (winner || board[i]) return;
        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    useEffect(() => {
        const calculateWinner = (squares: string[]) => {
            const lines = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
            return null;
        };
        const w = calculateWinner(board);
        if (w) setWinner(w);
        else if (!board.includes(null)) setWinner('Draw');
    }, [board]);

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex justify-between w-full items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Tic Tac Toe</h3>
                <button onClick={onBack} className="text-gray-400 hover:text-white">Back to Arcade</button>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-white/10 p-2 rounded-xl">
                {board.map((square, i) => (
                    <button
                        key={i}
                        onClick={() => handleClick(i)}
                        className={`w-20 h-20 flex items-center justify-center text-4xl font-black rounded-lg transition-all ${square ? 'bg-white/5' : 'bg-white/10 hover:bg-white/20'
                            } ${square === 'X' ? 'text-purple-500' : 'text-green-500'}`}
                    >
                        {square === 'X' && <X className="w-12 h-12" />}
                        {square === 'O' && <Circle className="w-12 h-12" />}
                    </button>
                ))}
            </div>

            {winner && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="text-3xl font-bold mb-4">
                        {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
                    </div>
                    <button
                        onClick={() => { setBoard(Array(9).fill(null)); setWinner(null); setXIsNext(true); }}
                        className="flex items-center gap-2 px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
                    >
                        <RefreshCw className="w-4 h-4" /> Play Again
                    </button>
                </motion.div>
            )}

            <div className="text-sm text-gray-500">
                Player: {xIsNext ? 'X (You)' : 'O'}
            </div>
        </div>
    );
};

export default TicTacToe;
