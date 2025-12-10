interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const ProjectCard = ({ title, description, tags, image, link }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg bg-card hover-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-background/20" />
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
