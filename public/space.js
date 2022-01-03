const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const heroImg = new Image()
heroImg.src = '/hero.jpeg'
function Hero(x, y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = 0



    this.animate = function () {
        this.x = this.x + this.xVel
        this.y = this.y + this.yVel
        ctx.drawImage(heroImg, this.x, this.y, 10, 10)
    }
}

const hero1 = new Hero(0,0)

window.addEventListener("keyup" , function(event) {
    hero1.xVel = 0
    hero1.yVel = 0
})

window.addEventListener("keydown" , function(event) {
    if (event.key == 'w') {
        hero1.yVel = -1
    } else if (event.key == 'a'){
        hero1.xVel = -1
    } else if (event.key == 's'){
        hero1.yVel = 1
    } else if (event.key == 'd'){
        hero1.xVel = 1
    }
})

function someSortOfFunction() {
    void ctx.clearRect(0, 0, 1000, 1000);

    
    hero1.animate()

    requestAnimationFrame(someSortOfFunction)
}

someSortOfFunction()