$(function () {
  //convert img to svg
  SVGInject(document.querySelectorAll("img.injectable"));

  $(".main_slider_section .owl-carousel").owlCarousel({
    margin: 0,
    // loop: true,
    nav: true,
    autoWidth: false,
    items: 1,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        // loop: true,
      },
      1200: {
        items: 1,
        nav: true,
        // loop: true,
      },
    },
  });
  $(".partners_carousel_section .owl-carousel").owlCarousel({
    margin: 40,
    loop: true,
    nav: true,
    autoWidth: false,
    dots: false,
    items: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    animateIn: "linear",
    animateOut: "linear",
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      700: {
        items: 2,
        nav: false,
        loop: true,
      },
      1000: {
        items: 6,
        dots: false,
        nav: true,
      },
    },
  });

  $(".customer_ratings_section .owl-carousel").owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    autoWidth: false,
    dots: true,
    items: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    animateIn: "linear",
    animateOut: "linear",
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      1000: {
        items: 2,
        dots: true,
        nav: false,
      },
      1250: {
        items: 3,
        nav: false,
        loop: true,
        dots: true,
      },
    },
  });

  var owlCustomer = $(".customer_ratings_section .owl-carousel");
  if ($(window).width() < 768) {
    owlCustomer.trigger("destroy.owl.carousel");
    owlCustomer.addClass("off");
  }

  var menuOverlay = $(".overlay_inner")[0];

  $(window).on("click", function (e) {
    if (e.target == menuOverlay) {
      $(".overlay_inner").removeClass("active_menu");
      setTimeout(() => {
        $(".mobile_overlay").fadeOut("fast");
      }, 200);
    }
  });

  $(".mobile_btn_menu").on("click", function (e) {
    e.stopPropagation();
    $(".mobile_overlay").fadeIn("fast");
    setTimeout(() => {
      $(".overlay_inner").addClass("active_menu");
    }, 200);
  });
  $(".close_menu").on("click", function () {
    $(".overlay_inner").removeClass("active_menu");
    setTimeout(() => {
      $(".mobile_overlay").fadeOut("fast");
    }, 200);
  });
});
