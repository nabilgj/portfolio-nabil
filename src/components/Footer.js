import React from "react"
import SocialLinks from "../constants/socialLinks"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  thoughContainer: {
    background:
      "linear-gradient(to right bottom, #43cea2, #00b5b3, #0099bb, #007ab4, #185a9d)",
    "&:hover": {
      background:
        "linear-gradient(to left top, #43cea2, #00b5b3, #0099bb, #007ab4, #185a9d)",
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      justify="space-between"
      alignItems="center"
      id="contact"
      style={{
        margin: matchesMD ? "5rem auto 0" : "5rem 0 0",
        background: "black",
        padding: matchesSM ? "4px" : 0,
      }}
    >
      <Grid
        md
        item
        style={{
          padding: matchesSM ? "3rem" : "6rem",
          width: "95vw",
        }}
        className={classes.thoughContainer}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h1" align="center" style={{ color: "white" }}>
              Mutable Thoughts
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align="center"
              style={{ maxWidth: "25rem" }}
            >
              Get your portfolio designed with the most advanced and cutting
              edge technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid md item style={{ margin: matchesMD ? "3rem 0" : 0 }}>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "space-between" : "space-around"}
        >
          <Grid item style={{ marginRight: matchesSM ? "3rem" : 0 }}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h3"
                  style={{ color: "white", marginBottom: "6px" }}
                >
                  Quick Links
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1"> Work </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1"> About </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item style={{ marginLeft: matchesSM ? "3rem" : 0 }}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h3"
                  style={{ color: "white", marginBottom: "6px" }}
                >
                  Lets Connect
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <a
                    href="mailto:nabilgj.bnm@gmail.com"
                    style={{ textDecoration: "none", color: "#114357" }}
                  >
                    nabilgj.bnm@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1"> +1 289 834 3201 </Typography>
              </Grid>
              <Grid item>
                <SocialLinks />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

// go into index page
export default Footer
