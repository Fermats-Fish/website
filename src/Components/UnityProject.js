import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(3),
  },
}));

const UnityProject = ({ title, project }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant="h3">
        {title}
      </Typography>
      <iframe
        style={{ width: "100%", height: 700, border: "none" }}
        title={title}
        src={`/projects/${project}/index.html`}
      ></iframe>
    </>
  );
};

export default UnityProject;
