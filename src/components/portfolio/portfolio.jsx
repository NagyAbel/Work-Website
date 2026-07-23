import "./portfolio.css";
import gm from "../../assets/gm.png";
import blockways from "../../assets/blockways.png";
import server from "../../assets/server.png";
import scryper from "../../assets/scryper.png";
import ttm from "../../assets/ttm.png";

import { useTranslation } from "react-i18next";

function Portfolio() {

  const { t } = useTranslation();


  const projects = [
    {
      title:t("portfolio_title_car"),
      description:
        t("portfolio_desc_car"),
      image: gm
    },
    {
      title:t("portfolio_title_block"),
      description:
        t("portfolio_desc_block"),
      image: blockways
    },
    {
      title: t("portfolio_title_bus"),
      description:
        t("portfolio_desc_bus"),
      image: server
    },
    {
      title: t("portfolio_title_scryper"),
      description:
        t("portfolio_desc_scryper"),
      image: scryper
    },
    { 
      title: t("portfolio_title_fitness"),
      description:
        t("portfolio_desc_fitness"),
      image: ttm
    }
  ];



  return (

    <div className="portfolio">


      <h2>
        {t("portfolio_title")}
      </h2>



      <div className="portfolio-holder">


        {projects.map((project, index) => (

          <div
            className="portfolio-card"
            key={index}
          >


            <img
              className="portfolio-image"
              src={project.image}
              alt={project.title}
            />
            <div className="portfolio-content">
              <h3>
                {project.title}
              </h3>
              <p>
                {project.description}
              </p>
            </div>
          </div>

        ))}
      </div>
    </div>

  );

}


export default Portfolio;