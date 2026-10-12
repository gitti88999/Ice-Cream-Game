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
        ctx.drawImage(document.querySelector(`#${this.pictureId}`), this.point.x, this.point.y, 500, 400)

    }
    moveDown() {
        this.point.moveDown()
    }
}

