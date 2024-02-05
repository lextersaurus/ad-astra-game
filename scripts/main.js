let spacesObs = []
const board = document.getElementById('playingArea')
const floor = document.getElementById('floor')

let boardHeight = board.offsetHeight
let floorHeight = floor.offsetHeight
let playerHeight = 82

let astronautY = boardHeight  - floorHeight - playerHeight

const astronaut = new Player(30, astronautY, board)
const meteorite = new Obstacle(800, 187, 110, board, astronaut, spacesObs)

window.onload = () => {
  gameStart.start()
  document.addEventListener('keydown', moveAstronaut)
  spacesObs.push(meteorite)
}

function moveAstronaut(e) {
  if ((e.code == 'Space' || e.code == 'ArrowUp') && astronaut.astroTop >= astronautY) {
      astronaut.jump()
  }
}

const gameStart = new Game(astronaut, meteorite)