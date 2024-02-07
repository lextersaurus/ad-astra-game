window.onload = () => {
  createBackground()
  gameStart.start()
  document.addEventListener('keydown', moveAstronaut)
}

const board = document.getElementById('playingArea')

let boardHeight = board.offsetHeight
let floorHeight = floor.offsetHeight
let playerHeight = 123

let astronautY = boardHeight - floorHeight - playerHeight

const astronaut = new Player(30, astronautY, board)

function moveAstronaut(e) {
  if ((e.code == 'Space' || e.code == 'ArrowUp') && astronaut.astroTop >= astronautY) {
    astronaut.jump()
  }
}

function createObs() {
  return new Obstacle(1200, 289, 120, board, astronaut)
}

const gameStart = new Game(astronaut, createObs)

function createBackground() {
  const background = document.createElement('div')
  background.id = 'background'
  board.appendChild(background)

  background.style.width = '100%'
  background.style.height = '100%'
  background.style.background = 'url("/assets/purplebg.png")'

  const keyframes = [
    { backgroundPosition: '200% 0' }
  ]

  background.animate(keyframes, {
    duration: 200000,
    iterations: Infinity,
  })
}