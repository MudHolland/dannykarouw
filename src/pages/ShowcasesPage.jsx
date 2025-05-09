
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution built with Angular, Spring Boot, and microservices architecture. Includes product catalog, shopping cart, order management, and payment integration.',
    tech: ['Angular', 'Spring Boot', 'Kafka', 'Docker', 'PostgreSQL'],
    image: 'Modern online store interface',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'A dynamic dashboard for visualizing real-time data streams, utilizing Kafka for data ingestion and Angular for the frontend.',
    tech: ['Angular (v19)', 'Node.js', 'Kafka', 'WebSocket', 'Chart.js'],
    image: 'Dashboard with charts and graphs',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'DevOps Automation Suite',
    description: 'A set of tools and scripts for automating CI/CD pipelines using Jenkins, Docker, and Nginx for deployment.',
    tech: ['Jenkins', 'Docker', 'Nginx', 'Groovy', 'Bash'],
    image: 'CI/CD pipeline visualization',
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ShowcasesPage = () => {
  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in various technologies.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col glassmorphism hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <img  className="w-full h-48 object-cover rounded-t-lg mb-4" alt={project.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground pt-1 h-20 overflow-hidden">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(techName => (
                      <span key={techName} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild disabled={project.liveUrl === '#'}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild disabled={project.repoUrl === '#'}>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
       <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: projects.length * 0.15 + 0.2 }}
        className="text-center text-muted-foreground mt-12"
      >
        More projects coming soon...
      </motion.p>
    </div>
  );
};

export default ShowcasesPage;
