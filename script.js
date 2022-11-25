// function to detect if an element is scrolled into view

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

// listen for scroll event

$(window).scroll(function () {
  // check if element is scrolled into view

  if (isScrolledIntoView($('#html'))) {
    // element is scrolled into view, add animation class

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

  if(isScrolledIntoView($('.about-me--text'))) {
    $('.about-me--text').addClass('opacity_animation_mini');
  }

  if(isScrolledIntoView($('#typing_men'))) {
    $('#typing_men').addClass('opacity_animation_mini');
  }
});