const container = document.querySelector("#container");
const cells = document.querySelectorAll(".cells");
const reset = document.querySelector(".reset");

function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    let cells = document.createElement("div");
    container.appendChild(cells);
    cells.setAttribute("class", "cells");
    cells.addEventListener("mouseover", () => {
      cells.setAttribute("style", "background-color: black");
    });
    reset.addEventListener("click", () => {
      cells.setAttribute("style", "background-color: white");
    });
  }
}

makeDivs(256);
