class Game {
  constructor() {
    this.player = null
    this.spaceObstacles = []
    this.self = null
    this.score = 0
    this.timerScore = null
  }

  addAstronaut() {
    const board = document.getElementById('playingArea')
    const floor = document.getElementById('floor')

    let boardHeight = board.offsetHeight
    let floorHeight = floor.offsetHeight
    let playerHeight = 123

    let astronautY = boardHeight - floorHeight - playerHeight

    this.player = new Player(30, astronautY, board)
    this.player.insert()
  }

  moveAstronaut(e) {
    if ((e.code == 'Space' || e.code == 'ArrowUp') && self.player.astroTop >= self.player.initialTop) {
      self.player.jump()
    }
  }

  addObstacle() {
    const board = document.getElementById('playingArea')
    const newMeteorite = new Obstacle(1200, 289, 120, board, this.player)
    const newSpacecraft = new Obstacle(1200, 80, 120, board, this.player)
    let randomNum = Math.floor(Math.random()*100)
    if (randomNum <= 30) {
      this.spaceObstacles.push(newSpacecraft)
      newSpacecraft.insert()
      console.log(randomNum)
    } else {
      this.spaceObstacles.push(newMeteorite)
      newMeteorite.insert()
      console.log(randomNum)
    }
  }

  insertScore() {
    const board = document.getElementById('playingArea')
    let score = document.createElement('span')
    score.classList.add('score')
    score.innerText = this.score
    board.appendChild(score)
    this.sprite = score
  }

  updateScore() {
    this.sprite.innerText = this.score
  }

  /* addMultiplier() {
    const newMultiplier = this.multiplier()
    this.multiArr.push(newMultiplier)
    this.currentMulti = newMultiplier
    this.currentMulti.insertMultiplier()
  } */

  start() {
    this.createFloor()
    this.addAstronaut()
    this.insertScore()
    
    self = this
    document.addEventListener('keydown', this.moveAstronaut)

    this.timerScore = setInterval(() => {
      this.score += 5
      this.updateScore()
    }, 1000)


    this.addObstacleIntervalId = setInterval(() => {
      this.addObstacle()
    }, 2000)


    this.mainIntervalId = setInterval(() => {
      this.player.update()
      this.updateObstacle()

      if (this.player.isDead) this.gameOver()
    }, 24)
  }

  updateObstacle() {
    let currentObstacle = this.spaceObstacles[0]
    if (currentObstacle) {
      currentObstacle.move()
      currentObstacle.checkCollisions()

      if (currentObstacle.isRemoved) {
        currentObstacle.remove()
        this.spaceObstacles.shift()
      }
    }
  }

  gameOver() {
    alert('Game Over')
    clearInterval(this.mainIntervalId)
    clearInterval(this.addObstacleIntervalId)
    clearInterval(this.timerScore)
  }

  createFloor() {
    const floor = document.getElementById('floor')
    const floorbg = document.createElement('div')

    floorbg.id = 'floorbg'
    floor.appendChild(floorbg)

    floorbg.style.width = '100%'
    floorbg.style.height = '100%'
    floorbg.style.background = 'url("/assets/floorbg.png")'

    const keyframes = [
      { backgroundPosition: '200% 0' }
    ]

    floorbg.animate(keyframes, {
      duration: 15000,
      iterations: Infinity,
    })
  }

  createBackground() {
    const background = document.createElement('div')
    const board = document.getElementById('playingArea')

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
}