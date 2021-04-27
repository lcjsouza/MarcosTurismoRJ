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

function galeria(){
    $(".painel-inicio").hide();
    $(".painel-sobre").hide();
    $(".painel-galeria").show();
    $(".painel-contato").hide();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").removeClass("active");
    $(".nav-galeria").addClass("active");
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
        /* infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3 */
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
            }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
            }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick

            }
        ]
    });  
});
