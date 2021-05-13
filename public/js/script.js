//CODE TO MAKE PAGES SCROLL AND HIGHLIGHT BUTTONS WHEN HOVERED OVER
$(document).ready(function () {
  // TOGGLE MOBILE MENU
  $('[data-toggle="toggle-nav"]').on("click", function () {
    $(this)
      .closest("nav")
      .find($(this).attr("data-target"))
      .toggleClass("hidden");
    return false;
  });

  // FEATHER ICONS
  feather.replace();

  // SMOTH SCROLLING
  var scroll = new SmoothScroll('a[href*="#"]');

  // TINY SLIDER
  $("#slider-1").slick({
    infinite: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });

  $("#slider-2").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    customPaging: function (slider, i) {
      return (
        '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' +
        i +
        "> </div>"
      );
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//ARRAY TO STORE PHOTOS VIA "imgbb.com" AND THEN TO ACCESS IN "index.html"
var imgArray = new Array();

//TEACHER DOESNT ROUND
//
// AUTHOR: u/Arcrivaille
// DATE ACCESSED: MARCH 9TH, 2021
// DESCRIPTION: MEME OF TEACHER NOT ROUNDING GRADE TO AN A
// URL: https://www.reddit.com/r/me_irl/comments/4mbinw/me_irl/
//
imgArray[0] = document.createElement("img");
imgArray[0].src =
  "https://i.ibb.co/Y2N0qgR/yoann-siloine-dyax-Q-ao-GWY-unsplash.jpg";
var src = document.getElementById("meme1");
src.appendChild(imgArray[0]);

//AP TESTS
//
// AUTHOR: BUZZFEED
// DATE ACCESSED: MARCH 10TH, 2021
// DESCRIPTION: THE AP TESTS ARE SAD AND ONLINE TESTING IS NOT SO GREAT
// URL: https://img.buzzfeed.com/buzzfeed-static/static/2019-07/5/19/tmp/7d3f4da44016/tmp-name-2-5102-1562356722-0_dblbig.jpg
//
imgArray[1] = document.createElement("img");
imgArray[1].src =
  "https://i.ibb.co/89tGHZ6/nicholas-kwok-VBWWsc-Ztsz-Y-unsplash.jpg";

var src_1 = document.getElementById("meme2");
src_1.appendChild(imgArray[1]);

//BRAIN GOING IDK
//
// AUTHOR: PINTEREST
// DATE ACCESSED: MARCH 10TH, 2021
// DESCRIPTION: BRAIN GOING IDK WHEN ACTUALLY NEEDED FOR A TEST
// URL: https://i.pinimg.com/474x/d6/17/ec/d617ecef3626b66a06924dce22e470e6--navajo-language-how-about-me.jpg
//
imgArray[2] = document.createElement("img");
imgArray[2].src = "https://i.ibb.co/KsKtB7B/meme.jpg";
var src_2 = document.getElementById("meme3");
src_2.appendChild(imgArray[2]);
