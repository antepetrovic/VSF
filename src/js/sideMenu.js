$('.lokacije').hide()

$( '#lokacija' ).click(function() {
  $('#lokacija').toggleClass("rotate");
  $('.lokacije').slideToggle()
});