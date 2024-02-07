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
            // a medida que avanza el 'tiempo' la gravedad empuja al astronauta hacia abajo (resta velocidad en el eje y poco a poco)
            this.velocityY -= this.gravity
            // la posición del astronauta cambia conforme a su velocidad
            this.astroTop -= this.velocityY
            this.sprite.style.top = `${this.astroTop}px`
            
            // cuando el astranauta llega al suelo ya no está saltando y ya no tiene velocidad en el eje y
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
      }
  }