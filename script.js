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

function randomize() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  redParam = getRandomInt(0, 256);
  greenParam = getRandomInt(0, 256);
  blueParam = getRandomInt(0, 256);

  red = redParam;
  green = greenParam;
  blue = blueParam;
  document.getElementById("blue-label").innerHTML = blue;
  document.getElementById("red-label").innerHTML = red;
  document.getElementById("green-label").innerHTML = green;

  fullColor = document.getElementById(
    "color-text"
  ).innerHTML = `rgb(${redParam}, ${greenParam}, ${blueParam})`;
  document.getElementById("bg-color").style.backgroundColor = fullColor;
}
