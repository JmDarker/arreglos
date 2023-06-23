/* Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array. */

let numeros = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
  numeros.push(numeroAleatorio);
}

console.log(numeros);

/* El usuario deberá ingresar un string con varias palabras separadas por coma en un popup, y se deben convertir en un array. Por ejemplo, si el usuario ingresa: '1,2,3,4,5', se convertirá en [1, 2, 3, 4, 5]. Mostrar en consola dicho resultado. */

let input = prompt("Ingresa varias palabras separadas por coma");
let palabras = input.split(",");

console.log(palabras);

/* De acuerdo al array [10, 40, 30, 20, 15, 5], imprime lo siguiente: el arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Utiliza los métodos Math.min() y Math.max() para obtener el número menor y mayor respectivamente. */

let numeros = [10, 40, 30, 20, 15, 5];

let numerosOrdenados = numeros.sort(function(a, b) {
  return a - b;
});

let numeroMenor = Math.min(...numeros);
let numeroMayor = Math.max(...numeros);

console.log("Arreglo ordenado de menor a mayor:", numerosOrdenados);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);
console.log("Número mayor:", numeroMayor);