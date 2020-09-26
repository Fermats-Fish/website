import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import pages from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      {Object.keys(pages).map((key) => {
        const { url, component } = pages[key];
        return <Route key={url} path={url} exact component={component} />;
      })}
    </BrowserRouter>
  );
};

export default App;
