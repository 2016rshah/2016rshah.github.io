function whenReady(){
  
  console.log("ready")
  replace(document.getElementById("actual1"), document.getElementById("placeholder1"))
  replace(document.getElementById("actual2"), document.getElementById("placeholder2"))


  function replace(actual, placeholder){
    actual.addEventListener("load", function(){
      placeholder.style.display="none";
    }, false)
  }

  function toggleHeart(){
    var heart = document.getElementById("heart")
    toggle(heart, "fa-heart")
    toggle(heart, "fa-heart-o")
  }
}