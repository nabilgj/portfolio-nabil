import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

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
