$(function(){
    $('.slider__items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
      }); 
      $('.slider__horse').slick({
        slidesToShow: 3,
        slidesToScroll: 1
      }); 
});