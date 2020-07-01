/* ............... Header Toggle Cover ................. */

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      $(".wrapper").css({
        backgroundColor: "transparent",
      });
    } else {
      $(".wrapper").css({
        backgroundColor: "rgba(185, 169, 92, 0.8",
      });
    }
  });
});

/* ............... // Header Toggle Cover .............. */

/* ................. Button Scroll ..................... */

$("a[href='#bottom']").click(function () {
  $("html, body").animate({
      scrollTop: $(document).height(),
    },
    2000
  );
});

$("a[href='#Reservations']").click(function () {
  $("body, html").animate({
      scrollTop: 3410,
    },
    800
  );
});

$(".sbtn").click(function () {
  $("body, html").animate({
      scrollTop: 2015,
    },
    800
  );
});



$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 655) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("a[href='#toTop']").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      2000
    );
  });
});

/* .............. .. Button Scroll ..................... */

/* ................. Menu Toggle .................... */

$(document).ready(function () {
  $("#burger").click(function () {
    $(
      "nav, .menu, .menuCover, .firstLine, .secondLine, .thirdLine"
    ).toggleClass("active");
  });
});

$(document).ready(function () {
  var $width = $(window).width();
  var $clicker_1 = $("clicker_1");
  var $clicker_2 = $("clicker_2");
  var $subMenuList = $("sub-menu_list");
  var $arrow = $(".menuArrow");

  $(".clicker_1, .clicker_2").on({
    click: function () {
      $(".mobile li").slideToggle("slow");
    }
  });

  $(".clicker_1").on({
    click: function (event) {
      $(".arrow_1").css("border-top-color", "#fff").toggleClass("arrRotate");
    },
    mouseenter: function () {
      $("span.arrow_1").css({
        'border-top-color': 'gold'
      });

    },
    mouseleave: function () {
      $(".arrow_1").css({
        'border-top-color': '#fff'
      });
    }
  });

  $(".clicker_2").on({
    click: function (event) {
      $(".arrow_2").toggleClass("arrRotate").css("border-top-color", "#fff");

    },
    mouseenter: function () {
      $(".arrow_2").css({
        'border-top-color': 'gold'
      });
    },
    mouseleave: function () {
      $(".arrow_2").css({
        'border-top-color': '#fff'
      });
    }
  });

});


/* .............. // Menu Toggle ................. */


/*  ................................... Calendar .....................................*/

$(document).ready(function () {
  $("#datepicker")
    .datepicker({
      numberOfMonth: 1,
      changeYear: true,
      changeMonth: true,
      showWeek: true,
      showOtherMonths: true,
      minDate: new Date(2020, 5, 21),
      maxDate: new Date(2021, 0, 1)
    })
    .css({
      color: "green",
    });
});

/*  ................................ // Calendar .....................................*/

// Button "TOP"

//window.onload = function () {
//    var scrolled;
//    var timer;
//    document.getElementById('toTop').onclick = function () {
//        scrolled = window.pageYOffset;
//        scrollToTop();
//    }
//
//    function scrollToTop() {
//        if (scroll > 0) {
//            window.scrollTo(0, scrolled);
//            scrolled = scrolled - 50; //100- швидкість прокрутки
//            timer = setTimeout(scrollToTop, 100);
//        } else {
//            clearTimeout(timer);
//            window.scrollTo(0, 0);
//        }
//    }
//}

/*  ....................... Second block ............................*/

$(document).ready(function () {
  //	$(".rightSide img").click(function(){
  //		$(".dish, .fish, .sweet").addClass("show", 'slow');
  //	});
  $(".rightSide .dish").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".sweet").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .sweet").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".fish").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .fish").click(function () {
    $(".fish").animate({
      top: '-102%'
    }, "slow");
    $(".dish").animate({
      top: '0%'
    }, "slow");
  });
});


/*  ...................... // Second block ..........................*/

/*  ....................... Six block ............................*/


/*  .....................// Six block ............................*/