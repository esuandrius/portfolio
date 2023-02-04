import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import "./about.css";
import CVLT from "../../assets/Andrius Adomaitis CV LT.pdf";
import CVEN from "../../assets/Andrius Adomaitis CV EN.pdf";
import Diploma from "../../assets/CodeAcademy Java diplomas.pdf";

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
            download=""
            href={CVLT}
            className="button button--flex button-cv"
            title={t("CV-LT")}
          >
            CV LT
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
          <a
            download=""
            href={CVEN}
            className="button button--flex button-cv"
            title={t("CV-EN")}
          >
            CV EN
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
          <a
            download=""
            href={Diploma}
            className="button button--flex button-cv button-cv-certificate"
            title={t("java-certificate")}
          >
            {t("certificate")}
            <i style={{ marginLeft: 10 }} class="uil uil-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
