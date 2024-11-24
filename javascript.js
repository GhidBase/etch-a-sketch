/*
    I want to make a two dimensional array
    to store all the different divs in the
    16x16 grid

    There will be one div for each of the 16
    rows, and there will be a div per row for
    each column as well.
*/


const etchASketchOutside = document.querySelector(".etch-a-sketch-outside");

let rows = 16;
let columns = 16;
let grid = new Array(rows);

function initializeGridArray() {
    for (let i = 0; i < rows; i++)
        {
            grid[i] = new Array(columns);
        }
}

function createGridElements() {
    grid.forEach((row, index) => {
        let rowDiv = document.createElement("div");
        rowDiv.textContent = index; // Use the index parameter
        etchASketchOutside.appendChild(rowDiv);
    });
}

initializeGridArray();
createGridElements();