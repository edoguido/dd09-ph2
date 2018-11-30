var cluster = document.querySelectorAll('.opinion-cluster');

for (var i = 0; i < cluster.length; i++) {
    thisCluster = cluster[i];
    thisCluster.addEventListener('mouseover', function (thisCluster) {
        var toIgnore = thisCluster.srcElement.parentElement;
        for (t = 0; t < cluster.length; t++) {
            if (cluster[t] != toIgnore) {
                cluster[t].classList.add('fade');
                tooltip.classList.add('summon');
            }
            injectComment(toIgnore, tooltip);
        }
    }, false);
    thisCluster.addEventListener('mouseout', function () {
        for (t = 0; t < cluster.length; t++) {
            cluster[t].classList.remove('fade');
            tooltip.classList.remove('summon');
        }
    }, false);
}

var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);

document.addEventListener('mousemove', function () {
    updateTooltipPos(event, tooltip);    
    // var currentDepth = checkDepth(event, gridYLevels);
    // var currentOpinion = checkOpinion(event, gridXLevels);
    // console.log("Current depth: " + currentDepth);
}, false)

function updateTooltipPos(e, el) {
    var x = e.clientX;
    var y = e.clientY;
    
    el.style.left = x + 'px';
    el.style.top = y + 'px';

    return {
        x: x,
        y: y
    }
}
function injectComment(data, target) {
    // console.log(data);
    var attribute = data.getAttribute('js-comment');
    target.innerHTML = attribute;
}

// var grid = document.getElementById('griglia');
// var gridYLevels = getLevelCoordinates('h-line');
// var gridXLevels = getLevelCoordinates(gridWidth, 13);

// document.addEventListener('resize', function () {
//     gridHeight = grid.getBoundingClientRect().height;
//     gridWidth = grid.getBoundingClientRect().width;
//     gridYLevels = getLevelCoordinates(gridHeight, 9);
//     gridXLevels = getLevelCoordinates(gridWidth, 13);
// }, false);

// function checkDepth(e, levels) {
//     var y = e.clientY;
//     // var ysvg = svgPoint(grid, 0, y);
//     for (var i = 0; i < levels.length; i++) {
//         if (y > levels[i] && y < levels[i + 1] && levels[i] != levels[levels.length - 1]) {
//             console.log(i + 1);
//             return i + 1;
//         }
//     }
// }

// function checkOpinion(e, opinions) {
//     var x = e.clientX;
//     // console.log(x);
//     // var xsvg = svgPoint(grid, x, 0);
//     // console.log(xsvg.x);
//     for (var i = 0; i < opinions.length; i++) {
//         if (x > opinions[i] && x < opinions[i + 1] && opinions[i] != opinions[opinions.length - 1]) {
//             // console.log(i + 1);
//             return i + 1;
//         }
//     }
// }

// function getLevelCoordinates(elClass) {
//     // var unit = size / levels;
//     // var sizes = []
//     // for (var i = 1; i <= levels; i++) {
//     //     var thisLevel = unit * i;
//     //     sizes.push(thisLevel);
//     // }
//     var elements = document.getElementsByClassName(elClass);
//     var sizes = [];
//     // console.log(elements);
//     for (var i = 0; i < elements.length; i++) {
//         sizes.push(svgPoint(elements[i], elements[i].getBoundingClientRect().left, elements[i].getBoundingClientRect().top).y);
//         console.log(sizes[i]);
//     }
//     return sizes;
// }


// translate page to SVG co-ordinate
function svgPoint(element, x, y) {
    var pt = document.getElementsByTagName('svg')[0].createSVGPoint();
    pt.x = x;
    pt.y = y;
    var output = pt.matrixTransform(element.getScreenCTM().inverse());
    return output;
}

function loadJSON(callback) {

    var file = 'my_data.json';
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}