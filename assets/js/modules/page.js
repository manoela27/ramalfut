(function($){

	var containerdeparts = $(".slick__departs")
	


	containerdeparts.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

						}
			
			}]
	});

	function busca(value) {
		value = value.toLowerCase();
		
		$('.col-md-3').each(function() {
			var $item = $(this);
			var searchTerm = $item.data('target').toLowerCase();
			
			if (searchTerm.includes(value)) {
				$item.removeClass('d-none');
			} else {
				$item.addClass('d-none');
			}
		});
	}
	
	$('#search').on('input', function () {
		busca($(this).val());
	});
	
    function multiSlideAdaptiveHeight(slider) {

        var activeSlides = [];
        var tallestSlide = 0;
        
        setTimeout(function() {
        
            $('.slick-track .slick-active', slider).each(function(item) {
                activeSlides[item] = $(this).outerHeight();
            });
        
            activeSlides.forEach(function(item) {
            	if (item > tallestSlide) {
					tallestSlide = item;
				}
			});
        
			$('.slick-list', slider).height(tallestSlide);
        }, 10);
    }

})(jQuery);

