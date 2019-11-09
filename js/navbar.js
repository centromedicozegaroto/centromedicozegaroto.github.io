$(window).scroll(function(){
    if ($(window).width() >= 992) {
        if($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
            $('#btn-to-top').css('visibility', 'visible');
        }
        else {
            $('nav').removeClass('shrink');
            $('#btn-to-top').css('visibility', 'hidden');
        }
    }
    
    if($(document).scrollTop() > 50) $('#btn-to-top').css('visibility', 'visible');
    else $('#btn-to-top').css('visibility', 'hidden');

});


$(document).ready(function(){
    var menu = $('.navbar.navbar-expand-lg.navbar-light.bg-success');

    var origOffsetY = menu.offset().top;
    
    $(window).scroll(function scroll(){
        if($(window).scrollTop() >= origOffsetY) {
            $(menu).addClass('fixed-top');            
            $('.cabecalho').css('margin-top', menu.height() + parseInt(menu.css('padding-top')) * 2);
        }
        else{
            $(menu).removeClass('fixed-top');
            $(menu).css('top', '0px');
            $('.cabecalho').css('margin-top', '0px');
        }
    });
});