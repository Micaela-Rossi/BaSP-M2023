console.log( '-------------------------EXERCISE 3 : ARRAYS -------------------------' );
/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log('------------EXERCISE 3.a------------');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months[4] +' '+ months[10]);
//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('------------EXERCISE 3.b------------');
var months1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months1.sort());
//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('------------EXERCISE 3.c------------');
var months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months2);
months2.unshift("First");
months2.push("Last");
var resultC = months2;
console.log(resultC);
//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('------------EXERCISE 3.d------------');
var months3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months3);
months3.shift("Enero");
months3.pop("Diciembre");
var resultD = months3;
console.log(resultD);
//e. Invertir el orden del array (utilizar reverse).
console.log('------------EXERCISE 3.e------------');
var months4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months4);
var resultE = months4.reverse();
console.log(resultE);
//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('------------EXERCISE 3.f------------');
var months5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months5);
console.log(months5.join('-'));
//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('------------EXERCISE 3.g------------');
var months6 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log(months6);
console.log( months6Slice = months6.slice(4,11));