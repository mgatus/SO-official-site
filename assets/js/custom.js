// ******* Mobile menu toggle ************//
$('.so-menu-toggle, .overlay').click(function() {
  let navbar = $('#navbarNav');
  let overlay = $('.overlay');
  overlay.toggleClass('block-overlay');
  navbar.toggleClass( "show" );
  $(this).toggleClass('toggle-active')
});

// **** Slick Carousel
$(function() {
  $('.responsive-carousel').slick({
    centerMode: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
