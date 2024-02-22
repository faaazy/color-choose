function redColor() {
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  document.getElementById("red-label").innerHTML = red;
  fullColor = document.getElementById(
    "color-text"
  ).innerHTML = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("bg-color").style.backgroundColor = fullColor;
}

function greenColor() {
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  document.getElementById("green-label").innerHTML = green;
  fullColor = document.getElementById(
    "color-text"
  ).innerHTML = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("bg-color").style.backgroundColor = fullColor;
}
function blueColor() {
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  document.getElementById("blue-label").innerHTML = blue;
  fullColor = document.getElementById(
    "color-text"
  ).innerHTML = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("bg-color").style.backgroundColor = fullColor;
}
