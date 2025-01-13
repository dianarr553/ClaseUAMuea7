let frutas= {
    manzana: {
      color: ["rojo", "amarillo", "verde"],
      elementocaracteristico: ["fruto de un árbol"],
      sabor: ["dulce"],
    },
     mandarina: {
      color: ["naranja"],
      elementocaracteristico: ["fruto en temporada de otoño"],
      sabor: ["dulce y ácida"],
     },
     mango: {
        color: ["amarillo"],
        elementocaracteristico: ["forma no común"],
        sabor: ["dulce"],
     },
     mamey: {
        color: ["café"],
        elementocaracteristico: ["forma en óvalo"],
        sabor: ["dulce"],
    },
    plátano: {
        color: ["amarillo"],
        elementocaracteristico: ["parecido a una sonrisa"],
        sabor: ["dulce"],
    }
};
console.log (frutas);

let identificadorDICCIONARIOfrutas = document.getElementById("frutas")
let keys = Object.keys(frutas)
["manzana", "mandarina","mango","mamey"]

for (let i= 0; i < keys.length; i++){
    let hijo = document.createElement("div")
    hijo.innerText = keys[i] + JSON.getElementById
}





