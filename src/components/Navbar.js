import React from "react"

// import logo from "../assets/logo.svg"

import logo from "../assets/nabilimage.jpg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}))

const Navbar = props => {
  const classes = useStyles()

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <Avatar src={logo} alt="image logo" className={classes.large} />
          <button type="button" className="toggle-btn">
            <FaAlignRight onClick={props.toggleMenu}></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

// go into Layout
export default Navbar
