let gridContainer = document.querySelector("#gridContainer");

function createGrid(size) {

    for (let i = 0; i < size; i++) {
        createGridRow(gridContainer, size);
    }
}

function createGridRow(parent, size) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    for (let i = 0; i < size; i++) {
        createGridCell(gridRow);
    }

    parent.append(gridRow)
}

function createGridCell(parent) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    parent.append(gridCell);
}

createGrid(16);

function changeColour(event) {
    event.target.classList.add("hoveredOver");
}



gridContainer.addEventListener("mouseover", changeColour);

const resetButton = document.querySelector("#resetButton");

function resetGrid() {
    let newSize = "";

    while (newSize > 100 || !Number.isInteger(newSize)) {
        newSize = Number(prompt("Enter the size of the new grid (max 100):"));
    }

    gridContainer.innerHTML = "";
    createGrid(newSize);
}

/*
function resetClick() {
    resetGrid()
}

resetButton.addEventListener("click", resetClick)
*/

resetButton.addEventListener("click", () => {
    resetGrid();
})