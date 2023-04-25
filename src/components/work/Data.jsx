// import { useTranslation } from "react-i18next";
// import { t } from "i18next";
import i18next from "../../i18n";

import Work1 from "../../assets/investment calculator.PNG";
import Work2 from "../../assets/portfolio-website.PNG";
import Work3 from "../../assets/Invoice.PNG";
import Work4 from "../../assets/Invoice-backend.PNG";
import Work5 from "../../assets/csv-upload.PNG";

// Portfolio projects
export const projectsData = [
  {
    id: 1,
    image: Work4,
    title: "Invoice managment app. BE part",
    description:
      "Invoice management app, created as final work with coleagues in CodeAcademy. Backend part: Spring + MySQL",
    category: "Spring",
    link: "https://github.com/esuandrius/invoice-backend",
    code: "https://github.com/esuandrius/invoice-backend",
  },
  {
    id: 2,
    image: Work3,
    title: "Invoice managment app. FE part",
    description:
      "Invoice management app, created as final work with coleagues in CodeAcademy. Frontend part: React, CSS, HTML",
    category: "React",
    link: "https://github.com/esuandrius/invoice-frontend",
    code: "https://github.com/esuandrius/invoice-frontend",
  },
  {
    id: 3,
    image: Work2,
    title: "Portfolio website",
    description:
      "Single page portfolio website, made with React, HTML ir CSS only. Bilingual - lithuanian and english.",
    category: "React",
    link: "https://esuandrius.github.io/portfolio/",
    code: "https://github.com/esuandrius/portfolio",
  },
  {
    id: 4,
    image: Work1,
    title: "Ethereum investment calculator",
    description:
      "Simple investment calculator, made with Spring + ThymeLeaf. Ability to export CSV file.",
    category: "Spring",
    link: "https://github.com/esuandrius/RewardCalculator",
    code: "https://github.com/esuandrius/RewardCalculator",
  },
  {
    id: 5,
    image: Work5,
    title: "CSV with employees data file upload",
    description:
      "CSV file upload in React and visualize in html table. For backend part Spring + internal H2 memory base.",
    category: "Spring + React",
    link: "https://github.com/esuandrius/CSV-Upload",
    code: "https://github.com/esuandrius/CSV-Upload",
  },
];

//portfolio categories
export const projectsNav = [
  {
    name: "Visi",
  },
  {
    name: "Spring",
  },
  {
    name: "React",
  },
  {
    name: "Spring + React",
  },
];
