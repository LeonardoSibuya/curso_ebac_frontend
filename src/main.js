class AlunosDaClasse {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}


const aluno1 = new AlunosDaClasse('João', 4)

const aluno2 = new AlunosDaClasse('Maria', 10)

const aluno3 = new AlunosDaClasse('Jade', 8)

const aluno4 = new AlunosDaClasse('Erika', 6)

const aluno5 = new AlunosDaClasse('Laercio', 3)

const alunosTotal = [aluno1, aluno2, aluno3, aluno4, aluno5]


const alunosNotaAzul = alunosTotal.filter(function(aluno) {
    return aluno.nota >= 6
})

console.log(alunosNotaAzul)