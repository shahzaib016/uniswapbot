$(document).ready(function () {
    $(' #partners .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav:true,
        // navText:[".","."],
        
        autoplayTimeout: 3000,
        
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
  });


$(document).ready(function () {
    $(' #testiminals .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav:true,
        // item:3,
        // dotsEach:true,
        // dots:true,
        // navText:["←","→"],
        
        autoplayTimeout: 3000,
        
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });
  });




  
