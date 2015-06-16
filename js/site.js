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
      $(".link-2").removeClass(undockedSize)
      $(".link-2").addClass(dockedSize)
      $(".link-3").removeClass(undockedSize)
      $(".link-3").addClass(dockedSize)
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      document.getElementById("link-1").style.display = 'none';


      $(".link-2").removeClass(dockedSize)
      $(".link-2").addClass(undockedSize)
      $(".link-3").removeClass(dockedSize)
      $(".link-3").addClass(undockedSize)
      $body.removeClass('has-docked-nav')
    }
  }

  function toggleHeart(){
    $(".heart").toggleClass("fa-heart")
    $(".heart").toggleClass("fa-heart-o")
  }

  init();

});