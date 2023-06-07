const board = document.querySelector("#board");
let boardSize = 16;
for (let i = 0; i < boardSize; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    board.appendChild(column);
    for (let i = 0; i < boardSize; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        column.appendChild(square);
    }
}


