import React from "react";
import { useHistory } from "react-router-dom";

import { ListItemText, ListItem, List } from "@material-ui/core";

import { sections } from "../pages";

const NavPage = () => {
  const history = useHistory();

  return (
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
  );
};

export default NavPage;
