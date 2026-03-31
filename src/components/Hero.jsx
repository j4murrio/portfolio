import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTerminal } from "@fortawesome/free-solid-svg-icons";
import avatarImg from "../assets/avatar.jpg";
import { personalInfo } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="section dot-grid hero-section">
      <div className="section-inner fade-in" ref={ref}>
        <div className="hero-grid">
          {/* Left side - Avatar */}
          <div className="hero-right slide-right">
            <div className="avatar-frame">
              <div className="avatar-deco deco-code"><FontAwesomeIcon icon={faCode} /></div>
              <div className="avatar-deco deco-terminal"><FontAwesomeIcon icon={faTerminal} /></div>
              <div className="avatar-tape" />
              <img
                src={avatarImg}
                alt={personalInfo.name}
                className="avatar-img"
              />
              <div className="avatar-badge">{t("hero.badge")}</div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="hero-left slide-left">
            <p className="hero-greeting">{t("hero.greeting")}</p>
            <h1 className="hero-name">
              {t("hero.intro", { name: personalInfo.name })}
            </h1>
            <p className="hero-desc">{t("hero.description")}</p>
            <div className="hero-actions">
              <a href="#contact" className="brutalist-btn">
                {t("nav.getInTouch")}
              </a>
            </div>
          </div>
        </div>

        {/* Skills row */}
        <div className="hero-skills">
          {t('skills.topSkills', { returnObjects: true }).map((skill) => (
            <span key={skill} className="tag stagger-item">
              {skill}
            </span>
          ))}
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
