import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

const Sidebar = props => {
  return (
    <aside className={`sidebar ${props.isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn">
        <FaTimes onClick={props.toggleSidebar} />
      </button>
      <div className="side-container">
        <Links styleClass={`${props.isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${props.isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

// go into Layout
export default Sidebar
