$("#btn_postulante").click(function () {
  console.log("Postulante");
  $(this).addClass("activo");
  $(this).removeClass("inactivo");
  $("#btn_empresa").removeClass("activo");
  $("#btn_empresa").addClass("inactivo");

  $("#paso-1-postulante").delay(250).fadeIn();
  $("#paso-2-postulante").delay(450).fadeIn();
  $("#paso-3-postulante").delay(650).fadeIn();
  $("#paso-4-postulante").delay(850).fadeIn();

  $(
    "#paso-1-empresa, #paso-2-empresa, #paso-3-empresa, #paso-4-empresa"
  ).fadeOut();
  $("#slider-title-postulante").fadeIn();

  $("#menu-empresa, #slider-title-empresa").css("display", "none");

  $("#menu-postulante").css("display", "block");
});

$("#btn_empresa").click(function () {
  console.log("Empresa");
  $(this).addClass("activo");
  $(this).removeClass("inactivo");
  $("#btn_postulante").removeClass("activo");
  $("#btn_postulante").addClass("inactivo");

  $(
    "#paso-1-postulante, #paso-2-postulante, #paso-3-postulante, #paso-4-postulante"
  ).fadeOut();

  $("#paso-1-empresa").delay(250).fadeIn();
  $("#paso-2-empresa").delay(450).fadeIn();
  $("#paso-3-empresa").delay(650).fadeIn();
  $("#paso-4-empresa").delay(850).fadeIn();

  $("#slider-title-empresa").fadeIn();

  $("#menu-postulante,#slider-title-postulante").css("display", "none");
  $("#menu-empresa").css("display", "block");
});


/*
var hizoClic = "";
var usuario = "postulante";
setTimeout(function () {
  if (hizoClic == "") {
    function hacerClic() {
      if (usuario == "postulante") {
        console.log("hago clic en empresa");
        $("#btn_empresa").click();
        usuario = "empresa";
      } else {
        console.log("hago clic en postulante");
        $("#btn_postulante").click();
        usuario = "postulante";
      }
    }

    hacerClic();
  }
}, 6 * 1000);*/
