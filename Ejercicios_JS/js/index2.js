const redBg = document.getElementById("red");
const blueBg = document.getElementById("blue");
const greenBg = document.getElementById("green");
const restartBtn = document.getElementById("restart");
const mainContainer = document.getElementById("container");
const main = document.getElementById("main");
const body = document.body;

redBg.addEventListener("click", function () {
  mainContainer.style.background = "red";
  body.style.background = "red";
});

blueBg.addEventListener("click", function () {
  mainContainer.style.background = "blue";
  body.style.background = "blue";
});

greenBg.addEventListener("click", function () {
  mainContainer.style.background = "green";
  body.style.background = "green";
});

restartBtn.addEventListener("click", function () {
  mainContainer.style.background = "white";
  body.style.background = "white";
});
