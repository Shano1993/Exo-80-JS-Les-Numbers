/*
    Exo 1
 */

let isInteger = document.getElementById('is-integer');
if (Number.isInteger(isInteger)) {
    isInteger.innerHTML = isInteger.innerHTML + " ==> " + "C'est un nombre entier";
}
else {
    isInteger.innerHTML = isInteger.innerHTML + " ==> " + "Ce n'est pas un nombre entier";
}

/*
    Exo 2
 */

let pNan = document.getElementById('is-nan');

if (isNaN(parseInt(pNan.innerHTML))) {
    pNan.innerHTML = pNan.innerHTML + " ==> " + "est NaN";
}
else {
    pNan.innerHTML = pNan.innerHTML + " ==> " + "est un nombre";
}



/*
    Exo 3
 */

let pFloat = document.getElementById('parse-float');
let age = 28;

/*
    Exo 4
 */

let pInt = document.getElementById('parse-int');



