window.onload = () => {
    astronaut
    document.addEventListener('keydown', moveAstronaut)
    console.log(astronaut)
}

function moveAstronaut(e) {
    if ((e.code == 'Space' || e.code == 'ArrowUp') && astronaut.astroTop >= astronautY) {
        astronaut.jump()
        astronaut.isJumping = true
    }
}