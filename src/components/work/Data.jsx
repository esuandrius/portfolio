// import { useTranslation } from "react-i18next";
// import { t } from "i18next";
import i18next from "../../i18n";

import Work1 from "../../assets/html-page.PNG";
import Work2 from "../../assets/portfolio-website.PNG";
// import Work2 from "../../assets/Work1.jpg";
// import Work3 from "../../assets/Work1.jpg";

// Portfolio projects
export const projectsData = [
  // {
  //   id: 1,
  //   image: Work2,
  //   title: "Books data table",
  //   description:
  //     "Simple Books data table using React, Spring Boot and MySQL database",
  //   category: "Spring + React",
  //   link: "",
  //   code: "",
  // },
  // {
  //   id: 2,
  //   image: Work3,
  //   title: "Students data table",
  //   description:
  //     "Simple University data table using Spring Boot, ThymeLeaf and MySQL database",
  //   category: "Spring",
  //   link: "",
  //   code: "",
  // },
  {
    id: 3,
    image: Work2,
    title: "Portfolio puslapis",
    description:
      "Paprastas portfolio puslapis, padarytas naudojant React Js, HTML ir CSS. Dvi kalbos - lietuvių ir anglų.",
    category: "React + HTML + CSS",
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

//portfolio works categories
export const projectsNav = [
  {
    name: "Visi",
  },
  {
    name: "Spring",
  },
  {
    name: "Spring + React",
  },
  {
    name: "React + HTML + CSS",
  },
];
