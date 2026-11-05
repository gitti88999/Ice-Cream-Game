const game = new Game(250, 950)

const canvas1 = document.querySelector('.animate1')
const context1 = canvas1.getContext('2d')
const canvas2 = document.querySelector('.animate2')
const context2 = canvas2.getContext('2d')

function resizeCanvases() {
    const pixelRatio = window.devicePixelRatio || 1

    for (const canvas of [canvas1, canvas2]) {
        const { width, height } = canvas.getBoundingClientRect()
        canvas.width = Math.round(width * pixelRatio)
        canvas.height = Math.round(height * pixelRatio)
        canvas.getContext('2d').setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }
}

function startGame() {
    resizeCanvases()
    game.draw(context1)
    game.draw(context2)
    loop()
}

window.addEventListener('resize', resizeCanvases)

function loop() {

    if (game.player1.points < 10 && game.player2.points < 10) {
        game.animate(context1)
        game.animate(context2)
        window.requestAnimationFrame(loop)
    }
    else {
        let finished = document.createElement('div')
        finished.setAttribute('id', 'win')
        document.querySelector('body').innerText = ''
        if (game.player1.points > game.player2.points) {
            finished.innerText = `The winner is:${game.player1.name}`

        }
        else {
            finished.innerText = `The winner is:${game.player2.name}`

        }
        document.querySelector('body').appendChild(finished)

    }

}
startGame()


window.addEventListener('keydown', function (ev) {
    let { key } = ev;
    let { code } = ev;
    game.pressNum(key, code)

})