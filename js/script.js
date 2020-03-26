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

window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('toTop').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scroll > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 50; //100- швидкість прокрутки
            timer = setTimeout(scrollToTop, 100);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}