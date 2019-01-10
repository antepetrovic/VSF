//animation list: card, fade, box3D, glide

$(document).ready(function () {
  $('.slide-container').slideWiz(
      {
          auto: true,
          speed: 5000,
          type : 'fade',
          row: 9,
          file : mySlides
      }
  );
});

var mySlides = [
  {
    src: {
      main: "img/img1.jpg",
      cover: "1.jpg"
    },
    title: 'Slide 1',
    desc: 'Description 1',
    btnTitle: 'Action Button',
    button: {
      text: 'Button Text',
      url: false, // URL
      class: 'Button Class(es)',
      color: '#3781ce'
    }
  }
]  

