class Game {
  constructor(player, obstacle, parent) {
    this.player = player
    this.obstacle = obstacle
    this.parent = parent
    this.spacesObs = []
    this.currentObstacle = null
    this.score = 0
    this.timerScore = null
    this.sprite 
  }

  addMeteorite() {
    const newMeteorite = this.obstacle()
    this.spacesObs.push(newMeteorite)
    this.currentObstacle = newMeteorite
    this.currentObstacle.insertObs()
  }

  insertScore() {
    let score = document.createElement('span')
    score.classList.add('score')
    score.innerText = this.score
    this.parent.appendChild(score)
    this.sprite = score
  }

  updateScore() {
    this.sprite.innerText = this.score
  }

  start() {
    this.player.insertPlayer()
    this.insertScore()
    this.timerScore = setInterval(() => {
      this.score += 5
      this.updateScore()
    }, 1000)
    this.timerId = setInterval (() => {
      this.addMeteorite()
    }, 2000)
    this.timer = setInterval(() => {
      this.player.update()
      if (this.currentObstacle !== null) {
        this.currentObstacle.checkCollisons()
        this.currentObstacle.move()
        if (this.currentObstacle.isRemove) { 
          this.spacesObs.shift()
          this.currentObstacle.isRemove = false
          this.currentObstacle.removeEnemy()
        }
        if (this.player.isDead) {
            alert('Game Over')
            console.log(this.score)
            clearInterval(this.timer)
            clearInterval(this.timerId)
        }
      }
    }, 24)
  }
}