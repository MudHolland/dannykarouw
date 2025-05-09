
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, CalendarDays, Download, GraduationCap, Lightbulb, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const timelineEvents = [
  {
    date: '2023 - Present',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading development of enterprise-level web applications using Angular, Spring Boot, and microservices. Focusing on performance, scalability, and innovative solutions. Key achievements include reducing API latency by 30% and mentoring junior developers.',
    icon: Briefcase,
  },
  {
    date: '2021 - 2023',
    title: 'Mid-Level Software Engineer',
    company: 'Innovatech Ltd.',
    description: 'Developed and maintained several client projects, primarily using Node.js and React. Implemented new features, fixed bugs, and participated in agile development cycles. Contributed to a major platform migration project.',
    icon: Briefcase,
  },
  {
    date: '2020',
    title: 'B.Sc. in Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and distributed systems. Completed a thesis on "Scalable Architectures for Real-time Data Processing".',
    icon: GraduationCap,
  },
  {
    date: 'Ongoing',
    title: 'Continuous Learning & Certifications',
    company: 'Various Platforms',
    description: 'Actively pursuing certifications in cloud technologies (AWS/Azure) and advanced Angular/Spring Boot topics. Regularly participate in workshops and online courses to stay updated with the latest industry trends.',
    icon: Lightbulb,
  }
];

const AboutPage = () => {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="md:col-span-1 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full transform -rotate-6"></div>
              <img  
                className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-xl" 
                alt="Developer's profile picture"
               src="https://images.unsplash.com/photo-1597069170894-eb727a7a7b3c" />
            </div>
          </motion.div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6">
              I am a results-oriented Full-Stack Developer with a strong passion for creating efficient, scalable, and user-friendly web applications. With expertise in a wide range of modern technologies, including Angular (v19+), Spring Boot, Node.js, Docker, and Kafka, I thrive on tackling complex challenges and delivering high-quality software.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              My journey in software development is driven by a continuous desire to learn and innovate. I believe in the power of clean code, robust architecture, and collaborative teamwork to build impactful digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/path-to-your-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">My Journey & Experience</h2>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 md:pl-10 relative timeline-item"
            >
              <Card className="glassmorphism hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-in-out">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <event.icon className="h-6 w-6 text-primary mr-3" />
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base text-primary font-medium">{event.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
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
        className="text-center"
      >
         <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Core Values</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glassmorphism p-6">
                <Award className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground text-sm">Striving for excellence in code, design, and performance.</p>
            </Card>
            <Card className="glassmorphism p-6">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">Embracing new technologies and methodologies to stay ahead.</p>
            </Card>
             <Card className="glassmorphism p-6">
                <CalendarDays className="h-10 w-10 text-primary mx-auto mb-4"/>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">Believing in teamwork and open communication to achieve goals.</p>
            </Card>
         </div>
      </motion.section>

    </div>
  );
};

export default AboutPage;
