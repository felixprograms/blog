const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const badImg = new Image()
const heroImg = new Image()
heroImg.src = '/hero.jpeg'
badImg.src = '/alien.jpeg'
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

function BadGuy(x,y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = 0
    this.animate = function () {
        this.x = this.x + this.xVel
        this.y = this.y + this.yVel
        ctx.drawImage(badImg, this.x, this.y, 15, 15)
    }
}
const hero1 = new Hero(150,100)
const aliens = []
for (let y = 0; y < 3; y += 1) {
    for (let i = 0; i < 15; i += 1) {
        const alien = new BadGuy(0 + i * 20, y * 20)
        aliens.push(alien)
    }
}
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
    aliens.forEach(alien => {
        alien.animate()
    })
    requestAnimationFrame(someSortOfFunction)
}

someSortOfFunction()