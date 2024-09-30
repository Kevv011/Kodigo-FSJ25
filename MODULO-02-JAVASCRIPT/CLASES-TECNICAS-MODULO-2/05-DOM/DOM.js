//Aprendiendo a usar "innerHTML" y "innerText"
let h1 = document.getElementById("textoSaludo");
let section = document.getElementById("content");

console.log(h1.innerHTML); //Cambia el contenido de la etiqueta
console.log(h1.innerText); //cambia el texto de la etiqueta

h1.innerText = '• Te cambie desde el JS con un "innerText"';
section.innerHTML = '<h2>• Estoy cambiando el contenido von viñetas y texto con "innerHTML"</h2>';

//Primeros eventos en el DOM con JS
const btnMagia = document.getElementById("btnMagia");

//Uso de "addEventListener" para agregar un evento a un elemento
btnMagia.addEventListener("click", () => {
alert("Boton que hace magia");
});

//Funcion con "onclick" en HTML
function apretandoBoton()
{
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola " + nombre);
}

//Funcion de "onchange" en HTML
function cambiandoInput(e)
{
    console.log("cambie");
    console.log(e.target.value);
}
