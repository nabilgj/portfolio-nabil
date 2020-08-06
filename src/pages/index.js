import React from "react"
import { graphql } from "gatsby"

import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Languages from "../components/Languages"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

import { ThemeProvider } from "@material-ui/styles"
import theme from "../components/ui/Theme"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
        <About />
        <Languages />
        <Projects />

        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>

        <Footer />
      </Layout>
    </ThemeProvider>
  )
}
// ...GatsbyImageSharpFluid
