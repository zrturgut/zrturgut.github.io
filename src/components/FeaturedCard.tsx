interface FeaturedCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  large?: boolean;
}

const FeaturedCard = ({ title, description, tags, image, link, large = false }: FeaturedCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-lg bg-card hover-lift ${
        large ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-secondary/80 text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default FeaturedCard;
