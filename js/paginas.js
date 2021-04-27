function sobre(){
    $(".painel-inicio").hide();
    $(".painel-sobre").show();
    $(".painel-galeria").hide();
    $(".painel-contato").hide();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").addClass("active");
    $(".nav-galeria").removeClass("active");
    $(".nav-contato").removeClass("active");   
}

function contato(){
    $(".painel-inicio").hide();
    $(".painel-sobre").hide();
    $(".painel-galeria").hide();
    $(".painel-contato").show();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").removeClass("active");
    $(".nav-galeria").removeClass("active");
    $(".nav-contato").addClass("active");   
}

$(function(){
    $('.carrossel-videos').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
     
});
