function createGrid() {
    const gridContainer = document.querySelector("#container");

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