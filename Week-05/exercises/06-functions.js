console.log( '-------------------------EXERCISE 6 : FUNCTIONS -----------------------------' );

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('------------EXERCISE 6.a------------');

function suma(num1, num2) {
    return num1 + num2;
  }
  var resultSuma = suma(11, 10);
  console.log(resultSuma);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN
como resultado.*/

console.log('------------EXERCISE 6.b------------');

function suma2(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        window.alert('At least one of the parameters isn\'t a number');
        return NaN;
    }else {
        return num1 + num2;
    }
  }
var resultSumaNoValid = suma2('j',5);
console.log(resultSumaNoValid);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
entero.*/

console.log('------------EXERCISE 6.c------------');

function validateInterger(num) {
    return Number.isInteger(num) ? true : false;
  }
console.log(validateInterger(1));

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número
convertido a entero (redondeado).*/

console.log('------------EXERCISE 6.d------------');

function suma3(num1, num2){
    var number1 = num1;
    var number2 = num2;
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        window.alert('At least one of the parameters isn\'t a number');
        return NaN;
    }else {
        if (!validateInterger(num1)){
            window.alert('The first parameter isn\'t an integer');
            number1 = Math.round(num1);
        }
        if (!validateInterger(num2)){
            window.alert('The second parameter isn\'t an integer');
            number2 = Math.round(num2);
        };
        return number1 + number2;
        }
    }
console.log(suma3(7.5, 2));

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('------------EXERCISE 6.e------------');

function validateParameters(num6){
    if (typeof num6 !== 'number'){
        window.alert('At least one of the parameters isn\'t a number');
        return NaN;
    }else if (!validateInterger(num6)){
            window.alert('At least one of the parameters isn\'t an integer');
            return Math.round(num6);
    } else {
        return num6;
    }
}

function suma4(firstNum, secondNum){
    var numberFirst = validateParameters(firstNum);
    var numberSecond = validateParameters(secondNum);
    return numberFirst + numberSecond;
    }
console.log(suma4(7.9, 3.3));