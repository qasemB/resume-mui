import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.dark,
    minHeight: "90vh",
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",

    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "2px solid tan",
      right: "40px",
      top: 0,
      zIndex: "1",
    },
    "&:after": {
      content: "''",
      display: "table",
      cleare: "both",
    },
    [theme.breakpoints.up("md")]: {
      "&:before": {
        left: "calc(50% - 2px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 10px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  timLineYear: {
    textAlign: "center",
    borderRadius: "0.5rem",
    zIndex: "100",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "black",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none !important",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none !important",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography className={classes.heading} variant={"h4"} align="center">
        تجربه کاری
      </Typography>
      <Box component="div" className={classes.timeline}>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
        <Typography
          className={`${classes.timLineYear} ${classes.timeLineItem}`}
          variant={"h2"}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            بک اند
          </Typography>
          <Typography
            align="center"
            variant="body1"
            style={{ color: "tomato" }}
          >
            شرکت طراح
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ color: "tan" }}
          >
            اورم ایپسوم متن بی محتوا و ساختگی لورم ایپسوم متن بی محتوا و ساختگی
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
