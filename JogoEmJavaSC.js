let casa
let pikachu
let charmander
let pokebola
let logoPokemon
let pedra
let dawn
let ganhou
let personagem
let grama
const tamanho = 64
let tela = 576
let andarX = 0
let andarY = 64
let velocidade = 64

// é chamada apenas uma vz ao executar o programa
function setup() {
    createCanvas(tela, tela);
    personagem = loadImage('4ad86a29264195831d7e2433b7333af3.png')
    grama = loadImage('istockphoto-1356910724-170667a.jpg')
    ganhou = loadImage('360_F_573869438_VIjKt0t5GQ4oxnVW6IBrxXYhQOsyK9My.png')
    dawn = loadImage('dcxo4z7-a32a43dd-7a57-41d4-a2b5-cbdacda027c2.png')
    pedra = loadImage('pedra.png')
    logoPokemon = loadImage('logoPokemon.png')
    pikachu = loadImage('pikachu.png')
    charmander = loadImage('charmander.png')
    pokebola = loadImage('pokebola.png')
    casa = loadImage('casa.png')
}

// fica executando até o programa seja encerrado
function draw() {
    background(200);

    if (andarX < 0) {
        andarX = 0
    }

    if (andarY < 0) {
        andarY = 0

    }
    if (andarX > 512) {
        andarX = 512
    }

    if (andarY > 512) {
        andarY = 512

    }






    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, i * tamanho, j * tamanho, tamanho, tamanho)
        }
        if (andarX === 512 && andarY === 512) {


            image(ganhou, 140, 200, 300, 200)

            restart = createButton('Reiniciar')
            restart.mousePressed(reset)
            noLoop()
        }
        if (andarX === 320 && andarY === 448) {


            image(FOI-CAPTURADO , 140, 200, 300, 200)

            restart = createButton('Reiniciar')
            restart.mousePressed(reset)
            noLoop()
        }
        
        function reset() {
            andarX = 0
            andarY = 64
            restart.remove()
            loop()
        }
    }


    image(personagem, andarX, andarY, tamanho, tamanho)
    image(dawn, 512, 512, 64, 64)
    image(pedra, 64, 0, 64, 64)
    image(pedra, 128, 0, 64, 64)
    image(pedra, 512, 0, 64, 64)
    image(pedra, 448, 0, 64, 64)
    image(logoPokemon, 192, 0, 256, 64)
    image(pikachu, 128, 0, 256, 64)
    image(pokebola, 320, 448, 64, 64)
    image(charmander, 128, 0, 256, 64)
    image(casa, 0, 0, 64, 64)

}

// é chamada uma vez toda vez que a tecla é pressionada
function keyPressed() {

    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }
    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }
    if (personagem === dawn) {
        dawn = 576, 576, 64, 64
    }
}
