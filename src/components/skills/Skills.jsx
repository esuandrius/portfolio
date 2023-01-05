import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Skills = () => {
  const { i18n } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills")}</h2>
      <span className="section__subtitle">{t("my-technical-level")}</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
