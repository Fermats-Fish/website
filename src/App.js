import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Container } from "@material-ui/core";

import Navigation from "./Components/Navigation";
import pages from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        {Object.keys(pages).map((key) => {
          const { url, component } = pages[key];
          return <Route key={url} path={url} exact component={component} />;
        })}
      </Container>
    </BrowserRouter>
  );
};

export default App;
