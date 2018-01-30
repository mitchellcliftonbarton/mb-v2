///// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61480746-1', 'auto');
ga('send', 'pageview');

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

var moreColors = ['blue', 'red', 'purple', 'wheat', 'yellow', 'pink', 'green', 'orange', 'dodgerblue', 'navy'];

var index = 0;
var w = $(window);
var currentColor;

////// images for preload ///

var images = ['../images/ankle.jpg',
              '../images/timestamp-3.jpg',
              '../images/pulce.jpg',
              '../images/pink-rock.jpg',
              '../images/leather-1.jpg',
              '../images/gold-statue-2.jpg',
              '../images/fortaleza-4.jpg',
              '../images/flyer-car.jpg',
              '../images/dino-8.jpg',
              '../images/column-3.jpg',
              '../images/ceiling-1-newer.jpg',
              '../images/ceiling-2-newer.jpg',
              '../images/elephant-print-3.jpg',
              '../images/foam-finger-2.jpg',
              '../images/mic-1.jpg',
              '../images/fortaleza.jpg',
              '../images/spray-2.jpg',
              '../images/boxes.jpg',
              '../images/chain.jpg',
              '../images/flyer-2.jpg',
              '../images/jersey-1.jpg',
              '../images/sticker.jpg',
              '../images/card.jpg',
              '../images/knuckles-1.jpg',
              '../images/bar-code.jpg',
              '../images/shoe-shrink-1.jpg',
              '../images/card-piles.jpg',
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
              '../images/yellow-rock-bkg.jpg',
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
              '../images/jordan-ad1-print.jpg',
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
        window.console.log('yay! an image preloaded!');
    };
  }

  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    var path = images[i];
    img.src = path;
    loadit(img);
  }

}

////// shuffle function

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


////// Changes opacity of an element ///////

function opacityAn(element, amount) {
  $(element).css('opacity', amount);
}

/////// _L O A D I N G animation

function opaChange() {
  $('.typing').typed({
    strings: ["_Almost there...", '_Sorry almost done...', '_Hold on just a second there', '_Getting close!!!!!', '_Just a bit longer...', '_Loading sometimes takes a long time...', '_Just about there...', "_Yay! It's loading!!", '_Going as fast as I can!!', '_Thanks for your loading patience!', '_So close to finishing loading...', '_Loading can sometimes take a while...'],
    typeSpeed: 60,
    showCursor: true,
    shuffle: true
  });
  window.console.log('typing');
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
  if ($('body').hasClass('medium-l')) {
    shuffle(moreColors);
    $('.menu .big-menu li a').each(function(index) {
      $(this).css('background', moreColors[index]);
    });
  } else if ($('body').hasClass('super-l')) {
    $('.big-menu span, .little-menu a').css('background', 'white');
    shuffle(moreColors);
    $('.menu .big-menu li').each(function(index) {
      $(this).css('background', moreColors[index]);
    });
  }
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
    shuffle(moreColors);
    $('.menu .big-menu li a').each(function(index) {
      $(this).css('background', moreColors[index]);
    });
  } else if ($('body').hasClass('super-l')) {
    $('.big-menu span').css('background', '#c2c2c2');
    $('.little-menu a').css('background', '#ffaeae');
    shuffle(moreColors);
    $('.menu .big-menu li').each(function(index) {
      $(this).css('background', moreColors[index]);
    });
  } else {
    $('.big-menu a').css('color', '#555');
  }
  $('.little-menu a').css({'color':'#FFAEAE', 'border-bottom':'2px solid #FFAEAE'});
  $('.num').css('color', '#c2c2c2');
  $('.comma').css('color', '#555');
}

////// stuff for menu button hover effect

$('.big-menu a').mouseenter(function() {
  if ($('body').hasClass('hard-l')) {
    $(this).css('visibility', 'visible');
  }
});

$('.big-menu a').mouseleave(function() {
  if ($('body').hasClass('hard-l')) {
    $(this).css('visibility', 'hidden');
  }

  if($('.menu-open').hasClass('open') || $('body').hasClass('medium-l')) {
    $(this).css('color', 'white');
  } else {
    $(this).css('color', '#555');
  }

});

/////// function to fade in each project

function projectFade(project, url) {
  var images = '.' + url + ' .image-group img';
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

  var imageDown = images.complete;

  if (imageDown = true) {
    window.console.log('complete');
    setTimeout(function() {
      $('.loading').css('z-index', '0');
      opacityAn('.loading', '0');
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

    }, 3000);
  } else {
    window.console.log('nope, not complete');
  }
}

////// randomizes order of images

function picOrder() {
  var imgs = document.querySelector('.image-rando');
  for (var i = imgs.children.length; i >= 0; i--) {
    imgs.appendChild(imgs.children[Math.random() * i | 0]);
  }

  for (var i = 0; i < imgs.children.length; i++) {
    var img = imgs.children[i];
    $(img).data('order', i + 1);
  }
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
      if ($('.image-group img').hasClass('mini')) {
        $('.fullscreen img').addClass('full-small');
        window.console.log('mini');
      }
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

function leftSide(p1, p2 , p3, p4 , p5 ,p6, p7) {
  $('.inventory').css({'display':p1, 'letter-spacing':p2});
  $('.page-info').css('top', p3);
  $('.page-info h2').css({'letter-spacing':p4, 'line-height':p5, 'transform':p6});
  $('.page-info .title').css('display', p7);
}

function rightSide(p1, p2, p3, p4) {
  $('body .view .pn').css({'bottom':p1, 'letter-spacing':p2});
  $('body .view .pn a').css('background', p3);
  $('body .view .pn span').css('display', p4);
}

function afterlvl() {
  if ($('body').hasClass('medium-l')) {
    leftSide('block', '10px', 'auto', '16px', '35px', 'none', 'inline');
    rightSide('60px', '6px', '#c1a9a9', 'inline');
    $('body .view .cv .contain').css('line-height', '30px');
  } else if ($('body').hasClass('hard-l')) {
    leftSide('none', 'normal', 'auto', '16px', '35px', 'rotate(7deg)', 'inline');
    rightSide('auto', 'normal', 'none', 'none');
    $('body .view .cv .contain p').css('line-height', '40px');
  } else if ($('body').hasClass('super-l')) {
    leftSide('none', 'normal', '180px', '16px', '35px', 'rotate(7deg)', 'none');
    rightSide('auto', 'normal', '#FFAEAE', 'none');
    $('body .view .cv .contain p').css('line-height', '50px');
  }
}

///// function to load html files with project pages

function loadContent(url, fn) {
  $('.view').empty();
  setTimeout(function() {
    $('.loading').css('z-index', '3');
    opacityAn('.loading', '1');
    opaChange();
    $('.view').load('pages/' + url + '.html', fn);
    $('.view').css('z-index', '0');

    /// uncheck home link to show they have visited this link
    var hmlink = '.big-menu a.' + url;
    $(hmlink).css('text-decoration', 'none');
  }, 100);
}

///// function that combines loading and fading of pages

function gusto(p1, p2, p3) {
  loadContent(p1, function() {
    picOrder();

    setTimeout(function() {
      // debugger;
      afterlvl();
      // $('.loading').css('z-index', '0');
      // opacityAn('.loading', '0');
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
  var site = 'http://mitchellbarton.com';
  // var site = 'http://localhost:8888/mb-v2'
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
      afterlvl();
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
  } else if (currentPg === (site + '/design')) {
    loadContent('design', function() {
      $('.loading').css('z-index', '0');
      afterlvl();
      opacityAn('.loading', '0');
      menuFadeOut();
      $('.view .design').css('display', 'block');
      setTimeout(function() {
        menuOpen();
        opacityAn('.view .design', '1');
        opacityAn('.view .pn', '1');
        $('.view .design .contain').css('transform', 'translateY(30px)');
        $('.view .pn').css('transform', 'translateY(49px)');
        setTimeout(function() {
          opacityAn('.footer', '1');
        }, 600);
        // footerClick('.view .cv'l switchPage);
        pnClick('.view .design', switchPage);
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
    }, 3000);
  });
} else {
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
    }, 1000);
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
    $('.diagonal').css('-webkit-transform', 'rotate(' + rando + 'deg)');
    // $('.diagonal').css('-ms-transform', 'rotate(' + rando + 'deg)');
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

  function changeBig(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
    $('.menu .big-menu').css({'width':p1, 'line-height':p2});
    $('.menu .big-menu li').css('margin-right', p3);
    $('.menu .big-menu li a').css({'color':p4,  'visibility':p5, 'text-decoration':p6});
    if ($('body').hasClass('medium-l')) {
      shuffle(moreColors);
      $('.menu .big-menu li a').each(function(index) {
        $(this).css('background', moreColors[index]);
      });
      $('.menu .big-menu li').css('background', 'none');
    } else if ($('body').hasClass('super-l')) {
      shuffle(moreColors);
      $('.menu .big-menu li').each(function(index) {
        $(this).css('background', moreColors[index]);
      });

      $('.menu .big-menu').mouseenter(function() {
        $('.menu .big-menu li').css('visibility', 'hidden');
      });

      $('.menu .big-menu').mouseleave(function() {
        $('.menu .big-menu li').css('visibility', 'visible');
      });
    } else {
      $('.menu .big-menu li a').css('background', p7);
      $('.menu .big-menu li').css('background', 'none');
    }

    if ($('.menu-open').hasClass('open') && $('body').hasClass('super-l')) {
      $('.big-menu li a .num').css('background', 'white');
    } else if ($('body').hasClass('super-l')){
      $('.big-menu li a .num').css('background', '#c2c2c2');
    } else {
      $('.big-menu li a .num').css('background', 'none');
    }

    $('.menu .big-menu li a .num').css({'visibility':p8, 'height':p9, 'position':p10});
  }

   function changeLittle(p1, p2, p3, p4, p5, p6, p7) {
    $('.menu .little-menu').css({'width':p1, 'position':p2, 'top':p3, 'text-align':p4, 'bottom': p5, 'right':p6});
    $('.menu .little-menu li').css('padding-right', p7);
    if ($('.menu-open').hasClass('open') && $('body').hasClass('super-l')) {
      $('.menu .little-menu li a').css('background', 'white');
    } else if ($('body').hasClass('super-l')) {
      $('.menu .little-menu li a').css('background', '#FFAEAE');
    } else {
      $('.menu .little-menu li a').css('background', 'none');
    }
  }

  function changeMenu(p1, p2, p3) {
    $('body .bk-hm').css('text-align', p1);
    $('body .menu-open .opened, body .menu-open .closed').css('visibility', p2);
    $('body .menu-open').css('top', p3);
  }

  var cook = document.cookie;
  document.cookie = 'diff=easy';
  window.console.log(document.cookie);

  if (w.width() < 500) {

  } else {
    ///// easy level

    $('.diff-text .l1').click(function() {
      $('.diff-text p').removeClass();
      $(this).addClass('sel');
      difft('.easy', '.med', '.hard', '.super', 'easy-l');

      changeBig('75%', 'normal', '30px', '#555', 'visible', 'line-through', 'none', 'visible', 'auto', 'absolute');
      changeLittle('75%', 'static', 'auto', 'initial', 'auto', 'auto', '15px');
      changeMenu('initial', 'visible', '40px');

      leftSide('block', '2.5px', 'auto', '2.5px', 'normal', 'none', 'inline');
      rightSide('auto', '2.5px', 'none', 'inline');

      $('body .view .cv .contain p').css('line-height', '20px');
    });

    //// medium level

    $('.diff-text .l2').click(function() {
      $('.diff-text p').removeClass();
      $(this).addClass('sel');
      difft('.med', '.easy', '.hard', '.super', 'medium-l');

      changeBig('92%', '130px', '130px', 'white', 'visible', 'line-through', null, 'visible', 'auto', 'absolute');
      changeLittle('auto', 'fixed', '40px', 'intial', 'auto', '10px', '15px');
      changeMenu('center', 'visible', '40px');

      leftSide('block', '10px', 'auto', '16px', '35px', 'none', 'inline');
      rightSide('60px', '6px', '#c1a9a9', 'inline');

      $('body .view .cv .contain p').css('line-height', '30px');
    });

    ///// hard level

    $('.diff-text .l3').click(function() {
      $('.diff-text p').removeClass();
      $(this).addClass('sel');
      difft('.hard', '.easy', '.med', '.super', 'hard-l');

      changeBig('85%', '90px', '30px', 'white', 'hidden', 'line-through', 'none', 'visible', 'auto', 'absolute');
      changeLittle('auto', 'fixed', 'auto', 'initial', '20px', '10px', '15px');
      changeMenu('right', 'hidden', '80px');

      leftSide('none', 'normal', 'auto', '16px', '35px', 'rotate(7deg)', 'inline');
      rightSide('auto', 'normal', 'none', 'none');

      $('body .view .cv .contain p').css('line-height', '40px');
    });

    /////// super level

    $('.diff-text .l4').click(function() {
      $('.diff-text p').removeClass();
      $(this).addClass('sel');
      difft('.super', '.easy', '.med', '.hard', 'super-l');

      changeBig('90%', '135px', '100px', 'white', 'hidden', 'none', 'none', 'visible', '16px', 'relative');
      changeLittle('auto', 'fixed', 'auto', 'initial', '0px', '20px', '335px');
      changeMenu('right', 'hidden', '80px');

      leftSide('none', 'normal', '180px', '16px', '35px', 'rotate(7deg)', 'none');
      rightSide('auto', 'normal', '#FFAEAE', 'none');

      $('body .view .cv .contain p').css('line-height', '50px');
    });
  }

  $('.diagonal').click(function() {
    event.preventDefault();
    randoRotate();
  });

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
      if (pos < 150 && pos > -100 ) {
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
      //   // $('.pn').css('background', '#FFAEAE');
      //   $('.pn img').css('opacity', '1');
      //   window.console.log('yup');
      // } else {
      //   // $('.pn').css('background', 'none');
      //   $('.pn img').css('opacity', '0');
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
