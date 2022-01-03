const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0
let y = 0

xVel = 0
yVel = 0

window.addEventListener("keyup" , function(event) {
    xVel = 0
    yVel = 0
})

window.addEventListener("keydown" , function(event) {
    if (event.key == 'w') {
        yVel = -1
    } else if (event.key == 'a'){
        xVel = -1
    } else if (event.key == 's'){
        yVel = 1
    } else if (event.key == 'd'){
        xVel = 1
    }
})

function someSortOfFunction() {
    void ctx.clearRect(0, 0, 1000, 1000);

    ctx.fillStyle = 'green';
    x += xVel
    y += yVel
    ctx.fillRect(x, y, 10, 10);

    requestAnimationFrame(someSortOfFunction)
}

someSortOfFunction()