import React from "react";
import { useHistory } from "react-router-dom";

import { Typography, Container, Button } from "@material-ui/core";

import { sections } from "../pages";

const HomePage = () => {
  const history = useHistory();

  return (
    <Container>
      {sections.map((section) => (
        <React.Fragment key={section.title}>
          <Typography variant="h3">{section.title}</Typography>
          {section.pages.map((page) => (
            <Button key={page.url} onClick={() => history.push(page.url)}>
              {page.title}
            </Button>
          ))}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default HomePage;
