$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        $('#lista').slideDown()

        const tarefa = $('#item').val()
        let novoItem = $('<li style="margin: 5px auto;padding: 5px;width: 30%;font-size: 1em;font-style: italic; text-shadow: 0px 1px 2px #00000085;box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.562);background-color: #19192b; list-style: none;"></li>')
        $(`<li>${tarefa}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')

        $(novoItem).click(function(){
            $(novoItem).css("text-decoration", "line-through")
        })

        $('#item').val('') 
    })

    $('#botao-limpar').click(function(){
        $('#lista').slideUp()
    })
})