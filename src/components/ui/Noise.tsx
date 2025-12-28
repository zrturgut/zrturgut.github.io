const Noise = () => {
    return (
        <div className="fixed inset-0 z-[999] pointer-events-none">
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
            <div className="absolute inset-0 bg-radial-gradient-vignette opacity-60" />
        </div>
    );
};
export default Noise;
