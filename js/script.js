/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Progress Bars
============================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});



/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/logoMoebius2.jpg");  
            
            
        

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logoMoebius2.jpg");
            

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});

/* =========================================
              Mobile Menu
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});


/* =========================================
               1
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: 300, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    


  /* =========================================
               2
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider2 ul li').length;
      var slideWidth = $('#slider2 ul li').width();
      var slideHeight = $('#slider2 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider2').css({ width: 300, height: slideHeight });
      
      $('#slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider2 ul li:last-child').prependTo('#slider2 ul');
  
      function moveLeft() {
          $('#slider2 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider2 ul li:last-child').prependTo('#slider2 ul');
              $('#slider2 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider2 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider2 ul li:first-child').appendTo('#slider2 ul');
              $('#slider2 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  

  /* =========================================
               3
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider3 ul li').length;
      var slideWidth = $('#slider3 ul li').width();
      var slideHeight = $('#slider3 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider3').css({ width: 300, height: slideHeight });
      
      $('#slider3 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider3 ul li:last-child').prependTo('#slider3 ul');
  
      function moveLeft() {
          $('#slider3 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider3 ul li:last-child').prependTo('#slider3 ul');
              $('#slider3 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider3 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider3 ul li:first-child').appendTo('#slider3 ul');
              $('#slider3 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  

  /* =========================================
               4
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider4 ul li').length;
      var slideWidth = $('#slider4 ul li').width();
      var slideHeight = $('#slider4 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider4').css({ width: 300, height: slideHeight });
      
      $('#slider4 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider4 ul li:last-child').prependTo('#slider4 ul');
  
      function moveLeft() {
          $('#slider4 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider4 ul li:last-child').prependTo('#slider4 ul');
              $('#slider4 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider4 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider4 ul li:first-child').appendTo('#slider4 ul');
              $('#slider4 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    


  /* =========================================
               5
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider5 ul li').length;
      var slideWidth = $('#slider5 ul li').width();
      var slideHeight = $('#slider5 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider5').css({ width: 300, height: slideHeight });
      
      $('#slider5 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider5 ul li:last-child').prependTo('#slider5 ul');
  
      function moveLeft() {
          $('#slider5 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider5 ul li:last-child').prependTo('#slider5 ul');
              $('#slider5 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider5 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider5 ul li:first-child').appendTo('#slider5 ul');
              $('#slider5 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    


  /* =========================================
               6
============================================ */

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider6 ul li').length;
      var slideWidth = $('#slider6 ul li').width();
      var slideHeight = $('#slider6 ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider6').css({ width: 300, height: slideHeight });
      
      $('#slider6 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider6 ul li:last-child').prependTo('#slider6 ul');
  
      function moveLeft() {
          $('#slider6 ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider6 ul li:last-child').prependTo('#slider6 ul');
              $('#slider6 ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider6 ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider6 ul li:first-child').appendTo('#slider6 ul');
              $('#slider6 ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    


   // carousel informes

   const buttonPrev = document.getElementById('button-prev');
   const buttonNext = document.getElementById('button-next');
   const track = document.getElementById('track');
   const slickList = document.getElementById('slick-list');
   const slick = document.querySelectorAll('.slick');

   const slickWidth = slick[0].offsetWidth;

   buttonPrev.onclick = () => Move(1);
   buttonNext.onclick = () => Move(2);

   function Move(value) {
    
       const trackWidth = track.offsetWidth;
       const listWidth = slickList.offsetWidth;

       
       track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1 );
       
       
       if(leftPosition < (trackWidth - listWidth) && value == 2) {
       
           track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
       } else if (leftPosition > 0 && value == 1) {
       
           track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
       }
   }
