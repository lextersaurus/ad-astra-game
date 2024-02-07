class Game {
  constructor(player, obstacle) {
    this.player = player
    this.obstacle = obstacle
    this.spaceObstacles = []
  }

  addObstacle() {
    const newMeteorite = this.obstacle()
    this.spaceObstacles.push(newMeteorite)
    newMeteorite.insert()
  }

  start() {
    this.player.insert()
    this.createFloor()

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
}