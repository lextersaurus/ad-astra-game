class Player {
  constructor(x, y, parent) {
      this.astroTop = y
      this.astroLeft = x
      this.parent = parent
      this.sprite
      this.width = 94
      this.height = 82
      this.movementY = 10
      this.direction = 0
      this.isJumping = false
      this.gravity = 1
      this.isDead = false
      this.isMultiplier = false
  }

  insertPlayer() {
      let newPlayer = document.createElement('div')
      newPlayer.setAttribute('id', 'astronaut')
      newPlayer.style.top = this.astroTop + 'px'
      newPlayer.style.left = this.astroLeft + 'px'
      this.parent.appendChild(newPlayer)
      this.sprite = newPlayer
  }


  update() {
      this.astroTop -= this.movementY * this.direction * this.gravity
      this.sprite.style.top = `${this.astroTop}px`
      if (this.astroTop <= 30 && this.isJumping) {
          this.direction *= -1
          this.gravity = 1.5
      }
      if (this.astroTop >= 180){
          this.direction = 0
          this.gravity = 1
          this.isJumping = false
      }
  }

  jump() {
      this.direction = 1
      this.isJumping = true
  }
}