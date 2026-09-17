let estudiantes = [];

function agregar() {
    let nombreInput = document.getElementById("nombre");
    let calificacionInput = document.getElementById("calificacion");
    let calificacion = parseFloat(calificacionInput.value);
    let nombre = nombreInput.value.trim();
    
    if (nombreInput.value === "" || isNaN(calificacion)) {
        alert("Porfavor ingresa un nombre y una calificación correcta");
        return;
    }
    // objto
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);
    alert("Estudiante agregado correctamente");
    nombreInput.value = "";
    calificacionInput.value = "";
}

function calcular() {
    let promedioInput = document.getElementById("promedio");
    let mayorInput = document.getElementById("mayor");
    let menorInput = document.getElementById("menor");

    if (estudiantes.length === 0) {
        alert("Porfavor agrega al menos un estudiante");
        return;
    }

    let suma = estudiantes.reduce((acc, est) => acc + est.calificacion, 0);
    let promedio = suma / estudiantes.length;
    let maxCal = Math.max(...estudiantes.map(e => e.calificacion));
    let minCal = Math.min(...estudiantes.map(e => e.calificacion));
    let estMayor = estudiantes.find(e => e.calificacion === maxCal);
    let estMenor = estudiantes.find(e => e.calificacion === minCal);
    promedioInput.value = promedio;
    mayorInput.value = estMayor.nombre;
    menorInput.value = estMenor.nombre;
}