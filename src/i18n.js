import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
let translationLt = require("./locales/lt/translation.json");
let translationEn = require("./locales/en/translation.json");

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      lt: {
        translations: { ...translationLt },
      },
      en: {
        translations: { ...translationEn },
      },
    },
    fallbackLng: "en",
    lng: "en", // default language
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
