$(document).ready(function() {

  // main link hovers

  function lineWidth (link, line, pixels1, pixels2) {
    $(link).mouseenter(function() {
      $(line).css('width', pixels1);
      $(line).css('opacity', '1');
    });

    $(link).mouseleave(function() {
      $(line).css('width', pixels2);
      $(line).css('opacity', '0');
    });
  }

  lineWidth("#mainlink1", "#line-1", "120px", "10px");
  lineWidth("#mainlink2", "#line-2", "108px", "10px");
  lineWidth("#mainlink3", "#line-3", "106px", "10px");
  lineWidth("#mainlink4", "#line-4", "320px", "60px");
  lineWidth("#mainlink5", "#line-5", "176px", "30px");

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

  // back to top 

  if ($(window).width() > 480) {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 318) {
        $('.backtotop').css('opacity', '1');
        $('.backtotop').css('visibility', 'visible');
      } else {
        $('.backtotop').css('opacity', '0');
        $('.backtotop').css('visibility', 'hidden');
      }
    });
  } else {
    
  }
  
      

  $('.backtotop').click(function() {
    $('html, body').animate({scrollTop: 0}, "slow");
  });
  

});

