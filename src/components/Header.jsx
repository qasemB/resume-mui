import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  subTitle: {
    color: theme.palette.secondary.main,
  },
  subTitlePaper: {
    backgroundColor: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(2px)",
    padding: "0.5rem 1.5rem",
  },
  title: {
    color: theme.palette.secondary.light,
  },
  titlePaper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(2px)",
    padding: "0.5rem 1.5rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src="/images/avatar/qasem.jpg"
          alt="قاسم بساکی"
        />
      </Grid>
      <Paper elevation={0} className={classes.subTitlePaper}>
        <Typography className={classes.subTitle} variant={"h4"}>
          <Typed typeSpeed={150} strings={["قاسم بساکی"]}></Typed>
        </Typography>
      </Paper>
      <br />
      <Paper elevation={0} className={classes.titlePaper}>
        <Typography className={classes.title} variant={"h6"}>
          <Typed
            typeSpeed={100}
            backSpeed={40}
            loop
            strings={[
              "برنامه نویس فول استک",
              "عاشق برنامه نویسی",
              "JavaScript",
              "React.js",
              "Next.js",
              "Material-ui",
              "Laravel",
              "Livewire",
            ]}
          ></Typed>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Header;
