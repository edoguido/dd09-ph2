var wikiPages = document.querySelectorAll('.page-entry');

for (i = 0; i < wikiPages.length; i++) {
    var currentPage = wikiPages[i];

    currentPage.addEventListener('mouseover', highlightSingleOn, false);
    currentPage.addEventListener('mouseout', highlightSingleOff, false);
}

function highlightSingleOn() {
    var toIgnore;
    for (t = 0; t < wikiPages.length; t++) {
        if (wikiPages[t].matches('.page-entry:hover')) {
            toIgnore = t;
        } else if (t != toIgnore) {
            wikiPages[t].classList.add("faded");
        }
    }
}

function highlightSingleOff() {
    for (i = 0; i < wikiPages.length; i++) {
        wikiPages[i].classList.remove('faded');
    }
}

// ---------------------------------------------------

var lawsRect = document.querySelectorAll('.single-law');
var datesLines = document.querySelectorAll('.date-line');

for (i = 0; i < lawsRect.length; i++) {
    lawsRect[i].addEventListener('mouseover', highlightThisOn, false);
    lawsRect[i].addEventListener('mouseout', highlightThisOff, false);
}

function highlightThisOn() {
    var toIgnore;
    for (t = 0; t < lawsRect.length; t++) {
        if (lawsRect[t].matches('.single-law:hover')) {
            toIgnore = t;
            datesLines[t].classList.add("stroke-3");
        } else if (t != toIgnore) {
            datesLines[t].classList.add("faded");
        }
    }
}

function highlightThisOff() {
    for (i = 0; i < lawsRect.length; i++) {
        datesLines[i].classList.remove("faded");
        datesLines[i].classList.remove("stroke-3");
    }
}

// ---------------------------------------------------

pageIndicators = document.querySelectorAll('.page-length-indicator');

for (i = 0; i < pageIndicators.length; i++) {
    pageIndicators[i].addEventListener('mouseover', showTooltip(), false);
}

function showTooltip(e, c) {
    for (t = 0; t < pageIndicators.length; t++) {
        if (pageIndicators[t].matches('.page-length-indicator:hover')) {
            console.log('hola, buen camino!');
            var tooltip = document.createElement("div");
            var c = document.createTextNode(e);

            t.appendChild(c);
            // document.body.appendChild(t);
        }
    }
}
showTooltip();

document.addEventListener('mousemove', followMe, false)

function followMe() {

};