//Variables del DOM
let inputMorning = document.querySelector("#morning");
let inputNoon = document.querySelector("#noon");
let inputNight = document.querySelector("#night");

let ResultMorning = document.querySelector("#morningResult");
let ResultNoon = document.querySelector("#noonResult");
let ResultNight = document.querySelector("#nightResult");

let calcMorning = document.querySelector("#calcMorning");
let calcNoon = document.querySelector("#calcNoon");
let calcNight = document.querySelector("#calcNight");

let reset = document.querySelector("#btnReset");
let promedio = document.querySelector("#btnPromedio");

//Variables de operacion de suma
let sumaArrayM = 0;  //M = Morning
let sumaArrayN = 0;  //N = Noon
let sumaArrayNI = 0; //NI = Night

//Arrays para guardar edades
let Arraymorning = [];
let Arraynoon = [];
let Arraynight = [];

//Ingresa las edades de la mañana
calcMorning.addEventListener("click", () => {
    let ageMorning = Number(inputMorning.value);
    Arraymorning.push(ageMorning);
    inputMorning.value = "";

    if (Arraymorning.length === 5) {
        inputMorning.disabled = true;

        for (let i = 0; i < Arraymorning.length; i++) {
            sumaArrayM += Arraymorning[i];                           //Hace la suma de las edades
            let sumaTmorning = (sumaArrayM / Arraymorning.length).toFixed(2);
            ResultMorning.innerHTML = "PROMEDIO: " + sumaTmorning;   //Promedio de las edades
        }
    }
});

//Ingresa las edades de la tarde
calcNoon.addEventListener("click", () => {
    let ageNoon = Number(inputNoon.value);
    Arraynoon.push(ageNoon);
    inputNoon.value = "";

    if (Arraynoon.length === 6) {
        inputNoon.disabled = true;

        for (let i = 0; i < Arraynoon.length; i++) {
            sumaArrayN += Arraynoon[i];               //Hace la suma de las edades
            let sumaTnoon = (sumaArrayN / Arraynoon.length).toFixed(2);
            ResultNoon.innerHTML = "PROMEDIO: " + sumaTnoon;  //Promedio de las edades
        }
    }
});

//Ingresa las edades de la noche
calcNight.addEventListener("click", () => {
    let ageNight = Number(inputNight.value);
    Arraynight.push(ageNight);
    inputNight.value = "";

    if (Arraynight.length === 11) {
        inputNight.disabled = true;

        for (let i = 0; i < Arraynight.length; i++) {
            sumaArrayNI += Arraynight[i];                            //Hace la suma de las edades
            let sumaTnight = (sumaArrayNI / Arraynight.length).toFixed(2);
            ResultNight.innerHTML = "PROMEDIO: " + sumaTnight;  //Promedio de las edades
        }
    }
});

//Sacando el promedio mas alto

promedio.addEventListener("click", () => {
    if (Arraymorning.length === 5 && Arraynoon.length === 6 && Arraynight.length === 11) {
        if (sumaArrayM > sumaArrayN && sumaArrayM > sumaArrayNI) {
            alert("El promedio de edad de la mañana es mayor");
        }
        else if (sumaArrayN > sumaArrayM && sumaArrayN > sumaArrayNI) {
            alert("El promedio de edad de la tarde es mayor");
        }
        else {
            alert("El promedio de edad de la noche es mayor");
        }  
    } else {
        alert("Aún no se han ingresado todas las edades");
    }
});


//Limpieza de los arrays
reset.addEventListener("click", () => {
    let warning = confirm("¿Estás seguro que deseas reiniciar el programa? Todos los datos ingresados se perderán");

    if (!warning) {
        return;
    }
    else {
        Arraymorning = [];
        Arraynoon = [];
        Arraynight = [];

        sumaArrayM = 0;
        sumaArrayN = 0;
        sumaArrayNI = 0;

        inputMorning.disabled = false;
        inputNoon.disabled = false;
        inputNight.disabled = false;

        ResultMorning.innerHTML = "";
        ResultNoon.innerHTML = "";
        ResultNight.innerHTML = "";
    }


});