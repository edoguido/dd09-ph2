var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);
toolTxt = document.createElement('p');
tooltip.appendChild(toolTxt);

document.addEventListener('mousemove', function (event) {
    updateTooltipPos(event, tooltip);
}, false)

function updateTooltipPos(e, el) {
    var x = e.clientX;
    var y = e.clientY;

    elWidth = el.getBoundingClientRect().width + 20;
    elLeft = el.getBoundingClientRect().left;

    elHeight = el.getBoundingClientRect().height + 20;
    elBottom = el.getBoundingClientRect().bottom;

    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;

    // console.log(clientWidth - elWidth);
    // console.log(elLeft);

    if (clientWidth - x <= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y - elHeight - 20 + 'px';

    } else if (clientWidth - x >= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x + 'px'
        el.style.top = y - (y + elHeight - clientHeight) + 'px';

    } else if (clientWidth - x <= elWidth && clientHeight - y >= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y + 'px';

    } else if (x < clientWidth - elWidth || y < clientWidth - elWidth) {
            el.style.left = x + 'px';
            el.style.top = y + 'px';
    }

    return {
        x: x,
        y: y
    }
}

var ball = document.querySelectorAll('.websites');

for (var i = 0; i < ball.length; i++) {
    thisBall = ball[i];
    thisBall.addEventListener('mouseover', function (thisBall) {
        var toIgnore = thisBall.srcElement.parentElement;
        for (t = 0; t < ball.length; t++) {
            if (ball[t] != toIgnore) {
                ball[t].classList.add('fade');
                tooltip.classList.add('summon');

                var percentage = event.target.getAttribute('js-perc');
                var websiteName = event.target.getAttribute('js-name');
                var text = event.target.getAttribute('js-text');
                tooltip.innerHTML = 
                (websiteName == null ? toolTxt.innerHTML = '' : websiteName + '<br>') +
                (percentage == null ? toolTxt.innerHTML = 'No&nbsp;data' : 'Share:&nbsp;' + percentage + '%' + '<br><br>') + 
                '"' + text + '"';
            }
        }
    }, false);
    thisBall.addEventListener('mouseout', function () {
        for (t = 0; t < ball.length; t++) {
            ball[t].classList.remove('fade');
            tooltip.classList.remove('summon');
        }
    }, false);
}