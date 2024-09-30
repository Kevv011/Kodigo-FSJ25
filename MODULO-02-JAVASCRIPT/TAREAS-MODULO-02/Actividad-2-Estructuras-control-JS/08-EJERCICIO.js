/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. */

let numeroIngresado = 5, //Numero la cual se generara la tabla de multiplicar
    multiplo = 1;        //Se inicializa el multiplo en el que empezara la tabla de multiplicar

while (multiplo <= 10)
{
    console.log(numeroIngresado + " X " + multiplo + " = " + (numeroIngresado * multiplo));
    multiplo++;
}