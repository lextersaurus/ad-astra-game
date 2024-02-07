class Multiplier {
  constructor(x, y, parent, player) {
    this.multiLeft = x
    this.multiTop = y
    this.parent = parent
    this.player = player
    this.sprite
    this.speed = 30
    this.height = 50
    this.width = 50
    this.isRemoved = false
  }

  insertMultiplier() {
    let newMulti = document.createElement('div')
    newMulti.classList.add('multiplier')
    newMulti.style.left = `${this.multiLeft}px`
    newMulti.style.top = `${this.multiTop}px`
    this.parent.appendChild(newMulti)
    this.sprite = newMulti
  }

  move() {
    this.multiLeft -= this.speed
    this.sprite.style.left = `${this.multiLeft}px`
    if (this.multiLeft <= -130) {
      this.isRemoved = true
    }
  }

  remove(){
    this.parent.removeChild(this.sprite)
  }

  checkTaken() {
    if (this.multiLeft < (this.player.astroLeft + this.player.width) &&
       (this.multiLeft + this.width) > this.player.astroLeft &&
       this.multiTop < (this.player.astroTop + this.player.height) &&
       (this.multiTop + this.height) > this.player.astroTop) {
      this.player.isMultiplier = true
    }
  }
}