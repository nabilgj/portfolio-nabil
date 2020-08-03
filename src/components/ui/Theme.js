import { createMuiTheme } from "@material-ui/core/styles"

const arcBlue = "#114357"
const arcPink = "#F29492"
const arcGrey = "#868686"

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      pink: arcPink,
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
      fontSize: "4rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Pacifico",
      fontSize: "1.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      color: arcGrey,
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
