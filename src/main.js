let s
let scl = 20
let points = 0
let food

function setup () {
    createCanvas(600,600)
    s = new Snake()
    frameRate(7)
    pickLocation()
}

function pickLocation() {
    var cols = floor(width/scl)
    var rows = floor(height/scl)
    food = createVector(floor(random(cols)), floor(random(rows)))
    food.mult(scl)
}

function draw() {
    background(0)
parede()
    fill(255, 0, 0)
    rect(food.x, food.y, scl, scl)

    s.update()
    s.show()

    if (s.eat(food)) {
        pickLocation()
    }
   
    fill(100, 100, 100, 100)
    rect(1, 1, 80, 20)
    fill(255)

    textSize(20)
    fill(255)
    text(points, 10, 18)
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0,-1)
    }else if(keyCode === DOWN_ARROW){
        s.dir(0,1)
    }else if(keyCode === RIGHT_ARROW){
        s.dir(1,0)
    }else if(keyCode === LEFT_ARROW){
        s.dir(-1,0)
    }
}

function parede() {
    s.x > width ? s.x = 0 : false
    s.x < 0 ? s.x = width+20 : false

    s.y > height ? s.y = 0 : false
    s.y < 0 ? s.y = height+20 : false
}