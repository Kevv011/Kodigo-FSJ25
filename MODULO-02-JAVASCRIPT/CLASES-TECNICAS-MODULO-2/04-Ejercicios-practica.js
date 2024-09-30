//Imprimir todas las posiciones de un Array numerico

function recorrerArray(array) {
    //Code goes here

    if (array.length == 0) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
recorrerArray(array);

//Funcion para encontrar un numero par en un array
let i = 0;
let arrayAux = [];

function numPar(arr)
{
    if (arr == 0) { return arr; } //Validacion si Array es vacio

    for (let i = 0 ; i < arr.length ; i++ )
    {
        if (arr[i] % 2 == 0)
        {
            console.log("Numero par encontrado: " + arr[i]);
            arrayAux.push(arr[i]);  //Agrega los valores pares de "arr" a "arrayAux"
        }
    }
    console.log(arrayAux);
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numPar(array2);

//EJERCICIO DIA MIERCOLES 04/09
/*Realizar una funcion que reciba un array NUMERICO y retorne un array completamente nuevo
solamente con los numeros que sean multiplo de 3 y que la suma de todos sus numeros de menos de 100*/

let arrayMultiplo3 = [];

function arrayNumerico(array)
{
    for (let i = 0; i < array.length ; i++ )
    {
        if(array[i] % 3 === 0 && array[i] < 100)
        {
            arrayMultiplo3.push(array[i]);
        } 
    }
    console.log(arrayMultiplo3);
}
let array3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
arrayNumerico(array);