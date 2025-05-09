
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Danny Karouw. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/DannyGithubAcc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/danny-karouw-27274820/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
