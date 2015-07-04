$(document).ready(function() {

  // main link hovers

  $('#mainlink1').mouseenter(function() {
    $('#line-1').css('width', '120px');
    $('#line-1').css('opacity', '1');
  });

  $('#mainlink1').mouseleave(function() {
    $('#line-1').css('width', '10px');
    $('#line-1').css('opacity', '0');
  });

  $('#mainlink2').mouseenter(function() {
    $('#line-2').css('width', '108px');
    $('#line-2').css('opacity', '1');
  });

  $('#mainlink2').mouseleave(function() {
    $('#line-2').css('width', '10px');
    $('#line-2').css('opacity', '0');
  });

  $('#mainlink3').mouseenter(function() {
    $('#line-3').css('width', '106px');
    $('#line-3').css('opacity', '1');
  });

  $('#mainlink3').mouseleave(function() {
    $('#line-3').css('width', '10px');
    $('#line-3').css('opacity', '0');
  });

  $('#mainlink4').mouseenter(function() {
    $('#line-4').css('width', '320px');
    $('#line-4').css('opacity', '1');
  });

  $('#mainlink4').mouseleave(function() {
    $('#line-4').css('width', '60px');
    $('#line-4').css('opacity', '0');
  });

  $('#mainlink5').mouseenter(function() {
    $('#line-5').css('width', '176px');
    $('#line-5').css('opacity', '1');
  });

  $('#mainlink5').mouseleave(function() {
    $('#line-5').css('width', '30px');
    $('#line-5').css('opacity', '0');
  });

  //menu home hover

  $('.linktitle').mouseenter(function() {
    $(this).css('opacity', '.5');
  });

  $('.linktitle').mouseleave(function() {
    $(this).css('opacity', '1');
  });

  // mitchell hover

  $('.mitchell').mouseenter(function() {
    $(this).css('opacity', '.5');
  });

  $('.mitchell').mouseleave(function() {
    $(this).css('opacity', '1');
  });

  
  

});

