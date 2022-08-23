$(document).ready(function() {

    $('p').hide()

    $('#btn-resumo').click(function(e) {
        e.preventDefault()

        //Criar uma variável para receber o status
        let status = $(this).attr('data-status')
        $('p').toggle(2000)
        $('#btn-resumo').empty()


        if (status == '1') {
            $('#btn-resumo').append('Esconder resumo')
            $('#btn-resumo').attr('data-status', '2')
        } else {
            $('#btn-resumo').append('Ver resumo')
            $('#btn-resumo').attr('data-status', '1')
        }

    })

})