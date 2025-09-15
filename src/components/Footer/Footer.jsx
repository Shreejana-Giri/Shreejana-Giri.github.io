import React from 'react';
import { MdAccountCircle, MdEmail, MdPhone } from 'react-icons/md';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: MdAccountCircle
    },
    {
      name: 'Email',
      url: 'mailto:Shreejanagiri99@gmail.com',
      icon: MdEmail
    },
    {
      name: 'Phone',
      url: 'tel:+9828734655',
      icon: MdPhone
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className="heading-sm text-gradient">Shreejana Giri</h3>
            <p className="body-sm">
              Full Stack Developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className={styles.socialLink}
                    aria-label={link.name}
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            <button 
              className={styles.backToTop}
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className="body-sm">
            © {currentYear} ShreejanaGiri. All rights reserved. Built with React & love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;