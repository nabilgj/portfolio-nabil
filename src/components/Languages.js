import React from "react"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import {
  FaChromecast,
  FaBuffer,
  FaCloud,
  FaReact,
  FaUserFriends,
  FaMendeley,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa"
import transitions from "@material-ui/core/styles/transitions"

// ...GatsbyImageSharpFluid

const languages = [
  {
    id: 1,
    icon: <FaChromecast />,
    title: "FrontEnd",
    description: "HTML, CSS, JavaScript",
  },
  {
    id: 2,
    icon: <FaBuffer />,
    title: "BackEnd",
    description: "Nodejs, Express & Rest APi",
  },
  {
    id: 3,
    icon: <FaCloud />,
    title: "Database",
    description: "Mongoose & Firebase",
  },
  {
    id: 4,
    icon: <FaReact />,
    title: "Libraries",
    description: "React, React-Context & React-Redux",
  },
  {
    id: 5,
    icon: <FaMendeley />,
    title: "Framework",
    description: "Material-UI, Gatsby & Graphql",
  },
  {
    id: 6,
    icon: <FaUserFriends />,
    title: "Headless CMS",
    description: "Netlify & Contentful",
  },
  {
    id: 7,
    icon: <FaGitAlt />,
    title: "Version Control ",
    description: "git & Github",
  },
  {
    id: 8,
    icon: <FaFigma />,
    title: "Graphics ",
    description: "Photoshop & Figma",
  },
]

const useStyles = makeStyles(theme => ({
  language: {
    margin: "0 auto",
    width: "90vw",
    display: "grid",
    textAlign: "center",
    fontFamily: "Raleway",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
      width: "90%",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      width: "90%",
    },
  },
  langBox: {
    margin: "1rem auto",
    padding: "1rem",
    minWidth: "90%",
    color: theme.palette.common.blue,
    borderRadius: "12px",
    transition: "all 0.4s ease-in",
    "&:hover": {
      color: "white",
      transform: "translateY(-8px)",
      backgroundImage:
        "linear-gradient(to right bottom, #43cea2, #00b5b3, #0099bb, #007ab4, #185a9d)",
    },
  },
  title: {
    fontFamily: "Raleway",
  },
  icon: {
    fontSize: "2rem",
    color: theme.palette.common.lightBlue,
  },
}))

const Languages = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div id="languages">
        <h1 style={{ textAlign: "center", fontFamily: "Raleway" }}>
          Languages
        </h1>
      </div>
      <div className={classes.language}>
        {languages.map(lang => (
          <div key={lang.id} className={classes.langBox}>
            <div className={classes.icon}>{lang.icon}</div>
            <h3 className={classes.title}>{lang.title}</h3>
            <p className={classes.description}>{lang.description}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

// go into index page
export default Languages
