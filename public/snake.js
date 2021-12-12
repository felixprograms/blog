let index = 0
let x = 0
let y = 0
let snakeLength = 3
let snakeBody = []
let snakeFood = []

for (let i = 0; i < 100; i += 1) {
    let randomIndex = Math.floor(Math.random() * 10000)
    snakeFood.push(randomIndex)
    let foodBox = document.querySelector(`[data-index='${randomIndex}']`)
    foodBox.classList.add('bg-red-900')

}



setInterval(() => {
    snakeBody.unshift(index)
    if (snakeBody.length > snakeLength){
        let removedIndex = snakeBody.pop()
        let currentBox = document.querySelector(`[data-index='${removedIndex}']`)
        currentBox.classList.remove('bg-black')

        if (currentBox.classList.contains('bg-red-900')){
            snakeLength += 554
            currentBox.classList.remove('bg-red-900')

        }

    }
    index += y*100
    index += x
    let nextBox = document.querySelector(`[data-index='${index}']`)

    nextBox.classList.add('bg-black')


}, 0.01);
let audioObj = new Audio('/3.wav') 
audioObj.volume = 0.3
window.addEventListener("keyup", function(event) {
    // const p = document.createElement("p");
    // p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    // document.getElementById("output").appendChild(p)
    if (event.key == 'ArrowUp' && y != 1){
        y = -1
        x = 0
    } else if (event.key == 'ArrowDown' && y != -1){
        y = 1
        x = 0
    } else if (event.key == 'ArrowLeft' && x != 1){
        x = -1
        y = 0
    } else if (event.key == 'ArrowRight' && x != -1){
        x = 1
        y = 0
    }

}, true);



