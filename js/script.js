var color = ['rgba(0, 0, 255, 1)',
             'rgba(233, 249, 106, 1)',
             'rgba(255, 0, 0, 1)',
             'rgba(255, 192, 203, 1)',
             'rgba(255, 81, 250, 1)',
             'rgba(81, 143, 255, 1)',
             'rgba(81, 255, 175, 1)',
             'rgba(255, 106, 106, 1)'];

var index = 0;
var currentColor;
var images = ['../images/book-photo-1.jpg',
              '../images/book-photo-2.jpg',
              '../images/book-photo-3.jpg',
              '../images/book-photo-4.jpg',
              '../images/book-photo-5.jpg',
              '../images/book-photo-cover.jpg',
              '../images/amazon-1.jpg',
              '../images/amazon-4.jpg',
              '../images/amazon-5.jpg',
              '../images/t-rex-1.jpg',
              '../images/lightbulb-1.jpg',
              '../images/j-3-2.jpg',
              '../images/j-3.jpg',
              '../images/j-7.jpg',
              '../images/j-7-2.jpg',
              '../images/jordan-ad4-print.jpg',
              '../images/jordan-ad5-print.jpg',
              '../images/jordan-ad6-print.jpg',
              '../images/pseudo-1.jpg',
              '../images/pseudo-2.jpg',
              '../images/pseudo-5.jpg',
              '../images/pseudo-7.jpg',
              '../images/fig-4.jpg',
              '../images/fig-5.jpg',
              '../images/personal-website.jpg',
              '../images/green-rock-3.jpg',
              '../images/suggestion-partner-1.jpg',
              '../images/suggestion-partner-2.jpg',
              '../images/rising-falling-photo.jpg',
              '../images/rising-falling-phtot2.jpg',
              '../images/screenshot-1-new.jpg'];

function preLoad() {
   
  function loadit(el) {
      el.onload = function() {
    };
  }

  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    var path = images[i];
    img.src = path;
    loadit(img);
  }

}

function opacityAn(element, amount, time) {
  $(element).css('opacity', amount);
}

function menuFadeOut() {
  opacityAn('.menu', '0');
  opacityAn('.menu-dummy', '0');
  setTimeout(function() {
    $('.menu').css('visibility', 'hidden');
    $('.menu-dummy').css('visibility', 'hidden');
  }, 300);
  if ($(window).width() < 800) {
    $('.menu').css({'position':'fixed', 'height':'none'});
    $('.menu-dummy').css('position', 'fixed');
  }
}

function menuFadeIn() {
  opacityAn('.menu', '1');
  $('.menu').css('visibility', 'visible');
  // if ($(window).width() < 800) {
  //   $('.menu').css({'position':'relative', 'height':'none'});
  // }
}

function menuFadeDummy () {
  opacityAn('.menu-dummy', '1');
  $('.menu-dummy').css('visibility', 'visible');
}

function menuOpen() {
  opacityAn('.menu-open', '1');
  $('.menu-open').css('visibility', 'visible');
}

function switchColor() {
  currentColor = color[(index++) % (color.length)];
  $('.menu-dummy').css('background', currentColor);
  $('.holdit h1 a, .big-menu a, .big-menu span').css('color', 'white');
  $('.little-menu a').css({'color':'white', 'border-bottom':'2px solid white'});
}

function menuButtonColor() {
  $('.menu-open').removeClass('open');
  $('.menu-open').css({'color':'#555', 'border-bottom': '2px solid #555'});
  opacityAn('.closed', '1');
  opacityAn('.opened', '0');
}

function clearOut() {
  $('.view').empty();
  opacityAn('.menu-open', '0');
  $('.menu-open').css('visibility', 'hidden');
  $('.holdit h1 a').css('color', '#c2c2c2');
  $('.big-menu a').css('color', '#555');
  $('.little-menu a').css({'color':'#FFAEAE', 'border-bottom':'2px solid #FFAEAE'});
  $('.big-menu span').css('color', '#c2c2c2');
}

function strobe(element) {
  currentColor = color[(index++) % (color.length)];
  $(element).css('color', currentColor);
}

function strobe3() {
  strobe('a.pseudorandom-landscape');
}

function strobe4() {
  strobe('a.rising');
}

function strobe5() {
  strobe('a.winterprep');
}

function strobe6() {
  strobe('a.suggestions');
}

function strobe7() {
  strobe('a.black-sand-white-sand-grey-sand');
}

function strobe8() {
  strobe('a.a-little-bit-cooler');
}

function flash(link, color, fn) {
  var flashing;

  $(link).mouseenter(function() {
    flashing = setInterval(fn, 150);
  });

  $(link).mouseleave(function() {
    clearInterval(flashing);
    if($('.menu-open').hasClass('open')) {
      $(this).css('color', 'white');
    } else {
      $(this).css('color', color);
    }
    
  });
}

function projectFade(project, url) {
  $(project).css('display', 'block');
  $(project).css('opacity', '1');
  var images = '.' + url + ' img';
  var videos = '.' + url + ' iframe';
  var container = '.view .' + url + ' .image-group';
  var titles = '.' + url + ' .piecetitle';
  setTimeout(function() {
    opacityAn(images, '1');
    opacityAn(videos, '1');
    opacityAn(titles, '1');
    /////// NOT SURE WHY THIS IS WORKING
    if ($(window).width > 440) {
      $(container).css('transform', 'translateY(92px)');
    } else {
      $(container).css('transform', 'translateY(120px)');
    }

    setTimeout(function() {
      opacityAn('.view .page-info', '1');
      if ($(window).width > 440) {
        $('.view .page-info').css('transform', 'translateY(25px)');
      } else {
        $('.view .page-info').css('transform', 'translateY(49px)');
      }
    }, 400);

  }, 600);
}

function loadContent(url, fn) {
  $('.view').empty();
  setTimeout(function() {
    $('.loading').css('z-index', '3');
    opacityAn('.loading', '1');
    $('.view').load('pages/' + url + '.html', fn);
    $('.view').css('z-index', '0');
  }, 100);
}

function footerClick(project, fn) {
  $('.footer a').click(function(event) {
    event.preventDefault();    
    var href = this.href;
    var $this = $(this);
    if ($this.hasClass('footer-current')) {
      
    } else {
      opacityAn(project, '0');
      setTimeout(function() {
        history.pushState('', 'Mitchell Barton', href);
        fn();
      }, 300);
    } 
  });
}

function titleView() {
  $(document).mousemove(function(e) {
    var xc = e.pageX - 160;
    var yc = e.pageY - 160;
    $('.follow').css({'left': xc, 'top': yc})
  });

  // var ifr = $('.image-group iframe').contents().find('.check');

  $('.image-group img').mouseenter(function() {
    $('.follow').css('opacity', '1');

    var info = $(this).data('info');
    $('.follow').text(info);
  });

  $('.image-group img').mouseleave(function() {
    $('.follow').css('opacity', '0');
  });
}

function gusto(p1, p2, p3) {
  loadContent(p1, function() {
    $('.loading').css('z-index', '0');
    opacityAn('.loading', '0');
    setTimeout(function() {
      menuFadeOut();
      projectFade(p2, p1);
      menuOpen();
      setTimeout(function() {
        opacityAn('.footer', '1');
      }, 600);
      footerClick(p2, p3);
      titleView();
    }, 600);
  });
}

function switchPage() {
  var currentPg = window.location.href;
  var site = 'http://mitchellbarton.com';
  if (currentPg === (site) || currentPg === (site + '/')) {
    
  } else if (currentPg === (site + '/pseudorandom-landscape')) {
    gusto('pseudorandom', '.view .pseudorandom', switchPage);
  } else if (currentPg === (site + '/rising-falling')) {
    gusto('rising-falling', '.view .rising-falling', switchPage);
  } else if (currentPg === (site + '/controlled-winter-preparation')) {
    gusto('winterprep', '.view .winterprep', switchPage);
  } else if (currentPg === (site + '/suggestions')) {
    gusto('suggestions', '.view .suggestions', switchPage);
  } else if (currentPg === (site + '/black-sand-white-sand-grey-sand')) {
    gusto('black-sand-white-sand-grey-sand', '.view .black-sand-white-sand-grey-sand', switchPage);
  } else if (currentPg === (site + '/a-little-bit-cooler')) {
    gusto('a-little-bit-cooler', '.view .a-little-bit-cooler', switchPage);
  } else if (currentPg === (site + '/cv')) {
    loadContent('cv', function() {
      $('.loading').css('z-index', '0');
      opacityAn('.loading', '0');
      menuFadeOut();
      $('.view .cv').css('display', 'block');
      setTimeout(function() {
        menuOpen();
        opacityAn('.view .cv', '1');
        $('.view .cv').css('transform', 'translateY(30px)');
        setTimeout(function() {
          opacityAn('.footer', '1');
        }, 600);
        footerClick('.view .cv', switchPage);
      }, 800);
      
    });
  } else {
    $('body').empty();
    $('body').load('pages/wrong-page.html');
    
  }
}

$(window).load(function() {
  preLoad();
  setTimeout(function() {
    opacityAn('.loading', '0');
    setTimeout(function() {
      $('.loading').css('z-index', '0');
      setTimeout(function() {
        opacityAn('.menu', '1');
      }, 600);
    }, 300);
  }, 800);
});

$(document).ready(function() {
  var fading;
  function opaChange() {
    fading = setInterval(oFlash, 200);
  }

  function oFlash() {
    var opaElem = document.getElementById('load');
    opaElem.style.opacity = opaElem.style.opacity === "0" ? "1" : "0";
  }

  opaChange();

  switchPage();
  // preLoad();

  if ($(window).width() > 800) {
    flash('a.pseudorandom-landscape', '#555', strobe3);
    flash('a.rising', '#555', strobe4);
    flash('a.winterprep', '#555', strobe5);
    flash('a.suggestions', '#555', strobe6);
    flash('a.black-sand-white-sand-grey-sand', '#555', strobe7);
    flash('a.a-little-bit-cooler', '#555', strobe8);
  }
  
  
  /// open up the menu/close the menu

  $('.menu-open').click(function(event) {
    event.preventDefault();
    if ($(this).hasClass('open')) {
      menuFadeOut();
      menuButtonColor();
      setTimeout(function() {
        $('.view').css('z-index', '0');
      }, 300);
    } else {
      $(this).css('border-bottom', '2px solid white');
      $(this).css('color', 'white');
      switchColor();
      menuFadeIn();
      menuFadeDummy();
      $('.view').css('z-index', '-1');
      opacityAn('.closed', '0');
      opacityAn('.opened', '1');
      $(this).addClass('open');
    }
  });

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop() + 200;

    $('.pseudorandom img, .rising-falling img, .rising-falling iframe, .suggestions img, .black-sand-white-sand-grey-sand img, .a-little-bit-cooler img').each(function() {
      var topDistance = $(this).offset().top;
      var pos = topDistance - scrollTop;
      var num = $(this).data('order');
      if (pos < 100 && pos > -100 ) {
        $('.count').text(num);
      }
    });


  });

  $('.holdit h1 a').click(function(event) {
    event.preventDefault();
    menuFadeIn();
    clearOut();
    opacityAn('.menu-dummy', '0');
    if ($(window).width() < 800) {
      $('.menu').css({'position':'relative', 'height':'auto'});
      $('.menu-dummy').css('position', 'relative');
    }
    
    $('.menu-open').removeClass('open');
    // footer();
    // setTimeout(function() {
    //   $('.menu-dummy').css('visibility', 'hidden');
    // }, 2000);
    $('.view').css('z-index', '-1');
    history.pushState('', 'Mitchell Barton', "/");
  });

  $('.big-menu a, .little-menu a').click(function(event) {
    if ($(this).hasClass('tumblr')) {
      window.console.log('tumblr');
    } else {
      event.preventDefault();
      // footer();
      var href = this.href;
      var $this = $(this);

      $('a').removeClass('current');
      $this.addClass('current');
      menuButtonColor();
      if ($this.hasClass('current')) {
        menuFadeOut();
      } else {
        
      }

      history.pushState('', 'Mitchell Barton', href);
      switchPage();
    }
  });

  window.onpopstate = function() {
    var path = location.pathname;
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);

    if (path === '' || path === '/') {
      clearOut();
      menuFadeIn();
      if ($(window).width() < 800) {
        $('.menu').css({'position':'relative', 'height':'auto'});
        $('.menu-dummy').css('position', 'relative');
      }
      
      $('.view').css('z-index', '-1');
    } else {
      switchPage();
      menuButtonColor();
    }

    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');
  };
});