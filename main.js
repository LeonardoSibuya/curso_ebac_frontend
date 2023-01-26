//Classe abstração:

function VideoGame(modelo, fabricante, anoLancamento, nome, preco) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoLancamento = anoLancamento;
    this.comprou = function() {
        console.log(this.nome + " Comprou um novo video game")
    }

    Consumidor.call(this, nome)
    Preco.call(this, preco)
}

//Classes herdeiras:

function Consumidor(nome) {
    this.nome = nome;
}

function Preco(preco) {
    this.preco = preco;
}

//Instâncias de objetos

const cliente1 = new VideoGame("PLaystation 5", "Sony", 2020, "Leonardo", 4000)

const cliente2 = new VideoGame("Xbox One", "Microsoft", 2013, "Maria", 2000)

const cliente3 = new VideoGame("Nintendo Switch", "Nintendo", 2017, "Jade", 2.899)


console.log(cliente1.comprou())
console.log(cliente1)

console.log(cliente2.comprou())
console.log(cliente2)

console.log(cliente3.comprou())
console.log(cliente3)