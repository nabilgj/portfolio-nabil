import React from "react"

import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import WorkingImage from "./workingImage"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  about: {
    // background: "#e0fcff",
    background: "white",

    "&::before": {
      content: "",
      position: "absolute",
      top: 0,
      left: 0,
      right: "35%",
      bottom: 0,
      background: "#e0fcff",
    },
  },
}))

const About = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container direction="column" className={classes.about} id="about">
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
      >
        <Grid
          item
          md
          style={{
            marginTop: matchesSM ? "7rem" : "5rem",
          }}
        >
          <WorkingImage />
        </Grid>

        <Grid item md>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h1" align="center">
                About Me
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="caption"
                align="center"
                paragraph
                style={{
                  maxWidth: matchesSM ? "25rem" : "60rem",
                  margin: matchesSM ? "0" : "0 2rem",
                }}
              >
                I am Nabil Ahmed and I completed my 58 weeks diploma in Web
                Application Developer from triOS College Toronto. As a Full
                stack Developer I have learnt some of the advanced and very
                dynamic web languages.
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justify={matchesSM ? "space-between" : "space-around"}
                style={{
                  margin: "2rem auto",
                }}
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h3"> Front End </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" paragraph>
                        HTML, CSS, JS, React
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h3"> Back End </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" paragraph>
                        Nodejs, Express, Graphql
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

// go into index page
export default About
