/* PROGRAMACION ORIENTADA A OBJETOS (POO)
--> Paradigma de programacion que se basa en el desarrollo como si las cosas fueran objetos manipulables
--> Conceptos principales de POO: CLASES y OBJETOS
• --> CLASES: Molde para generar algo
• --> OBJETO: Lo que podemos crear en base a ese molde (Instancia de una clase)
*/

//DECLARACION DE UNA CLASE
class Coche {
    // 1) Al crear una clase, hay que pensar las CARACTERISTICAS generales que tendra el objeto (En este caso, caracteristicas de un auto)
    // A estas caracteristicas se les llama ATRIBUTOS o PROPIEDADES

    //Los atributos pueden declararse dentro de un CONSTRUCTOR o fuera de el
    numChasis: number;
    motor: string;
    color: string;
    tipoCombustible: string;
    tranmision: string;
    Kilometraje: number;
    plazas: number;
    frenos: string;
    modelo: string;
    añoFabricacion: number;
    
    /*CONSTRUCTOR DE LA CLASE --> Metodo que se ejecuta al crear un objeto de la clase
    --> Sirve para inicializar las propiedades del objeto
    --> Se inicializa con la palabra reservada "constructor"
    --> Se pueden pasar parametros al constructor para asignar valores a las propiedades del objeto
    --> Solo puede haber un constructor por clase y tiene que estar DENTRO DE LA CLASE
    
    */
    constructor(numChasisParam: number, motorParam: string, colorParam: string, combustipleParam: string, transmisionParam: string, kilometrajeParam: number, plazasParam: number, frenosParam: string, modeloParam: string, añoParam: number) {
        this.numChasis = numChasisParam;
        this.motor = motorParam;
        this.color = colorParam;
        this.tipoCombustible = combustipleParam;
        this.tranmision = transmisionParam;
        this.Kilometraje = kilometrajeParam;
        this.plazas = plazasParam;
        this.frenos = frenosParam;
        this.modelo = modeloParam;
        this.añoFabricacion = añoParam;
    }
}



//Instancia de objetos a traves de una clase --> crear un OBJETO

//Se crea un objeto de la clase "Coche"
let auto: Coche = new Coche(1254487, "V8", "rojo", "diesel", "manual", 200, 2, "frenito", "huayra", 2016 ); //Se asignan valores a las propiedades del objeto a traves del constructor

//Asignacion de valores a las propiedades del objeto por separado
auto.modelo = "huayra";
console.log(auto);