$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
    $("img").fadeIn();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle(); 
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus2-showing").fadeToggle();
    $("#walrus2-hidden").fadeToggle();
  });
});