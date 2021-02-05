$(".lazy").slick({
		lazyLoad: 'ondemand', // ondemand progressive anticipated
		infinite: true,
		dots: false,
		autoplay: true,
        arrows: false,
        speed: 300,
		slidesToShow: 1,
		autoplaySpeed: 5000,
        adaptiveHeight: true
	});
$(".reviews__list").slick({
	dots: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 450,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});