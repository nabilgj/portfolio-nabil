import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import { slickData } from "../page-demo/slickdata"
import { portfolioList } from "../page-demo/projectData"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  projectTitle: {
    fontWeight: 700,
    fontFamily: "Raleway",
    color: theme.palette.common.blue,
    textAlign: "center",
    margin: "2rem",
  },
  portfolioSlick: {
    margin: "0 auto",
    width: "90%",
    maxWidth: "1170",
  },
  portfolio: {
    overflow: "hidden",
    position: "relative",
  },
  portfolioContainer: {
    width: "20vw",
    height: "60vh",
    margin: "0 1rem",
    transition: "all 1s ease-in",
  },
  imageContainer: {
    margin: "auto",
    transition: "all .8s ease-in",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image: {
    minWidth: "100%",
    minHeight: "100%",
    padding: 0,

    transition: "all 1s ease-in",
    "&:hover": {
      filter: "blur(2px)",
    },
  },
  contentContainer: {
    minWidth: "70%",
    position: "absolute",
    top: "73%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    background: "rgba(0, 0, 0, 0.70)",
    borderRadius: "8px",
  },
  titleparaButton: {
    margin: ".8rem",
  },
  title: {
    fontFamily: "Raleway",
    fontSize: "2.5rem",
  },
}))

const query = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectsPage = () => {
  const classes = useStyles()

  const [showTitle, setShowTitle] = useState(false)

  const data = useStaticQuery(query)

  let title = "Projects"
  return (
    <React.Fragment>
      <div id="projects">
        <div>
          <h1 className={classes.projectTitle}>{title}</h1>
        </div>

        <div className={classes.portfolioSlick}>
          <Slider {...slickData}>
            {portfolioList.map(project => (
              <div key={project.id} className={classes.portfolio}>
                <div className={classes.portfolioContainer}>
                  <div className={classes.imageContainer}>
                    <a>
                      <img src={project.image} className={classes.image} />
                    </a>
                  </div>
                  <div className={classes.contentContainer}>
                    <div className={classes.titleparaButton}>
                      <h2 style={{ color: "white" }} className={classes.title}>
                        {project.title}
                      </h2>
                      <p style={{ color: "white", fontSize: "12px" }}>
                        Category: {project.category}
                      </p>
                      <p
                        style={{
                          color: "white",
                          marginTop: "-1rem",
                          fontSize: "12px",
                        }}
                      >
                        Courtesy: {project.courtesy}
                      </p>
                      <a
                        className="btn"
                        href={project.siteHref}
                        target="_blank"
                      >
                        Check
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  )
}

// go into index page
export default ProjectsPage
