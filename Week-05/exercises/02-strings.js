console.log( '-------------------------EXERCISE 2 : STRINGS-------------------------' );
/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).*/
console.log('------------EXERCISE 2.a------------');
var exerciseString = 'unstoppable';
console.log(exerciseString.toUpperCase());
/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('------------EXERCISE 2.b------------');
var firstString = 'operations';
var resultString = firstString.substring(0,5);
console.log(resultString);
/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('------------EXERCISE 2.c------------');
var longString = 'bestfriend';
console.log(shortString = longString.substring(7,10));
/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/
console.log('------------EXERCISE 2.d------------');
var startString = 'aBsolUteLY';
var startLetter = startString.substring(0,1);
var finishLetters = startString.substring(1,10);
var finishString = startLetter.toUpperCase() + finishLetters.toLowerCase();
console.log(finishString);
/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/
console.log('------------EXERCISE 2.e------------');
var threeWords = 'take it easy';
console.log(spaceInString = threeWords.indexOf(' '[0]));
/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/
console.log('------------EXERCISE 2.f------------');
var veryLongString = 'imAgInE dRAgonS';
console.log(veryLongString.indexOf(' '[0]));
var firstLetterFirstWord = veryLongString.substring(0,1);
var restLettersFirstWord = veryLongString.substring(1,8);
var firstLetterSecondWord = veryLongString.substring(8,9);
var restLetterSecondWord = veryLongString.substring(9,15);
var resultVeryLongString = firstLetterFirstWord.toUpperCase() + restLettersFirstWord.toLowerCase() + firstLetterSecondWord.toUpperCase() + restLetterSecondWord.toLowerCase();
console.log(resultVeryLongString);




