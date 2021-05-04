function sobre(){
    $(".painel-inicio").hide();
    $(".painel-sobre").show();
    $(".painel-galeria").hide();
    $(".painel-contato").hide();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").addClass("active");
    $(".nav-galeria").removeClass("active"); 
}

$(function(){
    $('.carrossel-videos').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
     
});
