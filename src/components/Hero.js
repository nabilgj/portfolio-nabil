import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BikeGuy from "./bikeguy"
import resumeNabil from "../others/NabilAhmed-Resume.pdf"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { makeStyles, useTheme } from "@material-ui/core/styles"

// const useStyles = makeStyles(theme => ({}))

const Hero = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Grid container direction="column" className="hero" id="home">
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="center"
        style={{ marginTop: matchesSM ? "4rem" : 0 }}
      >
        <Grid
          item
          style={{ zIndex: 100, marginTop: matchesSM ? "3rem" : "5rem" }}
        >
          <Grid
            container
            direction="column"
            alignItems={matchesSM ? "center" : "flex-start"}
            justify={matchesSM ? "center" : undefined}
          >
            <div className={matchesSM ? "" : "underline"}></div>
            <Typography variant="h1"> Nabil Ahmed </Typography>
            <Typography variant="h2"> MERN Stack Developer</Typography>
            <a
              href={resumeNabil}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Resume
            </a>

            <SocialLinks />
          </Grid>
        </Grid>
        {/* <Image fluid={fluid} className="hero-img" /> */}
        <Grid
          item
          style={{ zIndex: 100, marginTop: matchesSM ? "-2rem" : "5rem" }}
        >
          <BikeGuy />
        </Grid>
      </Grid>
    </Grid>
  )
}

// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "nabilimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// go into index page
export default Hero

/*

    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1> Nabil Ahmed </h1>
            <h4> Web App Developer </h4>
            <a href={resumeNabil} target="_blank" className="btn">
              Resume
            </a>

            <SocialLinks />
          </div>
        </article>
         <Image fluid={fluid} className="hero-img" /> 
        <BikeGuy />
      </div>
    </header>
*/
