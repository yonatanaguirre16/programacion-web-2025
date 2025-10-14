function operation(num1, num2, operation) {
  let resultado;

  switch (operation) {
    case "suma":
      resultado = num1 + num2;
      alert(`El resultado de la suma es: ${resultado}`);
      break;
    case "resta":
      resultado = num1 - num2;
      alert(`El resultado de la resta es: ${resultado}`);
      break;
    case "multi":
      resultado = num1 * num2;
      alert(`El resultado de la multiplicación es: ${resultado}`);
      break;
    case "div":
      if (num2 !== 0) {
        resultado = num1 / num2;
        alert(`El resultado de la división es: ${resultado}`);
      } else {
        alert("No se puede dividir entre 0.");
      }
      break;
    default:
      alert("Esa opción no existe.");
      return;
  }
}

let num1 = prompt("Ingresa el primer numero: ");
let num2 = prompt("Ingresa el segundo numero: ");
let op = prompt("Ingresa la operacion(suma, resta, multi, div): ");

console.log(operation(Number.parseInt(num1), Number.parseInt(num2), op));
