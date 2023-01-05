import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Data = () => {
  const { i18n } = useTranslation();

  return (
    <div className="home__data">
      <h1 className="home__title">Andrius Adomaitis</h1>
      <h3 className="home__subtitle">{t("junior-software-developer")}</h3>
      <p className="home__description">{t("home-description")}</p>
      <a href="#contact" className="button button--flex">
        {t("lets-talk")}
        <i style={{ marginLeft: 10 }} class="uil uil-telegram-alt"></i>
      </a>
    </div>
  );
};

export default Data;
