function sobre(){
    $(".painel-inicio").hide();
    $(".painel-sobre").show();
    $(".painel-fotos").hide();
    $(".painel-contato").hide();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").addClass("active");
    $(".nav-fotos").removeClass("active");
    $(".nav-contato").removeClass("active");   
}

function fotos(){
    $(".painel-inicio").hide();
    $(".painel-sobre").hide();
    $(".painel-fotos").show();
    $(".painel-contato").hide();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").removeClass("active");
    $(".nav-fotos").addClass("active");
    $(".nav-contato").removeClass("active");   
}

function contato(){
    $(".painel-inicio").hide();
    $(".painel-sobre").hide();
    $(".painel-fotos").hide();
    $(".painel-contato").show();
    $(".nav-inicio").removeClass("active");
    $(".nav-sobre").removeClass("active");
    $(".nav-fotos").removeClass("active");
    $(".nav-contato").addClass("active");   
}