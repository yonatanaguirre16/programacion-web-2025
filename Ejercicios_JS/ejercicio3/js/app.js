import { calculate } from "ejercicio3/js/calculator";
import { addToHistory } from "ejercicio3/js/history";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      current = "";
      display.value = "";
    } else if (value === "=") {
      try {
        const result = calculate(current);
        display.value = result;
        addToHistory(`${current} = ${result}`);
        current = result.toString();
      } catch {
        display.value = "Error";
      }
    } else {
      current += value;
      display.value = current;
    }
  });
});
