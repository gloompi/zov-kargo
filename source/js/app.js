'use strict';

$(document).on('ready', () => {
	//init
	$.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
          if (callback) {
            callback();
          }
      });
      return this;
	  }
	});
	(function(){
		$("a[href*='#']").mPageScroll2id();
	}());

	//mnu
	(function(){
		let mnuBtn = $('.mnu__btn'),
				closeBtn = $('.close__mnu'),
				mnuLink = $('.mnu__link');

		closeBtn.on('click', function(e){
			e.preventDefault();
			let mnu = $('.mnu__cover');

			mnu.removeClass('active');
			mnuBtn.removeClass('active');
		});

		mnuLink.on('click', function(e){
			e.preventDefault();
			let mnu = $('.mnu__cover');

			mnu.removeClass('active');
			mnuBtn.removeClass('active');
		});

		mnuBtn.on('click', function(e){
			e.preventDefault();
			let $this = $(this),
					icon = $this.find('i'),
					mnu = $('.mnu__cover');

			$this.toggleClass('active');

			if($this.hasClass('active')){
				mnu.addClass('active');
				closeBtn.animateCss('rotateIn');
			}else{
				mnu.removeClass('active');
			}
		})
	}());

	//scroll
	(function(){
		$(window).on('scroll', function(e){
			let scrollTop = window.pageYOffset,
					header = $('.header'),
					sections = [
						$('.second'), $('.third'), $('.fourth'), $('.fifth'), $('.sixth')
					];

			sections.map(section => {
				if(scrollTop => section.offset().top){
					section.addClass('active')
				}
			})

			if(scrollTop >= 100){
				if(!header.hasClass('active')){
					header.addClass('active');
				}
			}else{
				if(header.hasClass('active')){
					header.removeClass('active');
				}
			}
		})
	}());
});