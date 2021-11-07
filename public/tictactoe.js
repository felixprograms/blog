console.log("hello world")
let currentPlayer = "X"
function handleClick(event) {
    console.log(event.target.dataset.index)
    gameState[event.target.dataset.index] = currentPlayer
    draw()
    if (currentPlayer == "X") {
        currentPlayer = "0"
    } else {
        currentPlayer = "X"
    }
}

let gameState = ['0','','X','','','','','','']
function draw () {
    document.querySelectorAll('.tictactoe-cell').forEach(cell => {
        cell.innerHTML = gameState[cell.dataset.index]
    })
}
document.querySelectorAll('.tictactoe-cell').forEach(cell => {
    draw()
    cell.addEventListener('click', handleClick)
})

document.querySelector('#reset-game').addEventListener('click', function() {
    document.querySelectorAll('.tictactoe-cell').forEach(cell => {
        cell.innerHTML = ""
    })
})