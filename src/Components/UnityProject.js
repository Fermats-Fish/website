import React from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  unityItem: {
    marginTop: -theme.spacing(3),
  },
  descriptionItem: {
    width: 960,
  },
}));

const UnityProject = ({ title, project, description }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.unityItem}>
        <iframe
          style={{ width: 960, height: 700, border: "none" }}
          title={title}
          src={`/projects/${project}/index.html`}
        ></iframe>
      </Grid>
      {description &&
        description.map((x, index) => (
          <Grid className={classes.descriptionItem} key={index} item>
            {x}
          </Grid>
        ))}
    </>
  );
};

export default UnityProject;
