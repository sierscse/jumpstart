$(document).ready(function() {

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,

});

});


/* NOTE: In main.js, when the document is ready, apply this configuration to the carousel:

One slide should scroll at a time. DONE
The carousel should autoplay when the page is loaded.  DONE
The speed should be 4000 milliseconds. DONE
Do not include arrow buttons. DONE
Do not allow the user to drag the images. DONE
Do not pause on "focus" or "hover". DONE
*/
