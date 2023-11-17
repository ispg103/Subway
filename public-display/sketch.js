//Crear el socket
let socket = io();

let info = "todavia no hay nada"

function setup() {
    frameRate(60)
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(0, 10)
    console.log(info)
}

socket.on('confirmation', (data) => {
    info = data
})