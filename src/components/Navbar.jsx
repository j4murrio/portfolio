import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const navLinkKeys = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.journey", href: "#journey" },
  { key: "nav.skills", href: "#skills" },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = i18n.language;
  const langOptions = t("nav.languages", { returnObjects: true });

  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = (e) => {
      if (!e.target.closest(".lang-dropdown-wrapper")) setLangOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-tile logo-blue">J</span>
          <span className="logo-tile logo-pink">A</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinkKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="#contact" className="brutalist-btn nav-cta">
            {t("nav.getInTouch")}
          </a>
          <div className="lang-dropdown-wrapper">
            <button
              className="lang-toggle"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
              aria-expanded={langOpen}
            >
              {langOptions.find((l) => l.code === currentLang)?.flag}{" "}
              {currentLang.toUpperCase()}
              <span className={`lang-arrow ${langOpen ? "open" : ""}`}>▾</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {langOptions.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${currentLang === lang.code ? "active" : ""}`}
                    onClick={() => selectLang(lang.code)}
                  >
                    <span className="lang-option-flag">{lang.flag}</span>
                    <span className="lang-option-name">{lang.name}</span>
                    <span className="lang-option-code">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
