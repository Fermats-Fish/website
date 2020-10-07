import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import { Menu as MenuIcon, Home as HomeIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { sections } from "../pages";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    overflowX: "hidden",
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  list: {
    width: drawerWidth,
  },
}));

const Navigation = ({ ...otherProps }) => {
  const classes = useStyles();
  const history = useHistory();

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <AppBar>
        <Toolbar>
          {/* Menu button */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Home button */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => {
              history.push("/");
            }}
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" className={classes.title}>
            Tama's Website
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side bar */}
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List className={classes.list}>
          {/* Navigation for each section */}

          {sections.map((section) => (
            <React.Fragment key={section.title}>
              {/* Section title */}
              <ListItem>
                <ListItemText
                  primaryTypographyProps={{ variant: "h5" }}
                  primary={section.title}
                />
              </ListItem>

              {/* Section pages */}
              {section.pages.map((page) => (
                <ListItem
                  button
                  key={page.url}
                  onClick={() => history.push(page.url)}
                >
                  <ListItemText primary={page.title} />
                </ListItem>
              ))}
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <div className={classes.offset} />
    </>
  );
};

export default Navigation;
