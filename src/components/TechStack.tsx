const technologies = [
  "Python",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "SQL",
  "Neo4j",
  "HuggingFace",
  "BERT",
  "TensorFlow",
  "OpenAI API",
  "LangChain",
  "Docker",
  "Git",
  "React",
  "TypeScript",
];

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
