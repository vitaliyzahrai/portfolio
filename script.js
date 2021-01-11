$(document).ready(function(){
  $('.header_burger').click(function(event) {
    $('.header_burger,.header_menu_ul').toggleClass('active');
    $('html').toggleClass('lock');
  });
   $('.menu_item').click(function(event) {
    $('.header_burger,.header_menu_ul,.menu_item').removeClass('active');
    $('html').removeClass('lock');
  });
});


$('.counter').each(function() {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		dutation: 7000,
		easing: 'swing',
		step: function(now) {
			$(this).text(Math.ceil(now));
		}
	});
});


$('.percent').each(function() {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		dutation: 8000,
		easing: 'linear',
		step: function(now) {
			$(this).text(Math.ceil(now) + '%');
		}
	});
});


$('.skills_per').each(function(){
	var $this = $(this);
	var per = $this.attr('per');
	$this.css("width",per+'%');
	$({animatedValue: 0}).animate({animatedValue: per},{
		duration: 1000,
		step: function(){
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		},
		complete: function(){
			$this.attr('per', Math.floor(this.animatedValue) + '%');
		},
	});
});