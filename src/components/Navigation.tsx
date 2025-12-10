


const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-8 pointer-events-none">
            <div className="text-xl font-bold tracking-wider pointer-events-auto hover:text-purple-400 transition-colors cursor-pointer">
                ZEKERIYYA TURGUT
            </div>

            <div className="flex gap-6 pointer-events-auto">
                <a
                    href="https://github.com/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <span className="text-xl font-bold group-hover:text-purple-400 transition-colors">GITHUB</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">CODE REPOS</span>
                </a>
                <a
                    href="https://linkedin.com/in/zrturgut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                >
                    <span className="text-xl font-bold group-hover:text-purple-400 transition-colors">LINKEDIN</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">PROFESSIONAL</span>
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
