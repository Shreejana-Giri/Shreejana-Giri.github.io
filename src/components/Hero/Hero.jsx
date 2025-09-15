import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Gradient Background */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay}></div>
      </div>

      {/* Floating Elements with Framer Motion */}
      <div className={styles.floatingElements}>
        <motion.div 
          className={`${styles.floatingElement} ${styles.element1}`}
          variants={floatingVariants}
          animate="animate"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <motion.div 
          className={`${styles.floatingElement} ${styles.element2}`}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          style={{
            transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        />
        <motion.div 
          className={`${styles.floatingElement} ${styles.element3}`}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * -0.08}px)`
          }}
        />
        <motion.div 
          className={`${styles.floatingElement} ${styles.element4}`}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroText} variants={itemVariants}>
            <motion.h1 className={`heading-xl ${styles.heroTitle}`} variants={itemVariants}>
              <motion.span className={styles.greeting} variants={itemVariants}>Hi, I'm</motion.span>
              <motion.span className={`text-gradient ${styles.name}`} variants={itemVariants}>Shreejana Giri</motion.span>
              <motion.span className={styles.role} variants={itemVariants}>Full Stack Developer</motion.span>
            </motion.h1>
            
            <motion.p className={`body-lg ${styles.heroDescription}`} variants={itemVariants}>
              I craft beautiful, functional web experiences with expertise in modern technologies. 
              From elegant frontends to robust backends, I bring ideas to life through code.
            </motion.p>
            
            <motion.div className={styles.heroActions} variants={itemVariants}>
              <motion.button 
                className="btn btn-primary" 
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
              <motion.button 
                className="btn btn-ghost"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div className={styles.heroVisual} variants={itemVariants}>
            <motion.div 
              className={styles.profileCard}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.profileContent}>
                <motion.div 
                  className={styles.avatarContainer}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/image.png"
                    alt="Profile Avatar"
                    className={styles.avatar}
                  />
                  <div className={styles.avatarGlow}></div>
                </motion.div>
                
                <motion.div 
                  className={styles.profileInfo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <h3 className={styles.profileName}>Shreejana Giri</h3>
                  <p className={styles.profileTitle}>Full Stack Developer</p>
                  <div className={styles.profileStats}>
                    <motion.div 
                      className={styles.stat}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={styles.statNumber}>5+</span>
                      <span className={styles.statLabel}>Years</span>
                    </motion.div>
                    <motion.div 
                      className={styles.stat}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={styles.statNumber}>50+</span>
                      <span className={styles.statLabel}>Projects</span>
                    </motion.div>
                    <motion.div 
                      className={styles.stat}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={styles.statNumber}>100%</span>
                      <span className={styles.statLabel}>Passion</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className="body-sm">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;