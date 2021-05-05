$(function () {
  //convert img to svg
  SVGInject(document.querySelectorAll("img.injectable"));

  $(".main_slider_section .owl-carousel").owlCarousel({
    margin: 0,
    // loop: true,
    nav: true,
    // infinite: true,
    autoWidth: false,
    items: 1,
    animateOut: "fadeOut",
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  var menuOverlay = $(".overlay_inner")[0];

  $(window).on('click',function (e) {
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
