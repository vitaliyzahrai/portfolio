$(document).ready(function(){

  $('.header_burger').click(function(event) {
    $('.header_burger,.header_menu_nav').toggleClass('active');
    $('html').toggleClass('lock');
  });

   $('.menu_item a').click(function(event) {

   	var itemID = $(this).attr('href');
   	var sectionoffset = -2;
   	if ($(window).width() <= 860) {
   		sectionoffset =50;
   	}
   	
   	$("body,html").animate({
   		scrollTop: $(itemID).offset().top - sectionoffset
   	}, 100);

    $('.header_burger,.header_menu_nav,.menu_item').removeClass('active');
    $('html').removeClass('lock');
  });


  (function() {

		var navLinks = $('.header_menu_ul .menu_item');
		var sections = $('section');
		var documentEl = $(document);

				documentEl.on('scroll', function() {
					var currentScrollPos = documentEl.scrollTop();

					sections.each(function() {

						var self = $(this);
						var targetClass = self.attr('class');
						var selfHeight = self.height();
						var selfPosTop = self.offset().top;

						if (selfPosTop < currentScrollPos && (selfPosTop + selfHeight) >= currentScrollPos) {
							navLinks.removeClass('active');
							$('.' + targetClass + '_marker').addClass('active');
						}
					});
					
				});

	})();


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



});



// (function() {

// 	var navLinks = $('.header_menu_ul .menu_item');
// 	var sections = $('section');
// 	var documentEl = $(document);

// 			documentEl.on('scroll', function() {
// 				var currentScrollPos = documentEl.scrollTop();

// 				sections.each(function() {

// 					var self = $(this);
// 					var targetClass = self.attr('class');
// 					var selfHeight = self.height();
// 					var selfPosTop = self.offset().top;

// 					if (selfPosTop < currentScrollPos && (selfPosTop + selfHeight) >= currentScrollPos) {
// 						navLinks.removeClass('active');
// 						$('.' + targetClass + '_marker').addClass('active');
// 					}
// 				});
				
// 			});

// })();


// $('.counter').each(function() {
// 	$(this).prop('Counter',0).animate({
// 		Counter: $(this).text()
// 	}, {
// 		dutation: 7000,
// 		easing: 'swing',
// 		step: function(now) {
// 			$(this).text(Math.ceil(now));
// 		}
// 	});
// });


// $('.percent').each(function() {
// 	$(this).prop('Counter',0).animate({
// 		Counter: $(this).text()
// 	}, {
// 		dutation: 8000,
// 		easing: 'linear',
// 		step: function(now) {
// 			$(this).text(Math.ceil(now) + '%');
// 		}
// 	});
// });


// $('.skills_per').each(function(){
// 	var $this = $(this);
// 	var per = $this.attr('per');
// 	$this.css("width",per+'%');
// 	$({animatedValue: 0}).animate({animatedValue: per},{
// 		duration: 1000,
// 		step: function(){
// 			$this.attr('per', Math.floor(this.animatedValue) + '%');
// 		},
// 		complete: function(){
// 			$this.attr('per', Math.floor(this.animatedValue) + '%');
// 		},
// 	});
// });