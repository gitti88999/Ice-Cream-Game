class IceCream {
    constructor(pictureId, array) {
        this.pictureId = pictureId
        this.array = array
        this.isReady = false
        this.point = new Point(-120, -250)
        this.i1 = 0
        this.i2 = 0

    }

    draw(ctx) {
        const width = ctx.canvas.clientWidth
        const height = ctx.canvas.clientHeight
        const imageWidth = Math.min(width * 0.9, height * 0.55)
        const imageHeight = imageWidth * 0.8
        const x = (width - imageWidth) / 2
        const y = (this.point.y / 950) * height

        ctx.drawImage(document.querySelector(`#${this.pictureId}`), x, y, imageWidth, imageHeight)

    }
    moveDown() {
        this.point.moveDown()
    }
}
