class Game {
    constructor(width, hight) {
        this.width = width
        this.hight = hight
        this.iceCreamsArray = init()
        this.ice = this.iceCreamsArray[0]
        this.player1 = new Player('player1')
        this.arr1 = []
        this.player2 = new Player('player2')
        this.arr2 = []
        this.randomalIces = []
    }
    draw(ctx) {
        this.ice.draw(ctx)
    }
    animate(ctx) {
        ctx.clearRect(0, 0, this.width, this.hight)
        this.ice.moveDown()
        this.draw(ctx)
        if (this.ice.point.y > 950 || this.ice.isReady) {
            this.ice.isReady = false
            this.ice.point.y = -250
            this.i1 = 0
            this.i2 = 0
            this.arr1 = []
            this.arr2 = []
            this.ice = this.iceCreamsArray[Math.trunc(Math.random() * this.iceCreamsArray.length)]
        }
    }
    pressNum(key, code) {
        // console.log(key)
        // console.log(this.ice.array);
        
        if (code === `Digit${key}`) {    //player1
            this.ice.i1 += 1
            this.arr1.push(key)
            if (this.ice.i1 === 5) {

                if (this.checkIcecreamsArr(this.arr1)) {

                    this.player1.points += 1
                    this.ice.isReady = true
                    document.querySelector('#points1').innerText = `Your points: ${this.player1.points}`

                }
                this.arr1 = []
                this.ice.i1 = 0
            }

        }

        else {    //player2
            this.ice.i2 += 1
            this.arr2.push(key)
            if (this.ice.i2 === 5) {
                if (this.checkIcecreamsArr(this.arr2)) {
                    this.player2.points += 1

                    this.ice.isReady = true
                    document.querySelector('#points2').innerText = `Your points: ${this.player2.points}`

                }
                this.arr2 = []
                this.ice.i2 = 0


            }
        }

    }

    checkIcecreamsArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== this.ice.array[i]) {
                return false
            }
        }

        return true
    }
}
