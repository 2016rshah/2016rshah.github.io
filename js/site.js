$(document).ready(function() {

  // Variables
  var undockedSize = "six"
  var dockedSize = "four"

  var nav = document.getElementById("navbar"),
      body = document.body,
      $window = $(window),
      navOffsetTop = offset(nav).top,
      $document = $(document)

  function init() {
    $window.on('scroll', onScroll) //fix this
    $window.on('resize', resize) //fix this


    setInterval(function(){
      toggleHeart()
    }, 860);
  }

  function resize() {
    remClass(body, 'has-docked-nav')
    navOffsetTop = offset(nav).top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !hasClass(body,'has-docked-nav')) { //fix this
      document.getElementById("link-1").style.display = 'block';
      var link2 = document.getElementById("link-2")
      var link3 = document.getElementById("link-3")
      remClass(link2, undockedSize)
      addClass(link2, dockedSize)
      remClass(link3, undockedSize)
      addClass(link3, dockedSize)

      addClass(body, 'has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && !hasClass(body, 'has-docked-nav')) { //fix this
      document.getElementById("link-1").style.display = 'none';
      var link2 = document.getElementById("link-2")
      var link3 = document.getElementById("link-3")
      remClass(link2, dockedSize)
      addClass(link2, undockedSize)
      remClass(link3, dockedSize)
      addClass(link3, undockedSize)

      remClass(body, 'has-docked-nav')
    }
  }

  function toggleHeart(){
    var heart = document.getElementById("heart")
    toggle(heart, "fa-heart")
    toggle(heart, "fa-heart-o")
  }

  init();

});