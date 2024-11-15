// suma de dos números
function suma (a,b) {
    let resultado = a + b;
    return resultado;
};
console.log (suma(75,93));

// Verficación de número par
function esPar (numero){
    let resultado;
if (numero % 2 === 0) {
resultado = true 
} else{ 
    resultado = false; 
 };
 return resultado;
}
 console.log (esPar(96));

//Saludo personalizado 
function saludar(nombre){
    return "Qué onda" + nombre;
}
console.log(saludar("Brandon"));

// Doble de un número 
function doble (numero){
    return numero * 2
}
console.log (doble(77));

// Convertir grados Celsius 
function celsiusAFahrenheit(gradosCelcius){
    let gradosFahrenheit = (gradosCelcius * 9/5)
}
console.log(celsiusAFahrenheit(-1));