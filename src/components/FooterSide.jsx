import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    "& .MuiBottomNavigationAction-root": {
      //   minWidth: 0,
      //   maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));

const FooterSide = () => {
  const classes = useStyles();
  return (
    <BottomNavigation
      width="auto"
      style={{ background: "primary" }}
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ padding: 0, color: "tan" }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        style={{ padding: 0, color: "tan" }}
        icon={<Twitter />}
      />
      <BottomNavigationAction
        style={{ padding: 0, color: "tan" }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default FooterSide;
