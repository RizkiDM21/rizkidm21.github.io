
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".utamabngt").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var utamabngtID = el.id.split('_')[1];
		$('.utamabngt#' + utamabngtID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.utamabngt:visible').fadeOut('medium', function() {
		$('.utamabngt#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});