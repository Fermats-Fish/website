import React from "react";
import {
  makeStyles,
  Grid,
  withWidth,
  isWidthUp,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  unityItem: {
    marginTop: -theme.spacing(3),
  },
  replacementImage: {
    marginTop: theme.spacing(3),
  },
  descriptionItem: {
    width: 960,
    maxWidth: "100%",
  },
}));

const UnityProject = ({ title, project, description, cover, width }) => {
  const classes = useStyles();
  console.log(width);
  const showGame = isWidthUp("md", width);
  return (
    <>
      <Grid item className={classes.unityItem}>
        {showGame ? (
          <iframe
            style={{ width: 960, height: 700, border: "none" }}
            title={title}
            src={`/projects/${project}/index.html`}
          ></iframe>
        ) : (
          <img
            className={classes.replacementImage}
            src={"/images/covers/" + cover}
            alt={"Screenshot of " + title}
          />
        )}
      </Grid>
      {!showGame && (
        <Grid item>
          <Typography>
            To play this game please use a non-touch device / device with a
            larger screen size.
          </Typography>
        </Grid>
      )}
      {description &&
        description.map((x, index) => (
          <Grid className={classes.descriptionItem} key={index} item>
            {x}
          </Grid>
        ))}
    </>
  );
};

export default withWidth()(UnityProject);
