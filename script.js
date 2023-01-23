let font
let graphic


function preload () {
font = loadFont("spacegrotesk-medium.otf")
}


function setup() {
createCanvas(500, 500)

graphic = createGraphics(500, 500)

graphic.textFont(font)
graphic.textSize(400)
graphic.fill("#0000ff")
graphic.textAlign(CENTER, CENTER)
graphic.text("no", width / 2, height / 2)
}

function draw() {
    background("#9acd32")

    let val = sin(frameCount * 0.02) * 250

    copy(graphic, 0, 0, 500, 500, 0, 0, 250 + val, 500)
    copy(graphic, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500)
}