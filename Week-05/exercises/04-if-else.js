console.log( '-------------------------EXERCISE 4 : IF ELSE -------------------------' );

/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log('------------EXERCISE 4.a------------');

var randomNumber = Math.random();
console.log('The random number is ' + randomNumber);
if (randomNumber >= 0.5) {
    window.alert('Greater than or equal to 0.5');
}else{
    window.alert('Lower than 0.5');
}

/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/

console.log('------------EXERCISE 4.b------------');

var age = 12;
console.log('Age value is ' + age);

if (age < 2) {
    window.alert('Baby');
} else if ((age > 1) && (age < 13)){
    window.alert('Kid');
} else if ((age > 12) && ( age < 20)){
    window.alert('Teenager');
} else if ((age > 19) && (age < 31)){
    window.alert('Young');
} else if ((age > 30) && (age < 61)){
    window.alert('Adult');
} else if ((age > 60) && (age < 76)){
    window.alert('Eldery');
} else (window.alert('Old man'));