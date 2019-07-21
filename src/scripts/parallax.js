import $ from "jquery";

$(document).ready(function() {
  let windowWidth = $(window).width();

  $(window).resize(function() {
    // This will execute whenever the window is resized
    windowWidth = $(window).width(); // New width
    if (windowWidth < 767) {
      $(".burger-nav-burger").css({ display: "block" });
      $(".overlay").css({ display: "block" });
      $(".headings").css({ display: "block" });
    }
  });

  $(window).scroll(function() {
    console.log("windowWidth===>", windowWidth);

    if (windowWidth > 767) {
      console.log("windowWidthXXXXX/", windowWidth);

      const wScroll = $(this).scrollTop();

      const section1HalfHeight = $(".section-1").height() / 2;
      const section1QuarterHeight = $(".section-1").height() / 4;

      //to disappear overlay and headings
      if (wScroll > 10) {
        $(".section-1").addClass("fixed");
        $(".section-1").removeClass("position-relative");
        $(".navigation").css({ background: "none" });
        $(".burger-nav-burger").css({ display: "none" });
        // $(".navigation ul li i").css({ opacity: 0.4 });
      }

      if (wScroll > section1QuarterHeight - 125) {
        $(".overlay").css({ display: "none" });
      } else {
        $(".overlay").css({ display: "block" });
      }

      if (wScroll > section1QuarterHeight - 115) {
        $(".headings").css({ display: "none" });
      } else {
        $(".headings").css({ display: "block" });
      }

      //Time to appear the soup
      if (wScroll > section1QuarterHeight - 100) {
        $(".soup").css({ display: "block" });
      } else {
        $(".soup").css({ display: "none" });
      }

      //Time to appear the mustard
      if (wScroll > section1QuarterHeight - 50) {
        $(".mustard").css({ display: "block" });
      } else {
        $(".mustard").css({ display: "none" });
      }

      //Time to appear the bread
      if (wScroll > section1QuarterHeight) {
        $(".bread").css({ display: "block" });
      } else {
        $(".bread").css({ display: "none" });
      }

      //Time to appear the fork
      if (wScroll > section1QuarterHeight + 50) {
        $(".fork").css({ display: "block" });
      } else {
        $(".fork").css({ display: "none" });
      }

      //Time to appear the knife
      if (wScroll > section1QuarterHeight + 100) {
        $(".knife").css({ display: "block" });
      } else {
        $(".knife").css({ display: "none" });
      }

      //Time to appear for the prawn 1
      if (wScroll > section1HalfHeight) {
        $(".prawn-1").css({ display: "block" });
      } else {
        $(".prawn-1").css({ display: "none" });
      }

      //Time to appear for the prawn 2
      if (wScroll > section1HalfHeight + 50) {
        $(".prawn-2").css({ display: "block" });
      } else {
        $(".prawn-2").css({ display: "none" });
      }

      //Time to appear for the prawn 3
      if (wScroll > section1HalfHeight + 100) {
        $(".prawn-3").css({ display: "block" });
      } else {
        $(".prawn-3").css({ display: "none" });
      }

      if (wScroll > section1HalfHeight + 150) {
        $(".section-1").removeClass("fixed");
        $(".section-1").addClass("position-relative");
        $(".navigation").css({ background: "#000", opacity: 0.4 });
        $(".navigation ul li i").css({ opacity: 1 });
        $(".menu-item").css({ opacity: 1 });
        // $(".rest-content").css({ display: "block" });
        // $(".extra-div").css({ display: "none" });
      } else {
        // $(".rest-content").css({ display: "none" });
        // $(".extra-div").css({ display: "block" });
      }
      //scroll to play the footer background video
      const section6alfHeight = $(".section-6").height() / 2;
      if (wScroll > $(".section-6").offset().top - $(window).height() / 1.2) {
        if (wScroll > section6alfHeight - 100) {
          console.log("PHANTOM");
          const video = document.getElementById("footerVideo");
          video.playbackRate = 1;
          video.play();
          // $(".navigation").css({ background: "none" });
        }
      }
    } else {
      $(".section-1").removeClass("fixed");
    }
  });

  //To change switch toggle navigation button
  $(".openNav").click(function() {
    console.log("PORKY BEATS");
    $(".burger-nav-burger").css({ display: "none" });
    $(".close-nav-bar").css({ display: "block" });
    $(".navigation-mobile").css({ display: "block" });
  });

  //To change switch toggle navigation button
  $(".closeNav").click(function() {
    console.log("CHOPA BEATS");
    $(".burger-nav-burger").css({ display: "block" });
    $(".close-nav-bar").css({ display: "none" });
    $(".navigation-mobile").css({ display: "none" });
  });
});
