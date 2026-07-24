import "./about.css";
import logo from "../../assets/profile.png";
import { useTranslation } from "react-i18next";
import {
  FaGlobe,
  FaGamepad,
  FaAndroid,
  FaComments,
} from "react-icons/fa";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h2>{t("about_me_title")}</h2>

      <div className="holder">

          <div className="image-description">
          <div className="profile-container">
              <img className="profile-image" src={logo} alt= {t("profile_alt")} />          
          </div>

          <p className="description">
            {t("description")}
          </p>
        </div>
       
        <div className="services">
          <div className="service-card">
            <FaGlobe className="service-icon" />
            <h3>{t("card_web_title")}</h3>
            <p>
              {t("card_web_description")}
            </p>
          </div>

          <div className="service-card">
            <FaGamepad className="service-icon" />
            <h3>{t("card_game_title")}</h3>
            <p>
              {t("card_game_description")}
            </p>
          </div>

          <div className="service-card">
            <FaAndroid className="service-icon" />
            <h3>{t("card_android_title")}</h3>
            <p>
              {t("card_android_description")}
            </p>
          </div>

          <div className="service-card">
            <FaComments className="service-icon" />
            <h3>{t("card_con_title")}</h3>
            <p>
              {t("card_con_description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;