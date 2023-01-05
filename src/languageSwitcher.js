import { useTranslation } from "react-i18next";
import { t } from "i18next";
import i18n from "./i18n";
import "./App.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <nav className="">
        <span className="">
          <select className="language-select" onClick={changeLanguage}>
            <option value="en">EN</option>
            <option value="lt">LT</option>
          </select>
        </span>
      </nav>
    </div>
  );
};

export default LanguageSwitcher;
