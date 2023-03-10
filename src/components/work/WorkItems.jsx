import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { render } from "react-dom";

const WorkItems = ({ item }) => {
  const { i18n } = useTranslation();

  const imageClick = () => {
    console.log("Click");
  };

  return (
    <div className="work__card" key={item.id}>
      <div className="img__container">
        <img
          src={item.image}
          alt="html-website"
          className="work__img"
          onClick={imageClick}
        />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <a href={item.link} className="work__button" target="_blank">
        {t("demo")} <i className="bx bx-right-arrow-alt work__button"></i>
      </a>
      <a href={item.code} className="work__button" target="_blank">
        {t("code")} <i className="bx bx-right-arrow-alt work__button"></i>
      </a>
    </div>
  );
};

export default WorkItems;
