let gridContainer = document.querySelector("#container");

function createGrid() {

    for (let i = 0; i < 16; i++) {
        createGridRow(gridContainer);
    }
}

function createGridRow(parent) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    for (let i = 0; i < 16; i++) {
        createGridCell(gridRow);
    }

    parent.append(gridRow)
}

function createGridCell(parent) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    parent.append(gridCell);
}

createGrid();

//TODO this affects the gridRow divs too, either add conditional, or maybe resizing gridRows will solve it
function changeColour(event) {
    event.target.classList.add("hoveredOver");
}

gridContainer.addEventListener("mouseover", changeColour);