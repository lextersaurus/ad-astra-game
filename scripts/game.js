class Game {
  constructor() {
    this.player = null
    this.spaceObstacles = []
    this.multiArr = []
    this.self = null
    this.score = 0
    this.timerScore = null
    this.currentScore
    this.powerUpSound = new Audio('./assets/sounds/poweruptaken.wav')
  }

  addAstronaut() {
    const board = document.getElementById('playingArea')
    const floor = document.getElementById('floor')

    let boardHeight = board.offsetHeight
    let floorHeight = floor.offsetHeight
    let playerHeight = 123

    let astronautY = boardHeight - floorHeight - playerHeight

    this.player = new Player(100, astronautY, board)
    this.player.insert()
  }

  moveAstronaut(e) {
    if ((e.code == 'Space' || e.code == 'ArrowUp') && self.player.astroTop >= self.player.initialTop) {
      self.player.jump()
    }
  }

  addObstacle() {
    const board = document.getElementById('playingArea')
    const newMeteorite = new Obstacle(1200, 289, 120, board, this.player, 'meteorite')
    const newSpacecraft = new Obstacle(1200, 80, 120, board, this.player, 'spaceCraft')
    let randomNum = Math.floor(Math.random()*100)
    if (randomNum <= 30) {
      this.spaceObstacles.push(newSpacecraft)
      newSpacecraft.insert()
    } else {
      this.spaceObstacles.push(newMeteorite)
      newMeteorite.insert()
    }
  }

  insertScore() {
    const board = document.getElementById('playingArea')
    let score = document.createElement('span')
    score.classList.add('score')
    score.innerText = this.score
    board.appendChild(score)
    this.currentScore = score
  }

  updateScore() {
    this.currentScore.innerText = this.score
  }

  addMultiplier() {
    const board = document.getElementById('playingArea')
    const newMulti = new Multiplier(1200, 40, board, this.player)
    this.multiArr.push(newMulti)
    newMulti.insertMultiplier()
  }

  start() {
    this.createFloor()
    
    const floor = document.getElementById('floor')
    floor.classList.remove('hidden')
    
    this.addAstronaut()
    this.insertScore()
    
    self = this
    document.addEventListener('keydown', this.moveAstronaut)

    this.timerScore = setInterval(() => {
      this.score += 5
      if (this.player.isMultiplier) {
        this.multiArr[0].remove()
        this.multiArr.shift()
        this.multiply()
      }
      this.updateScore()
    }, 1000)


    this.addObstacleIntervalId = setInterval(() => {
      this.addObstacle()
    }, 1300)

    this.addMultiIntervalId = setInterval(() => {
      this.addMultiplier()
    }, 6000)

    this.mainIntervalId = setInterval(() => {
      this.player.update()
      this.updateObstacle()
      this.updateMultiplier()

      if (this.player.isDead) {
        this.stopScore()
        this.gameOver()
      }
    }, 24)
  }

  updateObstacle() {
    let currentObstacle = this.spaceObstacles[0]
    if (currentObstacle) {
      currentObstacle.checkCollisions()
      currentObstacle.move()

      if (currentObstacle.isRemoved) {
        currentObstacle.remove()
        this.spaceObstacles.shift()
      }
    }
  }

  updateMultiplier() {
    let currentMulti = this.multiArr[0]
    if (currentMulti) {
      currentMulti.checkTaken()
      if (this.player.isMultiplier) {
        currentMulti.remove()
        this.powerUpSound.play()
      }
      currentMulti.move()

      if (currentMulti.isRemoved) {
        currentMulti.remove()
        this.multiArr.shift()
      }
    }
  }

  gameOver() {
    const wilhelmscream = new Audio('./assets/sounds/wilhelmscream.mp3') 
    wilhelmscream.play()
    wilhelmscream.volume = 0.5

    clearInterval(this.mainIntervalId)
    clearInterval(this.addObstacleIntervalId)
    clearInterval(this.timerScore)
    clearInterval(this.addMultiIntervalId)
    this.reStart()
  }

  reStart() {
    document.getElementById('final-screen').classList.remove('hidden')
    const floor = document.getElementById('floor')
    floor.classList.add('hidden')
    this.player.sprite.classList.add('hidden')
    this.spaceObstacles[0].sprite.classList.add('hidden')
    this.multiArr[0].sprite.classList.add('hidden')
    this.player = null
    this.spaceObstacles = []
    this.multiArr = []
    this.self = null
    this.score = 0
    this.timerScore = null
  }

  multiply() {
    if (this.player.isMultiplier) {
      this.score *= 2
      this.player.isMultiplier = false
    }
  }

  stopScore() {
    this.score = 0
    this.currentScore.innerText = 0
    this.currentScore.classList.add('hidden')
  }

  createFloor() {
    const floor = document.getElementById('floor')
    const floorbg = document.createElement('div')

    floorbg.id = 'floorbg'
    floor.appendChild(floorbg)

    floorbg.style.width = '100%'
    floorbg.style.height = '100%'
    floorbg.style.background = 'url("./assets/floorbg.png")'

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
    background.style.background = 'url("./assets/purplebg.png")'

    const keyframes = [
      { backgroundPosition: '200% 0' }
    ]

    background.animate(keyframes, {
      duration: 200000,
      iterations: Infinity,
    })
  }
}