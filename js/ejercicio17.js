let tareas = [];

function obtenerTareas() {
    let datos = localStorage.getItem("tareas");
    if (datos !== null) {
        tareas = JSON.parse(datos);
    }
    renderizarTareas();
}
function agregarTarea() {
    let inputTarea = document.getElementById("tarea");
    let textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor escribe una tarea"
        });
        return;
    }

    let nuevaTarea = {
        tarea: textoTarea
    };

    tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    
    inputTarea.value = "";
    renderizarTareas();
}
function eliminarTarea(indice) {
    Swal.fire({
        title: "¿ESTÁ SEGURO DE ELIMINAR?",
        text: "Esta acción es permanente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            tareas.splice(indice, 1);
            localStorage.setItem("tareas", JSON.stringify(tareas));
            renderizarTareas();
        }
    });
}
function renderizarTareas() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    tareas.forEach((item, indice) => {
        let elemento = document.createElement("li");
        elemento.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );
        
        elemento.innerHTML = `
            ${item.tarea}
            <button class="btn btn-danger btn-sm" onclick="eliminarTarea(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(elemento);
    });
}

obtenerTareas();