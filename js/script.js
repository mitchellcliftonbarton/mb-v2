///// random colors

var color = ['rgba(0, 0, 255, 1)',
             'rgba(255, 167, 77, 1)',
             'rgba(255, 0, 0, 1)',
             'rgba(255, 192, 203, 1)',
             'rgba(255, 81, 250, 1)',
             'rgba(81, 143, 255, 1)',
             'rgba(81, 255, 175, 1)',
             'rgba(255, 106, 106, 1)',
             'wheat'];

var index = 0;
var w = $(window);
var currentColor;

////// images for preload

var images = ['../images/net-presence-1.0.jpg',
              '../images/boxes.jpg',
              '../images/chain.jpg',
              '../images/flyer-2.jpg',
              '../images/jersey-1.jpg',
              '../images/sticker.jpg',
              '../images/card.jpg',
              '../images/knuckles-1.jpg',
              '../images/freestylez.gif',
              '../images/after-a-moment-to-look-forward-to.jpg',
              '../images/billenium.jpg',
              '../images/dino-1.jpg',
              '../images/dino-2.jpg',
              '../images/dino-3.jpg',
              '../images/dino-5.jpg',
              '../images/pages-future.jpg',
              '../images/pages-rituals.jpg',
              '../images/pages.jpg',
              '../images/b-1.jpg',
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
              '../images/screenshot-1-new.jpg',
              '../images/green-rock-3.jpg',
              '../images/sticker-book.jpg',
              '../images/green-rail.jpg',
              '../images/yellow-rail-1.jpg',
              '../images/fig-3.jpg',
              '../images/fig-6.jpg',
              '../images/pole-1.jpg',
              '../images/pole-2.jpg',
              '../images/poles-3.jpg',
              '../images/poles-4.jpg',
              '../images/amazon-1.jpg',
              '../images/amazon-2.jpg',
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

///// Function to preload images //////

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

////// Changes opacity of an element ///////

function opacityAn(element, amount) {
  $(element).css('opacity', amount);
}

/////// _L O A D I N G animation

var fading;

function oFlash() {
  var opaElem = document.getElementById('load');
  opaElem.style.opacity = opaElem.style.opacity === "0" ? "1" : "0";

}

function opaChange() {
  fading = setInterval(oFlash, 200);
}

opaChange();

/////// Fade out the menu

function menuFadeOut() {
  opacityAn('.menu', '0');
  opacityAn('.menu-dummy', '0');
  opacityAn('.bk-hm', '0');
  setTimeout(function() {
    $('.menu').css('visibility', 'hidden');
    $('.menu-dummy').css('visibility', 'hidden');

    if (w.width() < 500) {
      // $('.bk-hm').css('display', 'none');
    } else {
      $('.bk-hm').css('visibility', 'hidden');
    }
  }, 300);
}

/////// Fade in the menu

function menuFadeIn() {
  opacityAn('.menu', '1');
  $('.menu').css('visibility', 'visible');
  if (w.width() < 500) {
    // $('.big-menu').css({'display':'none', 'opacity':'0'});
    // $('.bk-hm').css('display', 'block');
  } else {
    // $('.bk-hm').css('display', 'block');
    opacityAn('.bk-hm', '1');
    $('.bk-hm').css('visibility', 'visible');
  }
}

////// Fade in dummy menu

function menuFadeDummy () {
  opacityAn('.menu-dummy', '1');
  $('.menu-dummy').css('visibility', 'visible');
}

//// function to switch menu color

function switchColor() {
  currentColor = color[(index++) % (color.length)];
  if (w.width() < 500) {
    $('.menu-open').css('background-color', currentColor);
  } else {
    $('.menu-open').css('border-bottom', '2px solid white');
  }
  $('.menu-dummy').css('background', currentColor);
  $('.diagonal').css('color', 'white');
  $('.big-menu a, .big-menu span').css('color', 'white');
  $('.little-menu a').css({'color':'white', 'border-bottom':'2px solid white'});
}

//// open menu

function menuOpen() {
  opacityAn('.menu-open', '1');
  $('.menu-open').css('visibility', 'visible');
}

//// controls colors of buttons on menu

function menuButtonColor() {
  $('.menu-open').removeClass('open');

  if (w.width() > 500) {
    $('.menu-open').css({'color':'#555', 'border-bottom': '2px solid #555'});
  } else {
    $('.menu-open').css({'color':'#555', 'border': 'none'});
    $('.menu-open').css('background-color', 'white');
  }

  opacityAn('.closed', '1');
  opacityAn('.opened', '0');
}

/////// clears out everything to just menu

function clearOut() {
  $('.view').empty();
  if (w.width() < 500) {
    $('.big-menu').css({'display':'block', 'opacity':'1'});
  }
  opacityAn('.menu-open', '0');
  opacityAn('.bk-hm', '0');
  opacityAn('.menu-dummy', '0');
  $('.menu-open').removeClass('open');
  $('.menu-open').css('visibility', 'hidden');
  $('.bk-hm').css('visibility', 'hidden');
  if (w.width() < 500) {
    // $('.bk-hm').css('display', 'none');
    $('.menu-open').css('background-color', 'white');
  }
  $('.diagonal').css('color', 'rgba(255, 86, 86, 0.34)');
  if ($('body').hasClass('medium-l')) {
    $('.big-menu a').css('color', 'white');
  } else {
    $('.big-menu a').css('color', '#555');
  }
  $('.little-menu a').css({'color':'#FFAEAE', 'border-bottom':'2px solid #FFAEAE'});
  $('.num').css('color', '#c2c2c2');
  $('.comma').css('color', '#555');
}

////// stuff for menu button hover effect

function strobe(element) {
  currentColor = color[(index++) % (color.length)];
  $(element).css('color', currentColor);
}

function strobe3() {
  strobe('a.pseudorandom');
}

function strobe4() {
  strobe('a.rising-falling');
}

function strobe5() {
  strobe('a.foundation-myths');
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
  strobe('a.freestylez');
}

function flash(link, color, fn) {
  var flashing;

  $(link).mouseenter(function() {
    flashing = setInterval(fn, 150);
  });

  $(link).mouseleave(function() {
    clearInterval(flashing);
    if($('.menu-open').hasClass('open') || $('body').hasClass('medium-l')) {
      $(this).css('color', 'white');
    } else {
      $(this).css('color', color);
    }

  });
}

/////// function to fade in each project

function projectFade(project, url) {
  var images = '.' + url + ' img';
  var videos = '.' + url + ' iframe';
  var container = '.view .' + url + ' .image-group';
  var titles = '.' + url + ' .piecetitle';
  var ps = '.' + url + ' p';
  var im = $(images);
  var vi = $(videos);
  var pa = $(ps);
  if (w.width() > 440) {
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
    if (w.width() > 440) {
      $(container).css('transform', 'translateY(170px)');
    } else {
      $(container).css('transform', 'translateY(92px)');
    }

    setTimeout(function() {
      opacityAn('.view .page-info', '1');
      opacityAn('.view .scroll', '1');
      opacityAn('.view .pn', '1');
      if (w.width() > 440) {
        $('.view .page-info').css('transform', 'translateY(49px)');
        $('.view .scroll').css('transform', 'translateY(60px)');
        $('.view .pn').css('transform', 'translateY(49px)');
      } else {
        $('.view .page-info').css('transform', 'translateY(25px)');
      }
    }, 400);

  }, 600);
}

////// randomizes order of images

function picOrder() {
  var imgs = document.querySelector('.image-rando');
  // window.console.log(imgs);
  for (var i = imgs.children.length; i >= 0; i--) {
    imgs.appendChild(imgs.children[Math.random() * i | 0]);
    // window.console.log('i = ' + i);
    // window.console.log(imgs.children[i]);
    // imgs.children[i].data('order', i);
  }

  for (var i = 0; i < imgs.children.length; i++) {
    var img = imgs.children[i];
    $(img).data('order', i + 1);
  }
}

///// function to load html files with project pages

function loadContent(url, fn) {
  $('.view').empty();
  setTimeout(function() {
    $('.loading').css('z-index', '3');
    opacityAn('.loading', '1');
    $('.view').load('pages/' + url + '.html', fn);
    $('.view').css('z-index', '0');

    /// uncheck home link to show they have visited this link
    var hmlink = '.big-menu a.' + url;
    $(hmlink).css('text-decoration', 'none');
  }, 100);
}

////// function for prev/next buttons

function pnClick(project, fn) {
  $('.pn a').click(function(event) {
    event.preventDefault();
    var href = this.href;
    opacityAn(project, '0');
    setTimeout(function() {
      history.pushState('', 'Mitchell Barton', href);
      fn();
    }, 300);
  });
}

////// function to go fullscreen when images are clicked

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

///// hover function on images to see title

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

///// function to start videos at random spots

// function randoStVid() {
//   $('.foundation-myths iframe').each(function() {
//     var rando = Math.random() * 600;
//     rando = Math.floor(rando);
//
//     var vid = $(this).attr('src');
//   });
// }

///// function that combines loading and fading of pages

function gusto(p1, p2, p3) {
  loadContent(p1, function() {
    picOrder();
    setTimeout(function() {
      // debugger;
      $('.loading').css('z-index', '0');
      if ($('body').hasClass('medium-l')) {
        $('.inventory').css('letter-spacing', '30px')
        $('.page-info h2').css('letter-spacing', '36px')
      }
      opacityAn('.loading', '0');
      menuFadeOut();
      projectFade(p2, p1);
      menuOpen();
      if (w.width() > 500) {
        goFull();
        titleView();
      }
      // footerClick(p2, p3);
      pnClick(p2, p3);
    }, 100);
  });
}

//// function that controls url's and stuff

function switchPage() {
  var currentPg = window.location.href;
  // var site = 'http://mitchellbarton.com';
  var site = 'http://localhost:8888/mb-v2'
  if (currentPg === (site) || currentPg === (site + '/')) {

  } else if (currentPg === (site + '/pseudorandom-landscape')) {
    gusto('pseudorandom', '.view .pseudorandom', switchPage);
  } else if (currentPg === (site + '/rising-falling')) {
    gusto('rising-falling', '.view .rising-falling', switchPage);
  } else if (currentPg === (site + '/foundation-myths')) {
    gusto('foundation-myths', '.view .foundation-myths', switchPage);
    // randoStVid();
  } else if (currentPg === (site + '/suggestions')) {
    gusto('suggestions', '.view .suggestions', switchPage);
  } else if (currentPg === (site + '/black-sand-white-sand-grey-sand')) {
    gusto('black-sand-white-sand-grey-sand', '.view .black-sand-white-sand-grey-sand', switchPage);
  } else if (currentPg === (site + '/freestylez')) {
    gusto('freestylez', '.view .freestylez', switchPage);
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
        opacityAn('.view .pn', '1');
        $('.view .cv .contain').css('transform', 'translateY(30px)');
        $('.view .pn').css('transform', 'translateY(49px)');
        setTimeout(function() {
          opacityAn('.footer', '1');
        }, 600);
        // footerClick('.view .cv'l switchPage);
        pnClick('.view .cv', switchPage);
      }, 800);

    });
  } else {
    $('body').empty();
    $('body').load('pages/wrong-page.html');

  }
}

if (w.width() > 700) {
  w.on('load', function() {
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
  w.on('load', function() {
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
    // var circ = rando - 1;
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

  ////// difficulty levels

  function difft(el1, el2, el3, el4, clss) {
      $('body').removeClass();
      $('body').addClass(clss);
      $(el1).css('display', 'block');
      $(el2).css('display', 'none');
      $(el3).css('display', 'none');
      $(el4).css('display', 'none');
  }

  ///// easy level

  $('.diff-text .l1').click(function() {
    $('.diff-text p').removeClass();
    $(this).addClass('sel');
    difft('.easy', '.med', '.hard', '.super', 'easy-l');

    $('.menu .big-menu').css({'width':'75%', 'line-height':'normal'});
    $('.menu .big-menu li').css('margin-right', '30px');
    $('.menu .big-menu li a').css({'color':'#555', 'visibility':'visible', 'background':'none'});

    $('.menu .little-menu').css({'width':'75%', 'position':'static', 'top':'auto', 'text-align':'initial', 'bottom': 'auto'});

    $('.inventory, .page-info h2').css('letter-spacing', '2.5px');
  });

  //// medium level

  $('.diff-text .l2').click(function() {
    $('.diff-text p').removeClass();
    $(this).addClass('sel');
    difft('.med', '.easy', '.hard', '.super', 'medium-l');

    $('.menu .big-menu').css({'width':'92%', 'line-height':'130px'});
    $('.menu .big-menu li').css('margin-right', '130px');
    $('.menu .big-menu li a').css({'color':'white', 'visibility':'visible'});
    $('.menu .big-menu li a').css('background', 'wheat');

    $('.menu .little-menu').css({'width':'100%', 'position':'fixed', 'top':'20px', 'text-align':'center', 'bottom': 'auto'});

    $('.inventory').css('letter-spacing', '30px');
    $('.page-info h2').css('letter-spacing', '36px');
  });

  ///// hard level

  $('.diff-text .l3').click(function() {
    $('.diff-text p').removeClass();
    $(this).addClass('sel');
    difft('.hard', '.easy', '.med', '.super', 'hard-l');

    $('.menu .big-menu li a').css({'visibility':'hidden', 'background':'none'});
    $('.menu .big-menu li a .num').css('visibility', 'visible');
    $('.menu .big-menu').css('line-height', '90px');

    $('.menu .little-menu').css({'width':'auto', 'position':'fixed', 'bottom':'20px', 'right':'20px', 'top':'auto'});
  });

  /////// super level

  $('.diff-text .l4').click(function() {
    $('.diff-text p').removeClass();
    $(this).addClass('sel');
    difft('.super', '.easy', '.med', '.hard', 'super-l');
  });

  //// other stuff for levels

  $('.menu .big-menu li a').mouseenter(function() {
    if ($('body').hasClass('hard-l')) {
      $(this).css('visibility', 'visible');
    }
  });

  $('.menu .big-menu li a').mouseleave(function() {
    if ($('body').hasClass('hard-l')) {
      $(this).css('visibility', 'hidden');
    }
  });



  $('.diagonal').click(function() {
    event.preventDefault();
    randoRotate();
  });

  if (w.width() > 800) {
    flash('a.pseudorandom', '#555', strobe3);
    flash('a.rising-falling', '#555', strobe4);
    flash('a.foundation-myths', '#555', strobe5);
    flash('a.suggestions', '#555', strobe6);
    flash('a.black-sand-white-sand-grey-sand', '#555', strobe7);
    flash('a.a-little-bit-cooler', '#555', strobe8);
    flash('a.screenshots', '#555', strobe9);
    flash('a.freestylez', '#555', strobe10);
  }


  /// open up the menu/close the menu

  $('.menu-open').click(function(event) {
    event.preventDefault();
    if ($(this).hasClass('open')) {
      menuFadeOut();
      menuButtonColor();
      $('body').css('overflow-y', 'auto');
      if (w.width() < 500) {
        if ($(this).hasClass('flat')) {
          $('.menu-open').css({'left': '0', 'right':'0', 'margin-left':'auto', 'margin-right': 'auto', 'width': '100%', 'background': 'rgb(255, 174, 174)', 'bottom': '0px'});
        } else {
          $('.menu-open').css('background-color', 'white');
        }
      }
      setTimeout(function() {
        $('.view').css('z-index', '0');
      }, 300);
    } else {
      $('body').css('overflow-y', 'hidden');
      if ($(this).hasClass('flat')) {
        $('.menu-open').css({'left': '20px', 'right':'auto', 'margin-left':'0', 'margin-right': '0', 'width': '46px', 'bottom': '20px'});
      }
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

  w.on('scroll', function() {
    var scrollT = $(this).scrollTop() + 200;

    $('.pseudorandom img, .rising-falling img, .rising-falling iframe, .screenshots img, .foundation-myths img, .freestylez img, .net-presence img, .suggestions img, .black-sand-white-sand-grey-sand img, .a-little-bit-cooler img').each(function() {
      var topDistance = $(this).offset().top;
      var pos = topDistance - scrollT;
      var num = $(this).data('order');
      if (pos < 100 && pos > -100 ) {
        $('.count').text(num);
      }
    });

    if (w.width() < 500) {
      if ($(this).scrollTop() + $(this).height() > $(document).height() - 100) {
        $('.menu-open').css({'left': '0', 'right':'0', 'margin-left':'auto', 'margin-right': 'auto', 'width': '100%', 'background': 'rgb(255, 174, 174)', 'bottom': '0px'});
        $('.closed').css('color', 'white');
        $('.menu-open').addClass('flat');
        window.console.log('flattened ' + w.scrollTop());
      } else {
        $('.menu-open').css({'left': '20px', 'right':'auto', 'margin-left':'0', 'margin-right': '0', 'width': '46px', 'background': 'white', 'bottom': '20px'});
        $('.closed').css('color', '#555');
        $('.menu-open').removeClass('flat');
      }
    } else {
      // if ($(this).scrollTop() + $(this).height() > $(document).height() - 100) {
      //   $('.pn').css('background', '#FFAEAE');
      //   window.console.log('yup');
      // } else {
      //   $('.pn').css('background', 'none');
      //   window.console.log('poop');
      // }
    }
  });

  $('.bk-hm').click(function(event) {
    event.preventDefault();
    menuFadeIn();
    clearOut();
    // $('.menu-open').removeClass('open');
    $('.view').css('z-index', '-1');
    history.pushState('', 'Mitchell Barton', "/");
  });

  $('.big-menu a, .little-menu a').click(function(event) {
    if ($(this).hasClass('tumblr')) {
      window.console.log('tumblr');
    } else {
      event.preventDefault();
      $('body').css('overflow-y', 'auto');
      // footer();
      var href = this.href;
      var $this = $(this);

      $('a').removeClass('current');
      $this.addClass('current');
      $('.menu-open').css({'left': '20px', 'right':'auto', 'margin-left':'0', 'margin-right': '0', 'width': '46px', 'bottom': '20px'});
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
      menuFadeIn();
      clearOut();
      $('.view').css('z-index', '-1');
    } else {
      switchPage();
      menuButtonColor();
    }

    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');
  };
});
