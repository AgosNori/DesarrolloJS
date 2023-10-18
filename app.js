/*console.log('Hola Mundo');
console.log(4+6);
console.log('La temperatura de hoy es :',11,'°C')
let num1 = 10;
let num2 =12;
let suma =num1+num2
console.log(suma)*/

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");
/*
let nombres = ["Matias","Brisa","Ana","Miqueas","Agos"];
console.log(nombres);
console.log(nombres.length); /* length , devuelve la longitud del array
console.log(nombres[1]);
console.log(nombres[3]);*/
let options = {
    frutas: [
        "Banana",
        "Manzana",
        "Frutilla",
        "Pera",
        "Sandia",
        "Naranja",
        "Mandarina",
        "Limon",
        "Uvas",
        "Kiwi"
    ],
    animales: [
        "Perro",
        "Jirafa",
        "Rinoceronte",
        "hamster",
        "Nutria",
        "Leon",
        "Pantera",
        "Tortuga",
        "Gato",
        "Mamut",
    ],
    paises: [
        "Australia",
        "Argentina",
        "Suecia",
        "Alemania",
        "Estados Unidos",
        "Chile",
        "Irlanda",
        "Africa",
        "España",
        "Mexico",
    ],
};
// contadores
let winCount = 0;
let count = 0;
let chosenWord = "";


