import React, { useState, useEffect } from 'react';

const ClickRipple = () => {
    const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const id = Date.now();
            setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id }]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[99998]">
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full border border-white/50 bg-white/10 animate-ping"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: '20px',
                        height: '20px',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    );
};
export default ClickRipple;
