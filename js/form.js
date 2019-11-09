
function toJson(){

    formJson = $('#faleConosco').serializeArray();

    if(formJson.length != 4) return toastr.error("Certifique-se que preencheu todos os campos...");
    
    for(i = 0; i < formJson.length; i++) {
        if(!formJson[i]["value"]) return toastr.error("A mensagem e os campos com * (asterisco) são obrigatórios.");
    }

    $.ajax({
        method: "POST",
        url: 'https://zegaroto.herokuapp.com/faleConosco',
        data: formJson,
        success: function(result){
            toastr.success(result);
        },
        error: function(result){
            toastr.error("Não foi possivel enviar sua mensagem, por favor recarrege a pagina e tente novamente.");
        }
    });
}
