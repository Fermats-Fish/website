import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Grid,
  Typography,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";

import { sections } from "../pages";

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: theme.spacing(3),
  },
  project: {
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "100%",
    transition: "transform .3s",
  },
  // This can't just be added to &:hover of image, since we want the zoom to also
  // happen when the user mouses over the tile bar.
  imageHover: {
    transform: "scale(1.1) rotate(1deg)",
  },
  blur: {
    "-webkit-filter": "grayscale(50%) blur(2px)",
  },
}));

const NavPage = () => {
  const history = useHistory();

  const classes = useStyles();

  const [hover, setHover] = useState(null);

  return (
    <Grid container spacing={3}>
      {sections.map((section) => (
        <React.Fragment key={section.title}>
          <Grid item xs={12}>
            <Typography className={classes.sectionTitle} variant="h3">
              {section.title}
            </Typography>
          </Grid>
          {section.pages.map((page) => (
            <Grid
              item
              key={page.url}
              xs={12}
              sm={6}
              md={4}
              onClick={() => history.push(page.url)}
            >
              <div
                className={classes.project}
                onMouseOver={() => setHover(page.url)}
                onMouseOut={() => setHover(null)}
              >
                <img
                  className={
                    classes.image +
                    (page.url === hover ? " " + classes.imageHover : "") +
                    (hover != null && page.url !== hover
                      ? " " + classes.blur
                      : "")
                  }
                  src={"images/covers/" + page.cover}
                  alt={page.title}
                />
                <GridListTileBar
                  title={page.title}
                  // subtitle={page.url === hover ? page.url : null}
                  // actionIcon={
                  //   <IconButton
                  //     aria-label={`info about ${tile.title}`}
                  //     className={classes.icon}
                  //   >
                  //     <InfoIcon />
                  //   </IconButton>
                  // }
                />
              </div>
            </Grid>
          ))}
          <Grid item xs={12} className={classes.spacer} />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default NavPage;
