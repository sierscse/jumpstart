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

  var lastScrollTop = 0;
   $(window).scroll(function(){
     var scrollTop = $(this).scrollTop();
     if (scrollTop - lastScrollTop > 50){
       var navHeight = $('.navbar').css('height');
       $('.navbar').animate({top: '-' + navHeight}, 150);
       lastScrollTop = scrollTop;
     } else if (lastScrollTop - scrollTop > 50) {
       $('.navbar').animate({top: '0px'}, 150);
       lastScrollTop = scrollTop;
     }
   });

});


/* NOTE:

specifications for carousel:

In main.js, when the document is ready, apply this configuration to the carousel:

One slide should scroll at a time.
The carousel should autoplay when the page is loaded.
The speed should be 4000 milliseconds.
Do not include arrow buttons.
Do not allow the user to drag the images.
Do not pause on "focus" or "hover".  


Specifications for navbar:
1) In main.js, use jQuery to hide the navigation bar as the user scrolls. Follow the steps below to achieve this effect!

2) Create a variable to store how far the user has scrolled and set it equal to 0. Use proper JavaScript naming conventions and give this variable a name that accurately describes the value stored in it. We'll refer to this variable as x for our explanation.

3) Use the .scroll() event handler to select the window. Inside of the event handler, include the control flow described below.

4) Create a variable that stores the value of the .scrollTop() property of this. We'll refer to this variable as y for our explanation, but you should give it a more appropriate name.

5) If y is greater than x by 50 or more, create a variable that stores the height of the navbar, z (remember to give the variable a descriptive name!).

6) Use the jQuery .animate() function to to change the top offset of the navbar to be the negative height of the navbar over 150ms (using the variable you just created).

7) Then, set x equal to y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.

8) Otherwise, if x is greater than y by 50 or more, use the .animate() function to change the top offset of the navbar to 0px over 150 milliseconds.

9) Set x to the value of y so that you always have a record of how far the user scrolled last time they finished scrolling. You need this record to compare in your control flow.
*/
