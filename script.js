function createGrid(size) {
    let rowHeight = PAGEHEIGHT / size;
    console.log(rowHeight);

    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");
        rowContainer.style.height = rowHeight + "px";

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            rowContainer.appendChild(square);
        }

        container.appendChild(rowContainer);
    }
}

function resetGrid() {
    let size = Number(prompt("Enter a new gide size (1-100): ", "16"));
    container.innerHTML = '';
    createGrid(size);
}

const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const PAGEHEIGHT = 800; //px

createGrid(16);

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.setAttribute("style", "background: blue");
});

resetButton.addEventListener("click", resetGrid);