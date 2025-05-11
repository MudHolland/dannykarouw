
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code as CodeXml, DatabaseZap, Settings2, Server, Layers3, CloudCog, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'Angular', icon: CodeXml, color: 'text-red-500', description: "Deep expertise in modern Angular, building complex SPAs." },
  { name: 'Spring Boot', icon: Coffee, color: 'text-green-500', description: "Robust backend solutions with Java and Spring ecosystem." },
  { name: 'Node.js', icon: CodeXml, color: 'text-green-400', description: "Efficient and scalable server-side applications with JavaScript." },
  { name: 'Java', icon: Coffee, color: 'text-orange-500', description: "Enterprise-grade applications and backend systems." },
  { name: 'Docker', icon: Settings2, color: 'text-blue-500', description: "Containerization for consistent environments and deployments." },
  { name: 'Kafka', icon: DatabaseZap, color: 'text-purple-500', description: "Building real-time data pipelines and streaming apps." },
  { name: 'Jenkins', icon: Server, color: 'text-yellow-500', description: "CI/CD automation for streamlined development workflows." },
  { name: 'Nginx', icon: CloudCog, color: 'text-green-600', description: "High-performance web serving, reverse proxying, and load balancing." },
  { name: 'React', icon: Layers3, color: 'text-sky-500', description: "Building dynamic UIs with a component-based architecture." },
  { name: 'TailwindCSS', icon: Layers3, color: 'text-teal-500', description: "Rapid UI development with utility-first CSS." },
];

const HomePage = () => {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 md:py-24 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: 'linear-gradient(rgba(16, 23, 42, 0.8), rgba(16, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80")' }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Danny Karouw</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A passionate Full-Stack Developer specializing in cutting-edge technologies to build robust and scalable web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link to="/showcases">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-transform duration-300">
              <Link to="/about">
                About Me
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12 md:py-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">My Tech Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glassmorphism hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <skill.icon className={`h-10 w-10 ${skill.color}`} />
                  <CardTitle className="text-2xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-12 md:py-16 text-center glassmorphism rounded-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build something amazing?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always excited to discuss new projects and opportunities. Let's connect and bring your ideas to life.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a href="mailto:danny.karouw@example.com">
            Get in Touch
          </a>
        </Button>
      </motion.section>
    </div>
  );
};

export default HomePage;
