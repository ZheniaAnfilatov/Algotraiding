$(document).ready(function () {

  // меню бургер
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__nav,.menu__burger--line').toggleClass('active');
    $('body').toggleClass('lock')
  });
  
  $('.nav__item').click(function(event) {
    $('.menu__burger,.menu__nav,.menu__burger--line').removeClass('active');
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
    autoplay: true,
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

  $('.video__playOne').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviewsPlayerOne', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  $('.video__playTwo').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviewsPlayerTwo', {
      height: '100%',
      width: '100%',
      videoId: 'pT1EpTWPnyo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  $('.video__playThree').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('reviewsPlayerThree', {
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

  // модальное окно
  var popUp = $('.pop-up'),
      closeBtn = $('.pop-up__close'),
      popUpBtn = $('.open__button');

  // появление окна
    popUpBtn.on('click', function () {
      popUp.toggleClass('pop-up--visible');
  });

  // закрывание окна
    closeBtn.on('click', function () {
      popUp.toggleClass('pop-up--visible');
  });

  // закрывание на esc
  $(document).keydown(function(e) {        
    if (e.keyCode == 27) {
      popUp.removeClass('pop-up--visible');
    };
  });
   
  $(document).click(function (e) {
    if ($(e.target).is (popUp)) {
      popUp.toggleClass('pop-up--visible');
    };
  });

  // кнопка наверх
  var btn = $('.button-up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 900);
  });

  // маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00');

  // валидацция формы модального окна
  var popUpThanks = $('.pop-up__thanks');
      closeThanks = $('.pop-up__thanks--close');

  $('.pop-up__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
    },
      // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше 2 символов",
        maxlength: "Не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.pop-up__form').serialize(),
        success: function (response) {
          $(form)[0].reset();
          popUp.removeClass('pop-up--visible');
          popUpThanks.addClass('pop-up__thanks--visible');
          ym('64696480', 'reachGoal', 'request'); return true;
        }
      });
    }
  });

   // закрывание на крестик
   closeThanks.on('click', function () {
    popUpThanks.toggleClass('pop-up__thanks--visible');
  });

  // закрывание на esc
  $(document).keydown(function(e) {        
    if (e.keyCode == 27) {
      popUpThanks.removeClass('pop-up__thanks--visible');
    }
  });
  // закрывание на клик
  $(document).click(function (e) {
    if ($(e.target).is (popUpThanks)) {
      popUpThanks.toggleClass('pop-up__thanks--visible');
    }
  });

  // free form
  $('.free__form').validate({
    errorClass: "mistake",
    errorElement: "div",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
    },
      // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше 2 символов",
        maxlength: "Не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.free__form').serialize(),
        success: function (response) {
          $(form)[0].reset();
          popUp.removeClass('pop-up--visible');
          popUpThanks.addClass('pop-up__thanks--visible');
          ym('64696480', 'reachGoal', 'request'); return true;
        }
      });
    }
  });

  // questions form
  $('.questions__form').validate({
    errorClass: "mistake",
    errorElement: "div",
    ignore: ":disabled",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
    },
      // сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Не меньше 2 символов",
        maxlength: "Не больше 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('.questions__form').serialize(),
        success: function (response) {
          $(form)[0].reset();
          popUp.removeClass('pop-up--visible');
          popUpThanks.addClass('pop-up__thanks--visible');
          ym('64696480', 'reachGoal', 'request'); return true;
        }
      });
    }
  });

// create form
$('.create__section-form').validate({
  errorClass: "invalid",
  errorElement: "div",
  ignore: ":disabled",
  rules: {
    userTool: {
      required: true,
      minlength: 1,
      maxlength: 15
    },
    userProfit: {
      required: true,
      minlength: 1,
      maxlength: 15
    },
    userCount: {
      required: true,
      minlength: 1,
      maxlength: 15
    },
    userSum: {
      required: true,
      minlength: 1,
      maxlength: 15
    },
  },
    // сообщения
  messages: {
    userTool: {
      required: "Заполните поле",
      minlength: "Не меньше 1 символf",
      maxlength: "Не больше 15 символов"
    },
    userProfit: {
      required: "Заполните поле",
      minlength: "Не меньше 1 символf",
      maxlength: "Не больше 15 символов"
    },
    userCount: {
      required: "Заполните поле",
      minlength: "Не меньше 1 символf",
      maxlength: "Не больше 15 символов"
    },
    userSum: {
      required: "Заполните поле",
      minlength: "Не меньше 1 символf",
      maxlength: "Не больше 15 символов"
    },
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $('.create__section-form').serialize(),
      success: function (response) {
        $(form)[0].reset();
        popUpCreate.addClass('pop-up__create--visible');
      }
    });
  }
});

  // create pop-up
  var popUpCreate = $('.pop-up__create');
      closeCreate = $('.pop-up__create--close');

   // закрывание на крестик
   closeCreate.on('click', function () {
    popUpCreate.toggleClass('pop-up__create--visible');
  });

   // закрывание на клик
   $(document).click(function (e) {
    if ($(e.target).is (popUpCreate)) {
      popUpCreate.toggleClass('pop-up__create--visible');
    }
  });

  // закрывание на клик
  $(document).click(function (e) {
    if ($(e.target).is (popUpCreate)) {
      popUpCreate.toggleClass('pop-up__create--visible');
    }
  });
  
  // перемещение по ссылкам
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 80;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
  });

});