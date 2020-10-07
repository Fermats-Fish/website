import React from "react";

import { Grid, Typography } from "@material-ui/core";

import HomePage from "./Pages/HomePage";
import NavPage from "./Pages/NavPage";
import UnityProject from "./Components/UnityProject";
import AboutMePage from "./Pages/AboutMePage";

const unityProject = (project, title, description, cover) => ({
  title: title,
  cover: cover || project + ".png",
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
      This was my second project using Unity3D and C#, and since my first
      project didn't involve much code I learnt a lot about programming using C#
      through this project.
    </Typography>,
    <Typography>
      Like most of my games it was made for the Ludum Dare competition in under
      48 hours. This is the link to my submission:{" "}
      <a href="https://ldjam.com/events/ludum-dare/38/two-dot">Link</a>.
    </Typography>,
    <Typography>
      I recently developed a second version of this game by re writing the code
      from scratch in a way that makes it really easy to create new puzzles and
      mechanics.
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
          className="fullWidth"
          src="images/dotdot-level-select.png"
          alt="Three colour level in revised version of two dot"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="fullWidth"
          src="images/dotdot-1.png"
          alt="Three colour level in revised version of two dot"
        />
      </Grid>
      <Grid item xs={4}>
        <img
          className="fullWidth"
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
      that require more thinking. Despite this I learnt a lot about how Unity
      works through this project. The thing I like the most about this game is
      how the enemy robots will only go towards the player if they can see the
      player, and how when the player goes out sight the robots will navigate to
      the place that they saw the player last.
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
      This was my first attempt at a strategical turn based survival game. When
      I created this game it involved the greatest amount of programming out of
      all of the games I had created so far. I really liked how I structured my
      code in this project in a way that made future development easy, and ever
      since this project I have strived to program in this way.
    </Typography>,
    <Typography>
      Like most of my games this one was made for the competition Ludum Dare in
      under 48 hours. The link to my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/40/dont-die-1">Link</a> and
      the source code is available on GitHub here:{" "}
      <a href="https://github.com/Fermats-Fish/Ludum-Dare-40">Link</a>.
    </Typography>,
    <Typography>
      I really liked where this was going and ended up developing post
      competition versions until well after the competition end date. The post
      competition versions improved on many of the features including a much
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
  ld42: unityProject("ld42", "Ludum Dare 42 - Population Overflow", [
    <Typography>
      This game was my first attempt at a more strategical top down game. It has
      buildings and resources, and the different buildings interact with each
      other based on proximity. The population across all of your planets grows
      exponentially making it quite hard to build enough cities to sustain
      everyone.
    </Typography>,
    <Typography>
      Like most of my games this one was made for the competition Ludum Dare in
      under 48 hours. The link to my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/42/population-overflow">
        Link
      </a>{" "}
      and the source code is available on GitHub here:{" "}
      <a href="https://github.com/Fermats-Fish/Ludum-Dare-42">Link</a>.
    </Typography>,
    <Typography>
      At the time this was my most ambitious idea for Ludum Dare, so I'm really
      happy that I managed to pull it off in 48 hours. My main regret with this
      project was not giving the player an option to build multiple buildings of
      the same type at once, since it can be quite tedious dragging the same
      building onto the screen multiple times.
    </Typography>,
  ]),
  reasonableResearch: unityProject(
    "reasonable-research",
    "Reasonable Research (University Ethics Project)",
    [
      <Typography>
        This was a game I made for a University project about the ethics
        surrounding research. I was quite busy at the time so I made most of the
        game within the space of one evening. Because of a bug you have to enter
        fullscreen mode before it will work properly, but other than that I was
        quite happy with it.
      </Typography>,
    ]
  ),
  ld43: unityProject("ld43", "Ludum Dare 43 - Forest of Worship", [
    <Typography>
      This game was an even more ambitious attempt than my last ludum dare game.
      My idea was to make a really strategical village building game, where you
      had to manage different workers, and assign them jobs such as cutting down
      trees or working farms etc.
    </Typography>,
    <Typography>
      Like I had learnt to do during Ludum Dare 40 I set about coding everything
      really well from the beginning. In particular I spent a lot of time
      working on the hex based map. Unfortunately because I spent so much time
      getting the fundamentals of the game set up really well, I ran out of time
      to add most of the game features.
    </Typography>,
    <Typography>
      As such this is probably the least fun of all of my games, however I
      learnt a lot from making it about time management, and how to prioritise
      things.
    </Typography>,
    <Typography>
      Like most of my games this one was made for the competition Ludum Dare in
      under 48 hours. The link to my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/43/forest-of-worship">
        Link
      </a>{" "}
      and the source code is available on GitHub here:{" "}
      <a href="https://github.com/Fermats-Fish/Ludum-Dare-43">Link</a>.
    </Typography>,
  ]),
  ld45: unityProject("ld45", "Ludum Dare 45 - Stay Alive 2 Survive", [
    <Typography>
      This was my second attempt at a survival game, and I see it as a second
      version of the game I made for Ludum Dare 40. The main difference between
      the two games is that in this game you start of by generating a rule seed.
      The behaviour and statistics of all of the creatures and items are then
      based off that seed.
    </Typography>,
    <Typography>
      The result of this is that you have to play with a specific rule seed
      multiple times before you learn how the game works with that seed, and
      once you have figured out how to survive for a large period of time with
      that seed, you can start again by generating another seed. In this way the
      game is more about learning and discovering how the game behaves than
      survival itself.
    </Typography>,
    <Typography>
      Like most of my games this one was made for the competition Ludum Dare in
      under 48 hours. The link to my submission is here:{" "}
      <a href="https://ldjam.com/events/ludum-dare/45/stay-alive-2-survive">
        Link
      </a>{" "}
      and the source code is available on GitHub here:{" "}
      <a href="https://github.com/Fermats-Fish/Ludum-Dare-45">Link</a>.
    </Typography>,
  ]),
  ld46: unityProject(
    "ld46",
    "Ludum Dare 46 (Team Submission) - Game of Trees - A Song of Bears and Fire",
    [
      <Typography>
        This was my first attempt at Ludum Dare after starting work, and my
        first submission working as part of a team of developers. I had always
        wanted to do Ludum Dare as part of a team, so it was great to finally
        have that opportunity.
      </Typography>,
      <Typography>
        Like most of my games this one was made for the competition Ludum Dare,
        however since I did it as part of a team this time we had to submit the
        game to the 72 hour competition rather than the 48 hour one. Despite
        this most work on the game was completed in 48 hours, since on the
        Monday of the competition we all had work during the day. The link to
        our submission is here:{" "}
        <a href="https://ldjam.com/events/ludum-dare/46/game-of-trees-a-song-of-bears-and-fire">
          Link
        </a>{" "}
        and the source code is available on GitHub here:{" "}
        <a href="https://github.com/Fermats-Fish/Ludum-Dare-46">Link</a>.
      </Typography>,
      <Typography>
        I really liked how dynamic this game was, and it was really fun
        developing it with other people as part of a team.
      </Typography>,
    ]
  ),
  website: {
    title: "This Website",
    url: "/website",
    component: () => (
      <>
        <Grid item className="fullWidth">
          <iframe style={{ height: 600 }} src="/" title="Website"></iframe>
        </Grid>
        <Grid item className="fullWidth">
          <Typography>
            Finally we come to this website. I have included this website on the
            list of projects since all of the other React JS projects I have
            completed have been done for a company, and hence I no longer have
            access to the source code for these projects.
          </Typography>
        </Grid>
        <Grid item className="fullWidth">
          <Typography>
            On the other hand the source code for this website can be accessed
            by the public here:{" "}
            <a href="https://github.com/Fermats-Fish/website">Link</a>.
          </Typography>
        </Grid>
      </>
    ),
    cover: "website.png",
  },
  ld47: unityProject(
    "ld47",
    "Ludum Dare 47 (Team Submission) - Run Time Error - Infinite Loop Detected"
  ),
  about: {
    title: "About Me",
    url: "/about",
    align: "flex-start",
    component: AboutMePage,
    cover: "about.png",
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
      pages.reasonableResearch,
      pages.ld43,
      pages.ld45,
      pages.ld46,
      pages.website,
      pages.ld47,
    ],
  },
];

export default pages;
