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
      "Paprastas portfolio puslapis, padarytas naudojant React JS, HTML ir CSS. Dvi kalbos - lietuvių ir anglų.",
    category: "React",
    link: "https://esuandrius.github.io/portfolio/",
    code: "https://github.com/esuandrius/portfolio",
  },
  {
    id: 4,
    image: Work1,
    title: "Investicijų skaičiuoklė",
    description:
      "Paprasta Ethereum investicijų skaičiuoklė, padaryta su Spring + ThymeLeaf. CSV failo exporto galimybė.",
    category: "Spring",
    link: "https://reward-calculator.herokuapp.com/calculator",
    code: "https://github.com/esuandrius/RewardCalculator",
  },
  {
    id: 5,
    image: Work5,
    title: "CSV failo užkrovimas",
    description:
      "CSV failo su darbuotojų informacija įkėlimas React, perdavimas į Spring, kur informacija įrašoma į H2 duomenų bazę. Tuomet duomenys grąžinami atgal į React ir vizualizuojami HTML lentelėje",
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
