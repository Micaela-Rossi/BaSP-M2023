console.log( '-------------------------EXERCISE 5 : FOR -----------------------------' );

/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras.*/

console.log('------------EXERCISE 5.a------------');

var triyingFor = ['amazing', 'awesome', 'great', 'excellent', 'magnificent'];
for (let i = 0; i < triyingFor.length; i++) {
    window.alert(triyingFor[i]);
}

/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
modificada.*/

console.log('------------EXERCISE 5.b------------');

var triyingFor2 = ['amazing', 'awesome', 'great', 'excellent', 'magnificent'];
for (let i = 0; i < triyingFor2.length; i++) {
    window.alert((triyingFor2[i].substring(0,1).toUpperCase()) + (triyingFor2[i].substring(1,11).toLowerCase()));
}

/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
cadena completa.*/

console.log('------------EXERCISE 5.c------------');

var triyingFor3 = ['amazing', 'awesome', 'great', 'excellent', 'magnificent'];
var sentence = '';
for (let i = 0; i < triyingFor3.length; i++){
    sentence += ' ' + triyingFor3[i];
}
window.alert(sentence);

/*d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('------------EXERCISE 5.d------------');

var triyingFor4 = [];
console.log(triyingFor4);
for (let i = 0; i < 10; i++){
    triyingFor4.push(i);
}
var result5D = triyingFor4;
console.log(result5D);