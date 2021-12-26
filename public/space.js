const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 0
let y = 0
window.addEventListener("keydown" , function(event) {
    if (event.key == 'ArrowUp') {
        y -= 1
    } else if (event.key == 'ArrowLeft'){
        x -= 1
    } else if (event.key == 'ArrowDown'){
        y += 1
    } else if (event.key == 'ArrowRight'){
        x += 1
    }
})
function someSortOfFunction() {
    void ctx.clearRect(0, 0, 1000, 1000);

    ctx.fillStyle = 'green';
    ctx.fillRect(x, y, 10, 10);

    requestAnimationFrame(someSortOfFunction)
}

someSortOfFunction()