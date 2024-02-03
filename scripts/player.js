class Player {
    constructor(x, y, sprite) {
        this.astroTop = y
        this.astroLeft = x
        this.sprite = sprite
        this.sprite.style.top = `${this.astroTop}px`
        this.sprite.style.left = `${this.astroLeft}px`
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