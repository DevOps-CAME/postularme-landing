$( document ).ready(function() {
$('#paso-1-empresa').css("display", "none");
$('#paso-2-empresa').css("display", "none");
$('#paso-3-empresa').css("display", "none");
$('#paso-4-empresa').css("display", "none");
$('#slider-title-empresa').css("display", "none");
$('#menu-empresa').css("display", "none");
});

$('#btn_postulante').click(function(){
console.log( "Postulante" );
$(this).addClass("activo");
$(this).removeClass("inactivo");
$('#btn_empresa').removeClass("activo");
$('#btn_empresa').addClass("inactivo");

$('#paso-1-postulante').css("display", "block");
$('#paso-2-postulante').css("display", "block");
$('#paso-3-postulante').css("display", "block");
$('#paso-4-postulante').css("display", "block");
$('#paso-1-empresa').css("display", "none");
$('#paso-2-empresa').css("display", "none");
$('#paso-3-empresa').css("display", "none");
$('#paso-4-empresa').css("display", "none");
$('#slider-title-postulante').css("display", "block");
$('#slider-title-empresa').css("display", "none");
$('#menu-postulante').css("display", "block");
$('#menu-empresa').css("display", "none");
});

$('#btn_empresa').click(function(){
console.log( "Empresa" );
$(this).addClass("activo");
$(this).removeClass("inactivo");
$('#btn_postulante').removeClass("activo");
$('#btn_postulante').addClass("inactivo");
$('#paso-1-postulante').css("display", "none");
$('#paso-2-postulante').css("display", "none");
$('#paso-3-postulante').css("display", "none");
$('#paso-4-postulante').css("display", "none");
$('#paso-1-empresa').css("display", "block");
$('#paso-2-empresa').css("display", "block");
$('#paso-3-empresa').css("display", "block");
$('#paso-4-empresa').css("display", "block");
$('#slider-title-postulante').css("display", "none");
$('#slider-title-empresa').css("display", "block");
$('#menu-postulante').css("display", "none");
$('#menu-empresa').css("display", "block");
});
