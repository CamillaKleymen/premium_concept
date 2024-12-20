$(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });