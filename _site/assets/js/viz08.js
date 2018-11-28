// var buttons = document.querySelectorAll('.button');
// var onlineText = document.getElementById("online-text");

// // Onload
// window.onload = onlineGraph.classList.add("on"),
//                 onlineText.classList.add("white"),
//                 onlineRect.classList.add("filled"),
//                 console.log("caricato");

// // Aggiungo event listeners
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', highlightButton, false);
// }


//------
//------ LISTENERS
//------ a tutti i .circles (sono gruppi che contengono tutti i cerchi)
var circles = document.querySelectorAll('.circles');
var arrows = document.querySelectorAll('.arrows');
var toggle = document.getElementById('toggle');

for (i = 0; i < circles.length; i++) {
    circles[i].addEventListener('mouseover', highlightOn, false);
    circles[i].addEventListener('mouseout', highlightOff, false);
}

//------
//------ FUNCTIONS HIGHLIGHTACOS
//------
function highlightOn() {
    var circleToIgnore;

    //------controlla se tutti gli altri dots hanno la categoria del dot sul quale si trova il mouse
    for (t = 0; t < circles.length; t++) {
        //------controlla su quale pallino è hover
        if (circles[t].matches('.circles:hover')) {
            circleToIgnore = t;
            console.log(t + " tacos")
            arrows[t].classList.add("stroke-on");
        } else if (t != circleToIgnore) {
            circles[t].classList.add("off");
            arrows[t].classList.add("off");
        }
    }
}

function highlightOff() {
    for (i = 0; i < circles.length; i++) {
        circles[i].classList.remove("off");
        arrows[i].classList.remove("off");
        arrows[i].classList.remove("stroke-on");
    }
}

//------
//------ TOGGLE
//------

$(document).ready(function(){
    $("#toggle-button").mouseenter(function(){
        $(".hl-red").toggleClass("toggle-on"),
        $(".fade").toggleClass("faded");
        $(".toggle-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $("#toggle-button").mouseleave(function(){
        $(".hl-red").toggleClass("toggle-on"),
        $(".fade").toggleClass("faded");
    });
});

// $(function(){
//     $('#toggle-button').hover(function() {
//         console.log("fired"),
//       $('.hl-red').removeClass('toggle-on'),
//       $('.toggle-box').addClass('toggle-box-on');
//     }, function() {
//         console.log("watered"),
//       $('.hl-red').addClass('toggle-on');
//     })
//   })