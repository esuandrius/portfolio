import React from "react";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Backend = () => {
  const { i18n } = useTranslation();

  return (
    <div className="skills__content">
      {/* <h3 className="skills__title">{t("backend")}</h3> */}

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Selenium </h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Webdriver </h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Developer tools</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Cucumber</h3>
              <span className="skills__level">{t("beginner")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Circle CI</h3>
              <span className="skills__level">{t("beginner")}</span>
            </div>
          </div>

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
              <h3 className="skills__name">Teams/Zoom</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">PlanningPoker</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Confluence</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">GitHub </h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Bitbucket </h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Eclipse</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">IntelliJ</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">VS Code</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JIRA</h3>
              <span className="skills__level">{t("beginner")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Slack</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Miro</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Test NG</h3>
              <span className="skills__level">{t("advanced")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
