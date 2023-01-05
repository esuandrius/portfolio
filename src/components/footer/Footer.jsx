import React from "react";
import "./footer.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <footer className="footer container">
        <div className="footer__container">
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                {t("about")}
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                {t("skills")}
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                {t("portfolio")}
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/andrius.adomaitis.52"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx bxl-facebook" title="FaceBook"></i>
            </a>

            <a
              href="https://github.com/esuandrius"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx bxl-github" title="GitHub"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/andrius-adomaitis-1a9975237/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx bxl-linkedin" title="LinkedIn"></i>
            </a>

            <a
              href="https://www.instagram.com/andrius.adoma1tis/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bx bxl-instagram" title="Instagram"></i>
            </a>
          </div>
          <span className="footer__copy">{t("copyright")}</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
