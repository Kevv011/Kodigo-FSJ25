/*EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30% */
function notaFinal(examen, tareas, asistencia, investigacion)
{
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    return notaFinal.toFixed(2);         //Se manejan los decimales a usar con solo 2 decimales
}

let notaExamen = 10,   //Variables con las notas de cada aspecto
    notaTareas = 8.6, 
    notaAsistencia = 9, 
    notaInvestigacion = 7.9; 

    if (notaExamen > 10 || notaTareas > 10 || notaAsistencia > 10 || notaInvestigacion > 10)
    {
        console.log("Las notas no pueden ser mayores a 10");
    }
    else if (notaExamen < 0 || notaTareas < 0 || notaAsistencia < 0 || notaInvestigacion < 0)
    {
        console.log("Las notas no pueden ser menores a cero");
    }
    else
    {
        let mensaje = "La nota final del alumno es: "; //Mensaje a mostrar
        console.log(mensaje + notaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion)); //Console.log para mostrar el resultado
    }
