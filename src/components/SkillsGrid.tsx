import { resumeData } from "@/data/resume";
import { Code2, Brain, Wrench, Globe } from "lucide-react";

const SkillCategory = ({ title, icon: Icon, skills, colorClass }: { title: string, icon: any, skills: string[], colorClass: string }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 group h-full">
        <div className={`flex items-center gap-4 mb-6 ${colorClass}`}>
            <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
                <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-black/40 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default select-none shadow-lg shadow-black/20"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const SkillsGrid = () => {
    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Languages */}
            <SkillCategory
                title="Languages"
                icon={Code2}
                skills={resumeData.technicalSkills.languages}
                colorClass="text-green-400"
            />

            {/* AI / ML (Libraries) */}
            <SkillCategory
                title="AI & Machine Learning"
                icon={Brain}
                skills={resumeData.technicalSkills.libraries}
                colorClass="text-purple-400"
            />

            {/* Tools */}
            <SkillCategory
                title="Tools & Platforms"
                icon={Wrench}
                skills={resumeData.technicalSkills.tools}
                colorClass="text-yellow-400"
            />

            {/* Spoken Languages (Optional 4th card or integrated) - Making it full width or separate */}
            <div className="lg:col-span-3">
                <SkillCategory
                    title="Spoken Languages"
                    icon={Globe}
                    skills={resumeData.technicalSkills.spokenLanguages}
                    colorClass="text-blue-400"
                />
            </div>
        </div>
    );
};

export default SkillsGrid;
