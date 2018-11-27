var buttons = document.querySelectorAll('.button');
var onlineText = document.getElementById("online-text");
var nodataText = document.getElementById("nodata-text");
var shutteddownText = document.getElementById("shutteddown-text");

var onlineGraph = document.getElementById("online");
var nodataGraph = document.getElementById("nodata");
var shutteddownGraph = document.getElementById("shutteddown");

var onlineRect = document.getElementById("online-box")
var nodataRect = document.getElementById("nodata-box")
var shutteddownRect = document.getElementById("shutteddown-box")

var divider = document.getElementById("rect-divider");



// Onload
var directEl = document.querySelectorAll('.direct');
var searchEl = document.querySelectorAll('.search');

window.onload = onlineGraph.classList.add("on"),
                onlineText.classList.add("white"),
                onlineRect.classList.add("filled"),
                console.log("caricato");

// Aggiungo event listeners
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', highlightButton, false);
}


// Funzioni
function highlightButton() {
    // console.log("click");
    onlineGraph.classList.remove("on");
    nodataGraph.classList.remove("on");
    shutteddownGraph.classList.remove("on");

    onlineRect.classList.remove("filled");
    nodataRect.classList.remove("filled");
    shutteddownRect.classList.remove("filled");
    
    onlineText.classList.remove("white");
    nodataText.classList.remove("white");
    shutteddownText.classList.remove("white");

    if (this.classList.contains('online')) {
        onlineGraph.classList.add("on");
        onlineRect.classList.add("filled");
        divider.style.fill = "#0000FF";
        onlineText.classList.add("white");
    }

    if (this.classList.contains('nodata')) {
        nodataGraph.classList.add("on");
        nodataRect.classList.add("filled");
        divider.style.fill = "#7f7fff";
        nodataText.classList.add("white");
    }

    if (this.classList.contains('shutteddown')) {
        shutteddownGraph.classList.add("on");
        shutteddownRect.classList.add("filled");
        divider.style.fill = "CE3B19";
        shutteddownText.classList.add("white");
    }
}   

/* ------------------------------------------- */
/* -----------       TOGGLES       ----------- */
/* ------------------------------------------- */

$(document).ready(function(){
    $("#direct").click(function(){
        $(".direct").toggleClass("direct-on");
        $(".direct-numbers").toggleClass("numbers-on");
        $(".direct-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#referrals").click(function(){
        $(".referrals").toggleClass("referrals-on");
        $(".referrals-numbers").toggleClass("numbers-on");
        $(".referrals-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#search").click(function(){
        $(".search").toggleClass("search-on");
        $(".search-numbers").toggleClass("numbers-on");
        $(".search-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#social").click(function(){
        $(".social").toggleClass("social-on");
        $(".social-numbers").toggleClass("numbers-on");
        $(".social-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#mail").click(function(){
        $(".mail").toggleClass("mail-on");
        $(".mail-numbers").toggleClass("numbers-on");
        $(".mail-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#display").click(function(){
        $(".display").toggleClass("display-on");
        $(".display-numbers").toggleClass("numbers-on");
        $(".display-box").toggleClass("box-on");
    });
});

