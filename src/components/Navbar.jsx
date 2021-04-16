import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Apps,
  ArrowForward,
  AssignmentInd,
  ContactMail,
  Home,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  menuSideContainer: {
    width: 250,
    background: theme.palette.primary.light,
    height: "100%",
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    display: "block",
    margin: "0.5rem auto",
  },
  listItem: {
    color: theme.palette.secondary.main,
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "خانه",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "ادامه",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "نمونه کارها",
    listPath: "/",
  },
  {
    listIcon: <ContactMail />,
    listText: "مخاطبین",
    listPath: "/",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [sidemenuState, setSidemenuState] = useState({
    isOpen: false,
  });

  const toggleSlider = (slider, open) => () => {
    setSidemenuState({ ...sidemenuState, [slider]: open });
  };

  const sidemenu = () => {
    return (
      <Box component="div" className={classes.menuSideContainer}>
        <Avatar className={classes.avatar} src="/images/avatar/qasem.jpg" />
        <List>
          {menuItems.map((t, k) => (
            <ListItem
              button
              key={k}
              component={Link}
              to={t.listPath}
              onClick={toggleSlider("isOpen", false)}
            >
              <ListItemIcon className={classes.listItem} color={"secondary"}>
                {t.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                color={"secondary"}
                primary={t.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={toggleSlider("isOpen", true)}>
              <ArrowForward color="secondary" />
            </IconButton>
            <Typography variant={"h6"} color="secondary">
              منو
            </Typography>
            <Drawer
              onClose={toggleSlider("isOpen", false)}
              open={sidemenuState.isOpen}
            >
              {sidemenu()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
