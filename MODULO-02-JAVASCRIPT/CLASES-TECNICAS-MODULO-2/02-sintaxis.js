console.log("Hola mundo");

// ---- OPERADORES MATEMATICOS ----
let suma = 2 + 2;
let resta = 4 - 2;
let multiplicacion = 1354 * 356;
let division = 135 / 5;
let residuo = 10 % 2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);

// ---- Concatenacion ----
console.log("Hola" + " " + "mundo");



// ---- OPERADORES DE COMPARACION ----

// --> "==" Compara si dos valores son iguales (Igualdad)
let igualdad = 10 == 100
console.log(igualdad); //Devuelve true

// --> "===" Compara si dos valores son iguales y del mismo tipo (Igualdad estricta)
let igualdadEstricta = 10 === "10";
console.log(igualdadEstricta); //Devuelve false

// --> "!=" Compara si dos valores son diferentes (Desigualdad)
let desigualdad = 10 != 100;
console.log(desigualdad); //Devuelve true

// --> "!==" Compara si dos valores son diferentes y del mismo tipo (Desigualdad estricta)
let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta); //Devuelve true



/* ---- FUNCIONES ----
--> Son porciones de codigo reutilizable que hace algo en concreto
--> Se pueden llamar desde cualquier parte del codigo
--> Se pueden pasar parametros y retornarvalores
--> Una funcion que no retorna valor es un "PROCEDIMIENTO"
--> Una funcion que retorna valor es una "FUNCION"
*/

// fUNCION VOID (Vacia)
function nombreFunction()
{
    console.log("Hola mundo");
}

// FUNCION RETURN (Con valor de retorno)
function funcionConRetorno()
{
    return "Hola mundo, soy una funcion con retorno";
}
console.log(funcionConRetorno());



/* FUNCION CON PARAMETROS
--> Los parametros son valores que se pasan a la funcion
--> Los parametros son variables locales de la funcion
--> Son funciones que trabajan con datos que vienen de fuera
*/

function sumar(a, b)
{
    let sumar = a + b;
    return sumar;
}
console.log(sumar(15, 5));



/* FUNCION FLECHA 
--> Son una forma mas corta de escribir funciones
--> Normalmente se declaran como CONSTANTES porque se busca que no cambien
*/

// Funcion flecha normal
const funcionFlecha = () =>
{
    console.log("Hola mundo");
}
funcionFlecha();

// Funcion flecha simplificada
const funcionFlecha2 = () => console.log("Hola mundo");
funcionFlecha2();



/* FUNCIONES CALLBACK 
--> Son funciones que se pasan como parametro a otra funcion
--> Se ejecutan cuando ocurre un evento
--> Recibe una funcion para hacerla funcionar
*/
function funcionCallback(funcion)
{
    // Llamamos a la funcion que nos pasan como parametro y funcione
    funcion();
}

function funcionAuxiliar()
{
    console.log("Hola mundo");
}

funcionCallback(funcionAuxiliar);



/* FUNCIONES ANONIMAS 
--> Son funciones que no tienen nombre
--> Se suelen usar en funciones callback
--> Se suelen usar en eventos
*/
funcionCallbackAnonima( () => {console.log("hola mundo")} );
