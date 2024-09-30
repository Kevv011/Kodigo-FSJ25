/*EJERCICIO 1:
Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */
function verificarEdad(edad){
    let condicion = (edad < 18) ? "es menor de edad"  : "es mayor de edad" ;
    return condicion;
}
let edadUsuario = -18; //Inicializacion de variable de la edad
let edadPositiva = Math.abs(edadUsuario); //Se asegura que la edad sea positiva
let mensaje = "El usuario tiene " + edadPositiva + " años, por lo tanto: "; //Mensaje a mostrar

console.log(mensaje + verificarEdad(edadPositiva)); //Console.log para mostrar el resultado