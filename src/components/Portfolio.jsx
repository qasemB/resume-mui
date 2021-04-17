import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.primary.dark,
    height: "100%",
    minHeight: "calc(100vh - 64px)",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Grid container justify="center">
        {/* project 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="پروژه 1"
                height="140"
                image={"/images/bg1.jpg"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  پروژه1
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  لورم ایپسوم متن ساختگی و بی محتوا و لورم ایپسوم متن ساختگی و
                  بی محتوا و لورم ایپسوم متن ساختگیو بی محتوا
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                اشتراک
              </Button>
              <Button size="small" color="secondary">
                مورد علاقه
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="پروژه 1"
                height="140"
                image={"/images/bg1.jpg"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  پروژه2
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  لورم ایپسوم متن ساختگی و بی محتوا و لورم ایپسوم متن ساختگی و
                  بی محتوا و لورم ایپسوم متن ساختگیو بی محتوا
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                اشتراک
              </Button>
              <Button size="small" color="secondary">
                مورد علاقه
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="پروژه 1"
                height="140"
                image={"/images/bg1.jpg"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  پروژه3
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  لورم ایپسوم متن ساختگی و بی محتوا و لورم ایپسوم متن ساختگی و
                  بی محتوا و لورم ایپسوم متن ساختگیو بی محتوا
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                اشتراک
              </Button>
              <Button size="small" color="secondary">
                مورد علاقه
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="پروژه 1"
                height="140"
                image={"/images/bg1.jpg"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  پروژه4
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  لورم ایپسوم متن ساختگی و بی محتوا و لورم ایپسوم متن ساختگی و
                  بی محتوا و لورم ایپسوم متن ساختگیو بی محتوا
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                اشتراک
              </Button>
              <Button size="small" color="secondary">
                مورد علاقه
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
