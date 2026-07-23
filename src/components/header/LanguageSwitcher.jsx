import './LanguageSwitcher.css';
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const languages = ["EN", "HU", "RO"];

  const currentLang = (i18n.language || "en").slice(0, 2).toUpperCase();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <div className="language-switcher-container">
      <div className="language-switcher">
        {languages.map((lang) => {
          const isActive = currentLang === lang;
          return (
            <button
              key={lang}
              className={`language-option ${isActive ? "active" : ""}`}
              onClick={() => changeLanguage(lang)}
              aria-label={`Switch language to ${lang}`}
            >
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
}