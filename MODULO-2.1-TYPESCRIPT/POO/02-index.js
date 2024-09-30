/* PROGRAMACION ORIENTADA A OBJETOS (POO)
--> Paradigma de programacion que se basa en el desarrollo como si las cosas fueran objetos manipulables
--> Conceptos principales de POO: CLASES y OBJETOS
• --> CLASES: Molde para generar algo
• --> OBJETO: Lo que podemos crear en base a ese molde (Instancia de una clase)
*/
//DECLARACION DE UNA CLASE
var Coche = /** @class */ (function () {
    /*CONSTRUCTOR DE LA CLASE --> Metodo que se ejecuta al crear un objeto de la clase
    --> Sirve para inicializar las propiedades del objeto
    --> Se inicializa con la palabra reservada "constructor"
    --> Se pueden pasar parametros al constructor para asignar valores a las propiedades del objeto
    --> Solo puede haber un constructor por clase y tiene que estar DENTRO DE LA CLASE
    
    */
    function Coche(numChasisParam, motorParam, colorParam, combustipleParam, transmisionParam, kilometrajeParam, plazasParam, frenosParam, modeloParam, añoParam) {
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
    return Coche;
}());
//Instancia de objetos a traves de una clase --> crear un OBJETO
//Se crea un objeto de la clase "Coche"
var auto = new Coche(1254487, "V8", "rojo", "diesel", "manual", 200, 2, "frenito", "huayra", 2016); //Se asignan valores a las propiedades del objeto a traves del constructor
//Asignacion de valores a las propiedades del objeto por separado
auto.modelo = "huayra";
console.log(auto);
