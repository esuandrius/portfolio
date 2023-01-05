import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();
  const { i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ghvt3gg",
      "template_x1v7vpq",
      form.current,
      "BwXnw_iB0EKiS47dH"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("get-in-touch")}</h2>
      <br />

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("reach-me")}</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxs-envelope contact__card-icon"></i>

              <h3 className="contact__card-title">{t("email")}</h3>
              <span className="contact__card-data">andrius.adom@gmail.com</span>

              <a
                href="mailto:andrius.adom@gmail.com"
                className="contact__button"
              >
                {t("write-me")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">{t("messenger")}</h3>
              <span className="contact__card-data">andrius.adomaitis.52</span>

              <a
                href="https://m.me/andrius.adomaitis.52"
                className="contact__button"
              >
                {t("write-me")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxs-phone contact__card-icon"></i>

              <h3 className="contact__card-title">{t("phone")}</h3>
              <span className="contact__card-data">+37061601646</span>

              <a href="tel:37061601646" type="tel" className="contact__button">
                {t("call-me")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t("message-me")}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">{t("name")}</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder={t("your-name")}
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">{t("mail")}</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder={t("your-email")}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">{t("message")}</label>
              <input
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder={t("your-message")}
              ></input>
            </div>
            <div className="button-send">
              <button
                type="submit"
                value="Send"
                className="button button--flex"
              >
                {t("send")}
                <i style={{ marginLeft: 10 }} class="uil uil-telegram-alt"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
