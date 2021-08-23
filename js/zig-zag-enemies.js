class  ZigZagEnemies{
    constructor(ctx, canvasSize, x, speedX, speedY, height, width, direction, rightLimit, leftLimit, randomSign, aleatoryGravity, randomColor) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.x = x
        this.y = 0
        this.height = height
        this.width = width
        this.speedX = 1     //15
        this.speedY = 1
        this.direction = direction
        this.gravity = .9//10
        this.rightLimit = rightLimit
        this.leftLimit = leftLimit
        this.randomSign = randomSign
        this.changedSpeed = undefined
        this.color = randomColor

    }

 

    // moveTo(){
    //     this.y += this.speedY

    //     if(this.x > 0 && this.x < this.leftLimit){
    //         this.x += this.speedX

    //         if (this.x > 3* this.rightLimit){
    //             console.log('entro al if')
    //             this.speedX -= this.gravity
    //             this.x += this.speedX
    //         }


    //         else if (this.x <  this.leftLimit) {
    //             console.log('entro al else')
    //             this.speedX += this.gravity
                
    //             this.x += this.speedX
    //         }

    //     }
    // }
    moveTo(){
        this.y += this.speedY

        // if (1 * this.canvasSize.w/4 > this.x < 3 * this.canvasSize.w/4){
            if (this.leftLimit > this.x < this.rightLimit){
            // console.log('entro al zig-zag')
            this.x += this.speedX

            if (this.x > 2* this.canvasSize.w /4){
                // console.log('entro al if')
                this.speedX -= this.gravity
                this.x += this.speedX
            }


            else if (this.x <  50 +this.canvasSize.w / 4) {
                // console.log('entro al else')
                this.speedX += this.gravity
                this.x += this.speedX
            }
        }
    }
        



    draw(){
        // console.log('DIBUJO ENEMIGOS')
        this.ctx = game.ctx
        this.ctx.fillStyle = this.color
        game.ctx.strokeRect(game.zigZagEnemies[0].x, game.zigZagEnemies[0].y, game.zigZagEnemies[0].width, game.zigZagEnemies[0].height)
        this.moveTo()
    }
}