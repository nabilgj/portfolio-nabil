import profileImage from "../assets/profile.jpg"
import backPackImage from "../assets/backpack.jpg"
import burgerImage from "../assets/burger.jpg"
import technologyImage from "../assets/technology.jpg"
import forestImage from "../assets/forest.jpg"
import mountainImage from "../assets/mountain.jpg"

export const portfolioList = [
  {
    id: 0,
    image: `${profileImage}`,
    category: "React-Node",
    title: "Profile",
    courtesy: "Nabil",
    siteHref: "https://portfolio-nabil.netlify.app/",
  },
  {
    id: 1,
    image: `${burgerImage}`,
    category: "React-SPA",
    title: "BurgerApp",
    courtesy: "Maxmillian",
    siteHref: "https://burgerbuilder-react-app.netlify.app/",
  },
  {
    id: 2,
    image: `${technologyImage}`,
    category: "React Multi-Page App",
    title: "ArcDev",
    courtesy: "Zachary Reece",
    siteHref: "https://arc-development.netlify.app/",
  },
  {
    id: 3,
    image: `${backPackImage}`,
    category: "Old Type",
    title: "Travelling",
    courtesy: "Nabil",
    siteHref: "",
  },
  {
    id: 4,
    image: `${mountainImage}`,
    category: "React-SPA",
    title: "Adventure",
    courtesy: "Nabil",
    siteHref: "",
  },
  {
    id: 5,
    image: `${forestImage}`,
    category: "React-Node-Graphql",
    title: "Resort",
    courtesy: "Nabil",
    siteHref: "",
  },
]
