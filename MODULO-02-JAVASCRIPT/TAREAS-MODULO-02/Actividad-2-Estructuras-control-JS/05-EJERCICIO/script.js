//Funcion de los precios
function calcularPrecio() {
    //Variables
    let autoSelect = document.getElementById("auto-ford");       //Select con los autos
    let resultadoInput = document.getElementById("resultado");   //Aqui se almacenara el resultado
    let precio = 0;                                              //Variable para el precio bruto
    let descuento = 0;                                           //Variable para el descuento
    let precioFinal = 0;                                         //Variable para el precio final con descuento
    let operacion = 0;                                           //Variable para la operacion des precio final

    //Condiciones
    switch (autoSelect.value) {
        case "Fiesta":
            precio = 15000;
            descuento = 0.05;
            break;

        case "Focus":
            precio = 20000;
            descuento = 0.10;
            break;

        case "Escape":
            precio = 25000;
            descuento = 0.20;
            break;

        default:
            precio = 0;
            descuento = 0;
            break;
    }

    //Operaciones
    operacion = precio - (precio * descuento);
    precioFinal = (precio > 0 && descuento > 0) ? operacion : !operacion;

    //Mostrar resultado
    if (!operacion) {
        resultadoInput.innerHTML = "No se ha seleccionado un auto";
    }
    else {
        resultadoInput.innerHTML = "Tu auto seleccionado es el Ford " + autoSelect.value + " con precio bruto de $" + precio + " y su precio final aplicado el descuento es: $" + precioFinal;
    }
}