import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(3),
  },
  descriptionItem: {
    width: 960,
  },
}));

const UnityProject = ({ title, project, description }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <iframe
          style={{ width: 960, height: 700, border: "none" }}
          title={title}
          src={`/projects/${project}/index.html`}
        ></iframe>
      </Grid>
      {description &&
        description.map((x) => (
          <Grid className={classes.descriptionItem} item>
            <Typography>{x === "" ? "\u200b" : x}</Typography>
          </Grid>
        ))}
    </Grid>
  );
};

export default UnityProject;
