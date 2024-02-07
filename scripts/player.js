class Player {
    constructor(x, y, parent) {
        this.astroTop = y
        this.astroLeft = x
        this.parent = parent
        this.sprite
        this.width = 90 
        this.height = 123
        this.movementY = 15
        this.isJumping = false
        this.gravity = 1
        this.isDead = false
        this.jumpStrength = 22
        this.initialTop = y
        this.jumpingSound = new Audio('assets/sounds/jump.wav')
    }
  
    insert() {
        let newPlayer = document.createElement('div')
        newPlayer.setAttribute('id', 'astronaut')
        newPlayer.style.top = this.astroTop + 'px'
        newPlayer.style.left = this.astroLeft + 'px'
        this.parent.appendChild(newPlayer)
        this.sprite = newPlayer
    }
  
    update() {
        if (this.isJumping) {
            this.velocityY -= this.gravity
            this.astroTop -= this.velocityY
            this.sprite.style.top = `${this.astroTop}px`
            
            if(this.astroTop >= 289) {
                this.isJumping = false
                this.velocityY = 0
                this.sprite.style.top = `${this.initialTop}px`
            }
        }
    }
  
      jump() {
          if (this.isJumping) return
          this.isJumping = true
          this.velocityY = this.jumpStrength

          this.jumpingSound.play()
          this.jumpingSound.volume = 0.7
      }
  }