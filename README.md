Hi how are you?
I'm starting this Back End Development journey and I'm asking for everyone's help.
Here, you will see my progress on this difficult but satisfying journey.
This project is a game development on the https://editor.p5js.org/ platform and it is not yet in the final version, so I have to develop a lot.

If you want to play online:
https://editor.p5js.org/pintofelipe2021/full/lOEfa28pA-

Once again I count on everyone's help with suggestions on how to improve it. Thank you all!


let casa = null
let pikachu = null
let charmander = null
let pokebola = null
let logoPokemon = null
let pedra = null
let dawn = null
let ganhou = null
let personagem = null
let grama = null
const tamanho = 64
let tela = 576
let andarX = 0
let andarY = 64
let velocidade = 64

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
