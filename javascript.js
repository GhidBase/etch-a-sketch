/*
    I want to make a two dimensional array
    to store all the different divs in the
    16x16 grid

    There will be one div for each of the 16
    rows, and there will be a div per row for
    each column as well.
*/


const etchASketchOutside = document.querySelector(".etch-a-sketch-outside");
const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", askForGridSize)

let rows = 16;
let columns = 16;
let grid = "";

function initializeGridArray() {
    grid = new Array(rows);
    for (let i = 0; i < rows; i++)
        {
            grid[i] = new Array(columns);
        }
}

function mouseoverSquare(event) {
    event.target.style.backgroundColor = 'green';
}

function createGridElements() {
    grid.forEach((row, rowIndex) => {
        let rowDiv = document.createElement("div");
        etchASketchOutside.appendChild(rowDiv);
        for (let i = 0; i < columns; i++) {
            grid[rowIndex,i] = document.createElement("div");
            rowDiv.appendChild(grid[rowIndex,i]);
            grid[rowIndex,i].addEventListener("mouseover", mouseoverSquare)
        }
    });
}

function removeGridElements() {
    while (etchASketchOutside.firstChild) {
        etchASketchOutside.removeChild(etchASketchOutside.firstChild);
    }
}

function askForGridSize() {
    let newGrid = prompt("Choose a grid size (limited to 100x100)");
    rows = newGrid;
    columns = newGrid;
    removeGridElements();
    initializeGridArray();
    createGridElements();
};

initializeGridArray();
createGridElements();