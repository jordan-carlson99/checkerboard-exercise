// Create a box with the wanted color as an argument as a string
function boxMaker(color) {
  let div = document.createElement("div");
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";
  div.style.backgroundColor = color;
  return div;
}

// Append the body with the created box x*9 amount of times with argument for desired number of rows
function boardMaker(numRows) {
  numRows *= 9;
  for (let i = 0; i < numRows; i++) {
    if (i % 2 === 0) {
      let box = boxMaker("red");
      document.body.append(box);
    } else {
      let box = boxMaker("black");
      document.body.appendChild(box);
    }
  }
}

boardMaker(9);
