$(document).ready(function() {

  ///// BROWSWER HISTORY STUFF

  function loadContent(url) {
    $('.view').load(url);
  }

  $('.big-menu a').click(function(e) {
    e.preventDefault();
    var href = this.href;
    var $this = $(this);
    // var page = href.substring(href.lastIndexOf('/') + 1);

    $('a').removeClass('current');
    $this.addClass('current');
    loadContent(href);
    history.pushState('', $this.text, href);

    // window.console.log(page + ' this is the href');
  });

  window.onpopstate = function() {
    var path = location.pathname;
    if (path === "/mb-v2/") {
      $('.view').empty();
    }

    loadContent(path);

    var page = path.substring(location.pathname.lastIndexOf('/') + 1);
    $('a').removeClass('current');
    $('[href="' + page + '"]').addClass('current');

    window.console.log(path + ' this is the path');
  };





  
});