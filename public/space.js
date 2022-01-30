const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const badImg = new Image()
const heroImg = new Image()
let shooting_cooldown = 0
let pts = 0
heroImg.src = '/hero.jpeg'
badImg.src = '/alien.jpeg'
function Hero(x, y) {
    this.x = x
    this.y = y
    this.xVel = 0
    this.yVel = 0
    this.liveCounter = 3
    this.isHit = function (x,y) {
        if (x >= this.x && x <= this.x + 15 && y >= this.y && y <= this.y + 15){
            return true
        } else {
            return false
        }
    }
    this.isAlive = true
    
    this.animate = function () {
        if (this.x + this.xVel > 0 && this.x + this.xVel < 290){
            this.x = this.x + this.xVel
        }
        if (this.y + this.yVel > 80 && this.y + this.yVel < 140){
            this.y = this.y + this.yVel
        }
        ctx.drawImage(heroImg, this.x, this.y, 10, 10)
    }
}
let audioObj = new Audio('/explosion.wav')
function Bullet(x, y, xVel=0, yVel=0, hurtsAlien=false) {
    this.x = x
    this.y = y
    this.xVel = xVel
    this.yVel = yVel
    this.isAlive = true
    this.hurtsAlien = hurtsAlien
    

    this.animate = function () {
        ctx.beginPath()
        this.x = this.x + this.xVel
        this.y = this.y + this.yVel
        if (this.hurtsAlien) {
            ctx.fillStyle="blue"
        } else {
            ctx.fillStyle="red"
        }
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
    if (hero1.isAlive == false){
        return
    }
    if (event.key == 'w') {
        hero1.yVel = -2
    } else if (event.key == 'a'){
        hero1.xVel = -2
    } else if (event.key == 's'){
        hero1.yVel = 2
    } else if (event.key == 'd'){
        hero1.xVel = 2
    } else if (event.key == ' '){
        if (shooting_cooldown <= 0){
            const bullet = new Bullet(hero1.x + 5, hero1.y + 5, 0, -1, true)
            shooting_cooldown += 1
            bullets.push(bullet)      
        }
            
    }
})

function getRandomInteger(x){
    return Math.floor(Math.random() * x)
}
function enemyShoots() {
    const randAlien = aliens[getRandomInteger(aliens.length)]
    if (getRandomInteger(10) == 1) {
        const bullet = new Bullet(randAlien.x + 5, randAlien.y + 5, 0, 1)
        bullets.push(bullet)


    }
}

function someSortOfFunction() {
    void ctx.clearRect(0, 0, 1000, 1000);
    enemyShoots()
    if (shooting_cooldown >= 0){
        shooting_cooldown -= 0.05

    }
    if (hero1.isAlive) {
        hero1.animate()
    }
    aliens.forEach(alien => {
        alien.animate()
    })
    if (hero1.liveCounter == 0){
        hero1.isAlive = false
    }
    aliens.forEach(alien => {
        bullets.forEach((bullet) => {
            if (bullet.hurtsAlien && alien.isHit(bullet.x, bullet.y)) {
                bullet.isAlive = false
                alien.isAlive = false
                audioObj.play()
            }
            if (bullet.hurtsAlien == false && hero1.isHit(bullet.x, bullet.y)){
                hero1.liveCounter -= 1
                document.getElementById("lives").innerHTML = hero1.liveCounter
                bullet.isAlive = false
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