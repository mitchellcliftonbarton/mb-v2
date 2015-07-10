function linkzFadeOut () {
  setTimeout(function() {$('.selected-works-title').css('top', 'calc(17% - 30px)'); }, 50);
  setTimeout(function() {$('#linkz-1').css('top', '-10px'); }, 150);
  setTimeout(function() {$('#linkz-2').css('top', '-10px'); }, 250);
  setTimeout(function() {$('#linkz-3').css('top', '-10px'); }, 350);
  setTimeout(function() {$('#linkz-4').css('top', '-10px'); }, 450);
  setTimeout(function() {$('#linkz-5').css('top', '-10px'); }, 550);


  setTimeout(function() {$('.selected-works-title').css('opacity', '0'); }, 70);
  setTimeout(function() {$('#linkz-1').css('opacity', '0'); }, 170);
  setTimeout(function() {$('#linkz-2').css('opacity', '0'); }, 270);
  setTimeout(function() {$('#linkz-3').css('opacity', '0'); }, 370);
  setTimeout(function() {$('#linkz-4').css('opacity', '0'); }, 470);
  setTimeout(function() {$('#linkz-5').css('opacity', '0'); }, 570);

  setTimeout(function() {$('.selected-works-title').css('visibility', 'hidden'); }, 70);
  setTimeout(function() {$('#linkz-1').css('visibility', 'hidden'); }, 170);
  setTimeout(function() {$('#linkz-2').css('visibility', 'hidden'); }, 270);
  setTimeout(function() {$('#linkz-3').css('visibility', 'hidden'); }, 370);
  setTimeout(function() {$('#linkz-4').css('visibility', 'hidden'); }, 470);
  setTimeout(function() {$('#linkz-5').css('visibility', 'hidden'); }, 570);
  
}

function linkzFadeIn () {
  setTimeout(function() {$('.selected-works-title').css('top', 'calc(17% - 20px)'); }, 50);
  setTimeout(function() {$('#linkz-1').css('top', '0px'); }, 150);
  setTimeout(function() {$('#linkz-2').css('top', '0px'); }, 250);
  setTimeout(function() {$('#linkz-3').css('top', '0px'); }, 350);
  setTimeout(function() {$('#linkz-4').css('top', '0px'); }, 450);
  setTimeout(function() {$('#linkz-5').css('top', '0px'); }, 550);


  setTimeout(function() {$('.selected-works-title').css('opacity', '1'); }, 70);
  setTimeout(function() {$('#linkz-1').css('opacity', '1'); }, 170);
  setTimeout(function() {$('#linkz-2').css('opacity', '1'); }, 270);
  setTimeout(function() {$('#linkz-3').css('opacity', '1'); }, 370);
  setTimeout(function() {$('#linkz-4').css('opacity', '1'); }, 470);
  setTimeout(function() {$('#linkz-5').css('opacity', '1'); }, 570);

  setTimeout(function() {$('.selected-works-title').css('visibility', 'visible'); }, 70);
  setTimeout(function() {$('#linkz-1').css('visibility', 'visible'); }, 170);
  setTimeout(function() {$('#linkz-2').css('visibility', 'visible'); }, 270);
  setTimeout(function() {$('#linkz-3').css('visibility', 'visible'); }, 370);
  setTimeout(function() {$('#linkz-4').css('visibility', 'visible'); }, 470);
  setTimeout(function() {$('#linkz-5').css('visibility', 'visible'); }, 570);
  
}

$(window).load(function () {
  if ($(window).width() > 480) {
      $('.loading').css('opacity', '0'); 
      $('.mitchell').css('opacity', '1');
      $('.mitchellbarton').css('top', 'calc(50% - 5px');
      $('.menu-div').css({'opacity':'1', 'top':"calc(50% - 20px"});
      setTimeout(function() {linkzFadeIn();}, 500);  
  }
  
});

$(document).ready(function() {

  setTimeout(function() {
    //linkz click
      $('a').click(function(event) {
        if ($(this).hasClass('tumblr-link')) {

        } else {
          event.preventDefault();
        }
      });
      
      $('.mainlink').click(function() {
        linkzFadeOut(); 
      });
      

      // art fade in

      var delay1 = 1000;
      var delay2 = 1050;
      var delay3 = 1500;
      var delay4 = 1100;

      function artFadeIn(piece, pieceImages, pieceTitle) {

        setTimeout(function() {$('.art').css('z-index', '10'); }, delay1);
        setTimeout(function() {$('.art').css('opacity', '1'); }, delay1);
        setTimeout(function() {$('.series').css('opacity', '1'); }, delay1);
        setTimeout(function() {$(piece).css('display', 'block'); }, delay1);
        setTimeout(function() {$(pieceImages).css('display', 'block'); }, delay1);

        setTimeout(function() {$('.images-div').css('opacity', '1'); }, delay1);
        setTimeout(function() {$('.images-div').css('top', '180px'); }, delay2);
        setTimeout(function() {$('.images-div').css('visibility', 'visible'); }, delay1); 

        setTimeout(function() {$(pieceTitle).css('opacity', '1'); }, delay3);
        setTimeout(function() {$(pieceTitle).css('top', '10px'); }, delay3);

        setTimeout(function() {$('.pagination').css('opacity', '1'); }, delay4);
        setTimeout(function() {$('.pagination').css('top', '40px'); }, delay4);

        if ($(window).width() > 480) {
          setTimeout(function() {$('.backarrow').css('top', '0px'); }, delay4);
          setTimeout(function() {$('.forwardarrow').css('top', '0px'); }, delay4);
        }
        
        setTimeout(function() {$('.backarrow').css('opacity', '1'); }, delay4);
        setTimeout(function() {$('.backarrow').css('z-index', '10'); }, delay4);
        setTimeout(function() {$('.forwardarrow').css('opacity', '1'); }, delay4);
        setTimeout(function() {$('.forwardarrow').css('z-index', '10'); }, delay4);
      }

      // art fadeout

      function artFadeOut(piece, pieceImages, pieceTitle) {

        setTimeout(function() {$('.art').css('z-index', '-10'); }, delay1);
        setTimeout(function() {$('.art').css('opacity', '0'); }, delay1);
        setTimeout(function() {$('.series').css('opacity', '0'); }, delay1);
        setTimeout(function() {$(piece).css('display', 'none'); }, delay1);
        setTimeout(function() {$(pieceImages).css('display', 'none'); }, delay1);

        $('.images-div').css('opacity', '0');
        $('.images-div').css('top', '220px');
        $('.images-div').css('visibility', 'hidden');

        $(pieceTitle).css('opacity', '0');
        $(pieceTitle).css('top', '-5px');

        $('.pagination').css('opacity', '0'); 
        $('.pagination').css('top', '27px'); 

        if ($(window).width() > 480) {
          $('.backarrow').css('top', '-20px');
          $('.forwardarrow').css('top', '-20px');
        }

        $('.backarrow').css('opacity', '0');
        $('.backarrow').css('z-index', '-10');
        $('.forwardarrow').css('opacity', '0');
        $('.forwardarrow').css('z-index', '-10');
      }

      function artQuickFadeOut(piece, pieceImages, pieceTitle) {

        //setTimeout(function() {$('.art').css('z-index', '-10'); }, delay1);
        //setTimeout(function() {$('.art').css('opacity', '0'); }, delay1);
        setTimeout(function() {$(piece).css('display', 'none'); }, 300);
        $(piece).css('opacity', '0');
        setTimeout(function() {$(pieceImages).css('display', 'none'); }, 300);

        $('.images-div').css('opacity', '0');
        setTimeout(function() {$('.images-div').css('top', '220px'); }, 300);
        $('.images-div').css('visibility', 'hidden');

        $(pieceTitle).css('opacity', '0');
        $(pieceTitle).css('top', '-5px');

        $('.pagination').css('opacity', '0'); 
        $('.pagination').css('top', '27px'); 

        if ($(window).width() > 480) {
          $('.backarrow').css('top', '-20px');
          $('.forwardarrow').css('top', '-20px');
        }

        $('.backarrow').css('opacity', '0');
        $('.backarrow').css('z-index', '-10');
        $('.forwardarrow').css('opacity', '0');
        $('.forwardarrow').css('z-index', '-10');
      }

      function artQuickFadeIn(piece, pieceImages, pieceTitle) {

        //setTimeout(function() {$('.art').css('z-index', '-10'); }, delay1);
        //setTimeout(function() {$('.art').css('opacity', '0'); }, delay1);
        setTimeout(function() {$(piece).css('display', 'block'); }, 300);
        $(piece).css('opacity', '1');
        setTimeout(function() {$(pieceImages).css('display', 'block'); }, 300);

        setTimeout(function() {$('.images-div').css('opacity', '1'); }, 350);
        setTimeout(function() {$('.images-div').css('top', '180px'); }, 400);
        setTimeout(function() {$('.images-div').css('visibility', 'visible'); }, 350); 

        setTimeout(function() {$(pieceTitle).css('opacity', '1'); }, 800);
        setTimeout(function() {$(pieceTitle).css('top', '10px'); }, 800);

        setTimeout(function() {$('.pagination').css('opacity', '1'); }, 450);
        setTimeout(function() {$('.pagination').css('top', '40px'); }, 450);

        if ($(window).width() > 480) {
          setTimeout(function() {$('.backarrow').css('top', '0px'); }, 450);
          setTimeout(function() {$('.forwardarrow').css('top', '0px'); }, 450);
        }
        
        setTimeout(function() {$('.backarrow').css('opacity', '1'); }, 450);
        setTimeout(function() {$('.backarrow').css('z-index', '10'); }, 450);
        setTimeout(function() {$('.forwardarrow').css('opacity', '1'); }, 450);
        setTimeout(function() {$('.forwardarrow').css('z-index', '10'); }, 450);
      }

      // art fadeins

        $('#mainlink1').click(function() {
          artFadeIn(".stlucia", ".stlucia-images", ".stlucia-title");
        });

        $('#mainlink2').click(function() {
          artFadeIn(".floral", ".floral-images", ".floral-title");
        });

        $('#mainlink3').click(function() {
          artFadeIn(".cycle", ".cycle-images", ".cycle-title");
        });

        $('#mainlink4').click(function() {
          artFadeIn(".controlledwinterprep", ".control-images", ".control-title");
        });

        $('#mainlink5').click(function() {
          artFadeIn(".risingfalling", ".rising-images", ".rising-title");
        });

      

      // art fadeouts

        // home click

          var delay5 = 900;

          $('.mitchell, .about-backarrow').click(function() {
            artFadeOut(".series", ".art-images", ".art-title");
            
            setTimeout(function() {$('.about').css('opacity', '0'); }, 200);
            setTimeout(function() {$('.about').css('display', 'none'); }, 900);

            setTimeout(function() {$('.middle').css('display', 'block'); }, 900);
            setTimeout(function() {$('#about-section1').css('top', '30px'); }, 200);
            setTimeout(function() {$('#about-section2').css('top', '30px'); }, 150);
            setTimeout(function() {$('#about-section3').css('top', '30px'); }, 100);
            setTimeout(function() {$('#about-section4').css('top', '30px'); }, 50);
            setTimeout(function() {linkzFadeIn(); }, delay5);

          });

        // menu home click

        // main menu slide

          function menuSlide (originalwidth, clickedwidth, originalright, clickedright, otherright) {

            if ($('.menu').hasClass('clicked')) {

              $('.menu-div').css('right', clickedright);
              $('.mitchellbarton').css('left', originalwidth);
              $('.middle').css('right', clickedright);
              $('.about').css('right', clickedright);
              $('.main-menu').css('right', originalright);

              $('.menu').removeClass('clicked');

            } else {

              $('.menu-div').css('right', otherright);
              $('.mitchellbarton').css('left', clickedwidth);
              $('.middle').css('right', otherright);
              $('.about').css('right', otherright);
              $('.main-menu').css('right', clickedright);

              $('.menu').addClass('clicked');
            
            }
          }

          $('.menu').click(function() {
            if ($(window).width() > 480) {
              menuSlide('-53px', '-273px', '-220px', '0px', '220px');
            }

            else {
              menuSlide('0%', '-100%', '-100%', '0%', '100%');
            } 
          });

          $('.menu-home, .art-link').click(function() {
            if ($(window).width() > 480) {
              menuSlide('-53px', '-273px', '-220px', '0px', '220px');

              setTimeout(function() {artFadeOut(".series", ".art-images", ".art-title"); }, 900);
              setTimeout(function() {$('.about').css('opacity', '0'); }, 900);
              setTimeout(function() {$('.about').css('display', 'none'); }, 1600);

              setTimeout(function() {$('.middle').css('display', 'block'); }, 1600);
              setTimeout(function() {$('#about-section1').css('top', '30px'); }, 900);
              setTimeout(function() {$('#about-section2').css('top', '30px'); }, 850);
              setTimeout(function() {$('#about-section3').css('top', '30px'); }, 800);
              setTimeout(function() {$('#about-section4').css('top', '30px'); }, 750);
              setTimeout(function() {linkzFadeIn(); }, 1800);
            }

            else {
              menuSlide('0%', '-100%', '-100%', '0%', '100%');

              setTimeout(function() {artFadeOut(".series", ".art-images", ".art-title"); }, 900);
              setTimeout(function() {$('.about').css('opacity', '0'); }, 900);
              setTimeout(function() {$('.about').css('display', 'none'); }, 1600);

              setTimeout(function() {$('.middle').css('display', 'block'); }, 1600);
              setTimeout(function() {$('#about-section1').css('top', '30px'); }, 900);
              setTimeout(function() {$('#about-section2').css('top', '30px'); }, 850);
              setTimeout(function() {$('#about-section3').css('top', '30px'); }, 800);
              setTimeout(function() {$('#about-section4').css('top', '30px'); }, 750);
              setTimeout(function() {linkzFadeIn(); }, 1800);
            } 
          });

          

        // prev/next links & page links

          function prevNextFade(piece, pieceImages, pieceTitle) {
            artQuickFadeOut(".series", ".art-images", ".art-title");
            setTimeout(function() {artQuickFadeIn(piece, pieceImages, pieceTitle); }, 300);
          }

          //

          // st lucia
          $('#next5, #prev2').click(function() {
              prevNextFade(".stlucia", ".stlucia-images", ".stlucia-title");
          });

          $('.page-link1').click(function() {
            if ($(this).hasClass('highlighted')) {

            } else {
              artQuickFadeOut(".series", ".art-images", ".art-title");
              setTimeout(function() {artQuickFadeIn(".stlucia", ".stlucia-images", ".stlucia-title"); }, 500);
            } 
          });

          //floral
          $('#prev3, #next1').click(function() {
              prevNextFade(".floral", ".floral-images", ".floral-title");
          });

          $('.page-link2').click(function() {
            if ($(this).hasClass('highlighted')) {

            } else {
              artQuickFadeOut(".series", ".art-images", ".art-title");
              setTimeout(function() {artQuickFadeIn(".floral", ".floral-images", ".floral-title"); }, 500);
            } 
          });

          //cycle
          $('#prev4, #next2').click(function() {
              prevNextFade(".cycle", ".cycle-images", ".cycle-title");
          });

          $('.page-link3').click(function() {
            if ($(this).hasClass('highlighted')) {

            } else {
              artQuickFadeOut(".series", ".art-images", ".art-title");
              setTimeout(function() {artQuickFadeIn(".cycle", ".cycle-images", ".cycle-title"); }, 500);
            } 
          });

          //controlled winter prep
          $('#prev5, #next3').click(function() {
              prevNextFade(".controlledwinterprep", ".control-images", ".control-title");
          });

          $('.page-link4').click(function() {
            if ($(this).hasClass('highlighted')) {

            } else {
              artQuickFadeOut(".series", ".art-images", ".art-title");
              setTimeout(function() {artQuickFadeIn(".controlledwinterprep", ".control-images", ".control-title"); }, 500);
            } 
          });

          // rising/falling
          $('#prev1, #next4').click(function() {
              prevNextFade(".risingfalling", ".rising-images", ".rising-title");
          });

          $('.page-link5').click(function() {
            if ($(this).hasClass('highlighted')) {

            } else {
              artQuickFadeOut(".series", ".art-images", ".art-title");
              setTimeout(function() {artQuickFadeIn(".risingfalling", ".rising-images", ".rising-title"); }, 500);
            } 
          });

      // about fade in

        $('.about-link').click(function() {
          if ($(window).width() > 480) {
              menuSlide('-53px', '-273px', '-220px', '0px', '220px');
            }

            else {
              menuSlide('0%', '-100%', '-100%', '0%', '100%');
            } 

          setTimeout(function() {artFadeOut(".series", ".art-images", ".art-title"); }, 900);
          setTimeout(function() {linkzFadeOut(); }, 900);
          setTimeout(function() {$('.middle').css('display', 'none'); }, 2000);
          setTimeout(function() {$('.about').css('opacity', '1'); }, 2150);
          setTimeout(function() {$('.about').css('display', 'block'); }, 2100);

          setTimeout(function() {$('#about-section1').css('top', '0px'); }, 2200);
          setTimeout(function() {$('#about-section2').css('top', '0px'); }, 2250);
          setTimeout(function() {$('#about-section3').css('top', '0px'); }, 2300);
          setTimeout(function() {$('#about-section4').css('top', '0px'); }, 2350);
        });


      }, 1000);
  

});