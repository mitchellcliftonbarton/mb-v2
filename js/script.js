$(document).ready(function() {

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

  function menuFadeOut() {
    $('.menu').css('opacity', '0');
    $('.menu-dummy').css('opacity', '0');
    setTimeout(function() {
      $('.menu').css('visibility', 'hidden');
      $('.menu-dummy').css('visibility', 'hidden');
    }, 300);
  }

  function menuFadeIn() {
    $('.menu').css({'opacity':'1', 'visibility':'visible'});
  }

  function menuFadeDummy () {
    $('.menu-dummy').css('opacity', '1');
    $('.menu-dummy').css('visibility', 'visible');
  }

  function menuOpen() {
    $('.menu-open').css({'visibility':'visible', 'opacity':'1'});
  }

  function switchColor() {
    currentColor = color[(index++) % (color.length)];
    $('.menu-dummy').css('background', currentColor);
    $('.holdit h1 a, .big-menu a, .big-menu span').css('color', 'white');
    $('.little-menu a').css({'color':'white', 'border-bottom':'2px solid white'});
  }

  function menuButtonColor() {
    $('.menu-open').removeClass('open');
    $('.menu-open').css({'color':'#c8c8c8', 'border-bottom': '2px solid #c2c2c2'});
    $('.closed').css('opacity', '1');
    $('.opened').css('opacity', '0');
  }

  function clearOut() {
    $('.view').empty();
    $('.menu-open').css({'visibility':'hidden', 'opacity':'0'});
    $('.holdit h1 a').css('color', '#c2c2c2');
    $('.big-menu a').css('color', '#555');
    $('.little-menu a').css({'color':'#cacaca', 'border-bottom':'2px solid #e0e0e0'});
    $('.big-menu span').css('color', '#c2c2c2');
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
      $('.closed').css('opacity', '0');
      $('.opened').css('opacity', '1');
      $(this).addClass('open');
    }
  });

  function projectFade(project, url) {
    $(project).css('display', 'block');
    $(project).css('opacity', '1');
    var images = '.' + url + ' img';
    var videos = '.' + url + ' iframe';
    var container = '.' + url;
    var titles = '.' + url + ' .piecetitle';
    setTimeout(function() {
      $(images).css('opacity', '1');
      $(videos).css('opacity', '1');
      $(titles).css('opacity', '1');
      $(container).css('margin-top', '120px');
      setTimeout(function() {
        $('.view h2').css('opacity', '1');
        $('.view h2').css('top', '49px');
      }, 400);
    }, 600);
  }

  function loadContent(url, fn) {
    $('.view').empty();
    setTimeout(function() {
      $('.view').load('pages/' + url + '.html', fn);
      $('.view').css('z-index', '0');
    }, 100);
  }

  function switchPage() {
    var currentPg = window.location.href;

    if (currentPg.indexOf('pseudorandom-landscape') > -1) {
      loadContent('pseudorandom', function() {
        menuFadeOut();
        projectFade('.view .pseudorandom', 'pseudorandom');
        menuOpen();
      });
    } else if (currentPg.indexOf('rising-falling') > -1) {
      loadContent('rising-falling', function() {
        menuFadeOut();
        projectFade('.view .rising-falling', 'rising-falling');
        menuOpen();
      });
    } else if (currentPg.indexOf('controlled-winter-preparation') > -1) {
      loadContent('winterprep', function() {
        menuFadeOut();
        projectFade('.view .winterprep', 'winterprep');
        menuOpen();
      });
    } else if (currentPg.indexOf('cycle') > -1) {
      loadContent('cycle', function() {
        menuFadeOut();
        projectFade('.view .cycle', 'cycle');
        menuOpen();
      });
    } else if (currentPg.indexOf('floral') > -1) {
      loadContent('flowers', function() {
        menuFadeOut();
        projectFade('.view .floral', 'floral');
        menuOpen();
      });
    } else if (currentPg.indexOf('cv') > -1) {
      loadContent('cv', function() {
        menuFadeOut();
        projectFade('.view .cv', null);
        menuOpen();
      });
    }
  }

  $('.holdit h1 a').click(function() {
    event.preventDefault();
    menuFadeIn();
    clearOut();
    $('.menu-dummy').css('opacity', '0');
    // setTimeout(function() {
    //   $('.menu-dummy').css('visibility', 'hidden');
    // }, 2000);
    $('.view').css('z-index', '-1');
    History.pushState('', null, "/mb-v2");
  });

  $('.big-menu a, .little-menu a').click(function(e) {
    e.preventDefault();
    var href = this.href;
    var $this = $(this);

    $('a').removeClass('current');
    $this.addClass('current');
    menuButtonColor();
    switchPage();

    History.pushState('', null, href);
  });

  window.onpopstate = function() {
    var path = location.pathname;
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);

    if (path === '/mb-v2' || path === '/mb-v2/') {
      clearOut();
      menuFadeIn();
      // $('.menu-dummy').css({'opacity':'0', 'visibility':'hidden'});
      $('.view').css('z-index', '-1');
    } else {
      switchPage();
      menuButtonColor();
    }

    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');
  };





  
});