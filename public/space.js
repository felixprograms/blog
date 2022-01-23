const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const badImg = new Image()
const heroImg = new Image()
let pts = 0
heroImg.src = '/hero.jpeg'
badImg.src = '/alien.jpeg'
function Hero(x, y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = 0

    this.animate = function () {
        if (this.x + this.xVel > 0 && this.x + this.xVel < 300){
            this.x = this.x + this.xVel
        }
        if (this.y + this.yVel > 80 && this.y + this.yVel < 150){
            this.y = this.y + this.yVel
        }
        ctx.drawImage(heroImg, this.x, this.y, 10, 10)
    }
}
let audioObj = new Audio('/explosion.wav')
function Bullet(x, y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = -1
    this.isAlive = true

    this.animate = function () {
        ctx.beginPath()
        this.y = this.y + this.yVel
        ctx.fillStyle="blue"
        ctx.arc(this.x, this.y, 2, 0, 2*Math.PI, false)
        ctx.fill()
    }
}

function BadGuy(x,y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = 0
    this.isAlive = true
    this.animate = function () {
        this.x = this.x + this.xVel
        this.y = this.y + this.yVel
        ctx.drawImage(badImg, this.x, this.y, 15, 15)
        ctx.fillRect(this.x, this.y, 15, 15)
        
    }
    this.isHit = function (x,y) {
        if (x >= this.x && x <= this.x + 15 && y >= this.y && y <= this.y + 15){
            pts += 50
            document.getElementById("pts").innerHTML = pts
            return true
        } else {
            return false
        }

    }
}
const hero1 = new Hero(150,100)
let aliens = []
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
let bullets = []

window.addEventListener("keydown" , function(event) {
    console.log(event.key)
    if (event.key == 'w') {
        hero1.yVel = -2
    } else if (event.key == 'a'){
        hero1.xVel = -2
    } else if (event.key == 's'){
        hero1.yVel = 2
    } else if (event.key == 'd'){
        hero1.xVel = 2
    } else if (event.key == ' '){
        const bullet = new Bullet(hero1.x + 5, hero1.y + 5)

        bullets.push(bullet)      
    }
})

function someSortOfFunction() {
    void ctx.clearRect(0, 0, 1000, 1000);

    
    hero1.animate()
    aliens.forEach(alien => {
        alien.animate()
    })

    aliens.forEach(alien => {
        bullets.forEach((bullet) => {
            if (alien.isHit(bullet.x, bullet.y)) {
                bullet.isAlive = false
                alien.isAlive = false
                audioObj.play()
            }
        })
    })
    aliens = aliens.filter(alien => alien.isAlive)
    bullets = bullets.filter(bullet => bullet.isAlive)
    bullets.forEach(bullet => {
        bullet.animate()
    })

    bullets = bullets.filter(function (bullet){
        if (bullet.y <= 0){
            return false
        } else if (bullet.y > 500){
            return false
        } else {
            return true
        }
    })
    requestAnimationFrame(someSortOfFunction)
}

someSortOfFunction()