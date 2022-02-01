$(document).ready(function(){

$(".wrap>.left-menu>.nav-box>.goods>li").click(function(){
    
    var test = $(this).index();

    if($(".nav-left>.content").eq(test).
    hasClass("active"))
    {
            $(".wrap> .nav-2-wrap").removeClass("active");
            $(".nav-2-wrap>.nav-left>.content").removeClass("active");
    }
    else{
        $(".wrap >.nav-2-wrap").addClass("active");
        $(".nav-2-wrap>.nav-left>.content").eq(test).addClass("active");
        $(".nav-2-wrap>.nav-left>.content").eq(test).siblings().removeClass("active");
    }

});

$(".nav-2-wrap >.nav-right").click(function(){
    $(".nav-2-wrap").removeClass("active");
    $(".nav-2-wrap>.left-menu > .content").removeClass("active");  
  });
     


// 슬라이드js
  $(".slider-box").slick({

    dots:false,
    prevArrow: $(".slider-wrap>.btn-wrap>.left-btn"),
    nextArrow: $(".slider-wrap>.btn-wrap>.right-btn"),

  });

  $('.num-box>li').click(function(){

    var indexNum= $(this).index()

    $(".slider-box").slick('slickGoTo', indexNum);


  });
  //  번호박스 해당 슬라이드 번호로이동하기



  $('.play-btn>.play').click(function(){
    $('.play-btn>.play').removeClass("active");
    $('.play-btn>.pause').addClass("active"); 
    $('.slider-box').slick('slickPlay');
    var test = $('.slider-box').slick('slickCurrentSlide');
    $(".slider-wrap > .btn-wrap > .num-box>li").eq(test).addClass("active");

  });
  $('.play-btn>.pause').click(function(){
    $(".play-btn>.play").addClass("active");
    $('.play-btn>.pause').removeClass("active"); 
    $('.slider-box').slick('slickPause');
    $(".slider-wrap > .btn-wrap > .num-box>li").removeClass("active");
  });
  // 시작 멈춤 버튼.

  // 슬라이드 넘어가면 이벤트 발생
  $('.slider-box').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if( $(".play-btn>.pause").hasClass("active") ){
      $(".slider-wrap > .btn-wrap > .num-box>li").eq(nextSlide).addClass("active");
      $(".slider-wrap > .btn-wrap > .num-box>li").eq(nextSlide).siblings().removeClass("active");
    }
  });

});