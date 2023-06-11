const content = document.querySelector("#content");
const gridSizeButton = document.querySelector("#grid-size-button");
const defaultGridSize = 16;

function addHoverEffect(e) {
    e.target.classList.add("hovered");
}

function generateGrid(gridSize) {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < gridSize; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        for (let i = 0; i < gridSize; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", addHoverEffect);
            column.appendChild(square);
        }
    }
}

generateGrid(defaultGridSize);

gridSizeButton.addEventListener("click", function() {
    let newGridSize = parseInt(prompt("What size would you like the grid?"));
    while (newGridSize > 100 || newGridSize < 1) {
        newGridSize = prompt("Sorry, please pick a number between 1 and 100.");
    }
    grid.remove();
    newGrid = document.createElement("div");
    newGrid.id = "grid";
    content.appendChild(newGrid);
    generateGrid(newGridSize);
});