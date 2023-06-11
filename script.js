const content = document.querySelector("#content");
const gridSizeButton = document.querySelector("#change-grid-size");
const defaultBoardSize = 16;

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

generateGrid(defaultBoardSize);

gridSizeButton.addEventListener("click", function() {
    let newBoardSize = parseInt(prompt("What size would you like the grid?"));
    while (newBoardSize > 100) {
        newBoardSize = prompt("Sorry, please pick a number that's 100 or below.");
    }
    board.remove();
    newBoard = document.createElement("div");
    newBoard.id = "board";
    content.appendChild(newBoard);
    generateGrid(newBoardSize);
});