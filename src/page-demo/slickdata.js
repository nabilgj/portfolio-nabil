// will go inside Portfolio inside Component HomeLayout homeOne
export const slickData = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  speed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}
