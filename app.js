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


/* Trabajamos con el display de las opciones*/
const displayOptions = () => {
    // alt+96 hace el template
    optionsContainer.innerHTML += `<h3> Porfavor seleccione una opción</h3>`;
    // innerHTML nos sirve para poder ingresar codigo html en js
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onClick="generateWord('${value}')">${value}</button> `;
    }
    // appendChild les va a agregar al ultimo el boton
    optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButton = document.querySelectorAll('.options');
    let letterButton = document.querySelectorAll('.letters');

    optionsButton.forEach((button) => {
        button.disabled = true;
    });

    letterButton.forEach((button) => {
        button.disabled = true;
    });
    newGameContainer.classList.remove("hide");
};
// generador de las palabras
const generateWord = (optionValue) => {
    let optionsButton = document.querySelectorAll(".options");
    optionsButton.forEach((button) => {
        if (button.innerText.toLowerCase() = optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
    // inicializamos el contenido de las letras en cero y limpiamos lo anterior
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];

    // elegir una palabra aleatoria
    chosenWord = optionArray[Math.floor(Math.ramdom() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();

    // una vez que ya selecciono la palabra
    // por cada letra vamos a reemplazarlo por un signo

    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
    userInputSection.innerHTML = displayItem;
};
// cuando presionemos el boton de nuevo juego, se debe reinciar todo
const initializer = () => {
    winCount = 0;
    count = 0;

    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";


    // crear las letras
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);

        button.addEventListener("click", () => {
            // split()divide un objeto en string ( cadenas de texto)
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        dashes[index].innerText = char;
                        winCount += 1;
                        // la funcion length les va a devolver la longitud de la palabra
                        if (winCount === charArray.length) {
                            resultText.innerHTML = `<h2 class="win-msg">Ganaste</h2>`;
                            // esta es la funcion cuando esta activados y desactivados los botones
                            blocker();
                        }
                    }
                });
            } else {
                // el contador para cuando perdemos
                count += 1;
                dibujarHombre(count);
                // contador = 6( head, body left arm, rigth arm, left leg, rigth leg)
                if (count == 6) {
                    resultText.innerHTML = `<h2 class="lose-msg">Perdiste</h2><p>La palabra era <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            // desactiva los botones
            button.disabled = true;
        });
        letterContainer.append(button);
    }
    displayOptions();
    let { initialDrawning } = canvasCreator();
    initialDrawning();
};















// Canvas para dibujar el hombrecito
const canvasCreator = () => {
    let context = canvas.getContext("2d"); // trabajaremos en una representación bidimensional
    context.beginPath();
    context.strokeStyle = "#000"; // color
    context.lineWidth = 2; // tamaño de la linea

    // como se van a dibujar las lineas
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();  // metodo stroke() para dibujar trazos
    };
    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true); // para hacer la circunferencia
        context.stroke();
    }
    const body = () => {
        drawLine(70, 40, 70, 80);
    }
    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    }
    const rigthArm = () => {
        drawLine(70, 50, 90, 70);
    }
    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    }
    const rigthLeg = () => {
        drawLine(70, 80, 90, 110);
    };
    const initialDrawning = () => {
        // va a limpiar el dibujo 
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        drawLine(10, 130, 130, 130);
        drawLine(10, 10, 10, 131);
        drawLine(10, 10, 70, 10);
        drawLine(70, 10, 70, 20);
    };
    return { initialDrawning, head, body, leftArm, rigthArm, leftLeg, rigthLeg };

};
const dibujarHombre = (count) => {
    let { head, body, leftArm, rigthArm, leftLeg, rigthLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rigthArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rigthLeg();
            break;
        default:
            break;
    }
};
