var buttons = document.querySelectorAll('.button');
var onlineText = document.getElementById("online-text");
var nodataText = document.getElementById("nodata-text");
var shutteddownText = document.getElementById("shutteddown-text");

var onlineGraph = document.getElementById("online");
var nodataGraph = document.getElementById("nodata");
var shuttedDownGraph = document.getElementById("shutteddown");

// Onload
window.onload = fbText.classList.add("blue-text"),
                fbBox.classList.add("white-box"),
                fbElements[0].classList.add("on"),
                fbElements[1].classList.add("on"),
                console.log("caricato");

// Aggiungo event listeners
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', highlightButton, false);
}


// Funzioni
function highlightButton() {
    onlineGraph.classList.remove("on");
    nodataGraph.classList.remove("on");
    shutteddownGraph.classList.remove("on");

    if (this.classList.contains('asd')) {
        onlineGraph.classList.add("on");
    }

    if (this.classList.contains('asd')) {
        nodataGraph.classList.add("on");
    }

    if (this.classList.contains('asd')) {
        shutteddownGraph.classList.add("on");
    }
}   