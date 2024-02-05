window.onload = () => {
    document.addEventListener('keydown', moveAstronaut)
}

function moveAstronaut(e) {
    if ((e.code == 'Space' || e.code == 'ArrowUp') && astronaut.astroTop >= astronautY) {
        astronaut.jump()
        astronaut.isJumping = true
    }
}