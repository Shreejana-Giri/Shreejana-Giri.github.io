import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'Shreejanagiri99@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      title: 'Phone',
      value: '9828734655',
      description: 'Available Mon-Fri, 9AM-6PM'
    },
    {
      title: 'Location',
      value: 'Chandragiri,kathmandu',
      description: 'Open to remote work'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.contactHeader}>
          <h2 className="heading-lg text-gradient">Get In Touch</h2>
          <p className="body-lg">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className="heading-sm">Let's Connect</h3>
            <p className="body-md">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className={styles.contactCards}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.contactCard}>
                  <h4 className={styles.contactTitle}>{info.title}</h4>
                  <p className={styles.contactValue}>{info.value}</p>
                  <p className={styles.contactDescription}>{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary ${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <p>✨ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;