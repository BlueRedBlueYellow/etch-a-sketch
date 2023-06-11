function addHoverEffect(e) {
    e.target.classList.add("hovered");
}

function generateGrid(boardSize) {
    const board = document.querySelector("#board");
    for (let i = 0; i < boardSize; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        board.appendChild(column);
        for (let i = 0; i < boardSize; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", addHoverEffect);
            column.appendChild(square);
        }
    }
}

generateGrid(16);
