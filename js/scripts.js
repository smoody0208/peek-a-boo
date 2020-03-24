$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus2-showing").toggle();
    $("#walrus2-hidden").toggle();
  });
});