$(function() {
	
	// Anchor Target Scroll Animation
	
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 600);
        return false;
      }
    }
  });
	
	// Header Shadow

	$(window).scroll(function() {
		var windowScroll = $(this).scrollTop();
		
		if (windowScroll > 304) {
			$(".navbar-fixed-top").addClass("shadow");
		} else {
			$(".navbar-fixed-top").removeClass("shadow");
		}
	});	
});