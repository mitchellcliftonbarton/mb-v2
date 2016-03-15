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

function opacityAn(element, amount) {
  $(element).velocity({
    opacity: amount
  }, 300);
}

function menuFadeOut() {
  opacityAn('.menu', 0);
  opacityAn('.menu-dummy', 0);
  setTimeout(function() {
    $('.menu').css('visibility', 'hidden');
    $('.menu-dummy').css('visibility', 'hidden');
  }, 300);
}

function menuFadeIn() {
  opacityAn('.menu', 1);
  $('.menu').css('visibility', 'visible');
}

function menuFadeDummy () {
  opacityAn('.menu-dummy', 1);
  $('.menu-dummy').css('visibility', 'visible');
}

function menuOpen() {
  opacityAn('.menu-open', 1);
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
  opacityAn('.closed', 1);
  opacityAn('.opened', 0);
}

function clearOut() {
  $('.view').empty();
  opacityAn('.menu-open', 0);
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
  strobe('a.cycle');
}

function strobe7() {
  strobe('a.screenshots');
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
  var container = '.view .' + url;
  var titles = '.' + url + ' .piecetitle';
  setTimeout(function() {
    opacityAn(images, 1);
    opacityAn(videos, 1);
    opacityAn(titles, 1);
    if ($(window).width > 440) {
      $(container).velocity({
        top: '120px',
        easing: "ease-in"
      }, 700);
    } else {
      $(container).velocity({
        top: '160px',
        easing: "ease-in"
      }, 700);
    }
    

    setTimeout(function() {
      opacityAn('.view .page-info', 1);
      $('.view .page-info').velocity({
        top: '49px',
        easing: "ease-in"
      }, 1000);
      // footerIn();
    }, 400);

  }, 600);
}

function footerClick(project) {
  $('.footer a').click(function(e) {
    e.preventDefault();    var href = this.href;
    var $this = $(this);
    if ($this.hasClass('footer-current')) {
      $('body').velocity("scroll", {
        offset: "0px"
      }, 500);
    } else {
      opacityAn(project, 0);
      // switchPage();
      setTimeout(function() {
        History.pushState('', 'Mitchell Barton', href);
      }, 300);
    } 

    
  });
}

function loadContent(url, fn) {
  $('.view').empty();
  setTimeout(function() {
    $('.loading').css('z-index', '3');
    opacityAn('.loading', 1);
    $('.view').load('pages/' + url + '.html', fn);
    $('.view').css('z-index', '0');
  }, 100);
}

function gusto(p1, p2) {
  loadContent(p1, function() {
    $('.loading').css('z-index', '0');
    opacityAn('.loading', 0);
    setTimeout(function() {
      menuFadeOut();
      projectFade(p2, p1);
      menuOpen();
      footerClick(p2);
    }, 800);
  });
}

function switchPage() {
  var currentPg = window.location.href;
  var site = 'http://mitchellbarton.com';

  if (currentPg === (site) || currentPg === (site + '/')) {
    
  } else if (currentPg === (site + '/pseudorandom-landscape')) {
    gusto('pseudorandom', '.view .pseudorandom');
  } else if (currentPg === (site + '/rising-falling')) {
    gusto('rising-falling', '.view .rising-falling');
  } else if (currentPg === (site + '/controlled-winter-preparation')) {
    gusto('winterprep', '.view .winterprep');
  } else if (currentPg === (site + '/cycle')) {
    gusto('cycle', '.view .cycle');
  } else if (currentPg === (site + '/screenshots')) {
    gusto('screenshots', '.view .screenshots');
  } else if (currentPg === (site + '/cv')) {
    loadContent('cv', function() {
      $('.loading').css('z-index', '0');
      opacityAn('.loading', 0);
      menuFadeOut();
      setTimeout(function() {
        projectFade('.view .cv', null);
          menuOpen();
          footerClick('.view .cv');
          $('.view .cv').velocity({
            opacity: 1,
            top: '30px'
          }, 600);
      }, 800);
      
    });
  } else {
    $('body').empty();
    $('body').load('pages/wrong-page.html');
    
  }
}

$(window).load(function() {
  setTimeout(function() {
    opacityAn('.loading', 0);
    setTimeout(function() {
      $('.loading').css('z-index', '0');
      setTimeout(function() {
        opacityAn('.menu', 1);
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

  if ($(window).width() > 800) {
    flash('a.pseudorandom-landscape', '#555', strobe3);
    flash('a.rising', '#555', strobe4);
    flash('a.winterprep', '#555', strobe5);
    flash('a.cycle', '#555', strobe6);
    flash('a.screenshots', '#555', strobe7);
  }
  
  
  /// open up the menu/close the menu

  $('.menu-open').click(function() {
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
      opacityAn('.closed', 0);
      opacityAn('.opened', 1);
      $(this).addClass('open');
    }
  });

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop() + 200;

    $('.pseudorandom img, .rising-falling img, .rising-falling iframe, .cycle img, .screenshots img').each(function() {
      var topDistance = $(this).offset().top;
      var pos = topDistance - scrollTop;
      var num = $(this).data('order');
      if (pos < 100 && pos > -100 ) {
        $('.count').text(num);
      }
    });


  });

  $('.holdit h1 a').click(function() {
    event.preventDefault();
    menuFadeIn();
    clearOut();
    opacityAn('.menu-dummy', 0);
    $('.menu-open').removeClass('open');
    // footer();
    // setTimeout(function() {
    //   $('.menu-dummy').css('visibility', 'hidden');
    // }, 2000);
    $('.view').css('z-index', '-1');
    History.pushState('', 'Mitchell Barton', "/");
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

      window.console.log(href);
      
      // switchPage();

      History.pushState('', 'Mitchell Barton', href);
    }
  });

  window.onpopstate = function() {
    var path = location.pathname;
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);

    if (path === '' || path === '/') {
      clearOut();
      menuFadeIn();
      $('.view').css('z-index', '-1');
    } else {
      switchPage();
      menuButtonColor();
    }

    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');
  };
});