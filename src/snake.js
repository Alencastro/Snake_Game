function Snake() {
    this.x = 20
    this.y = 20
    this.xspeed = 1
    this.yspeed = 0
    this.total = 0
    this.tail = []

    this.dir = function(x, y){
        this.yspeed = y
        this.xspeed = x
    }

    this.update = function(){
        if (this.total === this.tail.length){
            for (let i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1]
                if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                        this.x = 100
                        this.y = 100
                        this.total = 0
                        this.tail.splice(0, this.tail.length)
                        points = 0
                    }
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y)

        this.x += this.xspeed*scl
        this.y += this.yspeed*scl
    }

    this.show = function(){
        for (var i = 0; i < this.tail.length; i++) {
            fill(0, 233, 123)
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
        }
        fill(0, 203, 123)
        rect(this.x, this.y, scl, scl)
    }

    this.eat = function(pos) {
        
        var d = dist(this.x, this.y, pos.x, pos.y)
        if (d < 1) {
            this.total++
            points++
            return true
        }else {return false}
    }

}