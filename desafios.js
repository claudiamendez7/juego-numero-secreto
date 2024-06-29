// function saludar() {
//   console.log("Hola mundo!");
// }

// function mostrarNombre(nombre) {
//   console.log(`Hola ${nombre}!`);
// }
// mostrarNombre("John");

// function calcularDoble(numero) {
//   console.log(numero * 2);
//   return numero * 2;
// }
// calcularDoble(5);

// function calcularPromedio(numero1, numero2, numero3) {
//   return (numero1 + numero2 + numero3) / 3;
// }
// let promedio = calcularPromedio(10, 20, 30);
// console.log(promedio);

// function encontrarMayor(numero1, numero2) {
//   return numero1 > numero2 ? numero1 : numero2;
// }
// let numeroMayor = encontrarMayor(10, 20);
// console.log(numeroMayor);

// function cuadrado(numero) {
//   return numero * numero;
// }
// let resultado = cuadrado(2);
// console.log(resultado);

// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function calcularImc(altura, peso) {
//   let imc = peso / (altura * altura);
//   return imc;
// }
// // calcularImc(1.63, 54);

// //Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// // function valorFactorial() {
// //   // factorial = n(n - 1);
// //   n = 5;
// //   factorial = 5 * 4 * 3 * 2 * 1;
// //   console.log(factorial);
// // }
// // valorFactorial();

// function calcularFactorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   } else {
//     return numero * calcularFactorial(numero - 1);
//   }
// }
// let numero = 5;
// let factorial = calcularFactorial(numero);
// console.log(`El factorial de ${numero} es: ${factorial}`);

// //Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// // function conversionDolares(dolar, real) {
// //   dolar = 1;
// //   real = 5;

// //   resultado = (dolar * real) / 4.8;
// //   console.log(resultado);
// // }
// // conversionDolares();

// function conversionDolares(dolares) {
//   let cotizacionDolar = 4.8;
//   let reales = dolares * cotizacionDolar;
//   return reales;
// }
// let valorDolares = 10;
// let valorReales = conversionDolares(valorDolares);
// console.log(`$ ${valorDolares} dolares son $ ${valorReales} reales`);

// //Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

// // function areaPerimetro(altura, anchura) {
// //   altura = 10;
// //   anchura = 5;

// //   area = altura * anchura;
// //   perimetro = 2 * (altura + anchura);

// //   console.log(`El área de la sala es: ${area}`);
// //   console.log(`El perímetro de la sala es: ${perimetro}`);
// // }
// // areaPerimetro();

// function areaPerimetro(altura, anchura) {
//   let area = altura * anchura;
//   let perimetro = 2 * (altura + anchura);
//   console.log("Área: " + area);
//   console.log("Perímetro: " + perimetro);
// }
// let altura = 10;
// let anchura = 5;
// areaPerimetro(altura, anchura);

// //Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function areaPerimetroCirculo(radio) {
//   let pi = 3.14;
//   let area = pi * radio * radio;
//   let perimetro = 2 * pi * radio;
//   console.log("Área: " + area);
//   console.log("Perímetro: " + perimetro);
// }

// let radio = 5;
// areaPerimetroCirculo(radio);

// //Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaMultiplicar(numero) {
//   // numero = 5;
//   for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i;
//     console.log("numero + " + i + " = " + resultado);
//   }
// }
// let numero1 = 7;
// tablaMultiplicar(numero1);

//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//Crea una función que muestre en la consola todos los elementos de la lista de lenguajes de programación.

function mostrarLenguages() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarLenguages();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesInverso() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarLenguagesInverso();

//Crea una función que calcule el promedio de los elementos en una lista de números.

// function calcularPromedio() {
//   let suma = 0;
//   for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//     suma += lenguagesDeProgramacion[i];
//   }
//   let promedio = suma / lenguagesDeProgramacion.length;
//   console.log(promedio);
// }
// let promedio = calcularPromedio();
// calcularPromedio(lenguagesDeProgramacion);

function calcularPromedio(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}
let lista = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(lista);
console.log("Promedio", promedio);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function mostrarNumeroMasGrandeYMasPequeno() {
//   let numeroMasGrande = [10];
//   let numeroMasPequeno = [0];
//   console.log(numeroMasGrande);
//   console.log(numeroMasPequeno);
// }

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("Mayor:", mayor);
  console.log("Menor:", menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaDeElementos(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}
let numeross = [1, 2, 3, 4, 5];
let suma = sumaDeElementos(numeross);
console.log(suma);
sumaDeElementos("Suma", suma);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i;
    }
  }
  return -1;
}
let posicion = encontrarPosicion(lenguagesDeProgramacion, "Python");
console.log(posicion);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
  let suma = [];
  for (let i = 0; i < lista1.length; i++) {
    suma.push(lista1[i] + lista2[i]);
  }
  console.log(suma);
}
sumarListas([1, 2, 3], [4, 5, 6]);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function calcularCuadrado(lista) {
  let cuadrado = [];
  for (let i = 0; i < lista.length; i++) {
    cuadrado.push(lista[i] * lista[i]);
  }
  console.log(cuadrado);
}
calcularCuadrado([1, 2, 3]);
