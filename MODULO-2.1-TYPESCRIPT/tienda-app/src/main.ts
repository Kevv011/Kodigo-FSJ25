import './style.css'
import { Producto } from './clases/product'; //Se importa la clase desde "clases > product.ts" una vez habiendola especificado con "EXPORT"
import { Tienda } from './clases/Tienda';

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
  <h1>Texto desde MAIN.ts</h1>

  <form id="loginForm"> 
    <section>
      <label>Nombre producto </label>
      <input type="text" id="nombre" name="nombre" placeholder="Ingresa el nombre del producto" />
    </section>

    <section>
      <label>Precio </label>
      <input type="text" id="precio" name="precio" placeholder="Ingresa su precio" />
    </section>

    <section>
      <label>Cantidad </label>
      <input type="text" id="cantidad" name="cantidad" placeholder="Ingresa su cantidad" />
    </section>
  
    <button type="submit">Iniciar Sesión</button>
  </form>

</div>

`
//document.querySelector<HTMLElement>("#parrafo")!.innerText = "Esto es texto desde un parrafo";  QUERYSELECTOR USA <ELEMENT> PARA INDICAR EL TIPO DE ELEMENTO QUE SE ESTA BUSCANDO

//Inicializamos la tienda para poder manipular los productos
const tienda = new Tienda();

const form = document.getElementById("loginForm") as HTMLFormElement;  //ELEMENTBYID USA <ELEMENT> COMO "AS" PARA INDICAR EL TIPO DE ELEMENTO QUE SE ESTA BUSCANDO

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log("Hola");

  const id = Date.now(); //Se crea un ID unico para cada producto

  //Variables a usar respecto a inputs del formulario
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;               //Typescript se debe especificar el tipo de dato Incluso en el DOM
  const precio = parseFloat((document.getElementById("precio") as HTMLInputElement).value);   //Forma de especificar tipo de dato a un input y cambiarlo a tipo de numeros int y float
  const cantidad = parseInt((document.getElementById("cantidad") as HTMLInputElement).value); //Forma de pasar a recibir numeros INT

  console.log(id);
  console.log(nombre);
  console.log(precio);
  console.log(cantidad);

  let productito = new Producto(id, nombre, precio, cantidad); //Se crea un nuevo objeto de la clase Producto gracias a que ha sido importada desde "product.ts"
  console.log(productito);

  tienda.agregarProducto(productito);

  //localStorage.setItem("productos", JSON.stringify(productito)); //Se guarda el objeto en el localstorage como un string
  //JSON es una interfaz que representa los objetos de Javascript
  //"stringify" convierte un objeto o valor de JavaScript en una cadena de texto JSON

  function renderProductos() {
    console.log("Renderizando productos");

    console.log(tienda.listarProductos());
  }

});