const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const historialContainer = document.querySelector(".historial-container");

let expresion = "";
let historial = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const valor = btn.textContent;

    if (valor === "C") {
      expresion = "";
      input.value = "";
    } else if (valor === "=") {
      const resultado = eval(expresion);
      input.value = resultado;
      historial.push(`${expresion} = ${resultado}`);
      actualizarHistorial();
      expresion = resultado.toString();
      expresion = "";
    } else {
      expresion += valor;
      input.value = expresion;
    }
  });
});

function actualizarHistorial() {
  const lista = document.createElement("ul");
  historial.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });

  historialContainer.innerHTML = "<h3>Historial de cálculos</h3>";
  historialContainer.appendChild(lista);
}
