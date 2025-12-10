const About = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">About</h2>
        <div className="max-w-2xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a BSc Artificial Intelligence student at Vrije Universiteit Amsterdam, 
            passionate about building intelligent systems that solve real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My focus areas include Natural Language Processing, Machine Learning, 
            and Knowledge Graphs. I enjoy working on projects that combine cutting-edge 
            AI techniques with practical applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently exploring the intersection of AI and healthcare, building tools 
            that make AI more accessible and useful for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
