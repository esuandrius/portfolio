import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import Works from "./Works";
import "./work.css";

const Work = () => {
  const { i18n } = useTranslation();

  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{t("portfolio")}</h2>
      <span className="section__subtitle">{t("my-projects")}</span>

      <Works />
    </section>
  );
};

export default Work;
