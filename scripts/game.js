class Game {
  constructor(player, obstacle) {
    this.player = player
    this.obstacle = obstacle
  }

  start() {
    this.player.insertPlayer()
    this.obstacle.insertObs()
    this.timer = setInterval(() => {
      this.player.update()
      this.obstacle.move()
      console.log(this.obstacle.obsLeft)
    }, 24)
  }
}