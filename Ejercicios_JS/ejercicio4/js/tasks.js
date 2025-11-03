export function renderTasks(tasks, container) {
  container.innerHTML = "";
  tasks.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.textContent = tarea + " ";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";
    btnEliminar.dataset.index = index;

    li.appendChild(btnEliminar);
    container.appendChild(li);
  });
}

export function addTask(tasks, texto) {
  return [...tasks, texto];
}

export function deleteTask(tasks, index) {
  return tasks.filter((_, i) => i != index);
}
