// Create a box with the wanted color as an argument as a string
function boxMaker(color) {
  let div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";
  div.style.backgroundColor = color;
  return div;
}
// Create an array of 3 random values 0-255 that create an rgba string with a opacity argument that defaults to 1
function colorRandomizer(opacity) {
  opacity = opacity || 1;
  let randColors = [];
  for (let i = 0; i <= 3; i++) {
    randColors.push(Math.floor(Math.random() * 255));
  }
  return `rgba(${randColors[0]},${randColors[1]},${randColors[2]},${opacity})`;
}

// Append the body with the created box x*9 amount of times with argument for desired number of rows
function boardMaker(numRows, ifGradient) {
  numRows *= 9;
  let opacity = 1;
  let opacityStep = 0;
  if (ifGradient) {
    console.log("gradient");
    opacityStep = (100 / numRows) * 0.01;
    opacity = opacityStep;
  }
  for (let i = 0; i < numRows; i++) {
    if (i % 2 === 0) {
      let box = boxMaker(colorRandomizer(opacity));
      document.body.append(box);
    } else {
      let box = boxMaker(colorRandomizer(opacity));
      document.body.appendChild(box);
    }
    opacity += opacityStep;
  }
}

boardMaker(9);
setInterval(function () {
  document.body.innerHTML = "";
  boardMaker(9);
}, 2000);
