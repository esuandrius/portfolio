// import { useTranslation } from "react-i18next";
// import { t } from "i18next";
import i18next from "../../i18n";

import Work2 from "../../assets/portfolio-website.PNG";
import Work3 from "../../assets/Invoice.PNG";
import Work4 from "../../assets/Invoice-backend.PNG";

// Portfolio projects
export const projectsData = [
  {
    id: 1,
    image: Work4,
    title: "Sąskaitų išrašymo puslapis. BackEnd dalis",
    description:
      "Baigiamasis darbas, kurį rašiau su kolegomis. Sąskaitų išrašymo puslapis. BackEnd darytas su Spring + MySQL",
    category: "Spring",
    link: "https://github.com/esuandrius/invoice-backend",
    code: "https://github.com/esuandrius/invoice-backend",
  },
  {
    id: 2,
    image: Work3,
    title: "Sąskaitų išrašymo puslapis. FrontEnd dalis",
    description:
      "Baigiamasis darbas, kurį rašiau su kolegomis. Sąskaitų išrašymo puslapis. FrontEnd darytas su React",
    category: "React",
    link: "https://github.com/esuandrius/invoice-frontend",
    code: "https://github.com/esuandrius/invoice-frontend",
  },
  {
    id: 3,
    image: Work2,
    title: "Portfolio puslapis",
    description:
      "Paprastas portfolio puslapis, padarytas naudojant React Js, HTML ir CSS. Dvi kalbos - lietuvių ir anglų.",
    category: "React",
    link: "https://esuandrius.github.io/portfolio/",
    code: "https://github.com/esuandrius/portfolio",
  },
  // {
  //   id: 4,
  //   image: Work1,
  //   title: "Rekvizitinis puslapis",
  //   description:
  //     "Mano pirmas sukurtas statinis puslapis, turint minimalias CSS ir HTML žinias",
  //   category: "React + HTML + CSS",
  //   link: "https://esuandrius.github.io/inspiration/",
  //   code: "https://github.com/esuandrius/inspiration",
  // },
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
