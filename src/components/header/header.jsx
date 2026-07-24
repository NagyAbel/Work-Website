import './header.css'
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher"; // adjust path if needed
import { useTranslation } from "react-i18next";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};


function Header({title, message, onNavigate, currentSection}) {

  const getButtonClass = (section) =>
    currentSection === section ? "nav-button active" : "nav-button";
  const { t } = useTranslation();

  const [active, setActive] = useState(false);

  const handleNavigate = (section) => {
    scrollTo(section);
    setActive(false);
  };

  return (
    <div className='header'>
        
      <div className='nav-bar'>

        <div className='left'>
          <h1 className='title'>{title}</h1>
          <h4 className='mes'>{message}</h4>
        </div>


        <div className={`center ${active ? "open" : ""}`}
          id="main-navigation"
        >
          <button 
            className={getButtonClass("about")} 
            onClick={() => handleNavigate("about")}
          >
            {t("about")}
          </button>
    
          <button 
            className={getButtonClass("portfolio")} 
            onClick={() => handleNavigate("portfolio")}
          >
            {t("portfolio")}
          </button>
          <button 
            className={getButtonClass("contact")} 
            onClick={() => handleNavigate("contact")}
          >
            {t("contact")}
          </button>


          {/* Mobile language switcher */}
          <div className="language_mobile">
            <LanguageSwitcher />
          </div>
        </div>


        <div className='right'>
          {/* Desktop language switcher */}
          <div className="language_desktop">
            <LanguageSwitcher />
          </div>        
        </div>


        <button 
          className={`hamburger ${active ? "active" : ""}`}
          aria-label={active ? t("close_menu") : t("open_menu")}
          aria-expanded={active}
          aria-controls="main-navigation"
          onClick={() => setActive(!active)}
        >              
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </button>

      </div>

    </div>
  )
}

export default Header;