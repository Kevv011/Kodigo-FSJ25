//Variables de los elementos del DOM
let nombre = document.getElementById("nombreEmpleado");
let salario = document.getElementById("salarioEmpleado");
let categoria = document.getElementById("categoriaAumento");
let mostrar = document.getElementById("mostrar");

//Función para calcular el salario de un empleado
function funcionSalario() {

    //Variables de operacionamiento
    let aumento = 0;
    let salarioFinal = 0;

    //Switch-case para incorporar el porcentaje de aumento al salario
    switch (categoria.value) {
        case "A":
            aumento = 0.15;
            break;

        case "B":
            aumento = 0.30;
            break;

        case "C":
            aumento = 0.10;
            break;

        case "D":
            aumento = 0.20;
            break;

        default:
            aumento = 0;
            break;
    }

    //Operaciones
    salarioFinal = salario.value * (1 + aumento);

    //Condicion si los campos estan vacios
    if (!nombre.value || !salario.value || !categoria.value) {

        alert("Por favor, complete todos los campos");

    }
    else if (salario.value < 0) {

        alert("El salario no puede ser negativo");
    }
    else {

        mostrar.innerHTML = "• Nombre del empleado: " + nombre.value + "<br>" +
            "• Salario bruto del empleado: " + "$" + salario.value + "<br>" +
            "• Categoria de aumento asignada: " + categoria.value + "<br>" +
            "<strong>• SALARIO CON AUMENTO: </strong>" + "$" + salarioFinal.toFixed(2);
    }
}