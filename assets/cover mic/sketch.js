var t;
var colors= ['#8FA5FF','#150FAA','#0033FF','#DAA1FF','#650499','#CE3B19','#F78028','#F2C005'];
var giroCompleto = 360;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(10, 10);
  noFill();
  t = 0;

}

var contatore = 0;

function draw() {


//background(255);

  translate(width/2, height/2);
  var colorProgress = frameCount % giroCompleto;

  var mappedColor = map(colorProgress,0, giroCompleto - 1 ,0, 1);
  console.log(mappedColor);
  //console.log(contatore);
// if (contatore==1){
//   stroke('GREEN');
// }



switch( contatore){
  case 0:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 1:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 2:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 3:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 4:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 5:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 6:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore+1]), mappedColor));
  break;
  case 7:
  stroke (lerpColor(color(colors[contatore]), color(colors[contatore-7]), mappedColor));
  break;
}
  beginShape();

console.log(contatore);
  if(colorProgress == giroCompleto-1){
    contatore++;
  }
  if (contatore == 8){
    contatore = 0;
  }
//console.log(contatore);

  // contatore quando color progress arriva a 360 aggiunge 1
  // quando contatore arriva a 7 lo faccio tornare = 0
  // da 1 a 7 per selezionare indice array colors
  // mappare colorProgress per farlo diventare da 0 a 1 per il color lerp

  //console.log(colorProgress);
// for( var v = 0; v < 4; v += 0.1){

    for (var i = 0; i < giroCompleto; i+=1) {
      //stroke(800, t, 100)
      // strokeWeight(4/i);
      var ang = map(i, 0, giroCompleto, 0, TWO_PI);
      var rad = 600 * noise(i * 0.01, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      vertex(x, y);
    }

  endShape(CLOSE);

  t += 0.35;

// }
  // clear the background every 600 frames using mod (%) operator
  // if (frameCount % 600 == 0) {
	// background(255);
  // }

}
