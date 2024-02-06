class Game {
  constructor(player, obstacle, parent, multiplier) {
    this.player = player
    this.obstacle = obstacle
    this.parent = parent
    this.multiplier = multiplier
    this.spacesObs = []
    this.multiArr = []
    this.currentObstacle = null
    this.currentMulti = null
    this.score = 0
    this.timerScore = null
    this.sprite
    this.timerId = null
    this.timerMulti = null
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

  addMultiplier() {
    const newMultiplier = this.multiplier()
    this.multiArr.push(newMultiplier)
    this.currentMulti = newMultiplier
    this.currentMulti.insertMultiplier()
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
    this.timerMulti = setInterval(() => {
      this.addMultiplier()
    }, 5000)
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
            clearInterval(this.timerScore)
        }
        if (this.player.isMultiplier) {
          this.score *= 2
        }
      }
    }, 24)
  }
}