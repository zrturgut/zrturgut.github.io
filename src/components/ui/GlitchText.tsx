import React from "react";

const GlitchText = ({ text }: { text: React.ReactNode }) => {
    return (
        <div className="relative group inline-block">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 ease-linear select-none" aria-hidden="true">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 ease-linear select-none" aria-hidden="true">{text}</span>
        </div>
    );
};

export default GlitchText;
