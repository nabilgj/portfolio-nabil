import { createMuiTheme } from "@material-ui/core/styles"

const arcBlue = "#114357"
const arcLightBlue = "#0e7c86"
const arcPink = "#F29492"
const arcGrey = "#868686"
const arcWhite = "#fff"

const theme = createMuiTheme({
  palette: {
    common: {
      darkBlue: arcBlue,
      lightBlue: arcLightBlue,
      pink: arcPink,
      white: arcWhite,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcPink,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "3rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Pacifico",
      fontSize: "1.5rem",
      color: arcBlue,
    },
    h3: {
      fontFamily: "Raleway",
      fontSize: "1.5rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcBlue,
    },
    body1: {
      fontSize: "1rem",
      color: arcBlue,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      color: arcBlue,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
})

export default theme
