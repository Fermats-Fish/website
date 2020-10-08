import React from "react";
import { useHistory } from "react-router-dom";

import { Typography, Grid, Button } from "@material-ui/core";

import pages from "../pages";

const HomePage = ({ ...otherProps }) => {
  const history = useHistory();
  return (
    <>
      <Grid item>
        <Typography variant="h3">Welcome to My Website</Typography>
      </Grid>
      <Grid item>
        <Typography>
          I am Tama Austin, a talented junior full stack developer who enjoys
          working on a large number of personal projects.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          This website serves as a platform for hosting many of my projects, and
          also as a way for you to find out more about me.
        </Typography>
      </Grid>
      <Grid style={{ width: "100%", textAlign: "center" }} item>
        <img
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 1000,
          }}
          alt="Me"
          src="images/profile-square.png"
        />
      </Grid>
      <Grid item>
        <Typography>
          Click on the button below to get started, or open the navigation panel
          by clicking in the top left corner of your screen.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(pages.nav.url)}
        >
          Enter
        </Button>
      </Grid>
    </>
  );
};

export default HomePage;
