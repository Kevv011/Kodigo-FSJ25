//Variables de los elementos del DOM
let valorIngresado = document.getElementById("valorIngresado");
let negativos = document.getElementById("negativos");
let positivos = document.getElementById("positivos");
let multiplos = document.getElementById("multiplos");
let pares = document.getElementById("pares");
let sumaPares = document.getElementById("sumaPares");

//Funcion para ingresar los numeros y generar las condiciones
function ingresar() {

    //Arrays de operacionamiento para que al ingresar nuevos datos empiecen vacios
    let guardarNums = [];
    let guardarNegativos = [];
    let guardarPositivos = [];
    let guardarMultiplos = [];
    let guardarPares = [];

    let valorNum = 1;

    //Do-while para que aparezca el ingreso de los 10 numeros
    do {
        let numIngresado = prompt("Ingrese el número " + valorNum); //Ingreso de los numeros con prompt

        //Condicion si el valor ingresado no es un numero
        if (isNaN(numIngresado) || numIngresado === "") {
            alert("Ingrese un número válido");
            continue;
        }
        //Condicion que se ejecuta si se cancela el ingreso de numeros
        if (numIngresado === null) {
            alert("Ingreso de números cancelado. Por favor, presiona el boton para ingresar números nuevamente");
            break;
        }

        numIngresado = Number(numIngresado); //Convierte el valor ingresado a numero
        guardarNums.push(numIngresado);      //Guarda todos los numeros en el array general

        //Condiciones para guardar los numeros en los arrays correspondientes
        if (numIngresado < 0) {
            guardarNegativos.push(numIngresado);
        }
        if (numIngresado > 0) {
            guardarPositivos.push(numIngresado);
        }
        if (numIngresado % 15 === 0) {
            guardarMultiplos.push(numIngresado);
        }
        if (numIngresado % 2 === 0) {
            guardarPares.push(numIngresado);
        }

        //Incremento del valorNum que se ve desde el prompt
        valorNum++;

    } while (valorNum <= 10);

    //Condicion que ejecuta las operaciones si no se ha cancelado el ingreso de numeros
    if (!guardarNums.length) {
        valorIngresado.innerHTML = "Aqui se presentaran las condiciones, pero aún no se han ingresado valores";
        negativos.innerHTML = "";
        positivos.innerHTML = "";
        multiplos.innerHTML = "";
        pares.innerHTML = "";
        sumaPares.innerHTML = "";
    }
    else {
        //Operacion para recorrer el array de numeros guardados y presentarlos
        valorIngresado.innerHTML = "• Todos los números ingresados son: ";

        for (let i = 0; i < guardarNums.length; i++) {

            valorIngresado.innerHTML += guardarNums[i] + ", ";
        }

        //Operacion para recorrer el array de numeros negativos y presentarlos
        negativos.innerHTML = "• Los números negativos ingresados son: ";

        if (!guardarNegativos.length) {
            negativos.innerHTML = "• Los números negativos ingresados son: No hay números negativos";
        }
        else {
            for (let j = 0; j < guardarNegativos.length; j++) {
                negativos.innerHTML += guardarNegativos[j] + ", ";
            }
        }

        //Operacion para recorrer el array de numeros positivos y presentarlos
        positivos.innerHTML = "• Los números positivos ingresados son: ";

        if (!guardarPositivos.length) {
            positivos.innerHTML = "• Los números positivos ingresados son: No hay números positivos";
        }
        else {
            for (let k = 0; k < guardarPositivos.length; k++) {
                positivos.innerHTML += guardarPositivos[k] + ", ";
            }
        }

        //Operacion para recorrer el array de multiplos de 15 y presentarlos
        multiplos.innerHTML = "• Los números que son multiplos de 15 ingresados son: ";

        if (!guardarMultiplos.length) {
            multiplos.innerHTML = "• Los números que son multiplos de 15 ingresados son: No hay números multiplos de 15";
        } else {
            for (let l = 0; l < guardarMultiplos.length; l++) {
                multiplos.innerHTML += guardarMultiplos[l] + ", ";
            }
        }

        //Operacion para recorrer el array de numeros pares y presentarlos junto con la suma que conforman
        pares.innerHTML = "• Los números pares ingresados son: ";
        let sumaPar = 0;

        if (!guardarPares.length) {
            pares.innerHTML = "• Los números pares ingresados son: No hay números pares";
        }
        else {
            for (let m = 0; m < guardarPares.length; m++) {
                pares.innerHTML += guardarPares[m] + ", ";
                sumaPar += guardarPares[m];    //Suma los numeros pares
                sumaPares.innerHTML = "• La suma de los números pares es: " + sumaPar;
            }
        }
    }
}