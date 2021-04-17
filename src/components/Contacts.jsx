import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.dark,
    height: "100%",
    minHeight: "calc(100vh - 64px)",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "2rem",
    color: "tomato",
    borderColor: "tomato",
  },
  title: {
    color: "tomato",
    textAlign: "center",
    marginBottom: "1rem",
  },
}));

const InputField = withStyles((theme) => ({
  root: {
    margin: "0.5rem auto",
    "& label.Mui-focused": {
      color: theme.palette.secondary.main,
    },
    "& label": {
      color: theme.palette.secondary.light,
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: `${theme.palette.secondary.light} !important`,
      },
    },
  },
}))(TextField);

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h6" className={classes.title}>
            اگه کمکی از دستم بر میاد در خدمتم - خودم ایمیل میزنم
          </Typography>
          <InputField
            size="small"
            margin="dense"
            fullWidth={true}
            label="نام"
            variant="outlined"
          />
          <InputField
            size="small"
            margin="dense"
            fullWidth={true}
            label="ایمیل"
            variant="outlined"
          />
          <InputField
            size="small"
            margin="dense"
            fullWidth={true}
            label="توضیح کوتاه"
            variant="outlined"
          />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth
            size="large"
            startIcon={<Send />}
          >
            ارتباط با من
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
