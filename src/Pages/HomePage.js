import React from "react";
import { useHistory } from "react-router-dom";

import { Container, ListItemText, ListItem, List } from "@material-ui/core";

import { sections } from "../pages";

const HomePage = () => {
  const history = useHistory();

  return (
    <Container>
      <List>
        {sections.map((section) => (
          <React.Fragment key={section.title}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h3" }}
                primary={section.title}
              />
            </ListItem>
            {section.pages.map((page) => (
              <ListItem
                button
                key={page.url}
                onClick={() => history.push(page.url)}
              >
                <ListItemText
                  primaryTypographyProps={{ variant: "h5" }}
                  primary={page.title}
                />
              </ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;
