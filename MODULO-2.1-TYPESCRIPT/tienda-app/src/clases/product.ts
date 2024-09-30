export class Producto { //Export servira para usar esta clase en MAIN.TS como "import"
    private id: number;
    private nombre: string;
    private precio: number;
    private cantidad: number;

    constructor(idParam:number, nombreParam:string, precioParam:number, cantidadParam:number) {
        this.id = idParam;
        this.nombre = nombreParam;
        this.precio = precioParam;
        this.cantidad = cantidadParam;
    }
}