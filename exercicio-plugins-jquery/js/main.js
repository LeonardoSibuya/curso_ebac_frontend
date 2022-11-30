$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000',{
        placeholder: '00000-000'
    })

    $('#tel').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            adress: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Obrigatório</br>',
            email: 'Obrigatório</br>',
            tel: 'Obrigatório</br>',
            cpf: 'Obrigatório</br>',
            adress: 'Obrigatório</br>',
            cep: 'Obrigatório',
        },
        submitHandler: function(form) {
            alert('OBA! Seu cadastro foi realizado com sucesso!')
            $('.valor').val('')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`[ERRO] - Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})