import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Backend = () => {
  const { i18n } = useTranslation();

  return (
    <div className="skills__content">
      <h3 className="skills__title">{t("backend")}</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">{t("intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Java Spring</h3>
              <span className="skills__level">{t("intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node JS</h3>
              <span className="skills__level">{t("beginner")}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">{t("intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">{t("intermediate")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Swagger</h3>
              <span className="skills__level">{t("beginner")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
