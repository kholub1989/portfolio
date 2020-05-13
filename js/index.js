console.info('🚀fire');

$(document).ready(function () {
  let slidesView = $(window).width() < 900 ? 1 : 2;

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: slidesView,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

$(document).ready(function (e) {
  $(document).on('scroll', onScroll);

  // Smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('nav-active');
    });
    $(this).addClass('nav-active');
    let target = this.hash;
    // var menu = target;
    $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },

        800,
        // 'swing',
        function () {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        }
      );
    e.preventDefault();
  });

  function onScroll(e) {
    const scrollPos = $(document).scrollTop();

    $('.nav a').each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr('href'));

      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.nav ul li a').removeClass('nav-active');
        currLink.addClass('nav-active');
      } else {
        currLink.removeClass('nav-active');
      }
    });
    e.preventDefault();
  }

  // Burger-menu
  $('.burger-menu').click(function (e) {
    $(this).toggleClass('menu-on');
    $('.nav').toggleClass('burger-active');
    e.preventDefault();
  });

  // e.preventDefault();
});
