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


  $(".two").hover(function () {
    $("#overlay2").show();
  })
  $(".two").mouseleave(function () {
    $("#overlay2").hide();
  })

  $(".one").hover(function () {
    $("#overlay1").show();
  })
  $(".one").mouseleave(function () {
    $("#overlay1").hide();
  })

  $(".five").hover(function () {
    $("#overlay5").show();
  })
  $(".five").mouseleave(function () {
    $("#overlay5").hide();
  })

  $(".six").hover(function () {
    $("#overlay6").show();
  })
  $(".six").mouseleave(function () {
    $("#overlay6").hide();
  })

  $(".seven").hover(function () {
    $("#overlay7").show();
  })
  $(".seven").mouseleave(function () {
    $("#overlay7").hide();
  })

  $(".eight").hover(function () {
    $("#overlay8").show();
  })
  $(".eight").mouseleave(function () {
    $("#overlay8").hide();
  })

});  