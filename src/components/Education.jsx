import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Education.css';

export default function Education() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const degrees = t('education.degrees', { returnObjects: true });
  const langs = t('education.langs', { returnObjects: true });

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
    <section id="education" className="section dot-grid">
      <div className="section-inner fade-in" ref={ref}>
        <div className="edu-layout">
          {/* Education */}
          <div className="edu-column slide-left">
            <div className="section-label">{t('education.title')}</div>
            {degrees.map((edu, i) => (
              <div key={i} className="edu-card brutalist-card stagger-item">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <span className="edu-period tag" style={{ background: 'var(--blue)' }}>
                  {edu.period}
                </span>
                <p className="edu-location"><FontAwesomeIcon icon={faLocationDot} /> {edu.location}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="edu-column slide-right">
            <div className="section-label">{t('education.languagesTitle')}</div>
            <div className="lang-card brutalist-card">
              {langs.map((lang) => (
                <div key={lang.name} className="lang-row">
                  <span className="lang-name">{lang.name}</span>
                  <div className="lang-blocks">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`lang-block ${n <= lang.level ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
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
