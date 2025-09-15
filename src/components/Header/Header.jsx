import React, { useState, useEffect } from 'react';
import { MdNotes, MdClear, MdLightMode, MdBedtime } from 'react-icons/md';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className="heading-sm text-gradient">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.headerActions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              type="button"
            >
              {isDarkMode ? (
                <MdLightMode size={20} />
              ) : (
                <MdBedtime size={20} />
              )}
            </button>

            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <MdClear size={24} />
              ) : (
                <MdNotes size={24} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;