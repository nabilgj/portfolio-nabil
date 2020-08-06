import React from "react"
import { Link } from "react-scroll"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "languages",
    url: "/languages/",
  },
  {
    id: 4,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link
        to={link.url}
        activeClass="active"
        style={{ cursor: "pointer" }}
        to={link.text}
        spy={true}
        smooth={true}
        offset={-15}
        duration={1500}
      >
        {link.text}
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
