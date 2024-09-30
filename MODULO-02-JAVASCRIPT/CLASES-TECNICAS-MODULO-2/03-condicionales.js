//ESTRUCTURAS DE CONTROL --> Condicionales

//Estructura de control IF

let condicion = false;

if (condicion) {
    console.log("ESTE CODIGO SE EJECUTA SI LA CONDICION ES VERDADERA");
} else {
    console.log("ESTE CODIGO SE EJECUTA SI LA CONDICION ES FALSA");
}

//Operador ternario
let variable = 10;
let output = (variable == 10) ? "Condicion verdadera" : "Condicion falsa";
console.log(output);

/*Estructuras repetitivas o Bucles

--> Permiten ejecutar un bloque de codigo varias veces
--> Consumen muchos recursos
*/


/*Bucle WHILE
--> Se ejecuta mientras la condicion sea verdadera
--> Necesita un contador
*/
let numero = 1;
while (numero < 10) {
    console.log(numero);
    numero++;
}

/* Bucle DO WHILE
--> Se ejecuta al menos una vez
--> Primero ejecuta el codigo y luego evalua la condicion
*/
let numero2 = 1;
do {
    console.log(numero2);
    numero2++;
} while (numero2 < 10 && numero2 >= 2);

/* Bucle FOR
--> Se ejecuta un numero determinado de veces
--> Necesita un contador
--> Estructura: for (inicializacion; condicion; incremento)
--> Puede manejarse a conveniencia y ejecuciones mas complejas
*/

let numero3 = 1, multiplicacion = 5;

for(numero3 ; numero3 < 10 ; numero3++) 
{
    console.log(multiplicacion + " X " + numero3 + " = " + multiplicacion*numero3);
}

//PRACTICAR ARRAYS Y METODOS DE ARRAYS