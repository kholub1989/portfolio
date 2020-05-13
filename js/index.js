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

// //Page cursors
// document
//   .getElementsByTagName('body')[0]
//   .addEventListener('mousemove', function (n) {
//     (t.style.left = n.clientX + 'px'),
//       (t.style.top = n.clientY + 'px'),
//       (e.style.left = n.clientX + 'px'),
//       (e.style.top = n.clientY + 'px'),
//       (i.style.left = n.clientX + 'px'),
//       (i.style.top = n.clientY + 'px');
//   });
// var t = document.getElementById('cursor'),
//   e = document.getElementById('cursor2'),
//   i = document.getElementById('cursor3');
// function n(t) {
//   e.classList.add('hover'), i.classList.add('hover');
// }
// function s(t) {
//   e.classList.remove('hover'), i.classList.remove('hover');
// }
// s();
// for (
//   var r = document.querySelectorAll('.hover-target'), a = r.length - 1;
//   a >= 0;
//   a--
// ) {
//   o(r[a]);
// }
// function o(t) {
//   t.addEventListener('mouseover', n), t.addEventListener('mouseout', s);
// }

// $(function () {
//   $('a[href*=#]:not([href=#])').click(function () {
//     if (
//       location.pathname.replace(/^\//, '') ==
//         this.pathname.replace(/^\//, '') &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html,body').animate(
//           {
//             scrollTop: target.offset().top,
//           },
//           800
//         );
//         return false;
//       }
//     }
//   });
// });

// $(window).scroll(function () {
//   var hT = $('#about').offset().top,
//     hH = $('#about').outerHeight(),
//     wH = $(window).height(),
//     wS = $(this).scrollTop();
//   if (wS > hT + hH - wH) {
//     alert('you have scrolled to the about section!');
//   }
// });

// $(window).scroll(function () {
//   if ($('#about').offset().top) {
//     $('.about__text').animate(
//       {
//         width: '50%',
//       },

//       5000
//     );
//   }
// });
