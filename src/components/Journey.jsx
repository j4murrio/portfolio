import { faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import europeSvg from "../assets/europe.svg";
import "./Journey.css";

const mapPins = [
  {
    id: "castro",
    key: "journey.mapPins.castro",
    x: 35,
    y: 78,
    color: "var(--blue)",
  },
  {
    id: "bilbao",
    key: "journey.mapPins.bilbao",
    x: 36,
    y: 78,
    color: "var(--yellow)",
  },
];

export default function Journey() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const jobs = t("journey.jobs", { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="section dot-grid">
      <div className="section-inner fade-in" ref={ref}>
        <div className="journey-title-bar">
          <h2 className="journey-title">{t("journey.title")}</h2>
        </div>

        <div className="journey-layout">
          {/* Timeline */}
          <div className="timeline-panel brutalist-card slide-left">
            <h3 className="timeline-heading">{t("journey.timelineHeading")}</h3>
            <div className="timeline">
              {jobs.map((job, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4 className="timeline-role">
                      {job.role} @ {job.company}
                    </h4>
                    <p className="timeline-period">{job.period}</p>
                    <p className="timeline-desc">{job.description}</p>
                    <p className="timeline-location">
                      <FontAwesomeIcon icon={faLocationDot} /> {job.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="map-panel brutalist-card slide-right">
            <div className="map-container">
              <img src={europeSvg} alt="Europe map" className="europe-map" />

              {/* Pin markers overlaid on the map */}
              {mapPins.map((pin) => (
                <div
                  key={pin.id}
                  className="map-pin"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <div className="pin-dot" style={{ background: pin.color }} />
                  <div className="pin-label" style={{ background: pin.color }}>
                    {t(pin.key)}
                  </div>
                </div>
              ))}

              {/* Globe decoration */}
              <div className="map-pirate">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
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
