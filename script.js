function createGrid() {
    for (let i = 0; i < 16; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.setAttribute("class", "rowContainer");

        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            rowContainer.appendChild(square);
        }

        container.appendChild(rowContainer);
    }
}

const container = document.querySelector("#container");

createGrid();

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.setAttribute("style", "background: blue");
});