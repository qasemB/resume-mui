import { makeStyles } from "@material-ui/core";
import React from "react";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "absolute",
    height: "90%",
    width: "100%",
  },
}));

const MyParticles = () => {
  const classes = useStyles();

  return (
    <>
      <Particles
        className={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 2,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "secondary",
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false,
              },
            },
            opacity: {
              value: 0.1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </>
  );
};

export default MyParticles;
