$(document).ready(function () {

  $("#design").click(function(){
    $("#des").toggle();
    $("#desh").toggle();
  });

  $("#development").click(function(){
    $("#dev").toggle();
    $("#devh").toggle();
  });


  $("#products").click(function(){
    $("#prod").toggle();
    $("#prodh").toggle();
  });

  //hovering effect
  $(".four").hover(function () {
    $("#overlay4").show();
  })
  $(".four").mouseleave(function () {
    $("#overlay4").hide();
  })

  $(".three").hover(function () {
    $("#overlay3").show();
  })
  $(".three").mouseleave(function () {
    $("#overlay3").hide();
  })

});  