import React, { useState } from "react";
import "./header.css";
import LanguageSwitcher from "../../languageSwitcher";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  /* ====================Toggle Menu==================== */
  const [Toggle, showMenu] = useState(false);
  const { i18n } = useTranslation();

  return (
    <header className="header container">
      <nav className="nav container">
        {/* <a href="index.html" className="nav__logo">
          Home
        </a> */}

        <div>
          <LanguageSwitcher />
        </div>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> {t("home")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                <i className="uil uil-user nav__icon"></i> {t("about")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-file-alt nav__icon"></i> {t("skills")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link active-link">
                <i className="uil uil-scenery nav__icon"></i> {t("portfolio")}
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> {t("contact")}
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
      {/* <hr className="container" /> */}
    </header>
  );
};

export default Header;
