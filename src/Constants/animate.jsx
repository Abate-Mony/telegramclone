class Animate {

    constructor(top, left, right, bottom, starting) {
        this.top = top
        this.left = left
        this.right = right
        this.bottom = bottom
        this.position = {
            x: starting.x,
            y: starting.y
        }
        this.speed = { x: 5, y: 6 }
    }
    update() {
        this.check()
        return this.position
    }
    run(){
    
    setInterval(()=>{
    
    },100)
    }
    check() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        if (this.position.x > this.right ||
            this.position.x < 0) {
            this.speed.x = -this.speed.x
        }
        if (this.position.y > this.bottom ||
            this.position.y < 0) {
            this.speed.y = -this.speed.y
        }
    }

}
// const obj = (top = 0, left = 0, 
// right = window.innerWidth, bottom = window.innerHeight,starting= {
// x:0,y:0

// }) => {
//     return new Animate(top, left, right, bottom, starting)

// }
export default Animate