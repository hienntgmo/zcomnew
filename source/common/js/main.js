(function(window, document, $){
	var flag = 0;
	$('.btn-click-js').click(function(event) {
		if (flag == 1) {
			$(this).siblings().css('height', '557px');
			$(this).find('.btn-show-js').css('display', 'block');
			$(this).find('.btn-hide-js').css('display', 'none');
			flag = 0;
		}
		else {
			$(this).siblings().css('height', 'auto');
			$(this).find('.btn-show-js').css('display', 'none');
			$(this).find('.btn-hide-js').css('display', 'block');
			flag = 1;
		}
		return false;
	});
	
	$('.nav-global-list-js li').hover(function() {
		if($(this).children().hasClass('nav-global-sub-js')) {
			$(this).find('.nav-global-sub-js').show();
			$(this).closest('.nav-global').css('height', 'auto');
		}
	}, function() {
		if($(this).children().hasClass('nav-global-sub-js')) {
			$(this).find('.nav-global-sub-js').hide();
			$(this).closest('.nav-global').css('height', '35px');
		}
	});


})(window, window.document, window.jQuery);
