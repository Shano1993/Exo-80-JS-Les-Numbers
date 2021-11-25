/*
    Exo 1
 */

let isInteger = document.getElementById('is-integer');
if (Number.isInteger(isInteger)) {
    isInteger.innerHTML = isInteger.innerHTML + " ==> " + " C'est un nombre entier ";
}
else {
    isInteger.innerHTML = isInteger.innerHTML + " ==> " + " Ce n'est pas un nombre entier ";
}

/*
    Exo 2
 */

let pNan = document.getElementById('is-nan');

if (isNaN(parseInt(pNan.innerHTML))) {
    pNan.innerHTML = pNan.innerHTML + " ==> " + " est NaN ";
}
else {
    pNan.innerHTML = pNan.innerHTML + " ==> " + " est un nombre ";
}

/*
    Exo 3
 */

let pFloat = document.getElementById('parse-float');
let number = parseFloat(pFloat.innerHTML);

pFloat.innerHTML = (number * 28) + " % de la population blablabla ";

/*
    Exo 4
 */

let pInt = document.getElementById('parse-int');
let num = parseInt(pInt.innerHTML);

pInt.innerHTML = (num % 28) + " px ";


/*
    Exo 5
 */

let pFixed = document.getElementById('to-fixed');
let numFixed = parseFloat(pFixed.innerHTML);

pFixed.innerHTML = numFixed.toFixed(2);
