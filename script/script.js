jQuery(document).ready(function($){
	var contentSections = $('.section'),
		navigationItems = $('.vertical-nav a');
	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.vertical-nav a[href="#' + $this.attr('id')+'"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && 
                ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}
	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	800
        );
    }
});