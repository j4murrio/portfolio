import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { socials } from '../data/portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const contactCards = [
  {
    key: 'contact.linkedin',
    icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    url: socials.linkedin,
    color: 'var(--blue)',
  },
  {
    key: 'contact.github',
    icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    url: socials.github,
    color: 'var(--yellow)',
  },
  {
    key: 'contact.email',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
    url: socials.email,
    color: 'var(--pink)',
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section dot-grid">
      <div className="section-inner fade-in" ref={ref}>
        <div className="section-label">{t('contact.title')}</div>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-cards">
          {contactCards.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-postit stagger-item"
              style={{ background: card.color }}
            >
              <div className="postit-tape" />
              <div className="postit-content">
                {card.icon}
                <span className="postit-label">{t(card.key)}</span>
              </div>
            </a>
          ))}
        </div>

        <footer className="footer">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} {t('contact.footer')}
          </p>
        </footer>
      </div>
    </section>
  );
}
