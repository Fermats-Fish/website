import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Container, makeStyles, Grid, Typography } from "@material-ui/core";

import Navigation from "./Components/Navigation";
import pages from "./pages";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
  },
  titleItem: {
    width: "100%",
  },
  title: {
    paddingTop: theme.spacing(3),
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navigation />
      <Container className={classes.container}>
        {Object.keys(pages).map((key) => {
          const { url, title, component: Component, align } = pages[key];
          return (
            <Route
              key={url}
              path={url}
              exact
              component={() => (
                <Grid
                  container
                  direction="column"
                  alignItems={align || "center"}
                  spacing={3}
                >
                  <Grid item className={classes.titleItem}>
                    <Typography variant="h3" className={classes.title}>
                      {title}
                    </Typography>
                  </Grid>
                  <Component />
                </Grid>
              )}
            />
          );
        })}
      </Container>
    </BrowserRouter>
  );
};

export default App;
