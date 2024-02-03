class Player {
    constructor(x, y, sprite) {
        this.astroTop = y
        this.astroLeft = x
        this.sprite = sprite
        this.sprite.style.top = `${this.astroTop}px`
        this.sprite.style.left = `${this.astroLeft}px`
        this.movementY = 10
        this.timer = null
        this.direction = 1
        this.isJumping = false
        this.gravity = 1
    }

    jump() {
        this.timer = setInterval(() => {
            this.astroTop -= this.movementY * this.direction * this.gravity
            this.sprite.style.top = `${this.astroTop}px`
            if (this.astroTop <= 30) {
                this.direction *= -1
                this.gravity = 1.5
            }
            if (this.astroTop >= 188 && this.isJumping){
                this.stop()
                this.direction = 1
                this.gravity = 1
                this.isJumping = false
            }
        }, 30)
    }
    
    stop() {
        clearInterval(this.timer)
    }
}

const board = document.getElementById('playingArea')
const player = document.getElementById('astronaut')
const floor = document.getElementById('floor')

let boardHeight = board.offsetHeight
let floorHeight = floor.offsetHeight
let playerHeight = player.offsetHeight

let astronautY = boardHeight - playerHeight - floorHeight

const astronaut = new Player(30, astronautY, player)
console.log(astronaut.astroTop)