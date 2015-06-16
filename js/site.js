$(document).ready(function() {

  // Variables
  var undockedSize = "six"
  var dockedSize = "four"

  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top,
      $document = $(document)

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $('a[href^="#"]').on('click', smoothScroll)


    setInterval(function(){
      toggleHeart()
    }, 860);
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      document.getElementById("link-1").style.display = 'block';
      var link2 = document.getElementById("link-2")
      var link3 = document.getElementById("link-3")
      remClass(link2, undockedSize)
      addClass(link2, dockedSize)
      remClass(link3, undockedSize)
      addClass(link3, dockedSize)
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      document.getElementById("link-1").style.display = 'none';
      var link2 = document.getElementById("link-2")
      var link3 = document.getElementById("link-3")
      remClass(link2, dockedSize)
      addClass(link2, undockedSize)
      remClass(link3, dockedSize)
      addClass(link3, undockedSize)
      $body.removeClass('has-docked-nav')
    }
  }

  function addClass(el, className){
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
  }

  function remClass(el, className){
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  function toggleHeart(){
    $(".heart").toggleClass("fa-heart")
    $(".heart").toggleClass("fa-heart-o")
  }

  init();

});