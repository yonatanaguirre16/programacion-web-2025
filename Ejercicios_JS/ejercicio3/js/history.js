const historyList = document.getElementById("historial");

export function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}
