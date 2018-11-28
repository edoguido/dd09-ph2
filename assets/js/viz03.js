// **           FADE CATEGORIE          ** //

var labels = document.getElementsByClassName('line-label');

for (i = 0; i < labels.length; i++) {
    thisLabel = labels[i];
    thisLabel.addEventListener('mouseover', function (thisLabel) {
        var toIgnore = thisLabel.srcElement;
        for (t = 0; t < labels.length; t++) {
            if (labels[t] != toIgnore) {
                labels[t].parentElement.classList.add('faded');
            }
        }
    }, false);
    thisLabel.addEventListener('mouseout', function () {
        for (t = 0; t < labels.length; t++) {
            labels[t].parentElement.classList.remove('faded');
        }
    }, false);
}


// **           CURSORE GRAFICO          ** //

showCursor();

//          I TACOS CI SALVERANNO TUTTI
//          SE HAI LETTO QUESTO MESSAGGIO
//          SEI STATO VISITATO DAL TACO MAGIKO
//          CONDIVIDI CON ALTRE 20 PERSONE
//          O PREPARATI AD ESSERE SCHERZATO
//          PER IL RESTO DELLA TUA VITA

var cursor;
var cursorTag;
var cursorLabel;

var context = document.getElementById('svg-box');
var svg = document.getElementsByTagName('svg')[0];
var svgHeight;

function setAttributes(svgEl, attributes, values) {
    for (i = 0; i < attributes.length; i++) {
        svgEl.setAttribute(attributes[i], values[i]);
    }
}

function showCursor() {
    cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var lineAttributes = ['id', 'x1', 'y1', 'x2', 'y2', 'stroke'];
    var lineValues = ['cursor', 0, 0, 0, 0, 'black'];
    setAttributes(cursor, lineAttributes, lineValues);

    cursorTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    var tagAttributes = ['id', 'x', 'y', 'width', 'height', 'fill'];
    var tagValues = ['tag', 0, 0, 120, 72, 'blue'];
    setAttributes(cursorTag, tagAttributes, tagValues);
    
    cursorLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var labelAttributes = ['id', 'x', 'y', 'fill'];
    var labelValues = ['tag-label', '50', '50', 'white'];
    cursorLabel.innerHTML = '0';
    setAttributes(cursorLabel, labelAttributes, labelValues);

    document.getElementsByTagName('svg')[0].appendChild(cursor);
    document.getElementsByTagName('svg')[0].appendChild(cursorTag);
    document.getElementsByTagName('svg')[0].appendChild(cursorLabel);

}

document.addEventListener('mousemove', function () {
    updateCursor(event, cursor);
    updateCursor(event, cursorTag);
    updateCursor(event, cursorLabel);
}, false);

function updateCursor(e, el) {
    var x = e.clientX;
    var y = e.clientY;
    var svgCoord = svgPoint(cursor, x, y);
    svgHeight = svg.viewBox.baseVal.height;

    var mouseCoordSvg = svgPoint(cursorTag, x, y);

    var grid = document.getElementById('griglia');
    var gridLeft = grid.getBoundingClientRect().left;
    var gridRight = grid.getBoundingClientRect().right;

    if (gridLeft < x && x < gridRight) {
        el.classList.add('show');
    } else {
        el.classList.remove('show');
    };

    var newAttributes = ['x1', 'x2', 'y1', 'y2'];
    var newValues = [svgCoord.x, svgCoord.x, 100, svgHeight];

    var newAttributesTag = ['x', 'y'];
    var newXTag = mouseCoordSvg.x - cursorTag.getAttribute('width') / 2;
    var newYTag = mouseCoordSvg.y - cursorTag.getAttribute('height') - 12;
    var newValuesTag = [newXTag, newYTag];

    var newAttributesLabel = ['x', 'y'];
    var newValuesLabel = [svgCoord.x - (cursorLabel.clientWidth / 2), mouseCoordSvg.y - cursorLabel.clientHeight * 2];

    for (i = 0; i < newAttributes.length; i++) {
        setAttributes(cursor, newAttributes, newValues);
    }
    for (i = 0; i < newAttributesTag.length; i++) {
        setAttributes(cursorTag, newAttributesTag, newValuesTag);
    }
    for (i = 0; i < newAttributesLabel.length; i++) {
        setAttributes(cursorLabel, newAttributesLabel, newValuesLabel);
    }
}

function updateLabelValue() {
    
}

// still not used
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// translate page to SVG co-ordinate
function svgPoint(element, x, y) {
    var pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    var output = pt.matrixTransform(element.getScreenCTM().inverse());
    // we only need x coordinate
    return output;
}