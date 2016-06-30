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
var images = ['../images/b-1.jpg',
              '../images/b-2.jpg',
              '../images/b-3.jpg',
              '../images/b-4.jpg',
              '../images/b-5.jpg',
              '../images/b-6.jpg',
              '../images/b-7.jpg',
              '../images/b-8.jpg',
              '../images/b-9.jpg',
              '../images/b-10.jpg',
              '../images/b-11.jpg',
              '../images/fig-4.jpg',
              '../images/fig-5.jpg',
              '../images/net-presence-1.0.jpg',
              '../images/screenshot-1-new.jpg',
              '../images/green-rock-3.jpg',
              '../images/amazon-1.jpg',
              '../images/amazon-4.jpg',
              '../images/amazon-5.jpg',
              '../images/t-rex-1.jpg',
              '../images/lightbulb-1.jpg',
              '../images/suggestion-partner-1.jpg',
              '../images/suggestion-partner-2.jpg',
              '../images/j-3-2.jpg',
              '../images/j-3.jpg',
              '../images/j-7.jpg',
              '../images/j-7-2.jpg',
              '../images/jordan-ad4-print.jpg',
              '../images/jordan-ad5-print.jpg',
              '../images/jordan-ad6-print.jpg',
              '../images/book-photo-cover.jpg',
              '../images/book-photo-1.jpg',
              '../images/book-photo-2.jpg',
              '../images/book-photo-3.jpg',
              '../images/book-photo-4.jpg',
              '../images/book-photo-5.jpg',
              '../images/pseudo-1.jpg',
              '../images/pseudo-2.jpg',
              '../images/pseudo-5.jpg',
              '../images/pseudo-7.jpg',
              '../images/rising-falling-photo.jpg',
              '../images/rising-falling-phtot2.jpg'];

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

function opacityAn(element, amount) {
  $(element).css('opacity', amount);
}

var fading;

function oFlash() {
  var opaElem = document.getElementById('load');
  opaElem.style.opacity = opaElem.style.opacity === "0" ? "1" : "0";
}

function opaChange() {
  fading = setInterval(oFlash, 200);
}

opaChange();

function menuFadeOut() {
  opacityAn('.menu', '0');
  opacityAn('.menu-dummy', '0');
  opacityAn('.bk-hm', '0');
  setTimeout(function() {
    $('.menu').css('visibility', 'hidden');
    $('.menu-dummy').css('visibility', 'hidden');
    $('.bk-hm').css('visibility', 'hidden');
  }, 300);
  if ($(window).width() < 800) {
    $('.menu').css({'position':'fixed', 'height':'none'});
    $('.menu-dummy').css('position', 'fixed');
  }
}

function menuFadeIn() {
  opacityAn('.menu', '1');
  opacityAn('.bk-hm', '1');
  $('.menu').css('visibility', 'visible');
  $('.bk-hm').css('visibility', 'visible');
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
  $('.diagonal').css('color', 'white');
  $('.big-menu a, .big-menu span').css('color', 'white');
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
  opacityAn('.bk-hm', '0');
  $('.menu-open').css('visibility', 'hidden');
  $('.bk-hm').css('visibility', 'hidden');
  $('.diagonal').css('color', 'rgba(255, 86, 86, 0.34)');
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

function strobe9() {
  strobe('a.screenshots');
}

function strobe10() {
  strobe('a.net-presence');
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
  var images = '.' + url + ' img';
  var videos = '.' + url + ' iframe';
  var container = '.view .' + url + ' .image-group';
  var titles = '.' + url + ' .piecetitle';
  var ps = '.' + url + ' p';
  var im = $(images);
  var vi = $(videos);
  var pa = $(ps);
  if ($(window).width() > 440) {
    im.add(vi).add(pa).each(function() {
      var rando = Math.random() * 22;
      rando = Math.floor(rando);
      var mrando = Math.random() * 100;
      if (mrando > 49) {
        $(this).css('left', rando + '%');
      } else {
        $(this).css('right', rando + '%');
      }
    });
  }

  $(project).css('display', 'block');
  $(project).css('opacity', '1');

  setTimeout(function() {
    opacityAn(images, '1');
    opacityAn(videos, '1');
    opacityAn(titles, '1');
    opacityAn(ps, '1');
    if ($(window).width() > 440) {
      $(container).css('transform', 'translateY(120px)');
    } else {
      $(container).css('transform', 'translateY(92px)');
    }

    setTimeout(function() {
      opacityAn('.view .page-info', '1');
      if ($(window).width() > 440) {
        $('.view .page-info').css('transform', 'translateY(49px)');
      } else {
        $('.view .page-info').css('transform', 'translateY(25px)');
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

// var full = document.getElementsByTagName('fullscreen');

function goFull() {
  var fullIm;

  $('.image-group img').click(function() {
    var s = $(this).attr('src');
    opacityAn('.menu-open', '0');
    opacityAn('.view', '0');
    $('body').css('overflow-y', 'hidden');
    $('.fullscreen').addClass('zoomed');
    setTimeout(function() {
      $('.menu-open, .view').css('visibility', 'hidden');

      fullIm = document.createElement('img');
      fullIm.className = 'zoomed';
      fullIm.src = s;
      $('.fullscreen').append(fullIm);
      $('.fullscreen').css({'visibility':'visible', 'z-index':'100'});
      setTimeout(function() {
        $('.fullscreen img').css({'transform':'scale(1)', '-ms-transform':'scale(1)', '-webkit-transform':'scale(1)'});
        opacityAn('.fullscreen img', '1');
        $('.fullscreen img').click(function() {
          opacityAn('.fullscreen img', '0');
          $('.fullscreen').removeClass('zoomed');
          setTimeout(function() {
            $('.fullscreen').css({'visibility':'hidden', 'z-index':'-10'});
            $('.fullscreen img').remove();
            $('.menu-open, .view').css('visibility', 'visible');
            $('body').css('overflow-y', 'scroll');
            setTimeout(function() {
              opacityAn('.menu-open', '1');
              opacityAn('.view', '1');
            }, 300);
          }, 300);
        });
      }, 300);
    }, 300);
  });
}

function titleView() {
  $(document).mousemove(function(e) {
    var xc = e.pageX - 160;
    var yc = e.pageY - 160;
    $('.follow').css({'left': xc, 'top': yc});
  });

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
      goFull();
      footerClick(p2, p3);
      titleView();
    }, 100);
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
  } else if (currentPg === (site + '/net-presence')) {
    gusto('net-presence', '.view .net-presence', switchPage);
  } else if (currentPg === (site + '/a-little-bit-cooler')) {
    gusto('a-little-bit-cooler', '.view .a-little-bit-cooler', switchPage);
  } else if (currentPg === (site + '/screenshots')) {
    gusto('screenshots', '.view .screenshots', switchPage);
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

if ($(window).width() > 700) {
  $(window).load(function() {
    preLoad();
    setTimeout(function() {
      opacityAn('.loading', '0');
      setTimeout(function() {
        $('.loading').css('z-index', '0');
        setTimeout(function() {
          opacityAn('.diagonal', '.7');
          opacityAn('.menu', '1');
          setTimeout(function() {
            opacityAn('.enter-in', '1');
          }, 800);
        }, 400);
      }, 100);
    }, 500);
  });
} else {
  $(window).load(function() {
    preLoad();
    setTimeout(function() {
      opacityAn('.diagonal', '.7');
      opacityAn('.menu', '1');
      setTimeout(function() {
        opacityAn('.enter-in', '1');
      }, 800);
    }, 400);
  });
}

$(document).ready(function() {

  var rando;
  var moreRando;
  var emoreRando;

  function randoPlace() {
    moreRando = Math.random() * 40;
    moreRando = Math.floor(moreRando);
    emoreRando = Math.random() * 80;
    emoreRando = Math.floor(emoreRando);
    $('.diagonal').css({'top': emoreRando + '%', 'left': moreRando + '%'});

  }

  function randoSpin() {
    rando = Math.random() * 360;
    rando = Math.floor(rando);
    var circ = rando - 1;
    $('.diagonal').css('-webkit-transform', 'rotate(' + rando + 'deg)');
    $('.diagonal').css('-ms-transform', 'rotate(' + rando + 'deg)');
    $('.diagonal').css('transform', 'rotate(' + rando + 'deg)');
    setTimeout(function() {
      randoSpin();
    }, 60000);
  }

  function randoRotate() {
    randoPlace();
    randoSpin();
  }

  randoRotate();
  switchPage();

  // preLoad();

  if ($(window).width() > 800) {
    flash('a.pseudorandom-landscape', '#555', strobe3);
    flash('a.rising', '#555', strobe4);
    flash('a.winterprep', '#555', strobe5);
    flash('a.suggestions', '#555', strobe6);
    flash('a.black-sand-white-sand-grey-sand', '#555', strobe7);
    flash('a.a-little-bit-cooler', '#555', strobe8);
    flash('a.screenshots', '#555', strobe9);
    flash('a.net-presence', '#555', strobe10);
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
      randoRotate();
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

    $('.pseudorandom img, .rising-falling img, .rising-falling iframe, .screenshots img, .net-presence img, .suggestions img, .black-sand-white-sand-grey-sand img, .a-little-bit-cooler img').each(function() {
      var topDistance = $(this).offset().top;
      var pos = topDistance - scrollTop;
      var num = $(this).data('order');
      if (pos < 100 && pos > -100 ) {
        $('.count').text(num);
      }
    });


  });

  $('.diagonal, .bk-hm').click(function(event) {
    event.preventDefault();
    menuFadeIn();
    clearOut();
    opacityAn('.menu-dummy', '0');
    if ($(window).width() < 800) {
      $('.menu').css({'position':'relative', 'height':'auto'});
      $('.menu-dummy').css('position', 'relative');
    }

    $('.menu-open').removeClass('open');
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
      }

      history.pushState('', 'Mitchell Barton', href);
      switchPage();
    }
  });

  window.onpopstate = function() {
    var path = location.pathname;
    var page = path.substring(location.pathname.lastIndexOf('/') + 1);

    if ($('.fullscreen').hasClass('zoomed')) {
      opacityAn('.fullscreen img', '0');
      $('.fullscreen').removeClass('zoomed');
      setTimeout(function() {
        $('.fullscreen').css({'visibility':'hidden', 'z-index':'-10'});
        $('.fullscreen img').remove();
        $('.menu-open, .view').css('visibility', 'visible');
        $('body').css('overflow-y', 'scroll');
        setTimeout(function() {
          opacityAn('.view', '1');
        }, 300);
      }, 300);
    }

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
