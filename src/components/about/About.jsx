import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import "./about.css";
import CVEN from "../../assets/Andrius Adomaitis CV EN.pdf";
import CodeAcademy from "../../assets/CodeAcademy Java diplomas.pdf";
import SourceryAcademy from "../../assets/Sourcery Academy diplomas.pdf";

const About = () => {
  const { i18n } = useTranslation();

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("about-me")}</h2>
      <span className="section__subtitle">{t("my-introduction")}</span>

      <div className="about__container container grid">
        <div className="about__img"></div>

        <div className="about__data">
          <p className="about__description">{t("about-description-p1")}</p>
          <p className="about__description">{t("about-description-p2")}</p>

          <span className="about__description">{t("cv-and-certificate")}</span>
          <br />
          <br />

          <a
            download="CodeAcademy diplomas"
            href={CodeAcademy}
            className="button button--flex button-cv button-cv-certificate"
            title={t("codeacademy-diploma")}
          >
            {t("certificate-codeacademy")}
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
          <a
            download="Sourcery Academy diplomas"
            href={CodeAcademy}
            className="button button--flex button-cv button-cv-certificate"
            title={t("sourceryacademy-diploma")}
          >
            {t("certificate-sourcery")}
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
          <a
            download="Andrius Adomaitis CV EN"
            href={CVEN}
            className="button button--flex button-cv"
            title={t("CV-EN")}
            style={{ marginTop: 10 }}
          >
            Andrius Adomaitis CV EN
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
