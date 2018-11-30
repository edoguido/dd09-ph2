var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);

document.addEventListener('mousemove', function () {
    updateTooltipPos(event, tooltip);
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
                tooltip.innerHTML = websiteName + '<br>Share: ' + percentage + '%' ;
                if (percentage == null) {
                    tooltip.innerHTML = 'No data';
                }
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