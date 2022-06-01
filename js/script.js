$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $(".practice-showing").toggle();
    $(".practice-hidden").toggle();
  });
  
});

