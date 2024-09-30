/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.  */

function numeroMayor(num1, num2)
{
    if (num1 > num2)
    {
        return num1;
    }
    else if (num1 < num2)
    {
        return num2;
    }
    else
    {
        return "Los numeros son iguales";
    }
}

let numero1 = 6;
let numero2= 6;
let mensaje = "El número mayor es: ";

console.log(mensaje + numeroMayor(numero1, numero2));