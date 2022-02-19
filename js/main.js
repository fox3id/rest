$(function(){
    $('.slider').slick({
      arrows: false,
      dots:true,   
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      vertical: false, 
      autoplay: true,
      autoplaySpeed: 3000, 
    
    });

// //   2 slider
    $('.gallery-slider').slick({
       infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500, 
        fade:true,

      
        // 
        // prevArrow: '<button type="button" class="slick-prev"><img src="img/prew.svg" alt=""> </button>', 
        // nextArrow: '<button type="button" class="slick-next"><img src="img/Vector2 (1).svg" alt=""></button>',
        // 
        //
        // responsive:[
        //   {
        //    breakpoint: 361,
        //    settings: {
        //      dots: false,
        //      arrows: false,
        //    }
        //  }
        // ]
    });

});