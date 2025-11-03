import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks, addTask, deleteTask } from "./tasks.js";

const input = document.getElementById("nuevaTarea");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

let historialTareas = loadTasks();
renderTasks(historialTareas, lista);

// Agregar tarea
boton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") {
    alert("Ingresa el texto de la tarea");
    return;
  }

  historialTareas = addTask(historialTareas, texto);
  saveTasks(historialTareas);
  renderTasks(historialTareas, lista);
  input.value = "";
});

// Eliminar tarea
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const index = e.target.dataset.index;
    historialTareas = deleteTask(historialTareas, index);
    saveTasks(historialTareas);
    renderTasks(historialTareas, lista);
  }
});
