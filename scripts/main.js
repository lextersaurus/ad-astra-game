window.onload = () => {
  createBackground()
  gameStart.start()
  document.addEventListener('keydown', moveAstronaut)
}

const board = document.getElementById('playingArea')
const floor = document.getElementById('floor')

let boardHeight = board.offsetHeight
let floorHeight = floor.offsetHeight
let playerHeight = 123

let astronautY = boardHeight  - floorHeight - playerHeight

const astronaut = new Player(30, astronautY, board)
console.log(astronautY)
console.log(astronaut.astroTop)

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
  const floorbg = document.createElement('div')
  floorbg.id = 'floorbg'
  floor.appendChild(floorbg)

  floorbg.style.width = '100%'
  floorbg.style.height = '100%'
  floorbg.style.background = 'url("/assets/floorbg.png")'

  const keyframes = [
    {backgroundPosition: '200% 0'}
  ]

  floorbg.animate(keyframes, {
    duration: 20000,
    iterations: Infinity,
  })
}