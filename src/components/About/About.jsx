import React from 'react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    { name: 'Django', level: 'Intermediate', percentage: 70 },
    { name: 'Jinja2', level: 'Advanced', percentage: 90 },
    { name: 'CSS', level: 'Expert', percentage: 95 },
    { name: 'HTML', level: 'Expert', percentage: 95 },
    { name: 'React', level: 'Intermediate', percentage: 75 },
    { name: 'UI/UX', level: 'Expert', percentage: 90 }
  ];

  const qualifications = [
    {
      year: '2023',
      title: 'Full Stack Development',
      institution: 'Self-taught & Online Courses',
      description: 'Mastered modern web development technologies and frameworks'
    },
    {
      year: '2022',
      title: 'UI/UX Design Certification',
      institution: 'Design Institute',
      description: 'Advanced training in user interface and experience design'
    },
    {
      year: '2021',
      title: 'Web Development Fundamentals',
      institution: 'Tech Academy',
      description: 'Foundation in HTML, CSS, and JavaScript'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.aboutHeader}>
          <h2 className="heading-lg text-gradient">About Me</h2>
          <p className="body-lg">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <div className={styles.bioCard}>
              <h3 className="heading-sm">My Story</h3>
              <p className="body-md">
                I'm a passionate Full Stack Developer with a keen eye for design and a love for 
                creating seamless user experiences. My journey in web development started with 
                curiosity and has evolved into expertise across multiple technologies.
              </p>
              <p className="body-md">
                I specialize in building modern, responsive web applications using cutting-edge 
                technologies. From crafting pixel-perfect user interfaces to developing robust 
                backend systems, I enjoy every aspect of the development process.
              </p>
              <p className="body-md">
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open-source projects, or learning about emerging technologies in the web development space.
              </p>
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h3 className="heading-sm">Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={skill.name} className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress}
                      style={{ 
                        width: `${skill.percentage}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.qualificationsSection}>
          <h3 className="heading-sm">Education & Qualifications</h3>
          <div className={styles.timeline}>
            {qualifications.map((qual, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span className={styles.timelineYear}>{qual.year}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h4 className={styles.timelineTitle}>{qual.title}</h4>
                  <p className={styles.timelineInstitution}>{qual.institution}</p>
                  <p className={styles.timelineDescription}>{qual.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;