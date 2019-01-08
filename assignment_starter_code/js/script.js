$(document).ready(function() {
	console.log("ready")
	$('header nav ul li:first-child').click(function(){
		$(this).parent().toggleClass('slideDown')
	})
});