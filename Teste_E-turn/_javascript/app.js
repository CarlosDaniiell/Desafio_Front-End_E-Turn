$("#btnBuscarCep").on('click', function(){
    const cep = $("#cep").val()
    //https://api.postmon.com.br/v1/cep/*cep_a_consultar*

    $.ajax({
        url: 'https://api.postmon.com.br/v1/cep/' + cep, 
        dataType: 'json',
        success: function(res){
            console.log(res)
            $("#logradouro").val(res.logradouro)
            $("#bairro").val(res.bairro)
            $("#cidade").val(res.cidade)
            $("#uf").val(res.estado)
        }, error: function(error){
            console.log(error)
        }
    })
})