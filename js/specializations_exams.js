$('.toggler').click(function(){    
    if($(this).find('i').hasClass('fa-chevron-down')) {

        if(this.id === 'show-more') $(this.children).html('<i class="fa fa-chevron-up" aria-hidden="true"></i> Mostrar menos');
        else {
            $(this).find('i').removeClass('fa-chevron-down');
            $(this).find('i').addClass('fa-chevron-up');
        }
    }
    else{
        if(this.id === 'show-more') $(this.children).html('<i class="fa fa-chevron-down" aria-hidden="true"></i> Mostrar mais');
        else {
            $(this).find('i').removeClass('fa-chevron-up');
            $(this).find('i').addClass('fa-chevron-down');
        }
    }
});