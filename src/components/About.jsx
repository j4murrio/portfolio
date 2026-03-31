import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
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
    <section id="about" className="section dot-grid">
      <div className="section-inner fade-in" ref={ref}>
        <div className="section-label">{t('about.title')}</div>
        <div className="about-card brutalist-card">
          <div
            className="about-text"
            dangerouslySetInnerHTML={{ __html: t('about.text') }}
          />
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
