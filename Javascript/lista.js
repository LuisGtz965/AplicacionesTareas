const botonAgregar = document.getElementById("boton-agregar-01");
const inputTarea = document.getElementById("input-nombre-tarea");
const inputFecha = document.getElementById("input-fecha-tarea");
const listaTareas = document.getElementById("tareas-por-hacer");

botonAgregar.addEventListener("click", () => {
  const tarea = inputTarea.value;
  const fecha = inputFecha.value;
  if (tarea === "") {
    alert("Debes escribir una tarea");
    return;
  }
  const nuevaTarea = document.createElement("li");
  const textoTarea = document.createTextNode(`${tarea} - ${fecha} `);
  nuevaTarea.appendChild(textoTarea);

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Terminar";
  botonBorrar.classList.add("boton-tarea");
  botonBorrar.addEventListener("click", () => {
    nuevaTarea.classList.toggle("completada");
  });

  nuevaTarea.appendChild(botonBorrar);
  listaTareas.appendChild(nuevaTarea);

  inputTarea.value = "";
  inputFecha.value = "";
});
