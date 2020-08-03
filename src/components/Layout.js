import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleMenu={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {children}
    </>
  )
}

// go into index page
export default Layout
