// 1
let nombres = ["Diego","Emiliano","Dann", "Lei"];
console.log (nombres[3]);
//2
nombres.push("María");
console.log (nombres);
nombres.unshift("Julieta");
console.log(nombres);
//3
let numeros = [1,2,3,4,5,6,7,8];
let impares = numeros.filter(num => num % 2 !== 0);
console.log (impares);
//4
let array1 = ["manzana","lima","mango","uva"];
let array2 = ["pera","papaya","mango"];
let combinado = array1.concat(array2);
console.log(combinado);
//5
let num = [1,2,3,4,5,6];
num.reverse();
console.log(num);
//6
let n = [4,6,8,10,12];
let dobles = n.map(num => num * 2 );
console.log (dobles);
//7
let edades = [12,22,23,4,15];
let mayor = edades.filter (num => num > 18);
console.log (mayor);
//8
let puntaje = [149.72,154.74,161.42,101.41];
let suma = puntaje.reduce((total, num) => total + num, 0);
console.log(suma);
//9
let colores = ["azul", "rojo", "rosa", "negro"];
colores.splice(0,1);
colores.splice(2,3);
console.log(colores);
//10
let nu = [5,3,31,24,11,6,10];
let verifica = nu.includes(10);
console.log(verifica);