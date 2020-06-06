$(document).ready(function () {

  // меню бургер
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__nav,.menu__burger--line').toggleClass('active');
    $('body').toggleClass('lock')
  });

  // слайдер benefit
  $('.benefit__slider').slick({
    fade: true,
  });

  // слайдер description
  $('.description__slider').slick({
    fade: true,
    dots: true,
    infinite: false,
  });

  // слайдер reviews
  $('.reviews__slider').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '290px',
    slidesToShow: 1,
    focusOnSelect: true,
  });
  
  // видео
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  $('.video__play1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviews-playerOne', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  $('.video__play1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviews-playerTwo', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  $('.video__play1').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviews-playerThree', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  };

});