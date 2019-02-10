$( '.contact-dropdown' ).hover(function() {
  $('.contact-dropdown').toggleClass("rotate");
});

setTimeout(() => 
  {
   $('#slider .lazy-1').css('background-image', 'url("src/img/img2.jpg")');
  }, 2000);

setTimeout(() => 
  {
   $('#slider .lazy-2').css('background-image', 'url("src/img/img3.jpg")');
  }, 6000);