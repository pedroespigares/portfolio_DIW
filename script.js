// Function para detectar si un elemento ha sido scrolleado a la vista

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


$(document).ready(function() {
  $(".hamburger-lines").click(() => {
    $(".checkbtn").toggleClass("open");
    $("body").toggleClass("fixed_position");
  });

  // Cerrar menu al pulsar enlace
  $(".menu a").click(() => {
    $(".checkbtn").removeClass("open");
    $("body").removeClass("fixed_position");
  });

});

// Escucha del evento de scroll

$(window).scroll(function () {
  // Comprobamos si el elemento ha sido scrolleado a la vista

  if (isScrolledIntoView($('#html'))) {
    // Si es así, añadimos la clase correspondiente a la animacion al elemento.
    // Si queremos que al salir de la vista se quite la clase, añadimos un else con la funcion removeClass
    // Haciendo esto conseguimos que la animacion se ejecute cada vez que el elemento entra en la vista

    $('#html').addClass('progress-bar--html');
  } else{
    $('#html').removeClass('progress-bar--html');
  }
  
  if(isScrolledIntoView($('#css'))) {
    $('#css').addClass('progress-bar--css');
  } else{
    $('#css').removeClass('progress-bar--css');
  }
  
  if(isScrolledIntoView($('#js'))) {
    $('#js').addClass('progress-bar--js');
  } else{
    $('#js').removeClass('progress-bar--js');
  }

  if(isScrolledIntoView($('#react'))) {
    $('#react').addClass('progress-bar--react');
  } else{
    $('#react').removeClass('progress-bar--react');
  }
  
  if(isScrolledIntoView($('#python'))) {
    $('#python').addClass('progress-bar--python');
  } else{
    $('#python').removeClass('progress-bar--python');
  }

  if(isScrolledIntoView($('#php'))) {
    $('#php').addClass('progress-bar--php');
  } else{
    $('#php').removeClass('progress-bar--php');
  }

  if(isScrolledIntoView($('#sql'))) {
    $('#sql').addClass('progress-bar--mysql');
  } else{
    $('#sql').removeClass('progress-bar--mysql');
  }
  
  if(isScrolledIntoView($('#node'))) {
    $('#node').addClass('progress-bar--node');
  } else{
    $('#node').removeClass('progress-bar--node');
  }

  if(isScrolledIntoView($('.p_percentage'))) {
    $('.p_percentage').addClass('opacity_animation');
  } else{
    $('.p_percentage').removeClass('opacity_animation');
  }

  // A la animacion de aparicion del about me no le ponemos un else porque queremos que se quede visible una vez que se ha mostrado

  if(isScrolledIntoView($('.about-me--text'))) {
    $('.about-me--text').addClass('opacity_animation_mini');
  }

  if(isScrolledIntoView($('#typing_men'))) {
    $('#typing_men').addClass('opacity_animation_mini');
  }
});