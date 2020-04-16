/* ............... Header Toggle Cover ................. */

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll == 0) {
            $(".wrapper").css({
                "backgroundColor": "transparent"
            });
        } else {
            $(".wrapper").css({
                "backgroundColor": "rgba(185, 169, 92, 0.8"
            });
        }
    });
});

/* ............... // Header Toggle Cover .............. */

/* ................. Button Scroll ..................... */

$("a[href='#bottom']").click(function () {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, 2000);
});

$(".sbtn").click(function () {
    $("body, html").animate({
        scrollTop: 2015
    }, 800);
});

$("a[href='#toTop']").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 2000);
});

/* .............. .. Button Scroll ..................... */

/* ................. Menu Toggle .................... */

$(document).ready(function () {
    $("#burger").click(function () {
        $("nav, .menu, .menuCover, .firstLine, .secondLine, .thirdLine").toggleClass('active');
    });
});

/* .............. // Menu Toggle ................. */



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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