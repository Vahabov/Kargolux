$(function () {
  //convert img to svg
  SVGInject(document.querySelectorAll("img.injectable"));

  if ($(".owl-carousel")[0]) {
    $(".main_slider_section .owl-carousel").owlCarousel({
      margin: 0,
      loop: true,
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
          loop: true,
        },
        1200: {
          items: 1,
          nav: true,
          loop: true,
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
  }

  $(document).on("keydown", function (event) {
    if (event.keyCode == 27) {
      $(".my_modal").fadeOut("fast");
    }
  });
  var modalCenter = $(".modal_center");
  var notifyModal = $(".overlay_modal");
  for (let i = 0; i < modalCenter.length; i++) {
    const element = modalCenter[i];
    $(window).click(function (e) {
      if (e.target == element) {
        $(".my_modal").fadeOut("fast");
      }
    });
  }
  for (let i = 0; i < notifyModal.length; i++) {
    const element = notifyModal[i];
    $(window).click(function (e) {
      if (e.target == element) {
        $(".notify_modal").fadeOut("fast");
        $("body").removeClass("hidden");
      }
    });
  }
  var owlCustomer = $(".customer_ratings_section .owl-carousel");
  if ($(window).width() < 768) {
    owlCustomer.trigger("destroy.owl.carousel");
    owlCustomer.addClass("off");
  }

  var menuOverlay = $(".overlay_inner")[0];
  var menuOverlayCabinet = $(".overlay_inner_cabinet")[0];

  $(window).on("click", function (e) {
    $(".select_box_in").fadeOut("fast");
    if (e.target == menuOverlay) {
      $(".overlay_inner").removeClass("active_menu");
      setTimeout(() => {
        $(".mobile_overlay").fadeOut("fast");
      }, 200);
    }
    if (e.target == menuOverlayCabinet) {
      $(".overlay_inner_cabinet").removeClass("active_menu");
      setTimeout(() => {
        $(".mobile_cabinet_overlay").fadeOut("fast");
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

  $(".btnCabinetMenu").on("click", function (e) {
    e.stopPropagation();
    $(".mobile_cabinet_overlay").fadeIn("fast");
    setTimeout(() => {
      $(".overlay_inner_cabinet").addClass("active_menu");
    }, 200);
  });

  $(".close_menu").on("click", function () {
    $(".overlay_inner").removeClass("active_menu");
    $(".overlay_inner_cabinet").removeClass("active_menu");
    setTimeout(() => {
      $(".mobile_overlay").fadeOut("fast");
      $(".mobile_cabinet_overlay").fadeOut("fast");
    }, 200);
  });

  $(document).on("click", ".btn_popup", function (e) {
    e.stopPropagation();
    let dataId = $(this).attr("data-id");
    $(".my_modal").fadeOut("fast");
    $(`#${dataId}`).fadeIn("fast");
  });

  $(document).on("click", ".close_modal", function () {
    $(".my_modal").fadeOut("fast");
  });

  $(document).on("click", ".btn_select", function (e) {
    e.stopPropagation();
    let nowValue = $(this).find(".select_value");
    $(this).siblings(".select_box_in").stop().fadeToggle("fast");
    $(this)
      .siblings(".select_box_in")
      .find(".btn_option")
      .click(function () {
        nowValue.html($(this).attr("data-value"));
        $("#selectedValue").val($(this).attr("data-id"));
        $(".btn_option").removeClass("active_opt");
        $(this).addClass("active_opt");
      });
  });

  $(".question").click(function () {
    $(this).toggleClass("active_question");
    $(this).siblings(".content").stop().slideToggle("fast");
  });

  $(".btn_tab").on("click", function () {
    let thisId = $(this).attr("data-id");
    $(this).parent().find(".btn_tab").removeClass("active_tab");
    $(`#${thisId}`)
      .parents(".tabs_container")
      .find(".tab")
      .removeClass("active_tab");
    $(`#${thisId}`).addClass("active_tab");
    $(this).addClass("active_tab");
  });

  $(".onCopy").on("click", function () {
    let thisVal = $(this).parent().find(".copiedText");
    copyToClipboard(thisVal);
    $(this).find(".copyAlert").fadeIn("fast");
    setTimeout(() => {
      $(this).find(".copyAlert").fadeOut("fast");
    }, 1000);
  });

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  //MESSAGESCROLL
  if ($("#messagesBlock")[0]) {
    $("#messagesBlock").scrollTop($("#messages")[0].scrollHeight + 2);
  }
  //toggle paymentBtn
  // $(".declarations_main .checkbox_label").on("click", function () {
  //   let arrCheck = $(".declarations_main .checkbox_label input");
  //   if ($(arrCheck).is(":checked")) {
  //     $(".toggle_pay").fadeIn("fast");
  //   } else {
  //     $(".toggle_pay").fadeOut("fast");
  //   }
  // });

  $("#factureFile").change(function () {
    var file = $(this)[0].files[0].name;
    $(this).parent().find(".fileName").html(file);
  });

  $(".notify_btn").on("click", function () {
    $("body").addClass("hidden");
    $(this).find(".notify_modal").fadeIn("fast");
  });
  $(".close_notify_modal").on("click", function (e) {
    e.stopPropagation();
    $("body").removeClass("hidden");
    $(".notify_modal").fadeOut("fast");
  });

  //dynamic checkboxes

  $(".selectall").click(function () {
    $(this).parents("table").find(".selectedId").prop("checked", this.checked);
  });

  $(".selectedId").change(function () {
    var check =
      $(".selectedId").filter(":checked").length == $(".selectedId").length;
    $(".selectall").prop("checked", check);
  });
});
