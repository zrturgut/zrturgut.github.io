import { useCallback } from 'react';

// Preload audio files
const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); // Subtle click/tick
const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'); // Soft interface beep

hoverSound.volume = 0.2;
clickSound.volume = 0.3;

export const useUiSound = () => {
    const playHover = useCallback(() => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => { }); // Ignore errors (e.g. user hasn't interacted yet)
    }, []);

    const playClick = useCallback(() => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });
    }, []);

    return { playHover, playClick };
};
