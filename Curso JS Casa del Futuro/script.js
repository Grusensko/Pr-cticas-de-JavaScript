  //alert("Hola Mundo");

  console.log("Hola Mundo en consola");

  let nombre = "Andres";
  const edad = 49;
    let esEstudiante = true;   

    console.log("Mi nombre es " + nombre + ", tengo " + edad + " años y es " + esEstudiante + " que soy estudiante.");


    let numero = 10;
    let texto = "número 10";
    let buleano = true;
    let arreglo = [1, 2, 3];
    let objeto = { nombre: "Andres", edad: 49 };

    console.log(typeof numero + " " + numero);
    console.log(typeof texto + " " + texto);
    console.log(typeof buleano + " " + buleano);
    console.log(typeof arreglo + " " + arreglo);
    console.log(typeof objeto + " Mi nombre es " + objeto.nombre + " y tengo " + objeto.edad);    


    let resultado = 10 + 5;
    console.log("El resultado de la suma de 10 + 5 es: " + resultado);

    let resultado2 = 10 - 5;
    console.log("El resultado de la resta de 10 - 5 es: " + resultado2);

    let resultado3 = 10 * 5;
    console.log("El resultado de la multiplicación de 10 x 5 es: " + resultado3);

    let resultado4 = 10 / 5;
    console.log("El resultado de la división de 10 / 5 es: " + resultado4);

    let resultado5 = 10 % 3;
    console.log("El resultado del módulo 10 % 3 es: " + resultado5);


    let esMayorDeEdad = edad >= 18;
    console.log("Tiene 49 ¿Es mayor de edad? " + esMayorDeEdad);

    let esMenorDeEdad = edad < 18;
    console.log("Tiene 49 ¿Es menor de edad? " + esMenorDeEdad);

    let esVerdadero = true && false;
    console.log("true && false = " + esVerdadero);



    let nombre2 = "Andres";
    const edad2 = 49;
    console.log(`Hola, mi nombre es ${nombre2}, tengo ${edad2} años`);

    let suma = 10 + 5;
    console.log(`El resultado de la suma de 10 + 5 es: ${suma}`);

    if (edad2 >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }

    dia = 3;

    switch (dia) {
        case 1:
            console.log("Lunes");  break;
        case 2:
            console.log("Martes"); break;
        case 3:
            console.log("Miércoles"); break;
        case 4:
            console.log("Jueves"); break;
        case 5: 
            console.log("Viernes"); break;
        case 6:
            console.log("Sábado"); break;   
        case 7:
            console.log("Domingo"); break;     
    }


    console.log("-------------  CLASE 2 - JavaScript ------------------");

     let my_name = "Andres";
     console.log(my_name);  

         let number1 = 10;
         let number2 = 2; 

console.log("Número 1 = " + number1);
console.log("Número 2 = " + number2);
    console.log("La suma de Numero 1 y Numero 2 es " + (number1 + number2));

    console.log("¿Número 10 es mayor que 5? " + (10 >= 5));
    console.log("¿Número 2 es mayor que 5? " + (2 >= 5));

    // Declaración de variable con mi nombre
let nombreX = "ChatGPT";
console.log("Hola, mi nombre es " + nombreX);

// Declaración y suma de dos números
let num1 = 8;
let num2 = 12;
let sumar = num1 + num2;
console.log("La suma es: " + sumar);

// Uso de operadores lógicos
console.log("¿10 > 5 y 5 < 2? " + (10 > 5 && 5 < 2));

// Variables con let y const
let edadX = 25;
const pais = "Argentina";

edadX = 30; // ✅ let se puede cambiar
// pais = "Chile"; ❌ const no se puede reasignar

console.log("Edad actual: " + edadX);
console.log("País: " + pais);

// Comentario: este código demuestra conceptos básicos de JavaScript

// Variable booleana en operación lógica
let esMayor = true;
console.log("¿Es mayor y 10 > 5? " + (esMayor && 10 > 5));

// Imprimir tipo de dato
console.log("El tipo de 'nombre' es: " + typeof nombre);

// Declarar un array y mostrar un elemento
let colores = ["rojo", "verde", "azul"];
console.log("Un color es: " + colores[1]);

// Operación con %
let resto = 17 % 3;
console.log("El resto de 17 ÷ 3 es: " + resto);

// Declarar variable sin valor
let sinValor;
console.log("Valor inicial de sinValor: " + sinValor);

console.log("--  EJEMPLO DE IF ELSE --");
let nota = 40;

if (nota >= 90) {
  console.log("Excelente 😎");
} else if (nota >= 75) {
  console.log("Muy bien 👍");
} else if (nota >= 60) {
  console.log("Aprobado ✅");
} else {
  console.log("Reprobado ❌");
}

 console.log("--  EJEMPLO DE SWITCH --");

   fruta = 5;

    switch (fruta) {
        case 1:
            console.log("Banana");  break;
        case 2:
            console.log("Naranja"); break;
        case 4:
            console.log("Melón"); break;
        case 3:
            console.log("Manzana"); break;
        case 5: 
            console.log("Pera"); break;
        case 6:
            console.log("Uva"); break;   
        case 7:
            console.log("Mandarina"); break; 
        default:
            console.log("Fruta no disponible");    
    }

 console.log("-- ej 3 -->  EJEMPLO DE FOR: Haz un bucle for que imprima los números del 1 al 10.  --");

 for (let i = 1; i <= 10; i++) {
    console.log("Número: " + i);
 }


console.log("-- ej 4 -->  EJEMPLO DE While: Crea un programa que calcule el factorial de un número usando while. --");


 let numeroX = 5;  // Número al que queremos calcular el factorial
let factorial = 1;
let i = 1;

while (i <= numeroX) {
  factorial *= i; // Es equivalente a factorial = factorial * i
  i++;
}

console.log(`El factorial de ${numeroX} es: ${factorial}`);

console.log("-- ej 5 --> Escribe un condicional que determine si una persona puede votar según su edad. --");

let edadVotar = 17; // Cambia este valor para probar diferentes casos

console.log("Edad: " + edadVotar);

if (edadVotar >= 18) {
  console.log("Puedes votar 🗳️");
} else {
  console.log("No puedes votar, eres menor de edad ❌");
}

console.log("-- ej 6 --> Imprime los números pares entre 1 y 20 con un bucle for. --");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) { 
    console.log(i);
  }
}


console.log("-------------  CLASE 3 - JavaScript ------------------");
    
/*document.getElementById("miBoton").onclick = function() {

    typeof "John"
    typeof 3.14
    typeof NaN
    typeof false
    typeof [1, 2, 3, 4]
    typeof {name:'John', age:34}
    typeof new Date()
    typeof function () {}
    typeof myCar
    typeof null
}*/

/*document.querySelector("#miBoton").onclick = function() {
    let x = 10;
    let y = 5;
    let z = x + y;     
}*/
/* document.querySelectorAll  {

 }*/