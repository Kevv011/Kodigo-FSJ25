{}
//COMENTAR EN UNA LINEA -> DESACTIVAR UNA LINEA PARA EL ENTORNO DE EJECUCION

/*  
    COMENTARIO MULTILINEA
    COMENTARIO MULTILINEA
    COMENTARIO MULTILINEA
*/ 

/*
    CARACTERISTICAS DE JAVASCRIPT
    • Tipo de tipado: Debilmente Tipado  -->  Se perdonan errores y no se agregan algunos errores
    • Tipado debil, no necesita:
        - CIERRES DE INSTRUCCION
        - ACLARAR EL TIPO DE DATOS DE LAS VARIABLES

    • PARADIGMA DE PROGRAMACION
        - Programacion estructurada (Trabaja por funciones)

    • JAVASCRIPT ES UN LENGUAJE DE PROGRAMACION INTERPRETADO (Ejecutado en el navegador)
*/ 


//iMPRESION EN CONSOLA
console.log("Hola mundo");    

//TIPOS DE DATOS
console.log(1);             //Number --> Numeros enteros y decimales
console.log("Hola mundo");  //String --> Cadena de texto
console.log(true);          //Boolean --> Verdadero o Falso

/*VARIABLES
--> Toda variable puede cambiar en el tiempo y es llamado que puede ser MUTABLE
--> Usan un espacio de memoria
--> VAR era usado en navegadores antiguos
--> VAR dejo de usarse porque puede ser redeclarable
--> LET es la nueva forma de declarar variables
--> LET no permite redeclarar variables
--> CONST es una constante que no puede cambiar su valor
*/

let numero = 1;
console.log(numero);
numero = 3;
console.log(numero);  //Cambio de valor de la variable (MUTACION)

// NPM (Node Package Manager) --> Administrador de paquetes de Node.js
// Node.js se usara para futuros lengujes de programacion (PHP por ejemplo)
// Javscript al estar en un HTML es interpretado (Navegador) y con Node.js es compilado (Servidor)



/*COMANDO CON NODE
- node -v --> Version de Node
- ls --> Listar archivos
- cd --> Cambiar de directorio
- node nombreArchivo.js --> Ejecutar un archivo de Node (Ejecutar un archivo de Javascript al estilo consola)

*/
