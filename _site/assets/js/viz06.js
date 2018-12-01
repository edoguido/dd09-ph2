// ----------------------------------- //
//           DISCLAIMER                //
// Tu che stai guardando questo codice //
// lo so che il codice fa schifo       //
// però boh, i cicli for sono belli    //
// e adesso fa freddo.                 //
// La CPU del tuo computer ti aiuterà  //
// a scaldarti.                        //
// ----------------------------------- //

var categories = ['neutral', 'convincing', 'resentment', 'fear', 'self-celebration', 'concitate', 'ironic', 'severe', 'not-found', 'aggressive'];

// determina tutte le categorie dei cerchi
for (i = 0; i < categories.length; i++) {
    var thisCategory = categories[i];
    var query = '.' + thisCategory + '';
    var catEls = document.querySelectorAll(query);

    // seleziona cerchi della stessa categoria
    for (t = 0; t < catEls.length; t++) {
        catEls[t].addEventListener('mouseover', function (thisCategory) {
            thisCategoryClass = thisCategory.srcElement.classList[0];
            document.getElementsByClassName(thisCategoryClass);

            fadeElements(thisCategory.srcElement);

        }, false);
        catEls[t].addEventListener('mouseout', function () {
            for (i = 0; i < categories.length; i++) {
                allEls = document.getElementsByClassName(categories[i]);
                allLabels = document.getElementsByClassName(categories[i] + '-label');
                // console.log(allEls);
                for (t = 0; t < allEls.length; t++) {
                    allEls[t].classList.remove('fade');

                }
                for (t = 0; t < allLabels.length; t++) {
                    // console.log(allLabels[t]);
                    allLabels[t].classList.remove('fade');
                }
            }
        }, false);
    }
}

function fadeElements(toExclude) {

    // calcola categorie da escludere
    for (i = 0; i < categories.length; i++) {
        if (categories[i] == toExclude.classList[0]) {
            // console.log('------------');
        } else {

            // prendi elementi di ogni categoria
            var categoriesToFade = categories[i];

            var fadedCategory = document.getElementsByClassName(categoriesToFade);
            var fadedLabels = document.getElementsByClassName(categoriesToFade + '-label');
            // console.log(fadedLabels);

            // ogni elemento della categoria da escludere
            for (v = 0; v < fadedCategory.length; v++) {
                // console.log(fadedLabels[v]);
                fadedCategory[v].classList.add('fade');
            }
            for (v = 0; v < fadedLabels.length;v++) {
                fadedLabels[v].classList.add('fade');
            }
        }
    }
}

function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            // Element exists with attribute. Add to array.
            matchingElements.push(allElements[i]);
        }
    }
    console.log(matchingElements);
    return matchingElements;
}