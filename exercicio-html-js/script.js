function validar() {
    var campoUm = document.getElementById('campa')
    var campoDois = document.getElementById('campb')
    var valido = document.getElementById('formvalido')
    var res = document.getElementById('res')
    var val = document.getElementById('val')

    if (campoUm.value.length == 0 || campoDois.value.length == 0) {
        res.innerHTML = '<strong>[ERRO] Impossível contar. <br>Por favor, preencha os campos acima!</strong>'
        valido.innerHTML = ' '
        val.style.display = 'none'
    } else {
        var n1 = Number(campoUm.value)
        var n2 = Number(campoDois.value)
    } if (n1 >= n2) {
        res.innerHTML = `O número <strong>${n1}</strong> é maior ou igual o número <strong>${n2}</strong>, desta forma o formulário é inválido!`
        valido.innerHTML = ' '
        val.style.display = 'none'
    } else if (n1 < n2){
        valido.innerHTML = `O número <strong>${n2}</strong> é maior que o número <strong>${n1}</strong>. <br> Parabéns, este formulário é <strong>valido!</strong>`
        res.innerHTML = ' '
        val.style.display = 'block'
    }
}

val.style.display = 'none'
