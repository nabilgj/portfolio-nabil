import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"

import { ThemeProvider } from "@material-ui/styles"
import theme from "../components/ui/Theme"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero />
      </Layout>
    </ThemeProvider>
  )
}
// ...GatsbyImageSharpFluid
