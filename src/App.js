import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Container, makeStyles, Grid, Typography } from "@material-ui/core";

import Navigation from "./Components/Navigation";
import pages from "./pages";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
  },
  title: {
    padding: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Navigation />
      <Container className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item></Grid>
          {Object.keys(pages).map((key) => {
            const { url, title, component: Component } = pages[key];
            return (
              <Route
                key={url}
                path={url}
                exact
                component={() => (
                  <>
                    <Typography variant="h3" className={classes.title}>
                      {title}
                    </Typography>
                    <Component />
                  </>
                )}
              />
            );
          })}
        </Grid>
      </Container>
    </BrowserRouter>
  );
};

export default App;
