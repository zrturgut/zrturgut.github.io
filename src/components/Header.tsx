import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight hover:text-accent transition-colors">
          ZEKERIYYA TURGUT
        </a>
        
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/zrturgut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/zrturgut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:zekeriyya.turgut@student.vu.nl"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
