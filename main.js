//Classe abstração:

function VideoGame(modelo, fabricante, jogo, joystick, precoAtual) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    
    Jogos.call(this, jogo);
    Acessorio.call(this, joystick);
    Price.call(this, precoAtual);
}

//Classes herdeiras:

function Jogos(jogo) {
    this.jogo = jogo;
}

function Acessorio(joystick) {
    this.joystick = joystick;
}

function Price(precoAtual) {
    this.precoAtual = precoAtual;
}

//Instâncias de objetos

const comobo1 = new VideoGame("PLaystation 5", "Sony", "God of War", "Dualsense", 4.499);
console.log(comobo1);

const comobo2 = new VideoGame("Xbox One", "Microsoft", "Halo Infinite", "Elite", 2.355);
console.log(comobo2);

const comobo3 = new VideoGame("Nintendo Switch", "Nintendo", "Super Mario World", "Joycon", 2.899);
console.log(comobo3);