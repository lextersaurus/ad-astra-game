class Game {
  constructor(player, obstacle) {
    this.player = player
    this.obstacle = obstacle
    this.spacesObs = []
    this.currentObstacle = null
  }

  addMeteorite() {
    const newMeteorite = this.obstacle()
    this.spacesObs.push(newMeteorite)
    this.currentObstacle = newMeteorite
    this.currentObstacle.insertObs()
  }

  start() {
    this.player.insertPlayer()
    this.timerId = setInterval (() => {
      this.addMeteorite()
    }, 2000)
    this.timer = setInterval(() => {
      this.player.update()
      this.currentObstacle.checkCollisons()
      this.currentObstacle.move()
      if (this.currentObstacle.isRemove) {
        this.spacesObs.shift()
        this.currentObstacle.removeEnemy()
        this.currentObstacle.isRemove = false
      }
      if (this.player.isDead) {
          alert('Game Over')
          clearInterval(this.timer)
          clearInterval(this.timerId)
        }
    }, 24)
  }
}