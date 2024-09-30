//Variables del DOM
const destinoElegido = document.querySelector("#ciudad");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultados");

//Operacionamiento
calcular.addEventListener("click", () => {
    let costo = 0;
    let descuento = 0;

    switch (destinoElegido.value) {
        case "Palma":
            costo = 45;
            descuento = 0.05;
            break;
        case "Panchimalco":
            costo = 50;
            descuento = 0.15;
            break;
        case "San Luis Talpa":
            costo = 30;
            descuento = 0;
            break;
        case "La herradura":
            costo = 40;
            descuento = 0;
            break;
        default:
            costo = 0;
            descuento = 0;
            break;
    }

    //Aplicando descuento a lugares selccionnados
    if (destinoElegido.value == "none") {
        resultado.innerHTML = "Por favor seleccione un destino";
    }
    else {
        costo = costo - (costo * descuento); //Operacion de descuento
        costo = costo.toFixed(2);

        resultado.innerHTML ="El costo del pasaje a " + destinoElegido.value + " es de $" + costo;
    }


});