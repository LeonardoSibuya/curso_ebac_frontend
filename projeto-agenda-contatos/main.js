const form = document.getElementById('formulario')
const nome = document.getElementById('name')
const pFixo = document.getElementById('ddd')
const tel = document.getElementById('numb')
const numTel = []
const nomeTel = []
const fixoTel = []
let erro = document.getElementById('n-erro')
let sucesso = document.getElementById('success')

let linhas = ''

function telValido(n) {
    if (Number(n) >= 10000000 && Number(n) <= 999999999){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function validaTel() {
    if (telValido(tel.value) && !inLista(tel.value, numTel)) {
        numTel.push(Number(tel.value))
        let linha = `<tr>
            <td>${nome.value}</td>
            <td>${pFixo.value}</td>
            <td>${tel.value}</td>
        </tr>`
        linhas += linha
        nome.value = ''
        pFixo.value = ''
        tel.value = ''
        erro.style.display = 'none'
        tel.style.border = 'none'
        sucesso.innerHTML = `O número ${tel.value} foi adicionado com sucesso`
        sucesso.style.display = 'block'
    } else {
        erro.innerHTML = `O número ${tel.value} está incorreto ou já foi adicionado`
        erro.style.display = 'block'
        tel.style.border = '3px solid red'
        tel.value = ''
        sucesso.style.display = 'none'
    }
}

function atualizaContato() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    validaTel()
    atualizaContato()
})

sucesso.style.display = 'none'
erro.style.display = 'none'
tel.style.border = 'none'