window.onload = () => {
  const game = new Game()

  game.createBackground()
  document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('title-screen').classList.add('hidden')
    game.start()
  })

  /* if (game.isGameOver) {
    document.getElementById('final_screen').classList.remove('hidden')
  } */
}