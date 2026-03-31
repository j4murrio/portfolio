import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faServer, faCloud, faDatabase, faFlask, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';
import { skills } from '../data/portfolio';
import './Skills.css';

const borderColors = {
  blue: 'var(--blue)',
  yellow: 'var(--yellow)',
  pink: 'var(--pink)',
  green: 'var(--green)',
};

const iconMap = {
  frontend: faLaptopCode,
  languages: faCode,
  backend: faServer,
  devops: faCloud,
  databases: faDatabase,
  testing: faFlask,
};

const categoryKeys = {
  frontend: 'skills.categories.frontend',
  languages: 'skills.categories.languages',
  backend: 'skills.categories.backend',
  devops: 'skills.categories.devops',
  databases: 'skills.categories.databases',
  testing: 'skills.categories.testing',
};

export default function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const gridSkills = ['frontend', 'languages', 'backend', 'devops', 'databases', 'testing'];

  return (
    <section id="skills" className="section dot-grid">
      <div className="section-inner fade-in" ref={ref}>
        <div className="section-label">{t('skills.title')}</div>

        <div className="skills-grid">
          {gridSkills.map((key) => {
            const skill = skills[key];
            return (
              <div
                key={key}
                className="skill-card brutalist-card stagger-item"
                style={{ borderColor: borderColors[skill.color] }}
              >
                <div className="skill-card-header">
                  <span className="skill-icon"><FontAwesomeIcon icon={iconMap[key]} /></span>
                  <h3 className="skill-card-title">{t(categoryKeys[key])}</h3>
                </div>
                <hr className="skill-divider" />
                <div className="skill-tags">
                  {t(`skills.items.${key}`, { returnObjects: true }).map((item) => (
                    <span key={item} className="tag skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-bottom">
          <div className="skill-card-yellow brutalist-card">
            <div className="skill-card-header">
              <span className="skill-icon"><FontAwesomeIcon icon={faBuilding} /></span>
              <h3 className="skill-card-title">{t('skills.categories.architecture')}</h3>
            </div>
            <hr className="skill-divider" />
            <div className="skill-tags">
              {t('skills.items.architecture', { returnObjects: true }).map((item) => (
                <span key={item} className="tag skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card-yellow brutalist-card">
            <div className="skill-card-header">
              <span className="skill-icon"><FontAwesomeIcon icon={faUsers} /></span>
              <h3 className="skill-card-title">{t('skills.categories.methodologies')}</h3>
            </div>
            <hr className="skill-divider" />
            <div className="skill-tags">
              {t('skills.items.methodologies', { returnObjects: true }).map((item) => (
                <span key={item} className="tag skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="var(--bg)" stroke="var(--dot-color)" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
      </div>
    </section>
  );
}
