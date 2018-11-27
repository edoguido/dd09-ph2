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

entries = document.querySelectorAll('.page-entry');

// for (i = 0; i < entries.length; i++) {
//     entries[i].addEventListener('mousemove', summonTooltip, false);
//     entries[i].addEventListener('mouseout', hideTooltip, false);
// }

var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

createds = document.querySelectorAll('.page-entry polygon.st7');
for (i = 0; i < createds.length; i++) {
    entries[i].addEventListener('mousemove', (event) => {
        for (t = 0; t < createds.length; t++) {
            anchoredTooltip(event, createds[t]);
        }
    }, false);
}

function anchoredTooltip(event, el) {
    console.log(el.getBoundingClientRect().left);
    var x = el.getBoundingClientRect().left;
    var y = event.clientY;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    summonTooltip();
}

// function followTooltip(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     tooltip.style.left = x + 'px';
//     tooltip.style.top = y + 'px';
// }
// document.addEventListener('mousemove', function(event) {
//     followTooltip(event);
// }, false);


function summonTooltip(text) {
    for (t = 0; t < entries.length; t++) {
        if (entries[t].matches('.page-entry:hover')) {
            text = entries[t].getAttribute("js-creation-date");
            tooltip.innerHTML = text;
            tooltip.classList.add('summon');
        }
    }
}

function hideTooltip() {
    setTimeout(() => {
        tooltip.classList.remove('summon');
    }, 0);
}