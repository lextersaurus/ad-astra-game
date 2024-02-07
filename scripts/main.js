window.onload = () => {
   const musicAdAstra = new Audio('/assets/sounds/Race-to-Mars.mp3');

   musicAdAstra.loop = true
   musicAdAstra.play()
   musicAdAstra.volume = 0.5
  
  const game = new Game()

  game.createBackground()
  document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('title-screen').classList.add('hidden')
    game.start()
  })

  document.getElementById('final-button').addEventListener('click', () => {
    document.getElementById('final-screen').classList.add('hidden')
    game.start()
  })
}