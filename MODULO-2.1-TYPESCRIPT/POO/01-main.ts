//En TYPESCRIPT se especifican los datos a usar y trabaja ebasado en JavaScript
//Archivos Typescript normalmente son nombrados con el nombre "main.ts" o "index.ts"
//Para compilar un archivo TS a JS se usa el comando "tsc nombreArchivo.ts" en la terminal

let cadenaTexto:string = "Hola Mundo";
let numero:number = 123;
let bool:boolean = true;

//Declaracion de un array
let arrayString: string[] = ["Hola", "Mundo"];
let arrayNum: number[] = [1,2,3,4,5];

//No se recomienda especificar NUNCA el uso de "any" ya que se pierde la esencia de TypeScript
let arrayMalo: any[] = ["Hola", 1, true];

let arrayMixto: (number | string)[] = [2, 1, "Hola", "Mundo"]; //Aqui se pueden combinar numeros y strings
let arrayMixto2: string[] | number[] = ["Hola", "Mundo",];     //Aqui se especifica que el array puede ser de tipo string o number, pero no ambos

//Declaracion de Tuplas: Se asignan valores a un array de forma ordenada segun el tipo de dato
let arrayTupla: [number, string] = [1, "Hola"];


//FUNCIONES EN TYPESCRIPT

//Funcion que no retorna nada son VOID
function tipoVoid(): void {
    console.log("Hola Mundo");
}

//Funciones que retornan un valor obligatoriamente necesitan especificar el tipo de dato y un RETURN
function sumar(): number {
    return 2 + 2;
}

//Se pueden combinar tipos de datos en funciones y usarse tal cual
function sumaOconcatenar():number|string|boolean { //Pueden especificarse varios tipos de datos con "|"
    return "Valor de la suma" + 3 + 5;
}

//Template string --> Plantillas literales
function saludar(nombre:string):string {
    return `Hola como estas? ${nombre}`; //Permite concatenar de forma mas sencilla
}