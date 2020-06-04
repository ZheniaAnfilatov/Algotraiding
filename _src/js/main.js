$(document).ready(function () {

  // меню бургер
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__nav,.menu__burger--line').toggleClass('active');
    $('body').toggleClass('lock')
  });

  // слайдер
  $('.benefit__slider').slick({
    fade: true,
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

  function videoPlay(event) {
    event.target.playVideo();
  };

});