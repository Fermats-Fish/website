import React from "react";

import HomePage from "./Pages/HomePage";
import UnityProject from "./Components/UnityProject";

const unityProject = (project, title, description) => ({
  title: title,
  url: "/" + project,
  component: () => (
    <UnityProject title={title} project={project} description={description} />
  ),
});

const pages = {
  home: {
    url: "/",
    component: HomePage,
  },
  ld38: unityProject("ld38", "Ludum Dare 38 - Two Dot", [
    "This is a test",
    "a test",
    "",
    "a test",
  ]),
  ld39: unityProject("ld39", "Ludum Dare 39 - Don't Go Flat"),
  ld39Post: unityProject("ld39-post", "Don't Go Flat 1.1 (Post Competition)"),
  ld40: unityProject("ld40", "Ludum Dare 40 - Stay Alive"),
  ld40Post: unityProject("ld40-post", "Stay Alive 1.4 (Post Competition)"),
  ld40PostAlpha: unityProject(
    "ld40-post-alpha",
    "Stay Alive 1.5a1 (Post Competition)"
  ),
  ld42: unityProject("ld42", "Ludum Dare 42 - Population Overflow"),
  ld43: unityProject("ld43", "Ludum Dare 43 - Forest of Worship"),
  ld45: unityProject("ld45", "Ludum Dare 45 - Stay Alive 2 Survive"),
  ld46: unityProject(
    "ld46",
    "Ludum Dare 46 (Team Submission) - Game of Trees - A Song of Bears and Fire"
  ),
  reasonableResearch: unityProject(
    "reasonable-research",
    "Reasonable Research (University Ethics Project)"
  ),
  wesbite: {
    title: "This Website",
    url: "/website",
    component: () => (
      <iframe style={{ height: 600 }} src="/" title="Website"></iframe>
    ),
  },
};

export const sections = [
  {
    title: "Projects",
    pages: [
      pages.ld38,
      pages.ld39,
      pages.ld39Post,
      pages.ld40,
      pages.ld40Post,
      pages.ld40PostAlpha,
      pages.ld42,
      pages.ld43,
      pages.ld45,
      pages.reasonableResearch,
      pages.ld46,
      pages.wesbite,
    ],
  },
];

export default pages;
