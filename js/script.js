$(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      autoplay: false,
      // autoplaySpeed: 0,
      // speed: 7000,
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


  $('.slider-hero').slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
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


  $(document).ready(function () {
    $('.image-slider').slick({
        dots: true, 
        arrows: false, 
        infinite: true, 
        // speed: 500,
        // autoplay: true, 
        // autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
  $('.slider-collections').slick({
    rows: 2,
    slidesPerRow: 3,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesPerRow: 1
        }
      }
    ]
  });
});


/// Инициализация правого слайдера
$('.slider-brand-right').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: 'linear',
  arrows: false,
  rtl: false // Движение справа налево
});

// Инициализация левого слайдера
$('.slider-brand-left').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: 'linear',
  arrows: false,
  rtl: false // Движение слева направо
});

// Синхронизация противоположного движения
$('.slider-brand-left').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-brand-right').slick('slickGoTo', slick.slideCount - currentSlide - 1, true);
});

$('.slider-brand-right').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-brand-left').slick('slickGoTo', slick.slideCount - currentSlide - 1, true);
});




 

  $(document).ready(function () {
    $('.slider-bestsellers').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});






$(document).ready(function() {
    AOS.init();
});



// $(document).ready(function() {
//   new Snow();
// });
