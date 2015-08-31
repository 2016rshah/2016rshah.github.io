// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function() {
	var intervalID = setInterval(function(){
		toggleHeart()
	}, 860);
});
function toggleHeart(){
	$(".heart").toggleClass("glyphicon-heart")
	$(".heart").toggleClass("glyphicon-heart-empty")
}

$(window).load(function(){
  $(".loader").fadeOut(2000, function(){
  	$(".content").fadeIn("slow");
  });
});