//Variables del DOM
const temperatura = document.querySelector("#temperatura");
const btnRegistro = document.querySelector("#registro");
const resultado = document.querySelector("#resultado");
const btnReset = document.querySelector("#reset");

//Operacionamiento al ingresar datos
btnRegistro.addEventListener("click", () => {

    let tempC = Number(temperatura.value);
    let conversion = ((9 / 5) * tempC) + 32;
    conversion = Number(conversion.toFixed(2));

    if (tempC !== "") {
        resultado.innerHTML = "Ingrese un valor";

        if (conversion >= 14 && conversion <= 32) {
            resultado.innerHTML = "La temperatura es: " + conversion + "°F y es una temperatura baja";
        }
        else if (conversion > 32 && conversion <= 68) {
            resultado.innerHTML = "La temperatura es: " + conversion + "°F y es una temperatura adecuada";
        }
        else if (conversion > 68 && conversion <= 96) {
            resultado.innerHTML = "La temperatura es: " + conversion + "°F y es una temperatura alta";
        }
        else {
            resultado.innerHTML = "Temperatura desconocida";
        }
    } else {
        resultado.innerHTML = "Ingrese un valor";
    }

});

//Operacionamiento para limpiar los campos
btnReset.addEventListener("click", () => {
    temperatura.value = "";
    resultado.innerHTML = "Aqui se imprimira tu resultado";
});