import React, { useState } from 'react';
import { MdLaunch } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import styles from './Projects.module.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online store operations with real-time analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1667053310801-d83094493eb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxjb21wdXRlciUyMHdlYnNpdGUlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc1NzkyMzc0OXww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Modern web application interface, dashboard design, clean UI by Kaja Sariwating on Unsplash',
      technologies: ['React', 'Django', 'CSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Intuitive mobile banking application with secure transactions, budget tracking, and financial insights.',
      image: 'https://images.unsplash.com/photo-1663153203126-08bbadc178ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDB8MXx8fDE3NTc5MjM3NDl8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Mobile app interface, smartphone screen, modern design by Typerium App on Unsplash',
      technologies: ['React', 'UI/UX', 'HTML'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Online Shopping Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGVjb21tZXJjZSUyMHdlYnNpdGUlMjBwcm9kdWN0c3xlbnwwfDB8fHwxNzU3OTIzNzQ5fDA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'E-commerce website, online shopping interface, product catalog by Jonny Gios on Unsplash',
      technologies: ['Django', 'Jinja2', 'CSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.',
      image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxjb21wdXRlciUyMHdlYnNpdGUlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc1NzkyMzc0OXww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Modern web application interface, dashboard design, clean UI by Fernando Hernandez on Unsplash',
      technologies: ['React', 'CSS', 'UI/UX'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management application with team features, deadlines, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDB8MXx8fDE3NTc5MjM3NDl8MA&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Mobile app interface, smartphone screen, modern design by Maccy on Unsplash',
      technologies: ['Django', 'HTML', 'CSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Comprehensive design system with reusable components, style guides, and documentation.',
      image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMHdlYnNpdGUlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc1NzkyMzc0OXww&ixlib=rb-4.1.0&q=85',
      imageAlt: 'Modern web application interface, dashboard design, clean UI by Growtika on Unsplash',
      technologies: ['UI/UX', 'CSS', 'HTML'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.projectsHeader}>
          <h2 className="heading-lg text-gradient">Featured Projects</h2>
          <p className="body-lg">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className={styles.filterTabs}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.filterTab} ${filter === category.id ? styles.active : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${styles[`card${(index % 3) + 1}`]}`}
            >
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.imageAlt}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectActions}>
                    <a 
                      href={project.liveUrl} 
                      className={styles.projectAction}
                      aria-label="View live project"
                    >
                      <MdLaunch size={20} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className={styles.projectAction}
                      aria-label="View source code"
                    >
                      <MdAccountCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;