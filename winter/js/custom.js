$(function(){
   $("#date").mask("99.99.9999", {placeholder: "__.__.____" });

   var  $menuWr = $('.js-menu-wr');

   	if(!$menuWr.length) return;

   	var	$menu = $menuWr.find('.js-menu'),
		$menuBtn = $menuWr.find('.js-menu-btn');

	$menuBtn.click(function() {
		$menu.toggleClass('show');
		return false;
	});

	 var  $mapWr = $('.js-map-wr');

   	if(!$mapWr.length) return;

      var $mapBtn = $mapWr.find('.js-map-btn'),
    $mapFlag = $mapWr.find('.js-map-flag'),
    $mapInfo = $mapWr.find('.js-map-info');

  $mapBtn.click(function() {
    var href = $(this).attr('href');
    var id = $(this).index();

      $mapBtn.removeClass('active');
      $(this).toggleClass('active');
      $mapFlag.removeClass('active'); 
      $(href).addClass('active');
      $mapInfo.addClass('hide').eq(id).removeClass('hide');;

      return false;
     });

   $mapFlag.click(function() {
    var id = $(this).index();

      $mapFlag.removeClass('active'); 
      $(this).toggleClass('active');
      $mapBtn.removeClass('active');      
      $mapBtn.eq(id).addClass('active');
      $mapInfo.addClass('hide').eq(id).removeClass('hide');;

      return false;   
  });

	$('.slider-js').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function () {
 $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $('.trainers-slider-js').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function () {
 $('.program-popup-btn').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
    mainClass: 'mfp-fade'
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  $(document).on('click', '.popup-close', function () {
    $.magnificPopup.close();
  });
});

/*Review pop*/
$('.reviews__item-wrapper').click(function () {
    $(this).toggleClass('show-popup');
});

/*Effects */
AOS.init();

/*mansory fix */
var $grid = $('.js-masonry').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    itemSelector: '.photo',
    columnWidth: '.photo',
    gutter: 20,
    percentPosition: true
  });
});

/*to top*/
$(document).ready(function(){

    $(function (){
    $(".to-top").hide();

    $(window).scroll(function (){
      if ($(this).scrollTop() > 700){
        $(".to-top").fadeIn();
      } else{
        $(".to-top").fadeOut();
      }
    });

    $(".to-top").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
    });
  });
});

