import React from "react";

import { Grid, Typography } from "@material-ui/core";

import HomePage from "./Pages/HomePage";
import NavPage from "./Pages/NavPage";
import UnityProject from "./Components/UnityProject";
import AboutMePage from "./Pages/AboutMePage";

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
  nav: {
    url: "/nav",
    component: NavPage,
  },
  ld38: unityProject("ld38", "Ludum Dare 38 - Two Dot", [
    <Typography>
      This was the second game I made, and one of my favourites. It is a puzzle
      game with simple mechanics that can lead to some really interesting
      puzzles.
    </Typography>,
    <Typography>
      Like most of my games it was made for the Ludum Dare competition in under
      48 hours. This is the link to my submission:{" "}
      <a href="https://ldjam.com/events/ludum-dare/38/two-dot">Link</a>.
    </Typography>,
    <Typography>
      I recently developed a second version of this game by re writing the code
      from scratch in a way that makes it really easy to create new puzzles and
      mechanics colour.
    </Typography>,
    <Typography>
      The revised version is designed to work well on mobile devises, allowing
      swiping to move, and implementing a star based score, a 3 star score
      requiring you to complete a level using the smallest possible number of
      steps.
    </Typography>,
    <Typography>
      I also created a level designer for the revised version, and an algorithm
      to calculate the smallest number of steps required to complete a level.
    </Typography>,
    <Typography variant="h5">Screenshots of the revised version:</Typography>,
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <img
          style={{ width: "100%" }}
          src="images/dotdot-level-select.png"
          alt="Three colour level in revised version of two dot"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          style={{ width: "100%" }}
          src="images/dotdot-1.png"
          alt="Three colour level in revised version of two dot"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          style={{ width: "100%" }}
          src="images/dotdot-2.png"
          alt="Three colour level in revised version of two dot"
        />
      </Grid>
    </Grid>,
  ]),
  ld39: unityProject("ld39", "Ludum Dare 39 - Don't Go Flat", [
    <Typography>
      This is one of the few more traditional real time games that I have made.
      I tend to avoid making these sorts of games since I prefer playing games
      that require more thinking.
    </Typography>,
    <Typography>
      Like most of my games this one was made for the competition Ludum Dare in
      under 48 hours. The link to my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/39/dont-go-flat">Link</a>.
    </Typography>,
  ]),
  ld39Post: unityProject("ld39-post", "Don't Go Flat 1.1 (Post Competition)", [
    <Typography>
      This is a version of my game for Ludum Dare 39 that I made after the
      competition. The only difference between it and the original version is
      that in this version you can change many of the game settings, allowing
      you to drastically change the experience.
    </Typography>,
  ]),
  ld40: unityProject("ld40", "Ludum Dare 40 - Stay Alive", [
    <Typography>
      This was my first attempt at a survival game. Like most of my games this
      one was made for the competition Ludum Dare in under 48 hours. The link to
      my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/40/dont-die-1">Link</a> and
      the source code is available on GitHub here:{" "}
      <a href="https://github.com/Fermats-Fish/Ludum-Dare-40">Link</a>.
    </Typography>,
    <Typography>
      I really like where this was going and ended up developing a post
      competition version until well after the competition end date. The post
      competition version improves on many of the features including a much
      needed change to the colour palette used.
    </Typography>,
  ]),
  ld40Post: unityProject("ld40-post", "Stay Alive 1.4 (Post Competition)", [
    <Typography>
      This is a post competition version of the game I made for Ludum Dare 40.
    </Typography>,
    <Typography>
      A list of the changes made since the competition version was released is
      available on the itch.io page for this game here:{" "}
      <a href="https://fermatsfish.itch.io/ld-40-post">Link</a>.
    </Typography>,
    <Typography>
      I also made one further version of this game that added armour and a way
      of regenerating health, but I never properly balanced that version hence
      why I created a separate page for it on this website.
    </Typography>,
  ]),
  ld40PostDev: unityProject(
    "ld40-post-dev",
    "Stay Alive 1.5a1 (Post Competition)",
    [
      <Typography>
        This is the development version of Stay Alive. It adds armour and a way
        of regenerating health, but I never properly balanced this version hence
        why I created a separate page for it on this website. Also some of the
        art will need updating before I consider it to be a proper release of
        the game.
      </Typography>,
      <Typography>
        A list of the changes made in this version is available on the itch.io
        page for this version of the game:{" "}
        <a href="https://fermatsfish.itch.io/stay-alive-dev-build">Link</a>.
      </Typography>,
    ]
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
  website: {
    title: "This Website",
    url: "/website",
    component: () => (
      <Grid item style={{ width: "100%" }}>
        <iframe style={{ height: 600 }} src="/" title="Website"></iframe>
      </Grid>
    ),
  },
  about: {
    title: "About Me",
    url: "/about",
    align: "flex-start",
    component: AboutMePage,
  },
};

export const sections = [
  {
    title: "About",
    pages: [pages.about],
  },
  {
    title: "Projects",
    pages: [
      pages.ld38,
      pages.ld39,
      pages.ld39Post,
      pages.ld40,
      pages.ld40Post,
      pages.ld40PostDev,
      pages.ld42,
      pages.ld43,
      pages.ld45,
      pages.reasonableResearch,
      pages.ld46,
      pages.website,
    ],
  },
];

export default pages;
