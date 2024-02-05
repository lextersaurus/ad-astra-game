class Obstacle {
  constructor(x, y, width, parent, player, spacesObs) {
    this.obsLeft = x
    this.obsTop = y
    this.width = width
    this.parent = parent
    this.player = player
    this.spacesObs = spacesObs
    this.height = 75
    this.sprite
    this.timer = null
    this.speed = 20
  }

  insertObs() {
    let newObs = document.createElement('div')
    newObs.classList.add('meteorite')
    newObs.style.left = `${this.obsLeft}px`
    newObs.style.top = `${this.obsTop}px`
    newObs.style.width = `${this.width}px`
    this.parent.appendChild(newObs)
    this.sprite = newObs
  }

  move() {
    this.obsLeft -= this.speed
    this.sprite.style.left = `${this.obsLeft}px`
    // this.checkCollisons()
    if (this.obsLeft <= -130) this.removeEnemy()
    // if (this.player.isDead) {
    //   alert('Game Over')
    //   this.player.stop()
    //   clearInterval(obsGenerator)
    //   this.spacesObs.forEach(spaceObs => {
    //     spaceObs.removeEnemy()
    //   })
    // }
  }

  removeEnemy(){
    this.parent.removeChild(this.sprite)
    this.spacesObs.shift()
  }

  // checkCollisons() {
  //   if (this.obsLeft < (this.player.astroLeft + this.player.width) &&
  //      (this.obsLeft + this.width) > this.player.astroLeft &&
  //      this.obsTop < (this.player.astroTop + this.player.height) &&
  //      (this.obsTop + this.height) > this.player.astroTop) {
  //     this.player.isDead = true
  //     console.log(this.player.astroLeft + this.player.width)
  //     console.log(this.obsLeft)
  //   }
  // }
}
