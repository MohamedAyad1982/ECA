document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
          perPage    : 3,
          drag   : 'free',
          focus  : 'center',

          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();


    $(".owl-carousel").owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        lazyLoad:true,
        items:1,
        
        // videoWidth:500,
        dots:false,
        // dotsData:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }


    });

  } );