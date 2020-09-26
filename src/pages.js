import React from "react";

import HomePage from "./Pages/HomePage";
import UnityProject from "./Components/UnityProject";

const pages = {
  home: {
    url: "/",
    component: HomePage,
  },
  ld38: {
    title: "Ludum Dare 38",
    url: "/ld38",
    component: () => <UnityProject title="Ludum Dare 38" project="ld38" />,
  },
};

export const sections = [
  {
    title: "Projects",
    pages: [pages.ld38],
  },
];

export default pages;
